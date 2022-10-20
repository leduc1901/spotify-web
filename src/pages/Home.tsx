import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box sx={{ fontSize: 40, fontWeight: 600 }}>Home</Box>
    </Box>
  );
};
