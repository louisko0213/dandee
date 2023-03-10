import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns, customerData } from "../components/Table/uiHelper";

const Customer = () => {
  const options = [
    '123', '456'
  ];

  return (
    <Box paddingBottom={4}>
      <h4 className="mb-3">查詢客戶資料</h4>
      <Stack direction='row' spacing={2} marginBottom={2}>
        <Autocomplete
          className="me-3"
          size="small"
          sx={{ width: '80%' }}
          renderInput={(params) => <TextField {...params} label="搜尋客戶資料（車號、姓名、電話）" />}
          options={options} />
        <Button variant="contained">查詢</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button variant="contained" className="no-hover-color" href='/addCustomer'>
          新增客戶
        </Button>
        <Button variant="contained">
          鍍膜保養通知
        </Button>
      </Stack>

      <Box marginTop={3} sx={{ height: 'calc(100vh - 250px)', width: '100%' }}>
        <DataGrid
          columns={customerColumns}
          rows={customerData}
          getRowId={(row) => row.id}
          disableColumnMenu={true}
          disableColumnFilter={true}
        />
      </Box>
    </Box>);
}

export default Customer;