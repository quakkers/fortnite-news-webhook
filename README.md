# INFO
This tool was made by quakkers (https://twitter.com/quakkerss) to automatically post new Fortnite news to a Discord webhook. It makes a request to EpicGames API for News every 1000ms (Configurable)

# REQUIREMENTS
You will need NodeJS (https://nodejs.org)<br>
Empty .bat file in the same directory.

# HOW TO INSTALL
Download this repo
<br>
1) Run the following command via command line<br>
```
npm i request-promise request
```
<br>
2) Edit config.json and put your webhook URL in<br>
Example:<br>
```
{
	"webhook": "https://discordapp.com/api/webhooks/1/1_"
	"updateInterval": "1000"
}
```
<br>
3) Put the following text into the new .bat file you made<br>
```
@echo off
node index.js
pause
```

# HOW TO RUN
Run the .bat file you created earlier
