const axios = require('axios');
const getLink = require('./index.js').default;

const getYoutubeLink = ytId => {
    if (!ytId) return '';
  
    return getLink(ytId, { quality: 'highest' }).then(res => res[0].url).catch(err => {
      return err && err.message;
    });
};

const PUSH_SERVER = 'http://192.168.1.14:1338/sheet/data';
const LOG_CONFIG = { 
    name: "bug",
    key: "vuongtao"
};
const VIDEO_URL = "https://www.youtube.com/watch?v=";

function pushLog(arrLogs) {
    global.reportLog = null;
    return axios.post(PUSH_SERVER, { 
        ...LOG_CONFIG,
        data: arrLogs,
    }).then(res => res.data)
    .catch(err => {
        return err && err.message;
    });
};

const report = (ytID = '' , ...infos) => {
    let arrLog = [VIDEO_URL + ytID, ...infos];
    global.reportLog =  (...args) => {
        arrLog = [ ...arrLog , ...args];
        console.log(...args);
    }
    return getYoutubeLink(ytID).then( link => {
        arrLog.push(link);
        return pushLog(arrLog)
    })
};


export default report