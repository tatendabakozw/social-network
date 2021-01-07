import React from 'react'

function SuccessMessage({success}) {
    return (
        <div className="w-full bg-green-600 text-white h-8 mb-2">
            <p>{success}</p>
        </div>
    )
}

export default SuccessMessage
