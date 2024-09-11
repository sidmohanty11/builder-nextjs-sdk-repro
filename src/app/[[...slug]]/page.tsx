import { Content, fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-react-nextjs";

interface MyPageProps {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
}

const apiKey = "ad30f9a246614faaa6a03374f83554c9";

export default async function Page(props: MyPageProps) {
  // NOTE: the import must be inside the Page component itself.
  // @ts-ignore
  const { initializeNodeRuntime } = await import("@builder.io/sdk-react-nextjs/node/init");
  initializeNodeRuntime();

  const urlPath = "/data-symbols";

  const content = await fetchOneEntry({
    model: "page",
    apiKey,
    options: getBuilderSearchParams(props.searchParams),
    userAttributes: { urlPath },
  });

  return <Content content={content} model="page" apiKey={apiKey} />;
}
export const revalidate = 1;
