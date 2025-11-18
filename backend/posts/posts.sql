CREATE DATABASE IF NOT EXISTS blog;
USE blog;

CREATE TABLE IF NOT EXISTS posts (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    body TEXT,
    date DATE
);

INSERT INTO posts (id, title, body, date) VALUES
(0, 'Esimene', 'Body of the first post', '2025-12-12'),
(1, 'Teine', 'Body of the second post', '2025-12-13'),
(2, 'Kolmas', 'Body of the third post', '2025-12-14');
