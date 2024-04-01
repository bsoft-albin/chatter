import axios from "axios"
import { useEffect, useState } from "react"

const AddForm = ({customClose,toFormgrid}) =>{

    function customSubmit(){

        customClose();
    }
    // component states

    const [name, setName] = useState('')
    const [age, setage] = useState(0)
    const [state, setstate] = useState('')
    const [languages, setlanguages] = useState([])
    const [Strlang, setStrlang] = useState('')
    const [gender, setGender] = useState('')

  // Use states for each and every variables, Don't use normal JS varibles in React, because react doesn't consider that variables

    const evtName = (e) =>{
        setName(e.target.value)
    }

    const evtAge = (e) =>{
        setage(e.target.value)
    }

    const evtState = (e) =>{
        setstate(e.target.value)
    }

    const evtlang = (e) =>{
        const instdata = languages.indexOf(e.target.value)
        
        if(instdata == -1){
            //const logit = [...languages, e.target.value]
            setlanguages([...languages, e.target.value])
            //templang.push(e.target.value)
        }
        if(instdata >= 0){
            setlanguages(languages.filter(lang => lang !== e.target.value))
           // templang.splice(instdata, 1)
        }
    }

    const evtGender = (e) =>{
        setGender(e.target.value)
    }

    const submitFunction = (e) =>{
        e.preventDefault();
        //setlanguages(templang)
        parser()
        
    }

    async function parser(){

        if(languages.length > 0) {
            const nstr = languages.join(',')
            debugger
            const obj = {
                id : 0,
                state : state,
                languages : nstr,
                gender : gender,
                age : age,
                name : name
            }
            //console.log(name,age,languages,state,gender)
            const resObj = await axios.post("https://localhost:44307/api/DapperMethods/post-state-data", obj)
            if(resObj.data > 0) {
                customClose()
                toFormgrid()
            }
            
        }
        
    }

    // useEffect(() => {
    //    // const ndata = parser()
    //    //console.log('no dependency')

    // }, [languages])

    return(

        <div>
            <form onSubmit={submitFunction}>
                <div className="form-group">
                    <label htmlFor='gridName'>Name : </label>
                    <input className='form-control' id='gridName' value = {name} onChange={evtName} name='gridName' type="text" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor='gridAge'>Age : </label>
                    <input className='form-control' onChange = {evtAge} id='gridAge' name='gridAge' value={age} type="text" placeholder="Age" />
                </div>
                <div className="form-group">
                    <label >Gender :</label>
                    <input className='' value='male' onChange={evtGender} name='gridGender' type="radio" />
                    <label>Male</label>
                    <input className='' value='female' onChange={evtGender} name='gridGender' type="radio" />
                    <label>Female</label>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Languages Known : </label>

                            <label>
                            <input type="checkbox" name="gridLanguages" onChange={evtlang} value="english" />
                            English
                            </label>
                            <label>
                            <input type="checkbox" name="gridLanguages" onChange={evtlang} value="french" />
                            French
                            </label>
                            <label>
                            <input type="checkbox" name="gridLanguages" onChange={evtlang} value="spanish" />
                            Spanish
                            </label>
                </div>
                <div className="d-flex">
                    <div>
                        <label htmlFor='gridState'>State : </label>
                    </div>
                    <div>
                        <select className='form-control' onChange={evtState} id='gridState' value={state} name='gridState'>
                            <option value="" disabled label="Select State" />
                            <option value="tamilnadu" label="Tamil Nadu" />
                            <option value="kerala" label="Kerala" />
                            <option value="karnataka" label="Karnataka" />
                        </select>
                    </div>
                </div>
        
                <div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <button className="btn btn-secondary" type="button" onClick={customClose}>
                    Close
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddForm