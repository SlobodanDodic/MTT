import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";

import EjectIcon from "@material-ui/icons/Eject";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function BottomAppBar() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "10px" }}
    >
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <Link
          title="Instagram"
          href="https://www.facebook.com/mamarijum/"
          target="_blank"
        >
          <Chip
            icon={<FacebookIcon />}
            label="mamaBook"
            clickable
            color="primary"
            style={{
              padding: "8px",
              filter: "drop-shadow(2px 4px 6px black)",
            }}
          />
        </Link>
      </Grid>

      <Grid item xs={6} style={{ textAlign: "center" }}>
        <Link
          title="Facebook"
          href="https://www.instagram.com/mamarijum/?hl=en"
          target="_blank"
        >
          <Chip
            id="mamaGram"
            icon={<InstagramIcon />}
            label="mamaGram"
            clickable
            style={{ padding: "8px" }}
          />
        </Link>
      </Grid>

      <Grid item xs={12} style={{ textAlign: "center", paddingTop: "20px" }}>
        <Fab style={{ backgroundColor: "#0000002b" }}>
          <EjectIcon
            id="up-icon"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontSize: "2.5rem" }}
          />
        </Fab>
      </Grid>
    </Grid>
  );
}
