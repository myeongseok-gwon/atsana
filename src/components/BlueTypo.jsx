// src/components/BlueTypo.jsx
import React from 'react';

/**
 * BlueTypo 컴포넌트
 * - 지정된 스타일을 적용한 파란색 텍스트를 렌더링합니다.
 *
 * Props:
 *   - children: 렌더링할 텍스트 또는 요소.
 */
const BlueTypo = ({ children }) => {
  const style = {
    color: 'var(--Hover-hover-primary-text, #0043CE)',
    textAlign: 'center',
    fontFamily: 'Ultra',
    fontSize: '72px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '70px', // 97.222%
  };

  return <div style={style}>{children}</div>;
};

export default BlueTypo;