var doc = fl.getDocumentDOM();
var items = doc.library.items.slice();

var exportPath = doc.path.match(/.*(?=\/.*$)/)[0] + "/images/";

function mkdir(item) {
  var path = item.name.match(/.*(?=\/.*)/);
  var newFolder = "file:///" + exportPath + path;
  if (path !== null && !FLfile.exists(newFolder)) {
    FLfile.createFolder(newFolder);
    return newFolder;
  }
  return false;
}

function itemURI(item, defaultExt) {
  defaultExt = defaultExt || 'png'
  var uri = "file:///" + exportPath + item.name;
  if (!/\..*(?=$)/.test(uri)) {
    uri += '.' + defaultExt;
  }
  return uri;
}

var item;
while(items.length) {
  item = items.shift();

  // exports bitmaps on your library
  if (item.itemType == "bitmap") {
    mkdir(item);
    item.exportToFile(itemURI(item), 100);
  }

  // exports graphics and movieclips that are named with the .png extension
  if (item.exportToPNGSequence && /\.png$/.test(item.name)) {
    mkdir(item);
    item.exportToPNGSequence(itemURI(item));
  }
}
