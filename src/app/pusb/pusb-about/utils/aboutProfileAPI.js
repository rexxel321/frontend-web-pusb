export const GetPUSBProfile = async () => {
  try {
    const response = await fetch("https://api.pusb.or.id/about/profile");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data; 
  } catch (err) {
    console.error("API fetch failed:", err); 
    return null;
  }
};
