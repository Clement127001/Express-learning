const express = require("express");
const { products: items, products } = require("./data.js");

//intializing the app
const app = express();

//creating the server logic
app.get("/", (req, res) => {
  res
    .status(200)
    .send(`<h1>Home page</h1><a href="/api/products">Explore prdoucts</a>`);
});

//getting all the products
app.get("/api/products", (req, res) => {
  const newPrdocuts = products.map((product) => {
    const { id, name } = product;
    return { id, name };
  });

  //res.json() function will handle the conversion and settin up the content type
  res.status(200).json(newPrdocuts);
});

//getting details about a particular product
app.get("/api/products/:productId", (req, res) => {
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

//working with search params or also know as query parameter
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length === 0) {
    return res.status(200).json([{ success: "true", products: [] }]);
  }

  return res.status(200).json(sortedProducts);
});

//listening on a port
app.listen(3000, () => {
  console.log("The server is listening on the port 3000");
});
