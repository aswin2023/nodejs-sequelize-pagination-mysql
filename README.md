# nodejs-sequelize-pagination-mysql

npm init
npm install express mysql2 sequelize cors --save
npm install nodemon -D
npm i dotenv -D
npm install swagger-jsdoc swagger-ui-express

# Pagination 
/api/tutorials?page=1&size=5
/api/tutorials?size=5: using default value for page
/api/tutorials?title=data&page=1&size=3: pagination & filter by title containing ‘data’
/api/tutorials/published?page=2: pagination & filter by ‘published’ status