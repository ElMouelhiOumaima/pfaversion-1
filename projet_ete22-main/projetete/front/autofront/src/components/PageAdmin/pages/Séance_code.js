import React,{useEffect,useState,useCallback,useMemo} from 'react'; 
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {Scheduler,WeekView, Appointments,AppointmentForm,AppointmentTooltip,DragDropProvider} from '@devexpress/dx-react-scheduler-material-ui';

import axios from 'axios';
import Modele from './Modele';
import ModeleSupprimer from './Modelesupprimer'
const currentDate = '2018-06-27';

export default () => {
  
  const [open, setopen] = useState(false);
  const [openSupprimer, setopenSupprimer] = useState(false);
  const [seance, setseance] = useState([]);
  const [data, setData] = useState([]);
  const [addedAppointment, setAddedAppointment] = useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] = useState(false);
  useEffect(() => {
       axios.get('http://localhost:3001/emploisAdmin')
       .then(resulat=> setData(resulat.data))

  }, [])
 

  const onCommitChanges = useCallback(({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      
      setData([...data, { id: startingAddedId, ...added }]);
      setopen(true)
      const ajout = {title : added.title , startDate : added.startDate, endDate : added.endDate}
      setseance(ajout)
    }
    console.log(changed)
  /*   if (changed) {
      setData(data.map(appointment => (
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)));
    }
    console.log(deleted) */
   /*  if (deleted !== undefined) {
      
      setData(data.filter(appointment => appointment.id !== deleted));
    } */
    setIsAppointmentBeingCreated(false);
  }, [setData, setIsAppointmentBeingCreated, data]);
  const onAddedAppointmentChange = useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  });
  
 /*  const TimeTableCell = useCallback(React.memo(({ onDoubleClick, ...restProps }) => (
    <WeekView.TimeTableCell
      {...restProps}
      onDoubleClick={true ? onDoubleClick : undefined}
    />
  )), [true]); */
/* 
  const CommandButton = useCallback(({ id, ...restProps }) => {
    if (id === 'deleteButton') {
      return <AppointmentForm.CommandButton id={id} {...restProps} disabled={false} />;
    }
    
    return <AppointmentForm.CommandButton id={id} {...restProps} />;
  }, [true]); */

  
  return (
    <React.Fragment>
     
      <Paper>
        <Scheduler
          data={data}
          height={500}
        >
          <ViewState
            currentDate={currentDate}
          />
          <EditingState
            onCommitChanges={onCommitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={onAddedAppointmentChange}
            allowDeleting={true}
          />

          {/* <IntegratedEditing /> */}
          <WeekView
            startDayHour={9}
            endDayHour={19}
           /*  timeTableCellComponent={TimeTableCell} */
          />

          <Appointments />

         {/*  <AppointmentTooltip
            showOpenButton
            showDeleteButton={true}
          /> */}
          <AppointmentForm
           /*  commandButtonComponent={CommandButton}
            readOnly={isAppointmentBeingCreated ? false : false} */
          />
         
        </Scheduler>
      </Paper>
      <Modele isOpen={open} setModel={setopen} seance={seance}/>
      <ModeleSupprimer isOpen={openSupprimer} setModel={setopenSupprimer} data={data} setData={setData}/>
      <button onClick={()=>{setopenSupprimer(true)}}></button>
    </React.Fragment>
  );
};
