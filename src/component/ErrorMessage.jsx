const ErrorMessage = ({ todoItems }) => {
  const msg = <h1>Enjoy your Days.</h1>;
  return <>{todoItems.length === 0 ? msg : ""}</>;
};

export default ErrorMessage;
