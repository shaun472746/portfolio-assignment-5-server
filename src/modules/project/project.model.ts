import { Schema, model } from 'mongoose'
import { TProject } from './project.interface'

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, required: [true, 'Title is required'] },
    description: { type: String, required: [true, 'Content is required'] },
    image: { type: String, required: [true, 'Image is required'] },
    link: { type: String },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const ProjectModel = model<TProject>('Project', projectSchema)
