"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Provincia, Canton, Distrito,Perfil,Producto,Perfil_Producto
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import re
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)
CORS(api)

# Handle/serialize errors like a JSON object
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code
    


#obtener todos los usuarios
@api.route('/user', methods=['GET'])
def get_users():

    # get all the user
    result = User.query.all()

    # map the results and your list of people  inside of the all_user variable
    all_user= list(map(lambda x: x.serialize(), result))

    return json_respuestas(all_user,200,"data")


#obtener un usuario
@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        raise APIException('This user is not in the database', status_code=404)
    result = user.serialize()
    return jsonify(result), 200


#registrar un usuario
@api.route('/user', methods=['POST'])
def add_user():

    request_body = request.get_json()
    
    #Validando existencia de campos importantes
    if 'name' not in request_body:
        raise APIException('Se debe especificar un Nombre', status_code=400)
    elif 'lastname' not in request_body:
        raise APIException('Se debe especificar un Apellido', status_code=400)
    elif 'email' not in request_body:
        raise APIException('Se debe especificar un email', status_code=400)
    elif 'password' not in request_body:
        raise APIException('Se debe especificar un password', status_code=400)
    
    #Validando email correcto
    email_validate= email_valid(request_body["email"])
    if email_validate == False:
        raise APIException('La estructura del email no es la correcta', status_code=400) 

    user = User(name=request_body["name"],lastname=request_body["lastname"],email=request_body["email"],password=__create_password(User,request_body["password"]),is_active=request_body["is_active"])
    db.session.add(user)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

#Autenticar ingreso a la aplicación.
@api.route('/login', methods=['POST'])
def login():
  
    request_body = request.get_json()

    #Validando existencia de campos importantes
    if 'email' not in request_body:
        raise APIException('Se debe especificar un email', status_code=400)
    elif 'password' not in request_body:
        raise APIException('Se debe especificar un password', status_code=400)

    user = User.query.filter_by(email = request_body["email"]).first()
    result = user.serialize_valida()

    #Validando existencia de usuario
    if user is not None:
        #Validando password usuario
        if __verify_password(result["password"],request_body["password"]):
            return json_respuestas("Bienvenido "+result["name"]+" "+ result["lastname"],200)
        else:
            return json_respuestas("Las credenciales son incorrectas",400)
    else:
        return json_respuestas("Las credenciales son incorrectas",400)


#Funciones utiles

#Validar correo
def email_valid(email):
    expresion_regular = r"(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
    return re.match(expresion_regular, email) is not None

#Encripta password
def __create_password(User,password):
    return generate_password_hash(password)

#Valida password
def __verify_password(BDpassword,password):
    return check_password_hash(BDpassword,password)

def json_respuestas(mensaje,codigo,tipo="mensaje"):

    if tipo=="mensaje":
        return jsonify({"Respuesta":mensaje}), codigo
    else:
        return jsonify({"Data":mensaje}), codigo

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200