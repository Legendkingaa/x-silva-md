/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Silva-Md
   * @author : Silva Tech Info
   * @youtube : https://www.youtube.com/@Silvaedits
   * @description : Silva-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Silva Tech Info.
   * © 2024 SILVA-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/204481823350f368c1826.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="kilgoris,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || ""


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Sylivanu/x-silva-md";
global.gurl  =process.env.GURL  || "https://www.whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://www.whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/bf328b6925882b2644535.jpg"



global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349045054729;
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349045054729";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254700143167";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254700143167";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://session.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01rNEU2WFBOWWZueU9KeGxQVHJ6QXFaMXV2K2lZOUw2SFdXSzVJL1dVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXVIVzc0Kys3eTRIUWh2dnRuRHI1YUVwQ1ZNcVd5RUpLbXZTWFpocFh6Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSitIbDJrUCtVL1RrcXpBY2UxWGlLUVdyci9SWEJ3OXc4QjlTMFdueUU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0eWoxcGkycjYyOUZ2N2wxaGx6eVNvaEIwRVhsdnQ0ZmtsTzNVVFppU25rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklOTWV0VHI1MHZncUpqWTNDRE5QY3cvcGY1TmFMR1lyeUlhenI2Mjh1bFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZRWmtQSHlBdVkzdjNFeC9DRmo4WGVsYnJ2MUs2LzZtNlJSUFErYUR4QUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR00wODFWT2owS2h4d3NMN0NSUHhyS3VoSHVMZVdHaXpWR0l5d1o2NSsyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicExjM0grSkFQcnNtQ0dLM3czK2l1TE5uSjIvYUh5Qk43TW9pR296VEJRUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB0bUNsOERQbUgyWS9SREpYOFNvOUlkYm5ZRXREeUhmcm1VOHc5UEVtalVPb2toaUZUNUYwY0RKQTBqbVVOZUl2ZmZjZzRBK3VmK3hGVW1Ta2FyTGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6ImpPeGszS3NOZ0lGV2h5Q20weTdmOWc0N21nMW9pQjNlZjV0SHAxZ1VEdkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllxeGlDeDdVU1JXTFg5eXBCbEZTWGciLCJwaG9uZUlkIjoiMjkzZTU4MDktMDU4OS00ZjVmLTk1N2ItNzEwN2U1ODQ4ODljIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims5em5ZcUc3eDYzRWFFTlpSbkQ1S0hFRW96ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOWklrSmZwOHJqZmo2d2tOdHg3UGpsMkRwZmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUdLNDY4WEwiLCJtZSI6eyJpZCI6IjIzNDkwNDUwNTQ3Mjk6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTGVnZW5kIEtpbmcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082Nm5MMENFTldJNkxFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJZUkFQQUFKaHBQOTYyZmpKaGZSOCtaUGF2NmxUU1Blc3RLSHpvajZiM3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVyTURRSkR5OEpINEw0R3FvMEtYRElEaGFWZmttWWdtZnJSTkNxUnRIUnk0QVlMVzRJVFo2cWxqa1FscFZ4N0dXVGh1dCt2am8rY0JReHpWc3ZkOUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWTGRMN0YreVpOck1uSkttWXpYSDhMUFMwSWVQUVlUZEtENXhIcERrWXRGWVFOeTlUOERtcTJVVU5RU0FFQzRUVU9pdGNEWk1jOUxiNUhQcUt2Rmhodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNDUwNTQ3Mjk6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZG1FUUR3QUNZYVQvZXRuNHlZWDBmUG1UMnIrcFUwajNyTFNoODZJK205NyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTA3ODI0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEcVcifQ==" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.0",
  caption : process.env.CAPTION || "*©x-silva-md*" , // ```『 ©x-silva-md 』```", //*『©x-silva-md』*\n youtube.com/@silvaedits"),
 
  author : process.env.PACK_AUTHER|| "SilvaTech",
  packname: process.env.PACK_NAME || "WhatsappBots♥️",
  botname : process.env.BOT_NAME  || "silva-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Legend king",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "silva",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
