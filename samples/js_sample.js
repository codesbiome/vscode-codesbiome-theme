const { width, height } = window.screen;

const screenRatio = () => {
  return width / height;
};

const perform = async () => {
  const configure = await fetch('https://www.example.com');
  return configure;
};
