type DotLanguageProps = {
  color: string;
};

type CodeLanguageProps = {
  name: string;
  color?: string | null;
  percentage?: number | null;
};

const DotLanguage = ({ color }: DotLanguageProps) => (
  <div className="mr-2 w-3 h-3 rounded-full" style={{ background: color }} />
);

const CodeLanguage = ({ name, color, percentage }: CodeLanguageProps) => {
  let dotColor = color || '#CCC';

  return (
    <div className="flex flex-row items-center mr-2">
      <DotLanguage color={dotColor} />
      <div className="mr-1.5">{name}</div>

      {percentage && <div>({percentage >= 1 ? percentage : '< 1'}%)</div>}
    </div>
  );
};

export default CodeLanguage;
