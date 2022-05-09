import Skill from './Skill';

const About = () => {

    /* html */
    const htmlIcon = '/imgs/html.png';
    const htmlContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    /* css */
    const cssIcon = '/imgs/css.png';
    const cssContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    /* js */
    const jsIcon = '/imgs/js.png';
    const jsContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    /* bootstrap */
    const bootstrapIcon = '/imgs/bootstrap.png';
    const bootstrapContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    /* engineering */
    const engineeringIcon = '/imgs/engineering.png';
    const engineeringContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    /* firestore */
    const firestoreIcon = '/imgs/firestore.png';
    const firestoreContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    /* github */
    const githubIcon = '/imgs/github.png';
    const githubContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    /* sass */
    const sassIcon = '/imgs/sass.png';
    const sassContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    /* react */
    const reactIcon = '/imgs/react.png';
    const reactContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat porro deleniti adipisci.';

    return ( 
        <div className="about m-3">
            <h2 className='text-center mt-3 mb-4'>About Me</h2>
            <p className="text-center w-70 m-auto mb-3">AUTO TYPE FEATURE HERE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quidem accusamus rerum, neque eius explicabo consectetur nesciunt iure. Inventore consequuntur iusto labore incidunt, culpa recusandae!</p>
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
        </div>
    );
}
 
export default About;