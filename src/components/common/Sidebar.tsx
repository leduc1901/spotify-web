import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 300,
        height: "100%",
        bgcolor: theme.palette.semantic.gray["300"],
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", p: 6, gap: 2 }}>
        <Link to="/">
          <Typography color="white" fontWeight={500} fontSize={24}>
            Home
          </Typography>
        </Link>
        <Link to="/search">
          <Typography color="white" fontWeight={500} fontSize={24}>
            Search
          </Typography>
        </Link>
        <Link to="/library">
          <Typography color="white" fontWeight={500} fontSize={24}>
            Library
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
