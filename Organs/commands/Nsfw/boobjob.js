const ecchi = require("../../../lib/hentai.json")
require ('../../../settings')
module.exports={
    name:"boobjob",
    alias:["paizuri"],
    usage:`${prefa}boobjob`,
    desc:"Gives you hentai boobjob image",
    react:"💦",

    category:"Nsfw",
    start:async(client,m,{command,prefix,text,args})=>{
    if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')

    let wife = ecchi.boobjob
    let ass = wife[Math.floor(Math.random() * wife.length)]

   let buttons = [
    {buttonId: `${prefix} boobjob`, buttonText: {displayText: '>>'}, type: 1}
    ]

    let buttonMessage = {
        image: {url:ass},
        caption: `*😈*`,
        footer: `*Mitsu*`,
        buttons: buttons,
        headerType: 4
    }
    client.sendMessage(m.from, buttonMessage, { quoted: m })

    }
}
