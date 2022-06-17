import { useState } from "react";
import ContactTile from "./ContactTile";
import sendData from './firebase';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [submittedOverlay, setSubmittedOverlay] = useState(false);

    const contactTileHref = ["mailto:adamslater1996@outlook.com" , "tel:07547620652" , "https://www.linkedin.com/in/adam-slater-web-dev/"];
    const contactTileText = ["adamslater1996@outlook.com" , "07547620652" , "Stoke-On-Trent, England" , "Let's Connect..."];
    const contactTileImg = ["./imgs/email.png" , "./imgs/phone.png" , "./imgs/map.png" , "./imgs/linkedin.png"];

    const closeOverlay = () => {
        setSubmittedOverlay(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { name, email, number, message };
        sendData(blog);
        setSubmittedOverlay(true)
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
    }

    return ( 
        <div className="contact d-flex flex-col text-center pos-relative">
            {submittedOverlay && 
            <div onClick={closeOverlay} className="submission-overlay pos-absolute top-0 d-flex justify-center align-center">
                <div className="d-flex justify-center align-center br-xs pos-relative">
                    <span onClick={closeOverlay} className="pos-absolute top-0 m-1 right-0">X</span>
                    <h2>Message Submitted!</h2>
                </div>
            </div>}

            <h2 className="title mt-2 mb-1">Getting In Touch</h2>
            <p className="font-karla">Hopefully you've enjoyed your time looking around my site, I appreciate the visit. If you'd like to work together on some capacity please get in touch. I'm open to roles as well as freelance work. Simply put - if it's a challenge I'm interested.</p>
            <div className="form-container mt-4 d-flex flex-row justify-center align-center m-auto w-80 br-sm">
                <form onSubmit={handleSubmit} className="text-center pt-2 pb-1">
                    <div>
                        <input 
                        placeholder="Name"
                        className="w-90 p-2 m-2 input-style text-center"
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                    <button className='hire-me d-inline-block mt-2 mb-3 ml-1 mr-1 p-2 pl-4 pr-4 br-xs'>Submit</button>
                </form>
                <div>
                    <ContactTile contactTileHref={contactTileHref[0]} contactTileText={contactTileText[0]} contactTileImg={contactTileImg[0]} />
                    <ContactTile contactTileHref={contactTileHref[1]} contactTileText={contactTileText[1]} contactTileImg={contactTileImg[1]} />
                    <ContactTile contactTileText={contactTileText[2]} contactTileImg={contactTileImg[2]} />
                    <ContactTile contactTileHref={contactTileHref[2]} contactTileText={contactTileText[3]} contactTileImg={contactTileImg[3]} />
                </div>
            </div>
        </div>
     );
}
 
export default Contact;