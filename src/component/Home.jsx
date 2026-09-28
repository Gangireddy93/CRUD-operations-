import { Link } from "react-router-dom";

export default function Home({ userdata, setUserdata }) {
  function handeldelete(id) {
    const newData = userdata.filter((data) => data.id != id);
    setUserdata(newData);
}
  return (
    <div className="p-5">
      <div className="mb-5">
        <Link
          to="/create"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          + Create User
        </Link>
      </div>
      <table className="w-full border-collapse text-center">
        <thead className="bg-amber-400">
          <tr>
            <th className="border p-3">ID</th>
            <th className="border p-3">NAME</th>
            <th className="border p-3">PHONE</th>
            <th className="border p-3">MAIL</th>
            <th className="border p-3">GENDER</th>
            <th className="border p-3">IMAGE</th>
            <th className="border p-3">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((data, index) => (
            <tr key={index}>
              <td className="border p-3">{data.id}</td>
              <td className="border p-3">{data.name}</td>
              <td className="border p-3">{data.phone}</td>
              <td className="border p-3">{data.mail}</td>
              <td className="border p-3">{data.gender}</td>
              <td className="border p-3">
                {data.image ? (
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-16 h-16 object-cover mx-auto rounded"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td className="border p-3">
                <Link
                  to={`/edit/${data.id}`}
                  className="bg-gray-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </Link>
                 <Link
                  to={`/edit/${data.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  image
                </Link>
                <button
                  onClick={() => handeldelete(data.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
