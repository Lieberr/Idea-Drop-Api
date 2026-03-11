import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minLength: 6, 
    }
}, {
    timestamps: true
});



// Hash password before saving

userSchema.pre('save', async function (next) { // Antes de salvar um documento execute essa funcao
    if(!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10); // Salt é um valor aleatorio gerado no hash, ou seja, para 2 pessoas com a mesma senha, o hash fica diferente 
    this.password = await bcrypt.hash(this.password, salt); // Senha original -> hash

});


// Compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) { // Criar um novo metodo para cada usuario (matchPassword)
    return await bcrypt.compare(enteredPassword, this.password)
}


const User = mongoose.model('User', userSchema);

export default User;