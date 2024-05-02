const chocolates = [
    { name: "Milk Chocolate", price: 60, imageUrl: "https://thebigmansworld.com/wp-content/uploads/2021/02/sugar-free-white-chocolate3-500x500.jpg" },
    { name: "Dark Chocolate", price: 85, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTimTUvsxmUmyKeAAQpztj5UriDQx4ScrZA" },
    { name: "Fruit And Nuts Chocolate", price: 90, imageUrl: "https://static.toiimg.com/thumb/62440053.cms?imgsize=607516&width=800&height=800" },
    { name: "Mint Chocolate", price: 50, imageUrl: "https://www.barleyandsage.com/wp-content/uploads/2020/03/mint-chocolate-macarons-1200x1200-1.jpg" },
    { name: "Caramel-filled chocolate", price: 10, imageUrl: "https://chocobai.in/wp-content/uploads/2019/12/caramel4-200x200.jpg" },
    // Add more chocolate options as needed
];

const selectedChocolates = [];
let totalPrice = 0.00;

function updateSummary() {
    const selectedChocolatesList = document.getElementById("selectedChocolates");
    const totalPriceElement = document.getElementById("totalPrice");

    selectedChocolatesList.innerHTML = "";
    totalPrice = 0.00;

    for (const chocolate of selectedChocolates) {
        const listItem = document.createElement("li");
        listItem.textContent = `${chocolate.name} - Rs${chocolate.price.toFixed(2)}`;
        selectedChocolatesList.appendChild(listItem);
        totalPrice += chocolate.price;
    }

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function selectChocolate(index) {
    const chocolate = chocolates[index];
    if (!chocolate || selectedChocolates.length >= 8) {
        return;
    }

    selectedChocolates.push(chocolate);
    updateSummary();
}

window.onload = function () {
    const chocolatesContainer = document.getElementById("chocolates");

    for (let i = 0; i < chocolates.length; i++) {
        const chocolate = chocolates[i];
        const chocolateElement = document.createElement("div");
        chocolateElement.classList.add("chocolate");

        // Create an image element
        const imageElement = document.createElement("img");
        imageElement.src = chocolate.imageUrl;
        imageElement.alt = chocolate.name;
        chocolateElement.appendChild(imageElement);

        // Create a span element for chocolate name and price
        const infoElement = document.createElement("span");
        infoElement.textContent = `${chocolate.name} - Rs${chocolate.price.toFixed(2)}`;
        infoElement.classList.add("chocolate-info"); // Add a class for styling
        chocolateElement.appendChild(infoElement);

        // Add click event listener to select chocolate
        chocolateElement.addEventListener("click", () => selectChocolate(i));

        chocolatesContainer.appendChild(chocolateElement);
    }
};
