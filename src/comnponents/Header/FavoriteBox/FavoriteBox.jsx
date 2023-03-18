import React, { useEffect } from 'react'
import c from "./FavoriteBox.module.scss"

function FavoriteBox({ product, lineColor }) {
    return (
        <div style={{background:lineColor}} className={c.FavoriteBox}>
            <div>
                <div>
                    {product.name}
                    {` ${product.price}$`}
                </div>
                <img src={product.img} />
            </div>
        </div>
    )
}

export default FavoriteBox