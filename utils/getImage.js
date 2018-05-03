const download = require('download');
const fs = require('fs-extra');
const _ = require('lodash');
const moment = require('moment');

var getImageByUrl = (url, folder) => {

    fs.mkdirs(`media/${folder}/`, function(err) {
        if (err) throw err;
    });

    let t = [];
    url.forEach( (u) => {
        t.push(u.node);
    });

    let obj = _.map(t, (x) => {

        let name = x.display_url.split('/');
        name = name[name.length -1];

        let meta = new Object();
        meta.name = name;
        meta.date = moment.unix(x.taken_at_timestamp).format('MM/DD/YYYY');
        meta.owner = x.owner.id;
        meta.height = x.dimensions.height;
        meta.width = x.dimensions.width;
        meta.url = x.display_url;
        meta.comments = x.edge_media_to_caption;
        return meta;
    });

    obj.map(x => {
        download(x.url, `media/${folder}`).then(() => {
            console.log(`Image : ${x.url} in ${folder} is downloaded`);
        });
    });


    if (fs.existsSync(`media/${folder}/data.json`)) {
        fs.readFile(`media/${folder}/data.json`, function(err, content) {
            if (err) throw err;
            var parseJson = JSON.parse(content);

            obj.forEach( (o) => {
                parseJson.push(o);
            });

            let json = JSON.stringify(obj);
            fs.writeFile(`media/${folder}/data.json`,json, 'utf8', (err) => {
                if (err) throw err;
            });
        });

    } else {
        let json = JSON.stringify(obj);
        fs.writeFile(`media/${folder}/data.json`,json, 'utf8', (err) => {
            if (err) throw err;
        });
    }


};

module.exports.getImageByUrl = getImageByUrl;
