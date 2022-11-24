import {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

function App() {
  const [Data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://gorest.co.in/public/v2/users")
    .then((res)=>setData(res.data)); 
  },[])
  var male = 0;
  var female = 0;
  Data.map((val)=>{
    if(val.gender === "male"){
      male++;
    }
    else female++;
  })
  // console.log(Data[0]);
  const arr = Object.keys(Data[0]);
  // console.log(arr);
  console.log("male: ",male);
  console.log("female: ",female);
  return (
    <>
    <h4>Number of Male: {male}</h4>
    <h4>Number of Female: {female}</h4>
    <h2>Data From Table</h2>
    <TableContainer component={Paper}>
      <Table aria-lable = 'simple table'>
        <TableHead>
          <TableRow>
            {arr.map((res)=>
              <TableCell>{res}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((res)=>
              <TableRow key={res.id} sx = {{'&:last-child td,&:last-child th':{border: 0}}}>
            {arr.map((idx)=>
              <TableCell>{res[idx]}</TableCell>
              )}
              </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default App;
