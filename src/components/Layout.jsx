import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BarChart, CalendarMonth, Chat, Details, Home, Person, Wallet } from '@mui/icons-material';
import { FaBars, FaCaretUp, FaJediOrder, FaPencilAlt, FaUsers } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { BsCup } from "react-icons/bs";
import { FaPenToSquare, FaUsersLine } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";




const drawerWidth = 30;
const Layout = () => {
    return (
        <>



            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ backgroundColor: `black`, color: `white`, width: `calc(100% - ${drawerWidth}px)` }}

                >
                    <Toolbar style={{ backgroundColor: "gray" }} >
                        <Typography variant="h6" noWrap component="div">
                            Permanent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: `${drawerWidth}%`,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: `${drawerWidth}%`,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar>
                        <Typography>
                            <img src="" alt="" />
                        </Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        {[
                            {
                                layout: "Dashboard",
                                link: "/",
                                ico: <Home />,
                            },
                            {
                                layout: "Order List",
                                link: "/orderlist",
                                ico: <FaBars />,
                            },
                            {
                                layout: "Order Details",
                                link: "/orderdetails",
                                ico: <IoIosDocument />,
                            },
                            {
                                layout: "Customer",
                                link: "/customer",
                                ico: <FaUsers />,
                            },
                            {
                                layout: "Analytics",
                                link: "/analytics",
                                ico: <VscGraph />,
                            },
                            {
                                layout: "Reviews",
                                link: "/reviews",
                                ico: <FaPencilAlt />,
                            },
                            {
                                layout: "Foods",
                                link: "/foods",
                                ico: <BsCup />,
                            },
                            {
                                layout: "Food Details",
                                link: "/fooddetails",
                                ico: <FaPenToSquare />,
                            },
                            {
                                layout: "Customer Details",
                                link: "/customerdetails",
                                ico: <LuUser2 />,
                            },
                            {
                                layout: "Calendar",
                                link: "/calendar",
                                ico: <CalendarMonth />,
                            },
                            {
                                layout: "Chat",
                                link: "/chat",
                                ico: <Chat />,
                            },
                            {
                                layout: "Wallet",
                                link: "/wallet",
                                ico: <CiWallet />,
                            },

                        ].map((text, index) => {

                            const { layout, link, ico } = text
                            return (<ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {ico}
                                    </ListItemIcon>
                                    <Link to={link} style={{color:"gray", textDecoration:"none"}}>
                                        <ListItemText primary={layout} />
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            )
                        }
                        )
                        }
                    </List>
                    <Divider />
                    
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />

                    <Outlet />

                </Box>
            </Box>



        </>
    )
}

export default Layout