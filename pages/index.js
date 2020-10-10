import { MainLayout } from '../layout/MainLayout';
import NameControls from '../components/NameControls/NameControls';
import { useState } from 'react';
import Info from '../components/Info/Info';
import styles from './Index.module.css';
import SubmitModal from '../components/SubmitModal/SubmitModal';
import FormComponent from '../components/Form/FormComponent';
import {GetPerson} from "../components/Form/workWithLocalStorage";
import {GetPersonFromLS} from "../utils/localStorage";

export default function Index() {
  const person = GetPersonFromLS()[0];
  const [currentData, setCurrentData] = useState(person);
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = (bool) => {
    setEditMode(bool);
  };

  return (
    <div className={styles.wrapper}>
      <MainLayout name={currentData.fullName}>
        <NameControls
          name={currentData.fullName}
          editMode={editMode}
          handleEditMode={handleEditMode}
        />
        {!editMode && <Info email={currentData.email} phone={currentData.phone} />}
        {editMode && <FormComponent />}
      </MainLayout>
    </div>
  );
}
