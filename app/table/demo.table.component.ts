import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

@Component({
	selector: 'demoTable',
    template: `
        <div style="height:480px;-webkit-box-flex: 1;-moz-box-flex: 1;-webkit-flex: 1 1 0;flex: 1 1 0;position: relative;">
            <ip-table [table]="table">
                <template #tableTemplate let-trow let-index="index">
                    <td  *ngIf="index%2 == 1">{{index}}</td>
                    <td  *ngIf="index%2 == 1">{{trow.name}}</td>
                    <td  *ngIf="index%2 == 1">{{trow.level}}</td>
                    <td  *ngIf="index%2 == 1">{{trow.area}}</td>
                    <td  *ngIf="index%2 == 1">{{trow.currentStatus}}</td>
                    <td  *ngIf="index%2 == 1">{{trow.purchaseVersion}}</td>
                    <td  *ngIf="index%2 == 1"><span class="time-span">{{trow.implementTime}}</span> <span class="time-span">{{trow.implementTime}}</span></td>
                    <td  *ngIf="index%2 == 1"><span class="time-span">{{trow.onlineTime}}</span> <span class="time-span">{{trow.onlineTime}}</span></td>
                    <td  *ngIf="index%2 == 1"><span class="time-span">{{trow.checkTime}}</span> <span class="time-span">{{trow.checkTime}}</span></td>
                    <td  *ngIf="index%2 == 1">{{trow.businessPerson}}</td>
                    <td  *ngIf="index%2 == 1"><span class="time-span">{{trow.updateTime}}</span> <span class="time-span">{{trow.updateTime}}</span></td>
                    <td  *ngIf="index%2 == 1">
                    <a>修改</a>&nbsp;
                    <a>授权码管理</a>&nbsp;
                    <a>删除</a>
                    </td>
                </template>
            </ip-table>
        </div>
    `,
    styles:[`
    `]
})
export class DemoTableComponent implements OnInit{
    constructor(private http: Http ) { }
    ngOnInit() {
            let data = {
                "username": 'admin',
                "password":'123456',
                "zoneId": '',
                "remenderMe": true
            }
            let headers = new Headers({ 'Content-Type': 'application/json' });
            this.http.post('/api/v1/currentUser', JSON.stringify(data), new RequestOptions({ headers: headers }))
                .toPromise();
    }
    table = {
        title:[
            {
                name: '序号',
                type: 'index',
                width: "4%"
            }, {
                name: '机构名称',
                width: "8%"
            }, {
                name: '级别',
                width: "6%"
            }, {
                name: '区域',
                width: "8%"
            }, {
                name: '医院状态',
                width: "6%"
            }, {
                name: '系统版本',
                width: "6%"
            }, {
                name: '实施时间',
                width: "9%"
            }, {
                name: '上线时间',
                width: "9%"
            }, {
                name: '验收时间',
                width: "9%"
            }, {
                name: '项目负责人',
                width: "8%"
            }, {
                name: '最后更新时间',
                width: "9%"
            }, {
                name: '操作',
                width: "18%"
            }
        ],
        url: '/api/v1/hospitalList?numPerPage={pageSize}&pageNum={currentPage}',
        hasCheckbox: true,
        duplicateRow: true
    };
}