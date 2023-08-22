import React, {useState} from "react";
import axios from "axios";
import TableInfo from "./TableInfo";
import './App.css'

export default function App(){
    const [tableData, setTableData] = useState({})
    const [groupName, setGroupName] = useState({})
    const btnHandler = (e) =>{
        setGroupName(e?.target?.id)
    }
    const getData = () => {
        axios(`http://localhost:3001/schedule?q=${groupName}`)
            .then(({data})=> setTableData({...tableData, ...data}))
    }
    const getGroup = (e) => {
            getData(e)
            btnHandler(e)

    }
    return(
        <div className='container'>
            <div className="btnTab">
                <button type='button' onClick={getData}>get data</button>
            </div>
            <TableInfo tableData={tableData}/>
        </div>
    )
}


