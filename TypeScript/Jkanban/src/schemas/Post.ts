import { Schema, model,Document } from "mongoose";

interface PostInterface extends Document {
    nome?: string,
    descricao?: string,
    dataEntrega:Date,
    dataCriacao:Date,
}

const PostSchema = new Schema({
    nome:String,
    descricao:String,
    dataEntrega:{ type:Date , default:Date.now },
    dataCriacao:{ type:Date , default:Date.now },
})

export default model<PostInterface>('Post', PostSchema);
