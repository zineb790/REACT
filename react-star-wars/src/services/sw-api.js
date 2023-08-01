// Function to make AJAX (fetch) calls to the SWAPI
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Function to get a single starship by ID from the SWAPI
export async function getStarshipById(id) {
  const url = `https://swapi.dev/api/starships/${id}/`;
  try {
    return await fetchData(url);
  } catch (error) {
    console.error(`Error getting starship with ID ${id}:`, error);
    throw error;
  }
}