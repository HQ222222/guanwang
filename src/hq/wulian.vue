<template>
  <div id="zhi">
  <!-- 左边 -->
    <div style="margin-left:15%; width: 70%;">
      <!-- <button @click="fa">向设备发送警报</button> -->
      <div style="width:49%;padding: 10px;
                    float: left;">
<!-- 订阅设备 -->
          <div style="border:1px solid #d3d3d3;
                    margin-top:10px; width:100%;padding: 10px;
                    text-align:center;height: 150px;">
            <h2>订阅设备</h2>
            <a-input name="subscribe_topic" id="subscribe_topic" placeholder="请输入要订阅的主题" />
            <a-button type="primary" id="bt" @click="subscribeT"
                      style="width: 96%; margin: 10px;" block>确认订阅</a-button>

          </div>
<!-- 发送警报 -->
          <div style="border:1px solid #d3d3d3;
                    margin-top:10px; width:100%;padding: 10px;
                    text-align:center;height: 150px;">
            <h1>发送警报</h1>
            <a-input name="waring_topic" id="waring_topic" placeholder="请输入要打开警报的主题" />
            <a-button type="primary" id="bt" @click="wanring_on"
                      style="width: 96%; margin: 10px;" block>确认发送警报</a-button>
          </div>
<!-- 关闭警报 -->
          <div style="border:1px solid #d3d3d3;
                    margin-top:10px; width:100%;padding: 10px;
                    text-align:center;height: 150px;">
            <h2>关闭警报</h2>
            <a-input name="off_topic" id="off_topic" placeholder="请输入要关闭警报的主题" />
            <a-button type="primary" id="bt" @click="wanring_off"
                      style="width: 96%; margin: 10px;" block>确认关闭警报</a-button>

          </div>

        </div>

<!-- 右边 -->
        <div style="border:1px solid #d3d3d3;
              margin-top:10px; width:49%;padding: 40px;
              float: right;
              text-align:left;">
              <h1 style="text-align:center;">心跳情况</h1>
          <!-- 心跳超标报警 -->
          <a-result status="warning" :title="this.tp"  v-if="visible">
            <template #extra>
              <p>该用户的心跳值处于危险范围之中 </p>
              <a-button key="console" type="primary" @click="baojing">
                报警
              </a-button>
            </template>
          </a-result>
          <!-- 心跳正常 -->
           <a-result :title="this.tp"  v-if="visible1">
            <template #icon>
              <a-icon type="smile" theme="twoTone" />
            </template>
            <template #extra>
               <p>该用户的心跳值处于正常水平 </p>
              <a-button type="primary">
                分享一下
              </a-button>
            </template>
          </a-result>

          <!-- 心跳偏低 -->
           <a-result :title="this.tp"  v-if="visible2">
            <template #extra>
               <p>该用户的心跳值偏低 </p>
              <a-button key="console" type="primary">
               提醒一下
              </a-button>
            </template>
          </a-result>

        </div>
