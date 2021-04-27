from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    lastname = db.Column(db.String(20), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    perfil = db.relationship('Perfil', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "is_active": self.is_active,
            "perfil": list(map(lambda x: x.serialize(), self.perfil)),
            
        }

    def serialize_valida(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "password": self.password,
            "is_active": self.is_active,
        }

class Provincia(db.Model):
    __tablename__ = 'provincia'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    canton = db.relationship('Canton', lazy=True)
    perfil = db.relationship('Perfil', lazy=True)

    def __repr__(self):
        return '<Name %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "canton": list(map(lambda x: x.serialize(), self.canton)),
            "perfil": list(map(lambda x: x.serialize(), self.perfil)),
            # do not serialize the password, its a security breach
            #probando
        }
class Canton(db.Model):
    __tablename__ = 'canton'
    id = db.Column(db.Integer, primary_key=True)
    id_provincia = db.Column(db.Integer,db.ForeignKey("provincia.id"))
    name = db.Column(db.String(20), unique=False, nullable=False)
    distrito = db.relationship('Distrito', lazy=True)
    perfil = db.relationship('Perfil', lazy=True)
    def __repr__(self):
        return '<Name %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "id_provincia": self.id_provincia,
            "name": self.name,
            "distrito": list(map(lambda x: x.serialize(), self.distrito)),
            "perfil": list(map(lambda x: x.serialize(), self.perfil)),
            # do not serialize the password, its a security breach
            #probando
        }

class Distrito(db.Model):
    __tablename__ = 'distrito'
    id = db.Column(db.Integer, primary_key=True)
    id_canton = db.Column(db.Integer,db.ForeignKey("canton.id"))
    name = db.Column(db.String(20), unique=False, nullable=False)
    perfil = db.relationship('Perfil', lazy=True)
    def __repr__(self):
        return '<Name %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "id_canton": self.id_canton,
            "name": self.name,
            "perfil": list(map(lambda x: x.serialize(), self.perfil))
            # do not serialize the password, its a security breach
            
        }

class Perfil(db.Model):
    __tablename__ = 'perfil'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer,db.ForeignKey("user.id"))
    id_provincia = db.Column(db.Integer,db.ForeignKey("provincia.id"))
    id_canton = db.Column(db.Integer,db.ForeignKey("canton.id"))
    id_distrito = db.Column(db.Integer,db.ForeignKey("distrito.id"))
    phone = db.Column(db.String(20), unique=False, nullable=False)
    coberturaKm = db.Column(db.Numeric,unique=False, nullable=False)
    foto_perfil = db.Column(db.String(255), unique=False, nullable=False)
    coordenadas = db.Column(db.String(255), unique=False, nullable=False)
    perfil_producto = db.relationship('Perfil_Producto', lazy=True)

    def __repr__(self):
        return '<Id %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "id_provincia": self.id_provincia,
            "id_canton": self.id_canton,
            "id_distrito": self.id_distrito,
            "phone": self.phone,
            "coberturaKm": str(self.coberturaKm),
            "foto_perfil": self.foto_perfil,
            "coordenadas": self.coordenadas,
            "perfil_producto": list(map(lambda x: x.serialize(), self.perfil_producto)),
            # do not serialize the password, its a security breach
            
        }

class Producto(db.Model):
    __tablename__ = 'producto'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    photo = db.Column(db.String(255), unique=False, nullable=False)
    perfil_producto = db.relationship('Perfil_Producto', lazy=True)

    def __repr__(self):
        return '<Name %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "photo": self.photo,
            "price": self.price,
            "perfil_producto": list(map(lambda x: x.serialize(), self.perfil_producto)),
            # do not serialize the password, its a security breach
            
        }


class Perfil_Producto(db.Model):
    __tablename__ = 'perfil_producto'
    id = db.Column(db.Integer, primary_key=True)
    id_perfil = db.Column(db.Integer,db.ForeignKey("perfil.id"))
    id_producto = db.Column(db.Integer,db.ForeignKey("producto.id"))
    price = db.Column(db.Numeric,unique=False, nullable=False)
    detalle = db.Column(db.String(255), unique=False, nullable=False)

    def __repr__(self):
        return '<Id %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "id_perfil": self.id_perfil,
            "id_producto": self.id_producto,
            "price": self.price,
            "detalle": self.detalle,
            
            # do not serialize the password, its a security breach
            
        }