export const slug = (string) => {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

export const chunk = (size, xs) => 
xs.reduce(
  (segments, _, index) =>
    index % size === 0 
      ? [...segments, xs.slice(index, index + size)] 
      : segments, 
  []
);