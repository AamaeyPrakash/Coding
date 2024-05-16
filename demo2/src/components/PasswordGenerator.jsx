import React, { PureComponent, useState } from 'react'

function PasswordGenerator() {
    const [length,setLength] = useState(8);
    const [includeNums,setNums] = useState(false);
    const [includeChars,setIncludeChars] = useState(false);
    const[includeUppercase,setIncludeUppercase] = useState(false);
    const[password,setPassword] = useState('');

    const generatePassword = () =>{
        let characters = "abcdefghijklmnopqrstuvwxyz"
        if(includeNums){
            characters+="0123456789"
        }
        if(includeChars){
            characters+="!@#$%^&*()_+=-[]|;'\,./~`<>"
        }
        if(includeUppercase){
            characters +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        let newPassword = "";
        for(let i=1; i<length;i++){
            newPassword +=characters.charAt(Math.floor(Math.random() * characters.length))
        }
        setPassword(newPassword);
        console.log(newPassword);
    };
    return(
        <div>
            <div className='align-middle'>Password Length:   {length} <input className="px-1 align-middle" type="range" min="6" max="24" value={length} onChange={(l)=>setLength(parseInt(l.target.value))} />
            </div>
            <div className="flex justify-center m-4"> 
                <div className='p-6'> 
                    <input type="checkBox" onChange = {()=>setNums(!includeNums)}/> Include Numbers
                </div>
                <div className='p-6'>
                    <input type="checkBox" onChange = {()=>setIncludeChars(!includeChars)}/> Include Special Characters
                </div>
                <div className='p-6'>
                    <input type="checkBox" onChange={()=>setIncludeUppercase(!includeUppercase)}/> Include Uppercase Letters
                </div>
            </div>
            <div className=''>
                <button className="bg-blue-300 px-12 py-2 rounded-3xl" onClick={generatePassword}>Generate</button> 
            </div>
        </div>
    )

}

export default PasswordGenerator