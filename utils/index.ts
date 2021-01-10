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

export const getTotalLanguagesSize = (languages: Array<RepositoryLanguage>) => {
  let totalSize = 0;

  for (const name in languages) totalSize += languages[name].size;

  return totalSize;
};

export const addPercentageToLanguages = (languages: Array<RepositoryLanguage>) => {
  let totalSize = getTotalLanguagesSize(languages);

  languages.map(language => {
    language.percentage = ((language.size / totalSize) * 100).toFixed(1);
    return language;
  });

  return languages;
};

export const parseAllRepositoriesLanguages = (repositories) => {
  let languages: Array<RepositoryLanguage> = [];

  repositories.nodes.forEach((repository) => {
    repository.languages.edges.forEach(
      ({ node: language, size }: { node, size }) => {
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

/**
 * @types and @interfaces
 * for utils functions
 */

type RepositoryLanguage = {
  name: string,
  color: string,
  size: number,
  percentage?: any
} 
