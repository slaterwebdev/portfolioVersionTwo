import Card from './CardTwo';

const CommercialSamples = (props) => {
    const cardTitle = props.title;
    const cardText = props.text;
    const cardImg = props.imgUrls;
    const cardBtnHref = props.btnHrefs;
    const cardBackground = props.background;
    return ( 
        <div className="d-flex flex-wrap justify-center mt-3">
            <div className="project-icons top-0 d-flex w-100 justify-center">
                <img className='m-1' src="/imgs/html.png" alt="html icon" />
                <img className='m-1' src="/imgs/css.png" alt="css icon" />
                <img className='m-1' src="/imgs/js.png" alt="js icon" />
                <img className='m-1' src="/imgs/wordpress.png" alt="js icon" />
                <img className='m-1' src="/imgs/bootstrap.png" alt="js icon" />
            </div>
            <Card cardTitle={cardTitle[5]} cardText={cardText[5]} cardImg={cardImg[8]} cardBtnHref={cardBtnHref[4]} cardBackground={cardBackground[3]} />
            <Card cardTitle={cardTitle[6]} cardText={cardText[6]} cardImg={cardImg[9]} cardBtnHref={cardBtnHref[5]} cardBackground={cardBackground[2]} />
            <Card cardTitle={cardTitle[7]} cardText={cardText[7]} cardImg={cardImg[10]} cardBtnHref={cardBtnHref[6]} cardBackground={cardBackground[2]} />
        </div>
    );
}
 
export default CommercialSamples;