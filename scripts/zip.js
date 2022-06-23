const zip = require("jszip");
const fs = require("fs");

var zipped = zip.folder("../src");

zip.generateAsync({ type: "blob" }).then((content) => {
  fs.writeFile("../dist/modpack.zip", content);
});
