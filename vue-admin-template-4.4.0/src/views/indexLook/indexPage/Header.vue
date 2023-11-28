<template>
    <div>
      <div>
        <el-header>
          
          <el-row :gutter="20">
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <div class="logo">
                  <img src="/image/logo2.png" alt="hgwlogo">
                </div>
              </div>
            </el-col>
            <el-col :span="13">
              <!-- <div class="grid-content bg-purple"> -->
                <!-- <div class="center search_bar navSearch"> -->
                  <div class="navSearch">
                    <div class="search_content">
                      <el-input v-model="input"  clearable placeholder="请输入内容">
                      </el-input>
                    </div>
                    <div class="search_button">
                      <el-button type="primary" icon="el-icon-search" click="">搜索</el-button>
                    </div>
                  <!-- </div> -->
                <!-- </div> -->
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <ul class="front-right" >
                  
                  <li class="front_right_el">
                    <div>
                      <a href="">
                        <el-avatar icon="el-icon-s-custom"></el-avatar>
                      </a>
                    </div>
                    <span>会员</span>
                  </li>
                  
                  <li class="front_right_el">
                    <div>
                      <a href="">
                        <el-avatar icon="el-icon-star-off"></el-avatar>
                      </a>
                    </div>
                    <span>收藏</span>
                  </li>
                  
                  <li class="front_right_el">
                    <div>
                      <a href="">
                        <el-avatar icon="el-icon-message"></el-avatar> 
                      </a>
                      
                    </div>
                    <span>投诉</span>
                  </li>
                 <li class="front_right_el">
                    <div>
                      
                      <a href="baidu.com">
                        <el-button type="info" plain>投稿</el-button>
                      </a>
                    </div>
                 </li>
                  <li class="front_right_el">
                    <div>
                      <a href="">
                        <el-avatar :size="50" :src="circle1"></el-avatar>
                      </a>
                    </div>
                    <a href=""> <span>会员/登录</span></a>
                   
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
          <div class="navBox">
            <div class="navBoxFirst">
                <div class="logo">
                  <img src="/image/logo2.png"  alt="hgwlogo" style="height:100%">
                </div>
            </div>
            <div class="navBoxSecond">
                <div class="center search_bar navSearch">
                  <div class="navSearch">
                    <div class="search_content">
                      <el-input v-model="input"  clearable placeholder="请输入内容">
                      </el-input>
                    </div>
                    <div class="search_button">
                      <el-button type="primary" icon="el-icon-search" click="">搜索</el-button>
                    </div>
                  </div>
              </div>
            </div>
            <div class="navBoxThird">
              <ul class="front-right" >
                  
                  <li class="front_right_el">
                    <div>
                      <a href="">
                        <el-avatar icon="el-icon-s-custom"></el-avatar>
                      </a>
                    </div>
                    <span>会员</span>
                  </li>
                  
                  <li class="front_right_el">
                    <div>
                      <a href="">
                        <el-avatar icon="el-icon-star-off"></el-avatar>
                      </a>
                    </div>
                    <span>收藏</span>
                  </li>
                  
                  <li class="front_right_el">
                    <div>
                      <a href="">
                        <el-avatar icon="el-icon-message"></el-avatar> 
                      </a>
                      
                    </div>
                    <span>投诉</span>
                  </li>
                 <li class="front_right_el">
                    <div>
                      
                      <a href="baidu.com">
                        <el-button type="info" plain>投稿</el-button>
                      </a>
                    </div>
                 </li>
                  <li class="front_right_el">
                    <div>
                      <a href="">
                        <el-avatar :size="50" :src="circle1"></el-avatar>
                      </a>
                    </div>
                    <a href=""> <span>会员/登录</span></a>
                   
                  </li>
                </ul>
            </div>
          </div>
        </el-header>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        input: '',
  
        circle1:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      }
    }
  };
  </script>
  
  <style>
  * {
    margin: 0% 0%;
    padding: 0% 0%;
  }
  
  .el-header h1 {
    margin: 0% !important;
    width: 100%;
    text-align: center;
    color: #e9eef3;
    
  }
  
  .el-header {
  
    /* background-color: #b3c0d1; */
    color: #333;
    text-align: center;
    height: 100px !important;
    background-image: url(/image/banner4.jpg);
    background-size: 100%;
    background-position: center;
    /* background-attachment: fixed; */
  }
  .navBox {
    display: flex;
    justify-content: space-around;
    width: 90%;
    height: 50px;
    margin: auto;
    background-color: orchid;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .bg-purple-dark {
    background: #99a9bf;
  }
  
  .bg-purple {
    /* background: #d3dce6; */
   
  }
  
  
  
  .grid-content {
    border-radius: 4px;
    min-height: 80px;
    /* background-color: palegreen; */
    
  }
  .logo {
    height: 50px;
  }
  .logo img{
    height: 100%;
    /* background-attachment: fixed; */
  }
  .search_content{
    width: 600px;
    /* margin-top: 30px; */
    
  }
  .search_button{
    width: 100px;
    float: left;
    /* margin-top: 30px; */
    margin-left: 5px;
  }
  
  .front-right{
    list-style: none; 
    align-self:center;
    margin-top: 20px;
    /* background-color: #fff; */
  }
  .front_right_el{
    /* display: inline !important; */
    list-style: none;
    float: left;
    align-items: center;
    margin-left: 10px;
  }
  .front_right_el span{
      font-size: 13px;
      
    }
  .navSearch {
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
  }
  </style>