import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import { TodayWaterInfo } from "../TodayWaterInfo/TodayWaterInfo"
import { FormInput } from "../reuse/input/FormInput"
import { AddWaterModal, PrevInfo, WaterCounter, CounterLabel, CounterBtn, ModalFooter, Label, ModalBtn, Form, TimeInput } from "./TodayListModal.styled"
import { ModalSubtitle, ModalTitle, ModalCloseButton } from "../CommonStyles.styled"
import icons from '../../../assets/icons.svg';

import {getOptions, getRoundedMinutes, getConvertedTime} from "../../../hooks/water"
import { AddWaterSchema } from "../validationWaterSchema"
import waterApi from "../../../redux/water/waterOperations"
import { useTranslation } from 'react-i18next'; 



const maxVolumeLimit = 5000;
const minVolumeLimit = 50;
const step = 50;




export const TodayListModal = ({ isOpen, onClose, isEditing, selectedItemId, amountWater = 0, date }) => {
  const { t } = useTranslation(); 
  const dispatch = useDispatch();
  const [volume, setVolume] = useState(amountWater);

  const nowTimeRounded = getRoundedMinutes(date);
  const nowTime = date ? format(getConvertedTime(date), 'HH:mm') :format(new Date(), 'HH:mm');

   const [time, setTime] = useState({
    value: nowTimeRounded,
    label: nowTime,
   })
   
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const selectedTime = time.value;
    if (formik.values.portionOfWater > maxVolumeLimit) {
      Notify.failure('The amount of water should be no more than 5000 milliliters');
      return;
    } else {
      if (!isEditing) {
        Notify.success('Water portion successfully added');
        dispatch(waterApi.addWaterThunk({
        date: format(currentDate, 'dd/MM/uuuu'),
        time: selectedTime,
        waterAmount: volume,
      }));
      //   console.log('ADD Water data :>> ', {
      // date: format(currentDate, 'dd/MM/uuuu'),
      // time: selectedTime,
      // waterAmount: volume,
      // });
        onClose();
        setVolume(0)
        formik.values.portionOfWater = 0;
    }
      if (isEditing) {
        Notify.success('Information was successfully edited');
        dispatch(waterApi.editWaterThunk({
        id: selectedItemId,
        time: selectedTime,
        waterAmount: volume,
      }));
      // console.log('EDIT Water data :>> ', {
      // _id: selectedItemId,
      // time: selectedTime,
      // water: volume
      // });
      onClose();
    }

    }
  }
  
  const formik = useFormik({
    initialValues: {
      portionOfWater: volume,
    },
    validationSchema: AddWaterSchema,
    onSubmit: handleOnSubmit,
  });
  
  
  useEffect(() => {
    setVolume(amountWater);
    setTime({ value: nowTimeRounded, label: nowTime })
    formik.initialValues.portionOfWater = amountWater;
      
  }, [amountWater, nowTime, nowTimeRounded,formik.initialValues])
  

  const handleChangeTime = selectedOption => {
    setTime(selectedOption);
  };

  const onMenuOpen = () => {
    requestAnimationFrame(() => {
      const selectedOption = document.querySelector(
        '.Select__option--is-selected'
      );
      if (selectedOption) {
        selectedOption.scrollIntoView({});
      }
    });
  };
  // ---------------------------------------------------
  

  //_____________________________________________ Volume

  const increaseVolume = () => {
    if (volume >= maxVolumeLimit) {
      return;
    }
    setVolume((prev) => parseFloat(prev) + step);
    // setEnteredVolume((prev) => parseFloat(prev) + step);
    formik.values.portionOfWater = formik.values.portionOfWater + step;
  };

  const decreaseVolume = () => {
    if (volume <= minVolumeLimit) {
      return;
    }
    setVolume((prev) => parseFloat(prev) - step);
    // setEnteredVolume((prev) => parseFloat(prev) - step);
    formik.values.portionOfWater = formik.values.portionOfWater - step;
  };

  const handleOnBlur = (e) => {
    if (e.target.value >= minVolumeLimit && e.target.value <= maxVolumeLimit) {
     const value = parseFloat(e.target.value);
    setVolume(value);
    }
  }

  // const handleChangeVolume = e => {
  //  setEnteredVolume(e.target.value);
  // };
// ---------------------------------------------------------

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
          <AddWaterModal>
        <ModalTitle>{isEditing? t('addEditWaterModal.headerEdit') : t('addEditWaterModal.headerAdd')}</ModalTitle>
              <ModalCloseButton onClick={onClose}>
                <svg >
                <use href={`${icons}#icon-close`}></use>
                </svg>
              </ModalCloseButton>
              {isEditing && <PrevInfo><TodayWaterInfo data={{amount:amountWater,time:date}}/></PrevInfo>}
              <div>
                <ModalSubtitle>{isEditing? t('addEditWaterModal.correctData') : t('addEditWaterModal.choose')}</ModalSubtitle>
                <p>{t('addEditWaterModal.amount')}</p>
                <WaterCounter>
                  <CounterBtn minus onClick={decreaseVolume}>
                    <svg>
                      <use href={`${icons}#icon-minus`}></use>
                    </svg>
                  </CounterBtn>
                  <CounterLabel>{volume}</CounterLabel>
                  <CounterBtn plus onClick={increaseVolume}>
                    <svg>
                      <use href={`${icons}#icon-plus`}></use>
                    </svg>
                  </CounterBtn>
                </WaterCounter>
              </div>
              <Form onSubmit={handleOnSubmit}>
                <div>
            <p>{t('addEditWaterModal.time')}</p>
              <TimeInput classNamePrefix={'Select'}
              options={getOptions()} value={time} defaultValue={time} onChange={handleChangeTime} onMenuOpen={onMenuOpen}/>
                </div>
                <div>
                  <ModalSubtitle>{t('addEditWaterModal.waterUsed')}</ModalSubtitle>
            <FormInput
            value={formik.values.portionOfWater}
              onBlur={e => {
                formik.handleBlur(e)
                handleOnBlur(e);
              }}
            onChange={formik.handleChange}
            onFocus ={(e)=> e.target.value =""}
            type="number"
            name="portionOfWater"
            min="0"
            step="0.1"
            error={formik.touched.portionOfWater && formik.errors.portionOfWater} />
                </div>
                <ModalFooter>
                  <Label>{volume}ml</Label>
                  <ModalBtn type='submit'>{t('dailyNormaModal.buttonSave')}</ModalBtn>
                </ModalFooter>
             </Form>
          </AddWaterModal> 
    </ModalOverlay>
  )
}