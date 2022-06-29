import React, {useState} from 'react'
import  {Button, Input, Label}  from 'semantic-ui-react';

function EditTransaction(props) {
        const [btnName, setbtnName] = useState("Update Expense");
        const [name, setName] = useState(props.tempData.name);
        const [amount, setAmount] = useState(props.tempData.amount);
        const [date, setDate] = useState(props.tempData.date);
        const [tag, setTag] = useState(props.tempData.tag);
        const [note, setNote] = useState(props.tempData.note);
        const [type, setType] = useState(props.tempData.type);
        // const [btnColor, setbtnColor] = useState("negative")
        const handleExpense = ()=>{
                const id1 = document.getElementById("ubtn1");
                const id2 = document.getElementById("ubtn2");
                setbtnName("Update Expense")
                setType("Expense")
                id1.classList.add("active")
                id2.classList.remove("active")
        }
       const handleIncome = ()=>{
        const id1 = document.getElementById("ubtn1");
        const id2 = document.getElementById("ubtn2");
        // setbtnColor("positive")
        setType("Income")
        setbtnName("Update Income")
        id1.classList.remove("active")
        id2.classList.add("active")
       }

       const handleFormSubmission = async (e)=>{
               e.preventDefault();
        //        console.log(props.mainData)
        //        console.log(props.tempData);
                props.tempData.name = name;
                props.tempData.amount = amount;
                props.tempData.tag = tag;
                props.tempData.note = note;
                props.tempData.date = date;
                props.tempData.type = type;
        //        console.log(props.tempData);
        //        console.log(props.eid);
        //        let tid = props.eid;
               const response = await fetch(`http://localhost:5000/update/${props.eid}`, {
                        method: "PUT",
                        headers: {
                                "Content-Type": "application/json",
                                "auth-token": sessionStorage.getItem("token")
                        },
                        body: JSON.stringify(props.tempData),
                        });
                        const json = await response.json();
               console.log(json);
               props.fetch();
        //        let data = [];
        //        data = JSON.parse(localStorage.getItem(0));
        //        console.log(data);
        //        props.mainData.map(item => {
        //         //        console.log(tid);
        //                console.log(item.id);
        //                if(item.id == tid){
        //                         item.name = name;
        //                         item.amount = amount;
        //                         item.tag = tag;
        //                         item.note = note;
        //                         item.date = date;
        //                         item.type = type;
        //                         console.log(item)
        //                }
        //         });
        //         console.log(props.mainData)
        //        console.log(item);
        //        for(let i = 0;i<data.length;i++){
        //                console.log(data[i]);
        //                console.log(data[i].id);
        //                if(data[i].id === props.eid){
        //                        console.log("entered")
        //                        data[i].name = name;
        //                 }
        //         }
                // localStorage.setItem(0,JSON.stringify(props.mainData));
                // props.forceUpdate();
                props.setShow(false);
       }
  return (
    <>
        <div className='section'>

                        <div className='section__body'>
                                <div className='ui top attached two item menu'>
                                        {/* eslint-disable-next-line */}
                                        <a className='red item' id ="ubtn1" onClick={handleExpense}>Expense</a>
                                        {/* eslint-disable-next-line */}
                                        <a className='green item' id="ubtn2" onClick={handleIncome}>Income</a>
                                </div>

                                <div className='ui bottom attached segment'>
                                        <form className='ui form transaction-form' onSubmit={handleFormSubmission}>
                                                {/* For taking input required and amount */}
                                                <div className='fields'>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                        <div><Label>Enter Name </Label></div>
                                                                <Input value ={name} required type="text" onChange={(e)=>{
                                                                        setName(e.target.value);
                                                                }}></Input>
                                                        </div>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                        <div><Label>Enter Amount</Label></div>
                                                                <div className='ui right labeled input'>
                                                                        
                                                                        <Input value ={amount} onChange={(e)=>{
                                                                        setAmount(e.target.value);
                                                                }} required type="number" min ="0" style={{maxWidth:"70%"}}></Input>
                                                                        <div className='ui label label'>INR</div>
                                                                </div>
                                                        </div>
                                                </div>
                                                {/* For getting Tag and amount date */}

                                                <div className='fields'>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                                <div><Label>Add Tag</Label></div>
                                                                <Input value ={tag} onChange={(e)=>{
                                                                        setTag(e.target.value);
                                                                }} required type="text"></Input>
                                                                
                                                        </div>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                        <div><Label>Pick Transaction date</Label></div>
                                                
                                                                <div className='ui right labeled input'>
                                                                        <Input value ={date} onChange={(e)=>{
                                                                        setDate(e.target.value);
                                                                }} required type="date"></Input>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className='fields'>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                                {/* <div><Label>Brief/Notes</Label></div> */}
                                                                <Input value ={note} onChange={(e)=>{
                                                                        setNote(e.target.value);
                                                                }} type="text" placeholder="Add notes"></Input>
                                                                
                                                        </div>
                                                        <div className='eleven wide field mobile-width-margin'>
                                                        {/* <div><Label>Pick Transaction date</Label></div> */}
                                                
                                                                <div className='ui right labeled input'>
                                                                        {/* <Input required type="date"></Input> */}
                                                                        <Button color="green">{btnName}</Button>
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
export default EditTransaction