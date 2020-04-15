const getClient = require("./mongodbConnection");

const searchUser = async () => {
    return new Promise( async (resolve, reject) =>{
        const gettingClient = getClient()
        .then(async client =>{
            try{
                const connection = await client.connect();
                const collection = client.db('users').collection('metadata')
                const p = await collection.findOne(
                    {emailID: "anandnikhil91@gmail.com"}
                ).then( doc => {
                    if(doc == null){
                        reject("No such User")
                    }else{
                        resolve(doc)
                    }
                    resolve(doc);
                }).catch(err => {
                    console.log(err);
                    resolve(err);
                })
            }catch(err2){
                console.log(err2);
                reject(err2);
            }finally{
                await client.close();
            }
        })
        .catch( err3 =>{
            console.log(err3);
            reject(err3);
        })
    });
}
module.exports = searchUser;