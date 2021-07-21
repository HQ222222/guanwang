<template>
  <!-- <div class="box">
    <ul class="aa" :style="{left:-leftPosition+'px'}">
      <li >
        <img src="../assets/head2.jpg">
      </li>
      <li ><img src="../assets/head2.jpg"></li>
      <li ><img src="../assets/head2.jpg"></li>
    </ul>
  </div> -->
  <div>
    <!--  提示框 -->
    <a-alert
          v-if="visible33"
          message="取消设备成功"
          type="success"
          closable
        />
    <a-alert
        v-if="visible1"
        message="删除设备成功"
        type="success"
        closable
      />
    <a-alert
          v-if="visible22"
          message="订阅设备成功"
          type="success"
          closable
        />
    <!-- 左边 -->
  <div style="width:30%;padding: 10px;
              margin-top: -40px;
              float: left;">
    <div style="border:1px solid #d3d3d3;
              margin-top:40px; width:100%;padding: 10px;
              text-align:center;height: 100px;">
      <h2>用于确保连接是否可用</h2>
      <a-button type="primary" @click="subHeart" id="bt" style="width: 96%;" block>发送心跳</a-button>
    </div>

    <div style="border:1px solid #d3d3d3;
              margin-top:10px; width:100%;padding: 10px;
              text-align:center;height: 150px;">
      <h2>添加设备</h2>
      <a-input name="register_imei" id="register_imei" placeholder="16个数字" />
      <a-button type="primary" id="bt" @click="subRegister"
                style="width: 96%; margin: 10px;" block>确认添加</a-button>

    </div>
    <div style="border:1px solid #d3d3d3;
              margin-top:10px; width:100%;padding: 10px;
              display: block;
              text-align:center;height: 320px;">
      <h2>发布的数据显示</h2>
      <!-- <textarea type="text" name="pub" id="pub" rows="3" cols="80"></textarea> -->
      <a style="display:block">发送对象IMEI号:</a>
      <textarea type="text" name="pub" id="pub"
              style="width: 80%; height: 20%;" disabled></textarea>
      <a style="display:block">发送对象token:</a>
      <textarea type="text" name="pub-token" id="pub-token"
                style="width: 80%; height: 20%;" disabled />
      <a style="display:block">发送内容:</a>
      <textarea type="text" name="pub-msg" id="pub-msg"
                style="width: 80%; height: 20%;" disabled />

     </div>

  </div>
    <!-- 右边 -->
    <div style="border:1px solid #d3d3d3;
              margin-top:10px; width:70%;padding: 40px;
              float: right;
              text-align:center;">
        <h2>设备浏览</h2>
        <div v-for="item,index in newob " :key="index" style="display:inline-block; margin: 30px;">
          <a-card hoverable style="width: 300px">
            <img
              slot="cover"
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
              <template slot="actions" class="ant-card-actions">
                <a-icon key="setting" type="upload"  @click="toemit(item)"/>
                <a-icon key="edit" type="edit" @click="toEdit(item,index)"/>
                <a-icon key="ellipsis" type="delete"
                        @click="subDelete1(item.title1,item.token1,index)"/>
              </template>
            <a-card-meta :title='item.title1' :description='item.token1'>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-card-meta>
        </a-card>
        </div>

        <div style="border:1px solid #d3d3d3;
                margin-top:10px; width:100%;padding: 10px;
                display: block;
                text-align:center;height: 75px;">
            <a-button type="primary" @click="showModal">删除设备</a-button>
            <a-button type="primary" @click="showModal2" style="margin:10px">请求订阅设备</a-button>
            <a-button type="primary" @click="showModal5">取消订阅设备</a-button>
      </div>
    </div>

    <!-- <b>1、添加设备</b>
    <br>设备IMEI号:
