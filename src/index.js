require('dotenv').config();
const { ActivityType, User } = require('discord.js');
const ExtendedClient = require('./class/ExtendedClient');
const internal = require('stream');

const client = new ExtendedClient();


// let status = [
//     {
//         name: 'loli',
//         type: ActivityType.Playing,
//     },
//     {
//         name: 'gay',
//         type: ActivityType.Playing,
//     },
//     {
//         name: 'shota',
//         type: ActivityType.Playing,
//     },
//     {
//         name: 'milf',
//         type: ActivityType.Playing,
//     },
//     {
//         name: 'gái',
//         type: ActivityType.Playing,
//     },
//     {
//         name: 'NTR',
//         type: ActivityType.Playing,
//     },
// ]

// client.on('ready', (c) => {
//     setInterval(() => {
//         let random = Math.floor(Math.random() * status.length);
//         client.user.setActivity(status[random]);
//     }, 600000); 
// });

client.start();

// Handles errors and avoids crashes, better to not remove them.
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);