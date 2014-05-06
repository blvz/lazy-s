/*
  Sup,

  This is a command, to use with the Adobe Flash IDE. You should definitely create a keyboard shortcut for it.
  It pastes the HTML text on clipboard to stage, selects the created element, removes it's tags and finally applies the intended formatting (bold, italic or both).
  But don't expect it to do underlines. :)
  If you're on a Mac, use it along with my "Copy RTF as HTML" service for maximum awesomeness.

  — blvz
*/

var doc = fl.getDocumentDOM();

function htmlToTextAttr(html) {
  var html = html.replace(/<br>/g, String.fromCharCode(13)).replace(/\s/g, String.fromCharCode(160));
  var xml = eval('<data>' + html + '</data>');
  var text = '';
  var textAttrList = [];

  for each(node in xml..*) {
    if (node.children().length()) continue;

    var startIndex = text.length;
    text += node.toString();
    var endIndex = text.length;

    if (isNodeChildOf(node, 'b')) {
      textAttrList.push({name: 'bold', value: true, startIndex: startIndex, endIndex: endIndex});
    }
    if (isNodeChildOf(node, 'i')) {
      textAttrList.push({name: 'italic', value: true, startIndex: startIndex, endIndex: endIndex});
    }
    if (isNodeChildOf(node, 'u')) {
      textAttrList.push({name: 'underline', value: true, startIndex: startIndex, endIndex: endIndex});
    }
  }

  return {text: text.replace(/\s/g, ' '), textAttrList: textAttrList};
}

function isNodeChildOf(node, tagName) {
  if (node.parent() === null) return false;
  return node.parent().name().toString() === tagName || isNodeChildOf(node.parent(), tagName);
}

function start() {
  doc.clipPaste();
  var txtField = doc.selection[0];
  var converted = htmlToTextAttr(txtField.getTextString());
  txtField.setTextString(converted.text);
  var hasUnderline = false;
  for each(var textAttr in converted.textAttrList) {
    if (textAttr.name === 'underline') {
      hasUnderline = true;
      continue;
    }
    txtField.setTextAttr(textAttr.name, textAttr.value, textAttr.startIndex, textAttr.endIndex);
  }
  if (hasUnderline) {
    alert("Flash can't underline. LULZ.");
  }
}

start();
