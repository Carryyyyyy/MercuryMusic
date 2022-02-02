module.exports = async (client) => {
    console.log(`${client.user.username} Successfully Entered into the Project !`);

    client.user.setActivity(client.config.playing);//Instagram: e.alper_carry / Discord: carry#0500 : If You Have Any Problem You Can Contact Me.
};