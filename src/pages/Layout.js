import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function Layout(props) {
  const {tab} = props
  const [content, setContent] = useState('')
  useEffect(()=>{
    switch(tab) {
      case 'home':
        setContent(()=>{
          return(
            <h1 className="text-center align-self-center w-100">Welcome To CRUD System</h1>
          )
        })
        break
      
      case 'products':
        setContent(()=>{
          return(
            <div className="tab-content w-75 my-5">
                <h1 className="text-center align-self-center w-100 mb-4">Products</h1>
                <Outlet />
            </div>
          )
        })
        break
    } 
  }, [tab])
  return (
    <div className="d-flex align-items-start">
      <Sidebar />
      
      {content}
    </div>
  )
}
