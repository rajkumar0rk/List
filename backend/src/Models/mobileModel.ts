import mongoose from 'mongoose'

const MobileSchema = new mongoose.Schema({
    product_name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    storage_capacity: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    discount_percentage: {
        type: Number
    },
    release_date: {
        type: Date
    },
    screen_size: {
        type: Number
    },
    processor: {
        type: String
    }
}, { timestamps: true })


const MobileModel = mongoose.model('Mobile', MobileSchema)
export default MobileModel;