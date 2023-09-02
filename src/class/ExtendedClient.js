const { Client, Partials, Collection, GatewayIntentBits } = require("discord.js");
const config = require('../config');
const commands = require("../handlers/commands");
const events = require("../handlers/events");
const deploy = require("../handlers/deploy");
const mongoose = require("../handlers/mongoose");
const components = require("../handlers/components");
const { ActivityType } = require("discord.js");
const { type } = require("os");

module.exports = class extends Client {
    collection = {
        interactioncommands: new Collection(),
        prefixcommands: new Collection(),
        aliases: new Collection(),
        components: {
            buttons: new Collection(),
            selects: new Collection(),
            modals: new Collection()
        }
    };
    applicationcommandsArray = [];

    
    constructor() {
        super({
            intents: [Object.keys(GatewayIntentBits)],
            partials: [Object.keys(Partials)],
            presence: {
                activities: [{
                    name: 'Đéo gay cảm ơn!',
                    type: ActivityType.Custom,
                    state: '😋Trai gái quan trọng đéo gì sướng là được',
                }],
                status: 'dnd', // online, idle, invisible, dnd
            },
        });
    };

    start = async () => {
        commands(this);
        events(this);
        components(this);
        if (config.handler.mongodb.toggle) mongoose();

        await this.login(process.env.CLIENT_TOKEN || config.client.token);

        if (config.handler.deploy) deploy(this, config);
    };
};