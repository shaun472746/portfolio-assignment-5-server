import express, { NextFunction, Request, Response } from "express";
const fs = require("fs");
const path = require("path");
import validateMiddleware from "../../app/middleware/validateRequest";
import { upload } from "../../app/utils/sendImageToCloudinary";
import { projectValidation } from "./project.zod.validation";
import { ProjectControllers } from "./project.controller";

const router = express.Router();

router.post(
    "/",
  
    (req: Request, res: Response, next: NextFunction) => {
      const folderName = "uploads";


      // Create the full path to the folder
      const folderPath = path.join(process.cwd(), folderName);
  
      // Create the folder if it doesn't already exist
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
  
      // Proceed to the next middleware
      next();
    },
    upload.single("file"),
    (req: Request, res: Response, next: NextFunction) => {


      req.body = JSON.parse(req.body.data);
      next();
    },
  
    validateMiddleware(projectValidation.createProjectValidationSchema),
    ProjectControllers.createProject
  );
  router.put(
    "/:projectId",
  
    (req: Request, res: Response, next: NextFunction) => {
      const folderName = "uploads";


      // Create the full path to the folder
      const folderPath = path.join(process.cwd(), folderName);
  
      // Create the folder if it doesn't already exist
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
  
      // Proceed to the next middleware
      next();
    },
    upload.single("file"),
    (req: Request, res: Response, next: NextFunction) => {


      req.body = JSON.parse(req.body.data);
      next();
    },
  
    validateMiddleware(projectValidation.createProjectValidationSchema),
    ProjectControllers.updateProject
  );
  router.get("/",ProjectControllers.getProjects)
  router.delete("/:project",ProjectControllers.deleteProject)

export const ProjectRoutes = router;