import React, { useState } from "react";

export const ProductListHandler = () => {

    // -----------------------------
    // Single state for the whole form
    // -----------------------------
    // Instead of having separate useState for name, quantity, price, state,
    // we use ONE object to store all form fields.

    /* const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    // const [state, setState] = useState("");*/

    const [form, setForm] = useState(
        {
            name: "",
            quantity: "",
            price: "",
            state: "",
        }
    )

    // List of products
    const [products, setProducts] = useState([])
    // Index of the product being edited (null means adding new)
    const [editIndex, setEditIndex] = useState(null);

    // -----------------------------
    // Universal handler for all input fields
    // -----------------------------
    // e.target.name -> identifies which field is being updated (name, quantity, price, state)
    // e.target.value -> the new value entered by the user
    const updateFields = (e) => {
        const { name, value } = e.target

        setForm(
            prev => ({
                ...prev, // spread operator which keeps prevous values
                [name]: value   //update only changed fileds
            })
        )
    }

    // -----------------------------
    //  Add new product OR update existing product
    // -----------------------------
    const addOrUpdate = () => {
        if (editIndex !== null) {
            // UPDATE
            // If editIndex is not null, we are updating an existing product
            const updated = [...products];
            // updated[editIndex] = { name, quantity, price, state };
            updated[editIndex] = form; // Use the form object
            setProducts(updated)
            setEditIndex(null);     // Reset editIndex after update
        } else {
            // ADD
            // If editIndex is null, we are adding a new product
            setProducts(
                [
                    // ...products,
                    // { name, quantity, price, state }
                    ...products, form
                ]
            )
        }

        // setName("");
        // setQuantity("");
        // setPrice("");
        // setState("");

        // Reset form to empty values after add/update
        setForm(
            {
                name: "",
                quantity: "",
                price: "",
                state: ""
            }
        )
    };

    // -----------------------------
    // Edit a product
    // -----------------------------
    const editItem = (i) => {
        const item = products[i]    // Populate form with the product data
        // setForm(i);
        setForm(
            {
                ...item
            }
        )
        // setName(item.name);
        // setQuantity(item.quantity);
        // setPrice(item.price);
        // setState(item.state);
        setEditIndex(i);
    };

    // -----------------------------
    // Delete a product
    // -----------------------------
    const deleteItem = (i) => {
        setProducts(products.filter((_, index) => index !== i));
    };

    // -----------------------------
    // Render UI
    // -----------------------------
    return (
        <div>
            <h2>Perform CRUD</h2>

            <input
                type="text"
                name="name" // important! should match key in form object
                value={form.name}
                onChange={updateFields}
                placeholder="Enter Name"
            />
            <input
                type="number"
                name="quantity" // important! should match key in form object
                value={form.quantity}
                onChange={updateFields}
                placeholder="Enter Quantity"
            />
            <input
                type="number"
                name="price" // important! should match key in form object
                value={form.price}
                onChange={updateFields}
                placeholder="Enter Price"
            />
            <input
                type="text"
                name="state" // important! should match key in form object
                value={form.state}
                onChange={updateFields}
                placeholder="Enter State"
            />
            <button onClick={addOrUpdate}>
                {editIndex !== null ? "Update" : "Add"}
            </button>

            <table className="table">
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
                                        <button onClick={() => editItem(i)}>Edit</button>
                                        <button onClick={() => deleteItem(i)}>Delete</button>
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
