import Heading from "@/components/common/Heading";
import Text from "@/components/common/Text";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <>
      <Heading>
        Print Your Ideas,
        <br />
        Wear Your Style.
      </Heading>

      <Text className="mt-6 max-w-xl">
        Create personalized T-Shirts,
        Hoodies, Mobile Covers,
        Mugs and Gifts using our
        powerful Design Studio.
      </Text>

      <HeroButtons />

      <HeroStats />
    </>
  );
}