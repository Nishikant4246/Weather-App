import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';


export default function InfoBox({ info }){
    const INIT_URL ="https://plus.unsplash.com/premium_photo-1667143327503-ea47d915f5d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1526066843114-f1623fde3476?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1508556919487-845f191e5742?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return (
    <div className="InfoBox">
     <div className="cardContainer">
     <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             {info.city}{
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <SevereColdIcon/>
          }
         </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
             <p>Temprature = {info.temp}&deg;C</p>
             <p>Humidity = {info.humidity}</p>
             <p>Min Temp = {info.tempMin}&deg;C</p>
             <p>Max Temp = {info.tempMax}&deg;C</p>
             <p>The Weather can be describes as <b>{info.weather}</b> &amp;&amp; Feels Like = {info.feelsLike}&deg;C</p>
          </Typography>
         </CardContent>
     </Card>
     </div>
    </div>
    )
}