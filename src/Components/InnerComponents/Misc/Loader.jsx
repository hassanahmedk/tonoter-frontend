import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loader() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100vw'}}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}















// function Loader() {
//   return (
//     <div className="loader">
//         <h1>ghI</h1>
//         <img src={require('./Hourglass.gif')} alt="" className="loader-img"/>
//     </div>
//   )
// }

// export default Loader