<!-- 心跳频率显示 -->
        <div id="main" style=" width: 80%;  float: left; width:100%;height:600px;" title="心跳频率显示">
        </div>

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      visible: false,
      visible1: true,
      visible2: false,
      tp: '',
      bo: {
        eventType: '开灯',
        localTime: 2022,
        deviceId: 41802706,
        HRV: 'hq',
        AF: 11,
        SPO2: 22,
        bloodHigh: 100,
        bloodLow: 0,
      },
      pt: {
        topic: '',
      },
      won: {
        topic: '',
        content: '',
      },
      user: {
        topic: '',
        heart: '',
        times: '',
      },
      option: {
        series: [{
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 240,
          splitNumber: 12,
          itemStyle: {
            color: '#58D9F9',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18,
          },
          pointer: {
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
            length: '75%',
            width: 16,
            offsetCenter: [0, '5%'],
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 18,
            },
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            distance: 30,
            color: '#999',
            fontSize: 20,
          },
          title: {
            show: false,
          },
          detail: {
            backgroundColor: '#fff',
            borderColor: '#999',
            borderWidth: 2,
            width: '60%',
            lineHeight: 40,
            height: 40,
            borderRadius: 8,
            offsetCenter: [0, '35%'],
            valueAnimation: true,
            formatter(value) {
              return `{value|${value.toFixed(0)}}{unit|次/分钟}`;
            },
            rich: {
              value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#777',
              },
              unit: {
                fontSize: 20,
                color: '#999',
                padding: [0, 0, -20, 10],
              },
            },
          },
          data: [{
            value: 70,
          }],
        }],
      },
    };
  },
  methods: {
    echart1() {
      const chartDom = document.getElementById('main');
      const myChart = echarts.init(chartDom);
      // eslint-disable-next-line no-unused-expressions
      this.option && myChart.setOption(this.option);
    },
    fa() {
      // this.axios({
      //   method:'post',
      //   url:"/send/msg",
      //   data:{
      //     eventType:'开灯',
      //     localTime:2022,
      //     deviceId:41802706,
      //     HRV:'hq',
      //     AF:11,
      //     SPO2:22,
      //     bloodHigh:100,
      //     bloodLow:0
      //   }
      // })
      //  .then((response) => {
      //   // eslint-disable-next-line no-console
      //   console.log(response);
      //   const { data: res } = response;
      //   // eslint-disable-next-line no-console
      //   console.log(res);

      // })
      // .catch((error) => { // 请求失败处理
      //   // eslint-disable-next-line no-console
      //   console.log(error);
      // });

      // this.$http.jsonp('http://localhost:8778/msg',{
      //   params:{
      //     message:'我要你关灯'
      //   }
      // }).then(function(res){
      //   console.log(res.data);
      // })
      // eslint-disable-next-line global-require
      const qs = require('querystring');
      const ss = qs.stringify(this.bo);
      this.$http.post('/send/msg', ss);
    },
    // 订阅设备，以接收设备发送的数据
    subscribeT() {
      const t = document.getElementById('subscribe_topic').value;
      console.log(t);
      this.pt.topic = t;
      // eslint-disable-next-line global-require
      const qs = require('querystring');
      const ss = qs.stringify(this.pt);
      this.$http.post('/pub/send', ss);
    },
    // 开启警报
    wanring_on() {
      const w = document.getElementById('waring_topic').value;
      this.won.content = '立即开启警报';
      this.won.topic = w;
      // eslint-disable-next-line global-require
      const qs = require('querystring');
      const ss = qs.stringify(this.won);
      this.$http.post('/send/waring', ss);
    },
    // 关闭警报
    wanring_off() {
      const off = document.getElementById('off_topic').value;
      this.won.content = '关闭警报';
      this.won.topic = off;
      // eslint-disable-next-line global-require
      const qs = require('querystring');
      const ss = qs.stringify(this.won);
      this.$http.post('/send/waring', ss);
    },
    jiexi(receivedMsg) {
      const x = JSON.parse(receivedMsg);
      console.log(x.topic);
      console.log(typeof x);
      this.tp = x.topic;
      this.option.series[0].data[0].value = x.payload;
      this.echart1();
      this.visible = false;
      this.visible1 = false;
      this.visible2 = false;
      if (x.payload > 100) {
        this.visible = true;
      } else if (x.payload >= 60 && x.payload <= 100) {
        this.visible1 = true;
      } else if (x.payload < 60) {
        this.visible2 = true;
      }
      this.user.topic = x.topic;
      this.user.heart = x.payload;
      this.user.times = new Date().toLocaleString();
      // eslint-disable-next-line global-require
      const qs = require('querystring');
      const ss = qs.stringify(this.user);
      this.$http.post('/add', ss);
    },
    baojing() {
      this.won.content = '立即开启警报';
      this.won.topic = this.tp;
      // eslint-disable-next-line global-require
      const qs = require('querystring');
      const ss = qs.stringify(this.won);
      this.$http.post('/send/waring', ss);
    },

  },

  created() {
    let socket = null;
    // 判断当前浏览器是否支持WebSocket技术，现如今大多数浏览器都支持
    if ('WebSocket' in window) {
      alert('您的浏览器支持WebSocket技术');
      socket = new WebSocket('ws://localhost:8778/webSocket');
    } else {
      alert('您的浏览器不支持WebSocket技术');
    }
    // 建立连接的时候将会触发
    socket.onopen = () => {
      console.log('建立连接');
    };
    // 服务器发送返回数据到客户端的时候触发
    socket.onmessage = (evt) => {
      const receivedMsg = evt.data;
      console.log(`收到信息:${receivedMsg}`);
      // const obj = JSON.parse(evt.data);
      this.jiexi(receivedMsg);
    };
    // socket出错的时候触发
    socket.onerror = () => {
      console.log('网页发送异常!');
    };
    // 断开连接的视乎触发
    socket.onclose = () => {
      console.log('断开连接');
    };
    // 关闭socket
    socket.onbeforeunload = () => {
      socket.close();
    };
  },
  mounted() {
    this.echart1();
  },

};

</script>

<style scoped>

</style>
