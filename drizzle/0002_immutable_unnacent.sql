-- Custom SQL migration file, put your code below! --
CREATE OR REPLACE FUNCTION immutable_unaccent(text)
    RETURNS text
    LANGUAGE sql
    IMMUTABLE PARALLEL SAFE STRICT
AS $$
SELECT unaccent($1)
$$;
