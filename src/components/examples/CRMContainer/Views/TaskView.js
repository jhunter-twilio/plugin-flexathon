import React, { Component } from "react";
import { withTaskContext } from "@twilio/flex-ui";

const wrapperStyle = {
  position: "absolute",
  margin: "0",
  padding: "0",
  border: "0px",
  overflow: "hidden",
  height: "100%",
  width: "100%",
};

const frameStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  border: "0px"
};

class TaskView extends Component {

  componentWillUnmount() {
    console.log("IFrame unmounted");
  }

  componentDidMount() {
    console.log("IFrame mounted");
  }

  render() {
    let { task, thisTask } = this.props;

    let show = task && task.taskSid === thisTask.taskSid ? "visible" : "hidden";

    // Made up this task attribute to demonstrate
    if (true) {
      return (
        <div style={{ ...wrapperStyle, visibility: show }}>
          <iframe title={thisTask.taskSid} style={frameStyle} src={"http://www.bing.com"} />
        </div>
      )
    }
    else {
      //return <div style={{ ...wrapperStyle, visibility: show }}>Test Task</div>
      return (
        <div style={{ ...wrapperStyle, visibility: show }}>
          <div >Show some other form</div>
        </div>

      )
    }
  }
}

export default withTaskContext(TaskView);
