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
const updateBlog = catchAsync(async (req, res) => {
    const { blogId } = req.params;
    const result = await BlogServices.updateBlogIntoDB(
        blogId,
      req.file,
      req.body
    );
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  });
const getBlogs = catchAsync(async (req,res) => {
    const result = await BlogServices.getAllBlogsFromDB();
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "Blog created successfully!",
        data: result
    })
})
const deleteBlog = catchAsync(async (req,res) => {
    const {blogId} = req.params;
    await BlogServices.deleteBlogFromDB(blogId)
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "Blog deleted successfully!",

    })
})


export const BlogControllers = {
    createBlog,
    getBlogs,
    deleteBlog,
    updateBlog
}