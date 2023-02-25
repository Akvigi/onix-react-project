import Notiflix from 'notiflix';
import React, {useCallback, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import {closeOrderModal, toggleMenuModal, toggleOrderModal} from '../../redux/modalsSlice';
import {deleteItemFromOrder} from '../../redux/orderSlice';
import {getOrder, getOrderModal} from '../../redux/selectors';
import style from './FormModalOrder.module.sass';
import InputDataOrder from './InputDataOrder.js/InputDataOrder';
import SortBtn from './SortBtn/SortBtn';

const portal = document.querySelector('#portal');

const FormModal = () => {
	const [name, setName] = useState('');
	const [number, setPhone] = useState('');
	const [Address, setAddress] = useState('');

	const order = useSelector(getOrder);
	const modal = useSelector(getOrderModal);

	const [priceToggle, setPriceToggle] = useState(false);
	const [nameToggle, setNameToggle] = useState(false);

	const dispatch = useDispatch();

	const onMenu = () => {
		dispatch(toggleOrderModal());
		dispatch(toggleMenuModal());
	};

	const reset = () => {
		setName('');
		setPhone('');
		setAddress('');
	};

	const esc = useCallback(
		e => {
			if (e.code === 'Escape') {
				dispatch(closeOrderModal());
			}
		},
		[],
	);

	useEffect(() => {
		window.addEventListener('keydown', esc);

		return () => {
			window.removeEventListener('keydown', esc);
		};
	}, [esc]);

	const onSubmitForm = e => {
		e.preventDefault();
		if (order.length === 0) {
			return Notiflix.Notify.warning('Nothing in cart');
		}

		if (number === '') {
			return Notiflix.Notify.failure('Please input number of your phone!');
		}

		console.log(Address, number, name);
		dispatch(toggleOrderModal());
		reset();
	};

	const sortWtSort = (prevState, setToggle) => {
		let done = false;
		const array = JSON.parse(localStorage.getItem('order'));
		if (prevState === false) {
			while (!done) {
				done = true;
				for (let i = 1; i < array.length; i += 1) {
					if (array[i - 1].price > array[i].price) {
						done = false;
						const a = array[i - 1];
						array[i - 1] = array[i];
						array[i] = a;
					}
				}
			}
		} else if (prevState === true) {
			while (!done) {
				done = true;
				for (let i = 1; i < array.length; i += 1) {
					if (array[i - 1].price < array[i].price) {
						done = false;
						const a = array[i - 1];
						array[i - 1] = array[i];
						array[i] = a;
					}
				}
			}
		}

		setToggle(!prevState);
	};

	return createPortal(
		<div className={modal ? `${style.Overlay} ${style.Active}` : style.Overlay}>
			<form className={style.Form} onSubmit={e => onSubmitForm(e)} action='submit'>
				<button type='button'
					onClick={() => dispatch(toggleOrderModal())}
					className={style.ExitBtn}>X</button>
				<InputDataOrder
					placeholder='Name'
					onSet={setName}
				/>
				<InputDataOrder
					placeholder='Address'
					onSet={setAddress}
				/>
				<input className={style.Input}
					type='phone'
					placeholder='Phone'
					onChange={e => setPhone(e.currentTarget.value)}
				/>
				<button className={style.MenuBtn}
					onClick={onMenu} type='button'>Menu</button>
				<h4>Your order</h4>
				<div className={style.SortBtnCont}>
					<SortBtn toggle={priceToggle}
						by={'price'}
						setToggle={setPriceToggle}
					>Sort by price</SortBtn>
					<SortBtn toggle={nameToggle}
						by={'name'}
						setToggle={setNameToggle}
					>Sort by name</SortBtn>
					<SortBtn toggle={priceToggle}
						by={'price'}
						setToggle={setPriceToggle}
						onSort={sortWtSort}>Sort without sort</SortBtn>
				</div>
				<ul className={style.List}>
					{order.length > 0 ? (order.map(({name, price, id}) =>
						(<li key={id} className={style.OrderItem}>
							<p>{name}</p>
							<div className={style.PriceDelbtnCont}>
								<p>{price}K</p>
								<button type='button'
									onClick={() => dispatch(deleteItemFromOrder(id))}
									className={style.DelBtn}>-</button>
							</div>
						</li>))) : (<p>Nothing in cart</p>)
					}
				</ul>
				<button className={style.OrderBtn} type='submit'>Order</button>
			</form>
		</div>,
		portal,
	);
};

export default FormModal;
