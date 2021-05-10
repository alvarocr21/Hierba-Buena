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
        user.password = __create_password(User,request_body["password"])
   
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
    
    #Validando email correcto
    email_validate= email_valid(request_body["email"])
    if email_validate == False:
        return json_respuestas('La estructura del email no es la correcta', 400)

    #Obtenemos el valor de password de la BD
    user = User.query.filter_by(email = request_body["email"]).first()
    

    #Validando existencia de usuario
    if user is not None:
        result = user.serialize_valida()
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

#Obtener un canton
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
################
# obtener todas los distritos
@api.route('/distrito', methods=['GET'])
def get_distritos():
    
    result = Distrito.query.all()

    # map the results and your list of people  inside of the all_user variable
    all_distrito= list(map(lambda x: x.serialize(), result))

    return json_respuestas(all_distrito,200,"data")

#Obtener un distrito
@api.route('/distrito/<int:distrito_id>', methods=['GET'])
def get_distrito(distrito_id):
   
    distrito = Distrito.query.get(distrito_id)
    #Existe distrito
    if distrito is None:
        return json_respuestas('Este recurso no se encuentra en base de datos ', 404)

    result = distrito.serialize()

    return json_respuestas(result,200,"data")

#registrar un distrito
@api.route('/distrito', methods=['POST'])
def add_distrito():

    request_body = request.get_json()
    
    #Validando existencia de campos importantes
    if 'name' not in request_body:
        return json_respuestas('Se debe especificar un Nombre', 400)
    if 'id_canton' not in request_body:
        return json_respuestas('Se debe especificar el canton al que pertenece', 400)
    
 
    #Almacenando el distrito
    distrito = Distrito(name=request_body["name"],id_canton=request_body["id_canton"])
    db.session.add(distrito)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

#actualizar una distrito
@api.route('/distrito/<int:distrito_id>', methods=['PUT'])
def update_distrito(distrito_id):

    request_body = request.get_json()

    distrito = Distrito.query.get(distrito_id)
    if distrito is None:
        return json_respuestas('Este recurso no se encuentra en base de datos', 404)
  
      
    #Validando existencia de campos importantes
    if 'name' in request_body:
        distrito.name = request_body["name"]
    if 'id_canton' in request_body:
        distrito.id_canton = request_body["id_canton"]
  
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 
################

#Obtener todos los perfiles
@api.route('/perfil',methods=['GET'])
def get_perfiles():
       
    result = Perfil.query.all()

    # map the results and your list of people  inside of the all_user variable
    all_perfil= list(map(lambda x: x.serialize(), result))

    return json_respuestas(all_perfil,200,"data")

#Obtener un perfil
@api.route('/perfil/<int:perfil_id>', methods=['GET'])
def get_perfil(perfil_id):
   
    perfil = Perfil.query.get(perfil_id)
    #Existe distrito
    if perfil is None:
        return json_respuestas('Este recurso no se encuentra en base de datos ', 404)

    result = perfil.serialize()

    return json_respuestas(result,200,"data")


#registrar un perfil
@api.route('/perfil', methods=['POST'])
def add_perfil():

    request_body = request.get_json()
    
    #Validando existencia de campos importantes
    if 'id_user' not in request_body or request_body["id_user"]=="":
        return json_respuestas('Se debe especificar un usuario', 400)
    elif 'id_provincia' not in request_body or request_body["id_provincia"]=="":
        return json_respuestas('Se debe especificar una provincia', 400)
    elif 'id_canton' not in request_body or request_body["id_canton"]=="":
        return json_respuestas('Se debe especificar un cantón', 400)
    elif 'id_distrito' not in request_body or request_body["id_distrito"]=="":
        return json_respuestas('Se debe especificar un distrito', 400)
    elif 'phone' not in request_body or request_body["phone"]=="":
        return json_respuestas('Se debe especificar un telefono', 400)
    elif 'coberturaKm' not in request_body or request_body["coberturaKm"]=="":
        return json_respuestas('Se debe especificar una cobertura en Kilometros', 400)
    elif 'foto_perfil' not in request_body or request_body["foto_perfil"]=="":
        return json_respuestas('Se debe especificar una foto de perfil', 400)
    elif 'coordenadas' not in request_body or request_body["coordenadas"]=="":
        return json_respuestas('Se debe especificar una ubicación', 400)
    
    if esNumero(request_body["coberturaKm"])==False:
        return json_respuestas('Solo se pueden digitar números en la cobertura Km', 400)
  
    #Almacenando el usuario
    perfil = Perfil(id_user=request_body["id_user"],id_provincia=request_body["id_provincia"],id_canton=request_body["id_canton"],id_distrito=request_body["id_distrito"],phone=request_body["phone"],coberturaKm=request_body["coberturaKm"],foto_perfil=request_body["foto_perfil"],coordenadas=request_body["coordenadas"])
    db.session.add(perfil)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

#actualizar un perfil
@api.route('/perfil/<int:perfil_id>', methods=['PUT'])
def update_perfil(perfil_id):
    request_body = request.get_json()

    perfil = Perfil.query.get(perfil_id)
    if perfil is None:
        return json_respuestas('Este recurso no se encuentra en base de datos', 404)
  
      
    #Validando existencia de campos importantes
    if 'id_user' in request_body:
        perfil.id_user = request_body["id_user"]
    if 'id_provincia' in request_body:
        perfil.id_provincia = request_body["id_provincia"]
    if 'id_canton' in request_body:
        perfil.id_canton = request_body["id_canton"]
    if 'id_distrito' in request_body:
        perfil.id_distrito = request_body["id_distrito"]
    if 'phone' in request_body:
        perfil.phone = request_body["phone"]
    if 'coberturaKm' in request_body:
        perfil.coberturaKm = request_body["coberturaKm"]
    if 'foto_perfil' in request_body:
        perfil.foto_perfil = request_body["foto_perfil"]
    if 'coordenadas' in request_body:
        perfil.coordenadas = request_body["coordenadas"]
  
    if esNumero(request_body["coberturaKm"])==False:
        return json_respuestas('Solo se pueden digitar números en la cobertura Km', 400)

    db.session.commit()
    
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 
###################

