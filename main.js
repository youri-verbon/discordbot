


const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='-';

const fs = require('fs');

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready' , () =>{
    console.log('Bot is online!');
    client.user.setActivity('Status: Online', {type: 'STREAMING'}).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'w2g'){
       client.commands.get('w2g').execute(message, args);
    
    } else if (command =='kom'){
        client.commands.get('kom').execute(message, args);
    }
    
});




client.login('Enter your token here');
