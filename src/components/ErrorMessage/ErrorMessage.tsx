import s from './ErrorMessage.module.css';
type ErrorMessageProps = { errorMsg: string };
const ErrorMessage = ({ errorMsg }: ErrorMessageProps) => {
  return (
    <div className={s.errorMsgContainer}>
      <h2>Whoops, something went wrong! Please try reloading this page!</h2>
      <p>{errorMsg}</p>
    </div>
  );
};

export default ErrorMessage;
