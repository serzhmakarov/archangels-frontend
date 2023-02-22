import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import LoadingGif from '../assets/images/loading.gif';

const withLoading = Component => (props) => {
	if (!props.isLoaded) {
		return (
			<div className="loader-spinner">
				<img src={LoadingGif} alt="Loading..." />
			</div>
		);
	}

	return <Component {...props} />
}

export default withLoading; 

