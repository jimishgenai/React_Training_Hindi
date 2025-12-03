import { useState } from "react"
import React from "react"

export const TableComponent = () => {
    // create table header
    const [form, setForm] = useState({
        name: "",
        quantity: "",
        price: "",
    });

    // Handle input filer text changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(
            {
                ...form,
                [name]: value,
            }
        )
    }

    // Handle submit action
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", form);
        alert(
            `
                Submitted: Name: ${form.name}
                Submitted: Quantity: ${form.quantity}
                Submitted: Price: ${form.price}            `
        );
    }

    return (
        <div style={{ padding: "20px", maxWidth: "300px" }}>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Quantity */}
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                    />
                </div>

                {/* Price */}
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );

}