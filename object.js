const language = {
  name: "javascript",
  year: 1995,
  creator: "Brendan Eich",
  isDynamic: true,
};

console.log(Object.keys(language)); // ["name", "year", "creator", "isDynamic"]
console.log(Object.values(language)); // ["javascript", 1995, "Brendan Eich", true]
console.log(Object.entries(language)); // [["name", "javascript"], ["year", 1995], ["creator", "Brendan Eich"], ["isDynamic", true]]

language.paradigm = "multi-paradigm";
console.log(language); // { name: "javascript", year: 1995, creator: "Brendan Eich", isDynamic: true, paradigm: "multi-paradigm" }

//enter the key dynamically using square bracket notation
language["latestVersion"] = "ES2024";
console.log(language); // { name: "javascript", year: 1995, creator: "Brendan Eich", isDynamic: true, paradigm: "multi-paradigm", latestVersion: "ES2024" }

//when key and value are same we can use shorthand property names
const name = "javascript";
const year = 1995;
const creator = "Brendan Eich";
const language1 = {
  name,
  year,
  creator,
  isDynamic: true,
  paradigm: "multi-paradigm",
  latestVersion: "ES2024",
};
console.log(language1); // { name: "javascript", year: 1995, creator: "Brendan Eich", isDynamic: true, paradigm: "multi-paradigm", latestVersion: "ES2024" }


