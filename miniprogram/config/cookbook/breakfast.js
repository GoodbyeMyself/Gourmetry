const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';

const baseUrl = 'https://gitee.com/GoodbyeMyself/gourmetry/raw/master/breakfast/';

const getImageUrl = (imageName) => {
    return `${baseUrl}${imageName}.jpg`;
};

const items = [
    {
        label: '豆浆油条',
        image: getImageUrl('doujiang'),
        id: 'b-1'
    },
    {
        label: '包子馒头',
        image: getImageUrl('baozi'),
        id: 'b-2'
    },
    {
        label: '鸡蛋饼',
        image: getImageUrl('jidanbing'),
        id: 'b-3'
    },
    {
        label: '小米粥',
        image,
        id: 'b-5'
    },
    {
        label: '燕麦片',
        image,
        id: 'b-6'
    },
    {
        label: '三明治',
        image,
        id: 'b-7'
    },
    {
        label: '面包牛奶',
        image,
        id: 'b-8'
    }
];

export default items;
