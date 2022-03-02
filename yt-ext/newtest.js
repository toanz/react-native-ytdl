var fs = require('fs');

const jsonClosingChars = /^[)\]}'\s]+/;
const parseJSON = (source, varName, json) => {
  if (!json || typeof json === 'object') {
    return json;
  } else {
    try {
      json = json.replace(jsonClosingChars, '');
      console.dir(json)
      return JSON.parse(json);
    } catch (err) {
      throw Error(`Error parsing ${varName} in ${source}: ${err.message}`);
    }
  }
};


fs.readFile('abc.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(parseJSON('watch.json', 'body', data));
});
