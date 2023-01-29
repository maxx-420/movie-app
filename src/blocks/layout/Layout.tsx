import { Box, Container } from "@mui/material";
import React from "react";
import { SearchQueryProvider } from "../../App";
import Header from "../Header/Header";
import SideBar from "../sidebar/Sidebar";

const drawerWidth = 300;

export default function Layout(props: any) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <SearchQueryProvider>
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <aside>
        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          drawerWidth={drawerWidth}
        />
      </aside>
      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          py: 2,
          px: 2,
          mt: "96px",
        }}
      >
        {props.children}
      </Box>
    </SearchQueryProvider>
  );
}
