import { Box, Button, Stack } from "@mui/material";

const Header = () => {
  return (
    <Box position='relative' marginLeft='16rem' height={70}>
      <Stack padding={2} direction='row' position='absolute' className="end-0" color='#001a4e'>
        <Button color="inherit">
          <h6>User name</h6>
        </Button>
        <Button color="inherit">
          <h6>登出</h6>
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;