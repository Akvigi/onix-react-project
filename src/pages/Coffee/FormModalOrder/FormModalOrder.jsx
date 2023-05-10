import React, {useCallback, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import Notiflix from 'notiflix';

import style from './FormModalOrder.module.sass';

import InputDataOrder from '../../../components/InputDataOrder.js/InputDataOrder';
import SortBtn from '../../../components/SortBtn/SortBtn';
import FormLItem from '../../../components/FormLItem/FormLItem';

import {changeFilter} from '../../../redux/slices/coffee/filterSlice';
import {toggleMenuModal, toggleOrderModal} from '../../../redux/slices/modalsSlice';
import {deleteCoffeeFromOrder, replaceCOWithSorted} from '../../../redux/slices/orderSlice';
import {filterStatus, nameConst, priceConst} from '../../../redux/constants';

import {selectSortedOrder} from '../../../redux/selectors';
import Overlay from '../../../components/Overlay/Overlay';
import {useTranslation} from 'react-i18next';

const portal = document.querySelector('#portal');

const FormModal = () => {
	const [name, setName] = useState('');
	const [number, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [dataItem, setDataItem] = useState('');

	const order = useSelector(selectSortedOrder);
	const [modalStyling, setModalStyling] = useState(true);

	const [priceToggle, setPriceToggle] = useState(false);
	const [nameToggle, setNameToggle] = useState(false);
	const {t} = useTranslation();

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
		dispatch(replaceCOWithSorted([]));
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
			return Notiflix.Notify.warning(t('form.nothincart'));
		}

		if (number === '') {
			return Notiflix.Notify.failure(t('form.notifforinp'));
		}

		console.log(address, number, name);
		onCloseModal();
		Notiflix.Notify.success(
			t('form.nothincart'),
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
		const array = [...order];
		while (!done) {
			done = true;
			for (let i = 1; i < array.length; i += 1) {
				if ((prevState === false) && (array[i - 1].price > array[i].price)) {
					done = false;
					const a = array[i - 1];
					array[i - 1] = array[i];
					array[i] = a;
				} else if ((prevState === true) && (array[i - 1].price < array[i].price)) {
					done = false;
					const a = array[i - 1];
					array[i - 1] = array[i];
					array[i] = a;
				}
			}
		}

		dispatch(changeFilter(''));
		dispatch(replaceCOWithSorted(array));
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
			dispatch(replaceCOWithSorted(newOrder));
		}
	};

	return createPortal(
		<Overlay stateModal={modalStyling}>
			<form className={style.Form} onSubmit={e => onSubmitForm(e)} action='submit'>
				<button type='button'
					onClick={() => onCloseModal()}
					className={style.ExitBtn}>X</button>
				<InputDataOrder
					placeholder={t('form.name')}
					value={name}
					onSet={setName}
				/>
				<InputDataOrder
					value={address}
					placeholder={t('form.addr')}
					onSet={setAddress}
				/>
				<input className={style.Input}
					type='phone'
					placeholder={t('form.ph')}
					value={number}
					onChange={e => setPhone(e.currentTarget.value)}
				/>
				<button className={style.MenuBtn}
					onClick={onMenu} type='button'>{t('form.menulink')}</button>
				<h4>{t('form.ordhead')}</h4>
				<div className={style.SortBtnCont}>
					<SortBtn toggle={priceToggle}
						by={priceConst}
						setToggle={setPriceToggle}
					>{t('form.sortAB')}</SortBtn>
					<SortBtn toggle={nameToggle}
						by={nameConst}
						setToggle={setNameToggle}
					>{t('form.sort19')}</SortBtn>
					<SortBtn toggle={priceToggle}
						by={priceConst}
						setToggle={setPriceToggle}
						onSort={sortWtSort}>{t('form.sortWS')}</SortBtn>
				</div>
				<ul className={style.List}>
					{order?.length ? order.map(item =>
						(<FormLItem item={item}
							key={item.id}
							onDE={onDragEnd}
							onDS={onDragStart}
							onDrop={handleDrop}
							onAdd={() => dispatch(deleteCoffeeFromOrder(item.id))} />))
						: (<p>{t('form.nic')}</p>)
					}
				</ul>
				<button className={style.OrderBtn} type='submit'>{t('form.ordbtn')}</button>
			</form>
		</Overlay>,
		portal,
	);
};

export default FormModal;
