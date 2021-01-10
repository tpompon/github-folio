import { formatDate } from 'utils';

type CurriculumCardProps = {
  company: string;
  image: string;
  description: string;
  startDate?: string;
  endDate?: string;
  url?: string;
};

const CurriculumCard = ({
  company,
  image,
  description,
  url,
  startDate,
  endDate
}: CurriculumCardProps) => {
  return (
    <div className="lg:flex mb-10 w-full">
      <div className="mr-10">
        <img src={image} alt={`Logo de ${company}`} className="w-20" />
      </div>
      <div>
        <h3 className="font-bold text-xl">{company}</h3>
        <a className="text-blue-600 hover:underline" href={url} target="_blank">
          {url}
        </a>

        <p>{description}</p>

        {startDate && endDate && (
          <div>
            de {formatDate(startDate, true)} à {formatDate(endDate, true)}
          </div>
        )}

        {startDate && !endDate && (
          <div>depuis {formatDate(startDate, true)}</div>
        )}
      </div>
    </div>
  );
};

export default CurriculumCard;
