export const calculateColorBrightness = (color) => {
  try {
    const [r, g, b] = color.match(/\w\w/g).map((x) => parseInt(x, 16));
    // Calculating the brightness using the YIQ formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness;
  } catch (error) {
    console.error("Error calculating color brightness:", error);
    // Return a default brightness value or handle the error as per your requirement
    return 128; // Default brightness
  }
};
