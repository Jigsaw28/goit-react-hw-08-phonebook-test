import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from 'utility/TextInput/TextInput';
import { FormWrapper, StatusMessage, StyledForm, SubmitButton } from './LoginPage.styled';

const initialValues = { email: '', password: '' };

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password is too short').required('Required'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    
    setStatus(null);
    try {
      // unwrap() корисний для отримання помилки з createAsyncThunk
      await dispatch(login(values)).unwrap();
      resetForm();
    } catch (error) {
      // встановити загальну помилку (наприклад, для toast або під формою)
      setStatus(error?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({ isSubmitting, isValid, status }) => (
          <StyledForm>
            <TextInput label="Email" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            {status ? <StatusMessage>{status}</StatusMessage> : null}
            <SubmitButton type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};
export default LoginPage;
