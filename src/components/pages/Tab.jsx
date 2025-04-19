import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NoOppositeContent from '../pages/Education';
import Experience from '../pages/Experience';
import Certificate from '../pages/Certificate';
import { motion } from 'framer-motion';

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
      {value === index && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ p: 3 }}>{children}</Box>
        </motion.div>
      )}
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
    <div className="home-section py-4">
      <Box sx={{ width: '100%' }} className="py-4">
        <Box
          sx={{ borderBottom: 1, borderColor: 'divider', borderRadius: 2 }}
          className="boxshadow_c9f31d mt-5 p-2 mx-lg-5 mx-md-4 mx-sm-3 mx-2"
          style={{
            boxShadow: '0 4px 30px rgba(201, 243, 29, 0.1)',
            background: '#1a1a1a',
            border: '1px solid rgba(201, 243, 29, 0.3)',
          }}
        >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="💼 Experience" {...a11yProps(0)} className="fw-600" />
            <Tab label="📜 Certificate" {...a11yProps(1)} />
            <Tab label="🎓 Education" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Experience />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Certificate />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <NoOppositeContent />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
