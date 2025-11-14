import React from "react";
import "./ConfirmModal.css";

export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">
        <div className="icon-wrapper">
          <span className="material-symbols-outlined text-5xl text-primary">
            error_outline
          </span>
        </div>

        <h2 className="modal-title">
          Are you sure you want to delete this note?
        </h2>
        <p className="modal-text">This action cannot be undone.</p>

        <div className="button-group">
          <button
            className="btn btn-yes"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="btn btn-no"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
