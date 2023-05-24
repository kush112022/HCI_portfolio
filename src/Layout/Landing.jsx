import { useState, useEffect } from "react"

const sContainer = `
    w-full h-screen
    select-none 
    flex flex-col justify-center items-center
    bg-slate-500
    rounded-b-3xl
    snap-start
` 
const sImgContainer = `
    h-52 w-52
    scale
    overflow-hidden
    mb-5
    hover:translate-y-0.5
    duration-500
    rounded-full
`
const sImg = `
    scale-125
    relative
    top-5
`

const sIntro = `
    mb-1
    text-2xl subpixel-antialiased
    opacity-50
    hover:opacity-100 hover:translate-y-0.5
    animate-fade-out
    duration-500
`

const sText = `
    flex flex-col items-center
    gap-2
    text-4xl tracking-wide subpixel-antialiased
    hover:translate-y-0.5
    animate-fade-in
    duration-500
    `


const toolList = [
    ["React", "text-sky-400 font-thin tracking-wide animate-fade-in-2"],
    ["JavaScript", "text-yellow-400 font-thin tracking-wide animate-fade-in-2"],
    ["Python", "text-lime-400 font-thin tracking-wide animate-fade-in-2"],
    ["Gin", "text-blue-400 font-thin tracking-wide animate-fade-in-2"],
    ["NodeJs", "text-green-500 font-thin tracking-wide animate-fade-in-2"],
    ["Golang", "text-sky-400 font-thin tracking-wide animate-fade-in-2"],
    ["Vue.js", "text-teal-500 font-thin tracking-wide animate-fade-in-2"],
]

function Landing(props) {

    const tools = toolList.map((toolTuple, index) =>{
        return <span className={toolTuple[1]} key={index}>{toolTuple[0]}</span>
    })

    const [toolState, setToolState] = useState(tools[0])
    const [count, setCount] = useState(0)

    function increment(){
        setCount( prevCount => (prevCount + 1)  % toolList.length)
    }

    useEffect(()=>{
        let interval = setInterval(()=>{
            setToolState(tools[count])
            increment()
        }, 2000)
        return ()=>{
            clearInterval(interval)
        }
    })

    return(
        <div className={sContainer} id='landing' ref={props.landingRef}>
            <div className={sImgContainer}>
                <img className={sImg} src={"./static/images/gitprofnofac.jpeg"} alt="portfolio image" />
            </div>
            <p className={sIntro}>Hello, I am Raul!</p>
            <div className={sText}>
                <h2>A full-stack developer using</h2>
                <h2>{toolState}</h2>
            </div>
        </div>
    )
}

export default Landing