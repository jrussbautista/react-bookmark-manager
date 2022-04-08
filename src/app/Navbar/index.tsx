import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import styled from '@mui/system/styled';
import Drawer from 'app/drawer';
import { LINKS } from 'constants/app';

const AppBarContainer = styled('div')({
  flexGrow: 1,
});

const RightContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const ButtonLink = styled(Button)({
  marginRight: 20,
  color: 'white',
  display: 'block',
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const LinksContainer = styled('div')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <AppBarContainer>
        <AppBar position="static">
          <Toolbar>
            <Title variant="h6">Bookmarks</Title>
            <RightContainer>
              <LinksContainer>
                {LINKS.map((link) => (
                  <ButtonLink key={link.title}>{link.title}</ButtonLink>
                ))}
                <Button
                  onClick={() => navigate('/bookmarks/add')}
                  variant="contained"
                  color="info"
                  disableElevation
                >
                  Add Bookmark
                </Button>
              </LinksContainer>

              <MenuButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open menu"
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </MenuButton>
            </RightContainer>
          </Toolbar>
        </AppBar>
      </AppBarContainer>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
};

export default Navbar;
