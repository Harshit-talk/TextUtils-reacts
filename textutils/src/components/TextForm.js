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
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" placeholder='Enter Text Here!!!'></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>CLEAR</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary:-</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} <b>Words</b> and {text.length} <b>Characters</b></p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to READ</p>
        <h2>Preview:-</h2>
        <p>{text.length>0? text: "Nothing to Preview."}</p>
    </div>
    </>
  )
}
