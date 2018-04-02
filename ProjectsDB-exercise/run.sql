-- create db and connect
create database projects_db;
\c projects_db;

-- Write queries to find the answers below:

    -- What are all projects that use JavaScript?
    SELECT a.name  AS "JS Projects" FROM project a INNER JOIN project_uses_tech b ON a.id = b.project_id WHERE b.tech_id = 3;
    -- What are all technologies used by the Personal Website?
    SELECT a.name "Project Name", b.tech_id, c.name "Tech Used" FROM project a INNER JOIN project_uses_tech b ON a.id = b.project_id INNER JOIN tech c ON b.tech_id = c.id WHERE a.id = 4;
    -- Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project?
    SELECT c.name "Tech not used" FROM tech c LEFT OUTER JOIN project_uses_tech b ON c.id = b.tech_id WHERE b.project_id IS null;
    -- Based on the previous query, get the count of the number of techs used by each project.
    SELECT b.project_id "Project ID", COUNT(b.tech_id) AS "Number of tech used" FROM project_uses_tech b GROUP BY b.project_id;
    -- Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?
    SELECT a.name "PROJECTS NOT USED" FROM project a LEFT OUTER JOIN project_uses_tech b ON a.id = b.project_id WHERE b.tech_id IS NULL;
    -- Based on the previous query, get the count of the number of projects that use each tech.
    SELECT c.name "Tech", count(b.project_id) "Times Used in Projects" FROM tech c LEFT OUTER JOIN project_uses_tech b ON c.id = b.tech_id GROUP BY c.name;
    -- List all projects along with each technology used by it. You will need to do a three-way join.
    SELECT b.project_id "Project ID", a.name "Project", c.name "Tech Name" FROM project a INNER JOIN project_uses_tech b ON a.id = b.project_id INNER JOIN tech c ON b.tech_id = c.id;
    -- List all the distinct techs that are used by at least one project.
    SELECT DISTINCT c.name "Tech", COUNT(b.tech_id) "Usage Time" FROM tech c INNER JOIN project_uses_tech b ON b.tech_id = c.id GROUP BY c.name ORDER BY COUNT(b.tech_id);
    -- List all the distinct techs that are not used by any projects.
    SELECT DISTINCT c.name "Tech not used" FROM tech c LEFT OUTER JOIN project_uses_tech b ON c.id = b.tech_id WHERE b.project_id IS null;
    -- List all the distinct projects that use at least one tech.
    SELECT DISTINCT a.name "Project", COUNT(b.tech_id) "Usage Time" FROM project a INNER JOIN project_uses_tech b ON b.tech_id = a.id GROUP BY a.name ORDER BY COUNT(b.tech_id);
    -- List all the distinct projects that use no tech.
    SELECT DISTINCT a.name "Project with no use of tech" FROM project a LEFT OUTER JOIN project_uses_tech b ON a.id = b.project_id GROUP BY a.name HAVING COUNT(b.tech_id) = 0;
    -- Order the projects by how many tech it uses.
    SELECT DISTINCT a.name, COUNT(b.tech_id) FROM project a FULL OUTER JOIN project_uses_tech b ON a.id = b.project_id GROUP BY a.name ORDER BY count(b.tech_id);
    -- Order the tech by how many projects use it.
    SELECT c.name, COUNT(b.project_id) FROM tech c FULL OUTER JOIN project_uses_tech b ON c.id = b.tech_id GROUP BY c.name ORDER BY count(b.project_id);
    -- What is the average number of techs used by a project?