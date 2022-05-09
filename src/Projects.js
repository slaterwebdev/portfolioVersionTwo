import Gallery from './Gallery';
import { Link } from 'react-router-dom';
import DualImages from './DualImages';

const Projects = () => {

    const imgUrls = ['/imgs/lookUp.jpg', '/imgs/novo.jpg',  '/imgs/taskList.jpg', '/imgs/novo.jpg', '/imgs/novo.jpg',  '/imgs/novo.jpg',  '/imgs/novo.jpg'];

    const btnHrefs = ['https://slaterwebdev.github.io/look-up/', 'https://slaterwebdev.github.io/task-list/', 'https://slaterwebdev.github.io/novo/'];

    /* Column background colors */
    const backgroundColors = [{background: '#0e2c07'}, {background: 'white'}];

    return ( 
        <div className="projects">
            <div className="zero-months text-center mt-4">
                <h2>Personal Projects<br/><span>At 0 Months Commercial Exp</span></h2>
                <div className="d-flex align-center">
                    <Gallery btnHrefs={btnHrefs} imgUrls={imgUrls} backgroundColors={backgroundColors} />
                    <div className="text-center d-inline-block w-30 p-2">
                        <h3>TITLE</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita ipsum, cum eaque, corporis, veniam eum ad autem cupiditate animi architecto temporibus asperiores porro pariatur vel! Autem labore beatae harum ab, iusto ipsa accusamus corrupti expedita facilis aliquid amet quis obcaecati quam animi dolorem sapiente sequi magni, pariatur dignissimos? Tenetur.
                        </p>
                    </div>
                </div>
            </div>

            <div className="six-months text-center">
                <h2>Personal React Projects<br/><span>At 6 Months Commercial Exp</span></h2>
                <div>
                    <div className="d-flex align-center row-reverse">
                        <Gallery btnHrefs={btnHrefs} imgUrls={imgUrls} backgroundColors={backgroundColors} />
                        <div className="text-center d-inline-block w-30 p-2">
                            <h2>TITLE</h2>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita ipsum, cum eaque, corporis, veniam eum ad autem cupiditate animi architecto temporibus asperiores porro pariatur vel! Autem labore beatae harum ab, iusto ipsa accusamus corrupti expedita facilis aliquid amet quis obcaecati quam animi dolorem sapiente sequi magni, pariatur dignissimos? Tenetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="then-and-now text-center">
                <h2>Then and Now</h2>
                <div>
                    <div className="d-flex align-center row-reverse justify-center m-4">
                        <a className='oldPortfolio d-inline-block m-2' href="#">
                            <img className="br-xs w-100" src="/imgs/oldPortfolio.jpg" alt="Old Portfolio" />
                        </a>
                        <div className="text-center d-inline-block w-30 m-2">
                            <h3 className='mb-4'>TITLE</h3>
                            <p className='mb-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita ipsum, cum eaque, corporis, veniam eum ad autem cupiditate animi architecto temporibus asperiores porro pariatur vel! Autem labore beatae harum ab, iusto ipsa accusamus corrupti.
                            </p>
                            <Link to='/' className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs'>View portfolio v1</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="then-and-now text-center">
                <h2>Commercial Work Samples</h2>
                <div>
                    <div className="d-flex align-center row-reverse justify-center m-4">
                        
                        <DualImages imgUrlOne={imgUrls[4]} imgUrlTwo={imgUrls[5]}/>
                        <div className="text-center d-inline-block  m-2">
                            <h3>TITLE</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita ipsum, cum eaque, corporis, veniam eum ad autem cupiditate animi architecto temporibus asperiores porro pariatur vel! Autem labore beatae harum ab, iusto ipsa accusamus corrupti expedita facilis aliquid amet quis obcaecati quam animi dolorem sapiente sequi magni, pariatur dignissimos? Tenetur.
                            </p>
                        </div>
                        <DualImages imgUrlOne={imgUrls[4]} imgUrlTwo={imgUrls[5]}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;