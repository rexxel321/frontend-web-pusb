"use client";

import React from "react";
import PDFViewer from "../_components/PDFPreview";

const IndonesianPage = () => {
  return (
    <section className="w-full min-h-[90vh] flex justify-center items-center px-8 lg:px-16 text-white">
      <div className="container h-full pt-2 pb-10 mx-auto">
        <div className="lg:-mx-6 flex flex-col-reverse lg:flex-row-reverse lg:justify-center lg:items-center">
          {/* PDF Viewer */}
          <div className="w-full lg:w-1/2 h-[55vh] lg:h-[90vh] overflow-hidden mt-4 lg:mt-0">
            <div className="h-full overflow-scroll no-scrollbar">
              <PDFViewer isEnglish={false} />
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500 ">“</p>

            <h1 className="text-2xl font-semibold lg:text-3xl lg:w-96">
              Prosedur Operasional Standar untuk Meningkatkan Produktivitas
            </h1>

            <p className="max-w-lg mt-6 text-gray-100">
              &quot;SOP kami menyediakan pedoman yang jelas dan proses yang
              terstruktur untuk menyederhanakan tugas, meminimalkan kesalahan,
              dan memaksimalkan efisiensi. Dengan mematuhi praktik standar ini,
              kami bertujuan untuk meningkatkan produktivitas secara keseluruhan,
              mempertahankan standar kualitas tinggi, dan memastikan konsistensi
              di seluruh operasi.&quot;
            </p>

            <h3 className="mt-6 text-lg font-medium text-blue-500">PUSB</h3>
            <p className="text-gray-100">President University Student Board</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndonesianPage;
