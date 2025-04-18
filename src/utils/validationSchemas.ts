// src/utils/validationSchemas.ts
import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const registerSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Too short'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Must be at least 8 characters')
    .matches(/[a-z]/, 'Needs lowercase letter')
    .matches(/[A-Z]/, 'Needs uppercase letter')
    .matches(/[0-9]/, 'Needs number'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});