from fastapi import APIRouter
from config.db import conn
from models.user import users
from schemas.user import User

user = APIRouter()

@user.get('/')
def fetch_users():
    return conn.execute(users.select()).fetchall()

@user.post('/')
def post_users(user: User):
    return conn.execute(users.insert().values(name=user.name, email=user.email, password=user.password))

@user.put('/{id}')
def update_users(id: int, user: User):
    return conn.execute(users.update().values(name=user.name, email=user.email, password=user.password))

@user.delete('/{id}')
def delete_users(id: int):
    return conn.execute(users.delete().where(users.c.id == id))