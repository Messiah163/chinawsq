<template>
    <div class="wrapper">
        <div>
            <img src="https://s3.bmp.ovh/imgs/2022/05/07/7eed04f9715c680d.png" style="width:100%;" alt="">
        </div>
        <div style="text-align:center;">
            <p style="padding:30px 0px 10px 0px;font-size:24px;">醉温之意不在酒，在乎山水之间也</p>
            <div style="font-size:13px;line-height:20px;opacity:.9;">
                <p>酒盒搭配上西湖风景的屏风，秒变精致的台灯</p>
            </div>
        </div>
        <div class="content">
            <div class="content_box">
                <div style="margin-top:30px;" v-for="item in 3" :key="item">
                    <div>
                        <img src="https://s3.bmp.ovh/imgs/2022/05/07/e43e67950be5e4cf.png" style="width:100%;" alt="">
                    </div>
                    <div style="display:flex;margin-top:5px;justify-content:space-between;">
                        <div style="margin-right:10px;">
                            <img src="https://s3.bmp.ovh/imgs/2022/05/07/8c338876a3446e9b.png" style="width:100%;" alt="">
                        </div>
                        <div>
                            
                            <img src="https://s3.bmp.ovh/imgs/2022/05/07/121dd7809d536f6b.png" style="width:100%;" alt="">
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.wrapper{
    padding-bottom:30px;
}
.content_box{
    width:60vw;
    margin: 0 auto;
}
</style>