import React, {Component, Fragment} from 'react';
import { Helmet } from 'react-helmet';
import ErrorWrap from './ErrorWrapper';

const title =' - Page Not Found';
const description = 'No page';



class Error extends Component {
  	render(){
  		return (
  			<Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <ErrorWrap title="404" desc="Oops, Page Not Found :(" />
  			</Fragment>
  		);
  	}
  }

  export default Error;
