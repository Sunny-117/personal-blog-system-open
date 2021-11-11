import request from './request';
import "@/mock/blog";


//获取博客分类
export async function getBlogCategories() {
    const resp = await request.get("/api/blogtype");
    return resp;
};

// 获取博客列表数据
export async function getBlogs(page = 1, limit = 100, categoryid = -1) {
    const resp = await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid
        }
    });
    return resp;
}

//获取单个博客的数据
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}


//提交评论
export async function postComments(commentInfo) {
    return await request.post('/api/comment', commentInfo)
}

//分页获取评论
export async function getComment(blogId, page = 1, limit = 10) {
    const resp = await request.get('/api/comment', {
        params: {
            blogId,
            page,
            limit
        }
    })
    return resp;
}