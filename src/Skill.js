const Skill = (props) => {
    const img = props.icon;
    const text = props.text;

    return ( 
        <div className="skill d-inline-block br-xs m-3">
            <div className="d-flex align-center br-xs">
                <div className="skill-img p-2 br-xs">
                    <img className="br-xs" src={img} alt="Programming Language Icon" />
                </div>
                <p className="font-sm text-center">{text}</p>
            </div>
        </div>
     );
}
 
export default Skill;