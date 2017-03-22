<template>
    <div class="pricing">
        <h1>价值够大，价格够低</h1>
        <p>所有收入只用作服务器成本费用</p>
        <div class="cards">
            <div class="card">
                <span class="title">Free</span>
                <p class="price">¥ 0 /季</p>
                <div class="hr"></div>
                <div class="detail">
                    <p>流量 1GB /月</p>
                    <p>不限设备数量</p>
                    <p>无人工支持</p>
                </div>
                <div class="hr"></div>
                <Button type="text">Buy Now</Button>
            </div>
            <div class="card">
                <span class="title">Plus</span>
                <p class="price">¥ 20 /季</p>
                <div class="hr"></div>
                <div class="detail">
                    <p>流量 5GB /月</p>
                    <p>不限设备数量</p>
                    <p>5 * 6 小时技术支持</p>
                </div>
                <div class="hr"></div>
                <Button type="text" style="color: #1b6aff">Buy Now</Button>
            </div>
            <div class="card">
                <span class="title">Pro</span>
                <p class="price">¥ 35 /季</p>
                <div class="hr"></div>
                <div class="detail">
                    <p>流量 10GB /月</p>
                    <p>不限设备数量</p>
                    <p>5 * 6 小时技术支持</p>
                </div>
                <div class="hr"></div>
                <Button type="text">Buy Now</Button>
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
