import PartnerLogo1 from "./svg-icons/partner-logo-1";
import PartnerLogo2 from "./svg-icons/partner-logo-2";
import PartnerLogo3 from "./svg-icons/partner-logo-3";
import PartnerLogo4 from "./svg-icons/partner-logo-4";
import PartnerLogo5 from "./svg-icons/partner-logo-5";

function PartnerBanner() {
  return (
    <div className="w-full bg-black-50 py-20">
      <div className="container flex justify-between ">
        <PartnerLogo1 />
        <PartnerLogo2 />
        <PartnerLogo3 />
        <PartnerLogo4 />
        <PartnerLogo5 />
      </div>
    </div>
  );
}

export default PartnerBanner;
