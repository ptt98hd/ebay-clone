import React from 'react';
import PropTypes from 'prop-types';

function ActionButton({ type, color, className, onClick, children }) {
	return (
		<button
			type={type}
			className={`btn btn-${color} border rounded-circle shadow ${className}`}
			style={{ width: '3rem', height: '3rem' }}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

ActionButton.propTypes = {
	type: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
};

ActionButton.defaultProps = {
	type: 'button',
	color: 'light',
};

export default ActionButton;
