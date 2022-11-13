import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(props) {
    let {id} = useParams();
    const haha = props.shoes.find(function (a) {
        return a.id == id
    })
    const [showCoupon,setShowCoupon]=useState(true);

    useEffect(() => {
        setTimeout(() =>setShowCoupon(false), 2000)
    })


    return (
        <div>
            <div className="container">
                {showCoupon==true? <div className="alert alert-warning">2초 이내 클릭 시 쿠폰 발급</div>:null}
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.shoes[haha.id].title}</h4>
                        <p>{props.shoes[haha.id].content}</p>
                        <p>{props.shoes[haha.id].price}</p>
                        <button className="btn btn-danger">주문하기</button>
                        {/*<button onClick={setCount(count+1)}>카운트</button>*/}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Detail;