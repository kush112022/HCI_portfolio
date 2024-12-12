import Box from '../components/Box.jsx'
import BoxData from '../data/boxData.js'

const sContainer = `
    flex flex-col
    w-full h-screen
    items-center
    p-10
    rounded-b-2xl
`

const sHeader = `
    text-white
    mt-16
    text-center
    duration-500
    hover:translate-y-0.5
    text-4xl
    subpixel-antialiased
    tracking-wide
`

const sBoxContainer = `
    xl:max-w-6xl
    h-3/4
    mt-10
    gap-10
    bg-zinc-950
    grid
    grid-cols-2
    grid-rows-2
    visible:opacity-50
`

function Projects(props) {

    const Boxes = BoxData.map(project =>{
        return(
            <Box 
                key={project.id}
                alt={project.alt} 
                img={project.img}
                title={project.title}
                text={project.text}
            />
        )
    })

    return(
        <div className={sContainer} id='projects' ref={props.projectRef}>
            <h2 className={sHeader}>My Education</h2>
            <div className={sBoxContainer}>
                {Boxes}
            </div>
        </div>
    )
}

export default Projects