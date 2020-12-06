import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StaticMeshActor } from "./../../objects/Map";

const useStyles = makeStyles({
  container: {
    overflowX: "scroll",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "500px"
  },
  table: {
    width: "100%"
  }
});

interface IMeshTable {
  meshList?: StaticMeshActor[];
}

export default function MeshTable(props: IMeshTable) {
  const { meshList } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">staticMeshFile</TableCell>
            <TableCell align="right">relativeLocation</TableCell>
            <TableCell align="right">relativeRotation</TableCell>
            <TableCell align="right">relativeScale3D</TableCell>
            <TableCell align="right">attachParentDicIdx</TableCell>
            <TableCell align="right">attachParent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meshList?.map((mesh) => (
            <TableRow key={mesh.id}>
              <TableCell component="th" scope="row">
                {mesh.name}
              </TableCell>
              <TableCell align="right">{mesh.staticMeshFile}</TableCell>
              <TableCell align="right">
                {JSON.stringify(mesh.relativeLocation)}
              </TableCell>
              <TableCell align="right">
                {JSON.stringify(mesh.relativeRotation)}
              </TableCell>
              <TableCell align="right">
                {JSON.stringify(mesh.relativeScale3D)}
              </TableCell>
              <TableCell align="right">{mesh.attachParentDicIdx}</TableCell>
              <TableCell align="right">{mesh.attachParent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
