import request from './request';
import "@/mock/banner";

export async function getBanners() {
    const resp = await request.get("/api/banner");
    return resp;
}