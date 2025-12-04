import React, { useState, useEffect } from "react";

export const StockExchange = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  // 1️⃣ READ - Load products from API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // use API JSON directly
  }, []);

  // 2️⃣ ADD or UPDATE
  const addOrUpdate = () => {
    if (editId) updateProduct();
    else addProduct();
  };

  // 2a️⃣ CREATE - POST
  const addProduct = () => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price: Number(price),
        stock: Number(stock),
      }),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        setProducts([...products, newProduct]);
        resetForm();
      });
  };

  // 2b️⃣ UPDATE - PUT
  const updateProduct = () => {
    fetch(`https://dummyjson.com/products/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price: Number(price),
        stock: Number(stock),
      }),
    })
      .then((res) => res.json())
      .then((updated) => {
        const newList = products.map((p) =>
          p.id === editId ? updated : p
        );
        setProducts(newList);
        resetForm();
      });
  };

  // 3️⃣ DELETE
  const deleteItem = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setProducts(products.filter((p) => p.id !== id));
      });
  };

  // Edit button
  const editItem = (product) => {
    setTitle(product.title);
    setPrice(product.price);
    setStock(product.stock);
    setEditId(product.id);
  };

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setStock("");
    setEditId(null);
  };

  return (
    <div>
      <h2>CRUD with DummyJSON API (using API JSON fields)</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        placeholder="Stock"
      />

      <button onClick={addOrUpdate}>
        {editId ? "Update" : "Add"}
      </button>

      <table border="1" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => editItem(p)}>Edit</button>
                <button onClick={() => deleteItem(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
