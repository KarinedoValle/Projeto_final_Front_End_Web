import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/Button.css'

const STYLES = ['btns--primary', 'btns--outline']

const SIZES = ['btns--medium', 'btns--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to = "/login" className = "btns-mobile">
            <button className = {`btns ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type={type}>{children}</button>
        </Link>
    )

}