// next imports
import Image from 'next/image'

// react imports
import axios from 'axios';
import { useState, useEffect } from 'react';
import { endpoint, routes } from '../config';
import Parser from 'rss-parser'

// material ui imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// style imports
import styles from '../styles/home.module.css';



export default function Home() {

    const parser = new Parser()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(()=>{
        loadItems()
    }, [])

    const loadItems = async () => {
        try {
            const feed = await parser.parseURL(`${endpoint[endpoint['current']]}${routes['feed']['get']}`)
            console.log(feed)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = (event) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <main className={styles.main}>
            <Box sx={{ px: '30px', py: '30px' }}>
                {/* Heading section */}
                <Box>
                    <Image src="https://d33wubrfki0l68.cloudfront.net/da047f13938ef3073df84084c42973f94b813008/e2cd2/assets/images/header-brand.png" width="250" height="40"/>
                </Box>
                <Divider className={styles.divider}/>
                {/* Menu div */}
                <Box className={styles.menudiv}>
                    <div styles={styles.menuitem}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ textTransform: 'capitalize', color: '#414141', fontSize: '15px', fontWeight: 700 }}
                        >
                            Home
                        </Button>
                    </div>
                    <div styles={styles.menuitem}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            onMouseOver={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                            sx={{ textTransform: 'capitalize', color: '#414141', fontSize: '15px', fontWeight: 700 }}
                        >
                            Sports
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    <div styles={styles.menuitem}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            onMouseOver={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                            sx={{ textTransform: 'capitalize', color: '#414141', fontSize: '15px', fontWeight: 700 }}
                        >
                            Category
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    
                </Box>
                <Box className={styles.newsdiv}>
                    <h1 className={styles.newsheading}>Latest News</h1>
                    <Box sx={{ width: 'auto', display: { xs:'block', sm: 'block', md: 'flex'}, height: '400px', marginTop: '50px' }}>
                        <Box sx={{ 
                            width: '40%',
                            backgroundImage: "url('https://d33wubrfki0l68.cloudfront.net/26b25c6e5c6cf826a5d8ce56223a04c2f6efe5e1/f6bae/assets/images/blog-img5.jpg')",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            
                        </Box>
                        <Box sx={{ padding: '30px' }}>
                            <a className={styles.category}>LifeStyle</a>
                            <h1 className={styles.cardheading}>Every household to get prepaid blank postcard courtesy of News Post</h1>
                            <p className={styles.cardpara}>The and room. Know and nation question would the to copy. And leather and eyes human would collection.</p>
                            <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
                                <Box>
                                    <p className={styles.creator}>John Doe</p>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <p className={styles.creator}>24 August</p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </main>
    )
}
