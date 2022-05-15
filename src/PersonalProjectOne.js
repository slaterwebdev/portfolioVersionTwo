import Card from './Card';

const PersonalProjectsOne = (props) => {
    const cardTitle = props.title;
    const cardText = props.text;
    const cardImg = props.imgUrls;
    const cardBtnHref = props.btnHrefs;
    const cardBackground = props.background;
    return ( 
        <div className="d-flex flex-wrap justify-center mt-3 pos-relative">
            <div className="project-icons top-0 d-flex w-100 justify-center">
                <img className='m-1' src="/imgs/html.png" alt="html icon" />
                <img className='m-1' src="/imgs/css.png" alt="css icon" />
                <img className='m-1' src="/imgs/js.png" alt="js icon" />
                <div className="bootstrap-icon br-sm m-1">
                  <img src="/imgs/bootstrap.png" alt="bootstrap icon" />
                </div>
            </div>
            <Card cardTitle={cardTitle[0]} cardText={cardText[0]} cardImg={cardImg[0]} cardBtnHref={cardBtnHref[0]} cardBackground={cardBackground[0]} />
            <Card cardTitle={cardTitle[1]} cardText={cardText[1]} cardImg={cardImg[1]} cardBtnHref={cardBtnHref[2]} cardBackground={cardBackground[1]} />
            <Card cardTitle={cardTitle[2]} cardText={cardText[2]} cardImg={cardImg[2]} cardBtnHref={cardBtnHref[1]} cardBackground={cardBackground[2]} />
        </div>
    );
}
 
export default PersonalProjectsOne;