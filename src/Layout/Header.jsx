const sContainer = `
    w-screen
    flex flex-row justify-around items-center
    absolute top-0  
    z-20
    h-12
    bg-zinc-950
`

const sSocial = `
    flex flex-row
    items-center  
    gap-4
`

const sIconLink = `
    flex flex-col items-center
    duration-100
    relative
    group
`
const sIcon = `
    invert h-6
    hover:translate-y-0.5
    hover:opacity-40
    active:opacity-10
    active:translate-y-1
`

const sIconText = `
    absolute
    top-10
    invisible
    group-hover:visible
    group-hover:animate-fade-in-2
    tracking-widest
    text-sm
`

const sNav = `
    flex flex-row items-center
    font-semibold
    gap-4
`

const sNavLink = `
    text-zinc-100
    hover:translate-y-0.5
    duration-100
    cursor-pointer
`

function Header(props){

    const landingRef = props.landingRef
    const projectRef = props.projectRef
    const contactRef = props.contactRef


    function scrollToRef(ref){
        ref.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    
    return(
        <div className={sContainer}>
            <div className={sSocial}>
                <a className={sIconLink} href="https://gmail.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1 -1 24 24" strokeWidth={2} stroke="currentColor" className={sIcon + " w-7 h-7 invert-0"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className={sIconText}>Mail</span>
                </a>
                <a className={sIconLink} href="https://github.com/">
                    <img className={sIcon} src={'public/github.png'} alt="Icon Github" /> 
                    <span className={sIconText}>GitHub</span>
                </a>
                <a className={sIconLink} href="https://linkedin.com/">
                    <img className={sIcon} src={'public/linkedin.png'} alt="Icon linkedIN" />
                    <span className={sIconText}>LinkedIn</span>
                </a>
                <a className={sIconLink} href="https://dribbble.com/">
                <img className={sIcon} src={"public/dribbble.png"} alt="Icon Dribble" />
                    <span className={sIconText}>dribbble</span>
                </a>
            </div>

            <nav className={sNav}>
                <a className={sNavLink + " hover:opacity-40"} onClick={()=> scrollToRef(landingRef)}>Start</a>
                <a className={sNavLink + " hover:opacity-40"} onClick={()=> scrollToRef(projectRef)}>Projects</a>
                <a className={sNavLink + " hover:text-lime-400"} onClick={()=> scrollToRef(contactRef)}>Contact Me</a>
            </nav>
        </div>
    )
}

export default Header