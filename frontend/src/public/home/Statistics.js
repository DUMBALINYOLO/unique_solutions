import React, { Fragment , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, Button, Tooltip, Divider } from '@material-ui/core';
import AOS from "aos";
import 'aos/dist/aos.css';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: 'primary',
      paddingTop: '65px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
});

function LivePreviewExample(props) {
    const { classes } = props;

    useEffect(() =>{
        AOS.init({duration : 2000})

    }, []);


  return (
    <Fragment>
        <div data-aos="fade-left" className={classes.root}>
            <h1 style={{textAlign: 'center', color: 'teal'}}>STATS</h1>
            <Card className="card-box mb-4">
                <Grid container spacing={4}>
                <Grid item xs={12} lg={6} className="pt-3">
                    <div className="divider-v divider-v-md" />
                    <Grid container spacing={4} className="mt-2">
                    <Grid item xs={6}>
                        <div className="text-center">
                        <div>
                            <FontAwesomeIcon
                            icon={['far', 'user']}
                            className="font-size-xxl text-success"
                            />
                        </div>
                        <div className="mt-2 line-height-sm">
                            <b className="font-size-lg">100 +</b>
                            <span className="text-black-50 d-block">CLIENTS</span>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="text-center">
                        <div>
                            <FontAwesomeIcon
                            icon={['far', 'chart-bar']}
                            className="font-size-xxl text-info"
                            />
                        </div>
                        <div className="mt-2 line-height-sm">
                            <b className="font-size-lg">100+</b>
                            <span className="text-black-50 d-block">HAPPY CLIENTS</span>
                        </div>
                        </div>
                    </Grid>
                    </Grid>
                    <Divider className="my-3" />
                    <div className="text-center d-flex align-items-center justify-content-center mb-3">
                    <Tooltip arrow title="Menu Example">
                        <Button
                        color="primary"
                        variant="outlined"
                        className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                        <FontAwesomeIcon
                            icon={['far', 'building']}
                            className="font-size-lg"
                        />
                        </Button>
                    </Tooltip>
                    <Tooltip arrow title="Menu Example">
                        <Button
                        color="primary"
                        variant="outlined"
                        className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                        <FontAwesomeIcon
                            icon={['far', 'lightbulb']}
                            className="font-size-lg"
                        />
                        </Button>
                    </Tooltip>
                    <Tooltip arrow title="Menu Example">
                        <Button
                        color="primary"
                        variant="outlined"
                        className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                        <FontAwesomeIcon
                            icon={['far', 'object-group']}
                            className="font-size-lg"
                        />
                        </Button>
                    </Tooltip>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} className="pt-3">
                    <Grid container spacing={4} className="mt-2">
                    <Grid item xs={6}>
                        <div className="text-center">
                        <div>
                            <FontAwesomeIcon
                            icon={['far', 'user']}
                            className="font-size-xxl text-success"
                            />
                        </div>
                        <div className="mt-2 line-height-sm">
                            <b className="font-size-lg">200+</b>
                            <span className="text-black-50 d-block">PROJECTS</span>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="text-center">
                        <div>
                            <FontAwesomeIcon
                            icon={['far', 'chart-bar']}
                            className="font-size-xxl text-info"
                            />
                        </div>
                        <div className="mt-2 line-height-sm">
                            <b className="font-size-lg">25</b>
                            <span className="text-black-50 d-block">CURRENTLY PENDING PROJECTS</span>
                        </div>
                        </div>
                    </Grid>
                    </Grid>
                    <Divider className="my-3" />
                    <div className="text-center">
                    <Button
                        color="primary"
                        className="m-3 border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded">
                        <FontAwesomeIcon
                        icon={['far', 'comment-dots']}
                        className="font-size-lg"
                        />
                    </Button>
                    <Button
                        color="primary"
                        className="m-3 border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded">
                        <FontAwesomeIcon
                        icon={['far', 'question-circle']}
                        className="font-size-lg"
                        />
                    </Button>
                        <Button
                            color="primary"
                            className="m-3 border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded">
                            <FontAwesomeIcon
                            icon={['far', 'lightbulb']}
                            className="font-size-lg"
                            />
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    </Fragment>
  );
}


export default withStyles(styles)(LivePreviewExample);
