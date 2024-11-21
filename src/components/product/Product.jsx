function Product(props){
    return (
        <div className="card text-center h-100 p-3">

           <img src={props.p.image} alt="" />
        <div className="card-body">
            <p className="fs-1 "></p>
            <p className="fs-1">Product id {props.p.id}</p>
            <p className="fs-1">Product  {props.p.id}</p>
        
        </div>
        </div>
    )
}
export default Product;