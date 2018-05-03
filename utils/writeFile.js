const fs = require('fs-extra');

var writeDataToFile = (data, tag) => {
    console.log(data, tag);
    var log = fs.createWriteStream(`data/${tag}.txt`, {
        flags: 'a'
    });
    log.write(data);
};

module.exports.writeDataToFile = writeDataToFile;
