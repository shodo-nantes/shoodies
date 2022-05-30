from GoodiesDocumentation import *
from pydantic import BaseModel


class Product(BaseModel):
    id: int
    name: str
    type: str
    photo_URL: str


product_list = [Product(id=1, name='Casquette toto', type='vêtement', photo_URL='casquette.jpeg'),
                Product(id=2, name='Casquette', type='vêtement', photo_URL='casquette.jpeg'),
                Product(id=3, name='Gourde', type='objet', photo_URL='gourde.jpeg'),
                Product(id=4, name='Sac à dos', type='vêtement', photo_URL='sac-a-dos.jpeg'),
                Product(id=5, name='t-shirt 1', type='vêtement', photo_URL='t-shirt.png'),
                Product(id=6, name='t-shirt 2', type='vêtement', photo_URL='t-shirt.png'),
                Product(id=7, name='t-shirt 3', type='vêtement', photo_URL='t-shirt.png'),
                Product(id=8, name='t-shirt 4', type='vêtement', photo_URL='t-shirt.png'),
                Product(id=9, name='Sweatshirt', type='vêtement', photo_URL='sweatshirt.jpeg'),
                Product(id=10, name='Sweatshirt', type='vêtement', photo_URL='sweatshirt.jpeg'),
                Product(id=11, name='Mug', type='objet', photo_URL='mug.jpeg')]


@app.get("/product", tags=['Produit'])
def get_data_product():
    return product_list
