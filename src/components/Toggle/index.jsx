import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  width: 80px;
  height: 30px;
  padding: 3px;
  background-color: ${({ isOn }) => (isOn ? '#4CAF50' : '#ddd')};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${({ isOn }) => (isOn ? 'flex-start' : 'flex-end')};
  padding: 0 5px;
`;

const Ball = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ isOn }) => (isOn ? 'calc(100% - 15px)' : '15px')};
  transform: translate(-50%, -50%);
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 0.3s ease;
`;

const Text = styled.div`
  color: ${({ isOn }) => (isOn ? '#ffffff' : '#000000')};
  font-size: 12px;
`;

const Toggle = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(); // 토글이 발생하면 부모 컴포넌트에서 전달받은 onToggle 함수 호출
    }
  };

  return (
    <ToggleContainer onClick={handleToggle} isOn={isOn}>
      <Text isOn={isOn}>{isOn ? '기본' : '이로치'}</Text>
      <Ball isOn={isOn} />
    </ToggleContainer>
  );
};

export default Toggle;