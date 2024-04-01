import React from 'react'

const LabelControl = ({HtmlFor="", value}) => {
  return (
    <div>
        <label htmlFor={HtmlFor}>
             <strong>{value}</strong>
        </label>
    </div>
  )
}

export default LabelControl