const { MessageType } = require('@adiwajshing/baileys')
const { WAConnection } = require('@adiwajshing/baileys')
const qrcodes = require('qrcode');
const fs = require('fs')
const zacky = new WAConnection()
zacky.version = [12, 2006, 3]
zacky.browserDescription = [ 'Zacky bot', 'Safari', '3.0' ]
const base64ToImage = require('base64-to-image');
exports.jadibot = async function(zacky,from,sender,reply,mek) {  
zacky.on('qr' ,async qr => {
  url = await qrcodes.toDataURL(qr)
  auth = true
        //console.log(url)
        buff = await Buffer.from(url.split('data:image/png;base64,')[1], 'base64')
        await fs.writeFileSync('./jadibot.jpg', buff)
    let scen = await zacky.sendMessage(from, fs.readFileSync('./jadibot.jpg'), MessageType.image, {quoted : mek,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})
    
  setTimeout(() => {
       zacky.deleteMessage(from, scen.key)
  }, 30000);
  })
  
zacky.on ('open',() => {
  console.log ('credentials update')
  const authInfo = zacky.base64EncodedAuthInfo()
  fs.writeFileSync(`./zjadibot/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
})

    zacky.on("chat-update", async (message) => {
    require("./zacky.js")(zacky, message);
    });
    
    await zacky.connect().then(async ({user}) => {
      reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
    })
    }
exports.stopjadibot = async function(zacky, from, sender){
  zacky.sendMessage(from,'Kamu tidak terdaftar di ListBot!',MessageType.text)
  await fs.unlinkSync(`./zjadibot/${sender}.json`)
  zacky.close()
}
