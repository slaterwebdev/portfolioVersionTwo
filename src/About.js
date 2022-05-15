import Skill from './Skill';
import Autotype from './Autotype';

const About = () => {

    /* html */
    const htmlIcon = '/imgs/html.png';
    const htmlContent = 'Fully Competent in HTML5';

    /* css */
    const cssIcon = '/imgs/css.png';
    const cssContent = 'Fully Competent in CSS3.';

    /* js */
    const jsIcon = '/imgs/js.png';
    const jsContent = 'Deep understanding and comfort using JS - One of my favourite technologies to use.';

    /* bootstrap */
    const bootstrapIcon = '/imgs/bootstrap.png';
    const bootstrapContent = 'Fully Compotent in BOOTSTRAP5';

    /* engineering */
    const engineeringIcon = '/imgs/engineering.png';
    const engineeringContent = '7 years prior Exp in the Nuclear sector of Manufacturing Engineering';

    /* firestore */
    const firestoreIcon = '/imgs/firestore.png';
    const firestoreContent = 'Working knowledge of Google Firebase - Used as a Backend solution';

    /* github */
    const githubIcon = '/imgs/github.png';
    const githubContent = 'Full comprehension of Git & Github for Version Control';

    /* sass */
    const sassIcon = '/imgs/sass.png';
    const sassContent = 'Fully compotent in SASS';

    /* react */
    const reactIcon = '/imgs/react.png';
    const reactContent = 'Deep understanding of React - Personal favourite, even more so than Vanilla JS!';

    return ( 
        <div className="about m-3">
            <h2 className='text-center mt-1 mb-2'>About Me</h2>
            {/* <Autotype /> */}
            <div className='latest-portfolio-code m-auto d-flex justify-space-around align-center text-center m-auto'>
                <img className='pt-1 pb-1 br-sm mb-2 mt-2' src="/imgs/cv.png" alt="coding icon" />
                <h3 className='ml-1 mr-1 pb-2 mb-2 mt-2'><a href=''>CLICK HERE</a> To download a copy of my Resumè. Take a deeper look into all things Adam and Development.</h3>
            </div>
            <div className="skills-container d-flex justify-center flex-wrap">
                <Skill icon={htmlIcon} text={htmlContent}/>
                <Skill icon={cssIcon} text={cssContent}/>
                <Skill icon={jsIcon} text={jsContent}/>
                <Skill icon={bootstrapIcon} text={bootstrapContent}/>
                <Skill icon={engineeringIcon} text={engineeringContent}/>
                <Skill icon={firestoreIcon} text={firestoreContent}/>
                <Skill icon={githubIcon} text={githubContent}/>
                <Skill icon={sassIcon} text={sassContent}/>
                <Skill icon={reactIcon} text={reactContent}/>
            </div>

            <div className='latest-portfolio-code m-auto d-flex justify-space-around align-center text-center'>
                <img className='p-2 br-sm mb-2 mt-2' src="/imgs/code.png" alt="coding icon" />
                <h3 className='ml-1 mr-1 pb-2 mb-2 mt-2'><a href='https://github.com/slaterwebdev/portfolioVersionTwo'>CLICK HERE</a> the code for the current portfolio you are browsing, It's fully created using React and Sass!</h3>
            </div>
        </div>
    );
}
 
export default About;