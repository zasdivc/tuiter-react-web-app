const PostSummaryItem = (post) => {
    return(`
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <h6 class="mb-1 text-muted" style="font-size: 12px">${post.topic}</h6>
            <div class="d-flex w-100">
                <h6 class="mb-1" style="font-size: 10px">${post.userName} </h6>
                <i class="fas fa-check-circle"></i>
                <small style="font-size: 10px"> -${post.time}</small>
                <img src="${post.image}" class="position-absolute end-0" alt="..." width="30px" height="30px">
            </div>
            <small style="font-size: 10px">${post.title}</small>
        </a>
     `);
}

export default PostSummaryItem;