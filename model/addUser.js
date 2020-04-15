const getClient = require("./mongodbConnection");

const insertNewUser = async () => {
    return new Promise( async (resolve, reject) =>{
        const gettingClient = getClient()
        .then(async client => {
            try{
                const connection = await client.connect();
                const collection = client.db('users').collection('metadata')
                const p = await collection.insertOne(
                    {name : "Nikhil Anand", dob: "1997-08-04", noOfBlogs: 0, emailID: "anandnikhil91@gmail.com"}
                ).then(r =>{
                    resolve("Insertion Successfull")
                }).catch(err =>{
                    reject("Error in insertion: ",err)
                });
            }catch(err2){
                reject(err2);
            } 
            finally{
                await client.close();
            }
        })
        .catch( err3 =>{
            console.log(err3);
            reject(err3);
        });
    })
}

module.exports = insertNewUser;
