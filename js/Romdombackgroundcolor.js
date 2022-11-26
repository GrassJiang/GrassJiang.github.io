// 随机背景颜色
var color = [
    "#FFA500",
    "#BDB76B",
    "#8FBC8F",
    "#AFEEEE",
    "#87CEFA",
    "#E6E6FA",
    "#DB7093",
    "#F0FFFF",
    "#F0F8FF"
];
document.getElementById("emotion").style.backgroundColor = color[Math.floor(Math.random() * color.length)]
