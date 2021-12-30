import { Link } from 'remix';

const AdminIndex = () => {
  return (
    <p>
      <Link to="new">Create New Post</Link>
    </p>
  );
};

export default AdminIndex;
