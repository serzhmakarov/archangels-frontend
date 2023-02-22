import React from 'react';
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

