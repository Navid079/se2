import Resizer from 'react-image-file-resizer';

export const urlPrefixer = base64 => {
  return `data:image/png;charset=utf-8;base64, ${base64}`;
};

export const urlRemover = urledBase64 => {
  const index = urledBase64.indexOf('base64');
  if (index < 0) return urledBase64;
  return urledBase64.substring(index + 7);
};

export const imageResizerBase64 = imageFile =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      imageFile,
      500,
      10000,
      'JPEG',
      60,
      0,
      result => resolve(result),
      'base64'
    );
  });
