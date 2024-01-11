import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginTop={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;