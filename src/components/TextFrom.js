import React, { useState } from 'react'

export default function TextFrom(props) {
    const [text, setText] = useState('');
    const hendleonchane =  (event) => {
        event.preventDefault();
        setText(event.target.value);
    }
    const hundleupClick = (event) => {
        event.preventDefault();
      let settText=(text.toUpperCase());
      setText(settText);
      props.setalerts("convert to uppercase","success");

    }
    const hundlelower = (event) => {
        event.preventDefault();
      let settText=(text.toLowerCase());
      setText(settText)
      props.setalerts("convert to Lowercase","success");

        
    }
    const hundlReset = (event) => {
        event.preventDefault();
        // console.log("uppare case to way click"+ text);
      let settText=('');
      setText(settText)
        
    }
    const hundlcopy = (event) => {
        event.preventDefault();
        var Text=document.getElementById("mybox");
        Text.select()
        navigator.clipboard.writeText(Text.value)
        props.setalerts("hundle the clipbord","success");
        
    }
    // text='new text';//Wrong way to state change
    // setText=("New text");//correct way the text change
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#1F618D'}}>
                    <h1>{props.handing}</h1>
                    <div className="form-group">
                        <textarea className="form-control" id="mybox" rows="8"  value={text}  onChange={hendleonchane}style={{backgroundColor:props.mode==='dark'?'white':'gray'}}></textarea>
                    </div>
                    <button className="btn btn-success mx-2 my-2"  onClick={hundleupClick}>Conver to UpperCase</button>
                    <button className="btn btn-success mx-2 my-2"  onClick={hundlelower}>Conver to LowerCase</button>
                    <button className="btn btn-success mx-2 my-2"  onClick={hundlReset}>Reset</button>
                    <button className="btn btn-success mx-2 my-2"  onClick={hundlcopy}>Copy</button>
            </div>
            <div className="container py-3"style={{color:props.mode==='dark'?'white':'#1F618D'}}>
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words and {text.length}charcters</p>
                <p>{0.008*text.split("").length}Minutes read</p>
            </div>
            <div className="container"style={{color:props.mode==='dark'?'white':'#1F618D'}} >
                <h3>Perview</h3>
                <p>{text.length>0?text:"Enter Something in the textbox above to perview it here"}</p>
            </div>
        </>
    )
}
// export default TextFrom;
