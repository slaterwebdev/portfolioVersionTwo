

const Card = (props) => {
    
    return ( 
        <div className="card pos-relative overflow-hidden br-xs d-flex align-center" style={props.cardBackground}>
            <img src={props.cardImg} className="card-image w-100" />
            <div className="overlay pos-absolute top-0 w-100 d-flex flex-col justify-center br-xs">
                <h3 className="card-title mb-2 text-center">
                    {props.cardTitle}
                </h3>
                <p className="card-text text-center mb-3 font-md w-80 m-auto">{props.cardText}</p>
                <a href={props.cardBtnHref} className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs m-auto w-60 text-center'>View Project</a>
            </div>  
        </div>
    );
}
 
export default Card;