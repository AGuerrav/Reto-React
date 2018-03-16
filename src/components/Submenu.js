import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

const SubMenu = () => (

  <div>
        <ul className='navbar'>
          <li className='links'><i class="material-icons">history</i>Recientes</li>
          <li className='links'><i class="material-icons">trending_up</i>Populares</li>
          <li className='login'><i class="material-icons">favorite_border</i>Amados!</li>
        </ul>
          </div>
    // {/* <AppBar
    //     title="RanDog"
    //     iconElementRight={<IconButton>
    //         <History/>
    //     </IconButton>} */}
    // />
);
export default SubMenu;
