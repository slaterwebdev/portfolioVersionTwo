import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="pos-fixed w-100 navbar d-flex align-center justify-space-between p-3 top-0">
            <h2 className='mt-2 mb-2 font-xl'>Frontend <span className='pos-relative font-md d-inline-block'>React Dev</span></h2>
            <div className="links w-50 d-flex align-center justify-space-between font-lg">
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/projects' >Projects</Link>
                <Link to='/contact' >Contact</Link>
            </div>
        </div>
     );
}
 
export default Navbar;