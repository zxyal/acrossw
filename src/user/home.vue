<template>
    <div id='main'>
        <div class="box-info" style="width: 300px">
            <p class="box-title">服务器状态</p>
            <div class="box-server-list">
                <div class="server-list-child">
                    <span>la.paplane.cn</span>
                    <div class="server-status-normal"></div>
                </div>
                <div class="server-list-child">
                    <span>la1.paplane.cn</span>
                    <div class="server-status-normal"></div>
                </div>
                <div class="server-list-child">
                    <span>jp.paplane.cn</span>
                    <div class="server-status-danger"></div>
                </div>
            </div>
        </div>
        <div class="box-info">
            <p class="box-title">套餐信息</p>
            <div>
                <span>已使用:{{totalTraffic}}</span>
            </div>
        </div>
        <div class="box-info">
            <p class="box-title">配置信息</p>
            <div>
                <span>端口:{{port}}</span>
            </div>
            <div>
                <span>密码:{{passwd}}</span>
            </div>
            <div>
                <span>加密:{{method}}</span>
            </div>
        </div>
        <div class="box-info ">
            <p class="box-title">流量</p>
            <div>
                <i-circle :percent="percent" :size="200">
                    <p class="demo-circle-inner" style="font-size:14px">剩余流量</p>
                    <p class="demo-circle-inner" style="font-size:24px">{{percent}}%</p>
                </i-circle>
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
                port : 0,
                passwd : '',
                method : '',
            }
        },
        created() {

            this.$http.post(this.$store.state.apiUrl + '/home', this.$qs(this.loginForm))
                .then(r => {
                    if (r.data.type == 'success') {
                        this.port = r.data.data.port
                        this.passwd = r.data.data.passwd
                        this.method = r.data.data.method

                        var rTransfer = r.data.data.transfer_enable
                        var rU = r.data.data.u
                        var rD = r.data.data.d
                        var usedTransfer = (r.data.data.u + r.data.data.d)

                        if (rTransfer <= 0) {
                            var totalTransfer = 0
                            var unitText = ''
                            this.percent = 0
                        } else {
                            this.percent = ((rTransfer - usedTransfer) / rTransfer * 100).toFixed()

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

                        }


                        this.totalTraffic = totalTransfer + unitText

                    } else if (r.data.type == 'error') {
                        this.$Message.error('数据获取失败，请稍后刷新重试', 2)
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.$Message.error('网络错误，请稍后重试', 2)
                })
        },

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
    width: 400px;
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
</style>
