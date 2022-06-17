import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [navBtn, setNavBtn] = useState(false);

    const navControl = () => {
        setNavBtn(!navBtn)
    };

    window.addEventListener('click' , (e) => {
        if(!e.target.classList.contains('menu-icon-img')) {
            setNavBtn(false)         
        }
    });

    return ( 
        <div className="pos-fixed pos-relative w-100 navbar navbar-lg d-flex align-center justify-space-between p-3 top-0">
            <div className='mobile-menu'>
                <h2 className='mt-1 mb-1 font-xl'>Frontend <span className='pos-relative font-md d-inline-block font-karla'>React Dev</span></h2>
                <div className='menu-icon br-xs d-none' onClick={navControl}>
                    <img className='menu-icon-img w-100 p-1' src="/imgs/menu.png" alt="menu icon" />
                </div>
            </div>
            <div className={navBtn ? "mobile-menu-open" : "mobile-menu-close"}>
                <div className="links w-50 d-flex align-center justify-space-between font-lg">
                    <Link className='link-anchor' to='/' >Home</Link>
                    <Link className='link-anchor' to='/about' >About</Link>
                    <Link className='link-anchor' to='/projects' >Projects</Link>
                    <Link className='link-anchor' to='/contact' >Contact</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;