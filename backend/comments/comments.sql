USE blog;

CREATE TABLE IF NOT EXISTS comments (
    id INT,
    post_id INT,
    body TEXT,
    PRIMARY KEY (id, post_id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO comments (id, post_id, body) VALUES
(0, 0, 'First comment on the first post'),
(1, 0, 'Second comment on the first post'),
(0, 1, 'First comment on the second post');
