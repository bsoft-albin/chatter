import React from 'react'
import LabelControl from '../LabelControl'

const InputControls = ({customType = "text", customId = "", customName = "", formikRef, forCheckboxes, ...remainingProps}) => {

  const tmpStyles = {
    height : '3rem',
    'marginTop' : 0,
    'marginBottom' : '10px',
  }

    switch(customType.toLocaleLowerCase()){
        case "text":
            return(
                <div>
                  <input type='text' className='form-control ' style={tmpStyles} id={customId} onChange={formikRef.handleChange} name={customName} value={formikRef.values.customText} />
                </div>
            )
        case "email":
          return(
              <div>
                <input type='email' className='form-control' style={tmpStyles} id={customId} name={customName} onChange={formikRef.handleChange} />
              </div>
          )
        case "password":
            return(
                <div>
                  <input type='password' className='form-control' style={tmpStyles} id={customId} name={customName} onChange={formikRef.handleChange} />
                </div>
                )
        case "number":
            return(
                <div>
                  <input type='number' className='form-control' style={tmpStyles} id={customId} name={customName} onChange={formikRef.handleChange} />
                </div>
          )  
        case "checkbox":
          //console.log(remainingProps.remaining.count)
          let letStr = []
          for (let index = 0; index < remainingProps.remaining.count; index++) {
            letStr.push(
              <div key={index} className='d-flex'>
                <input type='checkbox' id={remainingProps.remaining.name+ "-" +index} name={remainingProps.remaining.name} onChange={formikRef.handleChange} checked={forCheckboxes.includes(remainingProps.remaining.labels[index])} value={remainingProps.remaining.labels[index]} />
                <LabelControl HtmlFor={remainingProps.remaining.name+ "-" +index} value={remainingProps.remaining.labels[index]} />
              </div>
            )
          }
            return(
              <div className='d-flex justify-content-center align-items-center'>
                <LabelControl value="Languages Known : " />
                {letStr}
              </div>
          )
        case "color":
            return(
                <div>
                  <input type='color' className='form-control' style={tmpStyles} id={customId} name={customName} onChange={formikRef.handleChange} />
                </div>
          ) 
        case "date":
            return(
                <div>
                  <input type='date' className='form-control' style={tmpStyles} id={customId} name={customName} onChange={formikRef.handleChange} />
                </div>
          ) 
        case "file":
            return(
                <div>
                  <input type='file' multiple className='form-control' style={tmpStyles} id={customId} name={customName} onChange={formikRef.handleChange} />
                </div>
          )
        default :
          return(
            <div>
              {console.error("Please Give Correct 'CustomType'!!")}
            </div>) 
    }

}

export default InputControls