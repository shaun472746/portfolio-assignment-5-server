import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/middleware/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req,res) => {
    const result = await BlogServices.createBlogIntoDB(req.file,req.body);
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "Blog created successfully!",
        data: result
    })
})

const getBlogs = catchAsync(async (req,res) => {
    const result = await BlogServices.getAllBlogsFromDB();
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "Blog created successfully!",
        data: result
    })
})


export const BlogControllers = {
    createBlog,
    getBlogs
}