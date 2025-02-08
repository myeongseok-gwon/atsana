// src/App.js
import React, { useState, useEffect } from 'react';
// Carbon Design System의 Grid 컴포넌트 임포트
import { Grid, Row, Column } from '@carbon/react';

/**
 * Clock 컴포넌트: 현재 시각을 1초마다 업데이트하며 표시합니다.
 */
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 1초마다 현재 시간을 업데이트하는 타이머 생성
    const timer = setInterval(() => setTime(new Date()), 1000);
    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      {time.toLocaleTimeString()} {/* 지역화된 시각 문자열 출력 */}
    </div>
  );
};

/**
 * HistoryList 컴포넌트: 백그라운드 서비스 워커를 통해 방문 기록 데이터를 받아와 리스트로 렌더링합니다.
 */
const HistoryList = () => {
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    // 백그라운드에 'GET_HISTORY' 메시지를 보내 방문 기록 데이터를 요청합니다.
    chrome.runtime.sendMessage({ type: 'GET_HISTORY' }, (response) => {
      if (response && response.history) {
        setHistoryItems(response.history);
      }
    });
  }, []);

  return (
    <div className="history-list">
      <h2>최근 방문 기록</h2>
      <ul>
        {historyItems.map((item) => (
          // history API 결과의 고유 id를 key로 사용합니다.
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title || item.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * App 컴포넌트: 전체 레이아웃을 구성합니다.
 * - 왼쪽 사이드바: 간단한 텍스트
 * - 중앙 메인 콘텐츠: 현재 시계를 표시
 * - 오른쪽 사이드바: 방문 기록 리스트 표시
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

          {/* 오른쪽 사이드바: 백그라운드에서 가져온 방문 기록 리스트 표시 */}
          <Column sm={2} md={4} lg={4} className="sidebar right-sidebar">
            <HistoryList />
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default App;