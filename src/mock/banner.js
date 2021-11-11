import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: '我也不知道发生了什么',
    data: [{
        id: "1",
        midImg: "https://img2.baidu.com/it/u=1599686856,3352828935&fm=224&fmt=auto&gp=0.jpg",
        bigImg: "https://img2.baidu.com/it/u=1599686856,3352828935&fm=224&fmt=auto&gp=0.jpg",
        title: "凛冬将至",
        description: "人唯有恐惧的时候方能勇敢",
    },
    {
        id: "2",
        midImg: "https://img2.baidu.com/it/u=1599686856,3352828935&fm=224&fmt=auto&gp=0.jpg",
        bigImg: "https://img2.baidu.com/it/u=1599686856,3352828935&fm=224&fmt=auto&gp=0.jpg",
        title: "血火同源",
        description: "如果我回头，一切都完了",
    },
    {
        id: "3",
        midImg: "https://img2.baidu.com/it/u=1599686856,3352828935&fm=224&fmt=auto&gp=0.jpg",
        bigImg: "https://img2.baidu.com/it/u=1599686856,3352828935&fm=224&fmt=auto&gp=0.jpg",
        title: "听我怒吼",
        description: "兰尼斯特有债必偿",
    },
    ]
})