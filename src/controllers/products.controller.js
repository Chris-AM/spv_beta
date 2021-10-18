const { response, request } = require('express');
const Product  = require('../models/products.model');

const createProduct = async (req = request, res = response) => {
    
    try {
        const product = {
            codebar: req.body.codebar,
            name: req.body.name
        }
        const prodInDb = await Product.create(product);
        console.log('prodInDb', prodInDb )
        res.json({
            ok: true,
            msg: 'doctor added',
            prodInDb
        });
    } catch (error) {
        console.log('Error --->', error);
        res.status(500).json({
            ok:false,
            msg: 'Internal server error. Check logs'
        })
    }
}
const getProductById = async (req = request, res = response) => {
    try {
        
    } catch (error) {
        console.log('Error --->', error);
        res.status(500).json({
            ok:false,
            msg: 'Internal server error. Check logs'
        })
    }
}

const getProducts = async (req = request, res = response) => {
    try {
        
    } catch (error) {
        console.log('Error --->', error);
        res.status(500).json({
            ok:false,
            msg: 'Internal server error. Check logs'
        })
    }
}

const updateProducts = async (req = request, res = response) => {
    try {
        
    } catch (error) {
        console.log('Error --->', error);
        res.status(500).json({
            ok:false,
            msg: 'Internal server error. Check logs'
        })
    }
}

const deleteProduct = async (req = request, res = response) => {
    try {
        
    } catch (error) {
        console.log('Error --->', error);
        res.status(500).json({
            ok:false,
            msg: 'Internal server error. Check logs'
        })
    }
}

module.exports = {
    createProduct,
    getProductById,
    getProducts,
    updateProducts,
    deleteProduct
}