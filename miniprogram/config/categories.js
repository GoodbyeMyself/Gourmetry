// 早餐
import breakfast from './cookbook/breakfast.js';
// 素菜
import vegetables from './cookbook/vegetables.js';
// 荤菜
import meatDishes from './cookbook/meatDishes.js';
// 主食
import mainDishes from './cookbook/mainDishes.js';
// 小吃
import snacks from './cookbook/snacks.js';
// 饮品
import drinks from './cookbook/drinks.js';
// 特殊服务
import specialServices from './cookbook/specialServices.js';

export default [
    {
        label: '早餐系列',
        title: '早餐系列',
        icon: 'microphone-2',
        badgeProps: {},
        items: breakfast
    }, {
        label: '健康蔬菜',
        title: '健康蔬菜',
        icon: 'lighthouse',
        badgeProps: {
            dot: true,
        },
        items: vegetables
    }, {
        label: '无肉不欢',
        title: '无肉不欢',
        icon: 'statue-of-jesus',
        badgeProps: {},
        items: meatDishes
    }, {
        label: '来点主食',
        title: '来点主食',
        icon: 'merge-cells',
        badgeProps: {},
        items: mainDishes
    }, {
        label: '小吃甜点',
        title: '小吃甜点',
        icon: 'application',
        badgeProps: {
            count: 8,
        },
        items: snacks
    }, {
        label: '饮料酒水',
        title: '饮料酒水',
        icon: 'dashboard-1',
        badgeProps: {
            count: 8,
        },
        items: drinks
    }, {
        label: '特殊服务',
        title: '特殊服务',
        icon: 'flip-to-front',
        badgeProps: {},
        items: specialServices
    }
];
