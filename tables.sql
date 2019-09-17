CREATE TABLE fchhltfc.users (
        id int4 NOT NULL,
        "name" varchar(255) NULL,
        username varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        address json NULL,
        phone varchar(255) NULL,
        website varchar(255) NULL,
        company json NULL,
        CONSTRAINT users_email_key UNIQUE (email),
        CONSTRAINT users_id_key UNIQUE (id),
        CONSTRAINT users_username_key UNIQUE (username)
);

-- Drop table

DROP TABLE fchhltfc.albums;

CREATE TABLE fchhltfc.albums (
        id int4 NOT NULL,
        userid int4 NOT NULL,
        title varchar(255) NULL,
        CONSTRAINT albums_id_key UNIQUE (id),
        CONSTRAINT albums_userid_fkey FOREIGN KEY (userid) REFERENCES users(id)
);

-- Drop table

DROP TABLE fchhltfc.photos;

CREATE TABLE fchhltfc.photos (
        id int4 NOT NULL,
        albumid int4 NOT NULL,
        title varchar(255) NULL,
        url text NULL,
        thumbnailurl text NULL,
        CONSTRAINT photos_id_key UNIQUE (id),
        CONSTRAINT photos_albumid_fkey FOREIGN KEY (albumid) REFERENCES albums(id)
);

-- Drop table

DROP TABLE fchhltfc.posts;

CREATE TABLE fchhltfc.posts (
        id int4 NOT NULL,
        userid int4 NOT NULL,
        title varchar(255) NULL,
        body text NULL,
        CONSTRAINT posts_id_key UNIQUE (id),
        CONSTRAINT posts_userid_fkey FOREIGN KEY (userid) REFERENCES users(id)
);

-- Drop table

DROP TABLE fchhltfc.todos;

CREATE TABLE fchhltfc.todos (
        id int4 NOT NULL,
        userid int4 NOT NULL,
        title varchar(255) NOT NULL,
        completed bool NOT NULL DEFAULT false,
        CONSTRAINT todos_userid_fkey FOREIGN KEY (userid) REFERENCES users(id)
);

-- Drop table

DROP TABLE fchhltfc."comments";

CREATE TABLE fchhltfc."comments" (
        id int4 NOT NULL,
        postid int4 NOT NULL,
        "name" varchar(255) NOT NULL,
        email varchar(255) NULL,
        body text NULL,
        CONSTRAINT comments_postid_fkey FOREIGN KEY (postid) REFERENCES posts(id)
);