let obs = [
    {
        name: "Xiaomi K50 Gaming",
        price: "8000000",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k50-gaming.jpg",
    },
    {
        name: "Xiaomi Redmi Note 11E Pro",
        price: "6500000",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11e-pro.jpg",
    },
    {
        name: "Xiaomi Redmi Note 11 Pro",
        price: "7000000",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-note-11-pro-plus-5g.jpg",
    },
];

for (let i = 0; i < obs.length; i++) {
    console.log(obs[i]);
}

function compare(ob1, ob2) {
    if (ob1.price < ob2.price) {
        return -1;
    } else if (ob1.price > ob2.price) {
        return 1;
    } else {
        return 0;
    }
}

obs.sort(compare);

console.log(obs);
