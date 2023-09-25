import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPressable = styled.Pressable`
  width: ${({ width }) => width - 40}px;
  background-color: yellow;
  padding: 5px 0;
  align-items: center;
  border-radius: 5px;
`;
const StyledText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const TextButton = ({ btnName, onPressOut }) => {
  const { width } = Dimensions.get('window');

  return (
    <StyledPressable width={width} onPressOut={onPressOut}>
      <StyledText>{btnName}</StyledText>
    </StyledPressable>
  );
};

TextButton.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default TextButton;
