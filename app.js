const yargs = require('yargs');
const cron = require('node-cron');

const getData = require('./utils/getData');
const getImage = require('./utils/getImage');
const getTags = require('./utils/getTags');
const writeFile = require('./utils/writeFile');

const options = {
    tag: {
        describe: 'name of the tag to search on instagram',
        demand: true,
        alias: 't'
    },
    time: {
      describe: 'timer for the search in minutes'
    }
};

const argv = yargs
    .command('search', 'search on instagram with a tag', {
        tag: options.tag
    })
    .command('searchEvery', 'search on instagram every minute with multiple tags', {
        tag: options.tag
    })
    .command('infos', 'get infos on a tag on instagram with a tag', {
        tag: options.tag
    })
    .help()
    .argv;

let command = argv._[0];

if (command === 'search') {

    const search = argv.tag;
    getData.getDataByTag(search, (err, res) => {

        if (err) {
            console.log(err);
        } else {

            let obj = res.graphql.hashtag.edge_hashtag_to_media.edges;

            getImage.getImageByUrl( obj, search);


        }
    });

} else if (command === 'searchEvery') {

    let search = argv.tag;
    let arr = search.split(',');

    arr.map((s) => {
      let tag = s.trim();
      cron.schedule('* * * * *', () => {
        console.log(`running search every minutes on ${tag}`);
        getData.getDataByTag(tag, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            let obj = res.graphql.hashtag.edge_hashtag_to_media.edges;
            getImage.getImageByUrl( obj, tag);
          }
        });
      });
    });


} else if (command === 'infos') {

    let search = argv.tag;

    getTags.getTagsInfos(search, (res) => {
        writeFile.writeDataToFile(res, search);
    });

} else {
    console.log('please, try again');
}
