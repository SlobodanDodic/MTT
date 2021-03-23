import React, { useContext } from "react";
import { DataContext } from "../Context";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
}));

const BodyIndex = () => {
  const classes = useStyles();

  const { bmi, weightBefore, weightNow, week } = useContext(DataContext);

  return (
    <div
      style={{
        textAlign: "center",
        paddingBottom: "40px",
      }}
    >
      <h2>Rezultat na osnovu unetih podataka</h2>

      <br />

      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm>
              <Typography>
                Težina pre trudnoće: <strong>{weightBefore} kg</strong>
              </Typography>
              <hr />
              <Typography>
                Trenutna težina: <strong>{weightNow} kg</strong>
              </Typography>
              <hr />
              <Typography>
                Trenutna nedelja: <strong>Nedelja {week.week}</strong>
              </Typography>
              <hr />
              <Typography>
                Preporučeni opseg težine: <strong>kg</strong>
              </Typography>
              <hr />
              <Typography>
                BMI pre trudnoće: <strong>{bmi} kg/m&#178;</strong>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default BodyIndex;
