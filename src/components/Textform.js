import React, {useState} from 'react'


export default function Textform(props) {
    const upperhandeluponclick = () => {
        console.log('uppercase button is clicked by the user on:  ', + text)
        let newtext= text.toUpperCase()
        setText(newtext)
        }
    const lowerhandelonclick = () => {
        console.log('lowercase button is clicked by the user on:  ', + text)
        let lowercasetext= text.toLowerCase()
        setText(lowercasetext)
        }
        
        //capslock for the first char of a word
    const caponclick = () => {
            console.log('caps button is clicked by the user on:  ', + text)
            let d= text.toLowerCase().replace(/(?:^|\s)\w/g , function(match) {
                return match.toUpperCase();
              });
              setText(d)
            }
    const spaceremoveclick = () => {
            console.log('space remove button is clicked by the user on:  ', + text)
            let e= text.split(/[  ]+/)
              
                setText(e.join(" "))
            }
    const clearonclick = () => {
                console.log('clear button is clicked by the user on:  ', + text)
                let lowercasetext= ""
                setText(lowercasetext)
                }
    const copyonclick = () => {
                console.log('uppercase button is clicked by the user on:  ', + text)
                let copytext= document.getElementById('box')
                if(copytext) {
                    copytext.select();
                    document.execCommand('copy')
                    alert('text is copied')
                }
             
                 }

                //handling events
    const handelochange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    
    
    const [text, setText] = useState("");
    const a= text.split(/[.!?]/g).length
    const b= text.split("\n").length
    
    return (
        <>
        <div className="my-5">                                       
        <h1>{props.heading}</h1>        
        <div className="mb-4">
<textarea className="form-control"  value={text} onChange={handelochange} id="box" rows="5">{text}</textarea>
</div >

<div className='mb-5' >

<button className="btn btn-primary mx-2" onClick={upperhandeluponclick}>uppercase</button>
<button className="btn btn-primary mx-2" onClick={lowerhandelonclick}>lowercase</button>
<button className="btn btn-primary mx-2" onClick={caponclick}>capitalize case</button>
<button className="btn btn-primary mx-2" onClick={spaceremoveclick}>remove extraspace</button>
<button className="btn btn-primary mx-2" onClick={clearonclick}>clear text</button>
<button className="btn btn-primary mx-2" onClick={copyonclick}>copy text</button>
</div>
    </div>
    
<div> 
<h2>Summary</h2>         
<ul>
    <li><p>Your text contains {text.split(" ").length} Words and {text.length} Characters</p></li>
    <li><p> {a-1} SENTENCES</p></li>
    <li><p> {b-1} Paragraphs</p></li>
    <li><p>It takes {0.008 * text.split(" ").length} minutes to  read</p></li>
</ul>
</div>
<div><h2>Preview</h2>
<p>{ text.length > 0 ? text : "Write something in the text box to preview it here."}</p>
</div>
</>
    
  )
}
