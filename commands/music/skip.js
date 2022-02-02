module.exports = {
    name: 'skip',
    aliases: [],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, There is no music currently playing!. ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, Skipped song ✅` : `${message.author}, Something went wrong ❌`);//Instagram: e.alper_carry / Discord: carry#0500 : If You Have Any Problem You Can Contact Me.
    },
};