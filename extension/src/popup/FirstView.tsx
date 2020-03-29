import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const FirstView = () => {

    return <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
    >
        <h1>Netflix Mustaches</h1>
        <Button variant="contained" color="primary">Create Game</Button>
        <div>- or -</div>
        <Button variant="contained" color="primary">Join Game</Button>
    </Grid>;
};