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
        return json_respuestas('Este recurso no se encuentra en base de datos ', 404)
    result = user.serialize()
    return json_respuestas(result,200,"data")


#registrar un usuario
@api.route('/user', methods=['POST'])
def add_user():

    request_body = request.get_json()
    
    #Validando existencia de campos importantes
    if 'name' not in request_body or request_body["name"]=="":
        return json_respuestas('Se debe especificar un Nombre', 400)
    elif 'lastname' not in request_body or request_body["lastname"]=="":
        return json_respuestas('Se debe especificar un Apellido', 400)
    elif 'email' not in request_body or request_body["email"]=="":
        return json_respuestas('Se debe especificar un email', 400)
    elif 'password' not in request_body or request_body["password"]=="":
        return json_respuestas('Se debe especificar un password', 400)
    
    #Validando email correcto
    email_validate= email_valid(request_body["email"])
    if email_validate == False:
        return json_respuestas('La estructura del email no es la correcta', 400) 

    #Validando email existente
    email_exist = User.query.filter_by(email = request_body["email"]).first()
    if email_exist is not None:
        return json_respuestas('El correo ya existe en nuestra base de datos', 400) 

    #Almacenando el usuario
    user = User(name=request_body["name"],lastname=request_body["lastname"],email=request_body["email"],password=__create_password(User,request_body["password"]),is_active=True)
    db.session.add(user)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

#Actualizar un usuario
@api.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    request_body = request.get_json()

    user = User.query.get(user_id)

    if user is None:
        return json_respuestas('Este recurso no se encuentra en base de datos', 404)

   
    
#Actualizando campos ingresados
    if 'name' in request_body:
        user.name = request_body["name"]
    
    if 'lastname' in request_body:
        user.lastname = request_body["lastname"]
    
    if 'email' in request_body:
        #Validando email correcto
        email_validate= email_valid(request_body["email"])
        if email_validate == False:
            return json_respuestas('La estructura del email no es la correcta', 400)
        #Validando email existente
        email_exist = User.query.filter_by(email = request_body["email"]).first()
        if email_exist is not None:
            return json_respuestas('El correo ya existe en nuestra base de datos', 400)
       
        user.email = request_body["email"]
    
    if 'password' in request_body:
        user.password = request_body["password"]
   
    db.session.commit()
   
    return json_respuestas("Los datos se actualizaron satisfactoriamente",200) 

#Eliminar un usuario
@api.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)

    if user is None:
        return json_respuestas('Este recurso no se encuentra en base de datos', 404)

    user.is_active = False
    db.session.commit()
    
    return json_respuestas("El recurso fue eliminado satisfactoriamente",200) 

#Autenticar ingreso a la aplicación.
@api.route('/login', methods=['POST'])
def login():
  
    request_body = request.get_json()

    #Validando existencia de campos importantes
    if 'email' not in request_body:
        return json_respuestas('Se debe especificar un email', 400)
    if 'password' not in request_body:
        return json_respuestas('Se debe especificar un password', 400)
    
    #Obtenemos el valor de password de la BD
    user = User.query.filter_by(email = request_body["email"]).first()
    result = user.serialize_valida()

    #Validando existencia de usuario
    if user is not None:
        #Validando password usuario
        if result["is_active"]==True:
            if __verify_password(result["password"],request_body["password"]):
                return json_respuestas("Bienvenido "+result["name"]+" "+ result["lastname"],200)
            else:
                return json_respuestas("Las credenciales son incorrectas",400)
        else:
            return json_respuestas("El usuario se encuentra inactivo",400)
    else:
        return json_respuestas("Las credenciales son incorrectas",400)

# obtener todas las provincias
@api.route('/provincia', methods=['GET'])
def get_provincias():
    
    result = Provincia.query.all()

    # map the results and your list of people  inside of the all_user variable
    all_provincia= list(map(lambda x: x.serialize(), result))

    return json_respuestas(all_provincia,200,"data")

