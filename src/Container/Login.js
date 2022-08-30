// import React from 'react'
// import { Grid,Paper, TextField, Button, Typography,Link } from '@mui/material'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'





// const Login=()=>{
//     const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
//     const avatarStyle={backgroundColor:'#FFFFFF'}
//     const btnstyle={margin:'8px 0'}
//     const initialValues = {
//         username: '',
//         password: '',
//         remember: false
//     }
//     const validationSchema = Yup.object().shape({
//         username: Yup.string().email('please enter valid email').required("Required"),
//         password: Yup.string().required("Required")
//     })
//     const onSubmit = (values, props) => {
//         console.log(values)
//         setTimeout(() => {
//             props.resetForm()
//             props.setSubmitting(false)
//         }, 2000)

//     }
//     return(
//         <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align='center'>
//                      <LockOutlinedIcon style={avatarStyle}></LockOutlinedIcon>
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//                     {(props) => (
//                         <Form>
//                             <Field as={TextField} label='Username' name="username"
//                                 placeholder='Enter username' fullWidth required
//                                 helperText={<ErrorMessage name="username" />}
//                             />
//                             <Field as={TextField} label='Password' name="password"
//                                 placeholder='Enter password' type='password' fullWidth required
//                                 helperText={<ErrorMessage name="password" />} />
//                             <Field as={FormControlLabel}
//                                 name='remember'
//                                 control={
//                                     <Checkbox
//                                         color="primary"
//                                     />
//                                 }
//                                 label="Remember me"
//                             />
//                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
//                 </Form>
//                     )}
//                 </Formik>
//                 <Typography >
//                      <Link href="#" >
//                         Forgot password ?
//                 </Link>
//                 </Typography>
//                 <Typography > Do you have an account ?
//                      <Link href="#" >
//                         Sign Up 
//                 </Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     )
// }

// export default Login