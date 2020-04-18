const getClient = require("./mongodbConnection");

const updateUser = async () => {
    return new Promise( async (resolve, reject) =>{
        const gettingClient = getClient()
        .then(async client =>{
            try{
                const connection = await client.connect();
                const collection = client.db('users').collection('metadata')
                const p = await collection.findOneAndUpdate(
        )