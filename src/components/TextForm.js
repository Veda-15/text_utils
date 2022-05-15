import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        console.log("LowerCase Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        console.log("Clear Clicked");
        // let newText = text.
        setText("");
    }
    const handleOnChange = (event)=>{
        console.log("OnChange Clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText('Hello ra chinna');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
        <div className="mb-3">
                    <textarea value={text} id="myBox" onChange={handleOnChange} className="form-control" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{(text.split(' ')).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
