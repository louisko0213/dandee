import { Autocomplete, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { initWorksheet, WorksheetType } from "../core/model/WorksheetModel";

const AddWorksheet = () => {
  const [worksheet, setWorksheet] = useState<WorksheetType>(initWorksheet);
  const createWorksheet = () => {

  };
  const options = ['123'];

  return (
    <Box paddingBottom={4}>
      <h4 className="mb-3">建立工單</h4>
      <Box component="form">
        <Grid container spacing={4}>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={3}>
              <Autocomplete
                renderInput={(params) => <TextField {...params} label="車號" />}
                options={options}
                value={worksheet.plateNumber}
                onSelect={(e) => setWorksheet(prev => ({
                  ...prev,
                  // plateNumber
                }))} />
            </Grid>
            <Grid item sm={12} md={2}>
              <TextField
                select
                id="outlined-required"
                SelectProps={{ native: true }}
                value={worksheet.status}
                onChange={(e) => setWorksheet(prev => ({
                  ...prev,
                  status: e.target.value as WorksheetType['status']
                }))}>
                {[{ id: 'unfinished', value: '施工中' }, { id: 'finished', value: '已完工' }].map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={6}>
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">
                  <h6 className="text-black">服務項目</h6>
                </FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    style={{ minWidth: '150px' }}
                    control={<Checkbox name="gilad" />}
                    label="Gilad Gray" />
                  <FormControlLabel
                    style={{ minWidth: '150px' }}
                    control={<Checkbox name="jason" />}
                    label="Jason Killian" />
                  <FormControlLabel
                    style={{ minWidth: '150px' }}
                    control={<Checkbox name="antoine" />}
                    label="Antoine Llorca" />
                  <FormControlLabel
                    style={{ minWidth: '150px' }}
                    control={<Checkbox name="antoine" />}
                    label="Antoine Llorca" />
                  <FormControlLabel
                    style={{ minWidth: '150px' }}
                    control={<Checkbox name="antoine" />}
                    label="Antoine Llorca" />
                  <FormControlLabel
                    style={{ minWidth: '150px' }}
                    control={<Checkbox name="antoine" />}
                    label="Antoine Llorca" />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item sm={12} md={2}>
              <h6>剩餘洗車券：4</h6>
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={3}>
              <TextField
                disabled
                type='number'
                id="outlined-required"
                label="金額"
                value={worksheet.amount}
                onChange={(e) => setWorksheet(prev => ({
                  ...prev,
                  amount: +e.target.value
                }))} />
            </Grid>
            <Grid item sm={12} md={3}>
              <TextField
                id="outlined-required"
                label="折扣優惠"
                value={worksheet.discount ? String(worksheet.discount) : ''}
                onChange={(e) => setWorksheet(prev => ({
                  ...prev,
                  discount: +e.target.value
                }))} />
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={3}>
              <TextField
                disabled
                id="outlined-required"
                label="鍍膜到期日"
                value={worksheet.coating_time} />
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={8}>
              <TextField
                id="outlined-required"
                label="備註"
                value={worksheet.comment}
                onChange={(e) => setWorksheet(prev => ({
                  ...prev,
                  comment: e.target.value
                }))} />
            </Grid>
          </Grid>
        </Grid>

        <Stack marginTop={7} spacing={2} direction='row'>
          <Button type="submit" variant="contained" onClick={(e) => {
            e.preventDefault();
            createWorksheet();
          }}>
            儲存
          </Button>
          <Button className="bg-danger no-hover-color" variant="contained" href="/worksheet">
            取消
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default AddWorksheet;