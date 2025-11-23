import React,{useState} from 'react'

export default function TextForm(props) {
    const onChangeHandler = (event) => {
        setText(event.target.value);
    };
    const onClickUpHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    };
      const onClickLoHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    };
       const onClickClrHandler = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    };
    const onClickCpyHandler = () => {
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");
    };
    const[text,setText]=useState("");
  return (
    <>
       <div>
            <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==="light"?"dark":"light"}`}>{props.heading}</label>
            <textarea className="form-control" style={{backgroundColor: props.mode==="light"?"white":"#042743", color: props.mode==="light"?"black":"white"}} id="myBox" value={text} onChange={onChangeHandler} rows="3"></textarea>
            <button className="btn mx-2" style={{backgroundColor: "#67B2D8", color:'white'}} onClick={onClickUpHandler}>Convert to Uppercase</button>
            <button className="btn mx-2" style={{backgroundColor: "#67B2D8", color:'white'}} onClick={onClickLoHandler}>Convert to Lowercase</button>
            <button className="btn" style={{backgroundColor: "#67B2D8", color:'white'}} onClick={onClickCpyHandler}>Copy Text</button>
            <button className="btn mx-2" style={{backgroundColor: "#67B2D8", color:'white'}} onClick={onClickClrHandler}>Clear Text</button>
       </div>
       <div className={`container my-5 mx-0 text-${props.mode==="light"?"dark":"light"}`}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{text.split(" ").length*0.004} minutes to read</p>
       </div>
       <div className={`  container my-5 mx-0 text-${props.mode==="light"?"dark":"light"}`}>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
       </div>
    </>
  )
}
