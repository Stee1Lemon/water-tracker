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
    .max(15, 'The amount of water should be no more than 15 liters')
    .test(
      "maxDigitsAfterDecimal",
      "The amount of water must have 1 digits after decimal or less",
      (number) => Number.isInteger(number * (10 ** 1))
    ),
});

export const AddWaterSchema = Yup.object({
  portionOfWater: Yup.number()
    .required('Amount water is required')
    .min(0, 'Amount water must be a positive number')
    .max(5000, 'The amount of water should be no more than 5000 milliliters')
    .test(
      "maxDigitsAfterDecimal",
      "The amount of water must be an integer",
      (number) => Number.isInteger(number * (10 ** 0))
    ),
});