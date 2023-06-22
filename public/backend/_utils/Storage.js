
const Store = require("electron-store");

class Storage {
  // static collectionIdCounter = 0;
  // static listIdCounter = 0;
  // static taskIdCounter = 0;
  // static reminderIdCounter = 0;
  // static subTaskIdCounter = 0;
  // static subTaskReminderIdCounter = 0;

  constructor(options = {}) {
    this.store = new Store(options);

    // initialize store if empty
    
    // first, if there are no collections, set collections to an empty array
    if (!this.store.has("collections")) {
      this.store.set("collections", []);
    }

    // Here is the data structure of the store:
    const store = {
      // Collection ID (a counter that increments by 1 every time a new collection is created)
      1: {
        name: "My Collection", // The name of the collection
        color: "3D74BE", // The color of the collection
        lists: {
          // List ID (a counter that increments by 1 every time a new list is created)
          1: {
            name: "My List", // The name of the list
            tasks: {
              // Item ID (a counter that increments by 1 every time a new item is created)

              1: {
                text: "My Item", // The text of the task
                completed: false, // Whether the item is completed or not
                dateTimeCreated: "2021-08-01T12:00:00.000Z", // The date and time the item was created
                dateTimeCompleted: null, // The date and time the item was completed
                dateTimeDue: null, // The date and time the item is due
                reminders: {
                  // Reminder ID (a counter that increments by 1 every time a new reminder is created)
                  1: {
                    dateTime: "2021-08-01T12:00:00.000Z", // The date and time the reminder is set for
                  },
                },
                subTasks: {
                  // Subtask ID (a counter that increments by 1 every time a new subtask is created)
                  1: {
                    text: "My Subtask", // The text of the subtask
                    completed: false, // Whether the subtask is completed or not
                    dateTimeCreated: "2021-08-01T12:00:00.000Z", // The date and time the subtask was created
                    dateTimeCompleted: null, // The date and time the subtask was completed
                    dateTimeDue: null, // The date and time the subtask is due
                    reminders: {
                      // Reminder ID (a counter that increments by 1 every time a new reminder is created)
                      1: {
                        dateTime: "2021-08-01T12:00:00.000Z", // The date and time the reminder is set for
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  }

  // basic CRUD operations

  set(key, value) {
    this.store.set(key, value);
  }

  get(key) {
    return this.store.get(key);
  }

  delete(key) {
    this.store.delete(key);
  }

  clear() {
    this.store.clear();
  }

  has(key) {
    return this.store.has(key);
  }

  onDidChange(key, callback) {
    this.store.onDidChange(key, callback);
  }

  //--------------------------------------------------------------------------------

  // Collection CRUD operations

  //// Collections

  async newCollection(name, color) {
    const collections = this.store.get("collections");
    const id = collections.length + 1 || 1;
    const newCollection = {
      id: id,
      name: name,
      color: color,
      lists: [],
    };
    collections.push(newCollection);
    this.store.set("collections", collections);

    console.log(`New collection: ${name} ${color}!`);
    console.log(`ID: ${id}`);
    return newCollection;
  }

  async getCollectionsList() {
    const collections = this.store.get("collections");
    // should return an array of objects like { id: 1, name: 'My Collection', color: '3D74BE' }

    let collectionsList = [];
    collections.forEach((collection) => {
      collectionsList.push({
        id: collection.id,
        name: collection.name,
        color: collection.color,
      });
    });

    console.log(collectionsList);
    return collectionsList;
  }
}

module.exports = Storage;
// // Usage example:
// const store = new Storage();

// store.set('name', 'John Doe');
// console.log(store.get('name')); // Output: John Doe

// store.onDidChange('name', (newValue, oldValue) => {
//   console.log(`Value changed from ${oldValue} to ${newValue}`);
// });

// store.set('name', 'Jane Doe'); // Output: Value changed from John Doe to Jane Doe
