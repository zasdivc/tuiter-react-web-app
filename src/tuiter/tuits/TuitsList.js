import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

function TuitsList ()  {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <ul className="list-group">
            <div className="list-group-item">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            </div>
            <div className="list-group-item">>
            {
                tuits.map(tuit =>
                    <TuitItem
                        tuit={tuit} key={tuit._id}/>
                )
            }
            </div>
        </ul>
    );
}

export default TuitsList;