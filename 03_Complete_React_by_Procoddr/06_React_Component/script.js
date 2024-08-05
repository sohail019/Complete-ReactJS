import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  const { key, image, title, description, price, sku } = props;
  return (
    <div className="card" key={key}>
      <img src={image} alt="Product Image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p className="desc">{description}</p>

        <div className="price">
          <p>₹ {price} </p>
          <p>SKU: {sku}</p>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

//? As of now commenting out fetch api for understanding comments
// fetch("https://dummyjson.com/products?limit=6&skip=20")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const container = data.products.map((product) => {
//       return Card({
//         key: product.id,
//         image: product.images,
//         title: product.title,
//         description: product.description,
//         price: product.price,
//         sku: product.sku,
//       });
//     });
//     root.render(<div className="container">{container}</div>);
//   });

//! Here, Render Component with the help of object in props (Not good approach)
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   ref: null,
//   props: {
//     title: "Apple iPhone 15 Pro Max",
//     description:
//       "Apple iPhone 15 Pro Max. Specifications. Apple iPhone 15 Pro Max MORE PICTURES. 6.7 1290x2796 pixels; 48MP 2160p; 8GB RAM Apple A17 Pro; 4441mAh PD2.015W.",
//     image:
//       "https://images.macrumors.com/t/SuHt0iQuSjaO-ExOZzJieONGf_I=/2500x/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg",
//     price: "1,54,000",
//     sku: "iSohail",
//   },
// });

//! Here, render component with the help of createElement in React (Not good Approach)

// root.render(
//   React.createElement(Card, {
//     title: "Apple iPhone 15 Pro Max",
//     description:
//       "Apple iPhone 15 Pro Max. Specifications. Apple iPhone 15 Pro Max MORE PICTURES. 6.7 1290x2796 pixels; 48MP 2160p; 8GB RAM Apple A17 Pro; 4441mAh PD2.015W.",
//     image:
//       "https://images.macrumors.com/t/SuHt0iQuSjaO-ExOZzJieONGf_I=/2500x/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg",
//     price: "1,54,000",
//     sku: "iSohail",
//   })
// );

//---------------------------------------------
//* Now the best approch is to use JSX Component

// root.render(
//   <Card
//     title="Apple iPhone 15 Pro Max"
//     image="https://images.macrumors.com/t/SuHt0iQuSjaO-ExOZzJieONGf_I=/2500x/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg"
//     description="Apple iPhone 15 Pro Max. Specifications. Apple iPhone 15 Pro Max MORE PICTURES. 6.7 1290x2796 pixels; 48MP 2160p; 8GB RAM Apple A17 Pro; 4441mAh PD2.015W."
//     price="1,54,000"
//     sku="iSohail"
//   />
// );

//         image: product.images,
//         title: product.title,
//         description: product.description,
//         price: product.price,
//         sku: product.sku,

//? But, Now we can fetch product data and display it using React Component

fetch("https://dummyjson.com/products?limit=6&skip=20")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}  
              title={product.title}
              image={product.images}
              description={product.description}
              price={product.price}
              sku={product.sku}
            />
          );
        })}
      </div>
    );
  });
