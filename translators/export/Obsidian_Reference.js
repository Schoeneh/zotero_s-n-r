{
	"translatorID": "76a79119-3a32-453a-a0a9-c92640e3c93b",
	"label": "Obsidian_Reference",
	"creator": "Henrik Schoenemann",
	"target": "markdown",
	"minVersion": "2.0",
	"maxVersion": "",
	"priority": 200,
	"inRepository": true,
	"translatorType": 2,
	"lastUpdated": "2024-10-21 14:07:14"
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
			// harcoded translator-id in local "fileInterface.js" -> "exportingNotes" (line 67)
			let title_begin = item.note.search("<h1>");
			let title_end = item.note.search("</h1>");
			out = ["[Note: ","*",item.note.substring(title_begin+4,title_end),"*","]",
					"(zotero://select/library/collections/",collections[0],"/items/",key,")"]
		}
		else if (type == "webpage"){

		}
		else {
			let att = item.attachments;
			out = ["[",getCreators(item.creators),getDate(item.date),": *",item.title,"*","]",
					"(zotero://open-pdf/library/items/",getPDFkey(att),"?page=0)"];
		}
		
		c++;
		if (c > 1){
			Zotero.write("<br>");
		}	
		Zotero.write(out.join(""));
	}
}

function getPDFkey(att) {
	let att_arr = [];
	let i = 0;
	while (i < att.length) {
		if (att[i]['contentType'] == "application/pdf") {
			att_arr.push(att[i]['itemKey']);
		}
	i++;
	}
	return att_arr[0];
}

function getCreators(creators)
{
	let etalcut = 3;

	let creators_au = [];
	let creators_bau = []
	let creators_ed = [];
	let i = 0;
	while (i < creators.length) {
		if (creators[i].creatorType == "author") {
			creators_au.push(creators[i].lastName)
		}
		else if (creators[i].creatorType == "bookAuthor") {
			creators_bau.push(creators[i].lastName)
		}
		else if (creators[i].creatorType == "editor") {
			creators_ed.push(creators[i].lastName)
		}
		i++;
	}

	if (JSON.stringify(creators_au) === JSON.stringify(creators_bau) || JSON.stringify(creators_au) === JSON.stringify(creators_ed)) {
		if (creators_au.length > etalcut) {
			creators = creators_au[0] + " et al. ";
		}
		else {
			creators = creators_au.join(', ') + ". ";
		}
	}
	else if (JSON.stringify(creators_au) === "") {
			if (creators_ed.length > etalcut) {
			creators = creators_ed[0] + " et al. ";
		}
		else {
			creators = creators_ed.join(', ') + ". ";
		}
	}
	else {
				if (creators_au.length > etalcut) {
			creators = creators_au[0] + " et al. ";
		}
		else {
			creators = creators_au.join(', ') + ". ";
		}
	}
	return creators;
}
function getDate(date) {
	return date.slice(0,4);
}

/** BEGIN TEST CASES **/
var testCases = [
]
/** END TEST CASES **/
