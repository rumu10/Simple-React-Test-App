import React from 'react'
import './card.css'

export const Card = props =>
    (
        <div className="card-container">
            <img alt="img"
                 src={`https://robohash.org/${props.nm.id}?set=set2&size=150x150`}/>
            <h4><b>{props.nm.name}</b></h4>
            <h6><b>{props.nm.email}</b></h6>
        </div>
    )