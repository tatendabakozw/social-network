import React from 'react'

function ErrorMessage({error}) {
    return (
        <div className="w-full bg-red-600 text-white h-8 mb-2">
            <p>{error}</p>
        </div>
    )
}

export default ErrorMessage
