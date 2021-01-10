import Star from 'public/icons/star.svg';
import { formatDate } from 'utils';
import CodeLanguage from './CodeLanguage';
import { GetViewerProject_viewer_repository } from 'graphql/@types/GetViewerProject';

type ProjectCardProps = {
  repository: GetViewerProject_viewer_repository;
  className?: string;
  styles?: Object;
  onClick?: () => Promise<boolean>;
};

const ProjectCard = ({
  repository,
  styles,
  className,
  onClick
}: ProjectCardProps) => {
  let topLanguage;

  const { languages } = repository;

  if (languages!.edges && languages!.edges.length) {
    const { color, name } = languages!.edges[0]!.node;

    topLanguage = {
      name,
      color: color ? color : '#CCC'
    };
  }

  const updatedAt = formatDate(repository.updatedAt);

  return (
    <div
      className={`
        cursor-pointer
        mb-3
        p-5
        rounded-md
        border
      hover:border-blue-500
      hover:bg-blue-50
        transition
        duration-300
        ease-in-out
        ${className}
      `}
      style={styles}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-lg mr-3">{repository.name}</h3>
        <div className="flex items-center">
          <div className="mr-2">{repository.stargazerCount}</div>
          <Star width={15} height={15} fill="#000" />
        </div>
      </div>

      <div className="text-sm text-gray-400">
        upadted on {updatedAt.toLocaleString()}
      </div>

      <p className="my-4 h-12 leading-6 block break-words overflow-hidden overflow-ellipsis">
        {repository.description}
      </p>

      {topLanguage && (
        <CodeLanguage name={topLanguage.name} color={topLanguage.color} />
      )}
    </div>
  );
};

export default ProjectCard;
