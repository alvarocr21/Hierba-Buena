"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Provincia, Canton, Distrito,Perfil,Producto,Perfil_Producto
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

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

    return jsonify(all_user), 200

#obtener un usuario
@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        raise APIException('This user is not in the database', status_code=404)
    result = user.serialize()
    return jsonify(result), 200

@app.route('/user', methods=['POST'])
def add_user():
    request_body = request.get_json()
    user = User(Name=request_body["Name"],Lastname=request_body["Lastname"],email=request_body["email"],password=request_body["password"],is_active=request_body["is_active"])
    db.session.add(user)
    db.session.commit()
   
    return jsonify({"Respuesta":"Los datos se almacenaron satisfactoriamente"}), 200

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200