const PostItem = (post) => {
    return(`
       <div class="row mt-2 list-group-item">
            <!-- userImage -->
            <i class="col-1">
                <img src="${post.userImage}" class="rounded figure-img" alt="..." width="30px" height="30px">
            </i>
            
            <!-- content -->
            <i class="col-5">
                <a class="fs-6">${post.user}</a>
                <i class="fas fa-check-circle"></i>
                <i class="fs-6">${post.userName}</i>
                 - 
                <i class="fs-6">${post.time}</i>
                <div>${post.content}</div>
                
                <!-- picture -->
                <img src="${post.repostImage}" class="rounded figure-img" alt="..." width="300px" height="300px">
                <!-- repost -->
                <div>
                    <i class="fs-6">${post.repostTitle}</i>
                    <h6 class="fs-6">${post.repostContent}</div>
                <!-- icons -->
                <div class="wd-pos-icons wd-p-max-width">
                    <i class='far fa-comment bs-primary me-3' style='font-size:24px'>${post.comment}</i>
                    <i class='fas fa-external-link-alt bs-primary me-3' style='font-size:24px'>${post.repost}</i>
                    <i class='fas fa-heart red-color bs-primary me-3' style='font-size:24px'>${post.like}</i>
                    <i class='fas fa-upload bs-primary' style='font-size:24px'></i>
                </div>
            </i>
        </div>
     `);
}

export default PostItem;