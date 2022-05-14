

const ProjectSelector = (props) => {
    
    const zeroExpBtn = props.btnClickOne;
    const sixMonthsExpBtn = props.btnClickTwo;
    const commercialExpBtn = props.btnClickThree;
    

    return ( 
        <div className="project-selector d-inline-block br-xs">
            <button onClick={() => {zeroExpBtn()}} className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs ml-1 mr-1'>0 Months Exp Projects</button>
            <button onClick={() => {sixMonthsExpBtn()}} className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs ml-1 mr-1'>6 Months Exp Projects</button>
            <button onClick={() => {commercialExpBtn()}} className='hire-me d-inline-block p-2 pl-4 pr-4 br-xs ml-1 mr-1'>Comparison</button>
        </div>
     );
}
 
export default ProjectSelector;