import React, { useEffect, useState, useCallback } from 'react';
import useServerFetchHook from './hooks/server-fetch-hook';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const connection = {
    url: 'https://testing-react-96b3e-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
  };
  const fetchServerData = useCallback((datastream) => {
    const loadedTasks = [];
    for (const taskKey in datastream) {
      loadedTasks.push({ id: taskKey, text: datastream[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useServerFetchHook(connection, fetchServerData);

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
