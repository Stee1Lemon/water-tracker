import * as Yup from 'yup';

export const validationWaterSchema = Yup.object({
  gender: Yup.string().required('Gender is required'),
  weight: Yup.number()
    .required('Weight is required')
    .min(0, 'Weight must be a positive number'),
  activityTime: Yup.number()
    .required('Activity time is required')
    .min(0, 'Activity time must be a positive number'),
  dailyWaterGoal: Yup.number()
    .required('Amount water is required')
    .min(0, 'Amount water must be a positive number')
    .max(15000, 'The amount of water should be no more than 15000 liters'),
});