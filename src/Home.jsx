import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteUser, toggleStatus } from "./UserReducer";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  const hanldeToggle = (id) => {
    console.log(id);
    dispatch(toggleStatus({ id }));
  };
  return (
    <div className="container">
      <h2>Crud App with JSON Server</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create+
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>

              <td style={{ fontSize: "22px" }}>
                {user.status ? (
                  <FontAwesomeIcon
                    icon={faToggleOn}
                    onClick={() => hanldeToggle(user.id)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faToggleOff}
                    onClick={() => hanldeToggle(user.id)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
