import { useTheme } from "@mui/material";
import { Box } from "@mui/system";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.palette.semantic.gray["100"],
      }}
    >
      <Box sx={{ fontSize: 40, fontWeight: 600 }}>Footer</Box>
    </Box>
  );
};
