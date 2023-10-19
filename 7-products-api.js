const express = require("express");
const { products: items, products } = require("./data.js");

//intializing the app
const app = express();

//creating the server logic
app.get("/", (req, res) => {
  res
    .status(200)
    .send(`<h1>Home page</h1><a href="/products">Explore prdoucts</a>`);
});

//getting all the products
app.get("/products", (req, res) => {
  const newPrdocuts = products.map((product) => {
    const { id, name } = product;
    return { id, name };
  });

  //res.json() function will handle the conversion and settin up the content type
  res.status(200).json(newPrdocuts);
});

//getting details about a particular product
app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct)
    return res
      .status(404)
      .send("<h3>Product not exists</h3><a href='/'>Back Home</a>");

  return res.status(200).json(singleProduct);
});
//listening on a port
app.listen(3000, () => {
  console.log("The server is listening on the port 3000");
});
