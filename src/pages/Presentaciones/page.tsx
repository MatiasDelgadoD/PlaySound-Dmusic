import CardArtist from "@/components/Cards/CardArtist";
import { SectioneLine } from "@/components/Cards/SectioneLine";
import { Box } from "@mui/material";

const Arist = () => {
  return (
    <Box
      sx={{
        display: "column",
        mt: 10,
        padding: "100px",
        alignContent: "center",
        justifyItems: "center",
        backgroundColor: "rgba(1,1,1,0.5)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "column",
          alignItems: "center",
        }}
      >
        <CardArtist />
      </Box>

      <SectioneLine />
    </Box>
  );
};
export default Arist;
