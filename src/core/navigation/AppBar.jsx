import React, { useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/system';
import {
  AppBar as AppBarMui,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Grid,
  MenuItem,
  Avatar,
  Box,
  Link,
} from '@mui/material';

import CalculateIcon from '@mui/icons-material/Calculate';




export default function AppBar({
  height = 90,
}) {


  return (
    <AppBarMui position="static">
      <Container disableGutters>
        <Toolbar>
          <Grid container flexGrow={1} >
            <LinkIcon href="/calculator.html" >
              <CalculateIcon />
            </LinkIcon>




          </Grid>


          <IconButton color="inherit">
            <Avatar alt="" src="/fish1.png" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBarMui>
  );
}

const LinkIcon = (props) => <Link
  color="inherit"
  mr={1}
  sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
  {...props}
/>;