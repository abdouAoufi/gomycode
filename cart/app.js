const products = [
    { name: "n1", price: 12 },
    { name: "n1", price: 13 },
];

const parent = document.createElement("div");

products.forEach((doc) => {
    const cart = document.createElement("div");
    const button = document.createElement("button");
    button.innerText = "add";
    button.setAttribute("class", "btn")
    button.onclick = () => {
        console.log(doc.price);
    };
    cart.append(button);
    parent.append(cart);
});

document.body.append(parent);