# questrade-stream

[![Greenkeeper badge](https://badges.greenkeeper.io/HiFaraz/questrade-stream.svg)](https://greenkeeper.io/)
Code snippets for streaming data from Questrade API

## The problem

I'm trying to connect to Questrade's streaming API. The code is in `index.js` and it works once. When it works, it gives me:

1. `{"success": true}`, indicating that my token is valid, and
2. regular messages with stock quote information (see example output in sections below)

When I terminate the process (with Ctrl+C) and start it again, it only gives me the first message and then nothing else.

When I run it again after about a day it works again ... once.

## Help requested

Help requested in getting this to work. It worked once, with a sample output as shown below. Since then I only receive the first line, indicating a successful authentication, with no further messages from the API server.

To try this yourself:
1. Obtain an access token from Questrade
1. Make an authenticated call to `v1/markets/quotes?stream=true&mode=WebSocket&ids=27426,2067121`
1. Edit `index.js` with the streaming port, access token, and api server address
1. Install the dependencies with $ npm install`
1. Run the script with $ node ./`

You can submit a pull request, create an issue, or just email me at `hello@farazsyed.com`

Thank you!

## Sample output from when it works

```bash
MESSAGE {"success":true}

MESSAGE {"quotes":[{"symbol":"MSFT","symbolId":27426,"tier":"","bidPrice":57.97,"bidSize":31,"askPrice":57.98,"askSize":4
3,"lastTradePriceTrHrs":57.98,"lastTradePrice":57.98,"lastTradeSize":10000,"lastTradeTick":"Up","lastTradeTime":"2016-08-
11T12:06:41.659000-04:00","volume":6575655,"openPrice":58.16,"highPrice":58.32,"lowPrice":57.82,"delay":0,"isHalted":fals
e,"high52w":58.5,"low52w":39.72,"VWAP":58.072191},{"symbol":"FB","symbolId":2067121,"tier":"","bidPrice":124.78,"bidSize"
:2,"askPrice":124.79,"askSize":6,"lastTradePriceTrHrs":124.78,"lastTradePrice":124.78,"lastTradeSize":100,"lastTradeTick"
:"Down","lastTradeTime":"2016-08-11T12:06:41.660000-04:00","volume":5830314,"openPrice":125.07,"highPrice":125.48,"lowPri
ce":124.7,"delay":0,"isHalted":false,"high52w":126.09,"low52w":72,"VWAP":125.119902}]}

MESSAGE {"quotes":[{"symbol":"MSFT","symbolId":27426,"tier":"","bidPrice":57.97,"bidSize":31,"askPrice":57.98,"askSize":4
3,"lastTradePriceTrHrs":57.98,"lastTradePrice":57.98,"lastTradeSize":10000,"lastTradeTick":"Up","lastTradeTime":"2016-08-
11T12:06:41.659000-04:00","volume":6575655,"openPrice":58.16,"highPrice":58.32,"lowPrice":57.82,"delay":0,"isHalted":fals
e,"high52w":58.5,"low52w":39.72,"VWAP":58.072191},{"symbol":"FB","symbolId":2067121,"tier":"","bidPrice":124.78,"bidSize"
:2,"askPrice":124.79,"askSize":6,"lastTradePriceTrHrs":124.78,"lastTradePrice":124.78,"lastTradeSize":100,"lastTradeTick"
:"Down","lastTradeTime":"2016-08-11T12:06:41.660000-04:00","volume":5830314,"openPrice":125.07,"highPrice":125.48,"lowPri
ce":124.7,"delay":0,"isHalted":false,"high52w":126.09,"low52w":72,"VWAP":125.119902}]}
```
