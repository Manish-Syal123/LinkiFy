import { subDomainList } from "./constant";

export const getApps = () => {
  const subdomain = getSubDomain(window.location.hostname);

  const mainApp = subDomainList.find((app) => app.main);
  if (subdomain === "") return mainApp.app;

  const apps = subDomainList.filter((app) => app.subdomain === subdomain);
  return apps.length > 0 ? apps[0].app : mainApp.app;
};

// http://url.localhost:5173   -> url.localhost
// http://url.urlbestshort.com  -> url.urlbestshort
export const getSubDomain = (location) => {
  const locationParts = location.split(".");
  const isLocalhost = locationParts.slice(-1)[0] === "localhost";
  const sliceTill = isLocalhost ? -1 : -2;
  return locationParts.slice(0, sliceTill).join(".");
};
