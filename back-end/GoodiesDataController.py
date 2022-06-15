from GoodiesDocumentation import *
from database import *


@app.get("/product", tags=['Produit'])
def get_data_product():
    cursor.execute("SELECT * FROM product")
    lines = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) for row in cursor.fetchall()]
    connection.commit()
    return lines
