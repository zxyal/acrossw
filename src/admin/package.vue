<template>
    <div class="admin-row">
    <Button type="primary" icon="plus" @click="addPackageModal = !addPackageModal">添加</Button>
    <Table class="table" border :context="self" :columns="columns" :data="data"></Table>
    <Modal v-model="addPackageModal" title="添加套餐" @on-ok="addPackage">
        <Form :model="package" :label-width="80">
            <Form-item label="流量包名称">
                <Input v-model="package.title" placeholder="请输入流量包名称"></Input>
            </Form-item>
            <Form-item label="说明">
                <Input v-model="package.explain_text" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
            <Form-item label="流量">
                <Input v-model="package.transfer" placeholder="单位 GB"></Input>
            </Form-item>
            <Form-item label="结算类型">
                <Select v-model="package.type" placeholder="请选择">
                    <Option :value="1">季</Option>
                    <Option :value="2">年</Option>
                </Select>
            </Form-item>
            <Form-item label="数量">
                <Input v-model="package.amount" placeholder="数量"></Input>
            </Form-item>
                        <Form-item label="价格">
                <Input v-model="package.price" placeholder="价格"></Input>
            </Form-item>
        </Form>
    </Modal>
    </div>
</template>

<script>
export default {
    data() {
            return {
                self: this,
                addPackageModal: false,
                formItem: {},
                package: {
                    title: '',
                    explain_text: '',
                    transfer: null,
                    type: 1,
                    amount: null,
                    price: null
                },
                columns: [{
                    title: 'ID',
                    key: 'id',
                }, {
                    title: '名称',
                    key: 'title',
                }, {
                    title: '说明',
                    key: 'explain_text'
                }, {
                    title: '流量（GB）',
                    key: 'transfer'
                }, {
                    title: '类型',
                    key: 'type'
                }, {
                    title: '数量',
                    key: 'amount'
                }, {
                    title: '价格',
                    key: 'price'
                }, {
                    title: '操作',
                    key: 'action',
                    align: 'center',
                    render(row, column, index) {
                        return `<i-button type="primary" size="small" @click="edit(${index})">编辑</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                    }
                }],
                data: []
            }
        },
        created() {
            this.$http.post(this.$store.state.apiUrl + '/admin/package', this.$qs(this.formLogin))
                .then(response => {
                    if (response.data.type == "success") {
                        this.data = response.data.data
                    }
                })
                .catch(error => {

                })
        },
        methods: {
            edit(index) {
                console.log(index)
            },
            remove(index) {
                this.$Modal.confirm({
                    title: '删除',
                    content: '确定删除当前套餐吗？',
                    onOk: () => {
                        this.$http.post(this.$store.state.apiUrl + '/admin/package/delete', this.$qs({
                                id: this.data[index].id
                            }))
                            .then(response => {
                                if (response.data.type == "success") {
                                    this.$Message.success(response.data.data)
                                    this.data.splice(index, 1)
                                } else {
                                    this.$Message.error(response.data.data)
                                }
                            })
                            .catch(error => {
                                console.log(error)
                                this.$Message.error('未知错误')
                            })
                    },
                    onCancel: () => {}
                });
            },
            addPackage() {
                this.$http.post(this.$store.state.apiUrl + '/admin/package/create', this.$qs(this.package))
                    .then(response => {
                        if (response.data.type == "success") {
                            this.data.push(this.package)
                            this.$Message.success(response.data.data)
                            this.package = []
                        } else {
                            this.$Message.error(response.data.data)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.$Message.error('未知错误')
                    })
                console.log(this.package)
            }
        }
}
</script>
<style scoped>
.admin-row {
    margin-top: 20px;
}

.admin-row button {
    margin-bottom: 20px;
}
</style>
