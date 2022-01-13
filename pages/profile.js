import { getSession } from "next-auth/react";
import Profile from "../common/components/Profile";

const ProfilePage = (props) => {
  return (
    <div>
      <Profile session={props.session} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

export default ProfilePage;
