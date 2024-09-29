
import mongoose,{Schema} from "mongoose";

const messageSchema = new Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        content: { type: String, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
        readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      },
      { timestamps: true }
);

// You can then populate `senderId` based on `senderType`
// messageSchema.methods.populateSender = async function() {
//     if (this.senderType === 'User') {
//         return await mongoose.model('User').findById(this.senderId);
//     } else if (this.senderType === 'Teacher') {
//         return await mongoose.model('Teacher').findById(this.senderId);
//     }
// }

// messageSchema.methods.populateReceiver = async function() {
//     if (this.receiverType === 'User') {
//         return await mongoose.model('User').findById(this.receiverId);
//     } else if (this.receiverType === 'Teacher') {
//         return await mongoose.model('Teacher').findById(this.receiverId);
//     }
// }
const Message = mongoose.model('Message', messageSchema);

export default Message;
