import { Table } from "react-bootstrap"
import Dashboard from "./Dashboard"
import { useEffect, useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit,faPlus,faTrash,faEye,faClose } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import ModalNew from "./ModalNew"
import { Modal } from "react-bootstrap"
import {toast} from "react-toastify";

const GridData = () =>{

    const toastError = (dynamicMsg) =>{

        toast.error(dynamicMsg, {
            position: 'top-right', // You can customize the position
            autoClose: 3000, // Time in milliseconds to close the toast automatically
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
    }

    const [ArrayState , setArrayState] = useState([])
    const [tbodyState , settbodyState] = useState([])

    const [dataObject , setdataObject] = useState({
        APIname : '',
        APIage : 0,
        APIstate : '',
        APIlanguages : '',
        APIgender : ''
    })

    const [clikedId , setclikedId] = useState(0)

    const [isShow, setisShow] = useState(false)

    const WhenHide = () =>{
        setisShow(false)
    }

    function changeShow(){
        setisShow(true)
    }

    async function getModalDatabyId(id){
        try {

            const instance = await axios.get('https://localhost:44307/api/DapperMethods/query-get-data',{
            params : {
                stateData : id
            }
            })

            setdataObject({
                APIname : instance.data.name,
                APIage : instance.data.age,
                APIstate : instance.data.state,
                APIlanguages : instance.data.languages,
                APIgender : instance.data.gender
            })

            changeShow()
            
        } catch (error) {
            toastError("Server Down!!")
        }
        
    }

    async function DelConfirm(ids){
        const delt = {
            id : parseInt(ids)
        }
        // //alert('sure to delete!')
        try {
            const result = await axios.post('https://localhost:44307/api/DapperMethods/delete-state-data',delt)
            if(result.data == 204){
                alert('User Deleted!!')
                await foreffect()
            }
        } catch (error) {
            toastError("Server Down!!")
        }
    }

    const navigate = useNavigate()

    async function foreffect(){
        try {
            const getarrystate  = await axios.get("https://localhost:44307/api/DapperMethods/get-state-data")
            setArrayState(getarrystate.data.states)

            if(getarrystate.data.states.length > 0){
                let tempDt = []
                let count = 0
                getarrystate.data.states.forEach(element => {
                    count++
                    tempDt.push(
                        <tr key={element.id}>
                        <td><FontAwesomeIcon className="pntr" onClick={() => getModalDatabyId(parseInt(element.id))} icon={faEye} /><FontAwesomeIcon onClick={() =>navigate(`/crud-sample?dataid=${element.id}`)} className="pntr mrRL" icon={faEdit} /><FontAwesomeIcon onClick={() => DelConfirm(element.id)} className="pntr" icon={faTrash} /></td>
                        <td>{count}</td>
                        <td>{element.name}</td>
                        <td>{element.age}</td>
                        <td>{element.gender}</td>
                        <td>{element.state}</td>
                        <td>{element.languages}</td>
                        </tr>
                    )
                });
                settbodyState(tempDt)
            // console.log(getarrystate.data.states)
            }
        } catch (error) {
            toastError("Server Down!!")
        }
        
        //return getarrystate.data.states
    }

    useEffect(() =>{
        foreffect()
        //console.log(ArrayState)
    }, [])

    return(
        <div>
            <Dashboard />
            <ModalNew tableGrid={foreffect} />

            <Modal show={isShow} onHide={WhenHide}>
                <Modal.Header className="d-flex justify-content-between">
                    <h5>User Details</h5>
                    <button onClick={WhenHide}><FontAwesomeIcon icon={faClose} /></button>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="d-flex justify-content-start">
                            <div><strong>Name :</strong></div>
                            <div><p className="margin-lft">{dataObject.APIname}</p></div>
                        </div>    
                        <div className="d-flex justify-content-start">
                            <div>
                                <strong>Age :</strong>
                            </div>
                            <div>
                                <p className="margin-lft">{dataObject.APIage}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div>
                                <strong>Gender :</strong>
                            </div>
                            <div>
                            <p className="margin-lft">{dataObject.APIgender}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div>
                                <strong>Languages known :</strong>
                            </div>
                            <div>
                                <p className="margin-lft">{dataObject.APIlanguages}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div>
                                <strong>State :</strong>
                            </div>
                            <div>
                                <p className="margin-lft">{dataObject.APIstate}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center align-items-center">
                    @copyrights Chatter
                </Modal.Footer>
            </Modal>

            <Table>
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>Languages</th>
                    </tr>
                </thead>
                <tbody>
                    {tbodyState}
                </tbody>
            </Table>
        </div>
    )
}

export default GridData