CREATE DATABASE IF NOT EXISTS hajusrakendus;
USE hajusrakendus;

DROP TABLE IF EXISTS comments;

CREATE TABLE IF NOT EXISTS comments (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_id INT UNSIGNED NOT NULL,
    body TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO comments (post_id, body, created_at) VALUES
(1, 'First comment on the first post', CURRENT_TIMESTAMP),
(1, 'Second comment on the first post', CURRENT_TIMESTAMP),
(2, 'First comment on the second post', CURRENT_TIMESTAMP);
