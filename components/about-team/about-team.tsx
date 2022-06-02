import Member from "./member/member";
import MarcFace from "../../assets/margelo-members/marc-face.svg";
import SzymonFace from "../../assets/margelo-members/szymon-face.svg";
import ThomasFace from "../../assets/margelo-members/thomas-face.svg";
import ChristophFace from "../../assets/margelo-members/christoph-face.svg";
import JanicFace from "../../assets/margelo-members/janic-face.svg";
import CatalinFace from "../../assets/margelo-members/catalin-face.svg";
import MoFace from "../../assets/margelo-members/mo-face.svg";
import EricFace from "../../assets/margelo-members/eric-face.svg";
import MateiFace from "../../assets/margelo-members/matei-face.svg";
import ViktoriaFace from "../../assets/margelo-members/viktoria-face.svg";

const AboutTeam: React.FC = () => {
  return (
    <>
      <section className="bg-white text-3xl flex flex-col py-10">
        <div className="container mx-auto px-11">
          <p className="text-3xl leading-tight tracking-tight mx-auto lg:text-4xl">
            <strong>We will help you ship better apps, faster.</strong> Our team
            of expert engineers has created the best user experiences in some of
            the most popular apps worldwide.
          </p>
        </div>
        <div className="container text-center mx-auto">
          <div className="my-10">
            <h2>
              <strong className="text-4xl">Our Team</strong>
            </h2>
            <p className="text-xl">the &ldquo;spec-ops&rdquo;</p>
          </div>
          <section className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-20">
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

export default AboutTeam;
