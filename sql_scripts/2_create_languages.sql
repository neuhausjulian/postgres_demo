DELETE FROM "Language";
ALTER SEQUENCE "Language_id_seq" RESTART WITH 1;

do $$
begin
for r in 1..100000 loop	
	INSERT INTO "Language" ("name") values (CONCAT(r,'_random_language'));
end loop;
end;
$$;