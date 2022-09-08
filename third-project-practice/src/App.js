import React, { useState } from 'react';
import ListInput from './components/List/ListInput';
import List from './components/List/List';
import Modal from './components/UI/Modal';

function App() {
  const [modalTrigger, setModalTrigger] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [itemList, setItemList] = useState([]);
  const fetchData = (data) => {
    if (itemList.length === 0) {
      setItemList([data]);
    } else {
      setItemList(() => {
        return [data, ...itemList];
      });
    }
  };

  

  const errorHandler = (error) => {
    if (error==="username" || error === "age") {
      setModalTrigger(true)
      setErrorMessage("Please enter a valid name and age (non-empty values).")
    } else {
      setModalTrigger(true)
      setErrorMessage("Please enter a valid age(>0).")
    }
  }

  return (
    <div>
      <Modal modalSetting={setModalTrigger} errorText={errorMessage} isVisible={modalTrigger}></Modal>
      <ListInput getError={errorHandler} getData={fetchData}></ListInput>
      <List itemsInList={itemList}></List>
    </div>
  );
}

export default App;
