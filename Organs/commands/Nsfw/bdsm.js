const Ali_Aryan = require("../../../lib/hentai.json")
require ('../../../settings')
module.exports={
    name:"bdsm",
    alias:["bdsm"],
    usage:`${prefa}bdsm`,
    desc:"Gives you hentai bdsm image",
    react:"💦",

    category:"Nsfw",
    start:async(client,m,{command,prefix,text,args})=>{
    if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')

    let wife = Ali_Aryan.bdsm
    let ass = wife[Math.floor(Math.random() * wife.length)]

   let buttons = [
    {buttonId: `${prefix} bdsm`, buttonText: {displayText: '>>'}, type: 1}
    ]

    let buttonMessage = {
        image: {url:ass},
        caption: `*⛓️*`,
        footer: `*©Eternity-Team*`,
        buttons: buttons,
        headerType: 4
    }
    client.sendMessage(m.from, buttonMessage, { quoted: m })

    }
}