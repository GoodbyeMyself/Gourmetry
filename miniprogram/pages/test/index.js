// index.js
Page({
    onLoad() {
        console.log(1111, '<- 打印 xxx');
        // 假设从全局数据中获取购物车商品列表
        // const cart = getApp().globalData.cart;
        
        // console.log(cart, '<- 打印 cart');
    }
});

Component({
    methods: {
        handleBack() {
            wx.reLaunch({
                url: '/pages/index/index'
            });
        }
    }
});
