import React, { useState, useEffect } from "react";
import { HiChevronDown, HiChevronRight, HiOutlineHome, HiOutlineBriefcase, HiOutlineMail, HiOutlineViewGrid } from "react-icons/hi";

const Sidebar = ({ cmsData, activePage, activeSectionId, onPageChange, onSectionChange }) => {
  // PERSISTENCE: Initialize menu expansion from localStorage
  const [openMenus, setOpenMenus] = useState(() => {
    const saved = localStorage.getItem("openMenus");
    return saved ? JSON.parse(saved) : {};
  });

  // Save menu state on every change
  useEffect(() => {
    localStorage.setItem("openMenus", JSON.stringify(openMenus));
  }, [openMenus]);

  // Ensure active page menu is always open on load/refresh
  useEffect(() => {
    if (activePage && !openMenus[activePage]) {
      setOpenMenus(prev => ({ ...prev, [activePage]: true }));
    }
  }, [activePage]);

  const handlePageClick = (slug) => {
    // 1. Toggle the accordion state
    setOpenMenus(prev => ({ ...prev, [slug]: !prev[slug] }));
    
    // 2. Change the active page in Dashboard
    onPageChange(slug);
    
    // 3. AUTO-SELECT: Pick first section to prevent empty editor
    const sections = cmsData[slug] || [];
    if (sections.length > 0) {
      onSectionChange(sections[0].id);
    }
  };

  const renderPageLink = (slug, label, Icon) => {
    const sections = cmsData[slug] || [];
    const isOpen = openMenus[slug];
    const isSelected = activePage === slug;

    return (
      <div key={slug} className="mb-2">
        <button 
          onClick={() => handlePageClick(slug)}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all border ${
            isSelected 
              ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-lg shadow-cyan-500/5" 
              : "hover:bg-white/5 text-gray-400 border-transparent"
          }`}
        >
          <div className="flex items-center gap-3">
            <Icon className={`text-xl ${isSelected ? "text-cyan-400" : "text-gray-500"}`} />
            <span className="text-sm font-bold uppercase tracking-widest">{label}</span>
          </div>
          {sections.length > 0 && (
            isOpen ? <HiChevronDown className="text-gray-600" /> : <HiChevronRight className="text-gray-600" />
          )}
        </button>

        {/* SECTION SUB-MENU */}
        {isOpen && sections.length > 0 && (
          <div className="ml-9 mt-2 flex flex-col gap-1 border-l border-gray-800 animate-in slide-in-from-top-1 duration-200">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => { 
                  onPageChange(slug); 
                  onSectionChange(section.id); 
                }}
                className={`text-left px-4 py-2 text-xs font-medium transition-all ${
                  activeSectionId === section.id && isSelected 
                    ? "text-cyan-400 border-l-2 border-cyan-400 -ml-[2px] bg-cyan-400/5" 
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {/* Format camelCase or kebab-case to readable titles */}
                {section.id
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/-/g, ' ')
                  .replace(/^./, str => str.toUpperCase())}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-80 flex flex-col gap-4 sticky top-6">
      <div className="bg-[#0a0f14]/80 border border-gray-800 rounded-[30px] p-6 h-[calc(100vh-48px)] overflow-y-auto custom-scrollbar shadow-2xl">
        <div className="flex items-center gap-3 px-2 mb-8 border-b border-gray-800 pb-6">
          <div className=""><img src="/icon2.png" alt="" /></div>
          <h2 className="text-lg font-bold tracking-tight text-white">The Varallo Group</h2>
        </div>

        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4 px-2">Main Pages</p>
        {renderPageLink("home", "Homepage", HiOutlineHome)}
        {renderPageLink("about", "About Us", HiOutlineBriefcase)}
        {renderPageLink("services", "Our Services", HiOutlineViewGrid)}
        {renderPageLink("contact", "Contact Us", HiOutlineMail)}
        
        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] my-6 px-2 border-t border-gray-800 pt-6">TVG Services Sub-Pages</p>
        <div className="flex flex-col gap-1">
          {renderPageLink("services/tvg-management", "Management", HiOutlineBriefcase)}
          {renderPageLink("services/tvg-reporting", "Reporting", HiOutlineBriefcase)}
          {renderPageLink("services/tvg-stream", "Stream", HiOutlineBriefcase)}
          {renderPageLink("services/tvg-books", "Books", HiOutlineBriefcase)}
          {renderPageLink("services/tvg-connect", "Connect", HiOutlineBriefcase)}
          {renderPageLink("services/tvg-verify", "Verify", HiOutlineBriefcase)}
        </div>

        <div className="mt-8 px-2">
           <div className="text-[9px] text-gray-700 font-bold uppercase tracking-widest">CMS System v1.2</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;