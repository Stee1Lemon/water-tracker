import ModalOverlay from 'components/ModalOverlay/ModalOverlay';
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
} from '../CommonStyles.styled';
import icons from '../../../assets/icons.svg';
import { selectAuthUser } from "../../../redux/auth/authSelectors";
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { validationWaterSchema } from "../validationWaterSchema"
import { useFormik } from 'formik';

import { FormInput } from "../reuse/input/FormInput"
import authApi from "../../../redux/auth/authOperations"
import { format } from 'date-fns';



export const DailyNormaModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const { gender } = useSelector(selectAuthUser);
  const [selectedDailyVolume, setSelectedDailyVolume] = useState(0);

  const calculateWaterVolume = useCallback((values) => {
    if (!values.weight || !values.activityTime) return;
    const weightFactor = values.gender === 'female' ? 0.03 : 0.04;
    const activityFactor = values.gender === 'female' ? 0.4 : 0.6;
    const result = values.weight * weightFactor + values.activityTime * activityFactor;
    setSelectedDailyVolume(result);
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const waterVolume = formik.values.dailyWaterGoal * 1000;
    
    if (waterVolume > 0 && waterVolume <= 15000) {
      dispatch(authApi.waterRateThunk({
        waterRate: waterVolume,
        date: format(new Date(), 'dd/MM/uuuu')
      }));
      console.log('Daily norma successfully updated');
      formik.resetForm();
      onClose();
    } else {
      console.log('The amount of water must be a positive');
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
        <ModalTitle>My daily norma</ModalTitle>
        <ModalCloseButton onClick={onClose}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </ModalCloseButton>
        <div>
          <CalculationScheme>
            <p>
              For girl: <span>V=(M*0,03) + (T*0,4)</span>
            </p>
            <p>
              For man: <span>V=(M*0,04) + (T*0,6)</span>
            </p>
          </CalculationScheme>
          <CalculationText>
            <span>*</span> V is the volume of the water norm in liters per day,
            M is your body weight, T is the time of active sports, or another
            type of activity commensurate in terms of loads (in the absence of
            these, you must set 0)
          </CalculationText>
        </div>
        <Form onSubmit={handleOnSubmit}>
          <div>
            <ModalSubtitle>Calculate your rate:</ModalSubtitle>
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
                <label htmlFor="gender-f">For girl</label>
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
                <label htmlFor="gender-m">For man</label>
              </RadioItem>
            </FormRadioItems>
            <CalculationItem>
               <FormInput
            label="Your weight in kilograms:"
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
              <FormInput
            label="The time of active participation in sports or other activities
                with a high physical. load in hours:"
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
              <p>The required amount of water in liters per day:</p>
              <span>{parseFloat(selectedDailyVolume).toFixed(1)} L</span>
            </CalculationResult>
          </div>
          <div>
            <ModalSubtitle>
              Write down how much water you will drink:
            </ModalSubtitle>
            <FormInput
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
          <ModalBtn type="submit">Save</ModalBtn>
        </Form>
      </NormaModal>
    </ModalOverlay>
  );
};
