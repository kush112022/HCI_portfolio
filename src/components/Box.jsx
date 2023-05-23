const sContainer = `
    flex flex-col
    w-full h-full
    relative
    overflow-hidden
    border-8 border-white
    rounded-3xl 
    bg-white
`

const sProjectImage = `
    h-full w-full
    grayscale 
`

const sProjectTextContainer = `
    absolute
    bottom-10
    p-5 mx-8
    flex flex-col
    bg-white
    rounded-md
    hover:translate-y-0.5
    duration-500
    cursor-pointer 
`

const sProjectHeader = `
    text-slate-900
    text-3xl
    font-semibold
    tracking-tight
    mb-2   
`

const sProjectSeeMore = `
    flex flex-row items-end
    gap-2
    mt-2 
`

function Box(props) {
    return (
        <div className={sContainer}>
            <img className={sProjectImage} src={props.img} alt={props.alt} />
            <a href={props.link}>
                <div className={sProjectTextContainer}>
                    <h2 className={sProjectHeader}>{props.title}</h2>
                    <p className="text-slate-900">{props.text}</p>
                    <div className={sProjectSeeMore}>
                        <p className="text-slate-900 font-semibold">See more</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 invert self-center">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
            </a>

        </div>
    )
}

Box.defaultProps = {
    img: './assets/box_image_1.jpg',
    title: 'My Project',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit unde illum eligendi perspiciatis, labore eaque est deserunt expedita temporibus minus doloribus facilis, aliquid animi, quibusdam aspernatur facere dicta atque.',
    link: 'https://google.com/'
}

export default Box

