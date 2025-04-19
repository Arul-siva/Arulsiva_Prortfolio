import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { motion } from 'framer-motion';
export default function Certificate() {
  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-12">
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 }
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
                    <h2 style={{ fontSize: '1.8rem', color: '#c9f31d', marginBottom: '15px' }}>
                      Fullstack Developer Certification
                    </h2>

                    <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>
                      Completed a comprehensive Fullstack Developer program at <strong>CKedge, Cuddalore</strong> under the mentorship of HEPL Company.
                    </p>

                    <span
                      className="year position-absolute m-0"
                    >
                      Cuddalore
                    </span>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}
