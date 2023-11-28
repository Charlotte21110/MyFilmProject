<template>
    <div class="BigDiv">
        <nav>
            <div class="navbar">
                <div class="navbar-left">
                    <span class="website-name">想想看什么</span>
                </div>
                <div class="navbar-center" >
                    <el-input style="background-color: rgba(0, 0, 0, 0.314);" placeholder="搜索电影..." prefix-icon="el-icon-search" clearable v-model="searchQuery"></el-input>
                </div>
                <div class="navbar-right">
                    <el-avatar :src="userAvatar" size="medium" fit="cover"></el-avatar>
                    <el-button type="text" @click="showLoginDialog">登录</el-button>
                </div>
            </div>
        </nav>
        <main>
            <div class="bigBox">
                <div class="LeftNav">
                    <ul class="FilmNavUl">
                        <li class="FilmNavli liactive"><i class="el-icon el-icon-video-camera-solid"></i>影片详情</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-document-delete"></i>免费专区</li>
                        <li class="FilmNavli"><i class="el-icon-s-help"></i>会员影片</li>
                        <br>
                        <li class="FilmNavli"><i class="el-icon el-icon-more"></i>热门影评</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-fork-spoon"></i>动作</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-cold-drink"></i>爱情</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-watermelon"></i>动漫</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-s-open"></i>科幻</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-search"></i>历史记录</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-chat-line-round"></i>留言求片</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-s-data"></i>排行榜</li>
                        <li class="FilmNavli"><i class="el-icon el-icon-coin"></i>原神</li>
                    </ul>
                </div>

                <div class="RightMain">
                    <template v-for="film in filmInfo.rows">
                        <div class="MainSummaryTop" v-if="film.filmName === thisfilmName" :key="film.filmId">

                            <div class="MainSuTopL">
                                <div class="title">{{ film.filmName }}</div>
                                <div class="tag">{{ film.filmCategory }}</div>
                                <div class="summary">{{ film.filmSummary }}</div>
                                <div class="any"><span>时间：</span>{{ film.releaseTime }}</div>
                                <div class="any"><span>地区：</span>{{ film.filmArea }}</div>
                                <div class="any"><span>导演：</span>{{ film.director }}</div>
                                <div class="any"><span>主演：</span>{{ film.startingName }}</div>
                                <div class="any"><span>时长：</span>{{ film.duration }}</div>
                                <div class="any"><span>链接：</span>{{ film.filmUrl }}</div>
                                <div class="score">评分：9.0</div>
                                <div class="btnBox">
                                    <div class="btnBoxLeft">
                                        <el-button class="btnOrigin" icon="el-icon-video-camera">立即播放</el-button>
                                        <el-button class="btnGreen" icon="el-icon-star-off">收藏</el-button>
                                        <el-button class="btnRed" icon="el-icon-thumb">点赞</el-button>
                                    </div>
                                    <div class="btnBoxRight">更多详情查看</div>
                                </div>
                            </div>

                            <div class="MainSuTopR">
                                <img :src="film.imgUrl">
                            </div>


                        </div>
                        <div v-else :key="film.filmId">
                            <!-- 在不匹配的情况下渲染其他内容，或者留空 -->
                        </div>
                    </template>
                    <div class="MainSummaryButtom">
                        <div class="MSBtitle">
                            讨论
                        </div>
                        <div class="UserLogin">
                            <div class="head">
                                <img src="/image/marisa.jpg" width="100%">
                            </div>
                            <div class="inputBox">
                                <input class="inputBoxTest" type="text">
                            </div>
                            <div class="submitBox">
                                发送
                            </div>
                            <div class="loginAfter">
                                登录后才可以发言喵
                            </div>
                        </div>
                        <div class="discusstag">
                            <div class="hot">
                                热门
                            </div>
                            <div class="new">
                                最新
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
        <!-- <footer></footer> -->
    </div>
</template>

