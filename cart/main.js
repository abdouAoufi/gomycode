const container = document.querySelector("#container");
const total = document.getElementById("total");

let totalPrice = 0;

fetch("http://192.168.0.143:1337/").then((data) => {
    data.json().then(function(ps) {
        const prList = ps.productList;
        prList.forEach(function(product) {
            const cart = document.createElement("div");
            cart.setAttribute("class", "cart");
            const imageProduct = document.createElement("img");
            imageProduct.setAttribute("src", product.img);
            imageProduct.setAttribute("width", "300px");
            imageProduct.setAttribute("height", "300px");
            const producName = document.createElement("h4");
            producName.innerText = product.name;
            const productPrice = document.createElement("h5");
            productPrice.innerText = product.price + " $";
            const addBtn = document.createElement("button");
            addBtn.innerText = "Add";

            addBtn.onclick = function() {
                totalPrice = totalPrice + product.price;
                total.innerText = totalPrice + " $";
            };

            cart.append(imageProduct);
            cart.append(producName);
            cart.append(productPrice);
            cart.append(addBtn);

            container.append(cart);
        });
    });
});