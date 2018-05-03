const yargs = require('yargs');

const getData = require('./utils/getData');
const getImage = require('./utils/getImage');
const getTags = require('./utils/getTags');
const writeFile = require('./utils/writeFile');

const options = {
    tag: {
        describe: 'name of the tag to search on instagram',
        demand: true,
        alias: 't'
    }
};

const argv = yargs
    .command('search', 'search on instagram with a tag', {
        tag: options.tag
    })
    .command('infos', 'get infos on a tag on instagram with a tag', {
        tag: options.tag
    })
    .help()
    .argv;

let command = argv._[0];

if (command === 'search') {

    let search = argv.tag;
    getData.getDataByTag(search, (err, res) => {

        if (err) {
            console.log(err);
        } else {

            let obj = res.graphql.hashtag.edge_hashtag_to_media.edges;
            getImage.getImageByUrl( obj, search);
        }
    });

} else if (command === 'infos') {

    let search = argv.tag;

    getTags.getTagsInfos(search, (res) => {
        writeFile.writeDataToFile(res, search);
    });

} else {
    console.log('please, try again');
}
