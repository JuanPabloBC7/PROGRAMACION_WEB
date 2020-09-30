const mongoose = require('mongoose');

const dbName = 'FARMACIA';
const URI = 'mongodb://localhost/FARMACIA';

// const client = new MongoClient(URI, {
//     useUnifieTopology: true
// });

// module.exports = async () => {
//     await client.connect();
//     return client.db(dbName);
// }

mongoose.connect(URI)
    .then(db => {
        console.log('DB esta conectada ' + URI);
        
    })
    .catch(err => console.error(err));

module.exports = mongoose;