import Airtable from "airtable";

const base = new Airtable({apiKey: 'keyEoL6yNFbdZBmFd'}).base('app8ZbcPx7dkpOnP0');

export const allStudentsResponse = async filterString => {
    return await base('Students').select({
    filterByFormula: `OR(${filterString})`,
    fields: ['Name'],
    view: "Grid view",
  }).all();
};

export const getClasses = async (filterString) => {
  return await base('Classes').select({
    filterByFormula: `OR(${filterString})`,
    fields: ['Name', 'Students'],
    view: "Grid view",
  }).all();
};

export const getUser = async username => {
  return await base('Students').select({
    filterByFormula: `{Name} = '${username}'`,
    maxRecords: 1,
    fields: ['Name', 'Classes'],
    view: "Grid view",
  }).all();
};