import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Este campo guarda o Id de outro documento
        ref: 'User', // Referencia a User
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },

    summary: {
        type: String,
        required: true,
        trim: true   
    },

    description: {
        type: String,
        required: true
    },
    
    tags: {
        type: [String],
        default: []
    }
},{
    timestamps: true
});

const Idea = mongoose.model('Idea', ideaSchema)


export default Idea;