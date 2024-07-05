import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, reset} from "./Slices/Counter.slice";

function Counter() {

    const counter = useSelector((state) => state.counters)
    const dispatch = useDispatch();

    return (
        <div className="container text-center mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6">
                    <h3>Value : {counter.value}</h3>
                    <button className="btn btn-warning me-2" onClick={() => dispatch(increment())}>Increment</button>
                    <button className="btn btn-success me-2" onClick={() => dispatch(decrement())}>Decrement</button>
                    <button className="btn btn-danger" onClick={() => dispatch(reset())}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;