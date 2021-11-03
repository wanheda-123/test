module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/55FzpYjHbE", //Support Server Link
  Token: process.env.Token || "OTAwNzYxNjY0NDgyMzIwNDE0.YXGBrA.SRNCfY-a8ndw2Hpe45rgmnTlvQk", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "900761664482320414", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "d1Uo0LlHjlfZyI8LNBVjPbmPA7YYQUsd", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "KavitandAnsh", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/796265970590154783/901116204901597185/dvd-cd-unscreen.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "#0000FF", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://sunio.kavityadav.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: ">", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "35.154.77.33",
    port: 2333, // The port that lavalink is listening to. This must be a number!
    pass: "youshallnotpass",
 
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "6cfa4969b93e4b6fb9ca2c464350a28e", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "80a881f70ae040ac9c86b6ccfba79b89", //Spotify Client Secret
  },
};
