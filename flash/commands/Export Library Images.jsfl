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
	var uri = "file:///" + exportPath + item.name;
	if (!/\..*(?=$)/.test(uri)) {
		uri += '.png';
	}
	return uri;
}

var item;
while(items.length) {
	item = items.shift();
	if (item.itemType == "bitmap") {
		mkdir(item);
		item.exportToFile(itemURI(item, 'png'), 100);
	}
}