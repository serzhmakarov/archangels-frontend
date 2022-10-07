import React from 'react';

const withLoading = Component => (props) => {
	if (!props.isLoaded) {
		return (<div>Loading...</div>);
	}

	return <Component {...props} />
}

export default withLoading; 

