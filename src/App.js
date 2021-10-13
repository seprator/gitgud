import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
  const [info, setInfo] = useState({
    productName: null,
    height: null,
    length: null,
    width: null,
    shippingPrice: null,
    productPrice: null,
    productQuantity: null,
  });
  const [display, setDisplay] = useState([]);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      info.height &&
      info.length &&
      info.width &&
      info.productQuantity &&
      info.productPrice
    ) {
      const newinfo = { ...info, id: uuid() };
      setDisplay([...display, newinfo]);
      setInfo({
        productName: "",
        height: "",
        length: "",
        width: "",
        shippingPrice: "",
        productPrice: "",
        productQuantity: "",
      });
    }
  };
  return (
    <>
      <div className="pdiv">
        <div className="div1">
          <article>
            <form action="">
              <label htmlFor="productName">product name:</label>
              <input
                id="productName"
                type="text"
                value={info.productName}
                placeholder="name"
                name="productName"
                onChange={handleChange}
              />
              <label htmlFor="height">height:</label>
              <input
                id="height"
                type="number"
                value={info.height}
                placeholder="height"
                name="height"
                onChange={handleChange}
              />
              <div>
                <label htmlFor="length">length:</label>
                <input
                  id="length"
                  type="number"
                  value={info.length}
                  placeholder="length"
                  name="length"
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="width">width:</label>
              <input
                id="width"
                type="number"
                value={info.width}
                placeholder="width"
                name="width"
                onChange={handleChange}
              />
              <label htmlFor="shippingPrice">shipping price:</label>
              <input
                id="shippingPrice"
                type="number"
                value={info.shippingPrice}
                placeholder="shippingPrice"
                name="shippingPrice"
                onChange={handleChange}
              />
              <label htmlFor="productPrice">product price:</label>
              <input
                id="productPrice"
                type="number"
                value={info.productPrice}
                placeholder="productPrice"
                name="productPrice"
                onChange={handleChange}
              />
              <label htmlFor="productQuantity">product quantity:</label>
              <input
                id="productQuantity"
                type="number"
                value={info.productQuantity}
                placeholder="productQuantity"
                name="productQuantity"
                onChange={handleChange}
              />
              <button onClick={handleSubmit}>Calculate</button>
            </form>
          </article>
        </div>
        <div className="div2">
          {display.map((info) => {
            const {
              id,
              length,
              width,
              height,
              productName,
              productPrice,
              productQuantity,
              shippingPrice,
            } = info;
            let cbm_el = (width * height * length * productQuantity) / 1000000;
            let shippingPrice_el = cbm_el * shippingPrice;
            let productPrice_el = productQuantity * productPrice;
            let total_el = productPrice_el * 1 + shippingPrice_el;

            return (
              <div key={id}>
                <h4>Product Name: {productName}</h4>
                <h4>CBM: {cbm_el}</h4>
                <h4></h4>
                <h4>Total Shipping Price: {shippingPrice_el}</h4>
                <h4>Total Product Price: {productPrice_el}</h4>
                <h4>Total Price: {total_el}</h4>
              </div>
            );
          })}
        </div>
        <div />
      </div>
    </>
  );
};

export default App;
