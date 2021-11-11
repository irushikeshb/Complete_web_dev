import React, { useState } from 'react'

function HookRules() {
    const [myName, setMyName] = useState('Rushikesh Bhawar')
    return (
        <div>
            <h1>{ myName }</h1>
        </div>
    )
}

export default HookRules
