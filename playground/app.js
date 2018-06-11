const fs = require('fs');
const clean = require('./clean');

var obj;

fs.readFile('data.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  const textStream = fs.createWriteStream('data.txt', {'flags': 'a'});
  obj.map((o) => {
    o.comments.edges.map((i) => {
      let text = i.node.text;
      let res = clean(text);
      console.log(res)
      textStream.write(res);
    });
  });
  textStream.end();
});
