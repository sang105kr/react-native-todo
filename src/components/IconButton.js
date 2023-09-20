import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../Images';

const Icon = styled.Image`
  tint-color: ${({ theme }) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;
const IconButton = ({ type, id, onPressOut }) => {
  const h_onPressOut = () => {
    onPressOut(id);
  };

  return (
    <Pressable onPressOut={h_onPressOut}>
      <Icon source={type} />
    </Pressable>
  );
};

IconButton.defaultProps = {
  onPressOut: () => {},
};

IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func,
  id: PropTypes.string,
};

export default IconButton;
