import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import mamarijumLogo from "../Assets/logo.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Header = () => {
  return (
    <div>
      <AppBar position="fixed" id="appbar">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <Grid item xs={6} style={{ textAlign: "left" }}>
            <Toolbar>
              <Link
                title="Mamarijum"
                href="https://mamarijum.com/"
                target="_blank"
              >
                <img
                  style={{ width: "160px" }}
                  src={mamarijumLogo}
                  alt="Mamarijum"
                />
              </Link>
            </Toolbar>
          </Grid>

          <Grid
            item
            xs={6}
            style={{
              textAlign: "right",
              textDecoration: "overline",
              paddingRight: "10px",
              fontSize: "11px",
            }}
          >
            <MailOutlineIcon fontSize="small" /> mamarijum@gmail.com​
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Header;
