CREATE TABLE "gallery_items" (
    "id" integer DEFAULT nextval('untitled_table_id_seq'::regclass) PRIMARY KEY,
    "path" character varying(255),
    "description" character varying(255),
    "likes" integer DEFAULT 0
);

INSERT INTO gallery_items ( "path", "description")
VALUES 
('images/iclimbtrees.jpg', 'I love to climb trees! This shot was taken at Lake Harriet Rose Garden.'),
('images/iwritebooks.JPG', 'I love to write! This is me with my second book, taken at a local bookstore.'),
('images/polemedalist.JPG', 'I love to pole dance! This is me at a pole competition in Chicago, where I took first place in my category!'),
('images/meandmom.JPG', 'Me and my mom look nothing alike, do we? :) Here we are in Ireland, near where she grew up.'),
('images/mypups.jpg', 'I have the cutest fur babies in the whole wide world.'),
('images/mysweetie.jpg', 'My sweetie is an art therapist. We made this sign to hang in our window during the pandemic.');






