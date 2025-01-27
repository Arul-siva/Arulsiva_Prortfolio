import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Certificate() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-12" >
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
                  <div className="shadow-box p-lg-5 p-md-4 p-3 mt-3">
                    <h2>Heading</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing ello
                      cum molestiae ex culpa odio!
                    </p>
                    <p className="year position-absolute m-0">Date</p>
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
