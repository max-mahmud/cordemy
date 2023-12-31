import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Success = ({ session }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  return (
    <div className="wrapper py-10 min-h-screen">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl flex items-center gap-2">
          <span className="text-emerald-500">
            <AiOutlineCheckCircle />
          </span>{" "}
          {"You've entrolled successfully!"}
        </h2>
        <Button href="/" placeholder="Got to Home Page" />
      </div>
    </div>
  );
};

export default Success;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
