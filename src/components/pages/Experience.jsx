import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Experience() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
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
                      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                      borderRadius: '15px',
                      color: '#eee',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                    }}
                  >
                    <h2 style={{ fontSize: '1.8rem', color: '#c9f31d', marginBottom: '15px' }}>
                      Junior Software Engineer <span style={{ color: '#ff014f' }}>— HEPL</span> | Cuddalore
                    </h2>

                    <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>
                      Developed responsive websites using HTML, CSS, Bootstrap, JavaScript, React.js, WordPress, and PHP — optimized for mobile and desktop platforms to enhance user experience.
                    </p>

                    <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>
                      Integrated RESTful APIs using React, improved data flow, and maintained code integrity with Git version control.
                    </p>

                    <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>
                      Delivered over <strong>5+ projects</strong> — including e-commerce platforms, business websites, and WordPress solutions.
                    </p>  

                    <p style={{ lineHeight: '1.7' }}>
                      Collaborated with teams and clients to gather requirements and ensure on-time, high-quality delivery.
                    </p>

                    <span
                      className="year position-absolute m-0"
                    >
                      2023 — 2025
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
