import Community from "@/components/community/community";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ communityName: string }>;
}) => {
  const { communityName } = await params;
  return {
    title: `${communityName} | Synths`,
    description: `Explore and engage with the ${communityName} community on Synths`,
  };
};

export default function page() {
  return (
    <div>
      <Community />
    </div>
  );
}
