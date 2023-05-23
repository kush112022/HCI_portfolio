import { useState } from "react"


const sContainer = `
    w-full
    h-screen
    flex
    flex-col
    items-center
    snap-start
    bg-zinc-100
    rounded-3xl
`

const sForm = `
    mt-20
    w-1/2
    flex
    flex-col
    justify-center
    items-center
`

const sHeader = `
    text-zinc-900
    mt-36
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
` 

const sError = `
    text-red-500
    self-start
    indent-2
`

const sSubmitButton = `
    p-2
    mt-5
    w-1/2
    text-lg text-white
    font-semibold
    tracking-wider
    rounded-md
    bg-zinc-950
    hover:bg-zinc-900
    focus:text-lime-400
    active:translate-y-0.5
`

const sFormThankYou = `
    text-lg 
    text-zinc-900 
    mt-4
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

    const [subbed, setSubbed] = useState(false)

    function handleChange(event){
        console.log(formData);
        setFormData( prevState =>{
            return {...prevState, [event.target.name]: event.target.value}
        })
    }

    function toggleSubmit(event){
        console.log(subbed);
        event.preventDefault()
        setSubbed(()=> true)
    }   

    function onSubmit(event){
        event.preventDefault() 
    }

    return(
        <div className={sContainer} id='contact' ref={props.contactRef}>
            <h1 className={sHeader}>Contact me</h1>
            <form className={sForm} action={onSubmit}>

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

            </form>
                <button className={sSubmitButton} onClick={toggleSubmit}>Submit</button>
            
            {subbed && <span className={sFormThankYou}>Thank you for your message! We will get back to you as soon as possible :)</span>}
        </div>
    )
}

export default Contact