import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import "./CourseTree.css";
import api from "../api";

class RenderPageContent extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <h3>Text: {this.props.content}</h3>;
  }
}

class CourseTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      courses: [],
    };
  }

  componentDidMount() {
    api.fetchCourses().then((result) => {
      this.setState({ courses: result });
      console.log(result);
    });
  }

  handlePageClick(learningMaterial) {
    this.setState({content: learningMaterial});
  }

  render() {
    let courses = null;

    api.fetchCourses().then((result) => {
      courses = result;
    });

    return (
      <div className="course-tree">
        <Typography variant="h3">Courses</Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {this.state.courses.map((course) => (
            <TreeItem nodeId={course.id} key={course.id} label={course.title}>
              {course.modules.map((module) => (
                <TreeItem
                  nodeId={module.id}
                  key={module.id}
                  label={module.title}
                >
                  {module.pages.map((page) => (
                    <TreeItem
                      label={page.title}
                      onClick={() =>
                        this.handlePageClick(page.learningMaterial)
                      }
                    />
                  ))}
                </TreeItem>
              ))}
            </TreeItem>
          ))}
        </TreeView>
        <RenderPageContent content={this.state.content}/>
      </div>
    );
  }
}

export default CourseTree;
