// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import BorderBox from './components/BorderBox';
import KeywordCard from './components/KeywordCard';
import TimeTable from './components/TimeTable';
import CategoryChipList from './components/CategoryChipList';
import Bookmark from './components/Bookmark';
import Graybox1 from './components/Graybox1';
import Graybox2 from './components/Graybox2';
import { starImageBase64, gifBase64, headerBase64 } from './assets/base64';

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


  const [keywordData, setKeywordData] = useState([]);

  useEffect(() => {
    const fetchHistory = () => {
      if (chrome && chrome.history) {
        chrome.history.search({ text: '', startTime: 0, maxResults: 10 }, (results) => {
          const processedData = results.slice(0, 5).map((item, index) => ({
            iconText: item.title ? item.title.charAt(0) : 'N',
            title: item.title || item.url,
            label: `Category: ${['Development', 'Lifestyle', 'Entertainment'][index % 3]}`,
            description: `Auto-generated summary for ${item.title || item.url}.`,
            category: index % 3
          }));
          setKeywordData(processedData);
        });
      }
    };

    fetchHistory();
  }, []);

  const containerStyle = {
    display: 'inline-flex',
    padding: '24px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '5px',
    border: '1px solid var(--Accessibility-Black-in-light-themes, #000)',
    background: 'var(--Notification-success-background-color, #DEFBE6)',
    boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.30)',
    width: '1505px',
    height: '899px',
    position: 'absolute',
    top: '283.76px',
    left: '56.5px',
    zIndex: 1
  };

  const bookmarksContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    position: 'absolute',
    top: '323.76px',
    left: '1610px',
    zIndex: 0
  };

  const innerContainerStyle = {
    width: '1457px',
    height: '824px',
    margin: '24px',
    gap: '16px',
    display: 'flex',
    justifyContent: 'space-between'
  };

  const column1Style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const column2Style = {
    flex: 1,
  };

  const keywordContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const titleStyle = {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '44px',
    letterSpacing: '0px',
    color: '#000'
  };
  const topVisitedContainerStyle = {
    display: 'flex',
    justifyContent: 'center',  // 가운데 정렬
    gap: '10px',               // 원들 사이 간격
    marginTop: '10px'          // 제목과 간격 조정
  };
  
  const circleImageStyle = {
    width: '50px',             // 원 크기
    height: '50px',
    borderRadius: '50%',       // 동그랗게 만들기
    objectFit: 'cover',        // 이미지가 원을 가득 채우도록 설정
    border: '2px solid #ccc'   // 테두리 추가 (선택 사항)
  };
  

  return (
    <div>
      <img src={headerBase64} alt="Header" />
      <div style={bookmarksContainerStyle}>
        <Bookmark isActive={true} label="MAIN" />
        <Bookmark isActive={false} label="ANALYSIS" />
        <Bookmark isActive={false} label="SAVED" />
        <Bookmark isActive={false} label="SETTING" />
      </div>
      <div style={containerStyle}>
        <div style={innerContainerStyle}>
          <div style={column1Style}>
            <BorderBox>
              <div style={titleStyle}>Focus</div>
              <Graybox1 title="Peak Duration" subtitle="0'32''" />
              <Graybox2 title="Level" imageSrc={starImageBase64} altText="level" overlayText="5" />
            </BorderBox>
            <BorderBox>
              <div style={titleStyle}>Top Visited</div>
              <div style={topVisitedContainerStyle}>
                <img src={starImageBase64} alt="Visited 1" style={circleImageStyle} />
                <img src={starImageBase64} alt="Visited 2" style={circleImageStyle} />
                <img src={starImageBase64}s alt="Visited 3" style={circleImageStyle} />
              </div>
            </BorderBox>
            <img src={gifBase64} alt="Animation" style={{
              width: '100%', height: 'auto',
              borderRadius: '5px',
              border: '1px solid var(--Accessibility-Black-in-light-themes, #000)',
              background: 'var(--Background-ui-background, #FFF)'}} />
          </div>

          <div style={column2Style}>
            <BorderBox>
              <div style={
                {
                  fontFamily: 'IBM Plex Sans',
                  fontWeight: 600,
                  fontSize: '36px',
                  lineHeight: '44px',
                  letterSpacing: '0px',
                  color: '#000',
                  marginBottom: '10px'
                }
              }>
                Today's Picks
              </div>
              <div style={keywordContainerStyle}>
                {keywordData.map((item, index) => (
                  <KeywordCard
                    key={index}
                    iconText={item.iconText}
                    title={item.title}
                    label={item.label}
                    description={item.description}
                  />
                ))}
              </div>
            </BorderBox>
          </div>

          <div style={column2Style}>
            <BorderBox>
              <div style={titleStyle}>Time Table</div>
              <CategoryChipList />
              <TimeTable rows={6} columns={6} data={sampleData} style={{maxHeight:'100%', overflow: 'auto'}} />
            </BorderBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
