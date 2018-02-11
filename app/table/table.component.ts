/**
 *  @author: anwen
 */
import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
  Directive,
  HostListener,
  Injectable,
  ViewChild,
  ElementRef,
  ContentChild,
  TemplateRef
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { TableModel } from './table.model';
// import { InterceptorService } from 'ng2-interceptors';

interface ListData {
  code: number,
  data?: Array<any>,
  message?: string
}

@Directive({ selector: 'th[cell]' })
export class TChangeCell {
  tTD: any;//用来存储当前更改宽度的Table cell，避免快速移动鼠标的问题

  @HostListener('mousedown', ['$event'])
  onMouseDown($event: any) {
    let tcell = $event.target;
    while (tcell.tagName.toUpperCase() !== 'TH') {
      tcell = tcell.parentElement;
    }
    this.tTD = tcell;
    if ($event.offsetX > this.tTD.offsetWidth - 10) {
      this.tTD.mouseDown = true;
      this.tTD.oldX = $event.x;
      this.tTD.oldWidth = this.tTD.offsetWidth;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp($event: any) {
    let tcell = $event.target;
    while (tcell.tagName.toUpperCase() !== 'TH') {
      tcell = tcell.parentElement;
    }
    if (this.tTD == undefined)
      this.tTD = tcell;
    this.tTD.mouseDown = false;
    this.tTD.style.cursor = 'default';
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: any) {
    let tcell = $event.target;
    while (tcell.tagName.toUpperCase() !== 'TH') {
      tcell = tcell.parentElement;
    }
    //更改鼠标样式
    if ($event.offsetX > tcell.offsetWidth - 10) {
      tcell.style.cursor = 'col-resize';
    }
    else
      tcell.style.cursor = 'default';

    //取出暂存的Table Cell
    if (this.tTD == undefined) this.tTD = tcell;

    //调整宽度
    if (this.tTD.mouseDown != null && this.tTD.mouseDown == true) {
      this.tTD.style.cursor = 'default';//默认
      if ((this.tTD.oldWidth + ($event.x - this.tTD.oldX)) > 0) {
        this.tTD.width = this.tTD.oldWidth + ($event.x - this.tTD.oldX);
      }
      this.tTD.style.width = this.tTD.width;
      this.tTD.style.cursor = 'col-resize';
    }
  }
}

//用于设置url，快速获取列表数据
@Injectable()
class TableService {
  patternCurr = /\{currentPage\}/;
  patternSize = /\{pageSize\}/;

  constructor(
    public http: Http) {
  }

  loadDataByUrl(url: string, condition: string, currentPage: number, pageSize: number) {
    if (url) {
      url = url.replace(this.patternCurr, currentPage + "");
      url = url.replace(this.patternSize, pageSize + "");
    }
    if (condition) {
      url = url + "&" + condition;
    }
    return this.http.get(url)
      .toPromise()
      .then(this.extractJson)
      .catch(this.handleError);
  }

  private extractJson(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  isEmptyObject(obj: any) {
    for (var name in obj) {
      return false;
    }
    return true;
  }
}


@Component({
  selector: 'ip-table',
  template: require('./table.component.html'),
  styles: [
    require('./table.component.css') + ""
  ],
  providers: [
    TableService,
    TableModel,
  ]
})
export class TableComponent implements OnInit, OnChanges {
  @Input() table: TableModel;
  @Input() condition: string = "";
  @Input() isFixedHeader: boolean;
  @Input() noInit: boolean = false;
  @Output() emitPagination = new EventEmitter();
  @ContentChild('tableTemplate') tableTemplate: any;

  idAttr: string;    //checkbox 初始化选中状态
  blinkPage: number = 1;  //跳转页
  error: any;
  pagination: any = {}; //分页信息

  pageSizeShow: boolean = false;

  @HostListener('document:click', ['$event'])
  onClickDoc($event: any) {
      this.pageSizeShow = false;
  }

  constructor(
    public tableModel: TableModel,
    private tableService: TableService,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.table.elementRef = this.elementRef; //elementRef
  }

  private productList: any[] = [];
  private statusList: any[] = ['已审核', '空/未定义', '已保存/未审核', '未审核'];
  ngOnInit() {
    // if(!this.noInit) this.loadDataByUrl();
    this.productList = [{
  "subjectId": "1",
  "subjectType": "PRODUCT",
  "ruleSetCode": "code1",
  "version": null,
  "drugName": null,
  "orderNo": null,
  "formulation": "注射液1",
  "adminroute": null,
  "productid": "1",
  "chineseproductname": "我是测试数据1",
  "chinesemedname": "10%我是测试数据1",
  "chinesemanufacturename": "测试数据有限公司1",
  "dictformulation": "注射液1",
  "chinesespecification": "500ml:50g",
  "ruleStatus": "1"
}, {
  "subjectId": "2",
  "subjectType": "PRODUCT",
  "ruleSetCode": "code2",
  "version": null,
  "drugName": null,
  "orderNo": null,
  "formulation": "我是测试数据2",
  "adminroute": null,
  "productid": "2",
  "chineseproductname": "我是测试数据2",
  "chinesemedname": "我是测试数据2",
  "chinesemanufacturename": "我是测试数据总厂2",
  "dictformulation": "我是测试数据2",
  "chinesespecification": "0.1g",
  "ruleStatus": "1"
}, {
  "subjectId": "3",
  "subjectType": "PRODUCT",
  "ruleSetCode": "code3",
  "version": null,
  "drugName": null,
  "orderNo": null,
  "formulation": "我是测试数据3",
  "adminroute": null,
  "productid": "3",
  "chineseproductname": "我是测试数据3",
  "chinesemedname": "我是测试数据3",
  "chinesemanufacturename": "我是测试数据有限公司3",
  "dictformulation": "我是测试数据3",
  "chinesespecification": "100ml(1ml:1mg)",
  "ruleStatus": "1"
}];
    this.table.totalCount = 3;
    this.table.totalPageCount = 1;

    this.table = this.tableModel.extend(new TableModel(), this.table); //设置默认值
  }

  /****判断是否是带有checkbox */
  hasCheckboxInTable(): boolean {
    return this.table.hasCheckbox;
  }


  loadDataByUrl(url?: string, isSearch?: boolean) {
    if(!this.table) {
      this.table = this.tableModel.extend(new TableModel(), this.table);
    }
    let params = arguments;
    if (arguments.length > 0) {
      for (let i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i]) == 'string') {
          this.table.url = url;
        } else if (typeof (arguments[i]) == 'boolean' && arguments[i]) {
          this.table.currentPage = 1;
        }
      }
    }
    const that = this;
    this.pagination.pageSize = this.table.pageSize;
    this.pagination.currentPage = this.table.currentPage;
    this.emitPagination.emit(this.pagination);

    this.tableService
      .loadDataByUrl(this.table.url, this.condition, this.table.currentPage, this.table.pageSize)
      .then(
      this.showData.bind(this),
      error => this.error = error
      );
  }

