import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import NavBar from "./navBar";
import {useState} from "react";
import data from "./data"
import ShoeList from "./shoeList";
import {Link, Outlet, Route, Router, Routes, useParams} from "react-router-dom";
import Detail from "./Detail"
import axios from "axios";
import Cart from "./Cart";
function App() {
    const [shoes,setShoes] = useState(data);
    return (
        <div className="App">
            <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                    let copy = [...shoes];
                    copy = copy.concat(result.data);
                    setShoes(copy)
                })
                    .catch(() => {
                        console.log('실패함')
                    })

            }}>이 버튼을 누르면 물건 개수가 늘어납니다.
            </button>
            <button onClick={console.log(data)}>data print button</button>
            <NavBar/>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="main-bg"></div>
                        <div className="container">상품목록
                            <div className="row">
                                {shoes.map((a, i) => {
                                        return (<ShoeList shoes={shoes[i]} i={i}/>)
                                    }
                                )}
                            </div>
                        </div>
                    </>
                }/>
                <Route path="/detail/:id" element={<div><Detail shoes={shoes}/></div>}/>
                <Route path="/about" element={<div>어바웃페이지임 <Link to="company">company</Link><Outlet></Outlet></div>}>
                    <Route path="company" element={<div>회사에 대한 것들을 적어놓은 곳</div>}/>
                </Route>
                <Route path="/event"
                       element={<div>오늘의 이벤트 <Link to="one">one</Link> <Link to="two">two</Link><Outlet></Outlet>
                       </div>}>
                    <Route path="one" element={<div>첫 주문 시 배송비 무료</div>}/>
                    <Route path="two" element={<div>기념일 기념 쿠폰 받기</div>}/>
                </Route>
                <Route path="/cart"element={<Cart/>}></Route>
                <Route path="*" element={<div>허튼 짓 말고 홈으로 돌아가세요</div>}/>
            </Routes>
        </div>
    );
}

export default App;
