/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema;
    var SettingSchema = new Schema({
        key: {
            type: String,
            index: true,
            required: true
        },
        value: String,
        scope: String,
        note: {
            type: String,
            default: ''
        }
    });
    var Setting = mongoose.model('Setting', SettingSchema);
    return Setting;
});