import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked " + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to UpperCase!!!", "success");
    }
 
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase!!!", "success");
    }
    const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
      props.showAlert("Text Cleared!!!", "success");
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to ClipBoard!!!", "success");
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!!!", "success");
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
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" placeholder='Enter Text Here!!!'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>CLEAR</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary:-</h2>
        <p>{text.split(" ").length} <b>Words</b> and {text.length} <b>Characters</b></p>
        <p>{0.008 * text.split(" ").length} Minutes to READ</p>
        <h2>Preview:-</h2>
        <p>{text.length>0? text: "Enter Something in the textbox above to Preview it here."}</p>
    </div>
    </>
  )
}
