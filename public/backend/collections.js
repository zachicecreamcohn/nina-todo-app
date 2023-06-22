const { ipcMain } = require('electron')
const Storage = require('./_utils/Storage');

let storage = new Storage();

module.exports = function handleCollectionsIPC() {
    ipcMain.handle('new-collection', (event, { name, color }) => {
        console.log(`New collection: ${name} ${color}!`);
      const newCollection = storage.newCollection(name, color);
        return newCollection;
    });

    ipcMain.handle('get-collections-list', (event) => {
        const collectionsList = storage.getCollectionsList();
        return collectionsList;
    });
  }