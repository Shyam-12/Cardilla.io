import '../../styles/dashboard.css';
import { useLogout } from '../../hooks/useLogout';
import React, { useState } from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import '../../styles/dashboard.css';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
  Container,
  Box,
  // Button,
  // TextField,
  Card,
  CardContent,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PaymentIcon from '@material-ui/icons/Payment';
import HistoryIcon from '@material-ui/icons/History';
import CreditCardInfoSection from './CreditCardInfoSection';
import PendingBills from './pendingBills';
import AddBill from './AddBill';
// import logo from '../../public/images/logo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    justifyContent: 'space-between', // Align the elements horizontally
    alignItems: 'center', // Align the elements vertically
    padding: theme.spacing(1, 2), 
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menu: {
    position: 'relative',
    screenLeft: "30px"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const { logout } = useLogout();

  const [open, setOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [isCreditCardSubmitted, setIsCreditCardSubmitted] = useState(false);

  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: new Date(),
    cvv: '',
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For this example, we just refresh the page
    window.location.reload();
    logout();
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleCreditCardInfoChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'expirationDate') {
      setCreditCardInfo({ ...creditCardInfo, expirationDate: new Date(value) });
    } else {
      setCreditCardInfo({ ...creditCardInfo, [name]: value });
    }
  };

  const handleCreditCardSubmit = (e) => {
    e.preventDefault();

    if (
      creditCardInfo.cardNumber.trim === '' || creditCardInfo.cardNumber.length !== 16 ||
      creditCardInfo.cardHolderName.trim === '' ||
      creditCardInfo.expirationDate.trim === '' ||
      creditCardInfo.cvv.trim === '' ||
      creditCardInfo.cvv.length !== 3 // Assuming CVV has 3 characters
    ) {
      // Show an error message or take appropriate action
      alert('Please fill in all credit card details correctly.');
      return;
    }

    // Implement your credit card submission logic here
    setSelectedSection('dashboard');
    console.log('Credit card info:', creditCardInfo);
    setIsCreditCardSubmitted(true);
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        if (isCreditCardSubmitted) {
          return (
            <Card>
              <CardContent>
                <Typography variant="h6">Welcome to Your Dashboard</Typography>
                {/* Display the credit card details in the Dashboard */}
                <Typography>Card Number: {creditCardInfo.cardNumber}</Typography>
                <Typography>Card Holder Name: {creditCardInfo.cardHolderName}</Typography>
                <Typography>Expiration Date: {creditCardInfo.expirationDate.toISOString().slice(0, 7)}</Typography>
                <Typography>
                  CVV: {creditCardInfo.cvv.replace(/\d/g, '*')}
                </Typography>
                {/* Add other dashboard content here */}
              </CardContent>
            </Card>
          );
        } else {
          // If credit card details are not submitted, show a message or default dashboard content
          return (
            <Card>
              <CardContent>
                <Typography variant="h6">Welcome to Your Dashboard</Typography>
                <Typography>
                  Please submit your credit card information to view the dashboard content.
                </Typography>
                {/* Add other default dashboard content here */}
              </CardContent>
            </Card>
          );
        }
      case 'creditCardForm':
        return (
          <CreditCardInfoSection
            creditCardInfo={creditCardInfo}
            handleCreditCardInfoChange={handleCreditCardInfoChange}
            handleCreditCardSubmit={handleCreditCardSubmit}
          />
        );
      case 'transactionHistory':
        return (
          <Card>
            <CardContent>
              <Typography variant="h6">Transaction History</Typography>
              {/* Display the user's transaction history */}
            </CardContent>
          </Card>
        );
      case 'addBill':
          return (
            <Card>
              <CardContent>
                <Typography variant="h6">Add a Bill</Typography>
                {/* Display the user's transaction history */}
                <AddBill />
              </CardContent>
            </Card>
          )
      case 'pendingBills':
        return (
          <div>
              <Card>
                <CardContent>
                  <Typography variant="h6">Pending Bills</Typography>
                  {/* Display the user's pending bills */}
                  <PendingBills />
                </CardContent>
              </Card>
          </div>
        );
      default:
        return null;
    }
  };
  

  return (
    <div className={classes.root}>
      {/* App Bar */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            aria-label="menu"
            className={classes.menu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <b>Cardilla</b>
          </Typography>
          <Typography style={{ marginLeft: '100px' }}>
              <ConnectWallet
                theme="dark"
                btnTitle="Connect Wallet"
                dropdownPosition={{
                  side: "bottom", // "top" | "bottom" | "left" | "right";
                  align: "end", // "start" | "center" | "end";
                }}
              />
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Side Drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => handleSectionClick('dashboard')}>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => handleSectionClick('creditCardForm')}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Credit Card Form" />
          </ListItem>
          <ListItem button onClick={() => handleSectionClick('transactionHistory')}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Transaction History" />
          </ListItem>
          <ListItem button onClick={() => handleSectionClick('addBill')}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Add a Bill" />
          </ListItem>
          <ListItem button onClick={() => handleSectionClick('pendingBills')}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Pending Bills" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        {/* Main Content Area */}
        <Container maxWidth="md">
          <Box mt={2}>
            {/* Render content based on selectedSection */}
            {renderSectionContent()}
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
