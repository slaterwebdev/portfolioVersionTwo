import { Link } from 'react-router-dom';

const DualImages = (props) => {

    const imgUrlOne = props.imgUrlOne;
    const imgUrlTwo = props.imgUrlOne;

    return ( 
        <div>
            <div className="dual-img-one pos-relative br-xs d-flex justify-center align-center overflow-hidden mt-1 mb-2">
                <img className="w-100 br-xs" src={imgUrlOne} alt="" />
                <div className="project-overlay pos-absolute w-100 br-xs text-center d-flex flex-col justify-space-around align-center">
                    <h3 className="br-xs">overlay</h3>
                    <p className='w-80 font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis inventore quae aliquid amet nihil hic veniam officiis magnam magni?</p>
                    <Link to='/' className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs'>View Project</Link>
                </div>
            </div>
            <div className="dual-img-Two pos-relative br-xs d-flex justify-center align-center overflow-hidden mt-1 mb-2">
                <img className="w-100 br-xs" src={imgUrlTwo} alt="" />
                <div className="project-overlay pos-absolute w-100 br-xs text-center d-flex flex-col justify-space-around align-center">
                    <h3 className="br-xs">overlay</h3>
                    <p className='w-80 font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis inventore quae aliquid amet nihil hic veniam officiis magnam magni?</p>
                    <Link to='/' className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs'>View Project</Link>
                </div>
            </div>
        </div>
     );
}
 
export default DualImages;