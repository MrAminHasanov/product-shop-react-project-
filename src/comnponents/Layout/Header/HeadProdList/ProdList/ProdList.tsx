import React from 'react'
import c from "./ProdList.module.scss"
import DropDown from '@/comnponents/GlobalComnponets/DropDown/DropDown'

function ProdList({ listState }: { listState: boolean }) {
    return (
        <DropDown dropDownAnimationState={listState}>
            <ul className={c.component}>
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
        </DropDown>
    )
}

export default ProdList