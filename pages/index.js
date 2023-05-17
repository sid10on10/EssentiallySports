// next imports
import Image from 'next/image'

// react imports
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

// module imports
import Card from '../components/newscard/card';

export default function Home() {

    const parser = new Parser({
        customFields: {
          feed: [],
          item: ['media:content'],
        }
      })

    const [posts, setPosts] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(()=>{
        loadItems()
    }, [])

    const loadItems = async () => {
        try {
            const feed = await parser.parseURL(`${endpoint[endpoint['current']]}${routes['feed']['get']}`)
            console.log(feed)
            setPosts(feed.items)
            console.log(feed.items)
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
                    {posts.map((item, index)=>{
                        return <Card key={index} data={item}/>
                    })}
                    
                </Box>
            </Box>
        </main>
    )
}
