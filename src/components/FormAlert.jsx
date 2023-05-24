
const sAlert = `
    flex flex-col    
    absolute top-32
    w-1/2 xl:w-1/3
    p-5
    rounded-md
    backgrop-blur-lg
    z-10
`

const sAlertSuccess = sAlert + `
    bg-green-400
`

const sAlertFailure = sAlert + `
    bg-red-400
`

const sBtnClose = `
    absolute top-1 right-6
    flex justify-center items-center
    rounded-full
    text-4xl text-white
    font-bold
    hover:text-zinc-900
    active:translate-y-0.5
    animate-fade-in-2
`

function SubmitAlert(props){

    const alertStyle = props.success ? sAlertSuccess : sAlertFailure 
    const alertHeader = props.success ? "All good!" : "Oops!"
    
    function parseAlertMessage(){
        if(props.success){
            return `Thanks for your submission ${props.name.split(" ")[0]}, we will get back to you shortly!`
        }

        return "Something went wrong, please try again later!"
    }

    return(
        <>
            {   props.success != null && 
                <div className={alertStyle}>
                        <h3 className="font-bold">{alertHeader}</h3>
                        <p>{parseAlertMessage()}</p>
                        <button className={sBtnClose} onClick={props.closeAlert}>-</button>
                </div>
            }
        </>
    )
}

SubmitAlert.defaultProps = {
    'success': false,
    'name': 'Max Musterman'
}


export default SubmitAlert
