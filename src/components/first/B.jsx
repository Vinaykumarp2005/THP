import C from './C'
function B(props){
    console.log(props)
    return (
        <div className="B">
            <h2>Data from parent is {props.s}</h2>
            <h2>Username is {props.username}</h2>
           
            <h1>Component B</h1>
            <C/>
        </div>
    )
}
export default B;