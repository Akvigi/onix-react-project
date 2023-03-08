import Notiflix from 'notiflix';
import React, {useCallback, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import {closeOrderModal, toggleMenuModal, toggleOrderModal} from '../../redux/slices/modalsSlice';
import {deleteItemFromOrder, replaceWithSorted} from '../../redux/slices/orderSlice';
import {getOrderModal, getSortedOrder} from '../../redux/selectors';
import style from './FormModalOrder.module.sass';
import InputDataOrder from './InputDataOrder.js/InputDataOrder';
import SortBtn from './SortBtn/SortBtn';
import FormLItem from './FormLItem/FormLItem';

const portal = document.querySelector('#portal');

const FormModal = () => {
	const [name, setName] = useState('');
	const [number, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const order = useSelector(getSortedOrder);
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
		dispatch(replaceWithSorted([]));
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

		console.log(address, number, name);
		dispatch(toggleOrderModal());
		Notiflix.Notify.success(
			'Wait for call from us to clarify your order',
			{
				timeout: 3000,
				position: 'center-top',
				fontSize: '20px',
			},
		);
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

		dispatch(replaceWithSorted(array));
		setToggle(!prevState);
	};

	const onDragStart = (e, index) => e.dataTransfer.setData('text/plain', index);

	const onDragEnd = e => e.preventDefault();

	const handleDrop = (e, index) => {
		const oldIndex = e.dataTransfer.getData('text/plain');
		const newOrder = [...order];
		const itemInOrd = newOrder[oldIndex];

		newOrder.splice(oldIndex, 1);

		newOrder.splice(index, 0, itemInOrd);

		dispatch(replaceWithSorted(newOrder));
	};

	return createPortal(
		<div className={modal ? `${style.Overlay} ${style.Active}` : style.Overlay}>
			<form className={style.Form} onSubmit={e => onSubmitForm(e)} action='submit'>
				<button type='button'
					onClick={() => dispatch(toggleOrderModal())}
					className={style.ExitBtn}>X</button>
				<InputDataOrder
					placeholder='Name'
					value={name}
					onSet={setName}
				/>
				<InputDataOrder
					value={address}
					placeholder='Address'
					onSet={setAddress}
				/>
				<input className={style.Input}
					type='phone'
					placeholder='Phone'
					value={number}
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
					{order.length > 0 ? order.map(({name, price, id}, index) =>
						(<FormLItem id={id} key={id} index={index}
							name={name} onDE={onDragEnd} onDS={onDragStart}
							price={price} onDrop={handleDrop}
							onAdd={() => dispatch(deleteItemFromOrder(id))}/>)) : (<p>Nothing in cart</p>)
					}
				</ul>
				<button className={style.OrderBtn} type='submit'>Order</button>
			</form>
		</div>,
		portal,
	);
};

export default FormModal;
