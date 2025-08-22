import UserPosts from "@/components/user-profile/user-posts";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;
  return {
    title: `${username}'s Profile Overview | Synths`,
    description: `View the posts and comments of ${username} on Synths`,
  };
};

export default async function page() {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-semibold my-2">Posts</h1>
      <UserPosts />
    </div>
  );
}
