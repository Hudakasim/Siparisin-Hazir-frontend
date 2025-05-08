
import React from 'react';
const Sidebar = ({ categories, onSelect, selectedCategory }) => {
	return (
	  <aside className="sidebar">
		{categories.map((cat) => (
		  <button
			key={cat}
			onClick={() => onSelect(cat)}
			className={cat === selectedCategory ? 'active' : ''}
		  >
			{cat}
		  </button>
		))}
	  </aside>
	);
  };

  export default Sidebar;
