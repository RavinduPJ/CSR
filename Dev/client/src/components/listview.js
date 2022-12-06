import React, {useEffect, useState} from 'react';
import './listview.css';

const Listview = () => {

    const [item, setItems] = useState([]);

    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('data'));
    if (items) {
   setItems(items);
  }
}, []);
    
  return (
        <div style={{width:'50%'}} className='listview'>
            <div align='left'>
                <lable align="right" className='lable'>EPF Number : {item.epfnumber}</lable><br></br>
                <lable align="right" className='lable'>Username : {item.username}</lable><br></br>
                <lable align="right" className='lable'>Useremail : {item.useremail}</lable><br></br>
                <lable align="right" className='lable'>Rice - 1KG packet : {item.product01}</lable><br></br>
                <lable align="right" className='lable'>Dhal - 500g packet : {item.product02}</lable><br></br>
                <lable align="right" className='lable'>Sugar - 1KG packet : {item.product03}</lable><br></br>
                <lable align="right" className='lable'>Milk powder - 400g packet : {item.product04}</lable><br></br>
                <lable align="right" className='lable'>Tea - 200g packet : {item.product05}</lable><br></br>
                <lable align="right" className='lable'>Soya-meat - 90g packet : {item.product06}</lable><br></br>
                <lable align="right" className='lable'>Mackerel Canned Fish Tin : {item.product07}</lable><br></br>
                <lable align="right" className='lable'>Noodles - 400g packet : {item.product08}</lable><br></br>
                <lable align="right" className='lable'>Wheat Flour - 1KG packet : {item.product09}</lable><br></br>
                <lable align="right" className='lable'>Chocolate Biscuit - 100g packet : {item.product10}</lable><br></br>
                <lable align="right" className='lable'>Soap (100g) : {item.product11}</lable><br></br>
                <lable align="right" className='lable'>Tooth-paste - 120g tube : {item.product12}</lable><br></br>
                <lable align="right" className='lable'>Tooth-brush : {item.product13}</lable><br></br>
                <lable align="right" className='lable'>CR Book (Single Rule) - 120 Pages : {item.product14}</lable><br></br>
                <lable align="right" className='lable'>Exercise Book (Single Rule) - 120 Pages : {item.product15}</lable><br></br>
                <lable align="right" className='lable'>Pens : {item.product16}</lable><br></br>
                <lable align="right" className='lable'>Pencils : {item.product17}</lable><br></br>
                <lable align="right" className='lable'>Eraser : {item.product18}</lable><br></br>
                <lable align="right" className='lable'>Pencil-case : {item.product19}</lable><br></br>
                <lable align="right" className='lable'>Water-bottle : {item.product20}</lable><br></br>
                </div>
              </div>
  );
}

export default Listview;