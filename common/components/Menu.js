import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  ClickAwayListener,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "../../styles/Menu.module.scss";
import { useContext, useEffect } from "react";
import { AppContext } from "./Layout";
import { signOut, useSession } from "next-auth/react";

const Menu = () => {
  const { setMenu, menu, handleClickAway } = useContext(AppContext);

  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(status, session);
  }, []);

  const signOutUser = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.wrapper}>
        <Paper
          sx={{
            width: "18.8rem",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={signOutUser}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </div>
    </ClickAwayListener>
  );
};

export default Menu;
