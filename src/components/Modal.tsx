import { useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
  displayModalHeader?: boolean;
}

function Modal({
  isOpen,
  onClose,
  children,
  icon,
  title,
  maxWidth = '600px',
  className = '',
  displayModalHeader = true,
}: ModalProps) {
  useEffect(() => {
    const header = document.querySelector('.header');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Hide header only when CV modal is open
      if (className.includes('cv-modal') && header) {
        (header as HTMLElement).style.display = 'none';
      }
    } else {
      document.body.style.overflow = 'unset';
      // Show header again when modal closes
      if (header) {
        (header as HTMLElement).style.display = '';
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (header) {
        (header as HTMLElement).style.display = '';
      }
    };
  }, [isOpen, className]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${className}`}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          x
        </button>
        {displayModalHeader && (
          <div className="modal-header">
            {icon && <div className="modal-icon">{icon}</div>}
            {title && <h2 className="modal-title">{title}</h2>}
          </div>
        )}

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
