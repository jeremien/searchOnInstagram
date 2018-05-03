const Instagram = require('node-instagram').default;
const moment = require('moment');

const {config} = require('../config/config.js');

const instagram = new Instagram(config);

let date = moment().format('LLL');

var getTagsInfos = (tag, callback) => {
    instagram.get('tags/search', { q: tag }).then((data) => {
        let infos = [];
        data.data.forEach((d)=> {
            infos.push(`${d.media_count} posts for ${d.name} \n`);
        });
        callback(`${date} : \n ${infos} \n`);
    }).catch((err) => {
        console.log(err);
    });
};

module.exports.getTagsInfos = getTagsInfos;
