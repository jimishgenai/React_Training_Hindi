import React, { useState } from "react";

function ReactCrud() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");

    const [products, setProducts] = useState([])
    const [editIndex, setEditIndex] = useState(null);

    const addOrUpdate = () => {
        if (editIndex !== null) {
            // UPDATE
            const updated = [...products];
            updated[editIndex] = { name, quantity, price, state };

            setProducts(updated)
            setEditIndex(null);
        } else {
            // ADD
            setProducts(
                [
                    ...products,
                    { name, quantity, price, state }
                ]
            )
        }

        setName("");
        setQuantity("");
        setPrice("");
        setState("");
    };

    const editItem = (i) => {
        const item = products[i]

        setName(item.name);
        setQuantity(item.quantity);
        setPrice(item.price);
        setState(item.state);

        setEditIndex(i);
    };

    const deleteItem = (i) => {
        setProducts(products.filter((_, index) => index !== i));
    };

    return (
        <div>
            <h2>Perform CRUD</h2>

            <input
                type="text"
                className="me-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
            />
            <input
                type="number"
                className="me-3"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter Quantity"
            />
            <input
                type="number"
                className="me-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price"
            />
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter State"
            />
            <button className="ms-3 btn btn-primary" onClick={addOrUpdate}>
                {editIndex !== null ? "Update" : "Add"}
            </button>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            (item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td> &#x20b9; {item.price}</td>
                                    <td> {item.state}</td>
                                    <td>
                                        <button className="me-3 btn btn-primary" onClick={() => editItem(i)}>Edit</button>
                                        <button className="btn btn-primary" onClick={() => deleteItem(i)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReactCrud;