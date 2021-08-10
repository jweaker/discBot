const https = require('https')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const options = {
  hostname: 'probot.io',
  port: 443,
  path: '/daily',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    var ss = new JSDOM(d.body)
    ss.window.document.getElementsByClassName('fas fa-gift')[0].click()

  })
})
//https://discord.com/oauth2/authorize?client_id=282859044593598464&scope=identify+guilds+email&response_type=code&access_type=offline
req.on('error', error => {
  console.error(error)
})

req.end()