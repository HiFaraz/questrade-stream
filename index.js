const WebSocket = require('ws');

const token = {
	"access_token": "YOUR TOKEN HERE",
	"api_server": "https://api04.iq.questrade.com",
	"port": "18104"
};
const ws = new WebSocket(token.api_server + ':' + token.port + '/v1/markets/quotes/?ids=27426,2067121&stream=true&mode=WebSocket');

ws.on('open', function open() {
	ws.send(token.access_token);
});

ws.on('message', function(data, flags) {
	console.log('MESSAGE', JSON.parse(data));
});
