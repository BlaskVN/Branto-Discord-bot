const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban một người.')
        .addUserOption((opt) =>
            opt.setName('user')
                .setDescription('Tên người cần ban')
                .setRequired(false)
        )
        .addIntegerOption((id) =>
            id.setName('id-user')
                .setDescription('ID người dùng cần ban')
                .setRequired(false)
        ),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const user =  interaction.options.getUser('user');
        
        const member = interaction.guild.members.cache.get(user.id);


        if (!member || !user) {
            await interaction.reply({
                content: 'Người dùng không khả dụng!'
            });
        };

        await interaction.reply({
            content: `${user.username}`
        });

    }
};
