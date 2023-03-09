import { GridColDef } from "@mui/x-data-grid";

export const customerColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: '#',
    sortable: false,
    width: 70,
    align: 'center',
  },
  {
    field: 'plateNumber',
    headerName: '車牌',
    sortable: false,
    width: 150
  },
  {
    field: 'name',
    headerName: '姓名',
    sortable: false
  },
  {
    field: 'gender',
    headerName: '性別',
    sortable: false
  },
  {
    field: 'phone',
    headerName: '電話1',
    sortable: false,
    width: 150
  },
  {
    field: 'phoneTwo',
    headerName: '電話2',
    sortable: false,
    width: 150
  },
  {
    field: 'address',
    headerName: '地址',
    sortable: false,
    width: 400
  },
  {
    field: 'brand',
    headerName: '廠牌',
    sortable: false,
    width: 120
  },
  {
    field: 'model',
    headerName: '車種',
    sortable: false,
    minWidth: 130
  },
  {
    field: 'size',
    headerName: '車型',
    sortable: false
  },
  {
    field: 'color',
    headerName: '車色',
    sortable: false,
    minWidth: 120
  },
  {
    field: 'last',
    headerName: '最後消費日期',
    sortable: false,
    width: 150
  },
  {
    field: 'createdAt',
    headerName: '建立日期',
    sortable: false,
    width: 150
  },
  {
    field: 'creator',
    headerName: '建檔人員',
    sortable: false,
    width: 150
  },
  {
    field: 'comment',
    headerName: '備註',
    sortable: false,
    minWidth: 200
  }
];

export const customerData = [
  {
    id: '1',
    plateNumber: 'BPL-2638',
    gender: '男',
    name: '柯智獻',
    phone: '0975775227',
    phoneTwo: '0972227845',
    address: '台中市烏日區環河路四段278號',
    brand: 'BMW',
    model: '420i',
    size: '中',
    color: '深藍',
    last: '2023/03/10',
    createdAt: '2022/01/01',
    creator: '柯智獻',
    comment: '帥哥'
  }
];

export const worksheetColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: '#',
    sortable: false,
    width: 70,
    align: 'center',
  },
  {
    field: 'createdAt',
    headerName: '日期',
    sortable: false,
    width: 150
  },
  {
    field: 'plateNumber',
    headerName: '車號',
    sortable: false,
    width: 150
  },
  {
    field: 'name',
    headerName: '姓名',
    sortable: false
  },
  {
    field: 'brand',
    headerName: '廠牌',
    sortable: false,
    width: 120
  },
  {
    field: 'model',
    headerName: '車種',
    sortable: false,
    minWidth: 130
  },
  {
    field: 'size',
    headerName: '車型',
    sortable: false
  },
  {
    field: 'color',
    headerName: '車色',
    sortable: false,
    minWidth: 120
  },
  {
    field: 'service',
    headerName: '服務項目',
    sortable: false,
    width: 300
  },
  {
    field: 'amount',
    headerName: '金額',
    sortable: false,
    width: 150
  },
  {
    field: 'discount',
    headerName: '折扣優惠',
    sortable: false,
    width: 150
  },
  {
    field: 'status',
    headerName: '狀態',
    sortable: false,
    width: 150
  },
  {
    field: 'comment',
    headerName: '備註',
    sortable: false,
    minWidth: 300
  },
  {
    field: 'creator',
    headerName: '建檔人員',
    sortable: false,
    width: 150
  }
];

export const worksheetData = [
  {
    id: '1',
    createdAt: '2023/09/30',
    plateNumber: 'BPL-2638',
    name: '柯智獻',
    brand: 'BMW',
    model: '420i',
    size: '中',
    color: '深藍',
    amount: '123456',
    discount: '0',
    status: '已完工',
    creator: '柯智獻',
    comment: '帥哥'
  }
];