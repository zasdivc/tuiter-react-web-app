import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js"
import PostList from "../PostList/PostList.js"

function exploreComponent() {
    return (`
      <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        <!--<h3>Navigation Sidebar</h3>-->
        ${NavigationSidebar('home')}
       </div>
       <div class="col-10 col-lg-7 col-xl-6">
    <!--    <h3>ExploreComponent</h3>-->
        ${PostList()}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        ${WhoToFollowList()}
       </div>
      </div>
    `);
}
$('#wd-homeScreen').append(exploreComponent());

$(exploreComponent);

