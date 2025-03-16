import { z } from 'zod'

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    content: z.string({
      required_error: 'Content is required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
  }),
})

export const blogValidation = {
  createBlogValidationSchema,
}
