module.exports = {
    name: 'kom',
    description: "Mentions the everyone role to call people to join the discord",
    execute(message, args){
        message.channel.send('@everyone' + ' Kom kom');
    }
}
