import cer1 from "../../assets/certifications/c1.png";
import cer2 from "../../assets/certifications/c2.png";
import cer3 from "../../assets/certifications/c3.png";
import cer4 from "../../assets/certifications/c4.png";
import cer5 from "../../assets/certifications/c5.png";

import {
  Facebook,
  Instagram,
  LocalPhone,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div>
      <footer className="p-10 bg-primary text-gray-50">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-xl">Need Help</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-50">
              <a rel="noopener noreferrer" href="#">
                <span>
                  <LocationOn className="text-secondary" />
                </span>{" "}
                Ka 11/2A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>
                  <EmailIcon className="text-secondary" />
                </span>{" "}
                support@flyfarint.com
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>
                  <LocalPhone className="text-secondary" />
                </span>{" "}
                +880 1755 572 099
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>
                  <Facebook />
                </span>{" "}
                <span>
                  <Instagram />
                </span>{" "}
                <span>
                  <WhatsApp />
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-xl">Discover</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-50">
              <a rel="noopener noreferrer" href="#">
                About
              </a>
              <a rel="noopener noreferrer" href="#">
                Contact Us
              </a>
              <a rel="noopener noreferrer" href="#">
                Payment Method
              </a>
              <a rel="noopener noreferrer" href="#">
                Terms and Conditions
              </a>
              <a rel="noopener noreferrer" href="#">
                Privacy Policy
              </a>
              <a rel="noopener noreferrer" href="#">
                Refund & Cancellation Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-xl">Certification</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <a
                className="flex gap-5 flex-wrap"
                rel="noopener noreferrer"
                href="#"
              >
                <img className="w-20 h-12" src={cer1} alt="" />
                <img className="w-20 h-12" src={cer2} alt="" />
                <img className="w-20 h-12" src={cer3} alt="" />
                <img className="w-20 h-12" src={cer4} alt="" />
                <img className="w-20 h-12" src={cer5} alt="" />
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-xl">Get In Touch</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-50">
              <a rel="noopener noreferrer" href="#">
                Question or feedback we would love to hear from you
              </a>

              <div
                className="relative rounded-full outline bg-primary
                text-white px-5 py-2"
              >
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full bg-primary"
                />
                <SendIcon
                  sx={{
                    transform: "rotate(-45deg)", 
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="text-primary absolute right-3 top-1 p-1 h-20 w-20 text-xl bg-white rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <img
            className="w-[50rem]"
            src="https://cdn.flyfarint.com/WL/B2C/PaymentGetWay/FFA2654/paymentgetwayimg.webp?t=1744408513102"
            alt=""
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
