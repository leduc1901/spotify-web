import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { MusicSlider } from "./MusicSlider";
import { SkipNext, SkipPrevious } from "@mui/icons-material";
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
      <Box
        sx={{
          width: "30%",
          minWidth: 350,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <Button>
            <SkipPrevious />
          </Button>
          <Button>
            <PlayArrowIcon />
          </Button>
          <Button>
            <SkipNext />
          </Button>
        </Box>
        <MusicSlider />
      </Box>
    </Box>
  );
};
