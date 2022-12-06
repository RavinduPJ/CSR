import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

import { useDownloadExcel } from 'react-export-table-to-excel';

import './admin.css';

import background from '../images/bgimage1.jpg';


const Adminpanel = () => {

    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Booking Details table',
        sheet: 'Bookig Details'
    })
    
    const navigate = useNavigate();
    
    const next = () => navigate(`/next`);

  const [itemdata, setItemdata] = useState([]);
  
  const getAll = async() =>{
    const item = await axios.get("http://localhost:9180/getAll");
    setItemdata(item.data.rows)
  }



  useEffect(() =>{
    getAll();
  }, []);
  return (
    <div style={{ backgroundImage: `url(${background})`}}>
        <Button variant="contained" color="success" onClick={() => {next()}}>
            Item Left
        </Button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" ref={tableRef} >
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{fontSize: 16 }} >EPF Number</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Name</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Email</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Rice - 1KG packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Dhal - 500g packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Sugar - 1KG packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Milk powder - 400g packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Tea - 200g packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Soya-meat - 90g packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Mackerel Canned Fish Tin</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Noodles - 400g packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Wheat Flour - 1KG packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Chocolate Biscuit - 100g packet</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Soap (100g)</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Tooth-paste - 120g tube</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Tooth-brush</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >CR Book (Single Rule) - 120 Pages</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Exercise Book (Single Rule) - 120 Pages</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Pens</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Pencils</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Eraser</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Pencil-case</TableCell>
            <TableCell align="center" style={{fontSize: 16 }} >Water-bottle
</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {itemdata.map((row) => (
            <TableRow
            >
              <TableCell align="center" style={{fontSize: 16 }}>{row.epfnumber}</TableCell>
              <TableCell align="center" style={{fontSize: 16 }}>
                {row.username}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.useremail}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Rice1KGpacket}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Dhal500gpacket}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Sugar1KGpacker}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Milkpowder400gpacket}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Tea200gpacket}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Soyameat90gpacket}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.MackerelCannedFishTin}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Noodles400gpacket}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.WheatFlour1KGpacket}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.ChocolateBiscuit100gpacket}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Soap100g}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Toothpaste120gtube}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Toothbrush}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.CRBookSingleRule120Pages}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.ExerciseBookSingleRule120Pages}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Pens}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Pencils}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Eraser}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Pencilcase}
                </TableCell>
                <TableCell align="center" style={{fontSize: 16 }}>
                {row.Waterbottleqty}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
    <div className='button'>
      <Button variant="contained" color="success" onClick={() => {onDownload()}}>
          Download
      </Button>
    </div>
    </div>
  )
}

export default Adminpanel;