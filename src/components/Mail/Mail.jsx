import './Mail.css'

export default function Mail(props) {
  return (
    <div className="mail" style={{backgroundColor:props.mode==='dark' ? 'rgb(3 45 73)':'lightgrey',color:props.mode==='dark' ? 'white':'rgb(19 67 99)'}}>
        <h1 className="mailtitle">Save time, save money!</h1>
        <span className="maildesc">Sign up and install <strong>TextAnalyzer</strong> now...!  we'll send the best deals to you</span>
        <div className="mailinputcontainer">
            <input type='email' required placeholder='Your Email Address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
