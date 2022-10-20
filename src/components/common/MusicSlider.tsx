import { Slider, useTheme } from "@mui/material";

export const MusicSlider = () => {
  const theme = useTheme();
  return (
    <Slider
      aria-label="Time range"
      defaultValue={0}
      sx={{
        color: "#fff",
        "& .MuiSlider-track": {
          border: "none",
          color: "#fff",
        },
        "& .MuiSlider-thumb": {
          width: 0,
          height: 0,
          backgroundColor: "#fff",
          "&:before": {
            boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
          },
          "&:hover, &.Mui-focusVisible, &.Mui-active": {
            boxShadow: "none",
          },
          "&:active": {
            width: 12,
            height: 12,
          },
        },
        ":active > .MuiSlider-track": {
          color: theme.palette.primary.main,
        },
        ":hover > .MuiSlider-track": {
          color: theme.palette.primary.main,
        },
        ":hover > .MuiSlider-thumb": {
          color: theme.palette.primary.main,
          width: 12,
          height: 12,
        },
      }}
    />
  );
};
