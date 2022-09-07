import React, { useState } from 'react';
import ListInput from "./components/List/ListInput"
import List from "./components/List/List"

function App() {
  const [itemList, setItemList] = useState([])
  const fetchData = (data) => {
    if (itemList.length === 0) {
      setItemList([data])
    } else {
      setItemList(() => {return [data, ...itemList]})
    }
  }
  
  return (
    <div>
      <ListInput getData={fetchData}></ListInput>
      <List itemsInList={itemList}></List>
    </div>
  );
}

export default App;
