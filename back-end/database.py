import pymysql

connection = pymysql.connect(host="localhost", port=8889, user="shodo-nantes", passwd="FH-0gE86FS!-fsMA", database="Shoodies")
cursor = connection.cursor()
