const { log } = require("../../functions");
const ExtendedClient = require('../../class/ExtendedClient');

module.exports = {
    event: 'ready',
    once: true,
    /**
     * 
     * @param {ExtendedClient} _ 
     * @param {import('discord.js').Client<true>} client 
     * @returns 
     */
    run: (_, client) => {

        log(client.user.tag + ' Bot da duoc bat', 'done');

    }
};