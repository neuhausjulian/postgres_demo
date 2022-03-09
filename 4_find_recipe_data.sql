SELECT cardinality(u.languages_by_id) as array_size, u.* FROM "User" u 
WHERE '{26,79,49,30,8}' @> languages_by_id 
order by array_size  desc;

SELECT cardinality(u.languages_by_id) as array_size, u.* FROM "User" u 
WHERE '{"26_random_language","79_random_language","49_random_language","30_random_language","8_random_language"}' @> languages_by_id 
order by array_size  desc;

SELECT cardinality(uwl.agg_languages_by_id) as array_size, u1.*, uwl.agg_languages_by_id
from "User" u1
JOIN (
   SELECT u.id AS id, array_agg(utl.language_id ) AS agg_languages_by_id
   FROM "User" u
   JOIN "User_to_language" utl
   ON u.id = utl.user_id
   GROUP by u.id
) uwl
on (u1.id = uwl.id)
WHERE '{26,79,49,30,8}' @> uwl.agg_languages_by_id 
order by array_size  desc;
   

SELECT cardinality(uwl.agg_languages_by_name) as array_size, u1.*, uwl.agg_languages_by_name
from "User" u1
JOIN (
   SELECT u.id AS id, array_agg(l."name") AS agg_languages_by_name
   FROM "User" u
   JOIN "User_to_language" utl
   ON u.id = utl.user_id
   join "Language" l
   on l.id = utl.language_id
   GROUP by u.id
) uwl
on (u1.id = uwl.id)
WHERE '{"26_random_language","79_random_language","49_random_language","30_random_language","8_random_language"}' @> uwl.agg_languages_by_name 
order by array_size  desc;
   