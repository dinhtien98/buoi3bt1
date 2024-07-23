import React,{useState} from 'react'

export default function Hook1() {
    const [student,setStudent]=useState({name:"",age:0})
  return (
    <div>
        <h1>Họ tên: {student.name}</h1>
        <h1>Tuổi: {student.age}</h1>
        <form>
            <input type='text' placeholder='nhập vào họ tên' value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})}/><br/>
            <input type='number' placeholder='nhập vào tuổi' value={student.age} onChange={(e)=>setStudent({...student,age:e.target.value})}/><br/>
        </form>
    </div>
  )
}
