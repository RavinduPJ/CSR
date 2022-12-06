import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './admin.css'

import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

import { useDownloadExcel } from 'react-export-table-to-excel';

const Leftitems = () => {

    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Left Items table',
        sheet: 'Lift Items Details'
    })

    const navigate = useNavigate();
    
    const prev = () => navigate(`/`);

  const [itemdata, setItemdata] = useState([]);
  
  const getAll = async() =>{
    const item = await axios.get("http://localhost:9180/getitem");
    setItemdata(item.data.rows)
  }

  useEffect(() =>{
    getAll();
  }, []);
  return (
    <div>
        <Button variant="contained" color="success" onClick={() => {prev()}}>
            Booking Details
        </Button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" ref={tableRef}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Product Id</TableCell>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="center">Product Qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {itemdata.map((row) => (
            <TableRow
            >
              <TableCell align="center">{row.p_id}</TableCell>
              <TableCell align="center">
                {row.productname}
                </TableCell>
                <TableCell align="center">
                {row.productqty}
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

export default Leftitems;