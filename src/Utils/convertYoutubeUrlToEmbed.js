function convertYoutubeUrlToEmbed(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|live\/|shorts\/)|youtu\.be\/)([\w-]+)/
  );

  if (!match) {
    throw new Error(`Неподдерживаемый формат YouTube ссылки: ${url}`);
  }

  return `https://www.youtube.com/embed/${match[1]}`;
}

export default convertYoutubeUrlToEmbed;
