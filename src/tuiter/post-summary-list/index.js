import React from "react";
import PostSummaryItem from "./post-summary-item";
// import posts from "./posts.json";
import {useSelector} from "react-redux";

function PostSummaryList() {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>PostSummaryList</h3>
            </li>
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        post={post}/>
                )
            }
        </ul>
    );
}

export default PostSummaryList;