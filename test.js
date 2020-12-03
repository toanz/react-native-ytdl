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
  
  // Import the rest of our application.
const getLink = require('./index.js').default;

const getYoutubeLink = ytId => {
    if (!ytId) return '';
  
    return getLink(ytId, { quality: 'highest' }).then(res => res[0].url).catch(err => {
      console.log('yt error', err);
      return '';
    });
  };

 async function test() {
    const youtubeURL = 'OdVvBRNAWAI';
    const urls = await getLink(youtubeURL, { quality: 'highest' });
    console.log(urls)
}

// getYoutubeLink('OdVvBRNAWAI').then(console.log)


// getYoutubeLink('VuNIsY6JdUw').then(console.log)

getYoutubeLink('ndwGVyEIiqE').then(console.log)