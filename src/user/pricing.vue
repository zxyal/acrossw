<template>
    <div class="pricing">
        <h1>价值够大，价格够低</h1>
        <p>所有收入只用作服务器费用</p>
        <div class="cards">
            <div class="card">
                <span>免费</span>
                <p>¥ 0/季</p>
            </div>
            <div class="card">
                <span>Plus</span>
                <p>¥ 20/季</p>
            </div>
            <div class="card">
                <span>Pro</span>
                <p>¥ 35/季</p>
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
    margin-top: 50px;
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
    height: 600px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
}

.pricing .cards .card {
    width: 200px;
    height: 600px;
    float: left;
    background-color: #fff
}
</style>
