import HeadingText from "@/components/atoms/HeadingText";
import BaseText from "@/components/atoms/BaseText";

interface ContentTitleProps {
  heading: string;
  description: string;
}

export default function ContentTitle({
  heading,
  description,
}: ContentTitleProps) {
  return (
    <>
      <div className={"text-start lg:mt-[2.5rem] mt-[2rem]"}>
        <HeadingText className={"mb-3"}>{heading}</HeadingText>
        <BaseText className={"text-justify leading-7"}>{description}</BaseText>
      </div>
    </>
  );
}
