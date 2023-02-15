const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src="../../images/${who.avatarIcon}" width="50px" class="rounded-circle">
                </div>
                <div class="col">
                    <a class="mb-1 position-relative" style="font-size: 10px">"${who.userName}"</a>
                    <i class="fas fa-check-circle position-relative"></i>
                    <div class="mb-1" style="font-size: 10px">@"${who.handle}" </div>
                </div>
    
                <div class="col-3">
                    <p class="rounded-pill d-flex justify-content-center" style="color:white; background:black">
                        Follow
                    </p>
                </div>
            </div>
        </li>
     `);
}

export default WhoToFollowListItem;