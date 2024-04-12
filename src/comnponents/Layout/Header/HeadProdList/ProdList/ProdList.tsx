import React from 'react'
import c from "./ProdList.module.scss"

function ProdList({ listState }: { listState: boolean }) {
    return (
        <ul
            className={c.component}
            style={{ maxHeight: !listState ? 0 : "none" }}
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
        </ul >
    )
}

export default ProdList