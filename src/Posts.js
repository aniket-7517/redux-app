import { useSelector } from "react-redux";
import PostsSlice, { fetchAllPosts } from "./Slices/Posts.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Posts() {

    const {isLoading, data, error} = useSelector((state) => state.posts);
    console.log(isLoading, data, error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPosts());
    },[]);

    return (
        <div className="container">
            <div className="row">
                <h3>Posts</h3>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="row">
                        {data.posts?.map((post, index) => (
                            <div key={index} className="col-sm-6">
                                <div className="shadow mb-4 p-4">
                                    <p>Title : {post.title}</p>
                                    <p>Body : {post.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Posts;