import React from 'react'
import MobileFooter from '../../Components/MobileFooter/MobileFooter'

function Mobile({component}) {
    return (
        <div className="mobile">
            <div className="mobile__body min-h-screen">
                {component}
            </div>
            <div className="mobile__footer">
                <MobileFooter/>
            </div>
        </div>
    )
}

export default Mobile
