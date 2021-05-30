const mongoose = require('mongoose')

mongoose.connect(process.env.URI_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        name: { type: String, required: true },
        given_name: { type: String, required: true },
        family_name: { type: String, required: true },
        picture: { type: String, required: true },
        gender: {type: String},
        dob: { type: String },
        weight: { type: String },
        blood: { type: String, enum: ['A', 'B', 'AB', '0'] },
        height: { type: String },
        cnp: { type: String },
    }
)
// Index for user schema
UserSchema.index({ email: 1, cnp: 1 }, { unique: true })

const SessionSchema = new mongoose.Schema({ _id: String },{ collection: 'sessions'})
SessionSchema.index({"session.userId" : 1, _id: 1}, { unique: true });

module.exports = { 
    user: mongoose.model('User', UserSchema),
    session : mongoose.model('Session',SessionSchema)
}