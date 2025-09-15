import React, { useState, useEffect } from "react";
import axios from "axios";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    type: "general",
  });
  const [loading, setLoading] = useState(false);

  // Fetch announcements from the backend
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("/api/announcement/getdata");
        setAnnouncements(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };
    fetchAnnouncements();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement({ ...newAnnouncement, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/announcements", newAnnouncement); // Replace with your API endpoint
      setAnnouncements([response.data, ...announcements]); // Add the new announcement to the list
      setNewAnnouncement({ title: "", content: "", type: "general" }); // Reset form
    } catch (error) {
      console.error("Error creating announcement:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 mt-10">
      <div className="max-w-4xl ml-[20rem] bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl text-black font-bold mb-4">Announcements</h2>

        {/* Display announcements */}
        {/* <div className="mb-6">
          {announcements.length > 0 ? (
            announcements?.map((announcement) => (
              <div
                key={announcement._id}
                className="border-b border-gray-200 py-4"
              >
                <h3 className="text-lg font-semibold">
                  {announcement.title} ({announcement.type})
                </h3>
                <p className="text-gray-600 mt-2">{announcement.content}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {new Date(announcement.date).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No announcements to display.</p>
          )}
        </div> */}

        {/* Create new announcement */}
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={newAnnouncement.title}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border bg-slate-200 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              name="content"
              value={newAnnouncement.content}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border bg-slate-200 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              name="type"
              value={newAnnouncement.type}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border bg-slate-200 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="general">General</option>
              <option value="personal">Personal</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Announcement"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Announcements;
