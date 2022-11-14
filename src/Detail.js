import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Nav} from "react-bootstrap";

function Detail(props) {
    let {id} = useParams();
    const matchId = props.shoes.find(function (a) {
        return a.id == id
    })
let [tab,setTab]=useState(0);


    const [showCoupon, setShowCoupon] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowCoupon(false), 2000)
    })


    return (
        <div>
            <div className="container">
                {showCoupon == true ? <div className="alert alert-warning">2초 이내 클릭 시 쿠폰 발급</div> : null}
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.shoes[matchId.id].title}</h4>
                        <p>{props.shoes[matchId.id].content}</p>
                        <p>{props.shoes[matchId.id].price}</p>
                        <button className="btn btn-danger">주문하기</button>
                        {/*<button onClick={setCount(count+1)}>카운트</button>*/}
                    </div>
                </div>

                <div>
                    <Nav variant="tabs" defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link onClick={() => {
                                setTab(0)
                            }} eventKey="link0">버튼0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => {
                                setTab(1)
                            }} eventKey="link1">버튼1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => {
                                setTab(2)
                            }} eventKey="link2">버튼2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                   <TabContent tab={tab}/>
                </div>


            </div>

        </div>
    )
}



function TabContent(props){
    if (props.tab === 0){
        return
        (<div>내용0</div>)
    }
    if (props.tab === 1){
        <div>내용1</div>
    }
    if (props.tab === 2){
        <div>내용2</div>
    }
}
export default Detail;