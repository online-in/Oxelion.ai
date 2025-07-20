import React from 'react';
import MenuIcon from './icons/MenuIcon';
import EditIcon from './icons/EditIcon';
import SettingsIcon from './icons/SettingsIcon';

interface SidebarProps {
  onNewChat: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNewChat }) => {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-header">
           <button className="sidebar-menu-btn" aria-label="Menu">
             <MenuIcon className="sidebar-icon-large" />
           </button>
        </div>
        <button className="sidebar-new-chat" onClick={onNewChat}>
          <span className="sidebar-new-chat-text">Oxelion AI</span>
          <EditIcon className="sidebar-icon" />
        </button>
      </div>
      <footer className="sidebar-footer">
        <a href="#" className="sidebar-link">
          <SettingsIcon className="sidebar-icon" />
          <span>Settings</span>
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;