var products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price_news: 12,
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "./assets/images/thumb_product.png",
    discount: "36%",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price_news: 12,
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price_news: 12,
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },

  {
    id: 4,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price_news: 12,
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "./assets/images/thumb_product.png",
    discount: "36%",
  },
  {
    id: 5,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price_news: 12,
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },
  {
    id: 6,
    title: "Mens Cotton Jacket",
    price_news: 12,
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },
  {
    id: 7,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price_news: 12,
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "./assets/images/thumb_product.png",
    discount: "36%",
  },
  {
    id: 8,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price_news: 12,
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "./assets/images/Vegetable.png",
    discount: "36%",
  },
];
const product = document.querySelector(".product-container");

let t = products.map(function(index){
  return `<div class="product-item">
              <div class="img-container">
              <img src="${index.image}" alt="product" />
                <p>${index.price}</p>
              </div>

              <h3>${index.title}</h3>
              <p>
                ${index.description}
              </p>

              <div class="price">
                <div>
                  <p>12</p>
                  <p>22.3</p>
                </div>
                <button>By now</button>
              </div>
            </div>`

})
     product.innerHTML=t.join("");