##################
#Obtener todos los productos
@api.route('/producto',methods=['GET'])
def get_productos():
       
    result = Producto.query.all()

    # map the results and your list of people  inside of the all_user variable
    all_producto= list(map(lambda x: x.serialize(), result))

    return json_respuestas(all_producto,200,"data")

#Obtener un producto
@api.route('/producto/<int:producto_id>', methods=['GET'])
def get_producto(producto_id):
   
    producto = Producto.query.get(producto_id)
    #Existe distrito
    if producto is None:
        return json_respuestas('Este recurso no se encuentra en base de datos ', 404)

    result = producto.serialize()

    return json_respuestas(result,200,"data")


#registrar un producto
@api.route('/producto', methods=['POST'])
def add_producto():

    request_body = request.get_json()
    
    #Validando existencia de campos importantes
    if 'name' not in request_body or request_body["name"]=="":
        return json_respuestas('Se debe especificar un nombre', 400)
    elif 'photo' not in request_body or request_body["photo"]=="":
        return json_respuestas('Se debe agregar una foto', 400)
    
  
    #Almacenando el usuario
    producto = Producto(name=request_body["name"],photo=request_body["photo"])
    db.session.add(producto)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

#actualizar un producto
@api.route('/producto/<int:producto_id>', methods=['PUT'])
def update_producto(producto_id):
    request_body = request.get_json()

    producto = Producto.query.get(producto_id)
    if producto is None:
        return json_respuestas('Este recurso no se encuentra en base de datos', 404)

    #Validando existencia de campos importantes
    if 'name' in request_body:
         producto.name = request_body["name"]
        
    if 'photo' in request_body:
         producto.photo = request_body["photo"]
  
    db.session.commit()
   
    return json_respuestas("Los datos se actualizaron satisfactoriamente",200)


#Obtener todos los productos
@api.route('/perfil_producto',methods=['GET'])
def get_perfil_productos():
       
    result = Perfil_Producto.query.all()

    # map the results and your list of people  inside of the all_user variable
    all_perfil_producto= list(map(lambda x: x.serialize(), result))

    return json_respuestas(all_perfil_producto,200,"data")

#Obtener un producto
@api.route('/perfil_producto/<int:perfil_producto_id>', methods=['GET'])
def get_perfil_producto(perfil_producto_id):
   
    perfil_producto = Perfil_Producto.query.get(perfil_producto_id)
    #Existe distrito
    if perfil_producto is None:
        return json_respuestas('Este recurso no se encuentra en base de datos ', 404)

    result = perfil_producto.serialize()

    return json_respuestas(result,200,"data")

#Ingresar un Producto_Perfil
@api.route('/perfil_producto',methods=['POST'])
def add_perfil_producto():
    request_body = request.get_json()
    
    #Validando existencia de campos importantes
    if 'id_perfil' not in request_body or request_body["id_perfil"]=="":
        return json_respuestas('Se debe especificar un perfil', 400)
    elif 'id_producto' not in request_body or request_body["id_producto"]=="":
        return json_respuestas('Se debe agregar un producto', 400)
    elif 'price' not in request_body or request_body["price"]=="":
        return json_respuestas('Se debe agregar un precio', 400)
    elif 'detalle' not in request_body or request_body["detalle"]=="":
        return json_respuestas('Se debe agregar un detalle', 400)
    
    if esNumero(request_body["price"])==False:
        return json_respuestas('Solo se pueden digitar números en el precio', 400)
  
    #Almacenando el Producto_Perfil
    perfil_producto = Perfil_Producto(id_perfil=request_body["id_perfil"],id_producto=request_body["id_producto"],price=request_body["price"],detalle=request_body["detalle"])
    db.session.add(perfil_producto)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200) 

#Actualizar un Producto_Perfil
@api.route('/perfil_producto/<int:perfil_producto_id>',methods=['PUT'])
def update_perfil_producto(perfil_producto_id):
    request_body = request.get_json()

    producto_perfil = Perfil_Producto.query.get(perfil_producto_id)
    if producto_perfil is None:
        return json_respuestas('Este recurso no se encuentra en base de datos', 404)
        
    #Validando existencia de campos a actualizar
    if 'id_perfil' in request_body:
        producto_perfil.id_perfil = request_body["id_perfil"]
    if 'id_producto' in request_body:
        producto_perfil.id_producto = request_body["id_producto"]
    if 'price' in request_body:
        producto_perfil.price = request_body["price"]
    if 'detalle' in request_body:
        producto_perfil.detalle = request_body["detalle"]
    
    if esNumero(request_body["price"])==False:
        return json_respuestas('Solo se pueden digitar números en el precio', 400)
  
    #Almacenando el usuario
    perfil_producto = Perfil_Producto(id_perfil=request_body["id_perfil"],id_producto=request_body["id_producto"],price=request_body["price"],detalle=request_body["detalle"])
    db.session.add(perfil_producto)
    db.session.commit()
   
    return json_respuestas("Los datos se almacenaron satisfactoriamente",200)

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

#Valida números
def esNumero(valor):
    try:
        return float(valor)
    except:
        return False
        
    
#Mensajes de respuesta
def json_respuestas(mensaje,codigo,tipo="mensaje"):

    if tipo=="mensaje":
        return jsonify({"message":mensaje}), codigo
    else:
        return jsonify({"Data":mensaje}), codigo



