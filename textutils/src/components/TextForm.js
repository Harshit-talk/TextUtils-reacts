import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked " + text);
      let newText = text.toUpperCase();
      setText(newText)
    }
 
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const handleOnChange = (event)=>{
      // console.log("On Change");
      setText(event.target.value);
    }
    const [text, setText] = useState('');  
    // text = "new text"; // Wrrong way to change text.
    // setText("new text"); // Wrrong way to change text.
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter Text Here!!!'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>CLEAR</button>
    </div>
    <div className="container my-2">
        <h2>Your Text Summary:-</h2>
        <p>{text.split(" ").length} <b>Words</b> and {text.length} <b>Characters</b></p>
        <p>{0.008 * text.split(" ").length} Minutes to READ</p>
        <h2>Preview:-</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
