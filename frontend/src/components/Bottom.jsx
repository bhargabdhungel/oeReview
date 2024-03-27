import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

import AbcIcon from "@mui/icons-material/Abc";
import { useRecoilState } from "recoil";
import { sortAtom } from "../store";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#EEEEEE",
    },
  },
});

export default function Bottom() {
  const [value, setValue] = useRecoilState(sortAtom);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box position="fixed" bottom="0px" width="100%">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Overall" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Quality" icon={<SchoolIcon />} />
          <BottomNavigationAction label="Grades" icon={<AbcIcon />} />
          <BottomNavigationAction
            label="Attendance"
            icon={<SelfImprovementIcon />}
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
