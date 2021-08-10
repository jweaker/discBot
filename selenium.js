const { Builder, By, Key, until } = require('selenium-webdriver');
const { exec } = require("child_process");
const fs = require('fs')
const https = require('https');
//Node.js Function to save image from External URL.
function download(url, localPath) {
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function (response) {
    response.pipe(file);
  });
}

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  let email = 'jweaker.alt@gmail.com'
  let pass = 'Rfvvfr123'
  let images; 
  try {
    await driver.get('https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D282859044593598464%26scope%3Didentify%2Bguilds%2Bemail%26response_type%3Dcode%26access_type%3Doffline');
    driver.executeScript(function () {
      localStorage.setItem('token','NzU1NDQzNzAyOTA1ODMxNTM3.YQb2kg.1GQufnSC-vtg6oDAFeMCp5FeW6Q');
  });
    var date = new Date().toString();
    await driver.manage().window().maximize()
    //await driver.findElement(By.name('password')).sendKeys(pass, Key.RETURN);
    
    await driver.wait(until.elementLocated(By.xpath('//*[@id="app-mount"]/div[2]/div/div/div/section')), 10000).then(() => {
      return exec("click.ahk");
    });
    //ssssdsd
    await driver.wait(until.elementLocated(By.className('challenge')), 10000).then(el => {
      for(let i=0;i<9;i++){
        images[i]=driver.findElement(by.xpath("(//div[@class='image'])["+(i+6)+"]")).getAttribute('style');
        console.log(images[i])
      }
    });
    await driver.wait(until.elementLocated(By.xpath('//*[@id="app-mount"]/div[2]/div/div/div/div/div[2]/button[2]')), 10000).then(el => {
      return el.click()
    });
    await driver.wait(until.titleIs('ProBot - Bot for Discord'), 200000);
    await driver.get('https://probot.io/daily');
    await driver.wait(until.titleIs("ProBot - Discord Multipurpose bot"), 200000);
    await driver.wait(until.elementLocated(By.xpath('//*[@id="daily"]/div/div/div[1]')), 100000).then(el => {
      return el.click()
    });
    await setTimeout(async () => {
      await exec("click.ahk");
    }, 3000);
    await setTimeout(async () => {
      await driver.takeScreenshot(4).then(
        function(image, err) {
            require('fs').writeFile('./img/'+date+'-c.png',image, 'base64', function(err) {
                console.log(err);
            });
            sharp('./img/'+date+'-c.png').extract({ width: 1920, height: 1080, left: 60, top: 40 }).toFile('./img/'+new Date.now()+'.png')
        }
    );
  }, 3000);
  } finally {

  }
})();