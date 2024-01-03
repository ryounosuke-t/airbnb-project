import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng, // Corrected from 'lating' to 'latlng'
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value); // Corrected syntax error here
  };

  return {
    getAll,
    getByValue,
  };
};

export default useCountries;
