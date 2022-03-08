import React from 'react';
import { doc, setDoc } from "firebase/firestore";
import {makeStyles} from '@mui/styles';
import {db} from '../firebase/config';
import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import MouseOverPopover from '../Components/PopoverButton';
import {useNavigate} from "react-router-dom";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    createTheme,
    ThemeProvider,
    Button,
    Grid
} from '@mui/material';

const UseStyles = makeStyles((theme) => ({
    layout: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vw',
        backgroundColor: '#FDF9F9',
    },

    title: {
        font: theme.font.title,
        color: theme.color.orange,
        textAlign: 'center',
        margin: '0 0 0 0.9rem',
        width: '100rem',
        height: '8.5rem',
    },
    subtitle: {
        font: theme.font.subtitle,
        color: theme.color.white,
        backgroundColor: theme.color.darkBrown,
        textAlign: 'left',
        margin: '0 0 0 0.9rem',
        fontWeight: 'medium',
        width: '25',
        height: '4rem',
        borderRadius: '15px',
    },

}));
const studyTheme = createTheme({
    palette: {
        generic: {
            main: '#594A47',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'Solway',
    },
});

// need to add backend config to get specific button data
function European() {
    let isChecked1 = false;
    let isChecked2 = false;
    let isChecked3 = false;
    const [errorMessage, setErrorMessage] = useState('');
    const euroMeal = [];

    function addEntree(value) {
        console.log(value);
        euroMeal[0] = value;
        console.log(euroMeal)
    }

    function addDrink(value) {
        console.log(value);
        euroMeal[1] = value;
        console.log(euroMeal)

    }

    function addSide(value) {
        console.log(value);
        euroMeal[2] = value;
        console.log(euroMeal)

    }

    function handleChange(id) {
        if (id === "european") {
            isChecked1 = true;
        } else if (id === "drink") {
            isChecked2 = true;
        } else if (id === "side") {
            isChecked3 = true;
        }
    }

    let navigate = useNavigate();
    const routeChange = () => {
        if (!isChecked1 || !isChecked2 || !isChecked3) {
            setErrorMessage('Please select an option');
        } else {
            // TODO: figure out waht to do for users
            setDoc(doc(db, 'Orders', 'xd'), {Entree: euroMeal[0], Drink: euroMeal[1], Side: euroMeal[2]});
            let path = `newPath`; //change to correct path
            navigate(path);
        }
    }
    const european = UseStyles();
    const [europeans, setEuropeans] = useState([]);
    const europeansCollectionRef = collection(db, 'European');
    useEffect(() => {
        const getEuropeans = async () => {
            const data = await getDocs(europeansCollectionRef);   //return all documents inside of it
            console.log(data);
            setEuropeans(data.docs.map((doc) => ({...doc.data()})));
        };
        getEuropeans();
    }, [])

    const [drinks, setDrinks] = useState([]);
    const drinksCollectionRef = collection(db, 'Drinks');
    useEffect(() => {
        const getDrinks = async () => {
            const data = await getDocs(drinksCollectionRef);   //return all documents inside of it
            console.log(data);
            setDrinks(data.docs.map((doc) => ({...doc.data()})));
        };
        getDrinks();
    }, [])

    const [sides, setSides] = useState([]);
    const sidesCollectionRef = collection(db, 'Sides');
    useEffect(() => {
        const getSides = async () => {
            const data = await getDocs(sidesCollectionRef);   //return all documents inside of it
            console.log(data);
            setSides(data.docs.map((doc) => ({...doc.data()})));
        };
        getSides();
    }, [])

    return (
        <div className={european.layout}>
            <div className={european.title}>
                European-Style Meal
            </div>

            <Grid container spacing={2} columns={15}><Grid item xs={5}>
                <h2 className={european.subtitle}> Entrees: </h2>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={() => handleChange("european")}
                    >
                        {europeans.map((european) => {
                            return (
                                <MouseOverPopover label={'Calories: ' + european.Nutrition}>
                                    <FormControlLabel
                                    value={european.Name} control={<Radio style={{
                                    color: "#F4A950",
                                }}/>} label={european.Name} onChange={(e) => addEntree(european.Name)}/>
                                </MouseOverPopover>
                            );
                        })}
                    </RadioGroup>
                </FormControl>
            </Grid>

                <Grid item xs={5}><h2 className={european.subtitle}> Drink: </h2>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"/>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={() => handleChange("drink")}
                        >
                            {drinks.map((drink) => {
                                return (
                                    <MouseOverPopover label={'Calories: ' + drink.Nutrition}><FormControlLabel
                                        value={drink.Name} control={<Radio style={{
                                        color: "#F4A950"
                                    }}/>} label={drink.Name} onChange={(e) => addDrink(drink.Name)}/></MouseOverPopover>
                                );
                            })}
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={5}><h2 className={european.subtitle}> Side: </h2>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={() => handleChange("side")}
                        >
                            {sides.map((side) => {
                                return (
                                    <MouseOverPopover label={'Calories: ' + side.Nutrition}><FormControlLabel
                                        value={side.Name} control={<Radio style={{
                                        color: "#F4A950",
                                    }}/>} label={side.Name} onChange={(e) => addSide(side.Name)}/></MouseOverPopover>
                                );
                            })}
                        </RadioGroup>
                    </FormControl>
                </Grid></Grid>

            <ThemeProvider theme={studyTheme}>
                <Button sx={{mt: 6}} onClick={routeChange} variant="contained" color="generic" fontFamily="true">
                    Place Order
                </Button>
            </ThemeProvider>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </div>
    );

};
export default European; 