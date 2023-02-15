import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
<!--            <li class="list-group-item">-->
<!--                <div class="row">-->
<!--                    <span class="fw-bolder">Who to follow</span>-->
<!--                </div>-->
<!--            </li>-->
            ${posts.map(p => {
        return (`
                 ${PostSummaryItem(p)}
                    `);
    }).join('')
    }
            </ul>
    `);
}

$('#wd-postList').append(PostSummaryList());
export default PostSummaryList;

