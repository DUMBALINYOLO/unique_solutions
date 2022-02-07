import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Grid from '@material-ui/core/Grid';
import ShowcaseCard from '../cards/ShowcaseCard';
import Title from './Title';
import styles from './landingStyle-jss';
import petal3 from '../../images/decoration/petal3.svg';
import petal4 from '../../images/decoration/petal4.svg';
import thumb1 from '../../images/screen/thumb1.jpg';
import thumb3 from '../../images/screen/thumb3.jpg';
import thumb5 from '../../images/screen/thumb5.jpg';
import thumb2 from '../../images/screen/thumb2.jpg';
import thumb4 from '../../images/screen/thumb4.jpg';

import four from './four.jpg';
import six from './six.jpg';
import seven from './seven.jpg';
import eight from './eight.jpg';
import five from './five.png';


function ParallaxDeco(props) {
  const { classes } = props;
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.bannerParallaxWrap}>
          <Parallax
            offsetYMax={70}
            offsetYMin={-200}
            slowerScrollRate
            tag="figure"
          >
            <svg
              fill="#fff"
              className={
                classNames(
                  classes.parallaxVertical,
                  classes.parallaxPetal1
                )
              }
            >
              <use xlinkHref={petal3} />
            </svg>
          </Parallax>
          <Parallax
            offsetYMax={100}
            offsetYMin={-200}
            slowerScrollRate
            tag="figure"
          >
            <svg
              fill="#fff"
              className={
                classNames(
                  classes.parallaxVertical,
                  classes.parallaxPetal2
                )
              }
            >
              <use xlinkHref={petal4} />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}

ParallaxDeco.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ParallaxDecoStyled = withStyles(styles)(ParallaxDeco);

class Showcase extends React.Component {
  render() {
    const { classes, slideMode, width } = this.props;
    return (
      <section className={classes.showcase}>
        {!slideMode && <ParallaxDecoStyled />}
        <div className={classes.container}>
          <Grid container className={classes.root} spacing={5}>
            <Grid item sm={6} md={4} xs={12}>
              <Title 
                title="SOFTWARE MODULES" 
                align={width === 'lg' ? 'left' : 'center'} 
                monocolor={slideMode && true} 
              />
              <ShowcaseCard
                title="TRANSACTION MANAGEMENT"
                desc="We develop systems that connect all your systems"
                action="Try Us"
                image={four}
              />
              <ShowcaseCard
                title="REPORT MANAGEMENT"
                desc="We integrate all your Industrial Systems "
                action="Visit Us"
                image={five}
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <ShowcaseCard
                title="AUDIT MANAGEMENT"
                desc="We are the kings in Energy Systems"
                action="Get in touch"
                image={six}
              />
              <ShowcaseCard
                title="IIOT"
                desc="Industrial Internet of Thins Experts"
                action="LETS GO IIoT"
                image={eight}
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <div className={classes.lastShowcase}>
                <ShowcaseCard
                  title="USER MANAGEMENT"
                  desc="Making your job easier"
                  action="At your Service"
                  image={seven}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}


Showcase.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  slideMode: PropTypes.bool
};

Showcase.defaultProps = {
  slideMode: false
};


export default withWidth()(withStyles(styles)(Showcase));
