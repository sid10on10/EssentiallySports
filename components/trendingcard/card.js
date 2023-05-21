// next imports
import Image from 'next/image';

// mui imports
import Box from '@mui/material/Box';

// styles imports
import styles from '../../styles/home.module.css';


export default function TrendingCard(props){

    const { data } = props

    function parseDate(dateString){
        return dateString.slice(0,17)
    }

    return (
        <Box sx={{ width: 'auto', display: { xs: 'block', sm: 'block', md: 'block' }, height: 'auto', marginTop: '50px', width: '248px', borderRadius: '8px' }}>
            <Box sx={{
                backgroundImage: `url('/image.png')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '158px',
                borderRadius: '8px'
            }}>
            </Box>
            <Box sx={{ padding: '30px', background: '#FFFFFF' }}>
                <h2 className={styles.trendingcardheading}>5x NBA All Star Coming in Luka Doncic’s Aid “Makes a Ton of Sense”: Insider</h2>
                <p className={styles.trendingcarddate}>May 20, 2023</p>
                <Box sx={{ display: 'flex', marginTop: '30px' }}>
                    <Image src="/eye-fill.png" width="10" height="10"/>
                    <h2 className={styles.trendingcount}>22432</h2>
                </Box>
            </Box>
        </Box>
    )
}