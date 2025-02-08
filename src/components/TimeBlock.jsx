// src/components/TimeBlock.jsx
import React from 'react';

/**
 * TimeBlock 컴포넌트
 * 작은 블록 영역 안에 시간을 표시하거나 다른 내용을 담을 수 있습니다.
 */
const TimeBlock = ({ children }) => {
  const containerStyle = {
    display: 'flex',
    width: '40px',
    height: '24px',
    padding: '13px 17px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    border: '1px solid var(--Background-ui-background, #FFF)',
    background: 'var(--Tag-Green-hover, #74E792)',
  };

  return <div style={containerStyle}>{children}</div>;
};

export default TimeBlock;