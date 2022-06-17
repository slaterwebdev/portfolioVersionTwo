import Skill from './Skill';

const About = () => {

    /* html */
    const htmlIcon = './imgs/html.png';
    const htmlContent = 'Fully Competent in HTML5';

    /* css */
    const cssIcon = './imgs/css.png';
    const cssContent = 'Fully Competent in CSS3.';

    /* js */
    const jsIcon = './imgs/js.png';
    const jsContent = 'Deep understanding and comfort using JS - One of my favourite technologies to use.';

    /* bootstrap */
    const bootstrapIcon = './imgs/bootstrap.png';
    const bootstrapContent = 'Fully Compotent in BOOTSTRAP5';

    /* engineering */
    const engineeringIcon = './imgs/engineering.png';
    const engineeringContent = '7 years prior Exp in the Nuclear sector of Manufacturing Engineering';

    /* firestore */
    const firestoreIcon = './imgs/firestore.png';
    const firestoreContent = 'Working knowledge of Google Firebase - Used as a Backend solution';

    /* github */
    const githubIcon = './imgs/github.png';
    const githubContent = 'Full comprehension of Git & Github for Version Control';

    /* sass */
    const sassIcon = './imgs/sass.png';
    const sassContent = 'Fully compotent in SASS';

    /* react */
    const reactIcon = './imgs/react.png';
    const reactContent = 'Deep understanding of React - Personal favourite, even more so than Vanilla JS!';

    /* react */
    const wpIcon = './imgs/wordpress.png';
    const wpContent = 'Complete understanding and competence in Wordpress (CMS)';

    return ( 
        <div className="about mt-3 ml-3 mr-3">
            <h2 className='text-center mt-1 mb-2'>About Me</h2>
            <p className="text-center">
                Although I maybe relatively new to the world of development, I have managed to amass a fair amount of skills in a short space of time. 
                Whilst I'm a naturally hardworking, motivated person, my passion for development has fueled the fire to consistantly learn. I do not have to try to love it - I just do! Coupling these traits with 7 years working as a mechanical engineer (within the nuclear sector), I have built an ability to problem solve and have fun whilst doing so! 
                <br/>
                <br/>
                I'm currently working for Big Marketing, a small yet fast paced marketing agency, where I am one of two frontend developers. Therefore, I am often tasked with large amounts of responsibility, owning projects and soley communiticaing with clients. 
            </p>
            <div className='text-center'>
            <button className='download-cv d-inline-block mt-2 mb-2 ml-1 mr-1 p-2 pl-4 pr-4 br-xs'>Download CV</button>
            </div>

            <p className="text-center mb-2">Click on each skill box to see my level off experience with each technology.</p>

            <div className="skills-container d-flex justify-center flex-wrap">
                <Skill icon={htmlIcon} text={htmlContent}/>
                <Skill icon={cssIcon} text={cssContent}/>
                <Skill icon={jsIcon} text={jsContent}/>
                <Skill icon={bootstrapIcon} text={bootstrapContent}/>
                <Skill icon={engineeringIcon} text={engineeringContent}/>
                <Skill icon={firestoreIcon} text={firestoreContent}/>
                <Skill icon={githubIcon} text={githubContent}/>
                <Skill icon={wpIcon} text={wpContent}/>
                <Skill icon={sassIcon} text={sassContent}/>
                <Skill icon={reactIcon} text={reactContent}/>
            </div>

            <div className='latest-portfolio-code m-auto d-flex justify-space-around align-center text-center'>
                <img className='p-2 br-sm mb-2 mt-2' src="./imgs/code.png" alt="coding icon" />
                <h3 className='ml-1 mr-1 pb-2 mb-2 mt-2'><a href='https://github.com/slaterwebdev/portfolioVersionTwo'>CLICK HERE</a> the code for the current portfolio you are browsing, It's fully created using React and Sass!</h3>
            </div>
        </div>
    );
}
 
export default About;