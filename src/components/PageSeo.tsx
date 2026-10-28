import { Helmet } from "react-helmet-async";

interface PageSeoProps {
  title: string;
  description: string;
  path: string;
}

const PageSeo = ({ title, description, path }: PageSeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`https://success369.org${path}`} />
  </Helmet>
);

export default PageSeo;
