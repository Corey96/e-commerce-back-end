const express = require('express');
const routes = require('./routes');
// import sequelize connection //
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'secretpassword',
  database: 'ecommerce_db'
})

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
