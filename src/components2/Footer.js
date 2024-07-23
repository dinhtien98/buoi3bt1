import React from 'react'
import { Button } from 'reactstrap'

export default function Footer(props) {
  const {setFlag}=props
  return (
    <div>
      <Button className='p-2 mx-2' color="danger" onClick={()=>setFlag("nocheck")}>hiển thị học sinh chưa tích</Button>
      <Button className='p-2 mx-2' color="danger" onClick={()=>setFlag("check")}>hiển thị học sinh đã tích</Button>
      <Button className='p-2 mx-2' color="danger" onClick={()=>setFlag("deleteAll")}>Xóa các học sinh đã tich</Button>
      <Button className='p-2 mx-2' color="danger" onClick={()=>setFlag("")}>clear</Button>
    </div>
  )
}
