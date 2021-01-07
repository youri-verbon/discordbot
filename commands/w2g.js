module.exports = {
    name: 'w2g',
    description: "This is a watchtogether command!",
    execute(message, args){
        message.channel.send('Enter your watchtogether room here');
    }
}