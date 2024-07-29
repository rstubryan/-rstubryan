import ContentTitle from "@/components/molecules/ContentTitle";
import BaseText from "@/components/atoms/BaseText";

export default function BlogContent() {
  return (
    <>
      <ContentTitle heading={`Blog`} description={``} />
      <div className="container mx-auto flex items-center justify-center">
        <BaseText className={`text-center`}>Coming soon</BaseText>
      </div>
    </>
  );
}
