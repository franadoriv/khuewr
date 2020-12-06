import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem, { TreeItemProps } from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import HomeWork from "@material-ui/icons/HomeWork";
import Label from "@material-ui/icons/Label";
import MapIcon from "@material-ui/icons/Map";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { Map } from "./../../objects/Map";
import { Paper } from "@material-ui/core";
declare module "csstype" {
  interface Properties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
      "&:hover > $content": {
        backgroundColor: theme.palette.action.hover
      },
      "&:focus > $content, &$selected > $content": {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: "var(--tree-view-color)"
      },
      "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
        backgroundColor: "transparent"
      }
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      "$expanded > &": {
        fontWeight: theme.typography.fontWeightRegular
      }
    },
    group: {
      marginLeft: 0,
      "& $content": {
        paddingLeft: theme.spacing(2)
      }
    },
    expanded: {},
    selected: {},
    label: {
      fontWeight: "inherit",
      color: "inherit"
    },
    labelRoot: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0.5, 0)
    },
    labelIcon: {
      marginRight: theme.spacing(1)
    },
    labelText: {
      fontWeight: "inherit",
      flexGrow: 1
    }
  })
);

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label
      }}
      {...other}
    />
  );
}

const useStyles = makeStyles(
  createStyles({
    container: {
      overflowX: "scroll",
      width: "100%"
    },
    root: {
      height: "100%",
      flexGrow: 1
      //maxWidth: 400
    }
  })
);

interface IMapTreeView {
  mapAreas: Array<Map>;
  onSelect?: (typeName: string, item: Map) => void;
}

export default function MapTreeView(props: IMapTreeView) {
  const { mapAreas, onSelect } = props;

  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <TreeView
        className={classes.root}
        defaultExpanded={["3"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: "100%" }} />}
      >
        <StyledTreeItem nodeId="3" labelText="Areas" labelIcon={Label}>
          {mapAreas?.map((mapArea) => (
            <StyledTreeItem
              nodeId={mapArea._id}
              key={mapArea._id}
              labelText={mapArea.name}
              labelIcon={MapIcon}
              labelInfo={mapArea?.staticMeshActorList?.length}
              color="#1a73e8"
              bgColor="#e8f0fe"
            >
              <StyledTreeItem
                nodeId={`${mapArea.name}.smal`}
                labelText="staticMeshActorList"
                labelIcon={HomeWork}
                onClick={(evt) => onSelect?.("staticMeshActor", mapArea)}
              />
            </StyledTreeItem>
          ))}
        </StyledTreeItem>
      </TreeView>
    </Paper>
  );
}
