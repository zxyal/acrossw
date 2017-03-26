<template>
    <Col span="18" class="admin-row">
        <Table border :context="self" :columns="columns" :data="data"></Table>
    </Col>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                columns: [
                    {
                        title: 'ID',
                        key: 'id',
                    },
                    {
                        title: '名称',
                        key: 'title',
                    },
                    {
                        title: '说明',
                        key: 'explain'
                    },
                    {
                        title: '流量',
                        key: 'transfer'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="edit(${index})">编辑</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
                ],
                data: []
            }
        },
        created() {
            this.$http.post(this.$store.state.apiUrl + '/admin/package', this.$qs(this.formLogin))
                .then(response => {
                    if(response.data.type == "success"){
                        this.data = response.data.data
                    }
                })
                .catch(error => {

                })
        },
        methods: {
            edit (index) {
                console.log(index)
            },
            remove (index) {
            }
        }
    }
</script>

<style>
    .admin-row{
        margin-top: 20px;
        float: right;
    }
</style>