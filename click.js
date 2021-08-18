const puppeteer = require('puppeteer');
/*await page.goto('https://popcat.click/', {waitUntil: 'networkidle2'})*/
    (async () => {
            const browser = await puppeteer.launch({ headless: true })

            const page = await browser.newPage()
            await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36')
            //await page.setViewport({ width: 800, height: 600 })
            await page.goto('https://popcat.click/')
            await page.addScriptTag({path: 'll.js'})

            const page1 = await browser.newPage()
            await page1.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36')
            //await page.setViewport({ width: 800, height: 600 })
            await page1.goto('https://popcat.click/')
            await page1.addScriptTag({path: 'l.js'})
           
        
            while (true) {
              console.log(await page.$eval("body > div > div > div", el => el.textContent) + ' ᓚᘏᗢ 1\n')
              console.log(await page1.$eval("body > div > div > div", el => el.textContent) + ' ᓚᘏᗢ 2\n')

            }

    })()