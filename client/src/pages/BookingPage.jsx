import { useParams } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams();

  return <div>Single BP: {id}</div>;
};

export default BookingPage;
