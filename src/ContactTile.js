const ContactTile = (props) => {

    const text = props.contactTileText;
    const imgSrc = props.contactTileImg;
    const href = props.contactTileHref;

    return ( 
        <div>
            <a href={href}>
                <p className="font-karla contact-box text-center p-3">
                    <img className="w-20" src={imgSrc} />
                    <br></br>
                    <span className="font-lato">
                        {text}
                    </span> 
                </p>
            </a>
        </div>
     );
}
 
export default ContactTile;