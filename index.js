const request = require("request-promise");
const fs = require("fs");

setInterval(() => {

    request({
        uri: "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game",
        json: true
    }).then(newsResponse => {
        let newsData = newsResponse.battleroyalenews.news;
        let newsJSON = JSON.parse(fs.readFileSync("news.json", "utf8"));

        newsData.messages.forEach(news => {
            let title = newsJSON.find(element => element.title === news.title);

            if(!title) {
             
                request({
                    uri: config.webhook,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: JSON.stringify({
                        "embeds": [{
                            "title": news.title,
                            "description": news.body,
                            "color": 696969,
                            "footer": {
                                "text": `Made by quakkers ❤︎ | ${news.adspace}`
                            },
                            "image": {
                                "url": news.image
                            },
                            "timestamp": new Date().toISOString()
                        }]
                    })
                }, function(err, result, body) {
                    if(err) {
                        return console.log(err);
                    }
                });
                
                newsJSON.push(news);
                console.log("Pushing new news...")
                fs.writeFileSync("news.json", JSON.stringify(newsJSON, null, 3), "utf8");
            }
        })
    });

}, 1000);
