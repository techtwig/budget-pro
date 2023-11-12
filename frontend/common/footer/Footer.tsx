import {Box, Grid, Tooltip} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import React, {FC, useEffect, useState} from 'react';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import {useRouter} from 'next/navigation';

interface IFooter {
  currentOption?: number;
  newPage?: boolean;
}
const Footer: FC<IFooter> = ({currentOption}) => {
  const Router = useRouter();
  const [selectNewPage, setSelectNewPage] = useState(false);
  const [selectOption, setSelectOption] = useState(currentOption);
  const handleFooterClick = (active: number) => {
    setSelectOption(active);
    return;
  };
  const handleAddButton = (open: boolean) => {
    setSelectNewPage(open);
    return;
  };
  useEffect(() => {
    if (selectOption === 0 && !selectNewPage) {
      Router.push('/dashboard', {scroll: false});
    }
    if (selectOption === 1 && !selectNewPage) {
      Router.push('/statistics', {scroll: false});
    }
    if (selectOption === 3 && !selectNewPage) {
      Router.push('/my-wallet', {scroll: false});
    }
    if (selectOption === 4 && !selectNewPage) {
      Router.push('/settings', {scroll: false});
    }
    if (selectOption === 0 && selectNewPage) {
      Router.push('/add-transaction', {scroll: false});
    }
    if (selectOption === 1 && selectNewPage) {
      Router.push('/eating-out', {scroll: false});
    }
    if (selectOption === 3 && selectNewPage) {
      Router.push('/monthly-budget', {scroll: false});
    }
    if (selectOption === 4 && selectNewPage) {
      Router.push('/settings', {scroll: false});
    }
  }, [Router, selectOption, selectNewPage]);

  console.log('selectNewPage', selectNewPage);
  console.log('Router', Router);
  console.log('selectOption', selectOption);

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
          width: '418px',
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
          <Tooltip title='Dashboard' placement='top'>
            <Box>
              <CustomBottomIcon
                backGround={selectOption === 0 ? '#E7E6E6' : '#fff'}
                onClickBtn={() => handleFooterClick(0)}
                icon={
                  <HomeRoundedIcon sx={{color: '#7F7E80', fontSize: '180%'}} />
                }
              />
            </Box>

            {/*<Button>Data</Button>*/}
          </Tooltip>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Tooltip title='Statistics' placement='top'>
            <Box>
              <CustomBottomIcon
                backGround={selectOption === 1 ? '#E7E6E6' : '#fff'}
                onClickBtn={() => handleFooterClick(1)}
                icon={
                  <PendingRoundedIcon
                    sx={{color: '#7F7E80', fontSize: '180%'}}
                  />
                }
              />
            </Box>
          </Tooltip>
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
          <Tooltip
            title={
              selectOption === 0
                ? 'Add Transaction'
                : selectOption == 1
                ? 'Eating out'
                : selectOption === 3
                ? 'Add Budget'
                : 'Settings'
            }
            placement='top'>
            <Box>
              <CustomBottomIcon
                onClickBtn={() => handleAddButton(true)}
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
            </Box>

            {/*<Button>Data</Button>*/}
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Tooltip title='Wallet' placement='top'>
            <Box>
              <CustomBottomIcon
                backGround={selectOption === 3 ? '#E7E6E6' : '#fff'}
                onClickBtn={() => handleFooterClick(3)}
                icon={
                  <TypeSpecimenIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '180%',
                    }}
                  />
                }
              />
            </Box>

            {/*<Button>Data</Button>*/}
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Tooltip title='Settings' placement='top'>
            <Box>
              <CustomBottomIcon
                backGround={selectOption === 4 ? '#E7E6E6' : '#fff'}
                onClickBtn={() => handleFooterClick(4)}
                icon={
                  <MemoryRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '180%',
                    }}
                  />
                }
              />
            </Box>

            {/*<Button>Data</Button>*/}
          </Tooltip>
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
