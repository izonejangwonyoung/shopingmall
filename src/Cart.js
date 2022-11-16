import {Table} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import store, {changeName} from "./store";

function Cart() {
    let dispatch = useDispatch()
    let a = useSelector((state) => {
        return state
    })////reduc store 가져와줌
    return (
        <div>
          <h6>{a.cartList[6].name}</h6>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>사용자 이름</th>
                    <th>관심 품목</th>
                </tr>
                </thead>
                <tbody>
                {a.cartList.map((p, i) => {
                    return (
                        <tr key={i}>
                            <td>{a.cartList[i].id}</td>
                            <td>{a.cartList[i].name}</td>
                            <td>{a.cartList[i].count}</td>

                        </tr>
                    )
                })
                }
                <button onClick={() => {
                    dispatch(changeName())
                }}>버튼임
                </button>
                </tbody>
            </Table>
        </div>
    )


}

export default Cart;