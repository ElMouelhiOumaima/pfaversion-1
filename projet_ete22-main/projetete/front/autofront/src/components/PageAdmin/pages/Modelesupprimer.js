import React ,{useState,useEffect} from 'react'
import { Select } from '@material-ui/core';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Modal,
    Label
} from "reactstrap";
import axios from 'axios';

export default function ModeleSupprimer(props) {
    
    const [seance,setseance]= useState("")
   function onClickAjouterSeance(){
        {
            const data = {title: props.data[seance].title,startDate:new Date(props.data[seance].startDate),endDate:new Date(props.data[seance].endDate)}
             
            axios.put("http://localhost:3001/deleteappointement",{data:data})
            props.setModel(false)
            props.setData(props.data.filter(item => item.startDate!== props.data[seance].startDate && item.endDate!== props.data[seance].endDate && item.title!== props.data[seance].title))
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

                       

                            
                          <Select  onChange={(e)=>{setseance(e.target.value)}} type ='select'>
    
                                            {props.data.map((element,index)=>(<option value={index}  key={index}>{element.title + element.startDate +  element.endDate} </option>
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
