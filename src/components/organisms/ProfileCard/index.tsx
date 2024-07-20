import React from "react";
import ImagePlaceholder from "@/components/atoms/ImagePlacholder";
import SnsCard from "@/components/molecules/SnsCard";
import ProfileInfo from "@/components/molecules/ProfileInfo";
import SubHeadingText from "@/components/atoms/SubHeadingText";
import BaseText from "@/components/atoms/BaseText";

interface TitleTextProps {
  heading: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ProfileCard() {
  const userName = "Restu (@rstubryan)";
  const userRole = "Web Developer";

  return (
    <>
      <aside className="bg-white dark:bg-secondary shadow-md w-full lg:w-[500px] h-max pt-6 p-10 rounded-xl z-0 relative">
        <div className="mt-[-5rem]">
          <ImagePlaceholder className={`mx-auto`} />
        </div>
        <TitleText
          heading={userName}
          description={userRole}
          className={`text-center my-5`}
        />
        <SnsCard className={`justify-center`} />
        <ProfileInfo />
      </aside>
    </>
  );
}

const TitleText = ({ heading, description, className }: TitleTextProps) => {
  return (
    <>
      <div className={`${className}`}>
        <SubHeadingText>{heading}</SubHeadingText>
        <BaseText className={"text-primary/70"}>{description}</BaseText>
      </div>
    </>
  );
};
