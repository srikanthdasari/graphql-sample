const moongose = require('mongoose');

const schema = moongose.Schema;

const eventSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,        
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    creator: {
        type:schema.Types.ObjectId,
        ref: 'User'
    }

});



module.exports = moongose.model('Event',eventSchema)