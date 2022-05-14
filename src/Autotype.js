const Autotype = () => {

    //CREATE CODE AND INJECT BELOW 

    let para = document.querySelector('.autoType-container');
    const text = `
    Thanks for taking time to look through my site! I'm a self taught Frontend Dev looking for my first junior role.`;
    const letters = text.split(''); console.log(letters);
    const autotype = () => {
        const letters = text.split('');
        let i=0;
        setInterval(() => {
            if(i<letters.length){
                para.innerText += letters[i];
                i++;
                
            }
        }, 3000);
    };

    // const letters = text.split('')
    // //console.log(para.textContent); // FIGURE OUT WHY THIS IS A PROBELME
    // // I Think it throws an error because para does not technically exist yet
    // let i=0;
    // // setInterval(() => {
    // //     if(i<letters.length){
    // //         para.textContent += letters[i];
    // //         i++;
    // //     }
    // // }, 30000000);

    // window.addEventListener('scroll', () => {
    //     // if(scrollY > aboutTop && allowAutoType === true){
    //     //     allowAutoType = false;
    //     //     autoType();
    //     // }
    // });

    // console.log(para) null because it doesnt exist yet

    return ( 
        <div>
            <p className="autoType-container">Hey</p>
            <button onClick={autotype}>CLICK ME</button>
        </div> 
    );
}
 
export default Autotype;