import React,{useState} from 'react'
import { Button, Dropdown, Icon } from 'semantic-ui-react'
import TransactionList from './TransactionList';
import { Modal } from "react-bootstrap";
import AddTransaction from './AddTransaction';

let sevenDays=[];
let fifteenDays=[];
let thirtyDays=[];
function useForceUpdate(){
        // eslint-disable-next-line
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
      }
      
function TransactionOverview(props) {
        const forceUpdate = useForceUpdate()
        const [show, setShow] = useState(false);
        const [mainView, setmainView] = useState(true);
        const [sView, setSView] = useState(false);
        const [fView, setFView] = useState(false);
        const [tView, setTView] = useState(false);
        const options = [
                { key: 1, text: "Last 7 Days", value: 1,},
                { key: 2, text: "Last 15 days", value: 2 },
                { key: 3, text: "Last Month", value: 3 }
              ];

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const get7Days=()=>{
                console.log("7 days");
                return props.data.filter(item =>{
                        
                        let date = new Date();
                        date.setDate(date.getDate() - 7);
                        let month = (date.getMonth() + 1) <= 9? "0"+(date.getMonth() + 1):date.getMonth() + 1;
                        let year = date.getFullYear();
                        let tDate = year +"-"+month + "-" + (date.getDate()<=9?"0"+date.getDate():date.getDate());
                        return item.date >= tDate;
                })
        }

        const get15Days=()=>{
                console.log("7 days");
                return props.data.filter(item =>{
                        
                        let date = new Date();
                        date.setDate(date.getDate() - 15);
                        let month = (date.getMonth() + 1) <= 9? "0"+(date.getMonth() + 1):date.getMonth() + 1;
                        let year = date.getFullYear();
                        let tDate = year +"-"+month + "-" + (date.getDate()<=9?"0"+date.getDate():date.getDate());
                        return item.date >= tDate;
                })
        }

        const get30Days=()=>{
                console.log("7 days");
                return props.data.filter(item =>{
                        
                        let date = new Date();
                        date.setDate(date.getDate() - 30);
                        let month = (date.getMonth() + 1) <= 9? "0"+(date.getMonth() + 1):date.getMonth() + 1;
                        let year = date.getFullYear();
                        let tDate = year +"-"+month + "-" + (date.getDate()<=9?"0"+date.getDate():date.getDate());
                        return item.date >= tDate;
                })
        }

        const handleOption = (e,data) =>{
                // eslint-disable-next-line
                if(data.value == 1)
                {
                        sevenDays = get7Days()
                        setmainView(false);
                        setSView(true);
                        setFView(false);
                        setTView(false);
                };
                // eslint-disable-next-line
                if(data.value == 2)
                {
                        fifteenDays = get15Days()
                        setmainView(false);
                        setFView(true);
                        setSView(false);
                        setTView(false);
                };
                // eslint-disable-next-line
                if(data.value == 3)
                {
                        thirtyDays = get30Days()
                        setmainView(false);
                        setTView(true);
                        setSView(false);
                        setFView(false);
                };
        }


  return (
    <>
        <Modal show={show} onHide={handleClose} style={{marginTop:"100px"}}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Transaction</Modal.Title>
              </Modal.Header>
              <Modal.Body><AddTransaction forceUpdate={forceUpdate} setShow={setShow} data={props.data} fetch={props.fetch}/>
                </Modal.Body>
        </Modal>
        <div className="container" style={{maxWidth:"25%",marginTop:"80px", marginLeft:"35% "}}>
                <Button.Group basic fluid>
                        <Button icon="plus" className='ui button' onClick={handleShow} labelPosition='center' content="New"/>
                        <Dropdown button
                                className="icon"
                                options={options}
                                clearable={()=>{setSView(false);setFView(false);setTView(false)}}
                                labeled
                                placeholder="Select Date Range"
                                onChange={handleOption}
                                icon='calendar'
                                />
                        {/* <Button icon="undo" onhover={(e) => e.target.placeholder = 'hello'} onClick={()=>{setmainView(true);setSView(false);setFView(false);setTView(false)}}/> */}
                        <Button animated onClick={()=>{setmainView(true);setSView(false);setFView(false);setTView(false)}}>
                                <Button.Content hidden>Reset</Button.Content>
                                <Button.Content visible>
                                <Icon name='undo' />
                                </Button.Content>
                        </Button>
                </Button.Group>
        </div>
        <div className='section' style={{maxWidth:"45%",border:"2px solid #c4c0c0", borderRadius:"10px",marginLeft:"25%",marginTop:"3%"}}>
                {mainView && props.data.map(item=>(
                  <TransactionList fetch={props.fetch} forceUpdate = {forceUpdate} data = {item} mainData={props.data}/>
                ))}
                {sView && sevenDays.map(item=>(
                         <TransactionList fetch={props.fetch} forceUpdate = {forceUpdate} data = {item} mainData={props.data}/>
                ))}

                {fView && fifteenDays.map(item=>(
                         <TransactionList fetch={props.fetch} forceUpdate = {forceUpdate} data = {item} mainData={props.data}/>
                ))}

                {tView && thirtyDays.map(item=>(
                         <TransactionList fetch={props.fetch} forceUpdate = {forceUpdate} data = {item} mainData={props.data}/>
                ))}
                {/* eslint-disable-next-line */}
                {(props.data.length == 0)?<h5 style={{display:"flex",justifyContent:"center",padding:"5px",color:"#d7d7d7"}}>No Transaction found</h5>:<h2></h2>}
                </div>
    </>
  )
}

export default TransactionOverview