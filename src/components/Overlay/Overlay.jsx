import React from 'react';
import style from './Overlay.module.sass';
import PropTypes from 'prop-types';

const Overlay = ({children, stateModal, onBackCl}) => (
	<div onClick={onBackCl}
		className={stateModal ? `${style.Overlay} ${style.Active}`
			: `${style.Overlay} ${style.NotActive}`}
	>{children}</div>
);
function overl(Component) {
	class WrappedComponent extends React.Component {
		render() {
			return (
				<div onClick={this.props.onBackCl}
					className={this.props.stateModal ? `${style.Overlay} ${style.Active}`
						: `${style.Overlay} ${style.NotActive}`}
				><Component {...this.props} /></div>
			);
		}
	}
	WrappedComponent.propTypes = {
		onBackCl: PropTypes.func,
		stateModal: PropTypes.bool.isRequired,
	};
	return WrappedComponent;
}

Overlay.propTypes = {
	onBackCl: PropTypes.func,
	children: PropTypes.element,
	stateModal: PropTypes.bool.isRequired,
};

export default overl(Overlay);

