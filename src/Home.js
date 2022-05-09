import { Link } from 'react-router-dom'
 
const Home = () => {

    return ( 
        <div className="home d-flex justify-content-center align-center mt-3">
            <div className="w-40">
                <div className="welcome d-inline-block p-2 br-sm">Welcome I'm</div>
                <h1 className="font-xxl mb-1">Adam Slater</h1>
                <h3 className="font-md mb-4">A creative problem solving Developer.</h3>
                <p className="font-md mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi atque mollitia ipsa nihil repudiandae, quisquam non asperiores ut nostrum?</p>
                <Link to='/contact' className='hire-me d-inline-block mt-2 mb-2 ml-1 mr-1 p-2 pl-4 pr-4 br-xs'>Hire Me</Link>
                <Link to='/projects' className='explore d-inline-block mt-2 mb-2 ml-1 mr-1 p-2 pl-4 pr-4 br-xs'>Explore</Link>
            </div>
            <div className="w-60 d-flex justify-flex-end align-center mt-3 pos-relative">
                    <div className="pos-absolute orange-feature d-flex justify-center align-center">
                    <div className="pos-absolute orange-square d-flex justify-center align-center"></div>
                    <div className="white-circle d-flex justify-center align-center">
                            <div className="grey-circle d-flex justify-center align-center">
                                
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Home;