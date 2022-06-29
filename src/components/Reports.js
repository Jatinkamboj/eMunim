import React,{useState,useEffect} from 'react'
import { Button, Divider, Dropdown, Statistic, StatisticLabel } from 'semantic-ui-react'
import { BarChart } from './charts/BarChart';
import DoughnutChart from './charts/DoughnutChart';
function useForceUpdate() {
        // eslint-disable-next-line
        const [value, setValue] = useState(0);
        // integer state
        return () => setValue((value) => value + 1); // update the state to force render
      }
function Reports(props) {
        const forceUpdate = useForceUpdate();
        const [value, setValue] = useState();
        const [dt, setDt] = useState()
        const [dropdown, setDropdown] = useState("Please Select Value")
        const [incomeData, setIncomeData] = useState([]);
        const [expenseData, setExpenseData] = useState();
        const [netData, setNetData] = useState();
        const [totalIncome, setTotalIncome] = useState(0);
        const [totalExpense, setTotalExpense] = useState(0);
        let income=[0,0,0,0,0,0,0,0,0,0,0,0];
        let expense=[0,0,0,0,0,0,0,0,0,0,0,0];
        let netWorth=[0,0,0,0,0,0,0,0,0,0,0,0];

        let data = [0,0,0,0,0,0,0,0,0,0,0,0];
        const handleClick = (e)=>{
                if(e.currentTarget.id==1)
                {
                        setDropdown("Income");
                        console.log(incomeData);
                        // console.log(data);

                }
                if(e.currentTarget.id==2)
                {
                        setDropdown("Expense");
                        console.log(expenseData);
                }
                if(e.currentTarget.id==3)
                {
                        setDropdown("Net Worth");
                }
                data=[0,0,0,0,0,0,0,0,0,0,0,0];
                let tmp = 0;
                props.data.map((it)=>{
                        if(e.currentTarget.id==1 && it.type === "Income"){
                                // console.log("in")
                                // console.log(e.currentTarget.id)
                                let arr = it.date.split('-')
                                data[parseInt(arr[1])-1]+=parseInt(it.amount);
                                
                        }
                        else if(e.currentTarget.id==2 && it.type ==="Expense"){
                                let arr = it.date.split('-')
                                data[parseInt(arr[1])-1]+=parseInt(it.amount);
                                
                        }
                })
                setDt(data);
                setIncomeData(data);
                
                // forceUpdate();
                console.log(data)
        }
        const category = [
                { key: 1, text: "Income", value: 1},
                { key: 2, text: "Expense", value: 2},
                { key: 3, text: "Net Worth", value: 3},
              ];

              const chart = [
                { key: 1, text: "Choice 1", value: 1},
                { key: 2, text: "Choice 2", value: 2},
                { key: 3, text: "Choice 3", value: 3},
              ];

        const handleOption=(e,data)=>{
                setValue(data.value);
        }
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
                setTotalIncome(income);
                setTotalExpense(expense);
        }, [])
        
        
  return (
    <>
    <div className="container" style={{maxWidth:"40%",marginTop:"80px",border:"2px solid #c4c0c0", borderRadius:"10px"}}>
                <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {dropdown}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button class="dropdown-item" id='1' onClick={handleClick}>Income</button>
                <button class="dropdown-item" id='2' onClick={handleClick}>Expense</button>
                <button class="dropdown-item" id='3' onClick={handleClick}>Net Worth</button>
                </div>
                </div>
                <Divider/>
                <div className='income_expense'>
                <Statistic.Group size='mini'>
                        <Statistic >
                                <Statistic.Value style={{color:"green"}}>
                                        {totalIncome}
                                </Statistic.Value>
                                <StatisticLabel style={{color:"green"}}>Total Income</StatisticLabel>
                        </Statistic>

                        <Statistic style={{color:"green"}}>
                                <Statistic.Value style={{color:"red"}}>
                                        {totalExpense}
                                </Statistic.Value>
                                <StatisticLabel style={{color:"red"}}>Total Expense</StatisticLabel>
                        </Statistic>
                </Statistic.Group>
                </div>
                <Divider/>
                <div style={{maxWidth:"60%"}}><BarChart data={dt} /></div>
                {/* <div style={{maxWidth:"60%"}}><BarChart data={dt}/></div> */}
        </div>
    </>
  )
}

export default Reports