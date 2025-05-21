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
                      Developed and launched responsive, high-performance websites to improve user experience across all devices.
                      Integrated REST APIs, enhancing data flow and feature efficiency, which led to a 60% reduction in load time and improved user experience.
                    </p>

                    <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>
                      Successfully Delivered 5+ client projects (e-commerce, business, and WordPress), all completed on time with over 90% client satisfaction .
                    </p>

                    <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>
                      Used Git for version control, reducing merge conflicts by 90% and maintaining high code quality standards.
                      Collaborating with team members, and clients, to gather requirements and deliver high-quality projects on time.
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