<br>
  <div v-for="item,index in newob " :key="index" style="display:inline-block; margin: 30px;">
    <a-card hoverable style="width: 300px">
      <img
        slot="cover"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
        <template slot="actions" class="ant-card-actions">
          <a-icon key="setting" type="upload"  @click="toemit(item)"/>
          <a-icon key="edit" type="edit" @click="toEdit(item,index)"/>
          <a-icon key="ellipsis" type="delete" @click="subDelete1(item.title1,item.token1,index)"/>
         </template>
      <a-card-meta :title='item.title1' :description='item.token1'>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-card-meta>
  </a-card>
  </div> -->
    <!-- 弹窗 -->
      <a-modal v-model="visible4" title="数据发布" on-ok="handleOk4">
        <template  slot="footer">
          <a-button key="back" @click="handleCancel4">
            Return
          </a-button>
          <a-button key="submit" type="primary"
                    :loading="loading4" @click="handleOk4(edit_mc.index)">
            Submit
          </a-button>
        </template>
          <p>源设备IMEI号:</p>
            <a-input type="text" name="pub_imei" id="pub_imei" :value="emit_ms.title1" disabled />
          <p>设备token</p>
            <a-input type="text"
              name="pub_imei_token" id="pub_imei_token" :value="emit_ms.token1" disabled />
          <p>内容</p>
            <a-input type="text" name="pub_imei_content" id="pub_imei_content" placeholder="AE"/>

      </a-modal>

      <a-modal v-model="visible3" title="修改设备" on-ok="handleOk3">
        <template  slot="footer">
          <a-button key="back" @click="handleCancel3">
            Return
          </a-button>
          <a-button key="submit" type="primary"
                    :loading="loading3" @click="handleOk3(edit_mc.index)">
            Submit
          </a-button>
        </template>
          <p>源设备IMEI号:</p>
            <a-input type="text" name="src_imei" id="src_imei" v-model="edit_mc.title1" disabled/>
          <p>源设备token:</p>
            <a-input type="text" name="src_imei_token"
                      id="src_imei_token"  v-model="edit_mc.token1" disabled/>
          <p>新设备IMEI号:</p>
              <a-input type="text" name="dst_imei" id="dst_imei"/>
          <p>新设备备注:</p>
              <a-input type="text" name="dst_comment"
                id="dst_comment" placeholder="LoRa传感器终端" />
      </a-modal>

    <a-modal v-model="visible" title="删除设备" on-ok="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          Return
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          Submit
        </a-button>
      </template>
      <p>设备IMEI号:</p>
      <a-input type="text" name="delete_imei"
              id="delete_imei" placeholder="2020051022440099" />
      <p>设备token:</p>
      <a-input type="text" name="delete_imei_token"
              id="delete_imei_token" placeholder="4868ca29077c464ae6e577a6114b385b"/>
    </a-modal>

      <a-modal v-model="visible2" title="请求订阅设备" on-ok="handleOk">
          <template slot="footer">
            <a-button key="back" @click="handleCancel2">
              Return
            </a-button>
            <a-button key="submit" type="primary" :loading="loading2" @click="handleOk2">
              Submit
            </a-button>
          </template>
          <p>设备IMEI号:</p>
            <a-input type="text"
                  name="sub_imei" id="sub_imei" placeholder="2020051022440099"/>
          <p>设备token:</p>
            <a-input type="text"
                  name="sub_imei_token" id="sub_imei_token" />
      </a-modal>

      <a-modal v-model="visible5" title="取消订阅设备" on-ok="handleOk5">
      <template slot="footer">
        <a-button key="back" @click="handleCancel5">
          Return
        </a-button>
        <a-button key="submit" type="primary" :loading="loading5" @click="handleOk5">
          Submit
        </a-button>
      </template>
      <p>设备IMEI号:</p>
        <a-input type="text" name="unsub_imei" id="unsub_imei" placeholder="2020051022440099" />
      <p>设备token:</p>
        <a-input type="text" name="unsub_imei_token" id="unsub_imei_token"
                placeholder="4868ca29077c464ae6e577a6114b385b" />
      </a-modal>

    <div style="width: 100%;">
      <div style="align:center">
        <h2 style="font-size:20px;align:center;margin-left:650px;">本次接收的数据为:(前2bit为温度，后2bit为湿度)</h2>
        <input id="zhanshi" disabled />
      </div>
      <div id="main" style="margin-left:100px; width:90%;height:400px; align:center;"></div>
    </div>

  </div>
