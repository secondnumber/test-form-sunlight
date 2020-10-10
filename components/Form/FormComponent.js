import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import { useForm, Form } from './useForm';
import Input from './Input';
import Button from './Button';
import React, { useState } from 'react';
import SubmitModal from '../SubmitModal/SubmitModal';
import SuccessModal from '../SuccessModal/SuccessModal';
import { dataAPI } from '../../utils/api';
import {InsertPerson} from "./workWithLocalStorage";
import {InsertPersonFromLS} from "../../utils/localStorage";

const initialValues = {
  id: 1,
  fullName: 'Иванова Анна Михайловна',
  email: 'ivanova@mail.ru',
  phone: null
};

export default function FormComponent() {
  const [submitMode, setSubmitMode] = useState(false);
  const [successMode, setSuccessMode] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName.length > 6 ? '' : 'Вы неверно указали имя';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? '' : 'С электропочтой что-то не так';
    if ('phone' in fieldValues)
      temp.phone =
        /$^|\d{10}/.test(fieldValues.phone) || fieldValues.phone === ''
          ? ''
          : 'С номером телефона что-то не так';
    setErrors({
      ...temp
    });

    if (fieldValues === values) return Object.values(temp).every((err) => err === '');
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialValues,
    true,
    validate
  );

  const handleOpenSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitMode(true);
      alert('test');
    }
  };

  const handleClose = () => {
    setSubmitMode(false);
  };

  const handleCancel = () => {
    setSubmitMode(false);
  };

  const handleSubmit = () => {
    setSubmitMode(false);
    setSuccessMode(true);
    InsertPersonFromLS(values);
  };

  const handleEnd = () => {
    setSuccessMode(false);
  };

  return (
    <>
      <Form onSubmit={handleOpenSubmit}>
        <Grid container>
          <Grid item xs={4}>
            <div>
              <AssignmentIndIcon />
              <Input
                name="fullName"
                label="Фамилия и имя"
                placeholder={values.fullName ? values.fullName : 'Укажите ваши фамилию и имя'}
                value={values.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
              />
              <Divider orientation="vertical" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <AlternateEmailIcon />
              <Input
                name="email"
                label="E-mail"
                placeholder={values.email ? values.email : 'Укажите электропочту'}
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <Divider orientation="vertical" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <PhoneIcon />
              <Input
                name="phone"
                label="Номер телефона"
                placeholder={values.phone ? values.phone : 'Укажите номер телефона'}
                value={values.phone}
                onChange={handleInputChange}
                error={errors.phone}
              />
            </div>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" text="Сохранить изменения" width={212} />
            </Grid>
          </Grid>
        </Grid>
        <SubmitModal
          open={submitMode}
          values={values}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
        <SuccessModal open={successMode} handleEnd={handleEnd} />
      </Form>
    </>
  );
}
