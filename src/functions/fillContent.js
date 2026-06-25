const fillContent = (tag, content) => {
    tag.forEach((auth) => {
      auth.content = content;
    });
  }

export default fillContent;