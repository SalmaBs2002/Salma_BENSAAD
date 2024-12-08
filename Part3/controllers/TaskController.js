const taskModel = require('../models/TaskModel');



const createTask = async (req,res)=>{
  try{
    console.log('Request body:', req.body);
    const{title,description,priority,category,dueDate,completionStatus}=req.body;

    if(!title||!description||!priority||!category||!dueDate||!completionStatus){
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const Task = await taskModel.create({title,description,priority,category,dueDate,completionStatus})
    res.status(201).json({message:'Task created successfully',data:Task})

  }catch(err){res.status(500).json({error:'Error Creating user'})}
}

const getTaskByCategory = async (req,res)=>{
  try{
    const {category}=req.body;
    const task = await taskModel.find(category);
 if(!task){
  return res.status(404).json({error:'task not found'})
 }
 return res.status(201).json({data:task})
  }catch(err){
    res.status(500).json({error:'Error finding the task'})
  }
}


const getTaskByDueDate = async (req,res)=>{
  try{
    const {dueDate}=req.body;
    const task = await taskModel.find(DueDate);
 if(!task){
  return res.status(404).json({error:'task not found'})
 }
 return res.status(201).json({data:task})
  }catch(err){
    res.status(500).json({error:'Error finding the task'})
  }
}

const updateTask = async (req,res)=>{
  try{
   const{id}=req.params;
   const{title,description,priority,category,dueDate,completionStatus}=req.body;
   const updatedTask = await taskModel.update({title,description,priority,category,dueDate,completionStatus});
   if(! updatedTask){
    return res.status(404).json({error:'task not found'});
   }
   res.status(201).json({message:'task updated', data:updatedTask})
  }catch(err){res.status(500).json({error:'Error updating the task'})}
}

const deleteTask = async (req,res)=>{
  try{
   const{id}=req.params;
   const deletedTask = await taskModel.destroy({where:id});
   if(! updatedTask){
    return res.status(404).json({error:'task not found'});
   }
   res.status(201).json({message:'task deleted', data:updatedTask})
  }catch(err){res.status(500).json({error:'Error updating the task'})}
}


module.exports = {
  createTask,
  getTaskByCategory,
  getTaskByDueDate,
  updateTask,
  deleteTask
}
