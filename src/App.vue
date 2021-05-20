<template>

  <div id="app">
    <!--
    <div id="login">
      <div class="login">
        <div class="title">
          <img style="height:40px;" src="./assets/logo.png" alt="logo图片加载失败">
          <span style="border-left:1px solid; font-size:40px;
          padding: 30px; ">资源管理平台</span>
        </div>
        <div class="content" style="display:flex;flex-direction:column;
        margin:0; padding:0;">
          <div class="notice" style="width: 50%;
          padding: 16px 26px;
          box-sizing: border-box;
          color: #fff;
          padding-top: 0.2rem;
          padding-right: 0.4rem;
          padding-bottom: 0.2rem;
          padding-left: 0.4rem;
          background-color: rgba(0, 0, 0, 0.4);
          background-position-x: 0%;
          background-position-y: 0%;
          background-repeat: repeat;
          background-attachment: scroll;
          background-image: none;
          background-size: auto;
          background-origin: padding-box;
          background-clip: border-box;
          ">
          <h3>
            <i class="el-icon-bell">
            </i>
            通知
          </h3>
          <p style="white-space:pre-wrap;">
            1、请使用校园认证帐号和密码登录。2、若提示密码强度太弱，请在校园网认证系统中修改密码为强密码（6-12位，包含三种字符）或在新微校中重置密码后，再次登录。
          </p>
          </div>
          <div class="form" style="width: 50%;
              box-sizing: border-box;
              background: #fff;
              padding: 30px 26px 20px;
              display: flex;
              flex-direction: column;">
            <div class="el-input el-input--prefix el-input--suffix">
              <el-input class="el-input_inner" type="text" autocomplete="off"
                  placeholder="请输入用户名">
                <span class="el-input_prefix">
                  <i class="el-input__icon el-icon-user" >
                  </i>
                </span>
              </el-input>
            </div>
            <div class="el-input el-input--prefix el-input--suffix">
              <el-input class="el-input_inner" type="password" autocomplete="off"
                placeholder="请输入密码">
              <span class="el-input_prefix">
                <i class="el-input__icon el-icon-lock">
                </i>
              </span>
              </el-input>
            </div>

            <div class="verify">
              <div class="el-input el-input--suffix">
                <input class="el-input_inner" type="text" autocomplete="off"
                placeholder="请输入验证码">
              </div>
              <img src="">
            </div>

            <button class="el-button el-button--primary is-round"
              type="button">
              <span>登录
              </span>
            </button>
            <div class="other">
            </div>

          </div>

      </div>

      </div>
    </div>
-->
<div>
    <router-link to="/about">Home</router-link> |
    <router-link to="/nao">闹钟</router-link>
</div>
  <router-view />
  <Todo>
    <Todotitle slot="Todotitle" v-bind:title="title"></Todotitle>

    <Todocontent slot="Todocontent"
      v-for="(item,index) in contents"
      :key="index"
      v-bind:item=item
      v-on:remove="removeContent(index)">
    </Todocontent>
  </Todo>
    <span v-if="type=='3'">苹果</span>
    <span v-else-if="type=='2'">香蕉</span>
  <br>
  <span >{{type | articleType }}</span>
  <el-button type="warning" disabled>{{type | articleType }}</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>

    <button @click="changes"> 改变</button>
    <el-table :data="num3">
    <el-table-column prop="fruit" label="来源" header-align="center" align="right" width="150">

    </el-table-column>
    </el-table>

    <h1 ref="h1Ele">
      这是h1
    </h1>
    <Todotitle ref="ho"></Todotitle>
    <button @click="getref"> 获取和h1元素</button>

<div>
    <!-- <div v-for="(item, index) in list" :key="index" style="">
        <img v-lazy="gg(src,index+20+item)" style="float:left;height:300px; width:200px;"/>
        <img v-lazy="gg(src,index+10)"
        style="float:right;height:300px;width:200px;" />
    </div> -->
    <img v-lazy="src" style="height:300px; width:200px;" >
</div>
  </div>
</template>

<script>
import Todotitle from './components/Todotitle.vue';
import Todocontent from './components/Todocontent.vue';
import Todo from './components/Todo.vue';

export default {
  data() {
    return {
      title: '标题1',
      contents: ['神舟', '华硕', '联想'],
      type: 1,
      count: 1,
      num3: [
        { fruit: '苹果' },
        { fruit: '西瓜' },
      ],
      tt: false,
      src: 'https://source.unsplash.com/random',
      list: ['神舟', '华硕', '联想', '神舟', '华硕', '联想', '神舟', '华硕', '联想', '神舟', '华硕', '联想'],
    };
  },
  methods: {
    removeContent(index) {
      this.contents.splice(index, 1);
    },
    changes() {
      // eslint-disable-next-line no-console
      console.log(this.type);
      this.type = 2;
      return this.type + 1;
    },
    getref() {
      // eslint-disable-next-line no-console
      console.log(this.$refs.h1Ele.innerText);
      this.$refs.h1Ele.style.color = 'red';

      // eslint-disable-next-line no-console
      console.log(this.$refs.ho.title);
      // eslint-disable-next-line no-console
      console.log(this.$refs.ho.test);
    },
    gg(u, index) {
      return `${u}?t=${index}`;
    },
    getRandomInt(min, max) {
      const data = Math.floor(Math.random() * (max - min + 1)) + min;
      // eslint-disable-next-line no-console
      console.log(data);
      return data;
    },
  },
  components: {
    Todotitle,
    Todocontent,
    Todo,
  },
  filters: {
    articleType(type) {
      let returnValue = false;
      // eslint-disable-next-line default-case
      switch (type) {
        case 2:
          returnValue = '西瓜';

          break;
        case 3:
          returnValue = '橘子';
          break;
      }
      return returnValue;
    },
  },

};
</script>
