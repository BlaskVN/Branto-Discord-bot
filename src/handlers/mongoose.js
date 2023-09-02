const { connect } = require("mongoose");
const config = require("../config");
const { log } = require("../functions");

module.exports = async () => {
    log('Bat dau ket noi toi MongoDB...', 'warn');

    await connect(process.env.MONGODB_URI || config.handler.mongodb.uri).then(() => {
        log('MongoDB da duoc ket noi toi atlas!', 'done')
    });
};