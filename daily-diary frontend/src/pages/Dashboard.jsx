import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  const fetchEntries = async () => {
    try {
      const res = await api.get("/diary");
      setEntries(res.data);
    } catch (err) {
      console.error("Error fetching diaries", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await api.delete(`/diary/${id}`);
        fetchEntries();
      } catch (err) {
        console.error("Error deleting entry", err);
      }
    }
  };

  const handleEdit = (entry) => {
    // Save selected entry temporarily in localStorage
    localStorage.setItem("editEntry", JSON.stringify(entry));
    // Navigate to same DiaryForm page (handles both add + edit)
    navigate("/diary");
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>My Daily Diary</h1>
          <Link to="/diary" className="add-btn">
            <span className="material-symbols-outlined">add</span>
            Add Today's Details
          </Link>
        </div>

        <div className="entries">
          {entries.length === 0 ? (
            <p className="no-entries">No diary entries found. Add your first one!</p>
          ) : (
            entries.map((entry) => (
              <div className="entry-card" key={entry._id}>
                <div className="entry-header">
                  <div className="entry-info">
                    <p>
                      {new Date(entry.date).toLocaleDateString()} - {entry.mood}
                    </p>
                    <h2>{entry.title}</h2>
                  </div>
                  <div className="entry-actions">
                    <button
                      className="action-btn"
                      onClick={() => handleEdit(entry)}
                      title="Edit entry"
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button
                      className="action-btn"
                      onClick={() => handleDelete(entry._id)}
                      title="Delete entry"
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <p className="entry-description">{entry.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
