const mongoose = require('mongoose')

mongoose.connect(process.env.URI_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const UserSchema = new mongoose.Schema({
    email       : { type: String, required: true },
    name        : { type: String, required: true },
    given_name  : { type: String, required: true },
    family_name : { type: String, required: true },
    picture     : { type: String, required: true },
    gender      : { type: String },
    phone       : { type: String },
    dob         : { type: String },
    weight      : { type: String },
    blood_type  : { type: String },
    height      : { type: String },
    cnp         : { type: String },
})
UserSchema.index({ email: 1, cnp: 1 }, { unique: true })

const SessionSchema = new mongoose.Schema({
    _id: String 
},{ collection: 'sessions'})
SessionSchema.index({"session.userId" : 1, _id: 1}, { unique: true });

const DocsSchema=new mongoose.Schema({
    "id_cabinet"    : {type:Number,required:true},
    "email"         : {type:String, required:true},
    "name"          : {type:String,required:true},
    "surname"       : {type:String,required:true},
    "phone_number"  : {type:String,required:true},
    "specialization": [String],
    "description"   : String,
    "rating"        : {
        "points"        : Number,
        "number_review" : Number,
        "comments"      : [ String ]
    }
},{collection:'Docs'})
DocsSchema.index({ email: 1}, { unique: true })

const CabSchema=new mongoose.Schema({
    "email"             : {type:String, required:true},
    "name"              : {type:String, required:true},
    "phone_number"      : {type:String, required:true},
    "specialization"    : [String],
    "rating"            : {
        "points"            : Number,
        "number_review"     : Number,
        "comments"          : [String]
    },
    "lng"               : {type:mongoose.Decimal128, required:true},
    "lat"               : {type:mongoose.Decimal128, required:true}
},{collection:'Medical_cabinet'})

const PostSchema = new mongoose.Schema({
    user_id : {type:String, required:true},
    name    : {type:String, required:true},
    picture : {type:String, required:true},
    post    : {type:String, required:true},
    time    : {type:String, required:true},
    likes   : {type:Number},
    dislikes: {type:Number}
}, {collection: 'posts'})

const CommentSchema = new mongoose.Schema({
    post_id:  {type:String, required:true},
    user_id : {type:String, required:true},
    name    : {type:String, required:true},
    picture : {type:String, required:true},
    post    : {type:String, required:true},
    time    : {type:String, required:true},
}, {collection : 'comments'})

const LikeSchema = new mongoose.Schema({
    post_id : {type:String, required:true},
    user_id : {type:String, required:true},
    like    : {type:Boolean,required:true}
}, {collection : 'likes'})

module.exports = { 
    user    : mongoose.model('User', UserSchema),
    docs    : mongoose.model('Docs',DocsSchema),
    session : mongoose.model('Session',SessionSchema),
    cab     : mongoose.model('Medical_cabinet',CabSchema),
    post    : mongoose.model('Post',PostSchema),
    comment : mongoose.model('Comment',CommentSchema),
    like    : mongoose.model('Like',LikeSchema)
}

