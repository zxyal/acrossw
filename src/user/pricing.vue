<template>
    <div class="pricing">
        <h1>价值够大，价格够低</h1>
        <p>所有收入只用作服务器成本费用</p>
        <div class="cards">
            <div class="card">
                <span class="title">Basic</span>
                <p class="price">¥ 15 /季</p>
                <div class="hr"></div>
                <div class="detail">
                    <p>流量 10GB /月</p>
                    <p>不限设备数量</p>
                    <p>1个可用节点</p>
                    <p>无技术支持</p>
                </div>
                <div class="hr"></div>
                <Button type="text" @click="comeSoon">Buy Now</Button>
            </div>
            <div class="card">
                <span class="title">Plus</span>
                <p class="price">¥ 30 /季</p>
                <div class="hr"></div>
                <div class="detail">
                    <p>流量 25GB /月</p>
                    <p>不限设备数量</p>
                    <p>所有可用节点</p>
                    <p>5 * 6 小时技术支持</p>
                </div>
                <div class="hr"></div>
                <Button type="text" @click="comeSoon">Buy Now</Button>
            </div>
            <div class="card">
                <span class="title">Pro</span>
                <p class="price">¥ 55 /季</p>
                <div class="hr"></div>
                <div class="detail">
                    <p>流量 50GB /月</p>
                    <p>不限设备数量</p>
                    <p>所有可用节点</p>
                    <p>5 * 6 小时技术支持</p>
                </div>
                <div class="hr"></div>
                <Button type="text" @click="comeSoon">Buy Now</Button>
            </div>
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
                showIndex: true,
                showBg: false
            }
        },
        methods: {
            urlChange: function(r) {
                console.log(r)
            },
            comeSoon() {
                this.$Notice.open({
                    title: 'Come soon',
                    desc: '敬请期待！'
                });
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
