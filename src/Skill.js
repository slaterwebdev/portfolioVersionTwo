const Skill = (props) => {
    const img = props.icon;
    const text = props.text;

    return ( 
        <div className="skill d-inline-block mt-2 mb-3 ml-1 mr-1 br-sm overflow-hidden">
            <div className="skill-img d-flex align-center justify-center">
                <img className="br-sm mb-4 mt-2" src={img} alt="Programming Language Icon" />
            </div>
            <div className="skill-text pos-relative">
                <p className="pos-absolute text-center br-sm p-2 font-karla font-md w-100">
                    {text}
                </p>
            </div>
        </div>
     );
}
 
export default Skill;