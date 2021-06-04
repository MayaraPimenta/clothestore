const products = [
  {
    id: 1,
    title: "YELLOW Sweater",
    category: "feminino",
    price: "R$ 150,00",
    image: "./images/women-purple-sweater.jpg",
    text: "My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled. My gentoo penguin loves to play with it. My co-worker Mitchell has one of these. He says it looks dry.",
  },

  {
    id: 2,
    title: "STRIPPED Sweater",
    category: "feminino",
    price: "R$ 140,00",
    image: "./images/women-beige-sweater.jpg",
    text: "My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled. My gentoo penguin loves to play with it. My co-worker Mitchell has one of these. He says it looks dry.",
  },

  {
    id: 3,
    title: "Jeans",
    category: "feminino",
    price: "R$ 300,00",
    image: "./images/women-jeans.jpg",
    text: "My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled. My gentoo penguin loves to play with it. My co-worker Mitchell has one of these. He says it looks dry.",
  },

  {
    id: 4,
    title: "White Shoe",
    category: "feminino",
    price: "R$ 160,00",
    image: "./images/women-shoe.jpg",
    text: "My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled. My gentoo penguin loves to play with it. My co-worker Mitchell has one of these. He says it looks dry.",
  },

  {
    id: 5,
    title: "Bag",
    category: "acessorios",
    price: "R$ 100,00",
    image: "./images/accessories-bag.jpg",
    text: "I saw one of these in Vanuatu and I bought one. This brown bag works excessively well. It speedily improves my baseball by a lot. It only works when I'm Rwanda.",
  },

  {
    id: 6,
    title: "Belt",
    category: "acessorios",
    price: "R$ 89,00",
    image: "./images/accessories-belt.jpg",
    text: "I saw one of these in Vanuatu and I bought one. This brown bag works excessively well. It speedily improves my baseball by a lot. It only works when I'm Rwanda.",
  },

  {
    id: 8,
    title: "Parfum",
    category: "acessorios",
    price: "R$ 399,00",
    image: "./images/accessories-parfum.jpg",
    text: "I saw one of these in Vanuatu and I bought one. This brown bag works excessively well. It speedily improves my baseball by a lot. It only works when I'm Rwanda.",
  },

  {
    id: 9,
    title: "Blue Jeans",
    category: "masculino",
    price: "R$ 200,00",
    image: "./images/men-jeans.jpg",
    text: "This jeans works so well. It delightedly improves my football by a lot. SoCal cockroaches are unwelcome, crafty, and tenacious. This jeans keeps them away.",
  },

  {
    id: 10,
    title: "grey Shoes",
    category: "masculino",
    price: "R$ 159,00",
    image: "./images/men-shoes.jpg",
    text: "This jeans works so well. It delightedly improves my football by a lot. SoCal cockroaches are unwelcome, crafty, and tenacious. This jeans keeps them away.",
  },

  {
    id: 11,
    title: "orange Sweater",
    category: "masculino",
    price: "R$ 130,00",
    image: "./images/men-sweater.jpg",
    text: "This jeans works so well. It delightedly improves my football by a lot. SoCal cockroaches are unwelcome, crafty, and tenacious. This jeans keeps them away.",
  },

  {
    id: 11,
    title: "sunglasses",
    category: "acessorios",
    price: "R$ 109,90",
    image: "./images/accessories-jewel.jpg",
    text: "This jeans works so well. It delightedly improves my football by a lot. SoCal cockroaches are unwelcome, crafty, and tenacious. This jeans keeps them away.",
  },
];
const filterBtns = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", function () {
  displayItems(products);
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;

    const productCategory = products.filter(function (item) {
      if (item.category === category) {
          return item
      }
    });
    
    if (category === "lançamentos") {
        displayItems(products)
    } else {
        displayItems(productCategory)
    }
  });
});

function displayItems(products) {
  let displayItem = products.map(function (item) {
    return `
            <article class='item'>
                <img src=${item.image} class='photo' alt='item-${item.id}'>
                <div class='item-info'>
                    <header>
                        <h4 class="item-name">${item.title.toUpperCase()}</h4>
                        <h4>${item.price}</h4>
                    </header>
                </div>
            </article>`;
  });

  displayItem = displayItem.join("");

  let mainDisplay = document.querySelector(".main-page");
  mainDisplay.innerHTML = displayItem;
}
