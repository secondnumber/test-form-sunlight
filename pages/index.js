import { MainLayout } from '../layout/MainLayout';
import NameControls from '../components/NameControls/NameControls';
import {useEffect, useState} from 'react';
import Info from '../components/Info/Info';
import styles from './Index.module.css';
import FormComponent from '../components/Form/FormComponent';
import {GetPersonFromLS} from "../utils/localStorage";

export default function Index() {
  const [currentData, setCurrentData] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const person = GetPersonFromLS()[0]
    setCurrentData(person)
  }, [])

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
