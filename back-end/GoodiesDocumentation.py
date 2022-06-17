from GoodiesDataController import *
from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

description = """
API REST qui appelle une base de données.

## Lien utile
"""

tags_metadata = [
    {'name': 'Produit'},
]

app = FastAPI(openapi_tags=tags_metadata, docs_url="/documentation", redoc_url=None, title="Goodies data")


def custom_documentation():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="Goodies data",
        version="1.0",
        description=description,
        license_info={
            "name": "Documentation FastApi",
            "url": "https://fastapi.tiangolo.com/",
        },
        routes=app.routes,
    )

    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_documentation
