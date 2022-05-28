import Image from "next/image";
import SliderContainer from "../slider-container/slider-container";
import SliderItem from "../slider-item/slider-item";
import AudubonLogo from "../../assets/clients-logos/audubon.webp";
import CoinBaseLogo from "../../assets/clients-logos/coinbase.webp";
import ExodusLogo from "../../assets/clients-logos/exodus.webp";
import ExpensifyLogo from "../../assets/clients-logos/expensify.webp";
import ExtraLogo from "../../assets/clients-logos/extra.webp";
import LitentryLogo from "../../assets/clients-logos/litentry.webp";
import PicnicLogo from "../../assets/clients-logos/picnic.webp";
import PinkPandaLogo from "../../assets/clients-logos/pinkpanda.webp";
import RainbowLogo from "../../assets/clients-logos/rainbow.webp";
import ScribewareLogo from "../../assets/clients-logos/scribeware.webp";
import ShopifyLogo from "../../assets/clients-logos/shopify.webp";
import ShowTimeLogo from "../../assets/clients-logos/showtime.webp";
import SlingShotLogo from "../../assets/clients-logos/slingshot.webp";
import SnapCalorieLogo from "../../assets/clients-logos/snapcalorie.webp";
import StatusLogo from "../../assets/clients-logos/status.webp";
import SteakWalletLogo from "../../assets/clients-logos/steakwallet.webp";
import StoriLogo from "../../assets/clients-logos/stori.webp";
import TocsenLogo from "../../assets/clients-logos/tocsen.webp";
import WalletConnectLogo from "../../assets/clients-logos/walletconnect.webp";

const ClientsLogos: React.FC = () => {
  return (
    <>
      <SliderContainer initialOffsetX={0} contentWidth={1290}>
        <SliderItem width={150}>
          <Image
            src={AudubonLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={CoinBaseLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ExodusLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ExpensifyLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ExtraLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={LitentryLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={PicnicLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={PinkPandaLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={RainbowLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ScribewareLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
      <SliderContainer initialOffsetX={75} contentWidth={1290}>
        <SliderItem width={150}>
          <Image
            src={ShopifyLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ShowTimeLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={SlingShotLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={SnapCalorieLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={StatusLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={SteakWalletLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={StoriLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={TocsenLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={WalletConnectLogo}
            width={150}
            height={50}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientsLogos;
