import React from 'react';
import { useQuery } from '@apollo/client';
import queryGetViewer from 'graphql/getViewer.graphql';
import Emoji from 'react-emoji-render';
import { motion } from 'framer-motion';
import CodeLanguageBar from 'components/CodeLanguageBar';
import CodeLanguage from 'components/CodeLanguage';
import { parseAllRepositoriesLanguages } from 'utils';
import { GetViewer } from 'graphql/@types/GetViewer';

type Language = {
  name: string;
  color: string;
  percentage: number;
};

const Profile = () => {
  let viewer;
  let languages;

  const { data, loading, error } = useQuery<GetViewer, void>(queryGetViewer);

  if (loading) return <Skeleton />;
  if (error) return <div>An error occured</div>;

  if (data) {
    viewer = data.viewer;
    languages = parseAllRepositoriesLanguages(data.viewer.repositories);
  } else return null;

  return (
    <motion.div initial="hidden" animate="visible" variants={motionVariants}>
      <div className="relative mx-auto w-56 h-56">
        <img
          src={viewer.avatarUrl}
          alt={`Avatar de ${viewer.name}`}
          className="w-58 h-58 object-cover object-center rounded-full border-4 border-white pointer-events-none select-none"
        />

        {viewer.status?.emoji && (
          <div className="absolute w-9 h-9 bg-white border shadow-lg rounded-full bottom-6 right-1">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Emoji text={viewer.status.emoji} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="my-5 text-center">
        <h1 className="text-xl font-bold">{viewer.name}</h1>
        <a
          href={viewer.url}
          target="_blank"
          className="text-large hover:underline"
        >
          @{viewer.login}
        </a>
      </div>

      <p className="text-center my-5 h-20">{viewer.bio}</p>

      {languages && (
        <div className="my-5">
          <h3 className="font-medium text-xl mb-3">My languages</h3>
          <CodeLanguageBar languages={languages} />

          <div className="flex flex-row flex-wrap w-full">
            {languages.map(({ name, color, percentage }: Language) => (
              <CodeLanguage
                key={`language-code-${name}`}
                name={name}
                color={color}
                percentage={percentage}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Skeleton = () => (
  <>
    <div className="relative mx-auto w-56 h-56">
      <div className="bg-gray-100 animate-pulse w-full h-full rounded-full" />
      <div className="bg-gray-100 animate-pulse absolute w-10 h-10 rounded-full bottom-4 right-0" />
    </div>

    <div className="my-5 animate-pulse">
      <div className="m-auto mb-3 bg-gray-100 rounded-full w-20 p-6" />
      <div className="m-auto bg-gray-100 rounded-full w-12 p-4" />
    </div>

    <div className="m-auto bg-gray-100 mt-5 rounded-2xl animate-pulse h-20 w-full" />

    <div className="w-full mb-4 h-4 bg-gray-100 rounded-md animate-pulse" />

    <div className="flex flex-row flex-wrap w-full">
      <div className="w-20 h-6 bg-gray-100 rounded-md mr-3 mb-3 animate-pulse" />
      <div className="w-32 h-6 bg-gray-100 rounded-md mr-3 mb-3 animate-pulse" />
      <div className="w-32 h-6 bg-gray-100 rounded-md mr-3 mb-3 animate-pulse" />
      <div className="w-36 h-6 bg-gray-100 rounded-md mr-3 mb-3 animate-pulse" />
      <div className="w-56 h-6 bg-gray-100 rounded-md mr-3 mb-3 animate-pulse" />
      <div className="w-32 h-6 bg-gray-100 rounded-md mr-3 mb-3 animate-pulse" />
      <div className="w-48 h-6 bg-gray-100 rounded-md mr-3 mb-3 animate-pulse" />
    </div>
  </>
);

const motionVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3
    }
  }
};

export default Profile;
