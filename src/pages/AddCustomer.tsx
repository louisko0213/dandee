import { Button, Grid, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { carSizeType, carType } from "../core/model/CarModel";
import { CustomerType, initCustomer } from "../core/model/CustomerModel";

const AddCustomer = () => {
  const [customer, setCustomer] = useState<CustomerType>(initCustomer);
  const createCustomer = () => {

  };

  return (
    <Box paddingBottom={4}>
      <h4 className="mb-3">建立客戶資料</h4>
      <Box component="form">
        <Grid container spacing={4}>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={3}>
              <TextField
                required
                id="outlined-required"
                label="車牌"
                value={customer.plateNumber}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  plateNumber: e.target.value
                }))} />
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={3}>
              <TextField
                required
                id="outlined-required"
                label="姓名"
                value={customer.name}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  name: e.target.value
                }))} />
            </Grid>

            <Grid item sm={12} md={2}>
              <TextField
                required
                select
                SelectProps={{ native: true }}
                id="outlined-required"
                label="性別"
                value={customer.gender}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  gender: e.target.value as CustomerType['gender']
                }))}>
                {[{ id: 'male', value: '男' }, { id: 'female', value: '女' }].map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={6}>
              <TextField
                required
                id="outlined-required"
                label="地址"
                value={customer.address}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  address: e.target.value
                }))} />
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={3}>
              <TextField
                required
                id="outlined-required"
                label="廠牌"
                value={customer.brand}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  brand: e.target.value
                }))} />
            </Grid>

            <Grid item sm={12} md={3}>
              <TextField
                required
                id="outlined-required"
                label="車種"
                value={customer.model}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  model: e.target.value
                }))} />
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={3}>
              <TextField
                required
                select
                SelectProps={{ native: true }}
                id="outlined-required"
                label="車型"
                value={customer.size}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  size: e.target.value as carSizeType
                }))}>
                {carType.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item sm={12} md={3}>
              <TextField
                required
                id="outlined-required"
                label="車色"
                value={customer.color}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  color: e.target.value
                }))} />
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item sm={12} md={3}>
              <TextField
                required
                id="outlined-required"
                label="電話1"
                value={customer.phoneOne}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  phoneOne: e.target.value
                }))} />
            </Grid>

            <Grid item sm={12} md={3}>
              <TextField
                id="outlined-required"
                label="電話2"
                value={customer.phoneTwo}
                onChange={(e) => setCustomer(prev => ({
                  ...prev,
                  phoneTwo: e.target.value
                }))} />
            </Grid>
          </Grid>

          <Grid item sm={12} md={8}>
            <TextField
              id="outlined-required"
              label="備註"
              value={customer.comment}
              onChange={(e) => setCustomer(prev => ({
                ...prev,
                comment: e.target.value
              }))} />
          </Grid>
        </Grid>
        <Stack marginTop={4} spacing={2} direction='row'>
          <Button type="submit" variant="contained" onClick={(e) => {
            e.preventDefault();
            createCustomer();
          }}>
            儲存
          </Button>
          <Button className="bg-danger no-hover-color" variant="contained" href="/">
            取消
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default AddCustomer;