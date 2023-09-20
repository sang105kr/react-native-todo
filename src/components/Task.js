import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { images } from '../Images';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
  text-decoration-line: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
`;

const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <Container>
      <IconButton
        type={task.completed ? images.completed : images.uncompleted}
        id={task.id}
        onPressOut={toggleTask}
      />
      <Contents completed={task.completed}>{task.text}</Contents>
      {task.completed || <IconButton type={images.update} />}
      <IconButton type={images.delete} id={task.id} onPressOut={deleteTask} />
    </Container>
  );
};

Task.proptypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

export default Task;
