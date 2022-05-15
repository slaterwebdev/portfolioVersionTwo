import ProjectSelector from "./ProjectSelector";
import React, { useState } from 'react';
import PersonalProjectsOne from "./PersonalProjectOne";
import PersonalProjectsTwo from "./PersonalProjectTwo";

const Projects = () => {
    const [defaultPage, setDefaultPage] = useState(true);
    const [btnOne, setOne] = useState(false);
    const [btnTwo, setTwo] = useState(false);
    const [btnThree, setThree] = useState(false);

    const btnClickOne = () => {
        setDefaultPage(false);
        setTwo(false);
        setThree(false);
        setOne(true);
    };

    const btnClickTwo = () => {
        setDefaultPage(false);
        setOne(false);
        setThree(false);
        setTwo(true);
    };

    const btnClickThree = () => {
        setDefaultPage(false);
        setOne(false);
        setTwo(false);
        setThree(true);
    };

    const titles = ['Look Up', 'Novo', 'Task List', 'QuickStyle', 'Portfolio 2.0'];
    const imgUrls = ['/imgs/lookUp.jpg', '/imgs/novo.jpg',  '/imgs/taskList.jpg', '/imgs/quickstyle.jpg', '/imgs/novo.jpg',  '/imgs/novo.jpg',  '/imgs/novo.jpg' , '/imgs/portfoliov2.jpg'];
    const btnHrefs = ['https://slaterwebdev.github.io/look-up/', 'https://slaterwebdev.github.io/task-list/', 'https://slaterwebdev.github.io/novo/' , 'https://slaterwebdev.github.io/sassCssFramework/'];
    const text = [
        'A project all about space, created with multiple NASA APIs. A responsive, mobile first designed project created using HTML, CSS, JS & Bootstrap.',
        'My first paid freelance project for a small etsy business. It is an E-Commerce website built using HTML, CSS, JS & Bootstrap. For me a memorable first step in the world of freelancing.',
        'A To Do List style project to highlight my ability to manipulate data & the DOM simultaniously. Built with HTML, CSS, JS & Bootstrap.',
        'A "Bare bones" style project showcasing the CSS Library I personally built using SASS. All of the following projects use parts of this framework along with React.',
        'A second crack at my portfolio, and a chance to showcase the many things I have learned in a short period of time. This was created with REACT and SASS'
    ];

    /* Column background colors */
    const background = [{background: '#272d4d'}, {background: '#0e2c07'}, {background: 'white'}, {background: 'black'}];

    /* Project Icons */

    return ( 
        <div className="projects">
            <div className='personal-projects mt-4 mb-3'>
                <div className="project-selector d-flex justify-space-between">
                    <h2>Personal Projects</h2>
                    <ProjectSelector btnClickOne={btnClickOne} btnClickTwo={btnClickTwo} btnClickThree={btnClickThree} />
                </div>

                <p className="text-center mt-3 font-karla">
                    Welcome to the Projects page, here you will find sections of projects created by yours truely. There is a section dedicated to the projects I created before I had my first dev role, there is also one showcasing projects I've made since then. The final section is a comparison between the two to demonstrate the rapid growth my abilities have seen, and will continue to see as I work with even more great people/companies!
                </p>

                {defaultPage && 
                <div className="d-flex justify-center pos-relative">
                    <img className="folder" src="/imgs/folder.png" />
                    <img className="pos-absolute bottom-0 right-25 w-20" src="/imgs/search.png" />
                </div>}

                {btnOne && <PersonalProjectsOne title={titles} imgUrls={imgUrls} btnHrefs={btnHrefs} text={text} background={background}/>}

                {btnTwo && <PersonalProjectsTwo title={titles} imgUrls={imgUrls} btnHrefs={btnHrefs} text={text} background={background}/>}

                {btnThree && 
                <div className="then-and-now text-center mt-3">
                    <div>
                        <div className="d-flex align-center row-reverse justify-center m-2">
                            <a className='oldPortfolio d-inline-block m-2' href="https://slaterwebdev.github.io/slaterwebdev/">
                                <img className="br-xs w-100" src="/imgs/oldPortfolio.jpg" alt="Old Portfolio" />
                            </a>
                            <div className="text-center d-inline-block w-30 m-2">
                                <h2 className="mb-2">Then and Now</h2>
                                <p className='mb-4 font-karla'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita ipsum, cum eaque, corporis, veniam eum ad autem cupiditate animi architecto temporibus asperiores porro pariatur vel! Autem labore beatae harum ab, iusto ipsa accusamus corrupti.
                                </p>
                                <a href='https://slaterwebdev.github.io/slaterwebdev/' className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs'>View portfolio v1</a>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
};
 
export default Projects;