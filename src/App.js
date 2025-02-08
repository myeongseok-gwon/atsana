// src/App.js
import React from 'react';
import { Grid, Row, Column } from '@carbon/react';
import HistoryList from './components/HistoryList';
import KeywordCard from './components/KeywordCard';
import TimeBlock from './components/TimeBlock';
import TimeTable from './components/TimeTable';

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
  const sampleData = [
    ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#74E792', '#74E792', '#74E792'], // Green
    ['#74E792', '#74E792', '#74E792', '#74E792', '#74E792', '#74E792'],
    ['#74E792', '#74E792', '#74E792', '#74E792', '#74E792', '#74E792'],
    ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'],
    ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#99DAFF', '#99DAFF', '#99DAFF'], // Cyan, Gray, Magenta
    ['#99DAFF', '#FFD6E8', '#FFD6E8', '#FFD6E8', '#FFD6E8', '#FFD6E8'], // Magenta
    ['#FFD6E8', '#FFD6E8', '#FFD6E8', '#FFD6E8', '#FFD6E8', '#FFD6E8'], // Cyan
    ['#FFD6E8', '#FFD6E8', '#FFD6E8', '#FFD6E8', '#FFD6E8', '#FFD6E8'],
    ['#FFD6E8', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'],
    ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'],
    ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'],
    ['#E0E0E0', '#E0E0E0', '#99DAFF', '#99DAFF', '#99DAFF', '#99DAFF'],
    ['#74E792', '#99DAFF', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'],
    ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'],
    ['#E0E0E0', '#99DAFF', '#99DAFF', '#FFD6E8', '#FFD6E8', '#FFD6E8'],
    ['#99DAFF', '#FFD6E8', '#FFD6E8', '#FFD6E8', '#99DAFF', '#FFD6E8'],
    ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'],
    ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#99DAFF', '#99DAFF', '#99DAFF'],
    ['#99DAFF', '#99DAFF', '#99DAFF', '#99DAFF', '#99DAFF', '#E0E0E0'],
  ];

  return (
    <div className="newtab-container">
      <Grid fullWidth>
        <Row>
          {/* 왼쪽 사이드바 */}
          <Column sm={2} md={4} lg={4} className="sidebar left-sidebar">
            <KeywordCard
              iconText="L"
              title="AI in Drug Discovery"
              label="02:12:32"
              description="Transform your browser into a beautifully designed tab that helps you feel calm, keep focus, and stay energized. "
            />

            <TimeTable rows={6} columns={6} data={sampleData} />
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
