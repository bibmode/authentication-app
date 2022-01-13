import { MongoClient } from "mongodb";
import { getSession } from "next-auth/react";
import Profile from "../common/components/Profile";

const ProfilePage = (props) => {
  return (
    <div>
      <Profile session={props.session} user={props.user} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  //connect to database
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URI);

  //get info of logged in user
  const db = client.db();
  const users = db.collection("users");
  const [userInfo] = await users.find({ email: session.user.email }).toArray();
  client.close();
  console.log(userInfo);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      user: {
        email: userInfo.email,
        password: userInfo.password,
        bio: userInfo.bio,
        name: userInfo.name,
      },
    },
  };
};

export default ProfilePage;
