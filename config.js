module.exports = {
        TOKEN: 'OTIwMzgyMDE4MDMyOTEwMzg3.YbjijA.irY4pU5oBrCV6fXlZxHdnXtKA8U', //your discord bot token
        px: 'm!',
        playing: 'm!help',

    opt: {
        DJ: {
            enabled: false, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
            roleName: 'DJ CARRY', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
        maxVol: 250, //You can specify the maximum volume level.
        loopMessage: false, //Please don't touch
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            }
        }
    }//Instagram: e.alper_carry / Discord: carry#0500 : If You Have Any Problem You Can Contact Me.
};
