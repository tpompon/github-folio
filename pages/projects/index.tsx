import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import queryGetViewerProjectList from 'graphql/getViewerProjectList.graphql';
import ProjectCard from 'components/ProjectCard';
import PageTransition from 'components/PageTransition';
import { GetViewerProjectList, GetViewerProjectListVariables } from 'graphql/@types/GetViewerProjectList';

const ProjectsListPage = () => {
  const router = useRouter();

  let viewer;

  const { data, loading, error, fetchMore } = useQuery<GetViewerProjectList, GetViewerProjectListVariables>(queryGetViewerProjectList, {
    variables: {
      after: null
    }
  });

  if (error) return <div>An error occured</div>;
  if (loading) return <Skeleton />;

  if (data) {
    if (!data.viewer)
      return <div>An error occured</div>;

    viewer = data.viewer;
  } else return null;

  return (
    <PageTransition>
      <h2 className="text-3xl font-bold mb-10">My projects</h2>

      <div className="flex flex-wrap justify-between flex-auto">
        {viewer.repositories?.edges?.map(
          (edge) => {

            const repository = edge?.node;
            if (!repository) return null;

            return (
              <ProjectCard
                key={repository.id}
                repository={repository}
                onClick={() => router.push(`/projects/${repository.name}`)}
                className="w-full"
              />
            )
          }
        )}

        {viewer.repositories?.pageInfo?.hasNextPage && (
          <button
            type="button"
            className="table m-auto outline-none hover:underline mt-3 text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
            onClick={() => {
              const { endCursor } = viewer.repositories?.pageInfo;

              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult: any, { fetchMoreResult }) => {
                  fetchMoreResult.viewer.repositories.edges = [
                    ...prevResult.viewer.repositories.edges,
                    ...fetchMoreResult.viewer.repositories.edges
                  ];

                  return fetchMoreResult;
                }
              });
            }}
          >
            Voir plus
          </button>
        )}
      </div>
    </PageTransition>
  );
};

const Skeleton = () => (
  <div>
    <div className="w-80 h-8 mb-10 bg-gray-100 rounded-xl animate-pulse" />

    <div className="flex flex-wrap justify-between flex-auto">
      <div className="w-full mb-3 p-20 bg-gray-100 rounded-md animate-pulse" />
      <div className="w-full mb-3 p-20 bg-gray-100 rounded-md animate-pulse" />
      <div className="w-full mb-3 p-20 bg-gray-100 rounded-md animate-pulse" />
      <div className="w-full mb-3 p-20 bg-gray-100 rounded-md animate-pulse" />
    </div>
  </div>
);

export default ProjectsListPage;
