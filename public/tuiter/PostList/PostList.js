import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
    return (`
        <ul class="list-group">
            ${posts.map(p => {
        return (`
                 ${PostItem(p)}
                    `);
    }).join('')
    }
            </ul>
    `);
}

$('#wd-post').append(PostList());
export default PostList;