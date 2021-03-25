import React, { useContext } from "react";
import { DataContext } from "../Context";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import ViewWeekIcon from "@material-ui/icons/ViewWeek";

const Calculator = () => {
  const {
    height,
    setHeight,
    weightBefore,
    setWeightBefore,
    weightNow,
    setWeightNow,
    week,
    checked,
    toggleChecked,
    handleSubmit,
    handleChange,
    onClick,
  } = useContext(DataContext);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px 0px",
      }}
    >
      <h3>Unos podataka</h3>

      <div>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "270px" }}
                id="height"
                label="Visina"
                margin="normal"
                variant="outlined"
                helperText="Unesi visinu u cm"
                autoComplete="off"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cm</InputAdornment>
                  ),
                }}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "270px" }}
                id="weightBefore"
                label="Težina pre trudnoće"
                margin="normal"
                variant="outlined"
                helperText="Koristi tačku za decimalni zapis"
                autoComplete="off"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">kg</InputAdornment>
                  ),
                }}
                value={weightBefore}
                onChange={(e) => setWeightBefore(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "270px" }}
                id="weightNow"
                label="Trenutna težina"
                margin="normal"
                variant="outlined"
                helperText="Koristi tačku za decimalni zapis"
                autoComplete="off"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">kg</InputAdornment>
                  ),
                }}
                value={weightNow}
                onChange={(e) => setWeightNow(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl
                id="weeks"
                variant="outlined"
                margin="normal"
                style={{ width: "270px" }}
              >
                <InputLabel htmlFor="week">Nedelja</InputLabel>
                <Select
                  native
                  required
                  value={week.week}
                  onChange={handleChange}
                  label="week"
                  inputProps={{
                    name: "week",
                    id: "week",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Nedelja 01</option>
                  <option value={2}>Nedelja 02</option>
                  <option value={3}>Nedelja 03</option>
                  <option value={4}>Nedelja 04</option>
                  <option value={5}>Nedelja 05</option>
                  <option value={6}>Nedelja 06</option>
                  <option value={7}>Nedelja 07</option>
                  <option value={8}>Nedelja 08</option>
                  <option value={9}>Nedelja 09</option>
                  <option value={10}>Nedelja 10</option>

                  <option value={11}>Nedelja 11</option>
                  <option value={12}>Nedelja 12</option>
                  <option value={13}>Nedelja 13</option>
                  <option value={14}>Nedelja 14</option>
                  <option value={15}>Nedelja 15</option>
                  <option value={16}>Nedelja 16</option>
                  <option value={17}>Nedelja 17</option>
                  <option value={18}>Nedelja 18</option>
                  <option value={19}>Nedelja 19</option>
                  <option value={20}>Nedelja 20</option>

                  <option value={21}>Nedelja 21</option>
                  <option value={22}>Nedelja 22</option>
                  <option value={23}>Nedelja 23</option>
                  <option value={24}>Nedelja 24</option>
                  <option value={25}>Nedelja 25</option>
                  <option value={26}>Nedelja 26</option>
                  <option value={27}>Nedelja 27</option>
                  <option value={28}>Nedelja 28</option>
                  <option value={29}>Nedelja 29</option>
                  <option value={30}>Nedelja 30</option>

                  <option value={31}>Nedelja 31</option>
                  <option value={32}>Nedelja 32</option>
                  <option value={33}>Nedelja 33</option>
                  <option value={34}>Nedelja 34</option>
                  <option value={35}>Nedelja 35</option>
                  <option value={36}>Nedelja 36</option>
                  <option value={37}>Nedelja 37</option>
                  <option value={38}>Nedelja 38</option>
                  <option value={39}>Nedelja 39</option>
                  <option value={40}>Nedelja 40</option>
                </Select>
                <FormHelperText>
                  Izaberi trenutnu nedelju trudnoće
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={toggleChecked}
                name="twins"
                color="primary"
              />
            }
            label="Blizanci"
          />
          <br />
          <br />
          <Button
            onClick={onClick}
            disabled={week.length < 1}
            type="submit"
            value="Submit"
            variant="contained"
            startIcon={<ViewWeekIcon />}
            style={{
              width: "240px",
              backgroundColor: "rgb(95, 23, 163)",
              color: "whitesmoke",
            }}
          >
            Prikaži tabelu
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