  /**
   * 以列表的形式显示数据
  */
  showData(response: ListData) {
    let result = response.data;
    let contentRef = this.elementRef.nativeElement.children[0];
    let listRef = typeof contentRef === undefined ? null : contentRef.getElementsByClassName('flex1')[0]

    // 加载数据成功
    this.table.dataList = this.tableModel.getDataListFromResult(result, this.table.dataListPath);

    this.table.doubleDataList = new Array<any>();
    this.table.trHiddens = new Array<boolean>();
    this.table.tdHiddens = new Array<boolean>();

    if (this.tableService.isEmptyObject(this.table.dataList)) {
      this.table.currentPage = 1;
      this.table.totalCount = 0;
      this.table.totalPageCount = 0;
    } else {
      //数据列表存储为连双份如[a,b,c]存一份为[a,a,b,b,c,c]
      for (let i = 0; i < this.table.dataList.length; i++) {
        this.table.doubleDataList[this.table.doubleDataList.length] = this.table.dataList[i];
        this.table.doubleDataList[this.table.doubleDataList.length] = this.table.dataList[i];
      }

      this.table.totalCount = this.tableModel.getCountFromResult(result, this.table.itemCountPath);
      this.table.totalPageCount = this.tableModel.getCountFromResult(result, this.table.pageCountPath)
        ? this.tableModel.getCountFromResult(result, this.table.pageCountPath) :
        Math.ceil(this.table.totalCount / this.table.pageSize);
      if (this.table.currentPage > this.table.totalPageCount) {
        this.table.currentPage = this.table.totalPageCount;
        this.loadDataByUrl();
      }
    }

    // 跳转到第一条记录
    if (listRef)
      listRef.scrollTop = 0
  }

  setData(list: any) {
    this.table.dataList = list;
  }

  getData() {
    return this.table.dataList;
  }

  setPage(page: any) {
    this.table.currentPage = page;
  }

  setPageSize(pageSize: any) {
    this.table.pageSize = pageSize;
  }

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onDblClick: EventEmitter<any> = new EventEmitter();
  @Output() onCheck: EventEmitter<any> = new EventEmitter();//type

  //页面点击跳转事件
  prePage() {
    this.table.currentPage--;
    this.tableModel.checkedRowsArr = [];
    this.loadDataByUrl();
  }

  nextPage() {
    this.table.currentPage++;
    this.tableModel.checkedRowsArr = [];
    this.loadDataByUrl();
  }

  turnToHomePage() {
    this.table.currentPage = 1;
    this.tableModel.checkedRowsArr = [];
    this.loadDataByUrl();
  }

