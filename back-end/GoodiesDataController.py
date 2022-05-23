from GoodiesDocumentation import *


@app.get("/product", tags=["Produit"])
async def product_data():
    data = ['casquette', 'casquette', 'gourde', 'sac à dos', 't-shirt', 't-shirt', 't-shirt', 't-shirt', 'sweatshirt',
            'sweatshirt', 'mug']
    return data
