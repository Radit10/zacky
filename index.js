const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    ReconnectMode,
    GroupSettingChange
} = require('@adiwajshing/baileys')

const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
const fs = require('fs')
const { color, bgcolor } = require('./lib/color')
const moment = require('moment-timezone')
const spin = require('spinnies')
const fetch = require('node-fetch')
const chalk = require('chalk')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')


//AUTO UPDATE BY MANIK COMOT DI SC ELAINA TOBZ AOKQOWKWOWKW
nocache('./Manik.js', module => console.log(color("[!]", "gold"), color(time, "white"), color(`${module} is now updated!`, "magenta"), color("[!]", "gold")))              
function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

// Spinner
const spinner = { 
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

// Watermark
CFonts.say('ZACKY BOT', {
    font: 'chrome',
    align: 'center',
    gradient: ['red', 'magenta']
})
CFonts.say('UPDATE V2', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
let args = [path.join('Manik.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })

/********** CONNECTION **********/
async function starts() {
	console.log(color('Hai Zacky!','red'))
	const zacky = new WAConnection()
	zacky.logger.level = 'warn'
	zacky.autoReconnect = ReconnectMode.onConnectionLost;
	zacky.version = [12, 2006, 3]
    zacky.browserDescription = [ 'Zacky bot', 'Chrome', '3.0' ]	
	zacky.on('qr', () => {		
	console.log(color('[','white'), color('!','red'), color(']','white'), color('Subscribe「 zacky ᴏғғɪᴄɪᴀʟツ 」'))
	})
	fs.existsSync('./session.json') && zacky.loadAuthInfo('./session.json')
    zacky.on('connecting', () => {
    start('2', 'Connecting...')
    })
    zacky.on('open', () => {
    success('2', 'Connected')
    console.log(color(`Welcome To ZACKY BӨƬ`, 'red'))
    console.log(color(`Created By Zacky`, 'yellow'))
	})
    await zacky.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./session.json', JSON.stringify(zacky.base64EncodedAuthInfo(), null, '\t'))
    //teks = `https://chat.whatsapp.com/DXH3DJ93gdL3nwtJRHSIN8`
    //zacky.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    //zacky.sendMessage("0@s.whatsapp.net", `Sukses terhubung prefix saat ini ( Multi Prefix )`, MessageType.text)    
    console.log(color('|WRN|', 'yellow'), color('Bergabung Ke Group [ ⎙ INFO ] ZACKY DEV 📚🤖', 'cyan'))
    fetch(`http://ip-api.com/line`).then(res => res.text())  
    .then(bu =>{
    console.log(color('\n[ IP ADDRESS ]', 'yellow'), color(`\n${bu}`, 'cyan'))
    
    })
    
    zacky.on("chat-update", async (message) => {
    require("./Manik.js")(zacky, message);
    });

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

}
starts()