import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // disable body scroll
    } else {
      document.body.style.overflow = "auto"; // restore body scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ marginTop: 50 }} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px); /* blur background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px; /* mobile safe padding */
        }

        .modal-content {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          width: 90%; /* default width for mobile */
          max-width: 600px; /* limit width on large screens */
          max-height: 90vh; /* don't exceed viewport height */
          overflow-y: auto; /* scroll if content is too tall */
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          z-index: 1001;
        }

        /* Wider modal on large screens */
        @media (min-width: 992px) {
          /* lg screens and up */
          .modal-content {
            max-width: 800px; /* wider */
            padding: 40px; /* optional: more padding */
          }
        }

        .modal-close-btn {
          margin-top: 20px;
          background: var(--bs-primary, #5500e3);
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
        }

        .modal-close-btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default Modal;
