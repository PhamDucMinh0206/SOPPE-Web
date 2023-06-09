import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiTableCell-body": {
        color: "#311339",
        fontSize: 14,
      },
      "& > *": {
        borderBottom: "unset",
        borderWidth: 0,
      },
    },
    closeRow: {
      "& .MuiTableCell-body": {
        // borderTop: "1px solid rgba(224, 224, 224, 1)",
        borderBottom: "none",
      },
      "&:nth-last-child(2)": {
        "& .MuiTableCell-body": {
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
          // borderBottom: "none",
        },
      },
    },
    openRow: {
      borderLeft: "1px solid #FF7500",
      borderRight: "1px solid #FF7500",
      borderTop: "1px solid #FF7500",
      "& .MuiTableCell-body": {
        borderWidth: 0,
        borderBottom: "none",
      },
      "& .MuiTableCell-body:last-child": {
        borderRight: "1px solid #FF7500",
      },
    },
    previewClosedRow: {
      "& .MuiTableCell-body": {
        borderWidth: 0,
        // borderBottom: "none",
      },
    },
    previewOpenedRow: {
      borderLeft: "1px solid #FF7500",
      borderRight: "1px solid #FF7500",
      "& .MuiTableCell-body": {
        borderWidth: 0,
        borderBottom: "1px solid #FF7500",
      },
    },
    previewOpenedRowCustom: {
      backgroundColor: "#F4F5FA",
      borderLeft: "1px solid #FF7500",
      borderRight: "1px solid #FF7500",
      "& .MuiTableCell-body": {
        borderWidth: 0,
        borderBottom: "1px solid #FF7500",
      },
    },
    collapseButton: {
      backgroundColor: "#F4F5FA",
    },
    collapseButtonCustom: {
      backgroundColor: "#FFFFFF",
    },
  }),
);
