export const specialKeys = (caretLocation, key, jsonText) => {
  switch (key) {
    case 'Backspace':
      if (caretLocation !== 0) {
        if (jsonText[caretLocation - 1].type === 'newline') {
          jsonText.splice(caretLocation - 1, 1);
          break;
        }
        jsonText[caretLocation - 1].value = jsonText[
          caretLocation - 1
        ].value.slice(0, -1);
        if (jsonText[caretLocation - 1].value === '') {
          jsonText.splice(caretLocation - 1, 1);
        }
      }
      break;
    case 'Enter':
      jsonText.splice(caretLocation, 0, { type: 'newline' });
      break;
    default:
      break;
  }
};

export const printableKeys = (caretLocation, key, jsonText) => {
  if (caretLocation === 0 || jsonText[caretLocation - 1].type === 'newline') {
    jsonText.splice(caretLocation, 0, { type: 'simple', value: key });
  } else {
    jsonText[caretLocation - 1].value += key;
  }
};
