import AppError from '../../app/utils/AppError'
import { sendImageToCloudinary } from '../../app/utils/sendImageToCloudinary'
import { TProject } from './project.interface'
import { ProjectModel } from './project.model'

const createProjectIntoDB = async (file: any, project: TProject) => {
  try {
    if (file) {
      const timestamp = Date.now()

      const imageName = `${timestamp}`
      const path = file?.path

      const { secure_url } = await sendImageToCloudinary(imageName, path)
      project.image = secure_url as string
      const result = await ProjectModel.create(project)
      return result
    } else {
      throw new AppError(403, 'Image is not attached correctly')
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

const getAllProjectsFromDB = async () => {
  const projects = await ProjectModel.find({ deleted: false }).select(
    '-updatedAt -deleted -createdAt',
  )
  return projects
}

const updateProjectIntoDB = async (
  id: string,
  file: any,
  project: TProject,
) => {
  if (file) {
    const timestamp = Date.now()

    const imageName = `${timestamp}`
    const path = file?.path

    const { secure_url } = await sendImageToCloudinary(imageName, path)
    project.image = secure_url as string
  }

  const result = await ProjectModel.findByIdAndUpdate(id, project, {
    new: true,
  })
  return result
}

const deleteProjectFromDB = async (id: string) => {
  await ProjectModel.findByIdAndUpdate(id, { deleted: true }, { new: true })
  return
}
export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
}
