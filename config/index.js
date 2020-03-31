var configValues = require('./config')

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb+srv://'+
         configValues.username +':' +
         configValues.password + 
         '@cluster0-vg6by.mongodb.net/nodetododb?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true'
    }
}