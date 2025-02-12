import express from "express";

import validateMiddleware from "../../app/middleware/validateRequest";
import { projectValidation } from "../project/project.zod.validation";
import { ProjectControllers } from "../project/project.controller";


const router = express.Router();

router.post(
    "/",
  
    validateMiddleware(projectValidation.createProjectValidationSchema),
    ProjectControllers.createProject
  );
router.put(
    "/:projectId",
    validateMiddleware(projectValidation.createProjectValidationSchema),
    ProjectControllers.updateProject
  );
  router.get("/",ProjectControllers.getProjects)
  router.delete("/:projectId",ProjectControllers.deleteProject)


  export const MessageRoutes = router;