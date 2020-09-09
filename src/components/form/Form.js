import React,{useState} from 'react';
import CustomInput from "../../ui/CustomInput"
import FireButton from '../../ui/FireButton';





export default function Form(){
    const [todo,setTodo]=useState('')
    const [description,setDescription]=useState('')
const handleChangeInput=({target:{name, value}})=>{
    
}
const handleSubmitForm=(event)=>{
    event.preventDefault()
}
return(
    <form onSubmit ={handleSubmitForm}>
        <CustomInput name='todo' handleChange={handleChangeInput} value={}/>
        <CustomInput name='description' handleChange={handleChangeInput} value ={}/>
        <FireButton />
    </form>
)
}