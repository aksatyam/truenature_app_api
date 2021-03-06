'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let material = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    material_name:{type: String, required: true, trim: true},
    material_description:{type:String,trim:true},
    inspection_parem:{type: String, trim:true},
    qulaitycheck_parem:{type: String, trim: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Material_master', material, 'material_master');