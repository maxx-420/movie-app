import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

interface Props {
    handleDrawerToggle: ()=> void;
    mobileOpen: boolean;
    drawerWidth: number;
    children: any;
}



export default function ResponsiveDrawer({ mobileOpen, handleDrawerToggle, drawerWidth, children}: Props) {

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={window.document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "var(--secondary-bg-color)"
            },
          }}
        >
          {children}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "var(--secondary-bg-color)"
            },
          }}
          open
        >
          {children}
        </Drawer>
      </Box>
    </>
  );
}
