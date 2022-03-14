let list = [
    {
        id: 1,
        name: "Redmi K50 Gaming",
        quantity: 120,
        price: 1000,
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k50-gaming.jpg",
    },
    {
        id: 2,
        name: "Redmi 10 2022",
        quantity: 60,
        price: 980,
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11-4g.jpg",
    },
    {
        id: 3,
        name: "Redmi Note 11 Pro 5G",
        quantity: 135,
        price: 1100,
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11-pro-5g-global.jpg",
    },
    {
        id: 4,
        name: "Redmi Note 11 Pro",
        quantity: 126,
        price: 1500,
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11-pro-global.jpg",
    },
    {
        id: 5,
        name: "Redmi Note 11S",
        quantity: 100,
        price: 1050,
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11s-global.jpg",
    },
];

//Print the products in the list.
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

//Add a new product to head of the list.
let newProduct1 = {
    id: 6,
    name: "Redmi Note 11E Pro",
    quantity: 160,
    price: 1200,
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11e-pro.jpg",
};
list.unshift(newProduct1);
console.log(list);

//Add a new product to tail of the list.
let newProduct2 = {
    id: 7,
    name: "Poco X4 Pro 5G",
    quantity: 150,
    price: 1000,
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x4-pro--.jpg",
};
list.push(newProduct2);
console.log(list);

//Search a product by name.
let searchingName = "Redmi";
function search(searchingName) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].name.includes(searchingName)) {
            result.push(list[i]);
        }
    }
    console.log(result);
}
search(searchingName);

//Remove by ID.
let removeID = 7;
function removeByID(removeID) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === removeID) {
            list.splice(i, 1);
        }
    }
    console.log(list);
}
removeByID(removeID);

//Sort the product list by name.

function compare(a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
}
list.sort(compare);
console.log(list);
