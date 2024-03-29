export const AcademicSemesterSearchableFields = [
  'title',
  'code',
  'startMonth',
  'endMonth',
];

export const AcademicSemesterFilterableFields = [
  'searchTerm',
  'code',
  'startMonth',
  'endMonth',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const EVENT_ACADEMIC_SEMESTER_CREATED = 'academic-semester.created';
