import React from 'react'
import '../../css/Button2.css'

const STYLES = ['btns--primary', 'btns--outline']

const SIZES = ['btns--medium', 'btns--large']

export const Button2 = ({children, type, onClick, buttonStyle, buttonSize, }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
            <button className = {`btns ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type={type}>{children}</button>
    )

}