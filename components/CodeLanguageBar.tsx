interface CodeLanguage {
  name: string;
  color: string;
  percentage: number;
}

type CodeLanguageBarProps = {
  languages: Array<CodeLanguage>;
};

const CodeLanguageBar = ({ languages }: CodeLanguageBarProps) => (
  <div className="w-full mb-4 h-3 relative flex overflow-hidden rounded-xl">
    {languages.map(language => {
      const width = language.percentage + '%';
      const background = language.color || '#CCC';

      return (
        <div
          key={`codelanguagebar-${language.name}`}
          style={{ width, background }}
        />
      );
    })}
  </div>
);

export default CodeLanguageBar;
