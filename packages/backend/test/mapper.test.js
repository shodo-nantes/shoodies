const productMapper = require('../src/productMapper');

test('Test empty object', () => {
    const product = {};
    const mappedProduct = productMapper(product);
    expect(mappedProduct).toEqual({});
});

test('Test product from database', () => {
    const productFormDatabase = {
        id: 1,
        title: 'car',
        model: 'bmw',
        // eslint-disable-next-line camelcase
        photo_folder: 'test',
        description: 'description',
    };

    const mappedProduct = productMapper(productFormDatabase);
    expect(mappedProduct).toMatchObject({
        id: 1,
        title: 'car',
        model: 'bmw',
        photoFolder: 'test',
        description: 'description',
    });
});
