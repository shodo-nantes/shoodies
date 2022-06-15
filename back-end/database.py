import pymysql

connection = pymysql.connect(host="localhost", port=8889, user="root", passwd="root", database="Shoodies")
cursor = connection.cursor()
