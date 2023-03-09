import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { worksheetColumns, worksheetData } from "../components/Table/uiHelper";

const Worksheet = () => {
  const options = [
    '123', '456'
  ];

  return (
    <Box paddingBottom={4}>
      <h4 className="mb-3">工單管理</h4>
      <Stack direction='row' spacing={2} marginBottom={2}>
        <Autocomplete
          className="me-3"
          size="small"
          sx={{ width: '80%' }}
          renderInput={(params) => <TextField {...params} label="搜尋工單（車號、姓名、電話）" />}
          options={options} />
        <Button variant="contained">查詢</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button variant="contained" className="no-hover-color" href='/addWorksheet'>
          新增工單
        </Button>
      </Stack>

      <Box marginTop={3} sx={{ height: 'calc(100vh - 250px)', width: '100%' }}>
        <DataGrid
          columns={worksheetColumns}
          rows={worksheetData}
          getRowId={(row) => row.id}
          disableColumnMenu={true}
          disableColumnFilter={true}
        />
      </Box>
    </Box>);
}

export default Worksheet;