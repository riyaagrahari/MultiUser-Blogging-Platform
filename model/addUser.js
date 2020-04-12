const getClient = require("./mongodbConnection");

const insertNewUser = async () => {
    return new Promise( async (resolve, reject) =>{
        const gettingClient = await getClient()
        .then(client => {
            try{
                const connection = client.connect();
                resolve(connection);
            }catch(err){
                reject(err);
            } 
        })
        .catch( err2 =>{
            console.log(err2);
        });
    })
    
//   .connect(err => {
//       const collection = getClient.db("users").collection("metadata");
//       collection.insertOne({ item: "box", qty: 20 })
//       getClient.close();
//     });
}

module.exports = insertNewUser;
