const fillContent = (tag, content) => {
    tag.forEach((auth) => {
      auth.content = content;
      console.log(auth);
    });
  }

export default fillContent;