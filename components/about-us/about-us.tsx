import Member from "../member/member";
import MarcFace from "../../assets/margelo-team/marc-face.svg";
import SzymonFace from "../../assets/margelo-team/szymon-face.svg";
import ThomasFace from "../../assets/margelo-team/thomas-face.svg";
import ChristophFace from "../../assets/margelo-team/christoph-face.svg";
import JanicFace from "../../assets/margelo-team/janic-face.svg";
import CatalinFace from "../../assets/margelo-team/catalin-face.svg";
import MoFace from "../../assets/margelo-team/mo-face.svg";
import EricFace from "../../assets/margelo-team/eric-face.svg";
import MateiFace from "../../assets/margelo-team/matei-face.svg";
import ViktoriaFace from "../../assets/margelo-team/viktoria-face.svg";

const AboutUs: React.FC = () => {
  return (
    <>
      <section className="flex flex-col py-20 text-3xl bg-white md:text-4xl">
        <div className="container mx-auto px-11">
          <p className="mx-auto text-3xl leading-tight tracking-tight md:text-4xl">
            <strong>We will help you ship better apps, faster.</strong> Our team
            of expert engineers has created the best user experiences in some of
            the most popular apps worldwide.
          </p>
        </div>
        <div className="container mx-auto text-center">
          <div className="my-10">
            <h2>
              <strong>Our Team</strong>
            </h2>
            <p className="text-xl">the &ldquo;spec-ops&rdquo;</p>
          </div>
          <section className="grid grid-cols-2 gap-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-20">
            <Member name="Marc" image={MarcFace} socialId="@mrousavy" />
            <Member name="Szymon" image={SzymonFace} socialId="@szymon20000" />
            <Member
              name="Thomas"
              image={ThomasFace}
              socialId="@thomas-coldwell"
            />
            <Member
              name="Christoph"
              image={ChristophFace}
              socialId="@chrispader"
            />
            <Member name="Janic" image={JanicFace} socialId="@janicduplessis" />
            <Member
              name="Catalin"
              image={CatalinFace}
              socialId="@catalinmiron"
            />
            <Member name="Mo" image={MoFace} socialId="@gorhom" />
            <Member name="Eric" image={EricFace} socialId="@ericvicenti" />
            <Member name="Matei" image={MateiFace} socialId="@mateioprea" />
            <Member
              name="Viktoria"
              image={ViktoriaFace}
              socialId="@viktoria.psd"
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
