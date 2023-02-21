import React from "react";
import HomeItem from "./HomeItem";
import posts from "./posts"

function HomeComponent ()  {
    return (
        <ul class="list-group">
            {
                posts.map(post =>
                    <HomeItem
                        post={post}/>
                )
            }
        </ul>
    );
}

export default HomeComponent;