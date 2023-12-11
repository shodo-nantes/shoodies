function getProductsFromDatabase(sql) {
    return sql`select * from product`;
}

module.exports = getProductsFromDatabase;
