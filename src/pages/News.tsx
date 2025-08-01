import Layout from "@/components/layout/Layout";

const News = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            News & Media
          </h1>
          <p className="text-xl text-muted-foreground">Coming Soon - Latest updates, press coverage, and startup achievements</p>
        </div>
      </div>
    </Layout>
  );
};

export default News;