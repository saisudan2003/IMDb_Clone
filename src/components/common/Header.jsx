import React from 'react'
import { useState } from 'react';
import { AppBar,Toolbar,styled,Box,Typography,InputBase } from '@mui/material'
import { logoURl } from '../../constants/constants'
import { Menu,BookmarkAdd,ExpandMore } from '@mui/icons-material';
import Headermenu from './Headermenu';
import { useNavigate } from 'react-router-dom';
import { routerPath } from '../../constants/route';


const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > * {
        padding: 0 16px;
    }
    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p {
            font-weight: 600;
            font-size: 14px;
        }
    }
    & > p {
        font-weight: 600;
        font-size: 14px;
    }
`;
const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`
const Logo = styled('img')({
    width: 64,
    cursor: 'pointer',
})
function Header() {
    const [open,setOpen] = useState(null);

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

    const handleClose = () => {
        setOpen(null);
    }

    const navigate = useNavigate();

    


  return (
    <AppBar position='static'>
        <StyledToolBar>
            <Logo src={logoURl} alt="" onClick={() => navigate(routerPath.home)}/>
            <Box onClick={handleClick}>
                <Menu/>
                <Typography>Menu</Typography>
            </Box>
            <Headermenu open={open} handleClose={handleClose}/>
            <InputSearchField/>
            <Typography>IMDb<Box component='span'>Pro</Box></Typography>
            <Box>
                <BookmarkAdd/>
                <Typography>WatchList</Typography>
            </Box>
            <Typography>Sign In</Typography>
            <Box>
                <Typography>EN</Typography>
                <ExpandMore/>

            </Box>
        </StyledToolBar>
    </AppBar>
  )
}

export default Header