import React from "react";
import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json";

function PostSummaryList() {
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>PostSummaryList</h3>
            </li>
            {
                posts.map(post =>
                    <PostSummaryItem
                        post={post}/>
                )
            }
        </ul>
    );
}

export default PostSummaryList;