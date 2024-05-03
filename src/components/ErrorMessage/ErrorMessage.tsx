import { ErrorType } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorType> = ({
  message = "Oops, something went wrong, please reload the page!😢",
}) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
