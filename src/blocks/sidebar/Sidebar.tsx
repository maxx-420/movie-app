import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ResponsiveDrawer from "../../components/molecules/drawer/Drawer";
import prfilePic from "../../assets/images/profile-pic.png";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvIcon from "@mui/icons-material/Tv";
import ListIcon from "@mui/icons-material/List";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import React from "react";

const menuItems: { [key: string]: any[] } = {
  top: [
    {
      label: "Discover",
      icon: SearchIcon,
      isActive: true,
      link: "/discover",
    },
    {
      label: "Playlist",
      icon: PlaylistPlayIcon,
    },
    {
      label: "Movie",
      icon: LiveTvIcon,
    },
    {
      label: "TV Shows",
      icon: TvIcon,
    },
    {
      label: "My List",
      icon: ListIcon,
    },
  ],
  middle: [
    {
      label: "Watch Later",
      icon: HistoryIcon,
    },
    {
      label: "Recommended",
      icon: FavoriteBorderIcon,
    },
  ],
  bottom: [
    {
      label: "Settings",
      icon: SettingsOutlinedIcon,
    },
    {
      label: "Logout",
      icon: LogoutOutlinedIcon,
    },
  ],
};

export default function SideBar(props: any) {
  const drawer = (
    <div className="app-sidebar">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            p: 4,
            gap: 2
          }}
        >
          <Avatar
            src={prfilePic}
            sx={{
              height: "105px",
              width: "105px",
            }}
          />
          <h2 className="profie-name body-1 bold-1">Eric Hoffmann</h2>
        </Grid>
      </Box>
      <Divider />
      {Object.keys(menuItems).map((key, index) => (
        <React.Fragment  key={key}>
          <List className="sidebar-menu-top">
            {menuItems[key].map(
              ({ label, icon: Icon, isActive, link }, index) => (
                <ListItem
                  key={label}
                  disablePadding
                  className="menu-list-item"
                  disabled={!isActive}
                  sx={{
                    pointerEvents: !isActive? 'none': 'all'
                  }}
                >
                  <NavLink to={link? link : `/${label}`} activeClassName="active-link" style={{
                    width: '100%',
                    textDecoration: 'none'
                  }}>
                    <ListItemButton disableRipple>
                      <ListItemIcon className="menu-list-item__icon">
                        <Icon />
                      </ListItemIcon>
                      <ListItemText className="menu-list-item__text" primary={label}/>
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              )
            )}
          </List>
          {index !== Object.keys(menuItems).length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );

  return <ResponsiveDrawer {...props}>{drawer}</ResponsiveDrawer>;
}
