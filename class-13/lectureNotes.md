# Lecture Notes

## Persistence of Data
- the ability to store data to be accessed at a later point
- database(301)
- local storage
  - an object in our browser specific to YOUR computer that store data in it's properties
  - technically stores the info in a file on your computer in your Chrome(browser) application file


## Local Storage
### How data is stored
- you can set string data into storage as a key: value pair
- to stringify objects and arrays use `JSON.stringify()`
- to turn them back we need `JSON.parse()`

### Methods on Local Storage
- `getItem(key)`
- `setItem(key, value)`
- `clear()`
- `removeItem(key)`
- `key(): Passed a number to retrieve nth key of a localStorage.`