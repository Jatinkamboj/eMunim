import React, {useState,useEffect} from 'react';
import {Button, Grid} from 'semantic-ui-react';
import DoughnutChart from './charts/DoughnutChart';
import TransactionList from './Transactions/TransactionList';
import AddTransaction from './Transactions/AddTransaction';
import DoughnutChartExp from './charts/DoughnutChartExp';
import { Link } from 'react-router-dom';
function ForceUpdate() {
  // eslint-disable-next-line
  const [value, setValue] = useState(0);
  // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

function Dashboard(props) {
  const [worth, setWorth] = useState();
  useEffect(() => {
                let income = 0;
                let expense = 0;
                props.data.map((it) => {
                  if (it.type === "Income") {
                    income += parseInt(it.amount);
                  } else {
                    expense += parseInt(it.amount);
                  }
                })
                setWorth(income-expense);
                console.log("first")
  })
  
  
  
  // const [totalIncome, setTotalIncome] = useState(0);
  // const [totalExpense, setTotalExpense] = useState(0);

    // let income = 0;
    // let expense = 0;
    // props.data.map((it) => {
    //   if (it.type === "Income") {
    //     income += parseInt(it.amount);
    //   } else {
    //     expense += parseInt(it.amount);
    //   }
    // })
    // setTotalIncome(income);
    // setTotalExpense(expense);

  // const forceUpdate = useForceUpdate()
  return (
    <>
        <div className="container" style={{marginTop:"10px", marginLeft:"20%", width:"75%",position:"absolute",top:"80px"}}>
                <Grid>
                <Grid.Row>
            <Grid.Column computer={6} mobile={16}>
              
                <h2>Net Worth:<span style={{worth} > 0 ? { color:'red'} : { color:'green'}}>{worth}</span> ₹</h2>
                <div className="section" style={{maxWidth:"60%"}}>
                        <div className="section__body">
                          <DoughnutChart data = {props.data} forceUpdate={props.forceUpdate}/>
                        </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="section" style={{maxWidth:"60%"}}>
                        <div className="section__body">
                        <DoughnutChartExp data = {props.data} forceUpdate={props.forceUpdate}/>
                          {/* <DoughnutChartExp data={props.data}/> */}
                        </div>
                </div>
            </Grid.Column>
            <Grid.Column computer={10} mobile={16}>

                <div className='section__header active'>
                  <h3>Add Transaction</h3>
                  <br></br>
                </div>
                <AddTransaction data={props.data} forceUpdate={props.forceUpdate} fetch={props.fetch}/>
                <div className='section__header active'>
                  <h3>Recent Transactions</h3>
                 <Link to="/transactions">{(props.data.length > 3)?<h5 style={{float:'right',cursor:"pointer",color:'#2185d0'}}>... See More</h5>:<h2></h2>}</Link>
                  <br></br>
                </div>
                <div style={{border:"2px solid #c4c0c0", borderRadius:"10px"}} >
                   
                {(props.data.length>=3)?props.data.slice(props.data.length -3, props.data.length).map(item=>(
                  <TransactionList fetch={props.fetch} forceUpdate = {props.forceUpdate} data = {item} mainData={props.data} />
                
                )):props.data.map(item=>(
                  <TransactionList fetch={props.fetch} forceUpdate = {props.forceUpdate} data = {item} mainData={props.data} />
                ))}
                
                {(props.data.length == 0)?<h5 style={{display:"flex",justifyContent:"center",padding:"5px",color:"#d7d7d7"}}>No Transaction found</h5>:<h2></h2>}
                </div>
            </Grid.Column>
          </Grid.Row>
                </Grid>
        </div>
    </>
  )
}

export default Dashboard