from fastapi import FastAPI

app = FastAPI()


@app.get("/product")
async def product_data():
    data = ['casquette', 'gourde', 't-shirt', 'sweatshirt', 'mug']
    return 'products :',  data
