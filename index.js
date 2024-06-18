const myMap = new Map();
myMap.set("a",3);
myMap.set("c",4);
myMap.set("b",1);
myMap.set("d",2);
myMap.set("e",4);

// sort by value
const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);
// Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

// sort by key
const mapSort3 = new Map([...myMap.entries()].sort());
console.log(mapSort3);
// Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}

const mapSort4 = new Map([...myMap.entries()].reverse());
console.log(mapSort4);
// Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}

function sortObjectByKeys(o) {
  return Object.keys(o)
    .sort()
    .reduce((r, k) => (r[k] = o[k], r), {});
}

function sortByKey(array, key) {
  return array.sort((a, b) => {
    let x = a[key];
    let y = b[key];

    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

const maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60
};

const sortable = Object.entries(maxSpeed)
  .sort(([,a],[,b]) => a-b)
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
