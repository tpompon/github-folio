import ReactMarkdown from 'react-markdown';

type ReadmeProps = {
  text: string;
};

const Readme = ({ text }: ReadmeProps) => (
  <ReactMarkdown
    children={text}
    className="markdown-body"
    allowDangerousHtml={true}
  />
);

export default Readme;
