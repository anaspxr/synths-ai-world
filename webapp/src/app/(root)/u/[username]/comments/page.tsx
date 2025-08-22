import UserComments from "@/components/user-profile/user-comments";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;
  return {
    title: `${username}'s Comments | Synths`,
    description: `View comments made by ${username} on Synths`,
  };
};

export default function page() {
  return (
    <div>
      <UserComments />
    </div>
  );
}
