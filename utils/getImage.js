const download = require('download');
const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');


var getImageByUrl = (url, folder) => {

  let t = [];
  url.forEach( (u) => {
    t.push(u.node);
    }
  );

  let obj = _.map(t, (x) => {

    let name = x.display_url.split('/');
    name = name[name.length -1];

    let meta = new Object();
    meta.name = name;
    meta.date = moment.unix(x.taken_at_timestamp).format("MM/DD/YYYY");
    meta.owner = x.owner.id;
    meta.height = x.dimensions.height;
    meta.width = x.dimensions.width;
    meta.url = x.display_url;
    return meta;
  });

  obj.map(x => {
    console.log(x.url)
    download(x.url, `media/${folder}`).then(() => {
        console.log(`Image : ${x.url} in ${folder} is downloaded`)
        let json = JSON.stringify(obj);
        fs.writeFile(`media/${folder}/data.json`,json, 'utf8', (err) => {
            if (err) throw err;
        });
      });
  });

}

module.exports.getImageByUrl = getImageByUrl;
