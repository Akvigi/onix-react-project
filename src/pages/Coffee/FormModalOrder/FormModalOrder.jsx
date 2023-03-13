import React, {useCallback, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import Notiflix from 'notiflix';

import style from './FormModalOrder.module.sass';

import InputDataOrder from '../../../components/InputDataOrder.js/InputDataOrder';
import SortBtn from '../../../components/SortBtn/SortBtn';
import FormLItem from '../../../components/FormLItem/FormLItem';

import {changeFilter} from '../../../redux/slices/filterSlice';
import {toggleMenuModal, toggleOrderModal} from '../../../redux/slices/modalsSlice';
import {deleteItemFromOrder, replaceWithSorted} from '../../../redux/slices/orderSlice';
import {filterStatus} from '../../../redux/constants';

import {getSortedOrder} from '../../../redux/selectors';
import Overlay from '../../../components/Overlay/Overlay';

const portal = document.querySelector('#portal');

const FormModal = () => {
	const [name, setName] = useState('');
	const [number, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [dataItem, setDataItem] = useState('');

	const order = useSelector(getSortedOrder);
	const [modalStyling, setModalStyling] = useState(true);

	const [priceToggle, setPriceToggle] = useState(false);
	const [nameToggle, setNameToggle] = useState(false);

	const dispatch = useDispatch();

	const onCloseModal = () => {
		setModalStyling(false);
		setTimeout(() => dispatch(toggleOrderModal()), 1000);
	};

	const onMenu = () => {
		onCloseModal();
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
				onCloseModal();
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
		onCloseModal();
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

	const onDragStart = item => setDataItem(item);

	const onDragEnd = e => e.preventDefault();

	const handleDrop = (e, item) => {
		if (dataItem) {
			e.preventDefault();
			const newOrder = [...order];
			const index = newOrder.indexOf(item);

			newOrder.splice(newOrder.indexOf(dataItem), 1);
			newOrder.splice(index, 0, dataItem);

			setDataItem('');
			dispatch(changeFilter(filterStatus.basic));
			dispatch(replaceWithSorted(newOrder));
		}
	};

	return createPortal(
		<Overlay stateModal={modalStyling}>
			<form className={style.Form} onSubmit={e => onSubmitForm(e)} action='submit'>
				<button type='button'
					onClick={() => onCloseModal()}
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
					{order.length > 0 ? order.map(item =>
						(<FormLItem item={item} key={item.id}
							onDE={onDragEnd} onDS={onDragStart} onDrop={handleDrop}
							onAdd={() => dispatch(deleteItemFromOrder(item.id))}/>)) : (<p>Nothing in cart</p>)
					}
				</ul>
				<button className={style.OrderBtn} type='submit'>Order</button>
			</form>
		</Overlay>,
		portal,
	);
};

export default FormModal;
