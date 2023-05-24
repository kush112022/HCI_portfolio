import { useState } from "react"
import SubmitAlert from "../components/submitAlert"

const sContainer = `
    w-full h-screen
    flex flex-col justify-center items-center
    snap-start
    bg-zinc-100
    rounded-3xl
`

const sForm = `
    w-1/2
    flex flex-col justify-center items-center
    xl:w-1/3
`

const sHeader = `
    text-zinc-900
    mb-10
    text-4xl
`

const sLabel = `
    text-zinc-900
    text-md font-semibold tracking-wide
    mt-3 mb-1
    self-start
`

const sInput = ` 
    w-full
    p-2
    text-lg text-zinc-900
    placeholder-zinc-500
    autofill:bg-white
    autfill:text-2xl
    bg-transparent
    rounded-md border-zinc-900 border-2 
    outline-none
    duration-300
    focus:shadow-outline
    focus:scale-105
    focus:border-lime-400
    focus:invalid:border-red-600
    focus:invalid:text-red-600
    focus:invalid:placeholder-red-600
` 

const sError = `
    text-red-500
    self-start
    indent-2
`

const sSubmitButton = `
    p-2
    mt-5
    text-lg text-white
    font-semibold
    tracking-wider
    rounded-md
    bg-zinc-950
    hover:bg-zinc-900
    active:translate-y-0.5
    w-full
`

const nameErrorMessage = "Name can't include special characters"
const mailErrorMessage = "Invalid mail address."
const messageErrorMessage = "Insufficient message length"


function Contact(props) {

    const boolean = false

    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        enquiry: '',
        message: '',
    })

    const [alert, setAlert] = useState(null)
    const [buttonContent, setButtonContent] = useState(<span>Submit</span>)

    function handleChange(event){
        setFormData( prevState =>{
            return {...prevState, [event.target.name]: event.target.value}
        })
    }

    function apiCall(tInMs){
        const boolList = [true, false]
        //sleep for 3 seconds 
        //return true or false randomly

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let random = boolList[Math.floor(Math.random() * 2)]
                if(random) resolve(true)
                else resolve(false)
            }, tInMs)
        })
    }

    async function handleSubmit(event){
        event.preventDefault()
        // setAlert(()=> true)
        setButtonContent(<span className="animate-pulse">Loading...</span>)
        let message = await apiCall(2000)
        if(message){
            setAlert(true)
            setButtonContent(<span className="text-lime-400">Success!</span>)
            // create alert 
        }
        else{
            setAlert(false)
            setButtonContent(<span>Submit</span>)
            // create alert
        }
    } 
    
    function closeAlert(){
        setAlert(null)

        if(alert === true){
            setFormData({
                name: '',
                mail: '',
                enquiry: '',
                message: '',
            })
            setButtonContent(<span>Submit</span>)
        }
    }


    return(
        <div className={sContainer} id='contact' ref={props.contactRef}>
            <SubmitAlert name={formData.name} success={alert} closeAlert={closeAlert}></SubmitAlert>
            <form className={sForm} onSubmit={handleSubmit}>
                <h1 className={sHeader}>Contact me</h1>

                <label className={sLabel} htmlFor="name">Name</label>
                <input onChange={handleChange} autoComplete="off" className={sInput} type="text" name="name" id="name" placeholder="Your name" pattern="^[a-zA-Z]+\s[a-zA-Z]+$" title="First and last name are required." value={formData.name} required/>
                {boolean && <span className={sError}>{nameErrorMessage}</span> }

                <label className={sLabel} htmlFor="mail">Email Address</label>
                <input value={formData.mail} onChange={handleChange} autoComplete="off" className={sInput} type="email" name="mail" id="email" placeholder="your@mail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Your address requires an '@' sign and an ending e.g. '.com, .org'."  required/>
                {boolean && <span className={sError}>{mailErrorMessage}</span> }

                <label className={sLabel} htmlFor="enquiry">Type of enquiry</label>
                <select value={formData.enquiry} onChange={handleChange} className={sInput} name="enquiry" id="enquiry">
                    <option value="fpp">Freelance project proposal</option>
                    <option value="ppq">Personal project questions</option>
                    <option value="o">Other (describe below)</option>
                </select>

                <label className={sLabel} htmlFor="message">Your message</label>
                <textarea value={formData.message} onChange={handleChange}  autoComplete="off" className={sInput + " h-full duration-0 focus:scale-100"} name='message' required/>
                {boolean && <span className={sError}>{messageErrorMessage}</span> }

                <button className={sSubmitButton} type="submit">{buttonContent}</button>
            </form>
            
            {/* {subbed && <span className={sFormThankYou}>Thank you for your message! We will get back to you as soon as possible :)</span>} */}
        </div>
    )
}

export default Contact