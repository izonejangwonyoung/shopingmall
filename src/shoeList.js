import data from "./data";

function ShoeList(props) {
    return (
        <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+'/shoe'+props.i+'.jpg'} alt="shoe1" width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
            <p>a</p>
        </div>
    )
}


// <div className="col-md-4">
//     <img src={shoe1} alt="shoe1" width="80%"/>
//     <h4>{data[0].title}</h4>
//     <p>상품 설명</p>
//     <p>{data[0].price}</p>
// </div>

export default ShoeList;