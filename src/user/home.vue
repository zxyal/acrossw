<template>
    <div id='main'>
        <div class="box-info" style="width: 300px">
            <p class="box-title">可用服务器</p>
            <div class="box-server-list">
                <div class="server-list-child">
                    <span>jp.paplane.cn</span>
                    <div style="color: rgb(32, 206, 55)">online</div>
                </div>
                <div class="server-list-child">
                    <span>la.paplane.cn</span>
                    <div style="color: rgb(138, 138, 138)">offline</div>
                </div>
            </div>
        </div>
        <div class="box-info">
            <p class="box-title">配置信息</p>
            <div class="config-info">
                <p>端口: {{port}}</p>
                <p>密码: {{passwd}}</p>
                <p>加密: {{method}}</p>
            </div>
        </div>
        <div class="box-info ">
            <!-- <p class="box-title">流量</p> -->
            <div>
                <i-circle :percent="percent" :size="200">
                    <p class="demo-circle-inner" style="font-size:12px">本月剩余流量</p>
                    <p class="demo-circle-inner" style="font-size:22px;margin-top: 5px">{{totalTraffic}}</p>
                </i-circle>
                <div class="package-info-text">
                    <p>
                        <span class="package-text">当前套餐 </span>
                        <span class="stress">{{package.title}}</span>
                    </p>
                    <p><span class="package-text">每月流量 </span><span class="stress">{{package.transfer}}GB</span></p>
                    <!-- <p><span class="package-text"><Button type="primary">立即购买套餐</Button></span></p> -->
                </div>
            </div>
        </div>
        <div class="box-info" style="width: 400px">
            <p class="box-title">动态</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                mask: {
                    display: 'none'
                },
                percent: 0,
                //total
                totalTraffic: 0,
                //已使用流量
                usedTransfer: 0,
                //总流量
                totalFlow: 0,
                port: 0,
                passwd: '',
                method: '',
                package: {
                    title: 'None',
                    transfer: 0,
                }
            }
        },
        created() {

            this.$http.post(this.$store.state.apiUrl + '/home', this.$qs(this.loginForm))
                .then(r => {
                    if (r.data.type == 'success') {
                        if(r.data.data.package != 'no'){
                            this.package = r.data.data.package
                        }
                        
                        this.port = r.data.data.port
                        this.passwd = r.data.data.passwd
                        this.method = r.data.data.method

                        var rTransfer = r.data.data.transfer_enable
                        var rU = r.data.data.u
                        var rD = r.data.data.d
                        var usedTransfer = (r.data.data.u + r.data.data.d)
                        this.usedTransfer = this.transformFlow(usedTransfer);

                        if (rTransfer <= 0) {
                            var totalTransfer = 0
                            var unitText = ''
                            this.percent = 0
                        } else {
                            this.percent = Number(((rTransfer - usedTransfer) / rTransfer * 100).toFixed())
                        }

                        //剩余
                        this.totalTraffic = this.transformFlow(rTransfer - usedTransfer)
                            //总流量
                        this.totalFlow = this.transformFlow(rTransfer)

                    } else if (r.data.type == 'error') {
                        this.$Message.error('数据获取失败，请稍后刷新重试', 2)
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.$Message.error('网络错误，请稍后重试', 2)
                })
        },
        methods: {
            transformFlow(rTransfer) {
                if (1024 < rTransfer && ((1024 * 1024) - 1) > rTransfer) {
                    var totalTransfer = (rTransfer / 1024).toFixed(2)
                    var unitText = 'KB'
                } else if ((1024 * 1024) < rTransfer && ((1024 * 1024 * 1024) - 1) > rTransfer) {
                    var totalTransfer = (rTransfer / (1024 * 1024)).toFixed(2)
                    var unitText = 'MB'
                } else if ((1024 * 1024 * 1024) < rTransfer && ((1024 * 1024 * 1024 * 1024) - 1) > rTransfer) {
                    var totalTransfer = (rTransfer / (1024 * 1024 * 1024)).toFixed(2)
                    var unitText = 'GB'
                }

                return totalTransfer + unitText;
            }
        }
}
</script>
<style>
data {
    background-color: #F9FAFC;
}

header {
    background-color: #464c5b;
    height: 55px;
    width: 100vw;
}

#main {
    display: flex;
    width: 70%;
    flex-wrap: wrap;
    margin: 0 auto;
    /*justify-content: center;*/
    margin-top: 40px;
    transition: all .4s;
}

.header-nav {}

.header-user {
    float: right;
    padding-right: 20px;
}

.header-nav-li {
    text-align: center;
    font-size: 14px;
    color: #fff;
    width: 75px;
    float: left;
    line-height: 55px;
    /*margin-right: 30px;*/
}

.header-nav-li:hover {
    background-color: #4e5565;
}

.header-user span {
    text-align: center;
    line-height: 55px;
    color: #fff;
    font-size: 14px;
}


/*  信息展示块   */

.box-info {
    /*width: 400px;*/
    /*height: 200px;*/
    padding: 20px;
    margin-left: 30px;
    margin-top: 30px;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
    transition: all .4s;
    border-radius: 3px;
}

.box-title {
    color: #464c5b;
    height: 40px;
    line-height: 40px;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
}

.box-server-list .server-list-child {
    font-size: 14px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #6b6b6b;
}


/*  服务器状态块  */

.server-status-normal {
    width: 10px;
    height: 10px;
    background-color: #20A0FF;
    border-radius: 3px;
    box-shadow: 0 0 5px 0px #20A0FF;
}

.server-status-warning {
    width: 10px;
    height: 10px;
    background-color: #F7BA2A;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px #F7BA2A;
}

.server-status-danger {
    width: 10px;
    height: 10px;
    background-color: #FF4949;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px #FF4949;
}

.box-info .package-info-text {
    width: 250px;
    float: right;
    margin-left: 30px;
}

.box-info .package-info-text .stress {
    font-size: 28px;
    /*font-weight: 600;*/
}

.box-info .package-info-text .package-text {
    font-size: 14px;
}

.box-info .package-info-text p {
    margin-top: 6px;
}
.box-info .config-info{
    width: 200px;
}
.box-info .config-info p{
font-size: 14px;
}
</style>
