import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import "./CourseTree.css";
import api from "../api";

// const useStyles = makeStyles({
//   root: {
//     //  If we wanna make changes to the looks of the tree (which we do, eventually)
//   },
// });

class CourseTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    api.fetchCourses().then((result) => {
      this.setState({ courses: result });
    });
  }

  render() {
    let courses = null;

    api.fetchCourses().then((result) => {
      courses = result;
    });

    // const classes = useStyles();

    return (
      <div className="course-tree">
        <Typography variant="h3">Courses</Typography>{" "}
        <TreeView
          // className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {this.state.courses.map((emp) => (
            <TreeItem nodeId={emp.id} key={emp.id} label={emp.title}>
              <TreeItem label="Week 1" />
              <TreeItem label="Week 2" />
              <TreeItem label="Week 3" />
            </TreeItem>
          ))}
          {/* The below TreeItems are for testing purposes */}
          <TreeItem nodeId="56" label="C#Summer2020">
            <TreeItem nodeId="57" label="Pre-studies">
              <TreeItem label="Week 1" />
              <TreeItem label="Week 2" />
              <TreeItem label="Week 3" />
              <TreeItem label="Week 4" />
              <TreeItem label="Week 5" />
              <TreeItem label="Week 6" />
            </TreeItem>
            <TreeItem nodeId="30" label="Java" />
            <TreeItem nodeId="40" label="HTML & CSS" />
            <TreeItem nodeId="50" label="JavaScript" />
          </TreeItem>
        </TreeView>
      </div>
    );
  }
}

export default CourseTree;
