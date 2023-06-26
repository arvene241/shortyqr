// create a function to get the domain of an url
export const getDomain = (url: string) => {
  let domain;
  try {
    domain = new URL(url).hostname;
  } catch (e) {
    return "";
  }

  // if sub domain like dub.vercel.app we return the last 2 parts vercel.app
  if (domain.split(".").length > 2) {
    domain = domain.split(".").slice(-2).join(".");
  }

  return domain;
}