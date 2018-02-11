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
                hash: 'layout',
                todo: 1
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
                hash: 'autocomplete',
                todo: 1
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
                hash: 'treeselect',
                todo: 1
            },{
                title: 'Upload',
                chinese: '上传',
                hash: 'upload',
                todo: 1
            }]
        },{
            title: 'Data Display',
            children: [{
                title: 'Avatar',
                chinese: '头像',
                hash: 'avator',
                todo: 1
            },{
                title: 'Badge',
                chinese: '徽标数',
                hash: 'badge',
                todo: 1
            },{
                title: 'Card',
                chinese: '卡片',
                hash: 'card',
                todo: 1
            },{
                title: 'Carousel',
                chinese: '走马灯',
                hash: 'carousel',
                todo: 1
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
                hash: 'tabs',
                todo: 1
            },{
                title: 'Tag',
                chinese: '标签',
                hash: 'tag'
            },{
                title: 'Tree',
                chinese: '树形控件',
                hash: 'tree',
                todo: 1
            }]
        },{
            title: 'Feedback',
            children: [{
                title: 'Alert',
                chinese: '警告提示',
                hash: 'feedback',
                todo: 1
            },{
                title: 'Spin',
                chinese: '加载中',
                hash: 'spin',
                todo: 1
            }]
        }]
    }];
}
