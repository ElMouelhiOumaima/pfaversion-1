import React ,{useState,useEffect} from 'react'
import { Select } from '@material-ui/core';
import {Button,Card,CardHeader,CardBody,FormGroup,Form,Input,Modal,Label} from "reactstrap";
import axios from 'axios';

export default function Modele(props) {
    const [choixclient,setchoixclient]=useState("")
    const [choixemployee,setchoixemployee]=useState("")  
    const [client,setclient]=useState([])
    const [employee,setemployee]=useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/clientsEmplois")
        .then(resultat=>{
          setclient(resultat.data)
          console.log(resultat.data)
        })
        axios.get("http://localhost:3001/employeesaffectation")
        .then(resultat=>{
          setemployee(resultat.data)
         
        })
    }, [])
   function onClickAjouterSeance(){
        if (choixclient!=="" && choixemployee!==""){
            props.seance.client = client[choixclient]._id
            props.seance.nomclient = client[choixclient].name
            props.seance.employee = employee[choixemployee]._id
            props.seance.nomemployee = employee[choixemployee].nom
            axios.put("http://localhost:3001/clientEmploisFinale",props.seance)
            props.setModel(false)


        }
    }
    return (
        <div>
            <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={props.isOpen}
/* 
            toggle={() => { props.setModel(!props.isOpen) }} */
        >
            <div className="modal-body p-0 row align-self-center">
                <Card className=" shadow border-0 ">
                    <CardHeader className="bg-transparent pb-1 row align-self-center">
                        <h3>Ajouter une séance</h3>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-10">

                       

                            
                          <Select onChange={(e)=>setchoixclient(e.target.value)}  type ='select'>
    
                                            {client.map((element,index)=>(<option value={index}  key={index}>{element.name} </option>
                                            ))
                                            }
                                            </Select>
    <Select    onChange={(e)=>setchoixemployee(e.target.value)} type ='select'>

                        {employee.map((element,index)=>(<option value={index}  key={index}>{element.nom} </option>
                        ))
                        }
      </Select>

                            

                            <div className="text-center">
                                <button
                                    className="my-4"
                                    color="primary"
                                    type="button"
                                    onClick={onClickAjouterSeance}>
                                    Ajouter
                                </button>
                            </div>
                     
                    </CardBody>
                </Card>
            </div>

        </Modal>
        </div>
    )
}
