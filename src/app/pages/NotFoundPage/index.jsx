import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>404</h2>
      <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
