CREATE TABLE "gallery_items" (
    "id" integer DEFAULT nextval('untitled_table_id_seq'::regclass) PRIMARY KEY,
    "path" character varying(255),
    "description" character varying(255),
    "likes" integer
);

-- CREATE TABLE "treats" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"name" varchar(255),
-- 	"description" text,
-- 	"pic" varchar(255)
-- );

INSERT INTO gallery_items ( "id", "path", "description", "likes")
VALUES 
(1, 'images/iclimbtrees.jpg', 'I love to climb trees! This shot was taken at Lake Harriet Rose Garden.', 0),
(2, 'images/iwritebooks.JPG', 'I love to write! This is me with my second book, taken at a local bookstore.', 0 ),
(3, 'images/polemedalist.JPG', 'I love to pole dance! This is me at a pole competition in Chicago, where I took first place in my category!', 0 ),
(4, 'images/meandmom.JPG', 'Me and my mom look nothing alike, do we? :) Here we are in Ireland, near where she grew up.', 0 ),
(5, 'images/mypups.jpg', 'I have the cutest fur babies in the whole wide world.', 0 ),
(6, 'images/mysweetie.jpg', 'My sweetie is an art therapist. We made this sign to hang in our window during the pandemic.', 0);




