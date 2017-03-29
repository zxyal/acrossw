<template>
    <Col span="18" class="admin-row">
    <Button type="primary" icon="plus" @click="addPackageModal = !addPackageModal">添加</Button>
    <Table class="table" border :context="self" :columns="columns" :data="data"></Table>
    <Modal v-model="addPackageModal" title="普通的Modal对话框标题" @on-ok="ok" @on-cancel="cancel">
        <Form :model="formItem" :label-width="80">
            <Form-item label="流量包名称">
                <Input v-model="formItem.input" placeholder="请输入流量包名称"></Input>
            </Form-item>
            <Form-item label="选择器">
                <Select v-model="formItem.select" placeholder="请选择">
                    <Option value="beijing">北京市</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
                </Select>
            </Form-item>
            <Form-item label="日期控件">
                <Row>
                    <Col span="11">
                    <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                    <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
                    </Col>
                </Row>
            </Form-item>
            <Form-item label="单选框">
                <Radio-group v-model="formItem.radio">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </Radio-group>
            </Form-item>
            <Form-item label="说明">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
        </Form>
    </Modal>
    </Col>
</template>
<script>
export default {
    data() {
            return {
                self: this,
                addPackageModal: false,
                formItem : {},
                columns: [{
                    title: 'ID',
                    key: 'id',
                }, {
                    title: '名称',
                    key: 'title',
                }, {
                    title: '说明',
                    key: 'explain'
                }, {
                    title: '流量',
                    key: 'transfer'
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
            remove(index) {}
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
