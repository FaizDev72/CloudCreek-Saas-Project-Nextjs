import { currentUser } from "@clerk/nextjs/server";
import { Plan } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: { plan: Plan; state: string; code: string };
}) => {
  // const agencyId = await verifyAndAcceptInvitation()
  // console.log(agencyId);

  return <div>Agency</div>;
};

export default Page;
