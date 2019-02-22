var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + '@ca-dev-01-1un6l.mongodb.net/nodetoosample?retryWrites=true'
    }
}