import React, {useState} from 'react'
export default function DarkMode() {
    const [myStyle, setMyStyle] = useState({
        color: 'black' ,
        backgroundColor: 'white'
    })

    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () =>{
    
    if(myStyle.color === 'black'){
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        })
        setBtnText("Enable Light Mode")
    }
    else{
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode");
    }
}
    return (
        <>
        
        <div className='head' >
            <p style={myStyle}>
            fknsd'zzze;  s   ge <br />
            d jfhgikd  <br />
            s  ris,dmgd <br />
            gr;kdng <br />
            skgknsks <br />
            adehat abriesh ' <br />
            nr ornksnn maffhja;ien abcd ef gh ij kl mn op querySelector string  uv' <br />
            wx <br />
             yz <br />
            </p>
            <button  style={myStyle} onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
        </>
    );
}