<script>
import filmDetails from '@/api/filmManage'
export default {
    data() {
        return {
            filmInfo: {},
            thisfilmName: '',
            imageUrl: ''
        }
    },
    created() {
        this.thisfilmName = this.$route.params.filmName;
        this.getFilmInfo()
    },
    methods: {
        async getFilmInfo() {
            try {
                const response = await filmDetails.getFilmMessage()
                this.filmInfo = response.data
            } catch (error) {
                console.error('电影信息获取失败', error)
            }
        },
        
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-thumb {
    height: 10px;
    border-radius: 10px;
    background-color: #c0bdbd;
}

.BigDiv {
    height: 100%;
    overflow-y: hidden;
}

nav {
    background-color: #383535;
    height: 50px;
}

footer {
    background-color: azure;
    height: 100px;
}

main {
    height: 100%;
}

.bigBox {
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #383535;
    overflow-y: scroll;
    overflow-x: hidden;
}

.LeftNav {
    width: 15%;
    height: 100%;
    background-color: black;

}

.RightMain {
    // 高度应该是随机的
    height: 100%;
    width: 85%;
    background-color: rgb(34, 34, 34);
    color: white;
    overflow: auto;
}

.MainSummaryTop {
    display: flex;
    justify-content: space-between;
    // height: 500px;
    padding: 40px 40px 50px;
    // background-color: rgba(255, 255, 255, 0.193);
}

.MainSuTopL {
    width: 80%;
    // background-color:rgb(86, 85, 86);
}

.title {
    font-size: 30px;
    font-weight: 500;
}

.tag {
    margin-top: 15px;
    height: 37px;
    width: 70px;
    text-align: center;
    line-height: 37px;
    background-color: #383535;
    border-radius: 8px;
}

.summary {
    margin-top: 35px;
    margin-bottom: 30px;
    font-size: 15px;
    line-height: 21px;
}

.any {
    margin-top: 5px;
}

.any span {
    font-weight: 600;
}

.score {
    margin-top: 15px;
    font-size: 18px;
    color: rgb(136, 199, 35);
}

.MainSuTopR {
    height: 300px;
    width: 220px;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    cursor: pointer;

}

.MainSuTopR img {
    transition: all 0.6s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.MainSuTopR img:hover {
    scale: 110%;
}

.btnBox {
    display: flex;
    justify-content: space-between;
}

.btnBoxLeft {
    display: inline-block;
    margin-top: 10px;
    width: 700px;
    height: 50px;
}

.btnBoxLeft :hover {
    scale: 105%;
}

.btnOrigin {
    float: left;
    height: 45px;
    width: 170px;
    // line-height: 45px;
    text-align: center;
    font-size: 19px;
    border-radius: 10px;
    background-image: linear-gradient(45deg, #d5ac5f, #fea101);
    cursor: pointer;
    transition: all 0.3s;

    ::v-deep {
        color: white;
    }
}

.btnGreen {
    float: left;
    height: 45px;
    width: 120px;
    margin-left: 15px;
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
    background-image: linear-gradient(45deg, #339a71, #33cc33);
    cursor: pointer;
    transition: all 0.3s;

    ::v-deep {
        color: white;
    }
}

.btnGreen:hover {
    color: pink;
}

.btnRed:hover {
    color: black;
}

.btnOrigin:hover {
    color: black;
}

.btnRed {
    float: left;
    height: 45px;
    width: 120px;
    margin-left: 15px;
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
    background-image: linear-gradient(45deg, #ff5e62, #ff2d47);
    cursor: pointer;
    transition: all 0.3s;

    ::v-deep {
        color: white;
    }
}

.btnBoxRight {
    margin-right: 10px;
    line-height: 45px;
}

.MainSummaryButtom {
    width: 1250px;
    height: 300px;
    padding: 50px 50px;
    margin: auto;
    color: black;
    background-color: white;
    border-radius: 50px 50px 0 0;
}

.MSBtitle {
    font-size: 30px;
}

.UserLogin {
    position: relative;
    margin-top: 20px;
    display: flex;
}

.UserLogin:hover .submitBox {
    background-color: #b75555;
}

.head {
    width: 50px;
    height: 50px;
}

.inputBox {
    height: 50px;
    width: 75%;
    margin-left: 30px;
    // background-color: rgb(136, 199, 35);
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.inputBoxTest {
    position: relative;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    line-height: 25px;
    background: transparent;
    border: none;
    outline: none;
}

.submitBox {
    width: 150px;
    height: 50px;
    line-height: 50px;
    margin-left: 30px;
    text-align: center;
    background-color: rgb(113, 172, 113);
    font-size: 20px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;

}

.loginAfter {
    position: absolute;
    left: 108px;
    top: 7px;
    width: 180px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background-color: #00C8C6;
    border-radius: 20px;
    color: white;
}

.discusstag {
    display: inline-block;
    margin-top: 25px;
}

.hot {
    float: left;
    height: 30px;
    width: 70px;
    background-color: #FFF2EE;
    line-height: 30px;
    text-align: center;
    color: #fe7b01;
    border: 1px solid;
    border-radius: 20px;
    font-size: 15px;
}

.new {
    float: left;
    height: 30px;
    width: 70px;
    margin-left: 20px;
    background-color: #ECEBEB;
    line-height: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.471);
    border-radius: 20px;
    font-size: 15px;
}

.FilmNavUl {
    padding: 30px 0;
}

.FilmNavUl :hover {
    color: orange;
}

.FilmNavli {
    font-family: Simsun, '宋体', Arial, sans-serif;
    height: 45px;
    line-height: 45px;
    padding-left: 47px;
    color: white;
    font-size: 20px;
    list-style: none;
    letter-spacing: 1px;
    font-weight: 500;
    cursor: pointer;
}

.liactive {
    color: #fea101;
}

.FilmNavli i {
    margin-right: 10px;
}

// 导航栏
.navbar {
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #333; /* 背景颜色 */
  color: white;
}

.navbar-left {
  flex: 1;
  padding-left: 20px; /* 左边距 */
}

.navbar-center {
  flex: 2;
  text-align: center;
}

.navbar-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px; /* 右边距 */
}

.website-name {
  font-size: 24px; /* 网站名字字体大小 */
  font-weight: bold; /* 网站名字字体粗细 */
}

.el-avatar {
  margin-right: 10px; /* 用户头像右边距 */
}

.el-input {
  width: 300px; /* 搜索框宽度 */
  ::v-deep {
    background-color: rgba(0, 0, 0, 0.871)!important;
  }
}

</style>