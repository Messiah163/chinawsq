<template>
    <div class="wrapper">
        <el-carousel :interval="500000" arrow="always" :height="height">
            <el-carousel-item v-for="item in 4" :key="item">
                <img src="https://s3.bmp.ovh/imgs/2022/05/07/1b7ef32107e1cdf6.jpg" style="width:100%;" alt="" ref="img" @load="img">
            </el-carousel-item>
        </el-carousel>
        <div class="content">
            <div class="content_box">
                <p style="padding:30px 0px 20px 0px;font-size:24px;">
                    这是来自大自然的馈赠-西礼湖图
                </p>
                <div style="font-size:13px;line-height:20px;opacity:.9;">
                    <p>"西礼湖图"的由来</p>
                    <p>西礼——是指酒瓶参考了三潭印月的外形，所呈现出来的正是-西湖的礼物</p>
                    <p>湖图——是指产品屏风上所展示出湖里秀美的风景图画既-湖里的图画;"湖图"又名"糊涂",指人生难得糊涂的乐观豁达的心态</p>
                    <p>一塔一风景,一湖一美酒</p>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:30px;">
                    <div style="width:49.4%;">
                        <img src="https://s3.bmp.ovh/imgs/2022/05/07/7b0e4de79a7712b4.png" style="width:100%;" alt="">
                    </div>
                    <div style="width:50%;display:flex;flex-direction:column;justify-content:space-between;">
                        <img src="https://s3.bmp.ovh/imgs/2022/05/07/df23d685905c6cb5.png" style="width:100%;" alt="">
                        <img src="https://s3.bmp.ovh/imgs/2022/05/07/30b6cf2d927b8cce.png" style="width:100%;" alt="">
                        <img src="https://s3.bmp.ovh/imgs/2022/05/07/faf631ac9fc918c9.png" style="width:100%;padding-bottom:4px;" alt="">
                    </div>
                </div>
                <h3 style="padding:60px 0px 20px 0px;">
                    简约而不简单
                </h3>
                <div style="font-size:13px;line-height:20px;opacity:.9;">
                    <p>西礼湖图酒是首款将“绿色环保”理念融入到产品当中的酒﹐旗下产品有着独特的产品设计理念︰喝完的酒瓶可做摆件﹐酒盒可当台灯﹐实现产品全周期的绿色环保﹐提高行业绿色化水平</p>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:30px;">
                    <img src="https://s3.bmp.ovh/imgs/2022/05/07/6ed1c78ae1a408bc.jpg" style="width:49.7%;" alt="">
                    <img src="https://s3.bmp.ovh/imgs/2022/05/07/ebf24fff43f75a4e.jpg" style="width:49.7%;;" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { proxy } = getCurrentInstance()
let height = ref(0);
onMounted(() => {
    window.addEventListener('resize',() => {
        img()
    })
})
function img(){
    height.value = proxy.$refs.img.height+'px';
}
</script>
<style scoped>
.content_box{
    width: 60vw;
    margin: 0 auto;
}
.content{
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; */
    /* font-size: 13px;
     */
}
.wrapper{
    height: 100%;
    padding-bottom: 50px;
}

</style>