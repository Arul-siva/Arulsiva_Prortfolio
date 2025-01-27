import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NoOppositeContent from '../pages/Education';
import Experience from '../pages/Experience'
import Certificate from '../pages/Certificate';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div className="home-section py-5"> 
<Box sx={{ width: '100%' }} className="py-4">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="shadow-box mt-5 p-2 mx-lg-5 mx-md-4 mx-sm-3 mx-2">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} className='fw-600' />
          <Tab label="Item Two" {...a11yProps(1)} className='' />
          <Tab label="Item Three" {...a11yProps(2)} className='' />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Experience/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Certificate/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <NoOppositeContent/>
      </CustomTabPanel>
    </Box>
</div>
  );
}
