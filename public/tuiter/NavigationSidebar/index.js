// import $ from "../../vendors/jquery/jquery-3.6.0.min"

const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <ul class="list-group">
<!--            <li class="list-group-item">-->
<!--                <i class="fab fa-twitter" style="color:cornflowerblue"></i>-->
<!--            </li>-->
            <li class="list-group-item ${active == 'home' ? 'active' : ''}">
                <a href="../HomeScreen/index.html">
                    <i class="fas fa-home" style="float: left"></i>
                    <i class="d-none d-lg-block "  style="float: left; margin-left: 10px">Home</i>
                </a>
            </li>
            
            <li class="list-group-item ${active == 'explore' ? 'active' : ''}">
                <a href="../explore/index.html">
                    <i class="fas fa-hashtag " style="float: left"></i>
                    <i class="d-none d-lg-block"  style="float: left; margin-left: 10px; font-weight: bold">Explore</i>
                </a>
            </li>
            <li class="list-group-item ${active == 'notifications' ? 'active' : ''}">
                <i class="fas fa-bell" style="float: left"></i>
                <i class="d-none d-lg-block"  style="float: left; margin-left: 10px">Notifications</i>
            </li>
            <li class="list-group-item ${active == 'messages' ? 'active' : ''}">
                <i class="fas fa-envelope" style="float: left"></i>
                <i class="d-none d-lg-block"  style="float: left; margin-left: 10px">Messages</i>
            </li>
            <li class="list-group-item ${active == 'bookmarks' ? 'active' : ''}">
                <i class="fas fa-bookmark" style="float: left"></i>
                <i class="d-none d-lg-block"  style="float: left; margin-left: 10px">Bookmarks</i>
            </li>
            <li class="list-group-item ${active == 'lists' ? 'active' : ''}">
                <i class="fas fa-list-ul" style="float: left"></i>
                <i class="d-none d-lg-block"  style="float: left; margin-left: 10px">Lists</i>
            </li>
            <li class="list-group-item ${active == 'profile' ? 'active' : ''}">
                <i class="fas fa-user" style="float: left"></i>
                <i class="d-none d-lg-block"  style="float: left; margin-left: 10px">Profile</i>
            </li>
            <li class="list-group-item ${active == 'more' ? 'active' : ''}">
                <i class="fas fa-comment-dots" style="float: left"></i>
                <i class="d-none d-lg-block"  style="float: left; margin-left: 10px">More</i>
            </li>
<!--            <li class="list-group-item rounded-pill d-flex justify-content-center bg-info">-->
<!--                Tweet-->
<!--            </li>-->
        </ul>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

$('#wd-navigation').append(NavigationSidebar());
export default NavigationSidebar;