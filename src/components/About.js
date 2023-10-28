import React, {useState} from 'react'
import './Navbar.css';
import PropTypes from 'prop-types'

export default function About(props) {

//   const [mystyle,setMystyle] = useState({ 
//     color :  'rgb(19 67 99)',
//     backgroundColor:'white',
//     border : '1px solid white'
//   })
//   const [btntxt,setbtntxt] = useState("enable dark mode")

//   const togglestyle = () => {
//     if(mystyle.color==='white'){
//       setMystyle({
//          backgroundColor:'white',
//          color :  'rgb(19 67 99)'
//       })
//       setbtntxt('enable dark mode')
//     }
//     else{
//       setMystyle({
//         backgroundColor:' rgb(19 67 99)',
//         color : 'white'
//     })
//     setbtntxt('enable light mode')
//   }
// }

  return (
    <div className='container' id='aboutpage' style={{backgroundColor:props.mode==='dark' ? ' rgb(19 67 99)':'white',color:props.mode==='dark' ? 'white':'rgb(19 67 99)'}}>
          <h1>ABOUT US </h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={{backgroundColor:props.mode==='dark' ? ' rgb(19 67 99)':'white',color:props.mode==='dark' ? 'white':'rgb(19 67 99)'}}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={{backgroundColor:props.mode==='dark'? '#3380ab':'white', border:props.mode==='dark'? '2px solid white': '2px solid rgb(19 67 99)'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Who   is the developer?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      Hello there! My name is <strong>Mithun S</strong>, and I am currently pursuing Electronics and Communication Engineering at <strong>New Horizon College of Engineering</strong>  in Marathahalli, Bangalore. With a strong passion for  <strong><code>Web Development</code></strong> , I am constantly exploring the ever-evolving world of coding and design. <div><strong>Thank you</strong> for stopping by my website, and I hope you find something valuable during your visit!</div>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark' ? ' rgb(19 67 99)':'white',color:props.mode==='dark' ? 'white':'rgb(19 67 99)'}}>
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'? '#3380ab':'white' , border:props.mode==='dark'? '2px solid white': '2px solid rgb(19 67 99)'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Tools used in making this website?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      I have gained practical experience in a range of programming languages such as JavaScript, React, HTML, and CSS by doing this project. Additionally, I have worked extensively with key concepts including <code>routing</code>,<code>props and proptypes</code> , and various <code>hooks</code>  such as useNavigate and useState also learnt how to work with <strong>bootstarping</strong> and their elements to save time. My projects have involved implementing diverse functionalities such as <strong>handling events</strong>  extancively ,favicon changing etc... Throughout my work, I have relied on the efficient and user-friendly environment of Visual Studio Code.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark' ? ' rgb(19 67 99)':'white',color:props.mode==='dark' ? 'white':'rgb(19 67 99)', border:props.mode==='dark'? '2px solid white': '2px solid rgb(19 67 99)'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'? '#3380ab':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What can you do on this website?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      <strong>Welcome</strong> to our text playground! Explore the power to transform your sentences effortlessly. Convert text to lowercase, uppercase, or capitalize it. Easily remove spaces, clear text, and copy the modified text to your clipboard. Additionally, discover the length of your content by knowing the word count,character count sentence count, and paragraph count. Find out how long it might take to read your text. <div> <strong>Enjoy experimenting</strong> with the diverse functionalities and unleash the potential of your words.Experience our <code>vibrant interface</code> with both colorful dark mode and light mode options for a personalized browsing experience.</div> 
      </div>
    </div>
  </div>
</div>
{/* 
<div><button type="button" onClick={togglestyle} className="btn btn-secondary">{btntxt}</button>

    </div> */}
    </div>
  )
}
