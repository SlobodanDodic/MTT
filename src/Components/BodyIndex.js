import React, { useContext } from "react";
import { DataContext } from "../Context";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import bmiPhoto from "../Assets/bmi.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 600,
    backgroundColor: "#ffffff14",
  },
  image: {
    width: "90%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const BodyIndex = () => {
  const classes = useStyles();

  const { bmi } = useContext(DataContext);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 0px 40px",
      }}
    >
      <h2>Indeks Telesne Mase</h2>

      <br />
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={bmiPhoto} />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="subtitle1">
                    Indeks Telesne Mase
                  </Typography>
                  <Typography variant="subtitle2">(pre trudnoće)</Typography>

                  <hr />

                  {bmi === "NaN" || bmi < 0.9 ? (
                    <Typography variant="h6">
                      Težina (kg) / Visina <span>(m&#178;)</span>
                    </Typography>
                  ) : (
                    <Typography variant="h6">{bmi} kg/m&#178;</Typography>
                  )}

                  <hr />

                  {bmi < 18 ? (
                    <Typography variant="subtitle2" color="secondary">
                      Pothranjenost
                    </Typography>
                  ) : bmi < 25 ? (
                    <Typography variant="subtitle2" color="primary">
                      Normalna telesna masa
                    </Typography>
                  ) : bmi < 30 ? (
                    <Typography variant="subtitle2" color="secondary">
                      Prekomerna telesna masa
                    </Typography>
                  ) : bmi < 40 ? (
                    <Typography variant="subtitle2" color="secondary">
                      Gojaznost
                    </Typography>
                  ) : bmi > 40 ? (
                    <Typography variant="subtitle2" color="secondary">
                      Patološka gojaznost
                    </Typography>
                  ) : (
                    <Typography variant="subtitle2">
                      Unesite neophodne podatke
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default BodyIndex;
