// src/App.jsx
import React from 'react';
import './App.css';
import BorderBox from './components/BorderBox';
import KeywordCard from './components/KeywordCard';
import TimeBlock from './components/TimeBlock';
import TimeTable from './components/TimeTable';
import CategoryChip from './components/CategoryChip';
import CategoryChipList from './components/CategoryChipList';
import Bookmark from './components/Bookmark';

const App = () => {
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
    height: '872px',
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
    left: '1491.5px',
    zIndex: 2
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

  const columnStyle = {
    flex: 1,
    marginRight: '24px'
  };

  const column2Style = {
    flex: 1,
  };

  const keywordContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', // Adds 8px space between each child
  };

  const titleStyle = {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '44px',
    letterSpacing: '0px',
    color: '#000'
  };
  

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

  const starImageUrl = chrome.runtime.getURL('images/Star.png');
  

  return (
    <div>
        <div style={bookmarksContainerStyle}>
          <Bookmark isActive={true} label="Bookmark 1" />
          <Bookmark isActive={false} label="Bookmark 2" />
          <Bookmark isActive={false} label="Bookmark 3" />
          <Bookmark isActive={false} label="Bookmark 4" />
      </div>
      <div style={containerStyle}>
        <div style={innerContainerStyle}>
          <div style={column1Style}>
                <BorderBox>
                  <div style={titleStyle}>Focus</div>
                  <img src={starImageUrl} alt="Stars" style={{ width: '100%', height: 'auto' }} />
                </BorderBox>
                <BorderBox>
                  <div style={titleStyle}>Top Visited</div>

                </BorderBox>
                <BorderBox>
                  <div style={titleStyle}>Video</div>
                  <video width="100%" controls>
                    <source src="videos/temu_ad.mov" type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </BorderBox>
            </div>
          <div style={column2Style}>
            <BorderBox>
              <div style={titleStyle}>Today's Picks</div>
              <div style={keywordContainerStyle}>
                <KeywordCard
                  iconText="L"
                  title="Travel Spot for Spring Break"
                  label="02:12:32"
                  description="Rose Point Park, located about 45 miles from Pittsburgh, offers RV-friendly campsites and family-friendly events, making it an ideal spring break destination."
                />
                <KeywordCard
                  iconText="D"
                  title="AI in Drug Discovery"
                  label="02:12:32"
                  description="AI is revolutionizing drug discovery, accelerating the process of identifying new treatments with precision and efficiency."
                />
                <KeywordCard
                  iconText="E"
                  title="Rose APT"
                  label="02:12:32"
                  description="Rosé from and Bruno Mars teamed up to release the hit single ‘APT.’, blending their unique styles into a captivating collaboration."
                />
                <KeywordCard
                  iconText="D"
                  title="Central Dogma"
                  label="02:12:32"
                  description="The central dogma of molecular biology describes the flow of genetic information from DNA to RNA to protein."
                />
                <KeywordCard
                  iconText="E"
                  title="Squid Game 2"
                  label="02:12:32"
                  description="In Episode 4, contestants face the ‘Six-Legged Pentathlon,’ a series of mini-games requiring intense teamwork and strategy"
                />
              </div>
            </BorderBox>
          </div>
          <div style={{ ...columnStyle, marginRight: '0' }}>
            <BorderBox>
              <div style={titleStyle}>Time Table</div>
              {/* <CategoryChip text={"Lifestyle"} bgColor={'var(--Tag-Green-background, #A7F0BA)'}/> */}
              <CategoryChipList/>
              <TimeTable rows={6} columns={6} data={sampleData} />
            </BorderBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;