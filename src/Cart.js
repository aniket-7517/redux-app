import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCart } from "./Slices/Cart.slice";

function Cart() {

    const {isLoading, data, error} = useSelector((state) => state.carts);
    console.log(data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCart());
    },[])

    return (
        <div className="container mt-2">
            <div className="row">
                <h4 className="text-center">Carts</h4>
            </div>
            {isLoading ? (
                <div>
                    <h4>Loading...</h4>
                </div>
            ) : (
                <div className="row">
                    {data.carts[0].products.map(cart => (
                        <div className="col-sm-6">
                            <div className="border shadow my-4 p-2">
                                <p>Title : {cart.title}</p>
                                <img src={cart.thumbnail} width={'100px'} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart;