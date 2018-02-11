import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menus: any[] = [{
        title: 'Components',
        children: [{
            title: 'General',
            children: [{
                title: 'Button',
                chinese: '按钮',
                hash: 'button'
            }]
        },{
            title: 'Layout',
            children: [{
                title: 'Layout',
                chinese: '布局',
                hash: 'layout'
            }]
        },{
            title: 'Navigation',
            children: [{
                title: 'Pagination',
                chinese: '分页',
                hash: 'pagination'
            }]
        },{
            title: 'Data Entry',
            children: [{
                title: 'AutoComplete',
                chinese: '自动完成',
                hash: 'autocomplete'
            },{
                title: 'Cascader',
                chinese: '级联选择',
                hash: 'cascader'
            },{
                title: 'Checkbox',
                chinese: '多选框',
                hash: 'checkbox'
            },{
                title: 'DatePicker',
                chinese: '日期选择框',
                hash: 'datepicker'
            },{
                title: 'InputNumber',
                chinese: '数字输入框',
                hash: 'number'
            },{
                title: 'Radio',
                chinese: '单选框',
                hash: 'radio'
            },{
                title: 'Select',
                chinese: '选择器',
                hash: 'select'
            },{
                title: 'Switch',
                chinese: '开关',
                hash: 'switch'
            },{
                title: 'TreeSelect',
                chinese: '树选择',
                hash: 'treeselect'
            },{
                title: 'Upload',
                chinese: '上传',
                hash: 'upload'
            }]
        },{
            title: 'Data Display',
            children: [{
                title: 'Avatar',
                chinese: '头像',
                hash: 'avator'
            },{
                title: 'Badge',
                chinese: '徽标数',
                hash: 'badge'
            },{
                title: 'Card',
                chinese: '卡片',
                hash: 'card'
            },{
                title: 'Carousel',
                chinese: '走马灯',
                hash: 'carousel'
            },{
                title: 'Tooltip',
                chinese: '文字提示',
                hash: 'tooltip'
            },{
                title: 'Table',
                chinese: '表格',
                hash: 'table'
            },{
                title: 'Tabs',
                chinese: '标签页',
                hash: 'tabs'
            },{
                title: 'Tag',
                chinese: '标签',
                hash: 'tag'
            },{
                title: 'Tree',
                chinese: '树形控件',
                hash: 'tree'
            }]
        },{
            title: 'Feedback',
            children: [{
                title: 'Alert',
                chinese: '警告提示',
                hash: 'feedback'
            },{
                title: 'Spin',
                chinese: '加载中',
                hash: 'spin'
            }]
        }]
    }];
}
