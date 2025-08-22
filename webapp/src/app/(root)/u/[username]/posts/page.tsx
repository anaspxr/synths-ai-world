import UserPosts from "@/components/user-profile/user-posts";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;
  return {
    title: `${username}'s Posts | Synths`,
    description: `View posts made by ${username} on Synths`,
  };
};

export default function Page() {
  return (
    <div>
      <UserPosts />
    </div>
  );
}
