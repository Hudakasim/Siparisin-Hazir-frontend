import React, { useState } from 'react';
import PopupFrame from './PopupFrame';
import PopupContentSimple from './PopupContentSimple';
import PopupContentDrink from './PopupContentDrink';
import PopupContentBurger from './PopupContentBurger';
import PopupContentSide from './PopupContentSide';
import PopupContentMenu from './PopupContectMenu';

const PopupManager = ({ popupType, productName, onClose, onAddToCart }) => {
  const [selection, setSelection] = useState({});

  const handleSubmit = () => {

	if ((popupType === "drink" || popupType === "side") && !selection.size) {
		alert("Lütfen bir seçenek seçin.");
		return;
	  }

    onAddToCart({
      name: productName,
      quantity: selection.quantity || 1,
      extras: selection.extras || [],
      size: selection.size || '',
    });
    onClose();
  };

  let content;

  switch (popupType) {
    case 'drink':
      content = <PopupContentDrink onSelectionChange={setSelection} />;
      break;
    case 'burger':
      content = <PopupContentBurger onSelectionChange={setSelection} />;
      break;
    case 'side':
      content = <PopupContentSide onSelectionChange={setSelection} />;
      break;
	case 'menu':
	  content = <PopupContentMenu onSelectionChange={setSelection} />;
	  break;
    default:
      content = <PopupContentSimple onQuantityChange={setSelection} />;
      break;
  }

  return (
    <PopupFrame title={productName} onClose={onClose} onSubmit={handleSubmit}>
      {content}
    </PopupFrame>
  );
};

export default PopupManager;
