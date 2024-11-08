var items = Zotero.getActiveZoteroPane().getSelectedItems();
for (let item of items) {
    item.addTag("PDF-Gesamt")
    await item.saveTx();
}