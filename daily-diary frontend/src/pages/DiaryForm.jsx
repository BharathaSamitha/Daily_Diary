// src/pages/DiaryForm.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "./DiaryForm.css";

const moods = ["😊", "😮", "😫", "😁"];

const DiaryForm = () => {
  const [form, setForm] = useState({
    _id: "",
    date: "",
    title: "",
    description: "",
    mood: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  // --- Load old entry data if editing ---
  useEffect(() => {
    const saved = localStorage.getItem("editEntry");
    if (saved) {
      const entry = JSON.parse(saved);
      setForm({
        _id: entry._id,
        date: entry.date?.split("T")[0] || "",
        title: entry.title,
        description: entry.description,
        mood: entry.mood,
      });
      setIsEditMode(true); // identify edit mode
    } else {
      setIsEditMode(false);
    }
  }, []);

  // --- Handle form submit (add or update) ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditMode) {
        // Update existing diary (PUT)
        await api.put(`/diary/${form._id}`, {
          date: form.date,
          title: form.title,
          description: form.description,
          mood: form.mood,
        });
        alert("Diary updated successfully!");
        localStorage.removeItem("editEntry");
      } else {
        // Add new diary (POST)
        await api.post("/diary", {
          date: form.date,
          title: form.title,
          description: form.description,
          mood: form.mood,
        });
        alert("Diary entry saved successfully!");
      }
      navigate("/dashboard");
    } catch (err) {
      alert("Error saving diary!");
    }
  };

  return (
    <div className="diary-page">
      <div className="diary-card">
        <h2 className="title">
          {isEditMode ? "Edit Diary Entry" : "Add New Entry"}
        </h2>

        <form className="diary-form" onSubmit={handleSubmit}>
          <label>
            <span>Date</span>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </label>

          <label>
            <span>Title</span>
            <input
              type="text"
              placeholder="A wonderful day"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </label>

          <label>
            <span>Description</span>
            <textarea
              placeholder="Write about your day..."
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            ></textarea>
          </label>

          <div className="mood-section">
            <span>Mood</span>
            <div className="mood-buttons">
              {moods.map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`mood-btn ${form.mood === m ? "selected" : ""}`}
                  onClick={() => setForm({ ...form, mood: m })}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="actions">
            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                localStorage.removeItem("editEntry");
                navigate("/dashboard");
              }}
            >
              Cancel
            </button>
            <button type="submit" className="btn save">
              {isEditMode ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiaryForm;
