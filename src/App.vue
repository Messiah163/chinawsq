<script setup>
import axios from 'axios'
  let nav = ref([
    {name:'首页',path:'/'},
    {name:'品牌故事',path:'/page2'},
    {name:'企业文化',path:'/page3'},
    {name:'山水屏风',path:'/page4'},
    // {name:'招商合作',path:''}
  ])
  let navIndex = ref(0)
  function navClick(index) {
    navIndex.value = index
  }
  onMounted(() => {
    
    // axios.post('/api/user/getToken').then(res => {
    //   console.log(res)
    // })
  })
</script>
<template>
  <div>
    <div class="header">
      <div class="left">
        <img class="logo" src="./assets/logo.png" alt="">
      </div>
      <div class="nav">
          <div v-for="(item,index) in nav" :key="index">
            <router-link :to="item.path" @click="navClick(index)">
              <span :class="index === navIndex?'selectIndex' : ''">{{item.name}}</span>
            </router-link>
          </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #ddd9d1;
    padding: 0px 30%;
  }
  .nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 14vw;
    color: #666;
  }
  .nav>div{
    font-size: 12px;
    width: 100px;
    text-align: center;
    cursor:pointer;
  }
  .nav>div:hover{
      color: red;
  }
  .nav>div>a{
    text-decoration: none;
    color: #000;
  }
  .nav>div>a:hover{
      color: red;
  }
  .logo{
    height: 50px;
  }
  .selectIndex{
	color:red;
}
.active{
  color: red;
}
</style>
