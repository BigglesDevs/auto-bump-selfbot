const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config()

const client = new Client({
    checkUpdate: false,
});

const targetChannelId = process.env.ChannelID;

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const sendBumpCommand = async () => {
        try {
            const channel = await client.channels.fetch(targetChannelId);
            if (!channel) {
                console.log(`Channel with ID ${targetChannelId} not found!`);
                return;
            }

            await channel.sendSlash('302050872383242240', 'bump'); // 302050872383242240 is the bot ID for Disboard
            console.log('Bump command sent successfully!');
        } catch (error) {
            console.error('Error while sending /bump command:', error);
        }
    };

    sendBumpCommand();
    setInterval(sendBumpCommand, 2 * 60 * 60 * 1000);
});

client.login(process.env.TOKEN)