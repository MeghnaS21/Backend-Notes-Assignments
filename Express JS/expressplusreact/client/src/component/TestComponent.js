import React, { useEffect } from 'react'
import { useState } from 'react'

const TestComponent = () => {
    const [output, setOutput]= useState('');
    useEffect(()=>{
       fetch("/home").then(
        response => response.json()
       ).then(
        data=>{
            console.log(data);
        setOutput(data)})
        
    }, []);

    

  return (
    <>
    <div>
        {/* (output.contacts.fname) */}
        {/* (output.con) */}
        {(typeof output.users === 'undefined')? (
            <p>Loading...</p>
        ):(output.users.map((contact, i)=>(
            <>
           <h2>{contact}</h2>
            
            </>
        )))}
        
        {/* <h1>Test Client App using React and Backend using Express!</h1>
        <button onClick={GenerateTestData}>Generate test data</button> */}
    </div>
    </>
  )
}

export default TestComponent