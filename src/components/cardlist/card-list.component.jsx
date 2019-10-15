import React from 'react'
import './card-list.css'
import {Card} from '../card/card.component'

export const CardList = props => (

    <div className="card_list">
        {
            props.names.map(nm => (
                <Card key={nm.id}  nm={nm}></Card>
            ))
        }
    </div>

);