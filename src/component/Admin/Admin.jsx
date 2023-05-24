import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch("https://localhost:5000/products", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("these are the products", res.products);
        setProducts(res.products);
      })
      .catch((err) => console.log("errrrrrrr", err));
  }, [reload]);

  return (
    <div>
      <section>
        <h1 className="text-center text-3xl tracking-widest text-[#0f2b53]">
          All Products
        </h1>
        <div className="flex justify-end mx-5 ">
          <Link
            to="/"
            className="bg-[#fa4612] w-fit px-5 py-2 rounded-xl text-gray-200 shadow-md shadow-gray-400 focus:shadow focus:shadow-gray-300 hover:shadow-gray-300 hover:shadow-md
          focus:text-white"
          >
            Create New Product
          </Link>
        </div>
        <div>
          {products
            .filter((product) => {
              if (search === "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.client.toLowerCase().includes(search.toLowerCase()) ||
                product.order.toLowerCase().includes(search.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product, i) => {
              return <Product key={i} product={product}/>;
            })}
          <Product />
        </div>
      </section>
    </div>
  );
};

export default Admin;