  turnToEndPage() {
    this.table.currentPage = this.table.totalPageCount;
    this.tableModel.checkedRowsArr = [];
    this.loadDataByUrl();
  }

  setFocus(trow: any) {
    this.tableModel.setFocus(trow);
  }

  /**
   * 校验用户输入的页面是否合法
   * 不合法自动校正
  */
  checkPage(page?: number | string) {
    if (page === "") return; // 没有输入就不做矫正

    let inputPage = page ? page : this.blinkPage;
    if (inputPage < 1) {
      inputPage = 1;
    } else if (inputPage > this.table.totalPageCount) {
      inputPage = this.table.totalPageCount;
    }

    this.table.currentPage = <number>inputPage;
    this.blinkPage = <number>inputPage;
    this.tableModel.checkedRowsArr = [];
    this.onCheck.emit(this.tableModel.checkedRowsArr);
  }

  specificPage(currentPage?: number) {
    this.checkPage(currentPage);
    this.loadDataByUrl();
  }

  onRowClick(rowData: any, $event:any) {
    this.onClick.emit(rowData);
    this.setFocus(rowData);
    if (this.hasCheckboxInTable())
      this.checkBox(!this.isContains(rowData), rowData, $event);
  }
  onRowDblClick(rowData: any, $event) {
    if($event.target.className.indexOf('fake-checkbox') != -1){
      return;
    }
    this.onDblClick.emit(rowData);
  }

  onChangePageSize() {
    this.loadDataByUrl();
  }

  //捕获变化
  ngOnChanges(changes: any) {
    if (changes.condition && changes.condition.currentValue && changes.condition.currentValue != changes.condition.previousValue)
      this.loadDataByUrl();
  }

  updateUrl(url: string) {
    this.table.url = url;
    this.loadDataByUrl();
  }

  /**********多选框点击全选****** */
  checkBoxes(checked: boolean) {
    this.tableModel.checkedRowsArr = [];
    if (checked) {
      this.tableModel.checkedRowsArr = this.table.dataList.concat();
    } else {
      this.tableModel.checkedRowsArr = [];
    }
    let checkedArr = this.tableModel.checkedRowsArr
    let params = { checkedArr, checked }
    this.onCheck.emit(this.tableModel.checkedRowsArr);
  }

  /*************点击多选框选择行*****
   * @Param checked:该行是否被选中，true选中，false未选中
   *        data:改行附带的数据
   */
  checkBox(checked: boolean, data: any, $event:any) {
    if (checked) {
      this.tableModel.checkedRowsArr.push(data);
    } else {
      this.removeObjFromArr(data);
    }
    $event.stopPropagation();
    this.onCheck.emit(this.tableModel.checkedRowsArr);
  }

  /**
   * 选中checkBox 状态
   */

  checkedStatus(trow: any, checkItem: any, checkLabel: any, $event:any) {
    checkItem.id = trow.id;
    checkLabel.attributes.for.value = trow.id;
    $event.stopPropagation();
  }

  isAllChecked(): boolean {
    if(this.tableModel.checkedRowsArr.length){
      let currentSize = this.table.pageSize > this.table.totalCount ? this.table.totalCount : this.table.pageSize;
      return this.tableModel.checkedRowsArr.length == currentSize; //length
    }
    return false;
  }

  setCheckedRowsArr(arr) {
    this.tableModel.checkedRowsArr = arr;
  }

  isChecked(data: any): boolean {
    return this.isContains(data);
  }

  //样式调整，聚焦focused，checked
  isFocus(data: any): boolean {
    return data == this.tableModel.focusRow;
  }

  /********** 数组相关操作 ******
   * 
  */
  //判断元素obj是否存在在该数组arr中
  private isContains(obj: any): boolean {
    // debugger;
    for (let index = 0; index < this.tableModel.checkedRowsArr.length; index++) {
      if (this.tableModel.checkedRowsArr[index][this.idAttr] == obj.id) {
        return true;
      }
      if (this.tableModel.checkedRowsArr[index].id == obj.id) {
        return true;
      }
    }
    return false;
  }

  private removeObjFromArr(obj: any) {
    this.tableModel.checkedRowsArr.splice(this.tableModel.checkedRowsArr.indexOf(obj), 1);
    return true;
  }

  tableScroll($event){
      $event = $event.target || $event;

      let titles = document.getElementsByClassName('dr-fix-title'),
          table2 = document.getElementById('table2');

      for(let i=titles.length-1; i>=0; i--){
          titles[i]['style'].top = $event.scrollTop + 'px';
      }

      table2.style.marginTop = $event.scrollTop + 'px';
      table2.scrollTop = $event.scrollTop;
  }

  selectSize(size,$event){
    this.table.pageSize = size;

    this.table.currentPage = 1;

    this.onChangePageSize();

    $event.stopPropagation();

    this.pageSizeShow = false;
  }
}

