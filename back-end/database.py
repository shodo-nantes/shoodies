from peewee import *

user = 'root'
password = 'root'
db_name = 'Shoodies'

conn = MySQLDatabase(
    db_name, user=user,
    password=password,
    host='localhost:8888pi'
)

class BaseModel(Model):
    class Meta:
        database = conn