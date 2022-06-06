# Données sur les SHOODIES

développé en python 3.9 et déployé sur heroku

### Installation

* installation de python (de préférence la version 3.9 pour éviter les erreurs d'encoding)
* installation des modules fastapi et uvicorn avec les commandes suivantes (pip ou pip3, ça dépend de votre version):
    * `pip install fastapi` ou `pip3 install fastapi`
    * `pip install "uvicorn[standard]"` ou `pip3 install "uvicorn[standard]"`
* lancer l'app en local avec la commande `uvicorn GoodiesDataController:app --reload`

### Informations sur l'API

* [API sur les goodies](https://goodies-data.herokuapp.com/product)
* [Documentation de l'API](https://goodies-data.herokuapp.com/documentation)

### Liens utiles

* [Introduction à FastApi](https://dev.to/ericlecodeur/introduction-a-fastapi-python-5mf)
* [Documentation FastApi](https://fastapi.tiangolo.com/)
