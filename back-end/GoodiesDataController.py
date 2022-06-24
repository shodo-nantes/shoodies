from GoodiesDocumentation import *
from pydantic import BaseModel


class Product(BaseModel):
    id: int
    name: str
    type: str
    photo_URL: str
    taille: str


product_list = [
    Product(id=1, name='Casquette noir', type='vêtement', photo_URL='casquette-noir.jpg', taille='taille unique'),
    Product(id=2, name='Casquette bleu', type='vêtement', photo_URL='casquette-bleu-1.jpeg', taille='taille unique'),
    Product(id=3, name='Gourde', type='objet', photo_URL='gourde.jpg', taille='taille unique'),
    Product(id=4, name='Sac à dos', type='vêtement', photo_URL='sac-a-dos.jpg', taille='taille unique'),
    Product(id=5, name='t-shirt rouge', type='vêtement', photo_URL='t-shirt-rouge-1.jpg', taille=''),
    Product(id=6, name='t-shirt noir', type='vêtement', photo_URL='t-shirt-noir-1.jpg', taille=''),
    Product(id=9, name='Sweatshirt', type='vêtement', photo_URL='sweatshirt-1.jpg', taille=''),
    Product(id=11, name='Mug', type='objet', photo_URL='mug.jpg', taille='taille unique')]


@app.get("/product", tags=['Produit'])
def get_data_product():
    return product_list
