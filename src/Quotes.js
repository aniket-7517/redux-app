import { useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllQuotes } from "./Slices/Quotes.slice";
import { useDispatch } from "react-redux";

function Quotes() {

    const {isLoading, data, error} = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllQuotes());
    },[]);

    return (
        <div className="container">
            <div className="row">
                <h3 className="text-center">Quotes</h3>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="row">
                        {data.quotes?.map(quote => (
                            <div className="col-sm-6">
                                <div className="border shadow p-2 mb-4">
                                    <p>No : {quote.id}</p>
                                    <p>Quote : {quote.quote}</p>
                                    <p>Author : {quote.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Quotes;