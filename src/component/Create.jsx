
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Create({ userdata, setUserdata }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [create, setCreate] = useState({
    id: "",
    name: "",
    phone: "",
    mail: "",
    gender: "",
    image: "",
  });
  // Get old data when editing
  useEffect(() => {
    if (id) {
      const oldData = userdata.find((data) => data.id == id);
      if (oldData) {
        setCreate(oldData);
      }
    }
  }, [id, userdata]);
  // Input change
  function handelchange(e) {
    const { name, value } = e.target;
    setCreate({
      ...create,
      [name]: value,
    });
  }
  // Image change
  function handelimage(e) {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setCreate({
        ...create,
        image: imageURL,
      });
    }
  }
  // Save / Update
  function handelsubmit(e) {
    e.preventDefault();
    if (id) {
      // UPDATE
      const updatedData = userdata.map((data) => {
        if (data.id == id) {
          return create;
        }
        return data;
      });
      setUserdata(updatedData);

      alert("Data Updated");
    } else {
      // CREATE

      setUserdata([...userdata, create]);

      alert("Data Saved");
    }

    navigate("/");
  }

  return (
    <div className="p-5 flex justify-center">
      <form
        onSubmit={handelsubmit}
        className="w-full max-w-md border p-5 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-5">
          {id ? "Update User" : "Create User"}
        </h2>
        <div className="mb-4">
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={create.id}
            onChange={handelchange}
            placeholder="Enter ID"
            // disabled={!!id}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={create.name}
            onChange={handelchange}
            placeholder="Enter Name"
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={create.phone}
            onChange={handelchange}
            placeholder="Enter Phone"
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Mail</label>
          <input
            type="email"
            name="mail"
            value={create.mail}
            onChange={handelchange}
            placeholder="Enter Mail"
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Gender</label>

          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={create.gender === "Female"}
              onChange={handelchange}
            />
            <span className="ml-2">Female</span>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={create.gender === "Male"}
              onChange={handelchange}
              className="ml-5"
            />
            <span className="ml-2">Male</span>
          </div>
        </div>
        <div className="mb-4">
          <label>Image</label>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handelimage}
            className="border p-2 w-full"
          />
        </div>
        {/* {create.image && (
          <div className="mb-4">
            <p>Preview:</p>
            <img
              src={create.image}
              alt="Preview"
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        )} */}
        <button
          type="submit"
          className="bg-green-500 text-white px-5 py-2 rounded"
        >
          {id ? "Update" : "Save"}
        </button>

        <Link to="/" className="bg-gray-500 text-white px-5 py-2 rounded ml-2">
          Back
        </Link>
      </form>
    </div>
  );
}
