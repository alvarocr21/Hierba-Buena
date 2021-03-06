"""empty message

Revision ID: 06627f3bf845
Revises: 
Create Date: 2021-05-12 01:51:43.195188

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '06627f3bf845'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.Column('photo', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('provincia',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.Column('lastname', sa.String(length=20), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=120), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('email')
    )
    op.create_table('canton',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_provincia', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.ForeignKeyConstraint(['id_provincia'], ['provincia.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('distrito',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_canton', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.ForeignKeyConstraint(['id_canton'], ['canton.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('perfil',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('id_provincia', sa.Integer(), nullable=True),
    sa.Column('id_canton', sa.Integer(), nullable=True),
    sa.Column('id_distrito', sa.Integer(), nullable=True),
    sa.Column('phone', sa.String(length=20), nullable=False),
    sa.Column('coberturaKm', sa.Numeric(), nullable=False),
    sa.Column('foto_perfil', sa.String(length=20), nullable=False),
    sa.Column('coordenadas', sa.String(length=20), nullable=False),
    sa.ForeignKeyConstraint(['id_canton'], ['canton.id'], ),
    sa.ForeignKeyConstraint(['id_distrito'], ['distrito.id'], ),
    sa.ForeignKeyConstraint(['id_provincia'], ['provincia.id'], ),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('perfil_producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_perfil', sa.Integer(), nullable=True),
    sa.Column('id_producto', sa.Integer(), nullable=True),
    sa.Column('price', sa.Numeric(), nullable=False),
    sa.Column('detalle', sa.String(length=255), nullable=False),
    sa.ForeignKeyConstraint(['id_perfil'], ['perfil.id'], ),
    sa.ForeignKeyConstraint(['id_producto'], ['producto.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('perfil_producto')
    op.drop_table('perfil')
    op.drop_table('distrito')
    op.drop_table('canton')
    op.drop_table('user')
    op.drop_table('provincia')
    op.drop_table('producto')
    # ### end Alembic commands ###
