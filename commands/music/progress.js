module.exports = {
    name: 'progress',
    aliases: ["time"],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, There is no music currently playing!. ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`This song is live streaming, no duration data to display. 🎧`);//Instagram: e.alper_carry / Discord: carry#0500 : If You Have Any Problem You Can Contact Me.

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};