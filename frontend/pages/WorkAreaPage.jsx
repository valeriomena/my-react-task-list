import React from 'react';
import FormTaks from '../componets/FormTask';
import Tasklist from '../componets/TaskList';


function WorkAreaPage() {
  return (
    <div className="container">
      <div className='formtask'>
          <FormTaks />
      </div>       
      <div className='listTask'>
        <div><Tasklist /></div>
        
      </div>
    </div>
  );
}
export default WorkAreaPage;