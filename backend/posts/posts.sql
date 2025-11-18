CREATE DATABASE IF NOT EXISTS hajusrakendus;
USE hajusrakendus;

DROP TABLE IF EXISTS comments;

CREATE TABLE IF NOT EXISTS posts (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    created_at DATETIME NOT NULL
);

INSERT INTO posts (title, body, created_at) VALUES
('Esimene', 'Body of the first post', '2025-12-12'),
('Teine', 'Body of the second post', '2025-12-13'),
('Kolmas', 'Body of the third post', '2025-12-14');
