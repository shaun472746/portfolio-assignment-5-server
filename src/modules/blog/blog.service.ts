import AppError from '../../app/utils/AppError'
import { sendImageToCloudinary } from '../../app/utils/sendImageToCloudinary'
import { TBlog } from './blog.interface'
import { BlogModel } from './blog.model'

const createBlogIntoDB = async (file: any, blog: TBlog) => {
  try {
    if (file) {
      const timestamp = Date.now()

      const imageName = `${timestamp}`
      const path = file?.path

      const { secure_url } = await sendImageToCloudinary(imageName, path)
      blog.image = secure_url as string
      const result = await BlogModel.create(blog)
      return result
    } else {
      throw new AppError(403, 'Image is not attached correctly')
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

const getAllBlogsFromDB = async () => {
  const blogs = await BlogModel.find({ deleted: false }).select(
    '-updatedAt -deleted -createdAt',
  )
  return blogs
}

const updateBlogIntoDB = async (id: string, file: any, blog: TBlog) => {
  if (file) {
    const timestamp = Date.now()

    const imageName = `${timestamp}`
    const path = file?.path

    const { secure_url } = await sendImageToCloudinary(imageName, path)
    blog.image = secure_url as string
  }

  const result = await BlogModel.findByIdAndUpdate(id, blog, { new: true })
  return result
}

const deleteBlogFromDB = async (id: string) => {
  await BlogModel.findByIdAndUpdate(id, { deleted: true }, { new: true })
  return
}

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  deleteBlogFromDB,
  updateBlogIntoDB,
}
