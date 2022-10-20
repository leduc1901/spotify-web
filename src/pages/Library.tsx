import { Box, useTheme } from "@mui/material";

export const Library = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box sx={{ fontSize: 40, fontWeight: 600 }}>Library</Box>
    </Box>
  );
};
