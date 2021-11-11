export default function(timeStamp, showTime = false) {
    //格式化时间
    const res = '';
    const date = new Date(+timeStamp);
    let months = date.getMonth() + 1;
    if (months < 10) {
        months = "0" + months;
    }
    let dates = date.getDate();
    if (dates < 10) {
        dates = "0" + dates;
    }
    if (showTime) {
        let hour = date.getHours().toString().padStart(2, '0');
        let minute = date.getMinutes().toString().padStart(2, '0');
        let second = date.getSeconds().toString().padStart(2, '0');
        return `${date.getFullYear()}-${months}-${dates} ${hour}:${minute}:${second}`;
    }
    return `${date.getFullYear()}-${months}-${dates}`;

}