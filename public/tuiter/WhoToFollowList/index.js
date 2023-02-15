import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    // let lineItems = who.map(function (w){
    //     return '${WhoToFollowListItem(w)}'
    // })
    // return (`
    //        <ul class="list-group">
    //        ${lineItems}
    //        </ul>
    // `);
    return (`
        <ul class="list-group">
            <li class="list-group-item">
                <div class="row">
                    <span class="fw-bolder">Who to follow</span>
                </div>
            </li>
            ${who.map(w => {
        return (`
                 ${WhoToFollowListItem(w)}
                    `);
        }).join('')
        }
            </ul>
    `);
}

$('#wd-whoList').append(WhoToFollowList());
export default WhoToFollowList;

