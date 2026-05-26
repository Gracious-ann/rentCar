'use client';
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './CarForm.module.css';
import Button from '../Button/Button';
import toast from 'react-hot-toast';
import { SendFormData } from '@/lib/api';

interface SendFormValues {
  name: string;
  email: string;
  comment: string;
}

const initialValues: SendFormValues = {
  name: '',
  email: '',
  comment: '',
};
export default function CarForm({ id }: { id: string }) {
  const fieldId = useId();

  const SendFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(30, 'Name is too long')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    comment: Yup.string().max(200, 'Comment is too long'),
  });

  const handleSubmit = async (
    id: string,
    values: SendFormValues,
    actions: FormikHelpers<SendFormValues>,
  ) => {
    try {
      await SendFormData(id, {
        name: values.name,
        email: values.email,
        comment: values.comment || 'No comment',
      });

      actions.resetForm();

      toast.success(
        'Booking request for Buick Enclave accepted. We will contact you at john@example.com 🚗',
      );
    } catch (error) {
      toast.error('Something went wrong 😢');
      actions.resetForm();
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book your car now</h2>

      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(id, values, actions)}
        validationSchema={SendFormSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type='text'
            name='name'
            id={`${fieldId}-name`}
            placeholder='Name*'
          />
          <ErrorMessage
            name='name'
            component='span'
            className={css.error}
          />

          <Field
            className={css.input}
            type='email'
            name='email'
            id={`${fieldId}-email`}
            placeholder='Email*'
          />
          <ErrorMessage
            name='email'
            component='span'
            className={css.error}
          />
          <Field
            className={css.textarea}
            as='textarea'
            name='comment'
            placeholder='Comment'
          />

          <Button type='submit'>Send</Button>
        </Form>
      </Formik>
    </div>
  );
}
