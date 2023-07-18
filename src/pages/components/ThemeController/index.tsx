import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { selectThemeStore, setThemeState } from "../../../store/themeReducer";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHook";

const ThemeController = () => {
  // const theme = useTheme();
  const theme = useAppSelector((state) => state.themeStore.theme);

  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectThemeStore);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {/* {theme.palette.mode} */}
        {theme}
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            // theme.palette.mode === "dark"
            theme === "dark"
              ? dispatch(setThemeState("light"))
              : dispatch(setThemeState("dark"));
          }}
          color="inherit"
        >
          {theme === "dark" ? (
            // {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </div>
  );
};

export default ThemeController;
