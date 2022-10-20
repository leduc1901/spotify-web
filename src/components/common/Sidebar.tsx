import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 300,
        height: "100%",
        textAlign: "center",
        bgcolor: theme.palette.semantic.gray["300"],
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/library">Library</Link>
      <Link to="/search">Search</Link>
    </Box>
  );
};
