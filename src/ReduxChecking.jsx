import React from 'react'
import { useState } from 'react'

const ReduxChecking = () => {

    const [txtareaHolder, settxtareaHolder] = useState("")

  return (
    <div>
        <textarea rows='5' value={txtareaHolder} />
    </div>
  )
}

export default ReduxChecking