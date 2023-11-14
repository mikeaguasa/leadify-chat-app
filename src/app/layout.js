import { Poppins } from "next/font/google";
import "./globals.css";
import "react-chat-elements/dist/main.css";
import Image from "next/image";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Leadify Web Chat Application",
  description: "Created by Leadify Development Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <footer className="footer">
          <div className="footer-top bg-[#E1E1E1]">
            <div className="container mx-auto px-5 py-10 md:py-16 text-justify">
              <p className="mb-3 text-[12px]">
                Leadify is a referral service, we refer all enquiries that are
                initiated on this website to partners who are licensed to
                provide their respective products and/or services and quotes. We
                receive referral fees and commissions from third parties
                companies for making these introductions. Although we cover a
                wide range of products and services, we don’t cover every
                product or service available on the market. In some cases, we
                may not have a large selection of partners on board who can
                service your specific request. This could be due to your
                circumstances that may be unique and only serviceable by a
                particular provider or because Handy Health Insurance only has
                been able to come to an agreement with one product or service
                supplier.
              </p>
              <p className="mb-2 text-[12px]">
                By clicking on the “SUBMIT” button, you agree to proceed with a
                specific product or service offering through a referral from
                <a className="px-1" href="https://Leadify.com.au">
                  https://Leadify.com.au
                </a>
                , you will be dealing directly with the third party companies
                and(or) its representatives of that product or service and no
                longer with
                <a className="px-1" href="https://Leadify.com.au">
                  https://Leadify.com.au
                </a>
                / Leadify. You acknowledge and agree to receive notices, phone
                calls, and any other communications at the email or telephone
                number(s) you provided on your application from the third party
                companies and(or) its representatives of that product or
                service.
              </p>
              <p className="mb-2 text-[12px]">
                Leadify does not guarantee the accuracy of the information on
                the website or given in any other subsequent communication,
                including information provided by contributors or third parties
                at any particular time. You must accept sole responsibility
                associated with using the material on this website, and the
                information on this website is no substitute for financial
                advice. You must not rely on this information to make a
                financial or investment decision. Before making any decision,
                you must seek professional advice to take into account your
                particular personal objectives, financial situation and needs.
              </p>
              <p className="mb-2 text-[12px]">
                By submitting your details on this site, you are agreeing to the
                <a className="px-1" href="terms" target="_blank">
                  Terms &amp; Conditions
                </a>{" "}
                and have read and understood the
                <a className="px-1" href="privacy" target="_blank">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="footer-bottom bg-[#C8C8C8]">
            <div className="container mx-auto px-5 py-6 text-justify">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <p className="float-none pr-2 text-center md:text-left md:float-left m-auto md:m-0">
                    <Image
                      src="/assets/ssl.png"
                      alt="Leadify"
                      className="m-auto md:m-0"
                      width={60}
                      height={60}
                    />
                  </p>
                  <p className="mt-2 mb-2 text-[12px] text-center md:text-left">
                    © Copyright Leadify 2023. All rights reserved.
                  </p>
                  <p className="mb-2 text-[12px] text-center md:text-left">
                    903/50 Clarence St, Sydney, NSW, 2000
                  </p>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-right">
                  <p className="mb-2 text-[12px]">
                    <a
                      className="px-1"
                      href="https://www.leadify.com.au/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms & Conditions
                    </a>
                    |
                    <a
                      className="px-1"
                      href="https://www.leadify.com.au/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    |
                    <a
                      className="px-1"
                      href="https://www.leadify.com.au/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
