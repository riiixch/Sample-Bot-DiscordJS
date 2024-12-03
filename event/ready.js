const { client } = require('..');
const { log } = require('console')

client.on('ready', () => {
    log('[DiscordJS] Login as ' + client.user.username + '!!!');
})