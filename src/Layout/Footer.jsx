const sContainer = `
    flex flex-row justify-center items-center
    w-full h-8
    bg-zinc-950
`

const sCopyright = `
    font-thin
    tracking-wide
    text-sm  
`

function Footer() {
    return(
        // TODO: Copyright sign
        <div className={sContainer}>
            <p className={sCopyright}>Raul N. © 2023</p>
        </div>
    )
}

export default Footer