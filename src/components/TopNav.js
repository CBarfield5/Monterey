import React from 'react'
import Clock from './clock'
import AppleLogoWhite from '../images/Apple_logo_white.png'

export const TopNav = () => {
    return (
        <div className='topNav'>
            <button className = 'appleLogo'></button>
            <Clock></Clock>
        </div>
    )
}
