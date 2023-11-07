var fieldName = "title";
// für alle möglichen Felder + ihre Namen siehe https://api.zotero.org/itemFields?pprint=1

var search = ".";
var replace = ":";

 
var fieldID = Zotero.ItemFields.getID(fieldName);
var s = new Zotero.Search();
s.libraryID = ZoteroPane.getSelectedLibraryID();
s.addCondition(fieldName, 'contains', search);
var ids = await s.search();
if (!ids.length) {
    return "No items found";
}
await Zotero.DB.executeTransaction(async function () {
    for (let id of ids) {
        let item = await Zotero.Items.getAsync(id);
        let mappedFieldID = Zotero.ItemFields.getFieldIDFromTypeAndBase(item.itemTypeID, fieldName);
        let oldValue = item.getField(fieldName);
        let newValue = oldValue.replace(search, replace)
        item.setField(mappedFieldID ? mappedFieldID : fieldID, newValue);
        await item.save();
    }
});
return ids.length + " item(s) updated"