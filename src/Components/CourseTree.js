import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import "./CourseTree.css"

const useStyles = makeStyles({
  root: {
    //  If we wanna make changes to the looks of the tree (which we do, eventually)
  },
});

function CourseTree() {
  const classes = useStyles();

  return (
    <div className="course-tree">
      <Typography variant="h3">Courses</Typography>{" "}
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="C#Summer2020">
          <TreeItem nodeId="2" label="Pre-studies">
            <TreeItem label="Week 1" />
            <TreeItem label="Week 2" />
            <TreeItem label="Week 3" />
            <TreeItem label="Week 4" />
            <TreeItem label="Week 5" />
            <TreeItem label="Week 6" />
          </TreeItem>
          <TreeItem nodeId="3" label="Java" />
          <TreeItem nodeId="4" label="HTML & CSS" />
          <TreeItem nodeId="5" label="JavaScript" />
        </TreeItem>
        <TreeItem nodeId="6" label="JavaFall2020">
          <TreeItem nodeId="7" label="Pre-studies">
            <TreeItem label="Week 1" />
            <TreeItem label="Week 2" />
            <TreeItem label="Week 3" />
            <TreeItem label="Week 4" />
            <TreeItem label="Week 5" />
            <TreeItem label="Week 6" />
          </TreeItem>
          <TreeItem nodeId="8" label="C#" />
          <TreeItem nodeId="9" label="HTML & CSS" />
          <TreeItem nodeId="10" label="JavaScript" />
        </TreeItem>
        <TreeItem nodeId="11" label="JavaScriptSpring2021">
          <TreeItem nodeId="12" label="Pre-studies">
            <TreeItem label="Week 1" />
            <TreeItem label="Week 2" />
            <TreeItem label="Week 3" />
          </TreeItem>
          <TreeItem nodeId="13" label="HTML & CSS" />
          <TreeItem nodeId="14" label="JavaScript" />
        </TreeItem>
      </TreeView>
    </div>
  );
}

export default CourseTree;
