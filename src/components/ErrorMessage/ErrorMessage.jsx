const ErrorMessage = ({ errorMsg }) => {
  console.log(errorMsg);

  return (
    <div>
      <h2>Something went wrong!!!</h2>
      <p>{errorMsg}</p>
    </div>
  );
};

export default ErrorMessage;
