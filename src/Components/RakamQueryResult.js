/*
A comp to display when a rakam is found when entering its sku
*/

import {Stack,
        Typography,
        FormControlLabel,
        Checkbox,
    } from '@mui/material';

const RakamQueryResult = (props) => {

    const {found : isFound, makat, total, totalOperating} = props.data;
    const stackStyle = {
        borderRadius: 6,
        mt: 3,
        mx: 3,
        flexBasis: 0, 
        flexGrow: 1,
        bgcolor: isFound ? 'lightgreen' : 'salmon',
        textAlign: 'center',
        alignItems: 'center', // Center items vertically
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)', // Optional shadow effect

    };

    const failedQueryCheckboxStyle = {
        bgcolor: 'background.default', // White background
        borderRadius: 10,
        width: '80%',
        padding: 1,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Optional shadow effect
    };

    const changeHandler = () => {
        props.newRakamState.onAcceptNewRakam();
    }

    const notFoundHTML = (
        <>
            <Typography variant='h4' color='background.default' mt={5}>רקמ לא נמצא בגדוד!</Typography>
            <Typography color={'white'} fontWeight={'bold'}>שים לב שהקלדת את המקט הנכון!</Typography>
            <Typography color={'white'} >במידה והינך רוצה להכניס רקמ מסוג חדש למערכת, אנא לחץ על הכפתור למטה ותאשר שברצונך לעשות זאת.</Typography>
            <FormControlLabel control={<Checkbox  color="success" onChange={changeHandler} checked={props.newRakamState.acceptAddingNewRakam}/>} label="ווידאתי שהכנסתי נתונים נכונים וברצוני להוסיף רקמ חדש לגדוד"
            sx={failedQueryCheckboxStyle}/> 
        </>
    );


    const foundHTML = (
        <>
            <Typography variant='h4' color='background.default' mt={5}>רקמ נמצא בגדוד!</Typography>
            <Typography>נוסיף לוגו שיראה כמה שמישים, באחוזים וכמותי</Typography>
            <Typography>מקט: {makat}</Typography>
            <Typography>כמות: {total}</Typography>
            <Typography>שמישים: {totalOperating}</Typography>
        </>
    );

    return (
        <Stack spacing={2} sx={stackStyle}>
            {isFound ? foundHTML : notFoundHTML}
        </Stack>
    );

};

export default RakamQueryResult;
