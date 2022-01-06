import React from 'react';

import CounterStore from './counterStore';
import keyStore from './keyStore';
import UIStore from './uiStore';
import Location from './location';
import SchoolName from './SchoolName';
import IdProduct from './IdProduct';
import IdStudent from './IdStudent';
import StudentData from './studentData';
import TeacherData from './teacherData';
import ChatBoxMainId from './chatBoxMainId';


export const stores = {
  counter: CounterStore,
  ui: UIStore,
  keyApi: keyStore,
  location: Location,
  schoolName: SchoolName,
  productChoose: IdProduct,
  studentChoose: IdStudent,
  StudentData: StudentData,
  TeacherData: TeacherData,
  chatBoxMainId: ChatBoxMainId,
};

const storeContext = React.createContext(stores);

export const withStoresProvider = (C: React.FC) => (props: any) => {
  return (
    <storeContext.Provider value={stores}>
      <C {...props} />
    </storeContext.Provider>
  );
};

export const useStores = () => React.useContext(storeContext);

export const hydrateStores = async () => {
  for (const key in stores) {
    if (Object.prototype.hasOwnProperty.call(stores, key)) {
      const s = stores[key];

      if (s.hydrate) {
        await s.hydrate();
      }
    }
  }
};
