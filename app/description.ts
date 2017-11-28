import { Injectable } from '@angular/core';

@Injectable()
export class Description {
	data = {
		// 日期 十分秒 组件 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
		datepicker: {
			title: 'DatePicker',
			subtitle: '日期选择框',
			description: '输入或选择日期的控件。',
			timing: '<ul><li>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</li></ul>',
			tip:'当前日期组件最小时间2017-10-12 最大时间2017-12-12，跟下面代码有出入',
			html: `<span class="hljs-tag">&lt;<span class="hljs-title">mydatepicker</span> *<span class="hljs-attribute">ngIf</span>=<span class="hljs-value">"type.id == 'dateTime'"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"display:inline-block;width:300px;"</span> [<span class="hljs-attribute">options</span>]=<span class="hljs-value">"options"</span> [<span class="hljs-attribute">time</span>]=<span class="hljs-value">"time"</span> [<span class="hljs-attribute">originDate</span>]=<span class="hljs-value">"originDate"</span> (<span class="hljs-attribute">timeSetted</span>)=<span class="hljs-value">"timeSetted('gtdate', $event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">mydatepicker</span>&gt;</span>`,
			js: `<span class="hljs-keyword">private</span> <span class="hljs-keyword">options</span>: <span class="hljs-keyword">any</span> = {
    mindate: [<span class="hljs-keyword">new</span> Date().getFullYear() - <span class="hljs-number">5</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>].<span class="hljs-keyword">join</span>(<span class="hljs-string">'-'</span>),
    maxdate: [<span class="hljs-keyword">new</span> Date().getFullYear() + <span class="hljs-number">5</span>, <span class="hljs-number">12</span>, <span class="hljs-number">31</span>].<span class="hljs-keyword">join</span>(<span class="hljs-string">'-'</span>)
};
<span class="hljs-keyword">private</span> time: string = <span class="hljs-string">''</span>;
<span class="hljs-keyword">private</span> originDate: <span class="hljs-keyword">any</span> = {
    date: <span class="hljs-string">''</span>,
    hour: <span class="hljs-string">''</span>,
    mins: <span class="hljs-string">''</span>,
    seconds: <span class="hljs-string">''</span>
};`,
			annotation: `/<span class="hljs-keyword">*</span>
<span class="hljs-keyword">*</span> author：xuqiang
<span class="hljs-keyword">*</span> options：配置项，主要包含以下属性
<span class="hljs-keyword">*</span> 	mindate  最小日期  如2017-11-21
<span class="hljs-keyword">*</span> 	maxdate  最大日期  如2017-11-22
<span class="hljs-keyword">*</span>   time 当前时间，举个栗子：2017-11-24
<span class="hljs-keyword">*</span>   originDate
<span class="hljs-keyword">*</span>		date: 日期，目前跟time一样，可能累赘，到时考虑删除time,
<span class="hljs-keyword">*</span>		hour: 时,
<span class="hljs-keyword">*</span>		mins: 分,
<span class="hljs-keyword">*</span>		seconds: 秒
<span class="hljs-keyword">*</span>/`
		},
		// 复选框 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
		checkbox: {
			title: 'Checkbox',
			subtitle: '多选框',
			description: '多选框。',
			timing: `<ul><li>在一组可选项中进行多项选择时；</li>
<li>单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li><ul>`,
			html: `<span class="hljs-tag">&lt;<span class="hljs-title">checkbox</span> [<span class="hljs-attribute">isChecked</span>]=<span class="hljs-value">"0"</span> [<span class="hljs-attribute">label</span>]=<span class="hljs-value">"来啊，点我啊"</span> (<span class="hljs-attribute">checked</span>)=<span class="hljs-value">"checked($event)"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">/checkbox</span>&gt;</span>`,
			js: `<span class="hljs-keyword">private</span> isChecked: <span class="hljs-keyword">string</span> = <span class="hljs-string">'0'</span>;
<span class="hljs-keyword">private</span> <span class="hljs-keyword">label</span>: <span class="hljs-keyword">string</span> = <span class="hljs-string">'来啊，点我啊'</span>;`,
			annotation: `/<span class="hljs-keyword">*</span>
<span class="hljs-keyword">*</span> author：xuqiang
<span class="hljs-keyword">*</span> isChecked：因为boolean在父子组件交互时无法传输，所以用0和1
<span class="hljs-keyword">*</span> label：用于提示，举个栗子：来啊，点我啊
<span class="hljs-keyword">*</span>/`
		},
		// 单选框 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
		radio: {
			title: 'Radio',
			subtitle: '单选框',
			description: '单选框。',
			timing: `<ul><li>用于在多个备选项中选中单个状态。</li>
<li>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li></ul>`,
			tip: '',
			html: `<span class="hljs-tag">&lt;<span class="hljs-title">radio</span> [<span class="hljs-attribute">isChecked</span>]=<span class="hljs-value">"0"</span> [<span class="hljs-attribute">label</span>]=<span class="hljs-value">"来啊，点我啊"</span> (<span class="hljs-attribute">checked</span>)=<span class="hljs-value">"checked($event)"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">/radio</span>&gt;</span>`,
			js: `<span class="hljs-keyword">private</span> isChecked: <span class="hljs-keyword">string</span> = <span class="hljs-string">'0'</span>;
<span class="hljs-keyword">private</span> <span class="hljs-keyword">label</span>: <span class="hljs-keyword">string</span> = <span class="hljs-string">'来啊，点我啊'</span>;`,
			annotation: `/<span class="hljs-keyword">*</span>
<span class="hljs-keyword">*</span> author：xuqiang
<span class="hljs-keyword">*</span> isChecked：因为boolean在父子组件交互时无法传输，所以用0和1
<span class="hljs-keyword">*</span> label：用于提示，举个栗子：来啊，点我啊
<span class="hljs-keyword">*</span>/`
		},
		// 下拉框 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
		select: {
			title: 'Select',
			subtitle: '选择器',
			description: '下拉选择器。',
			timing: `<ul><li>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>
<li>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</li></ul>`,
			tip: '宽度是根据父元素的宽度来的，所以想要多宽，请设置好您父元素的宽度',
			html: `&lt;<span class="hljs-keyword">select</span>-<span class="hljs-keyword">component</span> [optionList]=<span class="hljs-string">"optionalList"</span> [initVal]=<span class="hljs-string">"initName"</span> (select)=<span class="hljs-string">"select($event)"</span>&gt;&lt;/<span class="hljs-keyword">select</span>-<span class="hljs-keyword">component</span>&gt;`,
			js: `<span class="hljs-keyword">private</span> optionalList = [{<span class="hljs-string">id:</span><span class="hljs-string">'1'</span>,<span class="hljs-string">name:</span><span class="hljs-string">'我叫乔布斯'</span>},{<span class="hljs-string">id:</span><span class="hljs-string">'2'</span>,<span class="hljs-string">name:</span><span class="hljs-string">'我叫马云'</span>},{<span class="hljs-string">id:</span><span class="hljs-string">'2'</span>,<span class="hljs-string">name:</span><span class="hljs-string">'我是比尔盖兹'</span>}];
<span class="hljs-keyword">private</span> initName = <span class="hljs-string">'我叫比尔盖兹'</span>;
<span class="hljs-keyword">private</span> select($event){
    <span class="hljs-keyword">this</span>.id = $event.id;
    <span class="hljs-keyword">this</span>.name = $event.name
}`,
			annotation: `/*
* author：xuqiang
* optionList: [{<span class="hljs-property">id</span>:'',<span class="hljs-property">name</span>:''}]的格式
* initVal：初始化的值，传<span class="hljs-property">name</span>就可以了，所以得保证<span class="hljs-property">name</span>是唯一的
* select：选中事件，抛出$event, 为{<span class="hljs-property">id</span>:'',<span class="hljs-property">name</span>:''｝的格式
*/`
		},
		// 开关 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
		switch: {
			title: 'Switch',
			subtitle: '开关',
			description: '开关选择器。',
			timing: `<ul>
			<li>需要表示开关状态/两种状态之间的切换时；</li>
<li>和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li></ul>`,
			tip: '',
			html: `&lt;<span class="hljs-keyword">switch</span> [isOpen]=<span class="hljs-string">"switchIsOpen"</span> [labels]=<span class="hljs-string">"labels"</span> (click)=<span class="hljs-string">"switchClick(<span class="hljs-variable">$event</span>)"</span>&gt;&lt;/<span class="hljs-keyword">switch</span>&gt;`,
			js: `<span class="hljs-keyword">private</span> switchIsOpen: boolean = <span class="hljs-keyword">false</span>;
<span class="hljs-keyword">private</span> labels = {
		open: <span class="hljs-string">'开'</span>,
		close: <span class="hljs-string">'关'</span>
	};
switchClick($<span class="hljs-keyword">event</span>){
	<span class="hljs-keyword">this</span>.switchIsOpen = $<span class="hljs-keyword">event</span>;
}`,
			annotation: `/<span class="hljs-keyword">*</span>
<span class="hljs-keyword">*</span> author：xuqiang
<span class="hljs-keyword">*</span> isOpen: 初始化开关
<span class="hljs-keyword">*</span> labels：用于提示，举个栗子：{
		open: '开',
		close: '关'
	}
   click： 广播事件
<span class="hljs-keyword">*</span>/`
		},
		// 级联选择 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
		cascader: {
			title: 'Cascader',
			subtitle: '级联选择',
			description: '级联选择框。',
			timing: `<ul>
			<li>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</li>
<li>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</li>
<li>比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。</li>
</ul>`,
			tip: '',
			html: `<span class="hljs-tag">&lt;<span class="hljs-title">cascader</span> [<span class="hljs-attribute">cascaderList</span>]=<span class="hljs-value">"cascaderList"</span> (<span class="hljs-attribute">click</span>)=<span class="hljs-value">"cascaderSelect($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">cascader</span>&gt;</span>`,
			js: `<span class="hljs-keyword">private</span> cascaderList: any[] = [{
		id:<span class="hljs-string">'1'</span>,
		name: <span class="hljs-string">'浙江'</span>,
		children: [{
			id: <span class="hljs-string">'11'</span>,
			name: <span class="hljs-string">'杭州'</span>,
			children: [{
				id: <span class="hljs-string">'111'</span>,
				name: <span class="hljs-string">'西湖'</span>
			}]
		},{
			id: <span class="hljs-string">'12'</span>,
			name: <span class="hljs-string">'淳安县'</span>
		}]
	},{
		id:<span class="hljs-string">'2'</span>,
		name: <span class="hljs-string">'江苏'</span>,
		children: [{
			id: <span class="hljs-string">'21'</span>,
			name: <span class="hljs-string">'南京'</span>,
			children: [{
				id: <span class="hljs-string">'211'</span>,
				name: <span class="hljs-string">'中华门'</span>
			}]
		}]
	}];

cascaderSelect($<span class="hljs-keyword">event</span>){
	<span class="hljs-keyword">this</span>.selectedCascader = $<span class="hljs-keyword">event</span>;
}`,
			annotation: `/<span class="hljs-keyword">*</span>
<span class="hljs-keyword">*</span> author：xuqiang
<span class="hljs-keyword">*</span> cascaderList: 下拉的列表，为数组，属性为id,name,children，没有children为无子类
<span class="hljs-keyword">*</span> click：广播事件，为数组，广播出选中的节点对象
<span class="hljs-keyword">*</span>/`
		},
		// 开关 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
		number: {
			title: 'InputNumber',
			subtitle: '数字输入框',
			description: '通过鼠标或键盘，输入范围内的数值。',
			timing: `<ul>
			<li>当需要获取标准数值时。</li><ul>`,
			tip: '',
			html: `&lt;<span class="hljs-built_in">number</span> [<span class="hljs-built_in">max</span>]=<span class="hljs-string">"max"</span> [<span class="hljs-built_in">min</span>]=<span class="hljs-string">"min"</span> [initVal]=<span class="hljs-string">"initVal"</span> [width]=<span class="hljs-string">"width"</span> (output)=<span class="hljs-string">"numInput($event)"</span>&gt;&lt;/<span class="hljs-built_in">number</span>&gt;`,
			js: `<span class="hljs-keyword">private</span> <span class="hljs-string">max:</span> number = <span class="hljs-number">10</span>;
<span class="hljs-keyword">private</span> <span class="hljs-string">min:</span> number = -<span class="hljs-number">10</span>;
<span class="hljs-keyword">private</span> <span class="hljs-string">initVal:</span> number = <span class="hljs-number">0</span>;
<span class="hljs-keyword">private</span> <span class="hljs-string">width:</span> string = <span class="hljs-string">'100px'</span>;
output($event){
	<span class="hljs-keyword">this</span>.initVal = $event;
}`,
			annotation: `/<span class="hljs-keyword">*</span>
<span class="hljs-keyword">*</span> author：xuqiang
<span class="hljs-keyword">*</span> max： 最大值
<span class="hljs-keyword">*</span> min：最小值
<span class="hljs-keyword">*</span> initVal：初始值
<span class="hljs-keyword">*</span> width：暂时开放，用于指定宽度，默认是按照父元素的宽度
<span class="hljs-keyword">*</span> output：输出，广播出输入值
<span class="hljs-keyword">*</span>/`
		},
	}
}