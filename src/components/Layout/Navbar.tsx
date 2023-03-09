import { Box, Button, Link, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const router = useLocation();

  const navList = [
    {
      href: '/',
      pageName: '客戶資料管理'
    },
    {
      href: '/worksheet',
      pageName: '工單管理'
    },
    {
      href: '/consumption',
      pageName: '消費紀錄管理'
    },
    {
      href: '/service',
      pageName: '服務項目管理'
    },
    {
      href: '/turnover',
      pageName: '營業額查詢'
    }
  ];

  return (<>
    <Box
      position='fixed'
      className="shadow top-0"
      color='#001a4e'
      style={{ width: '16rem', height: '100%' }}>
      <Stack padding={3}>
        <h4 className="text-center">丹迪汽車美容</h4>
      </Stack>
      {navList.map(page => (
        <Button key={page.href} color={router.pathname.endsWith(page.href) ? 'primary' : 'inherit'} className="p-0 w-100">
          <Link
            href={page.href}
            color="inherit"
            underline="none"
            className="w-100 px-5 py-2"
            sx={{ textAlign: 'left' }}>
            {page.pageName}
          </Link>
        </Button>
      ))}
    </Box>
  </>);
}

export default Navbar;