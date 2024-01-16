const express = require ('express');
const APP = express();
//ROUTES
const router = require('../router/product_router').router
//DOTENV
require('dotenv').config()
//JSON
APP.use(express.json())
//CORS
const cors = require('cors');

//midlewares

APP.use(cors());

//router
APP.use(router)



APP.listen(process.env.PORT, () => console.log(`server up in ${process.env.PORT}`));

