import request from './request';
import "@/mock/setting";


export default async function getSetting() {
    const resp = await request.get('/api/setting');
    return resp;
}