// // src/components/Sidebar.jsx
// import React from 'react';

// const Sidebar = ({ categories, onSelect }) => {
//   return (
//     <aside className="sidebar">
//       {categories.map((cat) => (
//         <a key={cat} href={`#menu-${cat.toLowerCase()}`} onClick={() => onSelect(cat)}>
//           {cat}
//         </a>
//       ))}
//     </aside>
//   );
// };

// export default Sidebar;

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
