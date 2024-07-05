import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "./Slices/Products.slice";
import { useEffect } from "react";

function Products() {

    const {isLoading, data, error} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
    },[])

    return (
        <div className="container mt-4">
            <div className="row">
                <h3 className="text-center">Product List</h3>
                {isLoading ? (
                    <h4>Loading...</h4>
                ) : (
                    <div className="row">
                        {data.products?.map(product => (
                            <div className="col-sm-4 mt-4">
                                <div className="shadow mb-4 p-2">
                                    <p>Name : {product.title}</p>
                                    <p>Price : {product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products;