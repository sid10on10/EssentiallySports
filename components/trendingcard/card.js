// next imports
import Image from 'next/image';

// mui imports
import Box from '@mui/material/Box';

// styles imports
import styles from '../../styles/home.module.css';


export default function TrendingCard(props){

    const { data } = props

    return (
        <Box sx={{ width: 'auto', display: { xs: 'block', sm: 'block', md: 'block' }, height: 'auto', marginTop: '50px', width: '248px', borderRadius: '8px' }}>
            <Box sx={{
                backgroundImage: `url("${data.sourceDetails.source_url}")`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '158px',
                borderRadius: '8px'
            }}>
            </Box>
            <Box sx={{ padding: '30px', background: '#FFFFFF' }}>
                <h2 className={styles.trendingcardheading}>{data.title}</h2>
                <p className={styles.trendingcarddate}>{data.formattedDate}</p>
                <Box sx={{ marginTop: '70px' }}>
                    <h2 className={styles.trendingcount}><Image src="/eye-fill.png" width="10" height="10"/>  {data.views}</h2>
                </Box>
            </Box>
        </Box>
    )
}