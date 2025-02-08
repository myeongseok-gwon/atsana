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
  const starImageBase64 = "data:image/png;base64,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";
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
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        <div style={column1Style}>
              <BorderBox>
                <div style={titleStyle}>Focus</div>
                {/* <img src={starImageUrl} alt="Stars" style={{ width: '100%', height: 'auto' }} />
               */}
               {/* <img 
                  src={starImageBase64} 
                  alt="Stars" 
                  style={{ width: '35%', height: 'auto' }} 
                /> */}
                 <div style={{ position: 'relative', display: 'inline-block' }}>
                    
                    <div style={{
                      position: 'absolute',
                      top: '48%',
                      left: '40%',
                      transform: 'translate(-50%, -50%)',
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'IBM Plex Serif',
                      fontSize: '23px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '40px',
                      zIndex: 1
                    }}>
                      17
                    </div>
                    <img 
                      src={starImageBase64} 
                      alt="Stars" 
                      style={{ width: '80%', height: 'auto' }} 
                    />
                  </div>
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
  );
};

export default App;