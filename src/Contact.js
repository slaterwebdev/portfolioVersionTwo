import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { firstName, lastName, email, number, message };
    }

    return ( 
        <div className="contact d-flex flex-col text-center">
            <h2 className="mt-2 mb-4">Getting In Touch</h2>
            <div className="form-container d-flex flex-row justify-space-between m-auto w-80 br-sm">
                <div className="m-4 w-60 text-left">
                    <h2>My Details</h2>
                    <p>
                        <br />
                        <br />
                        Email: adamslater1996@outlook.com
                        <br />
                        <br />
                        Phone: 07547620652
                        <br />
                        <br />
                        <a href="https://www.linkedin.com/in/adam-slater-web-dev/" className="">
                            <img src="/imgs/linedin.png" alt="" />
                        </a>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="text-center br-xs m-4">
                    <div>
                        <input 
                        placeholder="First Name"
                        className="w-90 p-2 m-2 input-style text-center"
                        type="text" 
                        required 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                        placeholder="Last Name"
                        className="w-90 p-2 m-2 input-style text-center"
                        type="text" 
                        required 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                        placeholder="Email"
                        className="w-90 p-2 m-2 input-style text-center"
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                        placeholder="Number"
                        className="w-90 p-2 m-2 input-style text-center"
                        type="number" 
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                        placeholder="Your Message"
                        className="w-90 p-2 m-2 input-style text-center"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button className='hire-me d-inline-block mt-4 mb-4 ml-1 mr-1 p-2 pl-4 pr-4 br-xs'>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;