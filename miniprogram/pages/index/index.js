const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';

const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);

Page({
    offsetTopList: [],
    data: {
        // 第一个页签的索引
        sideBarIndex: 0,
        scrollTop: 0,
        categories: [{
            label: '早餐系列',
            title: '早餐系列',
            badgeProps: {},
            items
        }, {
            label: '健康蔬菜',
            title: '健康蔬菜',
            badgeProps: {
                dot: true,
            },
            items: items.slice(0, 10)
        }, {
            label: '无肉不欢',
            title: '无肉不欢',
            badgeProps: {},
            items
        }, {
            label: '来点主食',
            title: '来点主食',
            badgeProps: {},
            items: items.slice(0, 6)
        }, {
            label: '小吃甜点',
            title: '小吃甜点',
            badgeProps: {
                count: 8,
            },
            items: items.slice(0, 8)
        },{
            label: '饮料酒水',
            title: '饮料酒水',
            badgeProps: {
                count: 8,
            },
            items: items.slice(0, 8)
        }, {
            label: '特殊服务',
            title: '特殊服务',
            badgeProps: {},
            // disabled: true,
            items: items.slice(0, 8)
        }],
        navbarHeight: 0
    },
    onLoad() {
        this.getCustomNavbarHeight();
    },
    getCustomNavbarHeight() {
        const query = wx.createSelectorQuery();

        query.select('.banner').boundingClientRect();

        query.exec((res) => {
            const { height = 0 } = res[0] || {};
            this.setData({ navbarHeight: height });
        });
    },
    onSideBarChange(e) {
        const { value } = e.detail;
        console.log('---', value);
        this.setData({ sideBarIndex: value, scrollTop: 0 });
    }
});
