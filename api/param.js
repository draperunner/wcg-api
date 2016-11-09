/**
 * Validate a parameter. Return null or undefined if not valid, else return the value.
 */
export const validate = (name, param) => {
  // COUNTRY
  if (name === 'country') {
    if (!param || param.length !== 2) {
      return null;
    }

    return param && param.toUpperCase();
  }

  // SORT
  if (name === 'sort') {
    const validParams = [
      'points',
      'members',
      'cpu',
      'avg_points',
    ];

    if (!param || validParams.indexOf(param) === -1) {
      return null;
    }
  }

  if (name === 'type') {
    const validParams = [
      'all',
      'unclassified',
      'company',
      'primary_school',
      'secondary_school',
      'junior_college',
      'university_or_department',
      'government_agency',
    ];

    if (!param || validParams.indexOf(param) === -1) {
      return null;
    }

    return validParams.indexOf(param);
  }

  return param;
};
