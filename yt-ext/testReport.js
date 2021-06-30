const axios = require('axios');

const PUSH_SERVER = 'https://cms.ejoylearning.com/sheet/data';
const LOG_CONFIG = { 
    name: "glotdata",
    key: "vuongtao"
};

function pushLog(arrLogs) {
    return axios.post(PUSH_SERVER, { 
        ...LOG_CONFIG,
        data: arrLogs,
    }).then(res => res.data)
    .catch(err => {
        return err && err.message;
    });
};

pushLog([['userid','email',"pharse","subline","time"],['useri2d','email2',"pharse2","sublin2e","ti2me"]])
.then(console.log)
// .then(res => getYoutubeLink('ndwGVyEIiqE'))
// .then(console.log