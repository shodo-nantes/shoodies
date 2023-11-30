DROP TABLE product_size_association;
DROP TABLE product;
DROP TABLE size;

CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    photo_folder VARCHAR(50) NOT NULL,
    description VARCHAR(250) NOT NULL
);
 
CREATE TABLE IF NOT EXISTS size (
    id SERIAL PRIMARY KEY,
    label VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS product_size_association (
    id SERIAL PRIMARY KEY,
    id_product INT,
    id_size INT,
    quantity INT NOT NULL,
    FOREIGN KEY (id_product) REFERENCES product(id),
    FOREIGN KEY (id_size) REFERENCES size(id),
    UNIQUE (id_product, id_size)
);

INSERT INTO product (title, model, photo_folder, description) VALUES
    ('T-shirt', 'noir', 'tshirt_noir', 'T-shirt noir avec logo Shodo'),
    ('Sweater', 'noir', 'sweatshirt', 'Sweater noir avec logo Shodo'),
    ('Casquette', 'noire', 'casquette', 'Casquette noire avec logo Shodo'),
    ('Sac à dos', 'noir', 'sac_a_dos', 'Sac à dos noir avec logo Shodo'),
    ('Mug', 'blanc', 'mug', 'Mug blanc avec logo Shodo et phrase "Only code can judge me"'),
    ('Gourde', 'noire', 'gourde', 'Gourde noire avec logo Shodo');


INSERT INTO size (label) VALUES
    ('U'),
    ('XS'),
    ('S'),
    ('M'),
    ('L'),
    ('XL');

INSERT INTO product_size_association (id_product, id_size, quantity) VALUES
    (1, 2, 2),
    (1, 3, 4),
    (2, 3, 7),
    (3, 1, 11),
    (4, 1, 15),
    (5, 1, 5),
    (6, 1, 3);

SELECT P.*, PSA.quantity, S.label
FROM product P
JOIN product_size_association PSA ON P.id=PSA.id_product
JOIN size S ON S.id=PSA.id_size;