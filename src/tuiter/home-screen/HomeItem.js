import React from "react";

const HomeItem = ({
                      post = {
                          user: 'Elon Musk',
                          userName: 'elonmusk',
                          content: 'Amazing show',
                          time: '23h',
                          userImage: '/images/elon.png',
                          comment: '4.2k',
                          repost: '3.5k',
                          like: '37.5k',
                          repostImage: '/images/astro.png',
                          repostTitle: 'Countdown',
                          repostContent: 'From training to',
                      }
                  }) => {
    return (
        <li className="row mt-2 list-group-item">
            <div className="col-1">
                <img src={post.userImage} className="rounded figure-img" alt="..." width="30px" height="30px" />
            </div>
            <div className="col-5">
                <a className="fs-6">{post.user}</a>
                <i className="fas fa-check-circle"></i>
                <i className="fs-6">{post.userName}</i>
                -
                <i className="fs-6">{post.time}</i>
                <div>{post.content}</div>

                <img src={post.repostImage} className="rounded figure-img" alt="..." width="300px" height="300px" />

                <div>
                    <i className="fs-6">{post.repostTitle}</i>
                    <h6 className="fs-6">{post.repostContent}</h6>
                </div>

                <div className="wd-pos-icons wd-p-max-width">
                    <i className="far fa-comment bs-primary me-3" style={{ fontSize: '24px' }}>{post.comment}</i>
                    <i className="fas fa-external-link-alt bs-primary me-3" style={{ fontSize: '24px' }}>{post.repost}</i>
                    <i className="fas fa-heart red-color bs-primary me-3" style={{ fontSize: '24px' }}>{post.like}</i>
                    <i className="fas fa-upload bs-primary" style={{ fontSize: '24px' }}></i>
                </div>
            </div>
        </li>
    );
}

export default HomeItem;