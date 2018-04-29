const request = require('request')

var getDataByTag = (tag, callback) => {

  request({
    url: `https://www.instagram.com/explore/tags/${tag}/?__a=1`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, body)
    } else {
      callback('unable to fetch data')
    }
  });

}

module.exports.getDataByTag = getDataByTag;
