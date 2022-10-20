import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function Page({
  component: Component,
  title = "Soundcloud Web",
  ...restProps
}: any) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Component {...restProps} />
      <motion.div
        key={Component}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.8, ease: "circIn" } }}
        style={{
          originX: 0,
          backgroundColor: theme.palette.primary.main,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
        }}
      />
    </Box>
  );
}
