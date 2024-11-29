const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String, required: true, maxLength: 255 },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, maxLength: 255 },
    category: { type: String, maxLength: 255 },
    blogImg: [{ type: String, maxLength: 255 }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isPublished: { type: Boolean, default: false },
  },
  { collection: "blogs" }
);


const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
