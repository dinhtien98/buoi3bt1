import React, { useState } from "react";
import { ListGroupItem,Input } from "reactstrap";

export default function Student(props) {
  const { student, deleteById, reChecked, rename } = props;
  const [isEdit,setIsEdit]=useState(false)
  const [text,setText]=useState(student.name)
  return (
    <ListGroupItem
      className={student.checked ? "student-item active" : "student-item"}
      
    >
        <Input type="checkbox" checked={student.checked} onChange={()=>reChecked(student.id)}/>
      <div className={student.checked ? "student-name active" : "student-name"} onClick={() => reChecked(student.id)}>
        {
          !isEdit?<p onDoubleClick={()=>setIsEdit(true)}>{student.name}</p>:<Input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
            if(e.key=="Enter"){
              setIsEdit(false)
              rename(student.id,text)
            }
          }}/>
        }
      </div>
      <button onClick={() => deleteById(student.id)}>X</button>
    </ListGroupItem>
  );
}
