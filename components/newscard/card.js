// mui imports

import Box from '@mui/material/Box';

// styles imports
import styles from '../../styles/home.module.css';


export default function Card(props){

    const { data } = props

    function parseDate(dateString){
        return dateString.slice(0,17)
    }

    return (
        <Box sx={{ width: 'auto', display: { xs: 'block', sm: 'block', md: 'flex'}, height: 'auto', marginTop: '50px', boxShadow: '0 1px 10px 2px #cccccc94' }}>
            <Box sx={{ 
                width: {xs: '100%', sm: '100%', md: '70%'},
                backgroundImage: `url('${data['media:content']['$'].url}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '350px'
            }}>
            </Box>
            <Box sx={{ padding: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'left', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
                    {data.categories.map((item, index)=>{
                        return <a key={index} className={styles.category}>{item}</a>
                    })}
                </Box>
                <h1 className={styles.cardheading}>{data.title}</h1>
                <div className={styles.cardpara} dangerouslySetInnerHTML={{__html: data.content}}>
                </div>
                <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <p className={styles.creator}>{data.creator}</p>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <p className={styles.creator}>{parseDate(data.pubDate)}</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}