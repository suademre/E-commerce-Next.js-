import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: String,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fyorktonrentals.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fusericon.png&imgrefurl=https%3A%2F%2Fyorktonrentals.com%2Fagents%2Fbtmak%2F&tbnid=G1GtLIoK7BPRZM&vet=10CAMQxiAoAGoXChMIgJ-Si9KK8QIVAAAAAB0AAAAAEAk..i&docid=PA1rntUUwz5AuM&w=512&h=512&itg=1&q=avatar%20image%20kostenlois&ved=0CAMQxiAoAGoXChMIgJ-Si9KK8QIVAAAAAB0AAAAAEAk'
    }
}, {
    timestamps: true
})
let Dataset = mongoose.models.user || mongoose.model('user', userSchema)

export default Dataset

