const express = require('express')
const Quote = require('../models/quotes')

module.exports = (app) => {
    if (app === null){
        throw new Error('app must be instance of an express server')
    }

    app.get('/api/Quotes', (req, res) => {
        var { ...ob} = req.query
        Quote.find({...ob},(err,Quotes) => {
            if(err || Quotes == null){
                return res.status(200).json({
                    status:400,
                    message: "Error: No Quotes/Error fetching Quotes"
                })
            }else{
                return res.status(200).json({
                    status: 200,
                    message: "Quotes found",
                    Quotes: Quotes
                })
            }
        })
    })

    app.post('/api/Quotes', (req, res) => {
        var { ...ob } = req.body
        quote = Quote({...ob})
        quote.save((err, savedQuote) => {
            if(err){
                return res.status(200).json({
                    status: 400,
                    message: "Error: "+ err
                })
            }else{
                return res.status(200).json({
                    status: 200,
                    message: "New Quote Created Successfully",
                    Quote: savedQuote
                })
            }
        })
    })

    app.delete('/api/Quotes', (req, res) => {
        var _id = req.query
        if(! _id){
            return res.status(200).json({
                status: 400,
                message: "Error deleting Quote: Quote id is required"
            })
        }
        Quote.findOneAndDelete(_id, (err,deletedQuote) => {
            if(err){
                return res.status(200).json({
                    status: 400,
                    message: "Error deleting Quote: "+ err
                })
            }else{
                return res.status(200).json({
                    status: 200,
                    message: "Quote Deleted Successfully",
                    Quote: deletedQuote
                })
            }
        })
    })

    app.put('/api/quotes', (req, res) => {
        var { _id, ...ob} = req.body
        if(! _id){
            return res.status(200).json({
                status: 400,
                message: "Error editing Quote: Quote id is required"
            })
        }else{
            Quote.findOneAndUpdate({ _id }, { ...ob}, (err, updatedQuote) => {
                if(err){
                    return res.status(200).json({
                        status: 400,
                        message: "Error updating Quote: "+ err
                    })
                }else{
                    return res.status(200).json({
                        status: 200,
                        message: "Quote Updated Successfully",
                        quote: updatedQuote
                    })
                }
            })
        }
    })
}