const fs = require('fs');

const getComments = (obj, tag) => {
  const textStream = fs.createWriteStream(`./data/comments_for_${tag}.txt`, {'flags': 'a'});
  obj.map((o) => {
    o.node.edge_media_to_caption.edges.map((i) => {
      let text = i.node.text;
      textStream.write(text);
    });
  });
  textStream.end();
};

module.exports.getComments = getComments;
