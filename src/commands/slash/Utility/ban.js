const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban một người.')
        .addUserOption((opt) =>
            opt.setName('user')
                .setDescription('Tên người cần ban')
                .setRequired(true)
        ),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        // const user =  interaction.options.getUser('user');
        
        const member = interaction.guild.members.cache.get(user.id);

        if (member) {
            try {
                const user = await member.kick();
                await interaction.reply(`<@${user.id}> đã bị đá khỏi server!`);
            } catch (err) {
                console.log(err);
                await interaction.reply("Không thể đá thằng này ra! :(");
            }
        } else {
            await interaction.reply("Không tìm thấy người dùng!");
        }
        

        // await interaction.reply({
        //     content: `${user.username}`
        // });

    }
};
