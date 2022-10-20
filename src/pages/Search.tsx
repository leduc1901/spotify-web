import { Box } from "@mui/material";

export const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box sx={{ fontSize: 40, fontWeight: 600 }}>Search</Box>
    </Box>
  );
};
