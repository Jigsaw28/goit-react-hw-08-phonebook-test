const LoginPage = () => {
  return (
    <form>
      <label>Email</label>
      <input type="email" name="email" />
      <label>Password</label>
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginPage;