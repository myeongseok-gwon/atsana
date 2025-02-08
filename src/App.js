// src/App.js
import React, { useState, useEffect } from 'react';
// Carbon의 Grid 시스템 컴포넌트 임포트
import { Grid, Row, Column } from '@carbon/react';

/**
 * Clock 컴포넌트: 현재 시간을 표시하며 매 초 업데이트합니다.
 */
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 1초마다 현재 시간을 업데이트
    const timer = setInterval(() => setTime(new Date()), 1000);
    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      {time.toLocaleTimeString()}  {/* 지역화된 시각 문자열 출력 */}
    </div>
  );
};

/**
 * App 컴포넌트: 전체 레이아웃(양 옆의 사이드바와 중앙의 메인 콘텐츠)을 구성합니다.
 */
const App = () => {
  return (
    <div className="newtab-container">
      <Grid fullWidth>
        <Row>
          {/* 왼쪽 사이드바 */}
          <Column sm={2} md={4} lg={4} className="sidebar left-sidebar">
            <p>왼쪽 사이드바</p>
          </Column>

          {/* 중앙 메인 콘텐츠 (시계 포함) */}
          <Column sm={4} md={8} lg={8} className="main-content">
            <Clock />
          </Column>

          {/* 오른쪽 사이드바 */}
          <Column sm={2} md={4} lg={4} className="sidebar right-sidebar">
            <p>오른쪽 사이드바</p>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default App;