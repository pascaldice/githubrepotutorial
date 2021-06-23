import {
    Box,
    Button,
    ButtonGroup,
    Container,
    CssBaseline,
    FormControl,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid,
    Icon,
    IconButton,
    Typography,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createMuiTheme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AlarmIcon from "@material-ui/icons/Alarm";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import SaveIcon from "@material-ui/icons/Save";
import { ThemeProvider } from "@material-ui/styles";
import { useReducer } from "react";

function App() {
    const theme = createTheme();

    const [state, dispatch] = useReducer(
        (state, action) => {
            return { ...state, [action.name]: !Boolean(state[action.name]) };
        },
        { checkedA: false, checkedB: true, checkedF: true, gilad: true, jason: false, antoine: false }
    );

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2" id="contained-buttons">
                            Contained Button
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
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
                    </Grid>
                </Grid>
                <Typography variant="h4" component="h2">
                    Text Button
                </Typography>
                <Box component="div">
                    <Button>Default</Button>
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="#text-buttons" color="primary">
                        Link
                    </Button>
                </Box>
                <Typography variant="h4" component="h2">
                    Outlined Button
                </Typography>
                <Box component="div">
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
                </Box>
                <Typography variant="h4" component="h2">
                    Sizing Button
                </Typography>
                <Box component="div">
                    <Button variant="outlined" color="primary" size="small">
                        Small
                    </Button>
                    <Button variant="outlined" color="primary" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" color="primary" size="large">
                        Large
                    </Button>
                </Box>
                <Typography variant="h4" component="h2">
                    Icon Button
                </Typography>
                <Box component="div">
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
                </Box>
                <Typography variant="h4" component="h2">
                    Icon & Label Button
                </Typography>
                <Box component="div">
                    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                    <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
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
                </Box>
                <Typography variant="h4" component="h2">
                    Basic Button Group
                </Typography>
                <Box component="div">
                    <ButtonGroup color="primary" orientation="vertical" aria-label="outlined primary button group">
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
                </Box>
                <Typography variant="h4" component="h2">
                    Check Box
                </Typography>
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
                    <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
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
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
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
            </Container>
        </ThemeProvider>
    );

    function createTheme() {
        return createMuiTheme({
            palette: {
                type: "dark",
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
