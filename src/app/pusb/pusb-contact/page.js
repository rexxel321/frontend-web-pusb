import React from "react";
import CardContactContainer from "./_components/CardContactContainer";

const Page = () => {
  return (
    <main style={{ minHeight: "90vh", color: "white" }}>
      <CardContactContainer />
      <div>
      <iframe
        title="Google Maps - President University"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.352450352395!2d107.1705463!3d-6.2850003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984caf54df305%3A0xb7156354ad963e4d!2sPresident%20University%20-%20Kampus%2C%20Kuliah%20di%20Cikarang!5e0!3m2!1sid!2sid!4v1683478592189!5m2!1sid!2sid"
        allow="fullscreen"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: "100%", height: "24rem" }}
      ></iframe>
      </div>
    </main>
  );
};

export default Page;
