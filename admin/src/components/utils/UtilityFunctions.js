export const slug = (string) => {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "") + '-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }

export const chunk = (size, xs) => 
xs.reduce(
  (segments, _, index) =>
    index % size === 0 
      ? [...segments, xs.slice(index, index + size)] 
      : segments, 
  []
);

export const isPasswordChanged = (oldPassword,newPassword) => {
  return (oldPassword !== newPassword);
}