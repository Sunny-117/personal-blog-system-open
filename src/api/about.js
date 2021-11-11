import request from "./request";
import "@/mock/about";

export default async function getAbout() {
    const resp = await request.get("/api/about");
    return resp;
}