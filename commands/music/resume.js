module.exports = {
    name: 'resume',
    aliases: [],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`${message.author}, There is no music currently playing!. ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `**${queue.current.title}**, The song continues to play. ✅` : `${message.author}, Something went wrong. ❌`);//Instagram: e.alper_carry / Discord: carry#0500 : If You Have Any Problem You Can Contact Me.
    },
};