from GoodiesDocumentation import *
from database import *


@app.get("/product", tags=['Produit'])
def get_data_product():
    cursor.execute(
        "SELECT product.id, product.name, product.type, photo.url_photo FROM photo JOIN photo_product ON photo.id = photo_product.id_photo JOIN product ON photo_product.id_product = product.id WHERE url_photo LIKE '%-1%';")
    lines = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) for row in cursor.fetchall()]
    connection.commit()
    return lines


@app.get("/productSize", tags=['taille du produit'])
def get_data_product():
    cursor.execute(
        "SELECT size_product.id_product, size.id, size.size FROM size_product JOIN size ON size_product.id_size = size.id;")
    lines = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) for row in cursor.fetchall()]
    connection.commit()
    return lines


@app.get("/productPhoto", tags=['Photo(s) du produit'])
def get_data_product():
    cursor.execute(
        "SELECT photo_product.id_product, photo.id, photo.url_photo FROM photo_product JOIN photo ON photo_product.id_photo = photo.id;")
    lines = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) for row in cursor.fetchall()]
    connection.commit()
    return lines
