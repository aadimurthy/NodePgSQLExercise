# NodePgSQLExercise
This is just to showcase the accessing of PqSQL DB to store and read DATA from it.

#### How test :

1) Incase if DB is not defined, use table.sql in this repo to define DATABASE using below postgres client in bash shell.

````
psql "<DB URL>" -f tables.sql
````

2) Update dbURL field in config file with target  

Install node vesrion 10 and excute below in proj root

````
npm install 
npm run start
````

Post 'npm run' we can see data is stored and retrived succefully from DB (only single row)

#### Future possible enhancement: 

1) Adding testing framework like mocha or chai
2) Webpack to produce single portable JS file
3) Using Commander.js(https://github.com/tj/commander.js) which makes our functions to invoke via bash shell command
4) Import data from CSV or JSON file to DB tables 
5) Environment specific config loading,DB pool adding REST Inerface. 
