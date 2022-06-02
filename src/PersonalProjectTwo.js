import Card from './Card';

const PersonalProjectsTwo = (props) => {
    const cardTitle = props.title;
    const cardText = props.text;
    const cardImg = props.imgUrls;
    const cardBtnHref = props.btnHrefs;
    const cardBackground = props.background;
    const cardCode = props.codeLink;
    return ( 
        <div className="d-flex flex-wrap justify-center mt-3">
            <div className="project-icons top-0 d-flex w-100 justify-center">
                <img className='m-1' src="/imgs/html.png" alt="html icon" />
                <img className='m-1' src="/imgs/css.png" alt="css icon" />
                <img className='m-1' src="/imgs/js.png" alt="js icon" />
                <img className='m-1' src="/imgs/react.png" alt="js icon" />
                <img className='m-1' src="/imgs/sass.png" alt="js icon" />
            </div>
            <Card cardCode={cardCode[3]} cardTitle={cardTitle[3]} cardText={cardText[3]} cardImg={cardImg[3]} cardBtnHref={cardBtnHref[3]} cardBackground={cardBackground[2]} />
            <Card cardCode={cardCode[4]} cardTitle={cardTitle[4]} cardText={cardText[4]} cardImg={cardImg[7]} cardBtnHref={cardBtnHref[0]} cardBackground={cardBackground[3]} />
            <Card cardCode={cardCode[5]} cardTitle={cardTitle[1]} cardText={cardText[1]} cardImg={cardImg[1]} cardBtnHref={cardBtnHref[2]} cardBackground={cardBackground[1]} />
            <Card cardCode={cardCode[6]} cardTitle={cardTitle[2]} cardText={cardText[2]} cardImg={cardImg[2]} cardBtnHref={cardBtnHref[1]} cardBackground={cardBackground[2]} />
        </div>
    );
}
 
export default PersonalProjectsTwo;