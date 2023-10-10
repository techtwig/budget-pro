import {Box, Grid} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import React, {FC, useEffect, useState} from 'react';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import {useRouter} from 'next/navigation';

interface IFooter {
  currentOption?: number;
}
const Footer: FC<IFooter> = ({currentOption}) => {
  const Router = useRouter();
  const [selectOption, setSelectOption] = useState(currentOption);
  const handleWalletClick = (active: number) => {
    setSelectOption(active);
    return;
  };
  useEffect(() => {
    if (selectOption === 0) {
      Router.push('/dashboard', {scroll: false});
    }
    if (selectOption === 1) {
      Router.push('/statistics', {scroll: false});
    }
    if (selectOption === 3) {
      Router.push('/my-wallet', {scroll: false});
    }
    if (selectOption === 4) {
      Router.push('/settings', {scroll: false});
    }
  }, [selectOption]);
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          position: 'fixed',
          bottom: '0px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderTop: '2px solid #F6F5F6',
          width: '429px',
          pb: '15px',
          pt: '15px',
        }}>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomBottomIcon
            backGround={selectOption === 0 ? '#E7E6E6' : '#fff'}
            onClickBtn={() => handleWalletClick(0)}
            icon={<HomeRoundedIcon sx={{color: '#7F7E80', fontSize: '180%'}} />}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomBottomIcon
            backGround={selectOption === 1 ? '#E7E6E6' : '#fff'}
            onClickBtn={() => handleWalletClick(1)}
            icon={
              <PendingRoundedIcon sx={{color: '#7F7E80', fontSize: '180%'}} />
            }
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid
          item
          xs={3}
          sx={{
            position: 'absolute',
            left: '45%',
            right: '45%',
            bottom: '30px',
          }}>
          <CustomBottomIcon
            backGround={selectOption === 2 ? '#E7E6E6' : 'transparent'}
            onClickBtn={() => handleWalletClick(2)}
            icon={
              <AddCircleOutlinedIcon
                sx={{
                  color: '#040303',
                  borderRadius: '50%',
                  textAlign: 'center',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '450%',
                  backgroundColor: '#F0EFEF',
                  m: '10px',
                }}
              />
            }
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomBottomIcon
            backGround={selectOption === 3 ? '#E7E6E6' : '#fff'}
            onClickBtn={() => handleWalletClick(3)}
            icon={
              <TypeSpecimenIcon
                sx={{
                  color: '#7F7E80',
                  fontSize: '180%',
                }}
              />
            }
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomBottomIcon
            backGround={selectOption === 4 ? '#E7E6E6' : '#fff'}
            onClickBtn={() => handleWalletClick(4)}
            icon={
              <MemoryRoundedIcon
                sx={{
                  color: '#7F7E80',
                  fontSize: '180%',
                }}
              />
            }
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
interface Props {
  icon?: any;
  backgroundColor?: any;
  children?: any;
  onClickBtn?: any;
  backGround?: any;
  icons?: any;
  borderRadius?: any;
}
const CustomBottomIcon: FC<Props> = ({icon, onClickBtn, backGround}) => {
  return (
    <Box
      onClick={onClickBtn}
      sx={{
        display: 'flex',
        backgroundColor: backGround,
        cursor: 'pointer',
        borderRadius: '10px',
        height: '45px',
        width: '45px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Box>{icon}</Box>
    </Box>
  );
};
