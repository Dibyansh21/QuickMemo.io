import React from "react"
import "./showkeeper.css"
import axios from "axios"

const ShowKeeper = ({ keeperlist, setKeeperlist }) => {

    const deleteKeeper = (id) => {
        axios.post('http://localhost:3001/api/delete', { id })
        .then(res => setKeeperlist(res.data))
    }
    return (
        <div className="showKeeper row">
            {
                keeperlist.map(keeper => (
                    <div className="keepercard col-md-3" key={keeper._id}>
                        <h1 className="title">{keeper.title}<i className="deleteIcon fa fa-minus-square" aria-hidden="true" onClick={() => deleteKeeper(keeper._id)}></i></h1>
                        <textarea className="descriptionBox" value={keeper.description} readOnly> </textarea>
                    </div>
                ))
            }
        </div>
    )
}

export default ShowKeeper;