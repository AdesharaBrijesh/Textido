import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        settext(newText)
    }
    const handleLOwClick = () =>{
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        settext(newText)
    }
    
    const handleClearClick = () =>{
        // console.log("Clear was clicked");
        let newText = '';
        settext(newText)
    }
    const handleCopyClick = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText (text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text. split(/[ ]+/);
        settext(newText.join(" "))
    }
    
    const handleOnChange = (event)=>{
        // console. log("On change");
        settext (event.target.value)
    }
    
    const [text, settext] = useState('Enter the the text here'); //usestate => hooks
    // text = "new text" //wrong way to change the text
    // settext = ("new text"); //correct way to change the text

    return (
        <>
        <h1 className='head'>
            Hello World ! <br></br>{props.name}
            {/* define props like props.title in curly braces */}
        </h1>
        <div>
        <br></br>
            <h1>{props.heading}</h1>
            <div>
                <textarea className="form" value={text} onChange={handleOnChange} id="mybox" cols="100" rows="10"></textarea>
            </div>  
            <button className="btn" onClick={handleUpClick}>Uppercase</button>
            <button className="btn" onClick={handleLOwClick}>Lowercase</button>
            <button className="btn" onClick={handleClearClick}>Clear</button>
            <button className="btn" onClick={handleCopyClick}>Copy</button>
            <button className="btn" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="containerr">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
Textform.propTypes = {heading: PropTypes.string,
                      name:PropTypes.string         };
Textform.defaultProps = {name : 'Adeshara Brijesh' };
Textform.defaultProps = {heading : 'Test Editor'};
