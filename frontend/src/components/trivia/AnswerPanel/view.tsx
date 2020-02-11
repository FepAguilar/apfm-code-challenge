import React from 'react';
import { AnswerPanelProps } from "./types";
import Grid from '@material-ui/core/Grid';

export const AnswerPanel: React.FC<AnswerPanelProps> = (props: AnswerPanelProps) => {
    const { results, styles } = props;

    return (<div data-test="AnswerPortal">
        {results.length === 0
            ? <div></div>
            : <Grid item xs={12}>
                <div className={styles.answerPanel}>
                    <div>
                        {
                            results.map((result, index) => {
                                if (result === 'X') {
                                    return (
                                        <div key={`wrong_${index}`} className={styles.redCheck}>
                                            {`   ${result}   `}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={`correct_${index}`} className={styles.greenCheck}>
                                            {`   ${result}   `}
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </Grid>
        }</div>);
};

