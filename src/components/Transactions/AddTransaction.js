import React, {useState} from 'react'
import  {Button, Input, Label}  from 'semantic-ui-react';

function AddTransaction(props) {
        const [btnName, setbtnName] = useState("Add Expense");
        const [btnColor, setbtnColor] = useState("red")
        const [name, setName] = useState();
        const [amount, setAmount] = useState();
        const [date, setDate] = useState();
        const [tag, setTag] = useState();
        const [note, setNote] = useState();
        // const [type, setType] = useState();
        const handleTrans = ()=>{
                const id1 = document.getElementById("btn1");
                const id2 = document.getElementById("btn2");
                setbtnColor("red")
                setbtnName("Add Expense")
                id1.classList.add("active")
                id2.classList.remove("active")
        }
       const handleTrans2 = ()=>{
        const id1 = document.getElementById("btn1");
        const id2 = document.getElementById("btn2");
        setbtnColor("green")
        setbtnName("Add Income")
        id1.classList.remove("active")
        id2.classList.add("active")
       }

       const handleFormSubmission = async (e)=>{
               e.preventDefault();
               let tmp = {name:name, amount:amount, tag:tag, date:date, note:note,type:'',id: new Date().getTime()}
               
                if(btnName ==="Add Income"){
                        tmp.type = "Income"
                        // props.data.push(tmp);
                }
                else{
                        tmp.type = "Expense"
                        // props.data.push(tmp);
                }
                        const response = await fetch("http://localhost:5000/addTransaction", {
        method: "POST",
        headers: {
                "Content-Type": "application/json",
                "auth-token" : sessionStorage.getItem("token")
        },
        body: JSON.stringify(tmp),
        });
        const json = await response.json();
        console.log(json);
        props.fetch();
                console.log(props.data)
                // localStorage.setItem(0,JSON.stringify(props.data))
                setName("");
                setAmount("");
                setTag("");
                setDate("")
                setNote("")
                props.forceUpdate();
       }
  return (
    <>
        <div className='section' >
                        
                        <div className='section__body'>
                                <div className='ui top attached two item menu'>
                                        {/* eslint-disable-next-line */}
                                        <a className='red active item' id ="btn1" onClick={handleTrans}>Expense</a>
                                        {/* eslint-disable-next-line */}
                                        <a className='green item' id="btn2" onClick={handleTrans2}>Income</a>
                                </div>

                                <div className='ui bottom attached segment'>
                                        <form className='ui form transaction-form' onSubmit={handleFormSubmission}>
                                                {/* For taking input required and amount */}
                                                <div className='fields'>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                        <div><Label size="large">Enter Name </Label></div>
                                                                <Input value={name} onChange={(e)=>{
                                                                        setName(e.target.value);
                                                                }} required type="text"></Input>
                                                        </div>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                        <div><Label size="large">Enter Amount</Label></div>
                                                                <div className='ui right labeled input'>
                                                                        
                                                                        <Input value={amount} onChange={(e)=>{
                                                                        setAmount(e.target.value);
                                                                }} required type="number" min ="0" style={{maxWidth:"70%"}}></Input>
                                                                        <div className='ui label label'>INR</div>
                                                                </div>
                                                        </div>
                                                </div>
                                                {/* For getting Tag and amount date */}

                                                <div className='fields'>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                                <div><Label size="large">Add Tag</Label></div>
                                                                <Input value={tag} onChange={(e)=>{
                                                                        setTag(e.target.value);
                                                                }} required type="text"></Input>
                                                                
                                                        </div>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                        <div><Label size="large">Pick Transaction date</Label></div>
                                                
                                                                <div className='ui right labeled input'>
                                                                        <Input value={date} onChange={(e)=>{
                                                                        setDate(e.target.value);
                                                                }} required type="date"></Input>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className='fields'>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                                {/* <div><Label size="large">Brief/Notes</Label></div> */}
                                                                <Input value={note} onChange={(e)=>{
                                                                        setNote(e.target.value);
                                                                }} type="text" placeholder="Add notes"></Input>
                                                                
                                                        </div>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                        {/* <div><Label size="large">Pick Transaction date</Label></div> */}
                                                
                                                                <div className='ui right labeled input'>
                                                                        {/* <Input required type="date"></Input> */}
                                                                        <Button color={btnColor} onClick={()=>{props.setShow(false);props.forceUpdate();}}>{btnName}</Button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </form>
                                </div>
                        </div>

                </div>
              <br></br>
    </>
  )
}

export default AddTransaction