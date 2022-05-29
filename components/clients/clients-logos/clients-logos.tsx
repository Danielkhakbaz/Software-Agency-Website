import Image from "next/image";
import SliderContainer from "../slider-container/slider-container";
import SliderItem from "../slider-item/slider-item";
import AudubonLogo from "../../../assets/slider-logos/audubon-company.webp";
import CoinBaseLogo from "../../../assets/slider-logos/coinbase-company.webp";
import ExodusLogo from "../../../assets/slider-logos/exodus-company.webp";
import ExpensifyLogo from "../../../assets/slider-logos/expensify-company.webp";
import ExtraLogo from "../../../assets/slider-logos/extra-company.webp";
import LitentryLogo from "../../../assets/slider-logos/litentry-company.webp";
import PicnicLogo from "../../../assets/slider-logos/picnic-company.webp";
import PinkPandaLogo from "../../../assets/slider-logos/pinkpanda-company.webp";
import RainbowLogo from "../../../assets/slider-logos/rainbow-company.webp";
import ScribewareLogo from "../../../assets/slider-logos/scribeware-company.webp";
import ShopifyLogo from "../../../assets/slider-logos/shopify-company.webp";
import ShowTimeLogo from "../../../assets/slider-logos/showtime-company.webp";
import SlingShotLogo from "../../../assets/slider-logos/slingshot-company.webp";
import SnapCalorieLogo from "../../../assets/slider-logos/snapcalorie-company.webp";
import StatusLogo from "../../../assets/slider-logos/status-company.webp";
import SteakWalletLogo from "../../../assets/slider-logos/steakwallet-company.webp";
import StoriLogo from "../../../assets/slider-logos/stori-company.webp";
import TocsenLogo from "../../../assets/slider-logos/tocsen-company.webp";
import WalletConnectLogo from "../../../assets/slider-logos/walletconnect-company.webp";

const ClientsLogos: React.FC = () => {
  return (
    <>
      <SliderContainer initialOffsetX={0} contentWidth={1290}>
        <SliderItem width={150}>
          <Image
            src={AudubonLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Audubon logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={CoinBaseLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="CoinBase logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ExodusLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Exodus logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ExpensifyLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Expensify logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ExtraLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Extra logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={LitentryLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Litentry logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={PicnicLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Picnic logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={PinkPandaLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="PinkPanda logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={RainbowLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Rainbow logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ScribewareLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Scribeware logo"
          />
        </SliderItem>
      </SliderContainer>
      <SliderContainer initialOffsetX={75} contentWidth={1290}>
        <SliderItem width={150}>
          <Image
            src={ShopifyLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Shopify logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={ShowTimeLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="ShowTime logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={SlingShotLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="SlingShot logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={SnapCalorieLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="SnapCalorie logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={StatusLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Status logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={SteakWalletLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="SteakWallet logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={StoriLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Stori logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={TocsenLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="Tocsen logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={WalletConnectLogo}
            width={150}
            height={50}
            objectFit="contain"
            alt="WalletConnect logo"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientsLogos;
