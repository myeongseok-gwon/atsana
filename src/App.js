// src/App.js
import React from 'react';
import { Grid, Row, Column } from '@carbon/react';
import HistoryList from './components/HistoryList';

/* ────────── 시계(Clock) 컴포넌트 ────────── */
const Clock = () => {
  const [time, setTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="clock" style={{ fontSize: '2rem', textAlign: 'center' }}>
      {time.toLocaleTimeString()}
    </div>
  );
};

/* ────────── App 컴포넌트 ────────── */
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

          {/* 오른쪽 사이드바: 방문 기록 리스트 */}
          <Column sm={2} md={4} lg={4} className="sidebar right-sidebar">
            <HistoryList />
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default App;
