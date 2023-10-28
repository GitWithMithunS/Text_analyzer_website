import React, {useState} from 'react'


export default function Textform(props) {
    const upperhandeluponclick = () => {
        console.log('uppercase button is clicked by the user on:  ', + text)
        let newtext= text.toUpperCase()
        setText(newtext)
        props.showalt('converted to uppercase','success')
        if(text.length > 0 === false ){
            props.showalt('please enter the text to continue','danger')
          }
        }
    const lowerhandelonclick = () => {
        console.log('lowercase button is clicked by the user on:  ', + text)
        let lowercasetext= text.toLowerCase()
        setText(lowercasetext)
        props.showalt('converted to lowercase','success')
        if(text.length > 0 === false ){
            props.showalt('please enter the text to continue','danger')
          }
        }
        
        //capslock for the first char of a word
    const caponclick = () => {
            console.log('caps button is clicked by the user on:  ', + text)
            let d= text.toLowerCase().replace(/(?:^|\s)\w/g , function(match) {
                return match.toUpperCase();
              });
              setText(d)
              props.showalt('First letters are capatilized','success')
              if(text.length > 0 === false ){
                props.showalt('please enter the text to continue','danger')
              }
            }
    const spaceremoveclick = () => {
            console.log('space remove button is clicked by the user on:  ', + text)
                let e= text.split(/[  ]+/)
                if(text.length > 0 === false ){
                    props.showalt('please enter the text to continue','warning alert')
                }
                else 
                {
                   props.showalt('no more  extraspaces to remove','primary alert')
                   
                }
                setText(e.join(" "))
            }
            
    const clearonclick = () => {
                console.log('clear button is clicked by the user on:  ', + text)
                let lowercasetext= ""
                setText(lowercasetext)
                props.showalt('text is cleared.you can start over fresh','success')
                if(text.length > 0 === false ){
                    props.showalt('their is no text in the textarea to clear','warning')
                  }
                }
    const copyonclick = () => {
                console.log('uppercase button is clicked by the user on:  ', + text)
                let copytext= document.getElementById('box')
                 if(text.length > 0 === false ){
                    props.showalt('enter something to copy it to clipboard','warning')
                  }
                  else{
                    if(copytext) {
                        copytext.select();
                        document.execCommand('copy')
                        alert('text is copied')
                        props.showalt('your text is copied to the clipboard','info alert')
                    }
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
        <div className="my-5" >                                       
        <h1  style={{color:props.mode==='dark' ? 'white':'rgb(19 67 99)'}}>{props.heading}</h1>        
        <div className="mb-4">
<textarea className="form-control" style={{backgroundColor:props.mode==='dark' ? '#3380ab':'white',color:props.mode==='dark' ? 'white':'rgb(19 67 99)'}}  value={text} onChange={handelochange} id="box" rows="5">{text}</textarea>
</div >

<div className='mb-5 '  >

<button className="btn btn-primary mx-2 my-2" onClick={upperhandeluponclick}>uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={lowerhandelonclick}>lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={caponclick}>capitalize case</button>
<button className="btn btn-primary mx-2 my-2" onClick={spaceremoveclick}>remove extraspace</button>
<button className="btn btn-primary mx-2 my-2" onClick={clearonclick}>clear text</button>
<button className="btn btn-primary mx-2 my-2" onClick={copyonclick}>copy text</button>
</div>
    </div>
    
<div style={{color:props.mode==='dark' ? 'white':'rgb(19 67 99)'}}> 
<h2 >Summary</h2>         
<ul>
  {/* a good example of using filter is here . where its creating a new array from the original array have  only elements that qualify the condition of the filter*/}
    <li><p>Your text contains {text.split(/\s+/).filter((textsplitele)=>{return textsplitele.length!==0}).length } Words and {text.length} Characters</p></li>
    <li><p> {a-1} SENTENCES</p></li>
    <li><p> {b-1} Paragraphs</p></li>
    <li><p>It takes {0.008 * text.split(" ").filter((textsplitele)=>{return textsplitele.length!==0}).length} minutes to  read</p></li>
</ul>
</div>
<div style={{color:props.mode==='dark' ? 'white':'rgb(19 67 99)'}}><h2>Preview</h2>
<p>{ text.length > 0 ? text : "Write something in the text box to preview it here."}</p>
</div>
</>
    
  )
}
