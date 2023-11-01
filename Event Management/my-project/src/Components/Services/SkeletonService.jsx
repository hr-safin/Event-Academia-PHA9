import React from 'react';
import "./index.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonService = () => {

    // const array = new Array(10).fill("safin")
    // array.map((el) => {
    //     console.log(el)
    // })

   

    return (
        <div className='lg:px-28 dark:bg-slate-900 px-6 py-16 bg-white place-items-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16'>
            { Array.from({length : 6}).map((item, index) => {
        return <div key={index} className="card    h-[430px] w-[400px] ">
          <Box key={index} sx={{ width: 390, marginRight: 0.5, borderRadius:"5px"}}>
          {item ? (
            <img
              style={{ width: 410, height: 200 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton className=' rounded-t-lg dark:bg-slate-800' variant="rectangular" width={399} height={180} />
          )}
          {item ? (
            <Box sx={{ pl: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pl: 2, pt:2, pr:2 }}>
              <Skeleton className=' dark:bg-slate-800' width="95%" height={50}  />
              <Skeleton className=' dark:bg-slate-800' width="85%" height={60} />
            </Box>
          )}
          {item ? (
            <Box sx={{ pl: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pl: 2,pr:1 }}>
              <Skeleton className=' dark:bg-slate-800' width="30%" height={50}  />
              <Skeleton className=' dark:bg-slate-800' width="100%" height={65} />
            </Box>
          )}
        </Box>
          {/* <div>
            <Skeleton variant="rectangular"   height={170} width={398} />
          </div> */}
          {/* <p
            className="  bg-gray-300 dark:bg-gray-800 w-full lg:h-[220px]"
            
            
          /> */}
        
        <div className=" flex flex-col  px-3 py-5">
          {/* <h2 className="card-title  text-2xl text-center bg-gray-300 dark:bg-gray-800 h-8 w-[340px] mb-5 py-1 "></h2> */}
          {/* <div className=' mb-5'>
            <Skeleton   height={35} width={350} />
          </div> */}
          {/* <div className=' mb-4'>
            <Skeleton   height={35} width={320} />
          </div> */}
          {/* <div className=''>
            <Skeleton   height={35} width={120} />
          </div> */}
          {/* <div className='pt-4'>
            <Skeleton   height={43} width={370} />
          </div> */}
          {/* <p className=" bg-gray-300 mb-4 dark:bg-gray-800 w-[310px] h-10  py-3 "></p> */}
          {/* <h2 className="card-title h-8 py-1 bg-gray-300 dark:bg-gray-800 w-[110px]"></h2> */}
          {/* <div className=" pt-5 w-full flex">
            <button className=" w-full btn bg-gray-300 dark:bg-gray-800 border-none  "></button>
          </div> */}
        </div>
      </div>
    })
}
            
           
           
           
        </div>

    );
};

export default SkeletonService;