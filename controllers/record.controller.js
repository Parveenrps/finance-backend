import {Record} from "../models/Record.model.js";

export const createRecord = async (req, res) => {
    const {amount, type} = req.body;
    if(!amount || !type){
        return res.status(400).json({message: "Amount and type are required"})
    }

    const newRecord = new Record({
        amount,
        type,
        createdBy: req.user._id
    })
    await newRecord.save()
    res.status(201).json({message: "Record created successfully", record: newRecord})

}

export const getRecords = async (req, res) => {
    const { type, category, page = 1, limit = 10, search } = req.query;

    const filter = {};
    if (type) filter.type = type;
    if (category) filter.category = category;
    if (search) filter.description = { $regex: search, $options: 'i' };

    const records = await Record.find(filter)
        .skip((page - 1) * limit)
        .limit(parseInt(limit))
        .sort({ createdAt: -1 });

    const total = await Record.countDocuments(filter);

    res.status(200).json({total, page: parseInt(page), records})
}

export const updateRecord = async (req, res) => {
    const {id} = req.params;
    const {amount, type} = req.body;
    const record = await Record.findById(id);

    if(!record){
        return res.status(404).json({message: "Record not found"})
    }

    if(amount) record.amount = amount;
    if(type) record.type = type;

    await record.save();
    res.status(200).json({message: "Record updated successfully", record});
}

export const deleteRecord = async (req, res) => {
    const {id} = req.params;
    const record = await Record.findById(id);

    if(!record){
        return res.status(404).json({message: "Record not found"})
    }

    await record.remove();
    res.status(200).json({message: "Record deleted successfully"})
}