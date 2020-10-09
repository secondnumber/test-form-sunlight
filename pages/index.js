import { MainLayout } from '../layout/MainLayout';
import NameControls from '../components/NameControls/NameControls';
import { useState } from 'react';
import Info from '../components/Info/Info';
import Form from '../components/Form/Form';
import styles from './Index.module.css';
import SubmitModal from '../components/SubmitModal/SubmitModal';

export default function Index() {
  const [currentData, setCurrentData] = useState({
    name: 'Иванова Анна Михайловна',
    email: 'ivanova@mail.ru',
    phone: null
  });
  const [editMode, setEditMode] = useState(false);
  const [submitMode, setSubmitMode] = useState(true);
  const [successMode, setSuccessMode] = useState(false);

  const handleEditMode = (bool) => {
    setEditMode(bool);
  };

  return (
    <div className={styles.wrapper}>
      <MainLayout name={currentData.name}>
        <NameControls name={currentData.name} editMode={editMode} handleEditMode={handleEditMode} />
        {!editMode && <Info email={currentData.email} phone={currentData.phone} />}
        {editMode && (
          <Form name={currentData.name} email={currentData.email} phone={currentData.phone} />
        )}
        {submitMode && <SubmitModal />}
      </MainLayout>
    </div>
  );
}
