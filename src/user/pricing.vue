<template>
    <div class="pricing">
        <h1>价值够大，价格够低</h1>
        <p>所有收入只用作服务器成本费用</p>
        <div class="cards">
            <div class="card" v-for="(val,index) in priceInfo">
                <span class="title">{{val.title}}</span>
                <p class="price">¥ {{val.price}} /季</p>
                <div class="hr"></div>
                <div class="detail">
                    <p>流量 {{val.transfer}}GB /月</p>
                    <p>不限设备数量</p>
                    <p>所有可用节点</p>
                    <p>5 * 6 小时技术支持</p>
                </div>
                <div class="hr"></div>
                <Button type="text" @click="buy(val.id)">Buy Now</Button>
            </div>
        </div>
        <!-- 购买层 -->
        <Modal v-model="buyPop" width="700">
            <p slot="header" style="color:#00c800;text-align:center">
                <!-- <Icon type="information-circled"></Icon> -->
                <span>微信支付</span>
            </p>
            <div style="text-align:center">
                <iframe :src="url" style="width: 100%;height:600px" frameborder="0" scrolling="no"></iframe>
            </div>
            <div slot="footer">
                <Button type="success" size="large" long :loading="waitButtonStatus">{{waitButtonTip}}</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
export default {
    data() {
            return {
                mask: {
                    display: 'none'
                },
                showIndex: true,
                showBg: false,
                buyPop: false,
                priceInfo: [],
                url: '',
                waitButtonTip: '等待支付',
                waitButtonStatus: true,
            }
        },
        created() {
            this.$http.get(this.$store.state.apiUrl + '/home/package')
                .then(response => {
                    if (response.data.type == "success") {
                        this.priceInfo = response.data.data
                    } else {
                        this.$Message.error(response.data.data)
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.$Message.error('未知错误')
                })
        },
        methods: {
            urlChange: function(r) {
                console.log(r)
            },
            buy(id) {
                this.buyPop = true;
                this.$http.post(this.$store.state.apiUrl + '/home/package/buy', this.$qs({
                        package: id
                    }))
                    .then(response => {
                        if (response.data.type == "success") {
                            this.url = response.data.data
                        } else {
                            this.$Message.error(response.data.data)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.$Message.error('未知错误')
                    })
            }
        },
}
</script>
<style>
.pricing {
    margin-top: 180px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 980px;
}

.pricing > p {
    font-size: 14px;
}

.pricing .cards {
    display: inline-block;
    height: 300px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
}

.pricing .cards .card {
    width: 200px;
    height: 300px;
    float: left;
    /*background-color: #fff*/
}

.pricing .cards .title {
    font-size: 20px;
}

.pricing .cards .price {
    margin-top: 5px;
    font-size: 14px;
}

.pricing .cards .hr {
    height: 1px;
    width: 130px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #cacaca;
}

.pricing .detail p {
    margin-top: 10px;
}
</style>
