function productMapper(productFromDatabase) {
    return {
        id: productFromDatabase.id,
        title: productFromDatabase.title,
        model: productFromDatabase.model,
        photoFolder: productFromDatabase.photo_folder,
        description: productFromDatabase.description,
    };
}

module.exports = productMapper;
