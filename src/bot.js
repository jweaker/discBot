require('dotenv').config();
const token1 = process.env.token1
const token2 = process.env.token2
const { Client } = require('discord.js');
const client = new Client()
require('discord-buttons')(client);
const disbut = require("discord-buttons");
const intrep = new disbut.InteractionReply()

client.on('ready', () => {
    console.log(`${client.user.username}`)
})
client.on('message', (message) => {
//test;
    var author = message.author
    var id = author.id
    var content = message.content
    var ses = message.channel.name === id;
    var idchannel = message.guild.channels.cache.find(c => c.name === id);
    var idcboo = idchannel===undefined;
    if (!content.match(/^\$./) || author.bot || id === 'JAY#6858' || !(ses || message.channel.id === '873559704503189524')) return;
    console.log(`${id} - ${content}`)
    if (content.match(/^\$stop/)&&!idcboo) {
        idchannel.delete();
        return;
    }
    if (content.match(/^\$start/) && idcboo) {
        var everyone = message.guild.roles.everyone
        message.guild.channels.create(id).then((channel) => {
            channel.setParent('872043270690185256')
            channel.overwritePermissions([
                {
                    id: everyone,
                    deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                },
                {
                    id: author,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                },
            ])
            let start = new disbut.MessageButton()
                .setStyle('blurple')
                .setLabel('Start')
                .setID('start')

            let cancel = new disbut.MessageButton()
                .setStyle('red')
                .setLabel('Cancel')
                .setID('cancel')

            channel.send(`<@${id}>`, { buttons: [start, cancel] })
            client.on('clickButton', async (button) => {
                if(button.id==='start'){
                    button.message.delete();
                    button.channel.send('loading images...')
                }
                else if(button.id==='cancel'){
                    button.channel.delete();
                }

            });
        })
    } else { message.reply('you have already started a session. stop that session to start a new one') }


})
client.login(token2)

