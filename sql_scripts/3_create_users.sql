DELETE FROM "User_to_language";
DELETE FROM "User";
ALTER SEQUENCE "User_id_seq" RESTART WITH 1;

do $$
declare available_languages integer = 100;
declare max_languages_per_recipe integer = 10;
declare languages_by_id integer[];
declare languages_by_name text[];
declare different_languages integer;
declare new_languages integer;
declare new_user_id integer;
declare language_id integer;
begin
for r in 1..100000 loop
	different_languages := floor(random() * max_languages_per_recipe + 1)::int;
    languages_by_id := '{}';
	languages_by_name := '{}';
   
	for j in 1..different_languages loop
	    new_languages := floor(random() * available_languages + 1)::int;
		if(not languages_by_id @> array[new_languages]) then
			languages_by_id := languages_by_id || new_languages;
			languages_by_name := languages_by_name || CONCAT(new_languages,'_random_language');
		end if;
	end loop;
	
	INSERT INTO "User" (email,firstname,lastname,languages_by_id, languages_by_name) values (CONCAT('t',r,'@t.de'),CONCAT('f_', r),CONCAT('l_', r), languages_by_id, languages_by_name);
    SELECT currval('"User_id_seq"') INTO new_user_id;
	
	FOREACH language_id IN array languages_by_id LOOP
		INSERT INTO "User_to_language" ("user_id", "language_id") VALUES (new_user_id, language_id);
	END LOOP;
end loop;
end;
$$;