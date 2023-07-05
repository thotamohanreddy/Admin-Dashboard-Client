import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../components/Header";
import axios from 'axios';

const initialValues = {
    end_year: "",
    intensity: "",
    sector: "",
    topic: "",
    insight: "",
    url: "",
    region: "",
    start_year: "",
    impact: "",
    added: "",
    published: "",
    country: "",
    relevance: "",
    pestle: "",
    source: "",
    title: "",
    likelihood: "",
}
const checkoutSchema = yup.object().shape({
    end_year: yup
    .string()
    .matches(/^[0-9]{4}$/, 'End year must be a four-digit number'),
  intensity: yup.number().required('Intensity is required'),
  sector: yup.string(),
  topic: yup.string(),
  insight: yup.string().required('Insight is required'),
  url: yup.string().required('URL is required'),
  region: yup.string(),
  start_year: yup
    .string()
    .matches(/^[0-9]{4}$/, 'Start year must be a four-digit number'),
  impact: yup.string(),
  added: yup.string(),
  published: yup
    .string()
    .matches(
      /^[A-Z][a-z]+,\s[0-9]{1,2}\s[0-9]{4}\s[0-9]{2}:[0-9]{2}:[0-9]{2}$/,
      'Published must be in the format "Month, Day Year Hour:Minute:Second"'
    ),
  country: yup.string(),
  relevance: yup.number(),
  pestle: yup.string(),
  source: yup.string().required('Source is required'),
  title: yup.string().required('Title is required'),
  likelihood: yup.number(),
});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        const currentDate = new Date();
        const month = currentDate.toLocaleString('en-US', { month: 'long' });
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        const hour = currentDate.getHours().toString().padStart(2, '0');
        const minute = currentDate.getMinutes().toString().padStart(2, '0');
        const second = currentDate.getSeconds().toString().padStart(2, '0');
      
        const formattedDate = `${month}, ${day} ${year} ${hour}:${minute}:${second}`;
      
        const updatedValues = {
            ...values,
            added: formattedDate,
        };
        console.log(updatedValues);
        axios.post('/filter', updatedValues)
            .then(response => {
                // Handle success
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };

  return (
    <Box m="20px">
      <Header title="CREATE NEW ARTICLE" subtitle="Add new article to the collection" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="10px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="End Year"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.end_year}
                name="end_year"
                error={!!touched.end_year && !!errors.end_year}
                helperText={touched.end_year && errors.end_year}
                sx={{ gridColumn: "span 0.5" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Intensity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.intensity}
                name="intensity"
                error={touched.intensity && errors.intensity}
                helperText={touched.intensity && errors.intensity}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sector"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sector}
                name="sector"
                error={!!touched.sector && !!errors.sector}
                helperText={touched.sector && errors.sector}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Topic"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.topic}
                name="topic"
                error={!!touched.topic && !!errors.topic}
                helperText={touched.topic && errors.topic}
                sx={{ gridColumn: "span 1" }}
            />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Start Year"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.start_year}
                name="start_year"
                error={!!touched.start_year && !!errors.start_year}
                helperText={touched.start_year && errors.start_year}
                sx={{ gridColumn: "span 0.5" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Region"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.region}
                name="region"
                error={touched.region && errors.region}
                helperText={touched.region && errors.region}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Impact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.impact}
                name="impact"
                error={!!touched.impact && !!errors.impact}
                helperText={touched.impact && errors.impact}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name="country"
                error={!!touched.country && !!errors.country}
                helperText={touched.country && errors.country}
                sx={{ gridColumn: "span 1" }}
              />          
              <TextField
                fullWidth
                variant="filled"
                type="link"
                label="URL"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.url}
                name="url"
                error={!!touched.url && !!errors.url}
                helperText={touched.url && errors.url}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Insight"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.insight}
                name="insight"
                error={!!touched.insight && !!errors.insight}
                helperText={touched.insight && errors.insight}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Published"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.published}
                name="published"
                error={!!touched.published && !!errors.published}
                helperText={touched.published && errors.published}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Relevance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.relevance}
                name="relevance"
                error={touched.relevance && errors.relevance}
                helperText={touched.relevance && errors.relevance}
                sx={{ gridColumn: "span 1" }}
                          />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pestle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pestle}
                name="pestle"
                error={touched.pestle && errors.pestle}
                helperText={touched.pestle && errors.pestle}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Likelihood"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.likelihood}
                name="likelihood"
                error={!!touched.likelihood && !!errors.likelihood}
                helperText={touched.likelihood && errors.likelihood}
                sx={{ gridColumn: "span 1" }}
                          />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Source"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.source}
                name="source"
                error={!!touched.source && !!errors.source}
                helperText={touched.source && errors.source}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Article
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;