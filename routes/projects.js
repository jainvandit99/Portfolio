const express = require('express')
const Project = require('../models/projects')

module.exports = (app) => {
    if (app === null){
        throw new Error('app must be instance of an express server')
    }

    app.get('/api/projects', (req, res) => {
        var { ...ob} = req.query
        Project.find({...ob},(err,projects) => {
            if(err || projects == null){
                return res.status(200).json({
                    status:400,
                    message: "Error: No Projects/Error fetching projects"
                })
            }else{
                return res.status(200).json({
                    status: 200,
                    message: "Projects found",
                    projects: projects
                })
            }
        })
    })

    app.post('/api/projects', (req, res) => {
        var { ...ob } = req.body
        project = Project({...ob})
        project.save((err, savedProject) => {
            if(err){
                return res.status(200).json({
                    status: 400,
                    message: "Error: "+ err
                })
            }else{
                return res.status(200).json({
                    status: 200,
                    message: "New Project Created Successfully",
                    project: savedProject
                })
            }
        })
    })

    app.delete('/api/projects', (req, res) => {
        var _id = req.query
        if(! _id){
            return res.status(200).json({
                status: 400,
                message: "Error deleting project: Project id is required"
            })
        }
        Project.findOneAndDelete(_id, (err,deletedProject) => {
            if(err){
                return res.status(200).json({
                    status: 400,
                    message: "Error deleting project: "+ err
                })
            }else{
                return res.status(200).json({
                    status: 200,
                    message: "Project Deleted Successfully",
                    project: deletedProject
                })
            }
        })
    })

    app.put('/api/projects', (req, res) => {
        var { _id, ...ob} = req.body
        if(! _id){
            return res.status(200).json({
                status: 400,
                message: "Error editing project: Project id is required"
            })
        }else{
            Project.findOneAndUpdate({ _id }, { ...ob}, (err, updatedProject) => {
                if(err){
                    return res.status(200).json({
                        status: 400,
                        message: "Error updating project: "+ err
                    })
                }else{
                    return res.status(200).json({
                        status: 200,
                        message: "Project Updated Successfully",
                        project: updatedProject
                    })
                }
            })
        }
    })
}