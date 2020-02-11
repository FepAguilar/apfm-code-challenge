import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        triviaWrapper: {
            display: 'flex',
            flexGrow: 1,
            textAlign: "center",
        },
        boxStyles: {
            background: "#5f5e5e",
            marginBottom: "15px"
        },
        triviaItem: {
            maxWidth: "70%",
            margin: "0 auto",
            padding: "12px",
        },
        buttonGroup: {
            width: "50%",
            margin: "2rem 0 30px"
        },
        resultAnswer: {
            display: "inline-block"
        },
        greenCheck: {
            background: "green",
            borderRadius: "50%",
            display: "inline-block",
            width: "30px",
            height: "30px",
            paddingTop: "4px",
            margin: "0 3px"
        },
        redCheck: {
            background: "#af2c2c",
            borderRadius: "50%",
            display: "inline-block",
            width: "30px",
            height: "30px",
            paddingTop: "4px",
            margin: "0 3px"
        },
        answerPanel: {
            margin: "20px 0"
        }
    });
});
