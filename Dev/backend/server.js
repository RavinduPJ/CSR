const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

//Routes

//book items
app.use('/add', async(req, res) => {
    
    const {
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

    } = req.body;

    const result = await pool.query("INSERT INTO booking VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING *", [epfnumber, username, useremail, product01, product02, product03, product04, product05, product06, product07, product08, product09, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20]);
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 1", [product01])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 2", [product02])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 3", [product03])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 4", [product04])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 5", [product05])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 6", [product06])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 7", [product07])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 8", [product08])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 9", [product09])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 10", [product10])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 11", [product11])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 12", [product12])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 13", [product13])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 14", [product14])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 15", [product15])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 16", [product16])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 17", [product17])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 18", [product18])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 19", [product19])
    await pool.query("UPDATE product SET productqty = productqty - $1 WHERE p_id = 20", [product20])

    res.json(result);
})

//gett left item
app.use('/getitem', async(req, res) => {
    const result = await pool.query("SELECT * FROM product");

    res.json(result);
})

//get all data

app.use('/getAll', async(req, res) => {
    const result = await pool.query("SELECT * FROM booking" );

    res.json(result)
})


const port = 9180;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})