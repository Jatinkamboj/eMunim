import React, {useState} from "react";
import { Button, Label } from "semantic-ui-react";
import "./ListStyle.css";
import { Modal } from "react-bootstrap";
import EditTransaction from './EditTransaction';
import * as AiIcons from 'react-icons/ai';

function TransactionList(props) {
  const [show, setShow] = useState(false);
  const [del, setDel] = useState(false);
  const [eid, setEid] = useState(null);
  // const [tempData, settempData] = useState(null);
        const handleClose = () => setShow(false);
        const handleShow = (e) => 
        {
          setShow(true);
          // console.log(e.currentTarget.id);
          console.log(props.data)
          console.log(props.data._id)
          setEid(e.currentTarget.id);
          // console.log(props.data);
        }

        const handleDelClose = async () => 
        {
          // let data = [];
          // data = JSON.parse(localStorage.getItem(0));
          console.log(props.data._eid)
          const response = await fetch(`http://localhost:5000/delete/${eid}`, {
                        method: "DELETE",
                        headers: {
                                "Content-Type": "application/json",
                                "auth-token": sessionStorage.getItem("token")
                        },
                        });
                      const json = await response.json();
               console.log(json);
               setDel(false);
               props.fetch();
               props.forceUpdate();
          // props.mainData.splice(props.mainData.findIndex(a => a.id == eid),1);
          // localStorage.setItem(0,JSON.stringify(props.mainData));
          
          // props.forceUpdate();
          // document.location.reload();
        }
        const handleDelShow = () => 
        {
          setShow(false);
          setDel(true);
        }
        const close = ()=>{

        }

  return (
    <>
            <Modal show={show} onHide={handleClose} style={{marginTop:"100px"}}>
              <Modal.Header closeButton>
                <Modal.Title>Update transaction</Modal.Title>
              </Modal.Header>
              <Modal.Body><EditTransaction fetch={props.fetch} setShow = {setShow} eid = {eid} forceUpdate={props.forceUpdate} mainData={props.mainData} tempData = {props.data}/>
                <Button color="red" className="float-right" onClick={handleDelShow}>
                  Delete Transaction
                </Button>
                </Modal.Body>
            </Modal>

            <Modal show={del} onHide={handleDelClose} style={{marginTop:"100px"}}>
              <Modal.Header onClick={close} closeButton>
                <Modal.Title>Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure, you want to delete this transaction?
                        Once deleted it will not get recovered.
              </Modal.Body>
              <Modal.Footer>
                <Button color="green" className="float-right" onClick={handleDelClose}>
                  Yes, I confirm
                </Button>
                <Button color="red" className="float-right"onClick={handleDelClose}>
                 No, It was a mistake
                </Button>
                </Modal.Footer>
            </Modal>
      <div className="transaction-item" style={{fontSize:"16px" }}>
        <div className="transaction-item__date" >{props.data.date}</div>
        <div className="transaction-item__info">
          <Label size="large">{props.data.tag}</Label>
          {/* <Button icon="arrow right"/> */}&nbsp;&nbsp;&nbsp;
          <span style={{fontWeight:"bold", fontSize:"18px"}}>{props.data.name}</span>
          <span style={{fontWeight:"bold", fontSize:"18px"}}>{props.data.note}</span>
          <span style={props.data.type === 'Expense' ? { color:'red'} : { color:'green'} }>{props.data.note}</span>
        </div>

        <div className="transaction-item__amount" style={props.data.type === 'Expense' ? { color:'red'} : { color:'green'} }>{props.data.amount} ₹</div>
        <div className="transaction-item__edit" >
          {/* <Button id={props.data.id} onClick={handleShow} circular basic icon="pencil"/> */}
          
              <AiIcons.AiOutlineEdit id={props.data._id} onClick={handleShow} size={28} />
          
        </div>
      </div>
    </>
  );
}

export default TransactionList;
