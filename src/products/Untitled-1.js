import * as React from "react";
import {
  Typography,
  FormControl,
  FormLabel,
  Checkbox,
  Container,
  FormGroup,
  FormControlLabel,
  Paper,
  makeStyles,
  Button,
} from "@material-ui/core";
import { coursesData, learningDirectionsData, targetAudiencesData, } from "./data";
import CourseList from "./components/CourseList";

export default function App() {
  const styles = useStyles();
  const [learningDirections, setLearningDirections] = React.useState([]);
  const [targetAudiences, setTargetAudiences] = React.useState([]);
  const filteredCourses = coursesData
    .filter((course) => learningDirections.length === 0 || learningDirections.includes(course.learningDirection))
    .filter( (course) =>targetAudiences.length === 0 || targetAudiences.includes(course.targetAudience));

  function handleLearningDirectionChange(e) {
    setLearningDirections(
      learningDirections.includes(e.target.name)
        ? learningDirections.filter((direction) => direction !== e.target.name)
        : [...learningDirections, e.target.name]
    );
  }

  function handleTargetAudienceChange(e) {
    setTargetAudiences(
      targetAudiences.includes(e.target.name)
        ? targetAudiences.filter((audience) => audience !== e.target.name)
        : [...targetAudiences, e.target.name]
    );
  }

  function handleClear() {
    setLearningDirections([]);
    setTargetAudiences([]);
  }

  return (
    <Container className={styles.container}>
      <Paper className={styles.filter}>
        <Typography variant="h5">Filters</Typography>
        <Button variant="contained" onClick={handleClear}>
          Clear Filters
        </Button>
        <FormControl component="fieldset">
          <FormLabel className={styles.label} component="legend">
            Learning Direction
          </FormLabel>
          <FormGroup>
            {learningDirectionsData.map((direction) => (
              <FormControlLabel
                key={direction}
                control={
                  <Checkbox
                    name={direction}
                    checked={learningDirections.includes(direction)}
                    onChange={handleLearningDirectionChange}
                  />
                }
                label={direction}
              />
            ))}
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel className={styles.label} component="legend">
            Target Audience
          </FormLabel>
          <FormGroup>
            {targetAudiencesData.map((audience) => (
              <FormControlLabel
                key={audience}
                control={
                  <Checkbox
                    name={audience}
                    checked={targetAudiences.includes(audience)}
                    onChange={handleTargetAudienceChange}
                  />
                }
                label={audience}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
      <CourseList courses={filteredCourses} />
    </Container>
  );
}

const useStyles = makeStyles({
  container: {
    height: "100vh",
    padding: "2rem",
    display: "flex",
    alignItems: "stretch",
    gap: "1em",
  },
  filter: {
    display: "flex",
    flexDirection: "column",
    padding: "1.5em",
    gap: "1.5em",
    width: 250,
  },
  label: {
    textTransform: "uppercase",
    paddingBottom: "0.5rem",
  },
});
