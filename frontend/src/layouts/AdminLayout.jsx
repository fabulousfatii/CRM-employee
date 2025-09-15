import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="">
      
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AdminLayout