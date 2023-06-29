import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AddTaskIcon from "@mui/icons-material/AddTask";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { Container } from "@mui/material";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setIsOpen(false)}
      onKeyDown={() => setIsOpen(false)}
    >
      <List>
        <Link
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem>
            <ListItemIcon>
              <AddTaskIcon />
            </ListItemIcon>
            <ListItemText sx={{ textDecoration: "none" }}>TODOS</ListItemText>
          </ListItem>
        </Link>
        <Link
          component={RouterLink}
          to="/contacts"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText>CONTACTS</ListItemText>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setIsOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                {list()}
              </Drawer>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                MyPlanner
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
