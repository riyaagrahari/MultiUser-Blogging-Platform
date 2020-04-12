const MongoClient = require('mongodb').MongoClient;
const mongodbUser = process.env.MONGODB_ATLAS_USER_NAME;
const mongodbPassword = process.env.MONGODB_ATLAS_USER_PASSWORD;
console.log("mongodbPassword ------> ", mongodbPassword);
const getClient =  async () => {
    const uri = `mongodb+srv://${mongodbUser}:${mongodbPassword}@blogcluster-lskbj.mongodb.net/test?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    return client;
}

module.exports = getClient;