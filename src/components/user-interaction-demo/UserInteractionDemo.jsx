function UserInteractionDemo(){
    function handleEvent(){
        console.log("Click event occured")
    }
    function handleAnotherEvent(x){
        console.log("another event x is",x)
    }
    return(
        <div className="text-center">
<button className="btn btn-primary" onClick={handleEvent}>Click</button>
<button className="btn btn-success" onClick={handleAnotherEvent}>Another</button>

        </div>
    )
}
export default UserInteractionDemo;