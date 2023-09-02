const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const { time } = require('../../../functions');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Lấy thông tin chi tiết của người dùng.')
        .addUserOption((opt) =>
            opt.setName('user')
                .setDescription('Tên người dùng để lấy thông tin.')
                .setRequired(false)
        ),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        const user = interaction.options.getUser('user') || interaction.user;

        const member = interaction.guild.members.cache.get(user.id);

        if (!member) {
            await interaction.reply({
                content: 'Người dùng không ở trong server.'
            });

            return;
        };

        const roles = [];
        
        if (member.roles) member.roles.cache.forEach((role) => {
            if (role.id !== interaction.guild.roles.everyone.id) roles.push(`${role.toString()}`);
        });

        const arr = [
            `**Tên người dùng**: ${user.username}`,
            `**Tên hiển thị**: ${member.nickname || user.displayName}`,
            `**ID**: ${user.id}`,
            `**Tham gia Discord**: ${time(user.createdTimestamp, 'd')} (${time(user.createdTimestamp, 'R')})`,
            `**Tham gia server**: ${time(member.joinedTimestamp, 'd')} (${time(member.joinedTimestamp, 'R')})`,
            `**Roles** [${member.roles?.cache?.size - 1}]: ${roles.join(', ')}`,
            `**Có thể vào voice?**: ${member.voice ? 'Có' : 'Không'}`,
            `**Chủ server (server owner)?**: ${interaction.guild.ownerId === user.id ? 'Có' : 'Không'}`,
            `**Bị timed out?**: ${member.communicationDisabledUntilTimestamp ? 'Có' : 'Không'}`,
        ];

        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Thông tin - ' + user.username)
                    .setThumbnail(member.displayAvatarURL())
                    .setDescription(`${arr.join('\n')}`)
                    .setColor('Blurple')
            ]
        });

    }
};