#Obtener una provincia
@api.route('/provincia/<int:provincia_id>', methods=['GET'])
def get_provincia(provincia_id):
   
    provincia = Provincia.query.get(provincia_id)
    #Existe provincia
    if provincia is None:
        return json_respuestas('Este recurso no se encuentra en base de datos ', 404)

    result = provincia.serialize()

    return json_respuestas(result,200,"data")


#registrar una provincia
@api.route('/provincia', methods=['POST'])
def add_provincia():

    request_body = request.get_json()
    
    #Validando existencia de campos importantes
    if 'name' not in request_body:
        return json_respuestas('Se debe especificar un Nombre', 400)
    
    #Validando provincia existente
    provincia_exist = Provincia.query.filter_by(name = request_body["name"]).first()
    if provincia_exist is not None:
        return json_respuestas('La provincia ya existe en nuestra base de datos', 400) 

    #Almacenando el usuario
    provincia = Provincia(name=request_body["name"])
    db.session.add(provincia)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

#actualizar una provincia
@api.route('/provincia/<int:provincia_id>', methods=['PUT'])
def update_provincia(provincia_id):

    request_body = request.get_json()

    provincia = Provincia.query.get(provincia_id)
    if provincia is None:
        return json_respuestas('Este recurso no se encuentra en base de datos', 404)
  
  #Validando provincia existente
    provincia_exist = Provincia.query.filter_by(name = request_body["name"]).first()
    if provincia_exist is not None:
        return json_respuestas('La provincia ya existe en nuestra base de datos', 400) 
    
    #Validando existencia de campos importantes
    if 'name' in request_body:
        provincia.name = request_body["name"]
  

    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

################
# obtener todas los cantones
@api.route('/canton', methods=['GET'])
def get_cantons():
    
    result = Canton.query.all()

    # map the results and your list of people  inside of the all_user variable
    all_canton= list(map(lambda x: x.serialize(), result))

    return json_respuestas(all_canton,200,"data")

#Obtener una canton
@api.route('/canton/<int:canton_id>', methods=['GET'])
def get_canton(canton_id):
   
    canton = Canton.query.get(canton_id)
    #Existe canton
    if canton is None:
        return json_respuestas('Este recurso no se encuentra en base de datos ', 404)

    result = canton.serialize()

    return json_respuestas(result,200,"data")


#registrar una canton
@api.route('/canton', methods=['POST'])
def add_canton():

    request_body = request.get_json()
    
    #Validando existencia de campos importantes
    if 'name' not in request_body:
        return json_respuestas('Se debe especificar un Nombre', 400)
    if 'id_provincia' not in request_body:
        return json_respuestas('Se debe especificar un la provincia a la que pertenece', 400)
    
    #Validando canton existente
    canton_exist = Canton.query.filter_by(name = request_body["name"]).first()
    if canton_exist is not None:
        return json_respuestas('El cantón ya existe en nuestra base de datos', 400) 

    #Almacenando el usuario
    canton = Canton(name=request_body["name"],id_provincia=request_body["id_provincia"])
    db.session.add(canton)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

#actualizar una canton
@api.route('/canton/<int:canton_id>', methods=['PUT'])
def update_canton(canton_id):

    request_body = request.get_json()

    canton = Canton.query.get(canton_id)
    if canton is None:
        return json_respuestas('Este recurso no se encuentra en base de datos', 404)
  
      
    #Validando existencia de campos importantes
    if 'name' in request_body:
        canton.name = request_body["name"]
    if 'id_provincia' in request_body:
        canton.id_provincia = request_body["id_provincia"]
  
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 
################

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

#Mensajes de respuesta
def json_respuestas(mensaje,codigo,tipo="mensaje"):

    if tipo=="mensaje":
        return jsonify({"message":mensaje}), codigo
    else:
        return jsonify({"Data":mensaje}), codigo



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200