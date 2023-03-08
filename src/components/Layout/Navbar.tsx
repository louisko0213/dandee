import { Box, Button, Link, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      position='fixed'
      className="shadow top-0"
      color='#001a4e'
      style={{ width: '16rem', height: '100%' }}>

      <Stack padding={3}>
        <h4 className="text-center">丹迪汽車美容</h4>
      </Stack>

      <Button color="inherit" className="p-0 w-100">
        <Link
          href="/"
          color="inherit"
          underline="none"
          className="w-100 px-5 py-2"
          sx={{ textAlign: 'left' }}>
          客戶資料管理
        </Link>
      </Button>

      <Button color="inherit" className="p-0 w-100">
        <Link
          href="/work"
          color='inherit'
          underline="none"
          className="w-100 px-5 py-2"
          sx={{ textAlign: 'left' }}>
          工單管理
        </Link>
      </Button>

      <Button color="inherit" className="p-0 w-100">
        <Link
          href="/consumption"
          color="inherit"
          underline="none"
          className="w-100 px-5 py-2"
          sx={{ textAlign: 'left' }}>
          消費紀錄管理
        </Link>
      </Button>

      <Button color="inherit" className="p-0 w-100">
        <Link
          href="/service"
          color="inherit"
          underline="none"
          className="w-100 px-5 py-2"
          sx={{ textAlign: 'left' }}>
          服務項目管理
        </Link>
      </Button>

      <Button color="inherit" className="p-0 w-100">
        <Link
          href="/turnover"
          color="inherit"
          underline="none"
          className="w-100 px-5 py-2"
          sx={{ textAlign: 'left' }}>
          營業額查詢
        </Link>
      </Button>
    </Box>
  );
}

export default Navbar;