import { useLoginMutation } from '../../redux/authAPI';
import { TextField, Button, Typography, Paper, Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Background, Container, FormWrapper } from './LoginView.styled';

interface SubmitValues {
  email: string;
  password: string;
}

export default function LoginView() {
  const [logIn] = useLoginMutation();

  const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<SubmitValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: SubmitValues) => {
    await logIn(data);
    resetField('email');
    resetField('password');
  };

  return (
    <Background>
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Paper
            elevation={3}
            sx={{
              width: 'auto',
              boxShadow: '3px 3px 5px 0px rgba(25, 118, 210, 1)',
            }}
          >
            <Box
              sx={{
                width: 'auto',
              }}
              px={3}
              py={2}
            >
              <Grid>
                <Grid item xs={5} sm={5}>
                  <TextField
                    required
                    id="email"
                    label="Email"
                    size="small"
                    fullWidth
                    margin="dense"
                    {...register('email')}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={5}>
                  <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth
                    margin="dense"
                    {...register('password')}
                    error={errors.password ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.password?.message}
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Log in
                </Button>
              </Box>
            </Box>
          </Paper>
        </FormWrapper>
      </Container>
    </Background>
  );
}
