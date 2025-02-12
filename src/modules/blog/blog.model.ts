import { Schema, model } from 'mongoose'
import { TBlog } from './blog.interface'

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: [true, 'Title is required'] },
    content: { type: String, required: [true, 'Content is required'] },
    image: { type: String, required: [true, 'Image is required'] },
    category: { type: String, required: [true, 'Category is required'] },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const BlogModel = model<TBlog>('Blog', blogSchema)
