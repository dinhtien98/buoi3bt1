import React,{useState} from 'react'
import { Input } from "reactstrap";

export default function Add(props) {
    const {addNewStudent,setFlag,checkAll}=props
    const [text,setText]=useState("")
  return (
    <div>
        <Input className='my-2 px-4 inputName' placeholder='nhập vào họ tên sinh viên' value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={
            (e)=>{
                if(e.key=="Enter"){
                    addNewStudent(text)
                    setText("")
                }
            }
        }/>
        <div className='checkAll'>
            <Input type='checkbox' checked={checkAll} onChange={()=>setFlag("checkAll")}/>
            <p className='mx-2'>tích hết tất cả</p>
        </div>
    </div>
  )
}
