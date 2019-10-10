// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB

module.exports = {
  db: 'mongodb://aman:12345@aman-shard-00-00-djlzs.mongodb.net:27017,aman-shard-00-01-djlzs.mongodb.net:27017,aman-shard-00-02-djlzs.mongodb.net:27017/test?ssl=true&replicaSet=aman-shard-0&authSource=admin&retryWrites=true&w=majority'
};
