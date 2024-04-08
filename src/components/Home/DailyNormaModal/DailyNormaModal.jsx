import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
import Loader from "components/Loader/Loader"
import { FormInputToday } from "../reuse/Input/FormInput"
import {
  NormaModal,
  ModalBtn,
  CalculationScheme,
  CalculationText,
  CalculationItem,
  CalculationResult,
  Form,
  FormRadioItems,
  RadioItem,
} from './DailyNormaModal.styled';
import {
  ModalSubtitle,
  ModalTitle,
  ModalCloseButton,
  LoaderWrap
} from '../reuse/CommonStyles.styled';

import icons from '../../../assets/icons.svg';
import { selectAuthUser } from "../../../redux/auth/authSelectors";
import { selectIsLoading } from "../../../redux/root/rootSelectors";
import { validationWaterSchema } from "../Schema/validationWaterSchema"
import authApi from "../../../redux/auth/authOperations"
import { useTranslation } from 'react-i18next'; 


const maxDailyVolumeLimit = 15000;

export const DailyNormaModal = ({ isOpen, onClose }) => {

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { gender } = useSelector(selectAuthUser);
  const isLoading = useSelector(selectIsLoading);

  const [selectedDailyVolume, setSelectedDailyVolume] = useState(0);

  const calculateWaterVolume = useCallback((values) => {
    if (!values.weight) return;
    const weightFactor = values.gender === 'female' ? 0.03 : 0.04;
    const activityFactor = values.gender === 'female' ? 0.4 : 0.6;
    const result = values.weight * weightFactor + values.activityTime * activityFactor;
    setSelectedDailyVolume(result);
  }, []);


  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const waterVolume = formik.values.dailyWaterGoal * 1000;
    
    if (waterVolume > 0 && waterVolume <= maxDailyVolumeLimit) {
      await dispatch(authApi.waterRateThunk({
        waterRate: waterVolume,
        date: format(new Date(), 'dd/MM/uuuu')
      }));
      Notify.success('Daily norma successfully updated');
      formik.resetForm();
      onClose();
    } else {
      Notify.failure('The amount of water must be a positive and no more than 15000 liters');
    }
  }

  const formik = useFormik({
    initialValues: {
      gender: gender,
      weight: 0,
      activityTime: 0,
      dailyWaterGoal: 0,
    },
    validationSchema: validationWaterSchema,
    onSubmit: handleOnSubmit,
  });

   useEffect(() => {
    calculateWaterVolume(formik.values);
  }, [calculateWaterVolume, formik.values]);


  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <NormaModal>
        <ModalTitle>{t('dailyNormaModal.header')}</ModalTitle>
        <ModalCloseButton onClick={onClose}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </ModalCloseButton>
        <div>
          <CalculationScheme>
            <p>
              {t('dailyNormaModal.girl')}: <span>V=(M*0,03) + (T*0,4)</span>
            </p>
            <p>
              {t('dailyNormaModal.man')}: <span>V=(M*0,04) + (T*0,6)</span>
            </p>
          </CalculationScheme>
          <CalculationText>
            <span>*</span> {t('dailyNormaModal.description')}
          </CalculationText>
        </div>
        <Form onSubmit={handleOnSubmit}>
          <div>
            <ModalSubtitle>{t('dailyNormaModal.calculate')}</ModalSubtitle>
            <FormRadioItems>
              <RadioItem>
                <input
                  id="gender-f"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formik.values.gender === 'female'}
                  onChange={() => formik.setFieldValue('gender', 'female')}
                />
                <label htmlFor="gender-f">{t('dailyNormaModal.girl')}</label>
              </RadioItem>
              <RadioItem>
                <input
                  id="gender-m"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formik.values.gender === 'male'}
                  onChange={() => formik.setFieldValue('gender', 'male')}
                />
                <label htmlFor="gender-m">{t('dailyNormaModal.man')}</label>
              </RadioItem>
            </FormRadioItems>
            <CalculationItem>
               <FormInputToday
            label={t('dailyNormaModal.weight')}
            value={formik.values.weight}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                onFocus ={(e)=> e.target.value =""}
            type="number"
            name="weight"
                min="0"
                step="0.1"
            error={formik.touched.weight && formik.errors.weight}/>
            </CalculationItem>
            <CalculationItem>
              <FormInputToday
            label={t('dailyNormaModal.time')}
                value={formik.values.activityTime}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                onFocus ={(e)=> e.target.value =""}
            type="number"
            name="activityTime"
                min="0"
                step="0.1"
            error={formik.touched.activityTime && formik.errors.activityTime}/>
            </CalculationItem>
            <CalculationResult>
              <p>{t('dailyNormaModal.perDay')}</p>
              <span>{parseFloat(selectedDailyVolume).toFixed(1)} L</span>
            </CalculationResult>
          </div>
          <div>
            <ModalSubtitle>
              {t('dailyNormaModal.willDrink')}
            </ModalSubtitle>
            <FormInputToday
            value={formik.values.dailyWaterGoal}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            onFocus ={(e)=> e.target.value =""}
            type="number"
            name="dailyWaterGoal"
            min="0"
            step="0.1"
            error={formik.touched.dailyWaterGoal && formik.errors.dailyWaterGoal} />
          </div>
          <ModalBtn disabled={isLoading} type="submit">{isLoading? <LoaderWrap><Loader/></LoaderWrap>: t('dailyNormaModal.buttonSave')}</ModalBtn>
        </Form>
      </NormaModal>
    </ModalOverlay>
  );
};
