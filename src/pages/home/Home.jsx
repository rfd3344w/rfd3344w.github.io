import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';


export default function Test() {
  const nav = useNavigate();
  // const dispatch = useDispatch();
  // const [data, setData] = useState({});





  return (
    <Container>
      <Typography variant="h5"> home page </Typography>
      <Button variant="contained" onClick={() => nav('')}>
        test
      </Button>



    </Container>

  );
}
