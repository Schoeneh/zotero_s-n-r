{
	"translatorID": "59b6b960-2325-468c-93b2-17dd49d360a1",
	"label": "Obsidian_Reference_Notes",
	"creator": "Henrik Schoenemann",
	"target": "markdown",
	"minVersion": "2.0",
	"maxVersion": "",
	"priority": 200,
	"configOptions": {
		"noteTranslator": true
	},
	"inRepository": true,
	"translatorType": 2,
	"lastUpdated": "2024-10-23 09:54:31"
}

function doExport() {
	let item;
	let c = 0;
	while(item = Zotero.nextItem()) {
		let out;
		let type = item.itemType;
		let collections = item.collections;
		let key = item.itemKey;
    if (type == "note"){
			// h
			let title_begin = item.note.search("<h1>");
			let title_end = item.note.search("</h1>");
			out = ["[Note: ","*",item.note.substring(title_begin+4,title_end),"*","]",
					"(zotero://select/library/collections/",collections[0],"/items/",key,")"]
		}
    c++;
    if (c > 1){
			Zotero.write("<br>");
		}	
		Zotero.write(out.join(""));
	}
}

/** BEGIN TEST CASES **/
var testCases = [
]
/** END TEST CASES **/
