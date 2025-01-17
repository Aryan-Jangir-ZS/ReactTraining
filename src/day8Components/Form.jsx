import React, { useState } from 'react';
import '../App.css'

const Form = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [error, setError] = useState("");
    const [submit, setSubmit] = useState("");
    const [email, setEmail] = useState(false);
    const [name, setName] = useState(false);

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            let valid = true;

            if (e.target.email.value.length==0) {
                setEmail(true);
                valid = false;
            } else {
                setEmail(false);
            }

            if (e.target.name.value == 0) {
                setName(true);
                valid = false;
            } 



            else if (!isNaN(formData.name)) {
                setError("Name can't be a number");
                valid = false;
            } else {
                
             setName(false);
                setError("");
            }

            if (valid) {
                setSubmit("done");
                console.log("Submitted");
                console.log(formData.email);
            } else {
                setSubmit("");
            }
        }}>
            <input 
                name="name" 
                onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                }} 
                placeholder="Enter your name" 
            />
            {(error && !name) && <div style={{ color: 'red' }}>{error}</div>}
            {(name && !error)&& <div style={{ color: 'red' }}>Name is required !!!</div>}

            <input 
                name="email" 
                onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                }} 
                placeholder="Enter your email" 
            />
            {email && <div style={{ color: 'red' }}>Email is required !!!</div>}

            <button type="submit">Submit</button>
            {submit && <div style={{ color: 'green' }}>{submit}</div>}
        </form>
    );
}

export default Form;


false
1 
t