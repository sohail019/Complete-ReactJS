import ReactDOM from "react-dom/client"
import "./style.css"
import cardImage1 from "./src/card-image1.jpg"

// const card = (
//   <div className="card">
//     <img src={cardImage1} alt="Card Image 1" />
//     <div className="card-content">

//     <h2>The Complete 2024 Web Development Bootcamp</h2>
//     <p>Dr. Angela Yu</p>

//     <p>
//       <b>₹3,099</b>
//     </p>
//     </div>
//   </div>
// );

// const container = [card, card, card, card, card, card, card];


function Card(key, title, description, img, price, sku){
    return (
      <div className="card" key={key}>
        <img src={img} alt="Product Image" />
        <div className="card-content">
          <h2>{title}</h2>
          <p className="desc">{description}</p>

          <div className="price">
            <p>${price} </p>
            <p>SKU: {sku}</p>
          </div>
        </div>
      </div>
    );
}

// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];
// console.log(container)

// console.log(Card())

const root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render([card,card]) // array for multiple card but not good approach

fetch("https://dummyjson.com/products?")
  .then((res) => res.json())
  .then((data) => {
    const container = data.products.map((product) => {
        // console.log(product)
        // console.log(product.id)
        // console.log(product.title)
        // console.log(product.price)
        // console.log(product.images)
        // console.log(product.description)
        // console.log(product.rating)
        return Card(product.id, product.title, product.description, product.images, product.price, product.sku)

    })
    console.log(container)
    root.render(<div className="container">{container}</div>);
  })