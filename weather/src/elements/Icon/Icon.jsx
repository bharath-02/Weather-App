import React from 'react';

import classes from './Icon.module.css';
import clear from '../../assets/images/Clear.svg';
import cloudwind from '../../assets/images/Cloud-wind.svg';
import clouds from '../../assets/images/Clouds.svg';
import drizzle from '../../assets/images/Drizzle.svg';
import fog from '../../assets/images/Fog.svg';
import haze from '../../assets/images/Haze.svg';
import mist from '../../assets/images/Mist.svg';
import moon from '../../assets/images/Moon.svg';
import nightrainy from '../../assets/images/Night-rainy.svg';
import night from '../../assets/images/Night-rainy.svg';
import preview from '../../assets/images/Preview.svg';
import rain from '../../assets/images/Rain.svg';
import smoke from '../../assets/images/Smoke.svg';
import snow from '../../assets/images/Snow.svg';
import thunderstorm from '../../assets/images/Thunderstorm.svg';
import tonado from '../../assets/images/Tonado.svg';

const Icon = (props) => {
    var image ;
    if(props.type === 'Clear') {
        image = <img src={clear} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Cloud-wind') {
        image = <img src={cloudwind} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Clouds') {
        image = <img src={clouds} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Drizzle') {
        image = <img src={drizzle} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Fog') {
        image = <img src={fog} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Haze') {
        image = <img src={haze} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Mist') {
        image = <img src={mist} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Moon') {
        image = <img src={moon} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Night-rainy') {
        image = <img src={nightrainy} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Night') {
        image = <img src={night} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Preview') {
        image = <img src={preview} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Rain') {
        image = <img src={rain} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Smoke') {
        image = <img src={smoke} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Snow') {
        image = <img src={snow} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Thunderstorm') {
        image = <img src={thunderstorm} alt={props.type} className={classes.Icon} />
    }else if(props.type === 'Tonado') {
        image = <img src={tonado} alt={props.type} className={classes.Icon} />
    }

    return(
        <div>
            {image}
        </div>
    );
}

export default Icon;











// import React from 'react';

// import Clear from '../../assets/images/Clear.svg';
// import Cloudwind from '../../assets/images/Cloud-wind.svg';
// import Clouds from '../../assets/images/Clouds.svg';
// import Drizzle from '../../assets/images/Drizzle.svg';
// import Haze from '../../assets/images/Haze.svg';
// import Mist from '../../assets/images/Mist.svg';
// import Moon from '../../assets/images/Moon.svg';
// import Nightrainy from '../../assets/images/Night-rainy.svg';
// import Night from '../../assets/images/Night-rainy.svg';
// import Preview from '../../assets/images/Preview.svg';
// import Rain from '../../assets/images/Rain.svg';
// import Smoke from '../../assets/images/Smoke.svg';
// import Snow from '../../assets/images/Snow.svg';
// import Thunderstorm from '../../assets/images/Thunderstorm.svg';
// import Tonado from '../../assets/images/Tonado.svg';
// import classes from './Icon.module.css';

// const Icon = (props) => {
//     return(
//         <img 
//             // src={`image/${props.type}.svg`}
//             src={Mist} 
//             alt={props.type}
//             className={classes.Icon} 
//         />
//     );
// }

// export default Icon;