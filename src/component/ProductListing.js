import React, { useState } from "react";

const ProductListing = () => {

const [productInfo, setProductInfo] = useState([
  {
    id: 1,
    productName: "Samsung",
    modelName: "XAVA",
    category: "Mobile",
    price: 25000,
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    productName: "MI",
    modelName: "ZOOM",
    category: "Mobile",
    price: 20000,
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    productName: "Sony",
    modelName: "Bravia",
    category: "TV",
    price: 35000,
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    productName: "Panasonic",
    modelName: "XYLO",
    category: "TV",
    price: 40000,
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    productName: "Vivo",
    modelName: "XLM",
    category: "Mobile",
    price: 35000,
    image: "https://picsum.photos/200",
  },
]);

const selectUser = (userId) => {
  setProductInfo(prev => {
    return prev.map(productUser => {
      return productUser.id == userId ? {...productUser, selected: true} : {...productUser}
    })
  })
}

const priceFilterHandler = () => {
  setProductInfo((prev) =>
    prev.filter((value) => (value.price >= 30000 ? { ...value } : ""))
  );
};

  return (
    <>
      <div className="new-product-wrapper">
        <h2>Selected Product Items by Suman</h2>
        <div className="product-listing-wrapper">
          {productInfo.map((productItem, index) => {
            let { id, productName, modelName, category, price, image } =
              productItem;

            return (
              <div
                className={`product-listing ${
                  productItem.hasOwnProperty("selected") && productItem.selected
                    ? "active-item"
                    : ""
                }`}
                key={index}
              >
                <figure className="product-image">
                  <img src={image} />
                </figure>
                <h3>
                  <span>Product Name:</span>
                  {productName}
                </h3>
                <div className="product-wrap">
                  <h4>
                    <span>Model Name:</span>
                    {modelName}
                  </h4>
                  <h4>
                    <span>Category:</span>
                    {category}
                  </h4>
                </div>
                <div className="price-text">
                  <span>Price</span>
                  {price}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h2>Product Listing...</h2>
      <div className="product-listing-wrapper">
        {productInfo.map((productUser, index) => {
          let { id, productName, modelName, category, price, image } =
            productUser;
          return (
            <div
              className={`product-listing ${
                productUser.hasOwnProperty("selected") && productUser.selected
                  ? "active-item"
                  : ""
              }`}
              key={index}
              onClick={() => selectUser(id)}
            >
              <figure className="product-image">
                <img src={image} />
              </figure>
              <h3>
                <span>Product Name:</span>
                {productName}
              </h3>
              <div className="product-wrap">
                <h4>
                  <span>Model Name:</span>
                  {modelName}
                </h4>
                <h4>
                  <span>Category:</span>
                  {category}
                </h4>
              </div>
              <div className="price-text">
                <span>Price</span>
                {price}
              </div>
            </div>
          );
        })}
      </div>

      <div className="product-btn">
        <button type="button" className="btn" onClick={priceFilterHandler}>
          Show Price above 30000
        </button>
        <button type="button" className="btn">
          Reset All
        </button>
      </div>
    </>
  );
}

export default ProductListing;