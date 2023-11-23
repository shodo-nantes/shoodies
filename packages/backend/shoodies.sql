CREATE TABLE IF NOT EXISTS goodie (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    total INT NOT NULL
);

CREATE TABLE IF NOT EXISTS size (
    id SERIAL PRIMARY KEY,
    label VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS goodie_size_association (
    id SERIAL PRIMARY KEY,
    id_goodie INT,
    id_size INT,
    FOREIGN KEY (id_goodie) REFERENCES goodie(id),
    FOREIGN KEY (id_size) REFERENCES size(id),
    UNIQUE (id_goodie, id_size)
);