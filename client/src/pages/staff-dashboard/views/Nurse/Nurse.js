import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// styles
import "./Nurse.css";

export default function Nurse() {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "auto",
        }}
      >
        Nurse
      </Paper>
    </Grid>
  );
}
