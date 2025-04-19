import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function NoOppositeContent() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-12">
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div
                    className="p-lg-5 p-md-4 p-3 mt-3"
                    style={{
                      position: 'relative',
                      background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
                      borderRadius: '15px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                      color: '#eee',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                    }}
                  >
                    <h5 style={{ color: '#c9f31d', marginBottom: '10px' }}>
                      Bachelor of Engineering (CSE)
                    </h5>
                    <p style={{ lineHeight: '1.6' }}>
                      CK College of Engineering and Technology, Cuddalore.
                    </p>
                    <span
                      className="year position-absolute m-0"
                      
                    >
                      | 2018 - 2022 |
                    </span>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineDot />
            </Timeline>
          </div>
          <div className="col-lg-6 col-sm-12 col-12">
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div
                    className="p-lg-5 p-md-4 p-3 mt-3"
                    style={{
                      position: 'relative',
                      background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
                      borderRadius: '15px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                      color: '#eee',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                    }}
                  >
                    <h4 style={{ color: '#c9f31d', marginBottom: '10px' }}>
                      Municipal Hr.Sec.School
                    </h4>
                    <p style={{ lineHeight: '1.6' }}>
                      Completed Higher Secondary — Cuddalore
                    </p>
                    <span
                      className="year position-absolute m-0"
                      
                    >
                      | 2017 - 2018 |
                    </span>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineDot />
            </Timeline>
          </div>
        </div>
      </div>
    </>
  );
}
