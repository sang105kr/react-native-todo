// 메모리만 사용하여 crud
import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';

import Task from './components/Task';

const Container = styled.SafeAreaView.attrs(null)`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

const App = () => {
  // const tmp = {
  //   1: { id: '1', text: 'a', completed: false },
  //   2: { id: '2', text: 'b', completed: true },
  //   3: { id: '3', text: 'c', completed: false },
  // };

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({});

  // 입력 항목이 수정될때마다 newTask변수에 수정된 내용을 저장
  const h_onChangeText = text => setNewTask(text);

  // 할일 항목 추가
  const h_onSubmitEditing = () => {
    // alert(newTask);
    const key = Date.now().toString(); //중복되지 않는 유일한 임의값
    const newTaskObject = {
      [key]: { id: key, text: newTask, completed: false },
    };
    setNewTask(''); //입력항목 클리어
    setTasks({ ...tasks, ...newTaskObject }); //기존 tasks에 새로 입력된 항목 추가
  };

  const { width } = Dimensions.get('window');

  // 할일 항목 삭제
  const h_deleteTask = id => {
    const currentTasks = { ...tasks };
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  // 할일 항목 완료/미완료
  const h_toggleTask = id => {
    const currentTasks = { ...tasks };
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    // currentTasks[id].completed = !currentTasks[id].completed;

    setTasks(currentTasks);
  };

  // 할일 항목 수정
  const h_updateTask = task => {
    const currentTasks = { ...tasks };
    currentTasks[task.id] = task;
    setTasks(currentTasks);
  };

  // 할일 항목 등록취소
  const h_onBlur = () => {
    setNewTask('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task "
          value={newTask}
          onChangeText={h_onChangeText}
          onSubmitEditing={h_onSubmitEditing} //추가
          onBlur={h_onBlur} // 항목추가 입력필드가 포커스 벗어나면 호출
        />
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map(task => (
              <Task
                key={task.id}
                // text={task.text}
                // id={task.id}
                task={task}
                deleteTask={h_deleteTask} //삭제
                toggleTask={h_toggleTask} //완료/미완료
                updateTask={h_updateTask} //수정
              />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
};

export default App;