</template>

<style scoped>
/* img{
  width: 100%;
  height: 100%;
}
  li{
    float: left;
    width: 250px;
    height: 250px;
  }
  .aa{
    width: 800px;
    position: relative;
    transition: left 1s;
    margin-top: 0px;
    margin-left: -0px;
  }
  .box{
    width: 250px;
    height: 250px;
    overflow: hidden;
    border: 1px solid;
  } */
  #zhanshi {
    font-size: 100px;
    display: block;
    margin-left:230px;
    text-align: center;
    text-shadow:
    1px 1px 0 #CCC,
    2px 2px 0 #CCC,
    3px 3px 0 #444,
    4px 4px 0 #444,
    5px 5px 0 #444,
    6px 6px 0 #444;

  }
</style>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      newob: [
        {
          title1: '2020060141802706',
          token1: '018c69edbbbf59224ca2b903dddfbe96',
        },
        {
          title1: '黄庆',
          token1: '41802706',
        },
      ],
      leftPosition: 0,
      count: 0,
      ws: null,
      websocket_token: null,
      target: 'ws://172.16.65.67:8080',
      edit_mc: {},
      emit_ms: {},
      loading: false,
      visible: false,
      visible1: false,
      visible2: false,
      loading2: false,
      visible3: false,
      loading3: false,
      visible4: false,
      loading4: false,
      visible5: false,
      loading5: false,
      visible22: false,
      visible33: false,

      siz: 0,
      option: {
        title: {
          text: '温湿度变化折线图',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['温度', '湿度'],
        },
        xAxis: {
          type: 'category',
          data: [0],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          name: '温度',
          data: [0],
          type: 'line',
        },
        {
          name: '湿度',
          data: [100],
          type: 'line',
        },
        ],
      },
    };
  },

  methods: {
    // 发送心跳
    subHeart() {
      const type = 'heart';
      const msgs = `{"type":"${type}"}`;
      this.ws.send(msgs);
    },
    zeng(wen, shi) {
      this.siz += 1;
      this.option.xAxis.data.push(this.siz);
      this.option.series[0].data.push(wen);
      this.option.series[1].data.push(shi);
      this.echart1();
    },
    echart1() {
      const chartDom = document.getElementById('main');
      const myChart = echarts.init(chartDom);
      // eslint-disable-next-line no-unused-expressions
      this.option && myChart.setOption(this.option);
    },
    handleMessageIot(event) {
      const obj = JSON.parse(event.data);
      if (obj.type === 'heart') {
        // eslint-disable-next-line no-alert
        alert(`数据服务器来的应答心跳${event.data}`);
      }

      if (obj.type === 'register') {
        // eslint-disable-next-line no-console
        console.log(obj.token);
        // document.getElementById('return_register_imei').value = event.data;
        // this.cardTitle = obj.address;
        // this.cardes = obj.token;
        const a = {
          title1: obj.address,
          token1: obj.token,
        };
        if (a.token1 !== undefined) {
          this.newob.push(a);
        } else {
          // eslint-disable-next-line no-alert
          alert('这个设备IMEI号已经被使用了，无法添加此设备!');
        }
        // console.log(this.newob);
      }
      if (obj.type === 'delete') {
        // document.getElementById('return_delete_imei').value = event.data;
        this.visible1 = true;
        setTimeout(() => {
          this.visible1 = false;
        }, 3000);
      }
      if (obj.type === 'update') {
        // document.getElementById('return_update_bimei').value = event.data;
        const b = {
          title1: obj.dst_msg,
          token1: obj.src_token,
        };
        this.newob.push(b);
        // alert('修改成功!');
      }
      if (obj.type === 'address') {
        // document.getElementById('return_sub_imei').value = event.data;
        this.visible22 = true;
        // eslint-disable-next-line no-console
        console.log('address');
        setTimeout(() => {
          this.visible22 = false;
        }, 3000);
      }

      if (obj.type === 'content') {
        // obj.msg.subStr();
        const h = obj.msg.replaceAll(' ', '');
        const s = [...h];
        const a = parseInt(s.slice(0, 4).toString().replaceAll(',', ''), 16);
        const b = parseInt(s.slice(4, 8).toString().replaceAll(',', ''), 16);
        document.getElementById('zhanshi').value = obj.msg;
        this.zeng(a, b);
      }
      if (obj.type === 'unsub') {
        this.visible33 = true;
        // eslint-disable-next-line no-console
        console.log('unsub');
        setTimeout(() => {
          this.visible33 = false;
        }, 3000);
      }
    },
    // 添加设备
    subRegister() {
      const type = 'register';
      const msg = document.getElementById('register_imei').value;
      // eslint-disable-next-line no-console
      console.log(msg);
      const comment = 'NB-IoT黑色板子';
      const msgs = `{"type":"${type}","msg":"${msg}","comment":"${comment}"} `;
      this.ws.send(msgs);
    },
    // 删除设备
    subDelete() {
      const type = 'delete';
      const msg = document.getElementById('delete_imei').value;
      const token = document.getElementById('delete_imei_token').value;
      const msgs = `{"type":"${type}","msg":"${msg}","token":"${token}"} `;
      this.ws.send(msgs);
    },
    // 修改设备
    subUpdate(index) {
      const type = 'update';
      // eslint-disable-next-line camelcase
      const src_msg = this.edit_mc.title1;
      // eslint-disable-next-line no-console
      console.log(this.edit_mc.title1);
      // eslint-disable-next-line camelcase
      const src_token = this.edit_mc.token1;
      // eslint-disable-next-line camelcase
      const dst_msg = document.getElementById('dst_imei').value;
      // eslint-disable-next-line camelcase
      const dst_comment = document.getElementById('dst_comment').value;
      // eslint-disable-next-line camelcase
      const msgs = `{"type":"${type}","src_msg":"${src_msg}","src_token":"${src_token}","dst_msg":"${dst_msg}","dst_comment":"${dst_comment}"} `;
      this.ws.send(msgs);
      this.newob.splice(index, 1);
    },
    subDelete1(title1, token1, i) {
      const type = 'delete';
      const msg = title1;
      const token = token1;
      const msgs = `{"type":"${type}","msg":"${msg}","token":"${token}"} `;
      this.ws.send(msgs);
      // console.log(`${`2222${msg}`} ${token}`);
      // console.log(this.newob);
      // console.log(i);
      this.newob.splice(i, 1);
    },

    // 请求订阅设备
    sub_imei() {
      const type = 'address';
      const msg = document.getElementById('sub_imei').value;
      const token = document.getElementById('sub_imei_token').value;
      const msgs = `{"type":"${type}","msg":"${msg}","token":"${token}"} `;
      this.ws.send(msgs);
    },

    // 取消订阅设备
    unsub_imei() {
      const type = 'unsub';
      const msg = document.getElementById('unsub_imei').value;
      const token = document.getElementById('unsub_imei_token').value;
      const msgs = `{"type":"${type}","msg":"${msg}","token":"${token}"} `;
      this.ws.send(msgs);
    },

    // 发布数据
    pub_imei_content() {
      const type = 'content';
      const address = document.getElementById('pub_imei').value;
      const msg = document.getElementById('pub_imei_content').value;
      const token = document.getElementById('pub_imei_token').value;
      const msgs = `{"type":"${type}","address":"${address}","msg":"${msg}","token":"${token}"} `;
      document.getElementById('pub').value = address;
      document.getElementById('pub-msg').value = msg;
      document.getElementById('pub-token').value = token;

      this.ws.send(msgs);
    },

    // 断开连接
    interrupt() {
      if (this.ws.readyState === 0) {
      // 正在建立连接；
        // eslint-disable-next-line no-alert
        alert('正在建立连接，请勿断开！');
      } else if (this.ws.readyState === 1) {
        // 连接成功建立，可正常通信
        // eslint-disable-next-line no-restricted-globals
        const r = confirm('连接已建立，确定要断开吗？');
        if (r === true) {
          this.ws.close();// websocket断开与服务器的连接
          // 断开连接会执行方法
          this.ws.onclose = () => {
            // eslint-disable-next-line no-alert
            alert('断开连接！');
          };
        }
      } else if (this.ws.readyState === 2) {
        // 连接正在进行关闭握手，即将关闭
        // eslint-disable-next-line no-alert
        alert('连接即将关闭，请勿着急！');
      } else if (this.ws.readyState === 3) {
        // 已经关闭连接或者没有建立连接
        // eslint-disable-next-line no-alert
        alert('连接未建立！');
      }
    },
    toemit(item) {
      this.visible4 = true;
      this.emit_ms = item;
    },
    toEdit(item, index) {
      this.visible3 = true;
      this.edit_mc = item;
      this.edit_mc.index = index;
    },
    // 删除设备弹窗
    showModal() {
      this.visible = true;
    },
    // eslint-disable-next-line no-unused-vars
    handleOk(e) {
      this.loading = true;
      this.subDelete();
      // setTimeout(() => {
      //   this.visible = false;
      //   this.loading = false;
      // }, 3000);
      this.visible = false;
      this.loading = false;
    },
    // eslint-disable-next-line no-unused-vars
    handleCancel(e) {
      this.visible = false;
    },
    // 订阅设备弹窗
    showModal2() {
      this.visible2 = true;
    },
    // eslint-disable-next-line no-unused-vars
    handleOk2(e) {
      this.loading2 = true;
      this.sub_imei();
      this.visible2 = false;
      this.loading2 = false;
    },
    // eslint-disable-next-line no-unused-vars
    handleCancel2(e) {
      this.visible2 = false;
    },
    // 修改设备弹窗
    showModal3() {
      this.visible3 = true;
    },
    // eslint-disable-next-line no-unused-vars
    handleOk3(e, index) {
      this.loading3 = true;
      this.subUpdate(index);
      this.visible3 = false;
      this.loading3 = false;
    },
    // eslint-disable-next-line no-unused-vars
    handleCancel3(e) {
      this.visible3 = false;
    },
    // 发布消息弹窗
    showModal4() {
      this.visible3 = true;
    },
    // eslint-disable-next-line no-unused-vars
    handleOk4(e) {
      this.loading4 = true;
      this.pub_imei_content();
      this.visible4 = false;
      this.loading4 = false;
    },
    // eslint-disable-next-line no-unused-vars
    handleCancel4(e) {
      this.visible4 = false;
    },

    // 取消订阅设备弹窗
    showModal5() {
      this.visible5 = true;
    },
    // eslint-disable-next-line no-unused-vars
    handleOk5(e) {
      this.loading5 = true;
      // eslint-disable-next-line no-console
      console.log('handleOk5');
      this.unsub_imei();
      this.visible5 = false;
      this.loading5 = false;
    },
    // eslint-disable-next-line no-unused-vars
    handleCancel5(e) {
      this.visible5 = false;
    },
  },
  // watch: {
  //   'option.xAxis.data': (newValue, oldValue) => {
  //     console.log(oldValue);
  //     console.log(newValue);
  //     console.log(22);
  //     console.log(window);
  //   },
  //   deep: true,
  //   immediate: true,
  // },
  created() {
    if ('MozWebSocket' in window) {
      window.WebSocket = window.MozWebSocket;
      this.ws = new WebSocket(this.target);
    } else if ('WebSocket' in window) {
      this.ws = new WebSocket(this.target);
    } else {
      // eslint-disable-next-line no-alert
      alert('WebSocket is not supported by this browse');
      return;
    }

    this.ws.onopen = function open() {
      // eslint-disable-next-line no-alert
      alert('Connected to IoT-Hub');
    };

    this.ws.onmessage = this.handleMessageIot;
  },

  // mounted() {
  //   let i = 0;
  //   setInterval(() => {
  //     i += 1;
  //     if (i >= 3) {
  //       i = 0;
  //     }
  //     this.leftPosition = i * 200;
  //   }, 20000);
  // },
  mounted() {
    this.echart1();
  },
};
</script>
