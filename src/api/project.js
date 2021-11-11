import request from "./request";
import "@/mock/project";

export default async function getProject() {
    const resp = await request.get('/api/project');
    return resp;
}
async function gets() {
    const resp = await getProject();
    console.log(resp);
}
window.gets = gets;