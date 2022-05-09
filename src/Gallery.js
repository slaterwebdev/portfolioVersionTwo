

const Gallery = (props) => {
    
    const imgUrlOne = props.imgUrls[0];
    const imgUrlTwo = props.imgUrls[1];
    const imgUrlThree = props.imgUrls[2];

    const btnHrefOne = props.btnHrefs[0];
    const btnHrefTwo = props.btnHrefs[1];
    const btnHrefThree = props.btnHrefs[2];

    const greenBackground = props.backgroundColors[0];
    const whiteBackground = props.backgroundColors[1];

    return ( 
        <div className="w-70 mt-4 mb-4  d-flex justify-center overflow-hidden">
            <div className="g1-img-one pos-relative br-xs d-flex justify-center align-center overflow-hidden mr-2 ">
                <img className="w-100 br-xs" src={imgUrlOne} alt="" />
                <div className="project-overlay pos-absolute w-100 br-xs text-center d-flex flex-col justify-space-around align-center">
                    <h3 className="br-xs">overlay</h3>
                    <p className='w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis inventore quae aliquid amet nihil hic veniam officiis magnam magni?</p>
                    <a href={btnHrefOne} className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs'>View Project</a>
                </div>
            </div>
            <div className="g1-col">
                <div className="g1-img-two pos-relative br-xs d-flex justify-center align-center overflow-hidden" style={greenBackground}>
                    <img className="w-100 br-xs" src={imgUrlTwo} alt="" />
                    <div className="project-overlay pos-absolute top-0 w-100 br-xs text-center d-flex flex-col justify-space-around align-center">
                        <h3 className="br-xs">overlay</h3>
                        <p className='w-80 font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis inventore quae aliquid amet nihil hic veniam officiis magnam magni?</p>
                        <a href={btnHrefThree} className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs'>View Project</a>
                    </div>
                </div>
                <div className="g1-img-three pos-relative br-xs d-flex justify-center align-center overflow-hidden mt-2" style={whiteBackground}>
                    <img className="w-100 br-xs" src={imgUrlThree} alt="" />
                    <div className="project-overlay pos-absolute top-0 w-100 br-xs text-center d-flex flex-col justify-space-around align-center">
                        <h3 className="br-xs">overlay</h3>
                        <p className='w-80 font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis inventore quae aliquid amet nihil hic veniam officiis magnam magni?</p>
                        <a href={btnHrefTwo} className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs'>View Project</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;