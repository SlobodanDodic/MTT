import React, { useContext } from "react";
import { DataContext } from "../Context";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 600,
    backgroundColor: "#ffffff14",
  },
}));

const Results = () => {
  const classes = useStyles();

  const { checked, weightBefore, weightNow, week } = useContext(DataContext);

  function createData(name, gainMin, gainMax, weight) {
    return { name, gainMin, gainMax, weight };
  }

  //inWeight is weight inserted by user
  const inWeight = parseFloat(weightNow);

  const rows = [
    createData("1", 0.0, 0.0, inWeight),
    createData("2", 0.04, 0.2, inWeight),
    createData("3", 0.08, 0.3, inWeight),
    createData("4", 0.1, 0.5, inWeight),
    createData("5", 0.2, 0.7, inWeight),
    createData("6", 0.2, 0.8, inWeight),
    createData("7", 0.2, 1.0, inWeight),
    createData("8", 0.3, 1.2, inWeight),
    createData("9", 0.3, 1.3, inWeight),
    createData("10", 0.4, 1.5, inWeight),

    createData("11", 0.4, 1.7, inWeight),
    createData("12", 0.5, 1.8, inWeight),
    createData("13", 0.5, 2.0, inWeight),
    createData("14", 1.0, 2.6, inWeight),
    createData("15", 1.4, 3.2, inWeight),
    createData("16", 1.9, 3.8, inWeight),
    createData("17", 2.3, 4.4, inWeight),
    createData("18", 2.8, 5.0, inWeight),
    createData("19", 3.2, 5.6, inWeight),
    createData("20", 3.7, 6.2, inWeight),

    createData("21", 4.1, 6.8, inWeight),
    createData("22", 4.6, 7.4, inWeight),
    createData("23", 5.0, 8.0, inWeight),
    createData("24", 5.5, 8.6, inWeight),
    createData("25", 5.9, 9.2, inWeight),
    createData("26", 6.4, 9.8, inWeight),
    createData("27", 6.8, 10.4, inWeight),
    createData("28", 7.3, 11.0, inWeight),
    createData("29", 7.7, 11.6, inWeight),
    createData("30", 8.2, 12.2, inWeight),

    createData("31", 8.6, 12.8, inWeight),
    createData("32", 9.1, 13.4, inWeight),
    createData("33", 9.5, 14.0, inWeight),
    createData("34", 10.0, 14.6, inWeight),
    createData("35", 10.4, 15.2, inWeight),
    createData("36", 10.9, 15.8, inWeight),
    createData("37", 11.3, 16.3, inWeight),
    createData("38", 11.8, 16.9, inWeight),
    createData("39", 12.2, 17.5, inWeight),
    createData("40", 12.7, 18.1, inWeight),
  ];

  const rowsTwins = [
    createData("1", 0.0, 0.0, inWeight),
    createData("2", 0.04, 0.2, inWeight),
    createData("3", 0.08, 0.3, inWeight),
    createData("4", 0.1, 0.5, inWeight),
    createData("5", 0.2, 0.7, inWeight),
    createData("6", 0.2, 0.8, inWeight),
    createData("7", 0.2, 1.0, inWeight),
    createData("8", 0.3, 1.2, inWeight),
    createData("9", 0.3, 1.3, inWeight),
    createData("10", 0.4, 1.5, inWeight),

    createData("11", 0.4, 1.7, inWeight),
    createData("12", 0.5, 1.8, inWeight),
    createData("13", 0.5, 2.0, inWeight),
    createData("14", 1.1, 2.8, inWeight),
    createData("15", 1.7, 3.7, inWeight),
    createData("16", 2.3, 4.5, inWeight),
    createData("17", 2.9, 5.3, inWeight),
    createData("18", 3.5, 6.2, inWeight),
    createData("19", 4.1, 7.0, inWeight),
    createData("20", 4.7, 7.8, inWeight),

    createData("21", 5.3, 8.7, inWeight),
    createData("22", 5.9, 9.5, inWeight),
    createData("23", 6.5, 10.3, inWeight),
    createData("24", 7.1, 11.2, inWeight),
    createData("25", 7.7, 12.0, inWeight),
    createData("26", 8.3, 12.8, inWeight),
    createData("27", 8.9, 13.7, inWeight),
    createData("28", 9.5, 14.5, inWeight),
    createData("29", 10.1, 15.3, inWeight),
    createData("30", 10.8, 16.2, inWeight),

    createData("31", 11.4, 17.0, inWeight),
    createData("32", 12.0, 17.8, inWeight),
    createData("33", 12.6, 18.7, inWeight),
    createData("34", 13.2, 19.5, inWeight),
    createData("35", 13.8, 20.3, inWeight),
    createData("36", 14.4, 21.2, inWeight),
    createData("37", 15.0, 22.0, inWeight),
    createData("38", 15.6, 22.8, inWeight),
    createData("39", 16.2, 23.7, inWeight),
    createData("40", 16.8, 24.5, inWeight),
  ];

  //const rowsMap = rows.find((row) => row.name === week.week);
  //console.log(rowsMap);

  //const indexRowWeek = rows.findIndex((x) => x.name === "2");
  //const indexSelectedWeek = rows.findIndex((x) => x.name === parseWeek);
  //const selectedWeek = indexSelectedWeek + 1;

  //console.log(indexRowWeek); //number
  //console.log(parseWeek); // string
  //console.log(selectedWeek); //number
  //console.log(rows[parseWeekNumber].name); //string

  const parseWeek = week.week;

  const parseWeekNumber = parseWeek - 1;

  const selectedWeightMin = inWeight + rows[parseWeekNumber].gainMin;
  const selectedWeightTwinsMin = inWeight + rowsTwins[parseWeekNumber].gainMin;

  const selectedWeightMax = inWeight + rows[parseWeekNumber].gainMax;
  const selectedWeightTwinsMax = inWeight + rowsTwins[parseWeekNumber].gainMax;

  return (
    <>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        <h3>Rezultat na osnovu unetih podataka</h3>

        <br />

        <Paper elevation={3} className={classes.paper}>
          <List
            style={{
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            <hr />

            <div
              style={{
                paddingBottom: "10px",
              }}
            >
              <ListItemText
                primary="Trenutna nedelja"
                style={{
                  textAlign: "center",
                }}
              />
              <ListItemAvatar>
                <Avatar
                  style={{
                    margin: "0 auto",
                    padding: "7px",
                    backgroundColor: "darkblue",
                  }}
                >
                  {week.week}
                </Avatar>
              </ListItemAvatar>
            </div>

            <Divider variant="middle" component="li" />

            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar
                  style={{
                    padding: "7px",
                    backgroundColor: "darkolivegreen",
                  }}
                >
                  {weightBefore}
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary="Težina"
                secondary="pre & trenutno (kg)"
                style={{
                  textAlign: "center",
                }}
              />

              <ListItemAvatar>
                <Avatar
                  style={{
                    padding: "7px",
                    backgroundColor: "darkorchid",
                  }}
                >
                  {weightNow}
                </Avatar>
              </ListItemAvatar>
            </ListItem>

            <Divider variant="middle" component="li" />

            {checked === true ? (
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    style={{
                      padding: "7px",
                      backgroundColor: "darkorange",
                    }}
                  >
                    {selectedWeightTwinsMin.toFixed(1)}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="Opseg težine"
                  secondary="preporučeni (kg)"
                  style={{
                    textAlign: "center",
                  }}
                />

                <ListItemAvatar>
                  <Avatar
                    style={{
                      padding: "7px",
                      backgroundColor: "darkred",
                    }}
                  >
                    {selectedWeightTwinsMax.toFixed(1)}
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
            ) : (
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    style={{
                      padding: "7px",
                      backgroundColor: "darkorange",
                    }}
                  >
                    {selectedWeightMin.toFixed(1)}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="Opseg težine"
                  secondary="preporučeni (kg)"
                  style={{
                    textAlign: "center",
                  }}
                />

                <ListItemAvatar>
                  <Avatar
                    style={{
                      padding: "7px",
                      backgroundColor: "darkred",
                    }}
                  >
                    {selectedWeightMax.toFixed(1)}
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
            )}

            <hr />
          </List>
        </Paper>
      </div>

      <div
        style={{
          textAlign: "justify",
          padding: "0px 10px 10px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Tabela sa podacima
        </h3>
        <p>
          Uvećanje telesne težine tokom trudnoće se ne pripisuje samo težini
          fetusa. Veći deo tog uvećanja težine ide na razvoj tkiva koja
          omogućavaju razvoj, rast i pripremu tela za dojenje.
        </p>
      </div>

      <TableContainer style={{ maxWidth: "550px", margin: "0 auto" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                Nedelja <br /> (broj)
              </TableCell>
              <TableCell align="right">
                Gojenje <br /> (kg)
              </TableCell>
              <TableCell align="right">
                Težina <br /> (kg)
              </TableCell>
            </TableRow>
          </TableHead>

          {checked === true ? (
            <TableBody>
              {rowsTwins.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" align="center">
                    Nedelja {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.gainMin} kg <br /> {row.gainMax} kg
                  </TableCell>

                  {weightNow === "" ? (
                    <TableCell align="right">
                      {row.gainMin} kg <br /> {row.gainMax} kg
                    </TableCell>
                  ) : (
                    <TableCell align="right">
                      {row.gainMin + row.weight} kg <br />{" "}
                      {row.gainMax + row.weight} kg
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" align="center">
                    Nedelja {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.gainMin} kg <br /> {row.gainMax} kg
                  </TableCell>

                  {weightNow === "" ? (
                    <TableCell align="right">
                      {row.gainMin} kg <br /> {row.gainMax} kg
                    </TableCell>
                  ) : (
                    <TableCell align="right">
                      {row.gainMin + row.weight} kg <br />{" "}
                      {row.gainMax + row.weight} kg
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default Results;
