import B from './B'
function A(){
    let x=100;

    return (

        <div className="A">
            <h1>Component A</h1>
            {/* nest componet B here */}
            <B s={x} username={'ravi'}/>
        </div>
    )
}
export default A;