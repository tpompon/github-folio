/**
 * Any util function for the application will
 * be added in the utils/index.ts to be exported
 * and used anywhere in the application.
 */

export const formatDate = (date: string, withoutDay?: boolean) => {
  let options: {
    year: string;
    month: string;
    day?: string;
  } = {
    year: 'numeric',
    month: 'long'
  };

  if (!withoutDay) options.day = 'numeric';

  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('fr-FR', options);
};

export const getTotalLanguagesSize = (languages: any) => {
  let totalSize = 0;

  for (const name in languages) totalSize += languages[name].size;

  return totalSize;
};

export const addPercentageToLanguages = (languages: Array<any>) => {
  let totalSize = getTotalLanguagesSize(languages);

  languages.map(language => {
    language.percentage = ((language.size / totalSize) * 100).toFixed(1);
    return language;
  });

  return languages;
};

export const parseAllRepositoriesLanguages = (repositories: any) => {
  let languages: Array<any> = [];

  repositories.nodes.forEach((repository: any) => {
    repository.languages.edges.forEach(
      ({ node: language, size }: { node: any; size: any }) => {
        const lIndex = languages.findIndex(l => l.name === language.name);

        const lObject = {
          name: language.name,
          color: language.color,
          size
        };

        if (lIndex > -1) languages[lIndex].size += lObject.size;
        else languages.push(lObject);
      }
    );
  });

  return addPercentageToLanguages(languages).sort(
    (a, b) => b.percentage - a.percentage
  );
};
