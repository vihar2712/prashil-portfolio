
const filterTag = (meta, attr) => {
    let tag = [...meta].filter((auth) => {
      let nameAttr = auth.getAttribute("name");
      if (nameAttr === attr) {
        return attr;
      }
    });
    return tag;
  }

export default  filterTag;