// 菜品列表
import categories from '../../config/categories.js';

Page({
    offsetTopList: [],
    data: {
        // 第一个页签的索引
        sideBarIndex: 0,
        // 滚动位置
        scrollTop: 0,
        // 商品列表
        categories,
        // 导航栏高度
        navbarHeight: 0,
        // 购物车
        cart: []
    },
    onLoad() {
        console.log(22222, '<- 打印 xxx');
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

        this.setData({
            sideBarIndex: value,
            scrollTop: 0
        });
    },
    onQuantityChange(event) {
        const cargo = event.currentTarget.dataset.cargo;

        const cart = this.data.cart;

        const existingCargo = cart.find(item => item.id === cargo.id);

        if (existingCargo) {
            existingCargo.quantity += 1;
        } else {
            cargo.quantity = 1;
            cart.push(cargo);
        }

        this.setData({
            cart: cart
        });

        console.log('购物车:', this.data.cart);
    }
});
