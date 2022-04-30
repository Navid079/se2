const simpleNumbers = [
  'اول',
  'دوم',
  'سوم',
  'چهارم',
  'پنجم',
  'ششم',
  'هفتم',
  'هشتم',
  'نهم',
];

const specials = [
  'یازده',
  'دوازده',
  'سیزده',
  'چهارده',
  'پانزده',
  'شانزده',
  'هفده',
  'هجده',
  'نوزده',
];

const twoDigits = [
  'ده',
  'بیست',
  'سی',
  'چهل',
  'پنجاه',
  'شصت',
  'هفتاد',
  'هشتاد',
  'نود',
];

const number2persian = number => {
  const digits = `${number}`.split('');
  const digitCount = digits.length;
  if (digitCount === 2 && number < 20) {
    return specials[number - 11] + 'م';
  }
  if (digitCount === 2 && digits[1] === '0') {
    return twoDigits[digits[0] - 1] + 'م';
  }
  if (digitCount === 2) {
    return twoDigits[digits[0] - 1] + ' و ' + simpleNumbers[digits[1] - 1];
  }
  return simpleNumbers[digits[0] - 1];
};

export default number2persian;
