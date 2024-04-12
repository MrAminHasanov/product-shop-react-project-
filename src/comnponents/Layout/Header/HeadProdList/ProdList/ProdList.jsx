import React from 'react'
import c from "./ProdList.module.scss"

function ProdList({ listState }) {
    return (
        <ul
            className={c.component}
            style={!listState ? { height: 0 } : null}
        >
            <li>Fresh meat</li>
            <li>Vegetebales</li>
            <li>Fresh meat</li>
            <li>Vegetebales</li>
            <li>Fresh meat</li>
            <li>Vegetebales</li>
            <li>Fresh meat</li>
            <li>Vegetebales</li>
            <li>Fresh meat</li>
            <li>Vegetebales</li>
            <li>Fresh meat</li>
            <li>Vegetebales</li>
        </ul>
    )
}

export default ProdList