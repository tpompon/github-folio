import queryGetViewerProject from 'graphql/getViewerProject.graphql';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Readme from 'components/Readme';
import CodeLanguage from 'components/CodeLanguage';
import Star from 'public/icons/star.svg';
import { formatDate } from 'utils';
import PageTransition from 'components/PageTransition';
import {
  GetViewerProject,
  GetViewerProjectVariables
} from 'graphql/@types/GetViewerProject';

const ProjectByNamePage = () => {
  const router = useRouter();
  const { name: projectName } = router.query;

  let repository;
  let updatedAt;
  let topLanguage;

  const { data, loading, error } = useQuery<
    GetViewerProject,
    GetViewerProjectVariables
  >(queryGetViewerProject, {
    variables: {
      projectName: typeof projectName === 'string'
        ? projectName
        : ''
    }
  });

  if (error) return <div>An error occured</div>;
  if (loading) return <Skeleton />;

  if (data) {
    if (!data.viewer?.repository) return <div>An error occured</div>;

    repository = data.viewer.repository;
    updatedAt = formatDate(repository.updatedAt);

    if (repository.languages?.edges && repository.languages.edges[0])
      topLanguage = repository.languages.edges[0].node;
  } else return null;

  const back = () => router.push('/projects');

  return (
    <PageTransition>
      <div className="mb-8">
        <div className="flex flex-row flex-wrap items-center mb-2 gap-x-8 gap-y-2">
          <div className="text-2xl lg:text-3xl font-bold flex flex-row flex-wrap items-center">
            <span
              onClick={back}
              className="hover:underline cursor-pointer mr-2"
            >
              My projects
            </span>{' '}
            /<h2 className="ml-2">{projectName}</h2>
          </div>

          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center">
              {topLanguage && (
                <CodeLanguage
                  name={topLanguage.name}
                  color={topLanguage.color}
                />
              )}
            </div>

            <div className="flex items-center">
              <div className="mr-2">{repository.stargazerCount}</div>
              <Star width={15} height={15} fill="#000" />
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400">updated on {updatedAt}</div>
      </div>

      <p className="mb-10">{repository.description}</p>

      <a
        className="mb-3 ml-auto table text-blue-600 hover:text-blue-700 hover:underline"
        href={repository.url}
        target="_blank"
      >
        See on Github
      </a>

      <div className="w-full border border-gray-400 p-10 rounded-lg">
        {repository.object?.text ? (
          <Readme text={repository.object.text} />
        ) : (
          <div>No readme found.</div>
        )}
      </div>
    </PageTransition>
  );
};

const Skeleton = () => (
  <div className="h-full">
    <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-2 mb-8">
      <div className="bg-gray-100 rounded-lg w-72 p-4 animate-pulse" />
      <div className="bg-gray-100 rounded-lg w-24 p-4 animate-pulse" />
    </div>

    <div className="bg-gray-100 rounded-lg w-full h-20 animate-pulse my-12" />

    <div className="bg-gray-100 rounded-lg h-5/6 animate-pulse" />
  </div>
);

export default ProjectByNamePage;
