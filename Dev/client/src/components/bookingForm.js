import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import './bookingForm.css';

export default function BookingForm() {

    const navigate = useNavigate();

    const [epfnumber, setEpfnumber] = useState("");
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [product01, setproduct01] = useState("0");
    const [product02, setproduct02] = useState("0");
    const [product03, setproduct03] = useState("0");
    const [product04, setproduct04] = useState("0");
    const [product05, setproduct05] = useState("0");
    const [product06, setproduct06] = useState("0");
    const [product07, setproduct07] = useState("0");
    const [product08, setproduct08] = useState("0");
    const [product09, setproduct09] = useState("0");
    const [product10, setproduct10] = useState("0");
    const [product11, setproduct11] = useState("0");
    const [product12, setproduct12] = useState("0");
    const [product13, setproduct13] = useState("0");
    const [product14, setproduct14] = useState("0");
    const [product15, setproduct15] = useState("0");
    const [product16, setproduct16] = useState("0");
    const [product17, setproduct17] = useState("0");
    const [product18, setproduct18] = useState("0");
    const [product19, setproduct19] = useState("0");
    const [product20, setproduct20] = useState("0");

    const [itemdata, setItemdata] = useState([]);
  
    const getAll = async() =>{
        const item = await axios.get("http://localhost:9180/getitem");
        setItemdata(item.data.rows)
    }

    const [data, setdata] = useState([]);    
    
    const bookItem = async() => {
        
        const data = {
            epfnumber,
            username,
        useremail,
        product01,
        product02,
        product03,
        product04,
        product05,
        product06,
        product07,
        product08,
        product09,
        product10,
        product11,
        product12,
        product13,
        product14,
        product15,
        product16,
        product17,
        product18,
        product19,
        product20,
        }

        const result = await axios.post("http://localhost:9180/add", data);
        

        if(result){
            setdata(data);
            alert('Successfully Booked');
            
        }else{
            alert('Error in Booking')
        }
    }
    
    // const next
    
    useEffect(() => {
        getAll();
        localStorage.setItem('data', JSON.stringify(data));
    }, [data])


  return (

    <div className="content-container">
        <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <div>
                        <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="EPF Number"
                        placeholder="EPF NUmber"
                        value={epfnumber}
                        onChange={e => setEpfnumber(e.target.value)}
                        />
                        </div>
                        <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                        </div>
                        <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="Useremail"
                        placeholder="Useremail"
                        value={useremail}
                        onChange={e => setUseremail(e.target.value)}
                        />
                        </div>
                    </div>
                </div>
                <div>
            </div>
        </Box>
        <div className="row">
            <div className="left-panel box">
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 0.4, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Rice - 1KG packet"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product01}
                    onChange={e => setproduct01(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Dhal - 500g packet"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product02}
                    onChange={e => setproduct02(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Sugar - 1KG packet"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product03}
                    onChange={e => setproduct03(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Milk powder - 400g packet"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product04}
                    onChange={e => setproduct04(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Tea - 200g packet"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product05}
                    onChange={e => setproduct05(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Soya-meat - 90g packet"                                  
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product06}
                    onChange={e => setproduct06(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Mackerel Canned Fish Tin"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product07}
                    onChange={e => setproduct07(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Noodles - 400g packet"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product08}
                    onChange={e => setproduct08(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Wheat Flour - 1KG packet"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product09}
                    onChange={e => setproduct09(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Chocolate Biscuit - 100g packet"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product10}
                    onChange={e => setproduct10(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Soap (100g)"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product11}
                    onChange={e => setproduct11(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Tooth-paste - 120g tube"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product12}
                    onChange={e => setproduct12(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Tooth-brush"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product13}
                    onChange={e => setproduct13(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="CR Book (Single Rule) - 120 Pages"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product14}
                    onChange={e => setproduct14(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Exercise Book (Single Rule) – 120 Pages"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product15}
                    onChange={e => setproduct15(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Pens"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product16}
                    onChange={e => setproduct16(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Pencils"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product17}
                    onChange={e => setproduct17(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Eraser"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product18}
                    onChange={e => setproduct18(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Pencil-case"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="Enter Positive Number"
                    type="number"
                    variant="filled"
                    value={product19}
                    onChange={e => setproduct19(e.target.value)}
                    size='small'
                    />
                </div>
                <div>
                    <TextField
                    disabled
                    id="filled-disabled"
                    defaultValue="Water-bottle"
                    variant="filled"
                    size='small'
                    />
                    <TextField
                    id="filled-number"
                    label="ENter Positive Number"
                    type="number"
                    variant="filled"
                    value={product20}
                    onChange={e => setproduct20(e.target.value)}
                    size='small'
                    />
                </div>
                </Box>
            </div>
            <div className="right-panel box">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table" >
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Product Qty</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {itemdata.map((row) => (
                            <TableRow
                            >
                            <TableCell align="center" size='medium'>
                                {row.productname}
                                </TableCell>
                                <TableCell align="center" size='medium'>
                                {row.productqty}
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
       </div>
       <div className='buttons'>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success" onClick={() => {bookItem()}}>
                    Success
                </Button>
                <Button variant="contained" color="success" onClick={() => navigate('/next')}>
                    Get My Details
                </Button>
            </Stack>  
        </div>
    </div>
  );
}   

// export default BookingForm;