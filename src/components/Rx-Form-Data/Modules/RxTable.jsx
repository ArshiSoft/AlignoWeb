import React from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";




const  RxTable =() =>{

    const [rxdata,setRxData] = useState([]);

    const getRxData = async () => {
      try{
        const response = await axios.get('https://restcountries.com/v2/all');
        setRxData(response.data);
      } catch(error){
    console.log(error);
      }
    };
    
    

   


   
    
    
    const columns = [
      {
        name: "Country Name",
        selector : (row) => row.name,
      },
      {
        name: "Country Native Name",
        selector : (row) => row.nativeName,
      },
      {
        name: "Doctor Number",
        selector : (row) => row.capital,
      },
    //   {
    //     name: "Doctor Email",
    //     selector : (row) => row.doctoremail,
        
    //   },
    //   {
    //     name: "Patient Id",
    //     selector : (row) => row.patienid,
    //   },
      {
        name: "Patient Name",
        selector : row => <img width={50} height={50} src={row.flag}/>
        
      },
    //   {
    //     name: "Patient Number",
    //     selector : (row) => row.patientnumber,
        
    //   },
    
    ];
    useEffect(() => {
        getRxData();
      },[]);

    return <DataTable columns={columns} data={rxdata}  />;


};
export default RxTable;