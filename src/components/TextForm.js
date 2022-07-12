import React, {useState} from 'react'

let count = 0
export default function TextForm(props) {

    const [text, setText] = useState("");
    
    function handleUpClick(){
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    
    function handleOnChange(event){
        console.log(event.target.innerHTML)
        if(event.target.value === "\n"){
            count += 1
        }
        if (event.target.value === ""){
            count = 0
        }
        else{
            count = text.split(" ").filter((element) => {return element.length !== 0}).length
        }
        setText(event.target.value)
    }
    
    function handleLowClick(){
        let newText = text.toLocaleLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    
    function handleClearClick(){
        setText("")
        count = 0
        props.showAlert("Cleared all text", "success")
    }   
    return (
        <>
    <div className="container" style={{color:props.mode === "dark" ? "white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="container">
            <textarea className="form-control" placeholder="Start Typing..." style = {{backgroundColor:props.mode === "light" ? "white":"rgb(45, 45, 45)", color:props.mode === "light" ? "black":"white"}} onChange={handleOnChange} id="Textarea" value={text}></textarea>
        </div>
        <div className="container my-4">
        <button className="btn btn-primary mx-3" disabled = {count === 0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" disabled = {count === 0} onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" disabled = {count === 0} onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-2">
            <h1>Your text Summary</h1>
            <p>{count} of words and {text.length} characters</p>
            <p>{0.0125 * count} minutes required to read text</p>
            <h3>Preview</h3>
            <p>{text === "" ? "Nothing to preview" : text}</p>
        </div>
        </div>
    </>
  )
}
