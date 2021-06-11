export function formatJsonData(results) {
  return results.map((data) => {
    return {
      author: data.author,
      title: data.title,
      date: data.created_at,
      commentCount: data.num_comments,
      link: data.url,
    };
  });
}

export function highlightWord(text, searchTerm) {
  var regexTerm = new RegExp(`(${searchTerm})`, "gi");
  var result = text.replace(regexTerm, '<span class="hightlight">$1</span>');
  return {
    __html: result,
  };
}
