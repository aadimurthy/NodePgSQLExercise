# NodePgSQLExercise

To test :

incase if DB is not defined, use table.sql in this repo to define DATABASE using below pqSQL client in bash shell.
````
psql "<DB URL>" -f tables.sql
````

Install node vesrion 10 and excute below in proj root

````
npm install 
npm run start
````
This should place and read test data on tables users,posts,comments in DB (only single row) 
