import React from 'react';
import style from './Overlay.module.sass';
import PropTypes from 'prop-types';

const Overlay = ({children, stateModal, onBackCl}) => (
	<div onClick={onBackCl}
		className={stateModal ? `${style.Overlay} ${style.Active}`
			: `${style.Overlay} ${style.NotActive}`}
	>{children}</div>
);
const Overl = WrappedComponent => class extends React.Component {
	// Constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		children: props.children,
	// 		stateModal: props.stateModal,
	// 		onBackCl: props.onBackCl,
	// 	};
	// }
	render() {
		return (
			<div onClick={this.props.onBackCl}
				className={this.props.stateModal ? `${style.Overlay} ${style.Active}`
					: `${style.Overlay} ${style.NotActive}`}
			><WrappedComponent {...this.props} /></div>
		);
	}
};

Overlay.propTypes = {
	onBackCl: PropTypes.func,
	children: PropTypes.element,
	stateModal: PropTypes.bool.isRequired,
};

Overl.propTypes = {
	onBackCl: PropTypes.func,
	stateModal: PropTypes.bool.isRequired,
};

// Export default Overlay;

export default Overl(Overlay);

