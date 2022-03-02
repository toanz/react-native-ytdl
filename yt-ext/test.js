// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    presets: [[
        '@babel/preset-env',
        {
          targets: {
            esmodules: true,
          },
        },
      ],]
  });

global.fetch = require('node-fetch');

const utils = require('./lib/utils');

// utils.checkForUpdates();
  
  // Import the rest of our application.
const getLink = require('./index.js').default;

const reportLog = require('./report.js').default;

const getYoutubeLink = ytId => {
    if (!ytId) return '';
  
    return getLink(ytId, { quality: "highest" }).then(res => res[0].url).catch(err => {
      console.log('yt error', err);
      return '';
    });
  };

 async function test() {
    const youtubeURL = 'OdVvBRNAWAI';
    const urls = await getLink(youtubeURL, { quality: 'highest' });
    console.log(urls)
}

const { getBasicInfo } = require('./lib/info');

// let arrLog = [];

// function reportLog(...args) {
//   arrLog = [ ...arrLog , ...args];
//   console.log(...args);
// }
// const axios = require('axios');
// function pushLog(data) {
//   console.log(data)
//   global.reportLog = null;
//   return axios.post('http://192.168.1.14:1338/sheet/data', { 
//     name: "bug",
//     data: arrLog,
//     key: "vuongtao"
//   }).then(res => res.data);
// }



// global.reportLog = reportLog;

// getYoutubeLink('OdVvBRNAWAI').then(console.log)


// const reportLog = require('./report.js').default;
// getYoutubeLink('VuNIsY6JdUw').then(console.log)
// reportLog('VuNIsY6JdUw',"11","Vuong","Khong xem duoc","vuong@gmail.com")
// .then(console.log)
// .then(res => getYoutubeLink('ndwGVyEIiqE'))
// .then(console.log)

// getYoutubeLink('NcRifDitRnU').then(console.log)

getYoutubeLink('YQHsXMglC9A').then(console.log)

// getBasicInfo('WsptdUFthWI').then((item) => console.log(item))