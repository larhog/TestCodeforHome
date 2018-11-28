var DOMParser = new (require('xmldom')).DOMParser;
var fs = require('fs')
var xmldoc = require('xmldoc');
var parseString = require('xml2js').parseString;
//var xml = getXML();
var theFile = '../KONE_repo//SFDC-MAIN/src/objects/Asset.object'

fs.readFile(theFile, function(err, data) {

    var document = DOMParser.parseFromString(data);
    var spans = findElements('fields', document.documentElement);
    for (var i = 0; i < spans.length; i++) {
        console.dir(spans[i]);
    }
});

function findElements(element, xml) {
    var output = [];

    var nodes = xml.childNodes;
    if (nodes != null) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName == element && nodes[i].childNodes.length == 1) {
                output.push(nodes[i].childNodes[0].nodeValue);
            } else {
                output = output.concat(findElements(element, nodes[i]));
            }
        }
    }
    return output;
}