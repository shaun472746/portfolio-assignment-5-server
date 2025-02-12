import sendResponse from '../../app/middleware/sendResponse'
import catchAsync from '../../app/utils/catchAsync'
import { ProjectServices } from './project.service'

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req.file, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project created successfully!',
    data: result,
  })
})

const updateProject = catchAsync(async (req, res) => {
  const { projectId } = req.params
  const result = await ProjectServices.updateProjectIntoDB(
    projectId,
    req.file,
    req.body,
  )

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  })
})
const getProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsFromDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project retrieved successfully!',
    data: result,
  })
})
const deleteProject = catchAsync(async (req, res) => {
  const { projectId } = req.params
  await ProjectServices.deleteProjectFromDB(projectId)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully!',
  })
})

export const ProjectControllers = {
  createProject,
  updateProject,
  getProjects,
  deleteProject,
}
