import { z } from 'zod'

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Content is required',
    }),
  }),
})

export const projectValidation = {
  createProjectValidationSchema,
}
