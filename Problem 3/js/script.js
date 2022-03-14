// let href = "https://google.com";

let href = prompt("Enter an href:");

let a = document.querySelectorAll("a");

for (let i = 0; i < a.length; i++) {
    console.log(a[i].href);
}

function changeHrefOfA(href) {
    for (let i = 0; i < a.length; i++) {
        a[i].href = href;
        console.log(a[i].href);
    }
}

changeHrefOfA(href);
