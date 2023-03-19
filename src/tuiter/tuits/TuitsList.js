import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

function TuitsList ()  {
    const tuits = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem
                        tuit={tuit} key={tuit._id}/>
                )
            }
        </ul>
    );
}

export default TuitsList;