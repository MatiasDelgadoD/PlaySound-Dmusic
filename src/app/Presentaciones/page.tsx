 import CardArtist from '@/components/Cards/CardArtist';
 import { Box } from '@mui/material';

 const Arist =() =>{
   return (
     <Box sx={{ display:'flex' ,mt:10, padding:'100px',alignContent:'center', justifyItems:'center', backgroundColor:'rgba(1,1,1,0.5)',}}>
      
       <CardArtist />
     </Box>
   );
 }
 export default Arist;