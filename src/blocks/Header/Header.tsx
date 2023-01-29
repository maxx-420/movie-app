import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useContext } from "react";
import { SearchContext, ThemeContext } from "../../App";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchBar from "../../components/organisms/search-bar/SearchBar";
import './Header.scss';

interface Props {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

export default function Header({ drawerWidth, handleDrawerToggle }: Props) {

  const { isDark, toggleTheme} = useContext(ThemeContext);
  const { setSearchQuery} = useContext(SearchContext)

  return (
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          py: 2
        }}
        className="app-header"
      >
        <Toolbar className="header__toolbar">
          <IconButton
            className="drawer-toggle"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <SearchBar setSearchQuery={setSearchQuery}/>
          <div style={{marginLeft: 'auto'}} className="header__toolbar__right" >
          <IconButton
            className="theme-toggle"
            color="inherit"
            aria-label={`change to ${isDark? "light-theme": "dark-theme"}`}
            onClick={toggleTheme}
          >
           { isDark?  <LightModeOutlinedIcon />: <DarkModeIcon/>}
          </IconButton>

          <IconButton
            className="drawer-toggle"
            color="inherit"
            aria-label="open menu"
            edge="end"
          >
            <MoreVertOutlinedIcon />
          </IconButton>
          </div>

        </Toolbar>
      </AppBar>
  );
}
