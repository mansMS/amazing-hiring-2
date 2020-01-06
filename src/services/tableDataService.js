import { getTableDataURL } from '../services/sourceURLs';

export const getTableData = async () => {
  try {
    const response = await fetch(getTableDataURL);
    if (!response.ok) {
      throw new Error(`Ошибка загрузки ${response.status}`)
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error('Ошибка:', error);
    return ('Ошибка при загрузке');
  }
}