import {
    Button,
    ButtonGroup,
    Container,
    CssBaseline,
    FormControl,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid,
    IconButton,
    Typography,
    Tooltip,
} from "@material-ui/core";
import { KeyboardTimePicker, KeyboardDatePicker, DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AlarmIcon from "@material-ui/icons/Alarm";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import SaveIcon from "@material-ui/icons/Save";
import SendIcon from "@material-ui/icons/Send";
import { ThemeProvider } from "@material-ui/styles";
import { useReducer } from "react";

const ButtonGrid = withStyles({
    root: { "& > *:not(:first-child)": { marginLeft: ".2rem" } },
})(({ classes, xs, children }) => (
    <Grid className={classes.root} item xs={xs}>
        {children}
    </Grid>
));

function App() {
    const darkTheme = createTheme("dark"),
        lightTheme = createTheme("light");

    const [state, dispatch] = useReducer(
        (state, action) => {
            return { ...state, [action.name]: !Boolean(state[action.name]) };
        },
        { checkedA: false, checkedB: true, checkedF: true, gilad: true, jason: false, antoine: false, isdark: true }
    );

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <ThemeProvider theme={state.isdark ? darkTheme : lightTheme}>
            <CssBaseline />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2" id="contained-buttons">
                                Contained Button
                            </Typography>
                        </Grid>
                        <ButtonGrid xs={12}>
                            <Button variant="contained">Default</Button>
                            <Button variant="contained" color="primary">
                                Primary
                            </Button>
                            <Button variant="contained" color="secondary">
                                Secondary
                            </Button>
                            <Button variant="contained" disabled>
                                Disabled
                            </Button>
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                Link
                            </Button>
                        </ButtonGrid>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">
                                Text Button
                            </Typography>
                        </Grid>
                        <ButtonGrid xs={12}>
                            <Button>Default</Button>
                            <Button color="primary">Primary</Button>
                            <Button color="secondary">Secondary</Button>
                            <Button disabled>Disabled</Button>
                            <Button href="#text-buttons" color="primary">
                                Link
                            </Button>
                        </ButtonGrid>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">
                                Outlined Button
                            </Typography>
                        </Grid>
                        <ButtonGrid xs={12}>
                            <Button variant="outlined">Default</Button>
                            <Button variant="outlined" color="primary">
                                Primary
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Secondary
                            </Button>
                            <Button variant="outlined" disabled>
                                Disabled
                            </Button>
                            <Button variant="outlined" color="primary" href="#outlined-buttons">
                                Link
                            </Button>
                        </ButtonGrid>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">
                                Sizing Button
                            </Typography>
                        </Grid>
                        <ButtonGrid xs={12}>
                            <Button variant="outlined" color="primary" size="small">
                                Small
                            </Button>
                            <Button variant="outlined" color="primary" size="medium">
                                Medium
                            </Button>
                            <Button variant="outlined" color="primary" size="large">
                                Large
                            </Button>
                        </ButtonGrid>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">
                                Icon Button
                            </Typography>
                        </Grid>
                        <ButtonGrid xs={12}>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="delete" disabled color="primary">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <AlarmIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton>
                            <Tooltip aria-label="Toggle light/dark theme" title="Toggle light/dark theme">
                                <IconButton
                                    aria-label="Toggle light/dark theme"
                                    onClick={(e) => dispatch({ name: "isdark" })}
                                >
                                    <Brightness4Icon />
                                </IconButton>
                            </Tooltip>
                        </ButtonGrid>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">
                                Icon & Label Button
                            </Typography>
                        </Grid>
                        <ButtonGrid xs={12}>
                            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                                Send
                            </Button>
                            <Button variant="contained" color="default" startIcon={<CloudUploadIcon />}>
                                Upload
                            </Button>
                            <Button variant="contained" disabled color="secondary" startIcon={<KeyboardVoiceIcon />}>
                                Talk
                            </Button>
                            <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />}>
                                Save
                            </Button>
                            <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
                                Save
                            </Button>
                        </ButtonGrid>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">
                                Basic Button Group
                            </Typography>
                        </Grid>
                        <ButtonGrid xs={12} justify="center">
                            <ButtonGroup
                                color="primary"
                                orientation="vertical"
                                aria-label="outlined primary button group"
                            >
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                            <ButtonGroup
                                variant="contained"
                                orientation="vertical"
                                color="primary"
                                aria-label="contained primary button group"
                            >
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                            <ButtonGroup
                                variant="text"
                                orientation="vertical"
                                color="primary"
                                aria-label="text primary button group"
                            >
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                        </ButtonGrid>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">
                                Check Box
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedA} name="checkedA" />}
                                    onChange={(e) => dispatch({ name: e.target.name })}
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedB} name="checkedB" color="primary" />}
                                    onChange={(e) => dispatch({ name: e.target.name })}
                                    label="Primary"
                                />

                                <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                                <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                                <FormControlLabel
                                    disabled
                                    control={<Checkbox checked name="checkedE" />}
                                    label="Disabled"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedF}
                                            onChange={(e) => dispatch({ name: e.target.name })}
                                            // onChange={handleChange}
                                            name="checkedF"
                                            indeterminate
                                        />
                                    }
                                    label="Indeterminate"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            name="checkedH"
                                        />
                                    }
                                    label="Custom icon"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            name="checkedI"
                                        />
                                    }
                                    label="Custom size"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Assign responsibility</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.gilad}
                                                onChange={(e) => dispatch({ name: e.target.name })}
                                                name="gilad"
                                            />
                                        }
                                        label="Gilad Gray"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.jason}
                                                onChange={(e) => dispatch({ name: e.target.name })}
                                                name="jason"
                                            />
                                        }
                                        label="Jason Killian"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.antoine}
                                                onChange={(e) => dispatch({ name: e.target.name })}
                                                name="antoine"
                                            />
                                        }
                                        label="Antoine Llorca"
                                    />
                                </FormGroup>
                                <FormHelperText>Be careful</FormHelperText>
                            </FormControl>
                            <FormControl required error={error} component="fieldset">
                                <FormLabel component="legend">Pick two</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.gilad}
                                                onChange={(e) => dispatch({ name: e.target.name })}
                                                name="gilad"
                                            />
                                        }
                                        label="Gilad Gray"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.jason}
                                                onChange={(e) => dispatch({ name: e.target.name })}
                                                name="jason"
                                            />
                                        }
                                        label="Jason Killian"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.antoine}
                                                onChange={(e) => dispatch({ name: e.target.name })}
                                                name="antoine"
                                            />
                                        }
                                        label="Antoine Llorca"
                                    />
                                </FormGroup>
                                <FormHelperText>You can display an error</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid container justify="space-around">
                            <DatePicker
                                disableToolbar
                                variant="inline"
                                format="yyyy-MM-dd"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                // value={selectedDate}
                                onChange={(e) => {}}
                                // KeyboardButtonProps={{
                                //     "aria-label": "change date",
                                // }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );

    function createTheme(type) {
        return createMuiTheme({
            palette: {
                type: type,
            },
            props: {
                MuiButton: {
                    size: "small",
                },
            },
            overrides: {
                // MuiBox: {
                //     root: {
                //         // "& > *": {
                //         //     margin: "1rem",
                //         // },
                //         padding: "100rem",
                //     },
                // },
                // MuiButton: {
                //     root: {
                //         margin: ".15rem",
                //     },
                //     contained: {
                //         backgroundColor: colors.grey[400],
                //     },
                // },
                // MuiTypography: {
                //     root: {
                //         marginTop: "3rem",
                //     },
                // },
                // MuiButtonGroup: {
                //     root: {
                //         margin: ".15rem",
                //     },
                //     grouped: {
                //         margin: "0",
                //     },
                // },
            },
        });
    }
}

export default App;
