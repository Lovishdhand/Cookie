import AcceptAllCookie from "./AcceptAllCookie";
import NecessaryCookie from "./NecessaryCookie";
import { RxCross1 } from "react-icons/rx";
import ManageConsent from "./ManageConsent";
import { useState } from "react";

function CookieConsent({ close,accept,Allnecessary,sendintialCookie,singleCookie }) {
console.log('accept',sendintialCookie);
  return (
    <>
      <div
        style={{
          backgroundColor: "#252627",
          fontSize: "20px",
          height: "700px",
          width: "600px",
          position: "absolute",
          bottom: "0px",
          left: "700px",
          borderRadius: "7px",
          height: "700px",
          overflowY: "auto",
          paddingRight: "10px",

          marginBottom: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            height: "50px",
            width: "570px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 15px",
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
          }}
        >
          <h2 style={{ margin: 0 }}>stackoverflow</h2>
          <RxCross1
            style={{
              height: "24px",
              width: "24px",
              cursor: "pointer",
            }}
            onClick={() => {
              // alert("hello");
              close(false);
            }}
          />
        </div>
        <div
          style={{
            color: "#d6d8db",
            textAlign: "start",
            marginLeft: "25px",
            marginRight: "20px",
          }}
        >
          <h3>Cookie Consent Preference Center</h3>
          <p style={{ fontSize: "15px" }}>
            When you visit any of our websites, it may store or retrieve
            information on your browser, mostly in the form of cookies. This
            information might be about you, your preferences, or your device and
            is mostly used to make the site work as you expect it to. The
            information does not usually directly identify you, but it can give
            you a more personalized experience. Because we respect your right to
            privacy, you can choose not to allow some types of cookies. Click on
            the different category headings to find out more and manage your
            preferences. Please note, blocking some types of cookies may impact
            your experience of the site and the services we are able to offer.
            <br />
            Cookie Policy
          </p>
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
          <AcceptAllCookie color={"#90c4f9"} acceptAll={accept} />

          {/* </div> */}
        </div>
        <div
          style={{
            color: "#d6d8db",
            textAlign: "start",
            marginLeft: "25px",
            marginRight: "20px",
          }}
        >
          <h4>Manage Consent Preferences</h4>

          <div style={{ border: "1px solid white" }}>
            <ManageConsent  value={sendintialCookie.strictlynecessarycookies} cookie={singleCookie}  cookieKey="strictlynecessarycookies"
              title="Strictly Necessary Cookies"
              description="These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.Cookies Details‎"
            />
            <ManageConsent  value={sendintialCookie.performancecookies}
            cookie={singleCookie} 
            cookieKey="performancecookies"
              title="Performance Cookies"
              description="These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.Cookies Details‎"
            />
            <ManageConsent  value={sendintialCookie.functionalcookies}
            cookie={singleCookie} 
            cookieKey="functionalcookies"
              title="Functional Cookies"
              description="These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.Cookies Details‎
"
            />
            <ManageConsent  value={sendintialCookie.targetingcookies}
            cookie={singleCookie} 
             cookieKey="targetingcookies"
              title="Targeting Cookies"
              description="These cookies are used to make advertising messages more relevant to you and may be set through our site by us or by our advertising partners. They may be used to build a profile of your interests and show you relevant advertising on our site or on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.Cookies Details‎
"
            />
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid white",
            height: "100px",
            marginTop: "15px",
            position: "sticky",
            bottom:0,
            backgroundColor: "#252627", 
           
          }}
        >
          <div style={{ height: "80px", marginTop: "15px" }}>
            <NecessaryCookie color={"#90c4f9"} margin={60} necessary={Allnecessary} />
            <button style={{ backgroundColor: "#90c4f9", marginLeft: "30px" }} onClick={()=>{
              close(false);
            }}>
              Confirm my choices
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CookieConsent;
