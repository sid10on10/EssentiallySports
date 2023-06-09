// next imports
import Image from 'next/image'
import { useRouter } from 'next/router';

// react imports
import { useState, useEffect } from 'react';
import { endpoint, routes } from '../config';
import Parser from 'rss-parser';
import axios from 'axios';

// material ui imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// style imports
import styles from '../styles/home.module.css';

// module imports
import Card from '../components/newscard/card';
import TrendingCard from '../components/trendingcard/card';

export default function Home() {

    const router =  useRouter()
     
    const [loaded, setLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [trendingloaded, setTrendingloaded] = useState(false)
    const [trending, setTrending] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl)

    const parser = new Parser({
        customFields: {
          feed: [],
          item: ['media:content'],
        }
    })

    useEffect(()=>{
        loadItems()
        loadTrending()
    }, [])

    const loadItems = async () => {
        try {
            const feed = await parser.parseURL(`${endpoint[endpoint['current']]}${routes['feed']['get']}`)
            setPosts(feed.items)
            setLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }

    const loadTrending = async () => {
        try {
            const response = await axios.get('https://weak-train-dove.cyclic.app/data')
            setTrending(response.data.articles)
            setTrendingloaded(true)
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
                <Divider className={styles.divider} sx={{ marginTop: '20px' }}/>
                {/* Menu div */}
                <Box className={styles.menudiv}>
                    <div styles={styles.menuitem}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={()=>{
                                router.reload()
                            }}
                            sx={{ textTransform: 'capitalize', color: '#414141', fontSize: '15px', fontWeight: 700 }}
                        >
                            Home
                        </Button>
                    </div>
                    <div styles={styles.menuitem}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu-sports' : undefined}
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
                            id="basic-menu-sports"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/nba/')
                            }}>NBA</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/boxing/')
                            }}>Boxing</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/f1/')
                            }}>Formula 1</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/ufc/')
                            }}>UFC</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/nascar/')
                            }}>NASCAR</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/wrestling/wwe/')
                            }}>WWE</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/nfl/')
                            }}>NFL</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/tennis/')
                            }}>Tennis</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/golf/')
                            }}>Golf</MenuItem>
                            <MenuItem onClick={()=>{
                                window.open('https://www.essentiallysports.com/category/swimming/')
                            }}>Swimming</MenuItem>
                        </Menu>
                    </div>
                    
                </Box>
                <Box className={styles.newsdiv}>
                    <h1 className={styles.newsheading}>Latest News</h1>
                    {loaded ? posts.map((item, index)=>{
                        return <Card key={index} data={item}/>
                    }) : <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><CircularProgress /></Box>}
                </Box>
                <Box sx={{ marginTop: '40px', background: '#F2F4F7', px: '20px', py: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <h2 className={styles.trendingheading}><Image src="/trending.png" width="20" height="20" />  Trending</h2>
                        </Box>
                        <Box>
                            <p className={styles.trendingcount}><Image src="/eye-fill.png" width="10" height="10"/>  22k Live readers</p>
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'flex' }, justifyContent: 'space-evenly' }}>
                        {trendingloaded ? trending.map((item, index)=>{
                            return <TrendingCard data={item} key={index}/>
                        }) : <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><CircularProgress /></Box>}
                    </Box>
                </Box>
            </Box>
        </main>
    )
}
