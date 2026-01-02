import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Flower, ShoppingCart, ClipboardList, Info, X } from 'lucide-react';

const Modal = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSidebarOpen(false)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </button>
            <nav>
              <ul>
                <li>
                  <Home size={20} color="#808000" />
                  <span>Home</span>
                </li>
                <li>
                  <ClipboardList size={20} color="#808000" />
                  <span>Orders</span>
                </li>
                <li>
                  <Info size={20} color="#808000" />
                  <span>About</span>
                </li>
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;