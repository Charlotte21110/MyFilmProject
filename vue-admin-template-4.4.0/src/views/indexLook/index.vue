<template>
    <div>
        <Header></Header>
        跳转按钮
        <el-button class="loginBtn" @click="toLogin()" icon="el-icon-user-solid" circle></el-button>

        <div class="others">
            <div>
                <div class="slider">
                    <el-carousel :interval="4000" type="card" height="380px">
                        <el-carousel-item v-for="image in images" :key="image.id">
                            <img src="require('@/assets/${image.url}')" alt="">
                        </el-carousel-item>
                    </el-carousel>

                </div>
                <div class="movie_box">
                    <div class="panel">

                        <div class="panel_header">
                            <span class="panel_title">
                                <span class="textcolor_red">
                                    <b>热门推荐</b>
                                </span>
                                <span class="panel_more">
                                    <a href="" class="">
                                        <span span>全部</span><i class="el-icon-arrow-right"></i>
                                    </a>
                                </span>
                            </span>
                        </div>
                        <div class="filmBigBox">
                            <ul class="filmAllUl">
                                <li class="filmAllLi" v-for="film in filmInfo.rows" :key="film.filmId">
                                    <div class="filmBox" @click="toFilmDetails(film.filmName)">
                                        <div class="filmBoxImg">
                                            <img :src="film.imgUrl">
                                        </div>
                                        <div class="filmBoxTitle">
                                            {{ film.filmName }}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>


        <Footer></Footer>
    </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import filmDetails from '@/api/filmManage'
import Header from "./indexPage/Header.vue";
import Footer from "./indexPage/Footer.vue";

export default {
    components: { Header, Footer },
    data() {
        return {
            filmInfo: {},
            images: [
                { id: 1, url: '../../assets/fengshen.png' },
                { id: 2, url: '../../assets/fengshen.png' },
                { id: 3, url: '../../assets/fengshen.png' },
                { id: 4, url: '../../assets/fengshen.png' },]
        }
    },
    created() {
        this.getFilmInfo()
    },
    // beforeRouteEnter(to, from, next) {
    //     const hasToken = getToken()
    //     if (hasToken) {
    //         next("/dashboard")
    //     } else {
    //         next()
    //     }

    // },
    methods: {
        toLogin() {
            this.$router.push("/login")
        },
        toFilmDetails(filmName) {
            // this.$router.push("/filmDetails")
            this.$router.push({ name: 'filmDetails', params: { filmName: filmName } })
        },
        async getFilmInfo() {
            try {
                const response = await filmDetails.getFilmMessage()
                this.filmInfo = response.data
            } catch (error) {
                console.error('电影信息获取失败', error)
            }
        }
    },

}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-thumb {
    height: 10px;
    border-radius: 10px;
    background-color: #c0bdbd;
}
.loginBtn {
    background-color: pink;

    ::v-deep i {
        color: red;
    }
}

.filmBigBox {
    // height: 1300px;
    width: 98%;
    margin: 40px auto;
    background-color: rgba(0, 0, 0, 0.078);
    border: 2px saddlebrown solid;
    border-radius: 50px;
    padding-bottom: 20px;
}

.filmAllUl {
    width: 1400px;
    margin: auto;
    padding: 10px 10px 10px 10px;
    
    // background-color: aqua;
    // overflow: hidden;
    // clear: both;
}
.filmAllUl::after {
    content: ".";
    display: block;
    clear: both;
    height: 0;
}

.filmAllLi {
    float: left;
    list-style: none;
    margin: 5px;
    // 这里怎么清除浮动
 
}

.filmBox {
    height: 350px;
    width: 220px;
    margin-top: 34px;
    // background-color: burlywood;
}

.filmBigBox :hover.filmBoxImg {
    // border: 3px solid rgb(55, 124, 198);
    box-shadow: 0 0 15px rgb(55, 124, 198);
    /* 添加阴影 */
}

.filmBoxImg {
    height: 300px;
    width: 220px;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.6s;
}

.filmBoxImg img {
    transition: all 0.6s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.filmBoxImg :hover {
    scale: 110%;
}

.filmBoxTitle {
    width: 220px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    color: white;
    margin-top: 7px;
    background-color: black;
    cursor: pointer;
}

// 处理代码开始
.others {
    width: 95%;
    margin: auto;
    // background-color: antiquewhite;
}


.el-main {
    background-color: #d3dce6;
    color: #333;
    /* line-height: 500px; */

    width: 100%;

}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    align-items: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.slider {
    width: 80%;
    margin: auto;
    text-align: center;
    margin-top: 20px;

}

.movie_box {
    // width: 80%;
    margin: auto;
    margin-top: 30px;
    // background-color:#333;
}

.textcolor_red {
    font-size: 25px;
}

.panel_more {
    display: inline-flex;
    float: right;
    margin-right: 100px;
}

.movie_poster {
    width: 220px;
    height: 280px;
    display: flex;
    margin-top: 20px;

}


.movie_score {
    float: right;
    display: inline-flex;
    margin-left: 20px;
}

.integer {
    font-size: 22px;
    color: goldenrod;
}

.faction {
    font-size: 18px;
    color: goldenrod;
}


// 处理代码结束
</style>