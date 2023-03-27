import React from "react";
import TuitStats from "./TuitStats"
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="row mt-2 list-group-item">
            <div className="col-1">
                <img src={`../images/${tuit.image}`} className="rounded figure-img" alt="..." width="30px" height="30px" />
            </div>
            <div className="col-10">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>
                <a className="fs-6">{tuit.topic}</a>
                <i className="fas fa-check-circle"></i>
                <i className="fs-6">{tuit.userName}</i>
                -
                <i className="fs-6">{tuit.time}</i>
                <div>{tuit.tuit}</div>

                <TuitStats tuit={tuit} />
            </div>


        </li>

    );
}

export default TuitItem;