import React from 'react'

const ErrorContainer = ({tmpTouched, tmpErrors}) => {
  return (
    <div style={{ color: 'red' }}>
        {tmpTouched && tmpErrors}
    </div>
  )
}

export default ErrorContainer